'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import ScrollVideoSection from '@/components/ScrollVideoSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <Navigation />
      
      {/* Scroll-Driven Video Section with Hero */}
      <ScrollVideoSection
        videoSrc="/parallax-background-optimized.mp4"
        posterSrc="/parallax-poster.jpg"
        height="h-[400vh]"
        contents={[
          {
            startProgress: 0,
            endProgress: 0.2,
            badge: "Enterprise Automation Solutions",
            title: (
              <>
                <span className="text-blue-400">B Automations</span>
              </>
            ),
            description: "Engineering intelligent systems that drive operational excellence and exponential growth",
            showButtons: true
          },
          {
            startProgress: 0.2,
            endProgress: 0.4,
            badge: "About Us",
            title: "Pioneering Autonomous Business Operations",
            description: "We architect enterprise-grade automation infrastructure leveraging artificial intelligence, machine learning, and advanced workflow orchestration"
          },
          {
            startProgress: 0.4,
            endProgress: 0.6,
            badge: "Client Excellence",
            title: "98.7% Satisfaction Rate",
            description: "Validated across 500+ enterprise deployments spanning Fortune 500 and high-growth technology sectors"
          },
          {
            startProgress: 0.6,
            endProgress: 0.8,
            badge: "Measurable Impact",
            title: "2.5M+ Annual Hours Reclaimed",
            description: "350+ production-grade implementations delivering 4.8x average ROI through precision automation engineering"
          },
          {
            startProgress: 0.8,
            endProgress: 1,
            badge: "Strategic Partnership",
            title: "Elevate Your Operational Capacity",
            description: "Join industry leaders leveraging B Automations' proven methodology for transformative business outcomes"
          }
        ]}
      />

      {/* Services & Contact Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full space-y-12 sm:space-y-16 relative">
          {/* Subtle background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-full max-w-4xl bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_70%)] blur-3xl" />
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative z-10">
            {[
              {
                title: 'Enterprise AI Integration',
                description: 'Deploy production-ready machine learning models with seamless API orchestration and real-time inference capabilities'
              },
              {
                title: 'Intelligent Process Automation',
                description: 'Engineer autonomous workflows leveraging RPA, event-driven architecture, and advanced decision engines'
              },
              {
                title: 'Predictive Analytics Platform',
                description: 'Transform raw data streams into strategic intelligence through automated ETL pipelines and ML-powered forecasting'
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 hover:border-blue-500/30 transition-all h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zinc-400">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-6 pt-8 relative z-10"
          >
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-4"
            >
              Scale Your Operations Intelligently
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto px-4"
            >
              Partner with industry leaders who trust <span className="text-blue-400 font-semibold">B Automations</span> to deliver mission-critical automation infrastructure
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            >
              <Link href="/consultation" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-zinc-700 hover:border-zinc-600 transition-all text-base sm:text-lg">
                  Book a Consultation
                </button>
              </Link>
              <Link href="/case-studies" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-zinc-700 hover:border-zinc-600 transition-all text-base sm:text-lg">
                  Explore Case Studies
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 bg-zinc-950 border-t border-zinc-800 text-white py-12 sm:py-16">
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
