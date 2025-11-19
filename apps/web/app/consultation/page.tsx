'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        const data = await response.json();
        
        // If it's a server configuration error, fall back to mailto
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
      // Fall back to mailto on network error
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-8 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Book Your <span className="text-blue-400">Consultation</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
              Let's discuss how B Automations can transform your operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative px-8 py-12 pb-24">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
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
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
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
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
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
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                  placeholder="Tell us about your automation needs and goals..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-zinc-700 hover:border-zinc-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
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
                <p className="text-sm text-zinc-500 text-center">
                  We typically respond within 24 hours
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center space-y-4"
          >
            <p className="text-zinc-400">Or reach us directly at:</p>
            <div className="space-y-2">
              <p className="text-white text-lg">
                <a href="mailto:dbalogh@udel.edu" className="hover:text-blue-400 transition-colors">
                  dbalogh@udel.edu
                </a>
              </p>
              <p className="text-zinc-400">(717) 891-9419</p>
                </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">B Automations</h3>
              <p className="text-zinc-400 text-sm">
                Enterprise automation solutions powered by AI
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="/about" className="hover:text-white cursor-pointer transition">About</a></li>
                <li className="hover:text-white cursor-pointer transition">Case Studies</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Contact</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>dbalogh@udel.edu</li>
                <li>(717) 891-9419</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © 2025 B Automations
            </p>
            <div className="flex gap-6 text-sm text-zinc-500">
              <a href="/privacy" className="hover:text-white cursor-pointer transition">Privacy</a>
              <a href="/terms" className="hover:text-white cursor-pointer transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
