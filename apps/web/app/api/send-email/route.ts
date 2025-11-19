import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting storage (in-memory)
// In production, consider using Redis or a database
const ipRateLimits = new Map<string, { count: number; resetTime: number }>();
const emailRateLimits = new Map<string, { count: number; resetTime: number }>();
const recentSubmissions = new Map<string, number>();

// Configuration
const RATE_LIMIT_CONFIG = {
  maxRequestsPerIP: 3, // Max 3 submissions per IP per hour
  maxRequestsPerEmail: 2, // Max 2 submissions per email per hour
  cooldownMinutes: 5, // Min 5 minutes between submissions from same IP
  windowMs: 60 * 60 * 1000, // 1 hour
};

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  
  // Clean IP rate limits
  for (const [key, value] of ipRateLimits.entries()) {
    if (now > value.resetTime) {
      ipRateLimits.delete(key);
    }
  }
  
  // Clean email rate limits
  for (const [key, value] of emailRateLimits.entries()) {
    if (now > value.resetTime) {
      emailRateLimits.delete(key);
    }
  }
  
  // Clean recent submissions
  for (const [key, value] of recentSubmissions.entries()) {
    if (now - value > RATE_LIMIT_CONFIG.cooldownMinutes * 60 * 1000) {
      recentSubmissions.delete(key);
    }
  }
}, 10 * 60 * 1000); // Clean every 10 minutes

function getClientIP(request: NextRequest): string {
  // Try various headers for IP address
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfConnectingIP) {
    return cfConnectingIP;
  }
  
  return 'unknown';
}

function checkRateLimit(identifier: string, limitsMap: Map<string, { count: number; resetTime: number }>, maxRequests: number): boolean {
  const now = Date.now();
  const record = limitsMap.get(identifier);
  
  if (!record || now > record.resetTime) {
    // Reset or create new record
    limitsMap.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs,
    });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false; // Rate limit exceeded
  }
  
  record.count++;
  return true;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function containsSuspiciousContent(text: string): boolean {
  const suspiciousPatterns = [
    /https?:\/\//gi, // URLs (multiple)
    /<script/gi,
    /<iframe/gi,
    /javascript:/gi,
    /onclick/gi,
    /onerror/gi,
  ];
  
  let urlCount = 0;
  const urlMatches = text.match(/https?:\/\//gi);
  if (urlMatches) urlCount = urlMatches.length;
  
  // Allow 1 URL, but flag if more
  if (urlCount > 1) return true;
  
  // Check other suspicious patterns
  return suspiciousPatterns.slice(1).some(pattern => pattern.test(text));
}

export async function POST(request: NextRequest) {
  console.log('📧 Email API called');
  
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    console.log('Form data received:', { name, email, company: company || 'N/A' });

    // Validate required fields
    if (!name || !email || !message) {
      console.error('❌ Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check for suspicious content
    const fullText = `${name} ${email} ${company || ''} ${message}`;
    if (containsSuspiciousContent(fullText)) {
      console.warn('Suspicious content detected:', { email, name });
      return NextResponse.json(
        { error: 'Invalid content detected' },
        { status: 400 }
      );
    }

    // Get client IP
    const clientIP = getClientIP(request);

    // RATE LIMITING TEMPORARILY DISABLED FOR TESTING
    /*
    // Check cooldown period (prevent rapid successive submissions)
    const lastSubmission = recentSubmissions.get(clientIP);
    if (lastSubmission) {
      const timeSinceLastSubmission = Date.now() - lastSubmission;
      const cooldownMs = RATE_LIMIT_CONFIG.cooldownMinutes * 60 * 1000;
      
      if (timeSinceLastSubmission < cooldownMs) {
        const remainingMinutes = Math.ceil((cooldownMs - timeSinceLastSubmission) / 60000);
        return NextResponse.json(
          { error: `Please wait ${remainingMinutes} minute(s) before submitting again` },
          { status: 429 }
        );
      }
    }

    // Check IP-based rate limit
    if (!checkRateLimit(clientIP, ipRateLimits, RATE_LIMIT_CONFIG.maxRequestsPerIP)) {
      console.warn('IP rate limit exceeded:', clientIP);
      return NextResponse.json(
        { error: 'Too many requests from this IP. Please try again later.' },
        { status: 429 }
      );
    }

    // Check email-based rate limit
    if (!checkRateLimit(email.toLowerCase(), emailRateLimits, RATE_LIMIT_CONFIG.maxRequestsPerEmail)) {
      console.warn('Email rate limit exceeded:', email);
      return NextResponse.json(
        { error: 'Too many requests from this email. Please try again later.' },
        { status: 429 }
      );
    }
    */

    // Validate field lengths
    if (name.length > 100 || email.length > 100 || (company && company.length > 100) || message.length > 2000) {
      return NextResponse.json(
        { error: 'Input too long' },
        { status: 400 }
      );
    }

    // Record this submission (DISABLED FOR TESTING)
    // recentSubmissions.set(clientIP, Date.now());

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.error('❌ RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    console.log('✅ API key found, attempting to send email...');

    // Send email using Resend
    const emailData = {
      from: 'B Automations <onboarding@resend.dev>',
      to: 'dbalogh@udel.edu',
      replyTo: email,
      subject: `New Consultation Request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Submitted from IP: ${clientIP}</p>
      `,
    };

    console.log('Sending email with data:', { from: emailData.from, to: emailData.to, subject: emailData.subject });

    const data = await resend.emails.send(emailData);

    console.log('✅ Email sent successfully!');
    console.log('Response from Resend:', data);

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error sending email:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    
    // Log more details if it's a Resend error
    if (error && typeof error === 'object' && 'message' in error) {
      console.error('Error message:', error.message);
    }
    
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

