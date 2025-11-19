'use client';

import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Navigation Bar */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-8 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full max-w-4xl bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)] blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center space-y-6 max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            About <span className="text-blue-400">B Automations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto"
          >
            Pioneering the future of enterprise automation through intelligent systems and innovative technology solutions
          </motion.p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 py-24">
        <div className="max-w-7xl mx-auto w-full space-y-24">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 text-center max-w-4xl mx-auto leading-relaxed">
              At B Automations, we believe that intelligent automation is the key to unlocking unprecedented 
              operational efficiency and business growth. Our mission is to empower organizations with 
              cutting-edge automation solutions that transform complex workflows into streamlined, 
              intelligent processes.
            </p>
          </motion.div>

          {/* Core Values */}
          <div className="space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white text-center"
            >
              Our Core Values
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation First',
                  description: 'Continuously pushing boundaries with cutting-edge AI and automation technologies to deliver solutions that set new industry standards'
                },
                {
                  title: 'Client Success',
                  description: 'Your success is our success. We partner closely with clients to ensure measurable ROI and transformative business outcomes'
                },
                {
                  title: 'Excellence in Execution',
                  description: 'Delivering production-ready, enterprise-grade solutions with meticulous attention to detail and unwavering quality standards'
                }
              ].map((value, idx) => (
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
                      <CardTitle className="text-white text-2xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-zinc-400 text-base">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: 'Strategic Discovery',
                  description: 'Deep-dive analysis of your business processes, challenges, and automation opportunities'
                },
                {
                  title: 'Custom Architecture',
                  description: 'Tailored automation solutions designed specifically for your unique operational requirements'
                },
                {
                  title: 'Agile Implementation',
                  description: 'Rapid deployment with iterative refinement to ensure optimal performance and user adoption'
                },
                {
                  title: 'Continuous Optimization',
                  description: 'Ongoing monitoring, analytics, and enhancement to maximize ROI and system efficiency'
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-blue-500/30 transition-all"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12"
          >
            {[
              { stat: '500+', label: 'Enterprise Deployments' },
              { stat: '98.7%', label: 'Client Satisfaction' },
              { stat: '2.5M+', label: 'Hours Saved Annually' },
              { stat: '4.8x', label: 'Average ROI' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="text-center space-y-2"
              >
                <div className="text-5xl md:text-6xl font-bold text-blue-400">
                  {item.stat}
                </div>
                <div className="text-zinc-400 text-sm md:text-base">
                  {item.label}
                </div>
              </motion.div>
            ))}
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


