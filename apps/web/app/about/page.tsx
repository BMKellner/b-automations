import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About - B Automations',
  description:
    'Who we are and why we build automation that fits your business: custom-fit, built on proven foundations, and delivered fast.',
};

export default function AboutPage() {
  const stats = [
    { stat: '5', label: 'Enterprise Deployments' },
    { stat: '100%', label: 'Client Satisfaction' },
    { stat: '$2M+', label: 'Value Delivered' },
  ];

  const values = [
    {
      title: "We're Genuinely Curious",
      description:
        'We dig into how your business actually runs because we like understanding it, not just to check a discovery box.',
    },
    {
      title: 'We Say What We Mean',
      description:
        "No jargon-filled pitches, no overpromising. If something won't work for you, we'll tell you before you pay for it.",
    },
    {
      title: 'We Care About the Outcome',
      description:
        'Success is a system that runs quietly in the background while your team focuses on the work that needs a human.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950 pt-32 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-32 h-96"
          style={{
            background:
              'radial-gradient(50% 60% at 50% 50%, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0) 100%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            About <span className="text-blue-400">B Automations</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            We build automation that fits how you actually work,
            not the other way around.
          </p>
        </div>
      </section>

      {/* Why we do this + stats */}
      <section className="bg-zinc-900 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-zinc-800">
        <div className="max-w-3xl mx-auto space-y-12 sm:space-y-16">
          <Reveal>
            <div className="text-center space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Why We Do This
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed">
                We genuinely love this work. There is a real satisfaction in
                taking a process held together by spreadsheets and one
                team&rsquo;s institutional memory and turning it into a system
                that just runs correctly, every time. Hand us a workflow full
                of edge cases and conflicting requirements and we are happy.
                That is the whole reason B Automations exists: not because
                automation is trendy, but because solving these problems is
                what we actually want to spend our time doing.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-2 border-t border-zinc-800">
              {stats.map((item) => (
                <div key={item.label} className="text-center pt-6">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-400">
                    {item.stat}
                  </div>
                  <div className="text-sm text-zinc-500 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-zinc-950 px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-14">
          <Reveal>
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                How We Show Up
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                Less about mission statements, more about how we actually act.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-8">
            {values.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 60}>
                <div className="border-t border-zinc-800 pt-5 hover:border-blue-500/40 transition-colors h-full">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="text-center text-sm sm:text-base text-zinc-500 pt-2">
              Curious how we actually build?{' '}
              <Link
                href="/how-it-works"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-400/30 hover:decoration-blue-300 transition-colors"
              >
                See our process
              </Link>{' '}
              or{' '}
              <Link
                href="/solutions"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-400/30 hover:decoration-blue-300 transition-colors"
              >
                explore what we&rsquo;ve shipped
              </Link>
              .
            </p>
          </Reveal>
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
