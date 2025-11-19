'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-zinc-300 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
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

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="/consultation"
              className="inline-flex items-center px-6 py-2.5 border border-zinc-700 hover:border-blue-500/50 text-zinc-300 hover:text-white font-medium rounded-full transition-all bg-zinc-900/50 hover:bg-zinc-800/50 text-sm"
            >
              Book Your Consultation
            </a>
          </div>

          {/* Mobile CTA Button (when menu closed) */}
          <div className="md:hidden">
            <a
              href="/consultation"
              className="inline-flex items-center px-4 py-2 border border-zinc-700 hover:border-blue-500/50 text-zinc-300 hover:text-white font-medium rounded-full transition-all bg-zinc-900/50 hover:bg-zinc-800/50 text-xs"
            >
              Consultation
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800"
            >
              <div className="px-4 py-4 space-y-4">
                <a
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-zinc-300 hover:text-white transition-colors py-2"
                >
                  Home
                </a>
                <a
                  href="/how-it-works"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-zinc-300 hover:text-white transition-colors py-2"
                >
                  How It Works
                </a>
                <a
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-zinc-300 hover:text-white transition-colors py-2"
                >
                  About
                </a>
                <a
                  href="/case-studies"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-zinc-300 hover:text-white transition-colors py-2"
                >
                  Case Studies
                </a>
                <a
                  href="/consultation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center px-6 py-3 border border-zinc-700 hover:border-blue-500/50 text-zinc-300 hover:text-white font-medium rounded-full transition-all bg-zinc-900/50 hover:bg-zinc-800/50 mt-4"
                >
                  Book Your Consultation
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

