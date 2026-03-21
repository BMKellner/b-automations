import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-black pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
            About <span className="text-blue-400">B Automations</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
            Pioneering the future of enterprise automation through intelligent systems and innovative technology solutions
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-zinc-950 px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto w-full space-y-16 sm:space-y-20">
          {/* Our Mission */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-12">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 text-center max-w-4xl mx-auto leading-relaxed">
              At B Automations, we believe that intelligent automation is the key to unlocking unprecedented
              operational efficiency and business growth. Our mission is to empower organizations with
              cutting-edge automation solutions that transform complex workflows into streamlined,
              intelligent processes.
            </p>
          </div>

          {/* Core Values */}
          <div className="space-y-8 sm:space-y-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                <Card key={idx} className="bg-zinc-900 border-zinc-800 hover:border-blue-500/40 transition-all h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl sm:text-2xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zinc-400 text-sm sm:text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
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
                <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 sm:p-6 hover:border-blue-500/40 transition-all">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-sm sm:text-base">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 border-t border-zinc-900">
            {[
              { stat: '5', label: 'Enterprise Deployments' },
              { stat: '100%', label: 'Client Satisfaction' },
              { stat: '$2M+', label: 'Value Delivered' },
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400">
                  {item.stat}
                </div>
                <div className="text-zinc-500 text-xs sm:text-sm md:text-base">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">B Automations</h3>
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
