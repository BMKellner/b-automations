'use client';

import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HowItWorksPage() {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Deep Dive',
      description: 'We start by immersing ourselves in your business. Through comprehensive workshops, stakeholder interviews, and process audits, we gain an intimate understanding of your unique challenges, workflows, and objectives.',
      details: [
        'In-depth analysis of current operations',
        'Identification of automation opportunities',
        'Stakeholder requirement gathering',
        'Technical infrastructure assessment'
      ],
      duration: '1-2 weeks'
    },
    {
      number: '02',
      title: 'Custom Solution Design',
      description: 'No templates. No off-the-shelf products. Every solution is architectured specifically for your needs. Our engineering team designs a bespoke automation system that integrates seamlessly with your existing infrastructure and addresses your exact pain points.',
      details: [
        'Tailored system architecture',
        'Custom workflow design',
        'Technology stack selection',
        'Integration planning with existing systems'
      ],
      duration: '2-3 weeks'
    },
    {
      number: '03',
      title: 'Iterative Development',
      description: 'We build your solution using agile methodologies, delivering functional modules incrementally. You see progress continuously and provide feedback at every stage, ensuring the final product exceeds expectations.',
      details: [
        'Agile sprint-based development',
        'Weekly progress demonstrations',
        'Continuous client feedback integration',
        'Quality assurance at every stage'
      ],
      duration: '4-12 weeks'
    },
    {
      number: '04',
      title: 'Rigorous Testing & Refinement',
      description: 'Before deployment, we conduct extensive testing in a staging environment that mirrors your production setup. Edge cases, error handling, performance optimization—everything is validated to ensure flawless operation.',
      details: [
        'Comprehensive unit and integration testing',
        'User acceptance testing (UAT)',
        'Performance and load testing',
        'Security vulnerability assessment'
      ],
      duration: '1-2 weeks'
    },
    {
      number: '05',
      title: 'Seamless Deployment',
      description: 'We deploy your custom automation solution with minimal disruption to operations. Our team manages the entire rollout process, provides comprehensive training, and ensures your team is confident using the new system.',
      details: [
        'Phased deployment strategy',
        'Comprehensive team training',
        'Documentation and user guides',
        'Real-time deployment monitoring'
      ],
      duration: '1 week'
    },
    {
      number: '06',
      title: 'Ongoing Optimization',
      description: 'The relationship doesn\'t end at launch. We continuously monitor performance, gather user feedback, and optimize the system. As your business evolves, your automation solution evolves with it.',
      details: [
        'Performance monitoring and analytics',
        'Regular optimization updates',
        'Feature enhancements based on usage',
        'Proactive maintenance and support'
      ],
      duration: 'Ongoing'
    }
  ];

  const principles = [
    {
      title: 'Zero Templates',
      description: 'We don\'t believe in one-size-fits-all. Every solution starts from a blank canvas, designed specifically for your business context and requirements.'
    },
    {
      title: 'Deep Collaboration',
      description: 'Your team knows your business best. We work closely with your stakeholders throughout the entire process, ensuring the solution truly meets your needs.'
    },
    {
      title: 'Technology Agnostic',
      description: 'We select the best technology stack for your specific use case, not what we\'re comfortable with. Your requirements drive our technology choices.'
    },
    {
      title: 'Scalable Architecture',
      description: 'Every solution is built to grow with your business. We design systems that can handle increased load, new features, and evolving requirements.'
    },
    {
      title: 'Transparent Process',
      description: 'You have full visibility into development progress, timelines, and deliverables. No black boxes, no surprises—just clear communication.'
    },
    {
      title: 'Knowledge Transfer',
      description: 'We don\'t want you dependent on us. Comprehensive documentation and training ensure your team can maintain and enhance the solution.'
    }
  ];

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
          className="relative z-10 text-center space-y-6 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Badge className="mb-4 text-sm px-4 py-1" variant="secondary">
              Our Methodology
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            How It <span className="text-blue-400">Works</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-4xl mx-auto leading-relaxed"
          >
            Every solution is handcrafted and precisely engineered to solve your unique challenges. 
            No templates. No shortcuts. Just intelligent automation built exactly for you.
          </motion.p>
        </motion.div>
      </section>

      {/* Core Philosophy Section */}
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
              Bespoke Solutions, Every Time
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Your business is unique. Your automation solution should be too. We don't adapt 
              your processes to fit our software—we build software that fits your processes perfectly.
            </p>
          </motion.div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, idx) => (
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
              >
                <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 hover:border-blue-500/30 transition-all h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zinc-400">
                      {principle.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="relative px-8 py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Custom Development Process
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto">
              A proven methodology that transforms your unique challenges into intelligent, 
              automated solutions
            </p>
          </motion.div>

          {/* Process Timeline */}
          <div className="space-y-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Card className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border-zinc-800 hover:border-blue-500/30 transition-all overflow-hidden">
                  <CardHeader className="space-y-4">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                          <span className="text-3xl font-bold text-white">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <CardTitle className="text-white text-2xl md:text-3xl">
                            {step.title}
                          </CardTitle>
                          <Badge variant="outline" className="text-blue-400 border-blue-500/30">
                            {step.duration}
                          </Badge>
                        </div>
                        <CardDescription className="text-zinc-300 text-base leading-relaxed">
                          {step.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="pl-[104px]">
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">
                        Key Activities:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.details.map((detail, detailIdx) => (
                          <div 
                            key={detailIdx}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            <p className="text-zinc-400 text-sm">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom Section */}
      <section className="relative px-8 py-24">
        <div className="max-w-5xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
              Why Custom-Built Matters
            </h2>
            <p className="text-lg text-zinc-400 text-center max-w-3xl mx-auto">
              Off-the-shelf solutions force you to change your business processes. 
              Custom solutions adapt to how you work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  ❌ Generic Solutions
                </h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Force you to adapt your processes to the software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Include features you don't need (and pay for)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Missing critical functionality specific to your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Difficult integration with existing systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Limited customization and flexibility</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  ✓ B Automations Custom Solutions
                </h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Built around your exact workflows and processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Every feature serves a purpose for your business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Addresses your specific pain points precisely</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Seamless integration with all existing tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Infinitely scalable and adaptable</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
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

