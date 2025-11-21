'use client';

import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: 'Automated Investment Data Aggregation and Analysis',
      client: 'Private Investors and VC Firms',
      industry: 'Financial Services & Investment',
      challenge: 'An investment firm needed real-time access to comprehensive UK company data from Companies House for due diligence, competitive analysis, and investment opportunity identification. Manual data retrieval from the Companies House website is inefficient, error-prone, and can\'t scale to analyze thousands of companies.',
      solution: 'Engineered a web scraping and data aggregation tool that continuously monitors Companies House records. The system extracts company financials, director information, filing history, shareholder structures, and legal proceedings. Data is normalized, enriched with additional public sources, and delivered through a searchable dashboard with real-time alerts for significant changes (directorship changes, financial filings, insolvency notices).',
      technologies: ['Web Scraping', 'Companies House API', 'PostgreSQL', 'React Dashboard'],
      results: [
        'Automated monitoring of 50,000+ UK companies',
        'User-friendly, well presented data dashboard for the investors',
        '99.7% data accuracy rate',
        'Early identification of 4 high-value investment opportunities'
      ],
      metrics: {
        invested: '$2M+ invested using the tool',
        roi: '4x return on investment in first year',
        coverage: '50,000+ companies monitored continuously'
      }
    },
    {
      id: 2,
      title: 'Intelligent Marketing Campaign Automation',
      client: 'University Tech Transfer Office',
      industry: 'Higher Education & Innovation Marketing',
      challenge: 'The tech transfer office struggled to effectively market diverse university innovations to appropriate industry partners, investors, and potential licensees. Each technology required customized outreach campaigns, but manual segmentation and personalized messaging was overwhelming the small marketing team. Response rates were low and many promising technologies received insufficient market exposure.',
      solution: 'Built an AI-powered marketing automation platform that analyzes each new technology disclosure and automatically generates multi-channel marketing campaigns. The system uses natural language processing to understand the innovation\'s technical details and market potential, then creates targeted campaigns including email sequences, social media content, industry-specific landing pages, and personalized outreach to relevant contacts in the CRM. Machine learning algorithms continuously optimize messaging and targeting based on engagement data.',
      technologies: ['Marketing Automation (HubSpot API)', 'GPT-4 for Content Generation', 'Machine Learning', 'CRM Integration', 'Email Marketing', 'Analytics Dashboard'],
      results: [
        'over 300% increase in response inquiries',
        '30 minutes saved per marketting campaign',
        'Automated outreach to 1000+ industry partners'
      ],
      metrics: {
        efficiency: '95% reduction in campaign creation time',
        conversion: '300% increase in qualified leads'
      }
    },
    {
      id: 3,
      title: 'Automated Social Media Content Creation',
      client: 'University of Delaware Tech Transfer Office',
      industry: 'Technology Transfer',
      challenge: 'The University of Delaware Tech Transfer Office needed to increase visibility of emerging technologies and innovations available for licensing. Manual post generation to LinkedIn was time-consuming, inconsistent, and failed to reach optimal posting times for maximum engagement.',
      solution: 'Developed an intelligent LinkedIn automation system that automatically monitors new technology disclosures from the university\'s innovation pipeline. The system generates compelling, professional posts with relevant hashtags, images, and descriptions tailored to different audience segments (investors, industry partners, researchers). Posts are scheduled at optimal times based on engagement analytics.',
      technologies: ['LinkedIn API', 'Natural Language Processing', 'Computer Vision', 'Scheduling Algorithms', 'Database Integration'],
      results: [
        '2 hours saved weekly on social media management',
      ],
      metrics: {
        efficiency: '99% reduction in manual posting time',
      }
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Navigation Bar */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full max-w-4xl bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)] blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center space-y-4 sm:space-y-6 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Badge className="mb-4 text-xs sm:text-sm px-3 sm:px-4 py-1" variant="secondary">
              Client Success Stories
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-white px-4"
          >
            Case <span className="text-blue-400">Studies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-xl md:text-2xl text-zinc-100 max-w-3xl mx-auto px-4"
          >
            Real-world automation solutions delivering measurable business impact across diverse industries
          </motion.p>
        </motion.div>
      </section>

      {/* Case Studies Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 lg:space-y-24">
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
                <CardHeader className="space-y-3 sm:space-y-4 p-4 sm:p-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {study.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-zinc-100 text-sm sm:text-base lg:text-lg">
                    {study.client}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6 sm:space-y-8 p-4 sm:p-6">
                  {/* Challenge */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-400">
                      The Challenge
                    </h3>
                    <p className="text-zinc-100 leading-relaxed text-sm sm:text-base">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-400">
                      Our Solution
                    </h3>
                    <p className="text-zinc-100 leading-relaxed text-sm sm:text-base">
                      {study.solution}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-400">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIdx) => (
                        <Badge 
                          key={techIdx}
                          variant="outline" 
                          className="text-zinc-100 border-zinc-700 bg-zinc-800/50 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-400">
                      Results & Impact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {study.results.map((result, resultIdx) => (
                        <div 
                          key={resultIdx}
                          className="flex items-start space-x-2 bg-zinc-800/30 p-2 sm:p-3 rounded-lg border border-zinc-800"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <p className="text-zinc-100 text-xs sm:text-sm">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Metrics */}
                  {Object.keys(study.metrics).length > 0 && (
                    <div className={`grid grid-cols-1 ${Object.keys(study.metrics).length === 1 ? 'sm:grid-cols-1' : Object.keys(study.metrics).length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} gap-4 sm:gap-6 pt-4 border-t border-zinc-800`}>
                      {study.metrics.invested && (
                        <div className="text-center space-y-1 sm:space-y-2">
                          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">
                            {study.metrics.invested}
                          </div>
                          <div className="text-xs sm:text-sm text-zinc-100">
                            Investment
                          </div>
                        </div>
                      )}
                      {study.metrics.roi && (
                        <div className="text-center space-y-1 sm:space-y-2">
                          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">
                            {study.metrics.roi}
                          </div>
                          <div className="text-xs sm:text-sm text-zinc-100">
                            Return on Investment
                          </div>
                        </div>
                      )}
                      {study.metrics.efficiency && (
                        <div className="text-center space-y-1 sm:space-y-2">
                          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">
                            {study.metrics.efficiency}
                          </div>
                          <div className="text-xs sm:text-sm text-zinc-100">
                            Efficiency Gain
                          </div>
                        </div>
                      )}
                      {study.metrics.conversion && (
                        <div className="text-center space-y-1 sm:space-y-2">
                          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">
                            {study.metrics.conversion}
                          </div>
                          <div className="text-xs sm:text-sm text-zinc-100">
                            Lead Growth
                          </div>
                        </div>
                      )}
                      {study.metrics.coverage && (
                        <div className="text-center space-y-1 sm:space-y-2">
                          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">
                            {study.metrics.coverage}
                          </div>
                          <div className="text-xs sm:text-sm text-zinc-100">
                            Coverage
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">B Automations</h3>
              <p className="text-zinc-100 text-sm">
                Enterprise automation solutions powered by AI
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm text-zinc-100">
                <li><a href="/about" className="hover:text-white cursor-pointer transition">About</a></li>
                <li className="hover:text-white cursor-pointer transition">Case Studies</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Contact</h4>
              <ul className="space-y-2 text-sm text-zinc-100">
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

