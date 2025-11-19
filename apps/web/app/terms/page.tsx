'use client';

import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[30vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 px-4"
          >
            Terms & Conditions
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8"
        >
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. Introduction</h2>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              Welcome to BAutomation. By accessing or using our website (www.bautomations.com), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, please do not use our website or services.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. Services</h2>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              BAutomation provides digital services including (but not limited to) business process automation, AI agent development, SEO optimization, and web scraping solutions. All services are custom-tailored and delivered based on project agreements or client requests.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. Use of Website</h2>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              You agree to use this website for lawful purposes only. You may not use this site to engage in any activity that is illegal, misleading, or harmful to others.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. Intellectual Property</h2>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              All content on this website—including logos, text, images, and code—is the property of BAutomation or its licensors. You may not copy, reproduce, or distribute our content without our written permission.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">5. Payment & Billing</h2>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              All projects are billed based on custom quotes. Payment terms will be outlined in individual agreements with each client. BAutomation reserves the right to modify pricing and service offerings at any time.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">6. Refunds</h2>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              Due to the nature of our custom services, we do not offer refunds once a project has begun. If you are unsatisfied, please contact us and we'll do our best to resolve the issue.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">7. Limitation of Liability</h2>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              BAutomation is not liable for any direct, indirect, or incidental damages that may arise from your use of our website or services. All services are provided "as is" without warranties of any kind.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">8. Modifications</h2>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              We reserve the right to update or change these Terms at any time. Updates will be posted on this page with a new effective date.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8 border-t border-zinc-800">
            <h2 className="text-xl sm:text-2xl font-bold text-white">9. Contact Us</h2>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-white text-sm sm:text-base">
              📧 <a href="mailto:dbalogh@udel.edu" className="text-blue-400 hover:text-blue-300 transition-colors">
                dbalogh@udel.edu
              </a>
            </p>
            <p className="text-zinc-500 text-xs sm:text-sm mt-6 sm:mt-8">
              Effective Date: June 4, 2025
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
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

