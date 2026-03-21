'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        const data = await response.json();
        if (response.status === 500) {
          console.warn('Email service not configured, using mailto fallback');
          const subject = encodeURIComponent(`Consultation Request from ${formData.name}`);
          const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not provided'}\n\nMessage:\n${formData.message}`
          );
          window.location.href = `mailto:dbalogh@udel.edu?subject=${subject}&body=${body}`;
          setSubmitStatus('success');
          setFormData({ name: '', email: '', company: '', message: '' });
        } else {
          setSubmitStatus('error');
          setErrorMessage(data.error || 'Failed to send message. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const subject = encodeURIComponent(`Consultation Request from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not provided'}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:dbalogh@udel.edu?subject=${subject}&body=${body}`;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-zinc-950 pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white">
            Book Your <span className="text-blue-400">Consultation</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto">
            Let's discuss how B Automations can transform your operations
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-zinc-950 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pb-16 sm:pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm sm:text-base"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm sm:text-base"
                  placeholder="your.email@company.com"
                />
              </div>

              {/* Company Field */}
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-zinc-300">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm sm:text-base"
                  placeholder="Your company name"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell us about your automation needs and goals..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-sm text-green-400 text-center">
                  ✓ Message sent successfully! We'll get back to you within 24 hours.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-400 text-center">
                  ✗ {errorMessage}
                </p>
              )}
              {submitStatus === 'idle' && (
                <p className="text-sm text-zinc-600 text-center">
                  We typically respond within 24 hours
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-8 sm:mt-12 text-center space-y-3 sm:space-y-4">
            <p className="text-zinc-500 text-sm sm:text-base">Or reach us directly at:</p>
            <p className="text-white text-base sm:text-lg">
              <a href="mailto:dbalogh@udel.edu" className="hover:text-blue-400 transition-colors">
                dbalogh@udel.edu
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">B Automations</h3>
              <p className="text-zinc-500 text-sm">Enterprise automation solutions powered by AI</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/solutions" className="hover:text-white transition">Solutions</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Contact</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>dbalogh@udel.edu</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-sm">© 2025 B Automations</p>
            <div className="flex gap-6 text-sm text-zinc-600">
              <a href="/privacy" className="hover:text-white transition">Privacy</a>
              <a href="/terms" className="hover:text-white transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
