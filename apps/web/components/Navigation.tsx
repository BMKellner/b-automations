'use client';

import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Home
            </a>

            <a
              href="/how-it-works"
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              How It Works
            </a>

            <a
              href="/about"
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              About
            </a>

            <a
              href="/case-studies"
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Case Studies
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/consultation"
              className="inline-flex items-center px-6 py-2.5 border border-zinc-700 hover:border-blue-500/50 text-zinc-300 hover:text-white font-medium rounded-full transition-all bg-zinc-900/50 hover:bg-zinc-800/50"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

