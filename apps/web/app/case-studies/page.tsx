'use client';

import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: 'Automated LinkedIn Technology Showcase',
      client: 'University of Delaware Tech Transfer Office',
      industry: 'Higher Education & Technology Transfer',
      challenge: 'The University of Delaware Tech Transfer Office needed to increase visibility of emerging technologies and innovations available for licensing. Manual posting to LinkedIn was time-consuming, inconsistent, and failed to reach optimal posting times for maximum engagement.',
      solution: 'Developed an intelligent LinkedIn automation system that automatically monitors new technology disclosures from the university\'s innovation pipeline. The system generates compelling, professional posts with relevant hashtags, images, and descriptions tailored to different audience segments (investors, industry partners, researchers). Posts are scheduled at optimal times based on engagement analytics.',
      technologies: ['LinkedIn API', 'Natural Language Processing', 'Computer Vision', 'Scheduling Algorithms', 'Database Integration'],
      results: [
        '285% increase in LinkedIn engagement',
        '47 new licensing inquiries per quarter',
        '12 hours saved weekly on social media management',
        '3.2x growth in tech transfer profile followers'
      ],
      metrics: {
        efficiency: '95% reduction in manual posting time',
        roi: '4.3x return on investment within 6 months',
        engagement: '285% increase in post engagement'
      }
    },
    {
      id: 2,
      title: 'Companies House Intelligence Platform',
      client: 'UK Investment Firm',
      industry: 'Financial Services & Investment',
      challenge: 'An investment firm needed real-time access to comprehensive UK company data from Companies House for due diligence, competitive analysis, and investment opportunity identification. Manual data retrieval from the Companies House website was inefficient, error-prone, and couldn\'t scale to analyze thousands of companies.',
      solution: 'Engineered a sophisticated web scraping and data aggregation platform that continuously monitors Companies House records. The system extracts company financials, director information, filing history, shareholder structures, and legal proceedings. Data is normalized, enriched with additional public sources, and delivered through a searchable dashboard with real-time alerts for significant changes (directorship changes, financial filings, insolvency notices).',
      technologies: ['Web Scraping (BeautifulSoup, Scrapy)', 'Companies House API', 'PostgreSQL', 'Redis Cache', 'ETL Pipelines', 'React Dashboard'],
      results: [
        'Automated monitoring of 50,000+ UK companies',
        '15 minutes average time for complete due diligence (down from 4 hours)',
        '99.7% data accuracy rate',
        'Early identification of 23 high-value investment opportunities'
      ],
      metrics: {
        efficiency: '93% reduction in due diligence time',
        roi: '6.8x return on investment in first year',
        coverage: '50,000+ companies monitored continuously'
      }
    },
    {
      id: 3,
      title: 'Intelligent Marketing Campaign Automation',
      client: 'University Tech Transfer Office',
      industry: 'Higher Education & Innovation Marketing',
      challenge: 'The tech transfer office struggled to effectively market diverse university innovations to appropriate industry partners, investors, and potential licensees. Each technology required customized outreach campaigns, but manual segmentation and personalized messaging was overwhelming the small marketing team. Response rates were low and many promising technologies received insufficient market exposure.',
      solution: 'Built an AI-powered marketing automation platform that analyzes each new technology disclosure and automatically generates multi-channel marketing campaigns. The system uses natural language processing to understand the innovation\'s technical details and market potential, then creates targeted campaigns including email sequences, social media content, industry-specific landing pages, and personalized outreach to relevant contacts in the CRM. Machine learning algorithms continuously optimize messaging and targeting based on engagement data.',
      technologies: ['Marketing Automation (HubSpot API)', 'GPT-4 for Content Generation', 'Machine Learning', 'CRM Integration', 'Email Marketing', 'Analytics Dashboard'],
      results: [
        '218% increase in qualified licensing leads',
        '34 successful technology licenses facilitated',
        '8 strategic industry partnerships established',
        '$4.2M in licensing revenue generated'
      ],
      metrics: {
        efficiency: '87% reduction in campaign creation time',
        roi: '12.5x return on investment',
        conversion: '218% increase in qualified leads'
      }
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
          className="relative z-10 text-center space-y-6 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Badge className="mb-4 text-sm px-4 py-1" variant="secondary">
              Client Success Stories
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            Case <span className="text-blue-400">Studies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto"
          >
            Real-world automation solutions delivering measurable business impact across diverse industries
          </motion.p>
        </motion.div>
      </section>

      {/* Case Studies Section */}
      <section className="relative px-8 py-24">
        <div className="max-w-7xl mx-auto space-y-24">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 overflow-hidden">
                <CardHeader className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {study.industry}
                    </Badge>
                    <Badge className="text-xs bg-blue-500/10 text-blue-400 border-blue-500/20">
                      Case Study #{study.id}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-3xl md:text-4xl">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-zinc-400 text-lg">
                    {study.client}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  {/* Challenge */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-blue-400">
                      The Challenge
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-blue-400">
                      Our Solution
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-blue-400">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIdx) => (
                        <Badge 
                          key={techIdx}
                          variant="outline" 
                          className="text-zinc-300 border-zinc-700 bg-zinc-800/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-400">
                      Results & Impact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {study.results.map((result, resultIdx) => (
                        <div 
                          key={resultIdx}
                          className="flex items-start space-x-2 bg-zinc-800/30 p-3 rounded-lg border border-zinc-800"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <p className="text-zinc-300 text-sm">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-zinc-800">
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-blue-400">
                        {study.metrics.efficiency}
                      </div>
                      <div className="text-sm text-zinc-400">
                        Efficiency Gain
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-blue-400">
                        {study.metrics.roi}
                      </div>
                      <div className="text-sm text-zinc-400">
                        Return on Investment
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-blue-400">
                        {study.metrics.engagement || study.metrics.conversion || study.metrics.coverage}
                      </div>
                      <div className="text-sm text-zinc-400">
                        {study.metrics.engagement ? 'Engagement Boost' : study.metrics.conversion ? 'Lead Growth' : 'Coverage'}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-6 bg-gradient-to-br from-blue-500/10 to-zinc-900/50 border border-blue-500/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-zinc-400">
              Let's discuss how B Automations can deliver similar results for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 transition-all">
                View All Solutions
              </button>
            </div>
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
                <li className="hover:text-white cursor-pointer transition">Request Consultation</li>
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

