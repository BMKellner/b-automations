'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-blue-400">
            B Automations
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Home</a>
            <a href="/how-it-works" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">How It Works</a>
            <a href="/about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="/solutions" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Solutions</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="/consultation" className="inline-flex items-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all text-sm">
              Book Your Consultation
            </a>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <a href="/consultation" className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all text-xs">
              Consultation
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-950 border-t border-zinc-900">
            <div className="px-4 py-4 space-y-1">
              <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-medium text-zinc-400 hover:text-white transition-colors py-2">Home</a>
              <a href="/how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-medium text-zinc-400 hover:text-white transition-colors py-2">How It Works</a>
              <a href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-medium text-zinc-400 hover:text-white transition-colors py-2">About</a>
              <a href="/solutions" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-medium text-zinc-400 hover:text-white transition-colors py-2">Solutions</a>
              <a href="/consultation" onClick={() => setIsMobileMenuOpen(false)} className="block text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all mt-2">
                Book Your Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
