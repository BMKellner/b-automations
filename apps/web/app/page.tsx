import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-zinc-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
            <span className="text-blue-400">B Automations</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
            Engineering intelligent systems that drive operational excellence and exponential growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/consultation">
              <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all text-base">
                Book a Consultation
              </button>
            </Link>
            <Link href="/solutions">
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 transition-all text-base">
                Explore Solutions
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Pioneering Autonomous Business Operations</h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl mx-auto">
            We architect enterprise-grade automation infrastructure leveraging artificial intelligence, machine learning, and advanced workflow orchestration
          </p>
          <div className="flex flex-wrap justify-center gap-12 pt-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">100%</div>
              <div className="text-sm text-zinc-500 mt-1">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">5</div>
              <div className="text-sm text-zinc-500 mt-1">Enterprise Deployments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">$2M+</div>
              <div className="text-sm text-zinc-500 mt-1">Value Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-zinc-950 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Services</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Comprehensive automation solutions tailored for enterprise needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              },
              {
                title: 'AI-Assisted Engineering Analysis',
                description: 'Run multi-physics structural, strain, and compliance analyses in hours, not days. Material comparisons, failure point identification, and precision tolerance validation driven by AI'
              }
            ].map((service, idx) => (
              <Card key={idx} className="bg-zinc-900 border-zinc-800 hover:border-blue-500/40 transition-all h-full">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-400 text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Scale Your Operations Intelligently</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Partner with industry leaders who trust <span className="text-blue-400 font-semibold">B Automations</span> to deliver mission-critical automation infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/consultation">
              <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all">
                Book a Consultation
              </button>
            </Link>
            <Link href="/solutions">
              <button className="w-full sm:w-auto px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-white font-semibold rounded-full hover:bg-zinc-800 transition-all">
                Explore Solutions
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-400">B Automations</h3>
              <p className="text-zinc-500 text-sm">Enterprise automation solutions powered by AI</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/solutions" className="hover:text-white transition">Solutions</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Contact</h4>
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
