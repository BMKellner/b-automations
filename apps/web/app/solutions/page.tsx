import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type CaseStudyMetrics = {
  invested?: string;
  roi?: string;
  coverage?: string;
  efficiency?: string;
  conversion?: string;
  precision?: string;
};

type CaseStudy = {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
  metrics: CaseStudyMetrics;
  link?: string;
};

export default function CaseStudiesPage() {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Automated Investment Data Aggregation and Analysis',
      client: 'Private Investors and VC Firms',
      industry: 'Financial Services & Investment',
      challenge: "An investment firm needed real-time access to comprehensive UK company data from Companies House for due diligence, competitive analysis, and investment opportunity identification. Manual data retrieval from the Companies House website is inefficient, error-prone, and can't scale to analyze thousands of companies.",
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
        roi: '32% average YoY',
        coverage: '50,000+ companies monitored continuously'
      }
    },
    {
      id: 2,
      title: 'Intelligent Marketing Campaign Automation',
      client: 'University Tech Transfer Office',
      industry: 'Higher Education & Innovation Marketing',
      challenge: 'The tech transfer office struggled to effectively market diverse university innovations to appropriate industry partners, investors, and potential licensees. Each technology required customized outreach campaigns, but manual segmentation and personalized messaging was overwhelming the small marketing team. Response rates were low and many promising technologies received insufficient market exposure.',
      solution: "Built an AI-powered marketing automation platform that analyzes each new technology disclosure and automatically generates multi-channel marketing campaigns. The system uses natural language processing to understand the innovation's technical details and market potential, then creates targeted campaigns including email sequences, social media content, industry-specific landing pages, and personalized outreach to relevant contacts in the CRM. Machine learning algorithms continuously optimize messaging and targeting based on engagement data.",
      technologies: ['Marketing Automation (HubSpot API)', 'GPT-4 for Content Generation', 'Machine Learning', 'CRM Integration', 'Email Marketing', 'Analytics Dashboard'],
      results: [
        'over 300% increase in response inquiries',
        '30 minutes saved per marketing campaign',
        'Automated outreach to 1000+ industry partners'
      ],
      metrics: {
        efficiency: '95% reduction in campaign creation time',
        conversion: '300% increase in qualified leads'
      }
    },
    {
      id: 4,
      title: 'AI-Assisted Precision Engineering Analysis for EUV Reticle Handling',
      client: 'ASML',
      industry: 'Semiconductor & Precision Engineering',
      challenge: 'A spring-clip mechanism for an EUV reticle needed to survive real operational loads while staying precise to within microns. Manual multi-physics analysis across materials and load cases would have taken days.',
      solution: 'Ran AI-driven structural, strain, and compliance analysis across PETG, PEEK, and Al 6061-T6. Compressed days of analysis into hours, identified the dominant failure point, and derived a hard 0.83mm pad thickness limit for sub-5μm displacement precision.',
      technologies: ['Euler-Bernoulli Beam Theory', 'Strain Analysis (ε = tδ/L²)', 'Coulomb Friction Modeling', 'Elastic Shear Compliance', 'Multi-Physics Simulation', 'Material Comparison (PETG / PEEK / Al 6061-T6)'],
      results: [
        'Dominant failure point identified in hours vs. days',
        'Resolved stiffness vs. actuation stroke design conflict',
        'Derived hard 0.83mm pad thickness limit for sub-5μm precision',
        'Revealed pad shear deformation and frictional slip as independent mechanisms',
        'Validated t³ stiffness scaling law across all geometries'
      ],
      metrics: {
        precision: 'Sub-5μm displacement control',
        efficiency: 'Days of analysis to hours',
        coverage: '3 materials, full load case matrix'
      },
    },
    {
      id: 3,
      title: 'Automated Social Media Content Creation',
      client: 'University of Delaware Tech Transfer Office',
      industry: 'Technology Transfer',
      challenge: "The University of Delaware Tech Transfer Office needed to increase visibility of emerging technologies and innovations available for licensing. Manual post generation to LinkedIn was time-consuming, inconsistent, and failed to reach optimal posting times for maximum engagement.",
      solution: "Developed an intelligent LinkedIn automation system that automatically monitors new technology disclosures from the university's innovation pipeline. The system generates compelling, professional posts with relevant hashtags, images, and descriptions tailored to different audience segments (investors, industry partners, researchers). Posts are scheduled at optimal times based on engagement analytics.",
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
    <div className="min-h-screen bg-zinc-950">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-zinc-950 pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
            Client Success <span className="text-blue-400">Stories</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
            Real-world automation solutions delivering measurable business impact across diverse industries
          </p>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="bg-zinc-950 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
          {caseStudies.map((study) => (
            <Card key={study.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardHeader className="space-y-3 sm:space-y-4 p-4 sm:p-6 border-b border-zinc-800">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs bg-zinc-800 text-zinc-400 border-zinc-700">
                    {study.industry}
                  </Badge>
                </div>
                <CardTitle className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-blue-400 text-sm sm:text-base lg:text-lg font-medium">
                  {study.client}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 sm:space-y-8 p-4 sm:p-6">
                {/* Challenge */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-400">The Challenge</h3>
                  <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-400">Our Solution</h3>
                  <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">{study.solution}</p>
                </div>

                {/* Technologies */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-400">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIdx) => (
                      <Badge key={techIdx} variant="outline" className="text-zinc-300 border-zinc-700 bg-zinc-800/50 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-400">Results & Impact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {study.results.map((result, resultIdx) => (
                      <div key={resultIdx} className="flex items-start space-x-2 bg-zinc-800/50 p-2 sm:p-3 rounded-lg border border-zinc-700">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                        <p className="text-zinc-300 text-xs sm:text-sm">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                {Object.keys(study.metrics).length > 0 && (
                  <div className={`grid grid-cols-1 ${Object.keys(study.metrics).length === 1 ? 'sm:grid-cols-1' : Object.keys(study.metrics).length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} gap-4 sm:gap-6 pt-4 border-t border-zinc-800`}>
                    {study.metrics.invested && (
                      <div className="text-center space-y-1 sm:space-y-2">
                        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">{study.metrics.invested}</div>
                        <div className="text-xs sm:text-sm text-zinc-500">Investment</div>
                      </div>
                    )}
                    {study.metrics.roi && (
                      <div className="text-center space-y-1 sm:space-y-2">
                        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">{study.metrics.roi}</div>
                        <div className="text-xs sm:text-sm text-zinc-500">Return on Investment</div>
                      </div>
                    )}
                    {study.metrics.efficiency && (
                      <div className="text-center space-y-1 sm:space-y-2">
                        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">{study.metrics.efficiency}</div>
                        <div className="text-xs sm:text-sm text-zinc-500">Efficiency Gain</div>
                      </div>
                    )}
                    {'conversion' in study.metrics && study.metrics.conversion && (
                      <div className="text-center space-y-1 sm:space-y-2">
                        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">{study.metrics.conversion}</div>
                        <div className="text-xs sm:text-sm text-zinc-500">Lead Growth</div>
                      </div>
                    )}
                    {study.metrics.coverage && (
                      <div className="text-center space-y-1 sm:space-y-2">
                        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">{study.metrics.coverage}</div>
                        <div className="text-xs sm:text-sm text-zinc-500">Coverage</div>
                      </div>
                    )}
                    {study.metrics.precision && (
                      <div className="text-center space-y-1 sm:space-y-2">
                        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">{study.metrics.precision}</div>
                        <div className="text-xs sm:text-sm text-zinc-500">Precision Target</div>
                      </div>
                    )}
                  </div>
                )}

                {study.link && (
                  <div className="pt-2">
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-all"
                    >
                      View Full Analysis
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-400">B Automations</h3>
              <p className="text-zinc-500 text-sm">Enterprise automation solutions powered by AI</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li className="cursor-default">Client Success Stories</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Contact</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>dbalogh@udel.edu</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-sm">© 2025 B Automations</p>
            <div className="flex gap-6 text-sm text-zinc-600">
              <a href="/privacy" className="hover:text-white transition">Privacy</a>
              <a href="/terms" className="hover:text-white transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
