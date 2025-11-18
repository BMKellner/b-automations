'use client';

import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Navigation Bar */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-8 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full max-w-4xl bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)] blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center space-y-6 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Badge className="mb-4 text-sm px-4 py-1" variant="secondary">
              Start Your Automation Journey
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            Book Your <span className="text-blue-400">Consultation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            Let's explore how custom automation solutions can transform your business operations and drive measurable growth
          </motion.p>
        </motion.div>
      </section>

      {/* What to Expect Section */}
      <section className="relative px-8 py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What to Expect
            </h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              Our consultation is a comprehensive discovery session designed to understand your unique challenges and identify automation opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Discovery Call',
                duration: '45-60 minutes',
                description: 'Deep dive into your current processes, pain points, and business objectives'
              },
              {
                title: 'Solution Exploration',
                duration: 'Real-time',
                description: 'Discuss potential automation strategies tailored to your specific needs'
              },
              {
                title: 'Roadmap Preview',
                duration: 'Actionable',
                description: 'Receive initial insights on implementation approach, timeline, and expected ROI'
              }
            ].map((item, idx) => (
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
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl mb-2">{item.title}</CardTitle>
                    <Badge variant="outline" className="text-blue-400 border-blue-500/30 w-fit mx-auto">
                      {item.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zinc-400 text-center">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We'll Discuss Section */}
      <section className="relative px-8 py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-5xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What We'll Discuss
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Your current business processes and workflows',
              'Specific challenges and bottlenecks you\'re experiencing',
              'Manual tasks consuming valuable time and resources',
              'Data management and integration requirements',
              'Scalability goals and future growth plans',
              'Budget considerations and ROI expectations',
              'Timeline requirements and implementation priorities',
              'Team structure and stakeholder involvement'
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="flex items-start space-x-3 bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-blue-500/30 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <p className="text-zinc-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book Section */}
      <section className="relative px-8 py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Book a Consultation?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Zero Commitment',
                description: 'Free consultation with no obligation or pressure to proceed'
              },
              {
                title: 'Expert Insights',
                description: 'Gain valuable automation expertise regardless of next steps'
              },
              {
                title: 'Clear Understanding',
                description: 'Leave with clarity on what\'s possible for your business'
              },
              {
                title: 'Custom Approach',
                description: 'Discussion tailored to your industry and specific challenges'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="text-center space-y-3"
              >
                <div className="text-4xl font-bold text-blue-400">{idx + 1}</div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative px-8 py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="bg-gradient-to-br from-blue-500/10 to-zinc-900/50 border-blue-500/20">
              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-4xl md:text-5xl font-bold text-white">
                  Ready to Get Started?
                </CardTitle>
                <CardDescription className="text-xl text-zinc-400">
                  Reach out to schedule your free consultation
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center space-y-2 p-6 bg-zinc-900/50 rounded-lg border border-zinc-800">
                    <h3 className="text-white font-semibold">Email Us</h3>
                    <a href="mailto:contact@bautomations.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      contact@bautomations.com
                    </a>
                  </div>
                  
                  <div className="text-center space-y-2 p-6 bg-zinc-900/50 rounded-lg border border-zinc-800">
                    <h3 className="text-white font-semibold">Call Us</h3>
                    <a href="tel:+15551234567" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white text-center">Next Steps</h3>
                  <div className="space-y-3">
                    {[
                      'Contact us via email or phone to schedule your consultation',
                      'We\'ll send you a calendar invite with video conference details',
                      'Prepare any questions or documentation about your current processes',
                      'Join the call at the scheduled time - we\'re excited to meet you!'
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </div>
                        <p className="text-zinc-300 text-sm pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a href="mailto:contact@bautomations.com">
                    <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                      Email Us Now
                    </Button>
                  </a>
                  <a href="/case-studies">
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto">
                      View Case Studies
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">B Automations</h3>
              <p className="text-zinc-400 text-sm">
                Enterprise automation partner specializing in AI-driven process optimization and intelligent infrastructure deployment.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="/about" className="hover:text-white cursor-pointer transition">About Us</a></li>
                <li className="hover:text-white cursor-pointer transition">Our Team</li>
                <li className="hover:text-white cursor-pointer transition">Careers</li>
                <li className="hover:text-white cursor-pointer transition">Blog</li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Solutions</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="hover:text-white cursor-pointer transition">Enterprise AI Integration</li>
                <li className="hover:text-white cursor-pointer transition">Process Automation</li>
                <li className="hover:text-white cursor-pointer transition">Predictive Analytics</li>
                <li className="hover:text-white cursor-pointer transition">Strategic Advisory</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Enterprise Inquiries</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>contact@bautomations.com</li>
                <li>+1 (555) 123-4567</li>
                <li><a href="/consultation" className="hover:text-white cursor-pointer transition">Request Consultation</a></li>
                <li className="hover:text-white cursor-pointer transition">Technical Support</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © 2025 B Automations. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-zinc-500">
              <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition">Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

