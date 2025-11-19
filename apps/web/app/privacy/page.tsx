'use client';

import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[30vh] flex items-center justify-center px-8 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Privacy Policy
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative px-8 py-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 md:p-12 space-y-8"
        >
          <p className="text-zinc-400 leading-relaxed">
            At BAutomation, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            <p className="text-zinc-400 leading-relaxed">
              We may collect the following types of data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
              <li><strong className="text-white">Contact Information:</strong> Name, email address, business name (optional), and message details submitted via our contact form.</li>
              <li><strong className="text-white">Usage Data:</strong> Anonymous data like browser type, time spent on the site, or pages visited (via tools like Google Analytics).</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">How We Use Your Data</h2>
            <p className="text-zinc-400 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
              <li>Respond to inquiries and communicate with you</li>
              <li>Provide and improve our services</li>
              <li>Analyze site performance and user experience</li>
              <li>Send occasional updates or service-related messages (with your permission)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">How We Protect Your Information</h2>
            <p className="text-zinc-400 leading-relaxed">
              We use modern security measures and tools to protect your data from unauthorized access or misuse. We never sell or trade your personal information.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Third-Party Services</h2>
            <p className="text-zinc-400 leading-relaxed">
              We may use trusted third-party services (like Google Sheets or analytics tools) to help us operate our business. These providers only access your data as needed to perform their services and are required to keep it secure.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Your Rights</h2>
            <p className="text-zinc-400 leading-relaxed">
              You may request access to, correction of, or deletion of your personal data by contacting us at{' '}
              <a href="mailto:dbalogh@udel.edu" className="text-blue-400 hover:text-blue-300 transition-colors">
                dbalogh@udel.edu
              </a>
              . We'll respond within a reasonable timeframe.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Updates to This Policy</h2>
            <p className="text-zinc-400 leading-relaxed">
              We may update this Privacy Policy as needed. Any changes will be posted on this page with a new effective date.
            </p>
          </div>

          <div className="space-y-4 pt-8 border-t border-zinc-800">
            <h2 className="text-2xl font-bold text-white">Contact</h2>
            <p className="text-zinc-400 leading-relaxed">
              For questions or concerns about your privacy, please contact:
            </p>
            <p className="text-white">
              <a href="mailto:dbalogh@udel.edu" className="text-blue-400 hover:text-blue-300 transition-colors">
                dbalogh@udel.edu
              </a>
            </p>
            <p className="text-zinc-500 text-sm mt-8">
              Effective Date: June 4, 2025
            </p>
          </div>
        </motion.div>
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
                <li><a href="/case-studies" className="hover:text-white cursor-pointer transition">Case Studies</a></li>
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

