'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const solutions = [
    { name: 'Enterprise AI Integration', href: '#ai-integration' },
    { name: 'Process Automation', href: '#process-automation' },
    { name: 'Workflow Orchestration', href: '#workflow' },
    { name: 'Predictive Analytics', href: '#analytics' },
    { name: 'Custom Solutions', href: '#custom' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Home
            </a>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                <span>Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    solutionsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-lg shadow-xl overflow-hidden"
                  >
                    <div className="py-2">
                      {solutions.map((solution, idx) => (
                        <a
                          key={idx}
                          href={solution.href}
                          className="block px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors"
                        >
                          {solution.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              How It Works
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              About
            </a>

            <a
              href="#case-studies"
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Case Studies
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

