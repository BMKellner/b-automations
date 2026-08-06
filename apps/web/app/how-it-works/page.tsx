import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Reveal from '@/components/Reveal';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'How It Works - B Automations',
  description:
    'How we design, build, and deploy automation systems engineered for your operations, built on proven components so you get a custom fit without a custom-build timeline.',
};

export default function HowItWorksPage() {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Deep Dive',
      duration: '1-2 weeks',
      description:
        'We embed with your team and audit the workflows that actually run your business, not the ones on the org chart. The goal is finding where automation compounds.',
      activities: ['Process audit', 'Stakeholder interviews', 'Opportunity mapping', 'Infrastructure review'],
    },
    {
      number: '02',
      title: 'Custom Solution Design',
      duration: '2-3 weeks',
      description:
        'We assemble proven components into an architecture shaped around your workflows. Anything we have solved before, we do not solve twice. That is where the speed comes from.',
      activities: ['System architecture', 'Workflow design', 'Stack selection', 'Integration planning'],
    },
    {
      number: '03',
      title: 'Iterative Development',
      duration: '4-12 weeks',
      description:
        'Functional modules ship continuously. You see working software every week and steer it while it is still cheap to change direction.',
      activities: ['Agile sprints', 'Weekly demos', 'Continuous feedback', 'QA at every stage'],
    },
    {
      number: '04',
      title: 'Rigorous Testing',
      duration: '1-2 weeks',
      description:
        'Every edge case, failure mode, and load scenario gets validated in a staging environment that mirrors production exactly.',
      activities: ['Unit & integration', 'User acceptance', 'Performance & load', 'Security assessment'],
    },
    {
      number: '05',
      title: 'Seamless Deployment',
      duration: '1 week',
      description:
        'A phased rollout with minimal interruption to operations, paired with the training and documentation your team needs to own the system.',
      activities: ['Phased rollout', 'Team training', 'Documentation', 'Live monitoring'],
    },
    {
      number: '06',
      title: 'Ongoing Optimization',
      duration: 'Ongoing',
      description:
        'Launch is the midpoint, not the finish line. We monitor, tune, and extend the system as your business changes shape.',
      activities: ['Performance analytics', 'Optimization updates', 'Feature growth', 'Proactive support'],
    },
  ];

  const principles = [
    {
      title: 'Proven Foundations',
      description:
        "We build on components hardened across previous systems, so you never pay us to solve a solved problem.",
    },
    {
      title: 'Momentum From Day One',
      description:
        'Working software in your hands early and often, with full visibility into progress and trade-offs.',
    },
    {
      title: 'Custom Where It Counts',
      description:
        'Engineering effort goes into what makes your operation different, not into rebuilding the plumbing.',
    },
    {
      title: 'Deep Collaboration',
      description: 'Your team knows the business. We build in the open, alongside them.',
    },
    {
      title: 'Technology Agnostic',
      description: 'The requirements pick the stack, not our comfort zone.',
    },
    {
      title: 'Knowledge Transfer',
      description: 'Documentation and training so your team can own it without us.',
    },
  ];

  const comparison = [
    {
      generic: 'Quick to switch on, then slow to bend to your needs',
      custom: 'Shaped to you from day one, on components already proven',
    },
    {
      generic: 'You reshape your processes to fit the software',
      custom: 'The software is shaped around your processes',
    },
    {
      generic: 'The one capability you need is on a roadmap',
      custom: 'Your exact pain points are the specification',
    },
    {
      generic: "You pay for modules you'll never open",
      custom: 'Every feature earns its place in the build',
    },
    {
      generic: 'Integration with your stack is your problem',
      custom: 'It connects to the systems you already run',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950 pt-32 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
        {/* Ambient glow */}
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
            How It <span className="text-blue-400">Works</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Automation engineered for the way your business actually works,
            and built fast, because we never start from scratch.
          </p>
        </div>
      </section>

      {/* The case for custom */}
      <section className="bg-zinc-900 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-14">
          <Reveal>
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Why Custom-Built Matters
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                Off-the-shelf software asks you to change how you operate.
                A bespoke system does the adapting instead.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl overflow-hidden border border-zinc-800">
              {/* Column headers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 bg-zinc-950">
                <div className="px-5 py-4 sm:px-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                    Generic Platforms
                  </span>
                </div>
                <div className="px-5 py-4 sm:px-6 border-t sm:border-t-0 sm:border-l border-zinc-800 bg-blue-500/5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                    B Automations
                  </span>
                </div>
              </div>

              {comparison.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 bg-zinc-900 border-t border-zinc-800">
                  <div className="px-5 py-4 sm:px-6 sm:py-5 flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-700 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-zinc-500">{row.generic}</p>
                  </div>
                  <div className="px-5 py-4 sm:px-6 sm:py-5 flex items-start gap-3 border-t sm:border-t-0 sm:border-l border-zinc-800 bg-blue-500/5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-zinc-200">{row.custom}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-zinc-950 px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          <Reveal>
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                From First Conversation to Live System
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                Six stages, with working software in your hands long before the last one.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Connecting rail */}
            <div
              aria-hidden
              className="absolute left-[15px] sm:left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/50 via-zinc-800 to-transparent"
            />

            {processSteps.map((step, idx) => (
              <Reveal
                key={step.number}
                delay={idx * 60}
                className={idx === processSteps.length - 1 ? '' : 'pb-10 sm:pb-12'}
              >
                <div className="relative pl-12 sm:pl-16">
                  {/* Node */}
                  <div className="absolute left-0 top-0 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 ring-4 ring-zinc-950">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-blue-400">
                      {step.number}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:min-h-10">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {step.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="text-[11px] font-medium text-zinc-500 border-zinc-800 bg-zinc-900/60"
                      >
                        {step.duration}
                      </Badge>
                    </div>

                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                      {step.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {step.activities.map((activity) => (
                        <span
                          key={activity}
                          className="rounded-full border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-[11px] sm:text-xs text-zinc-500"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-zinc-900 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-14">
          <Reveal>
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                How We Work
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                Six commitments that hold on every engagement.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 sm:gap-y-10">
            {principles.map((principle, idx) => (
              <Reveal key={principle.title} delay={idx * 50}>
                <div className="border-t border-zinc-800 pt-5 hover:border-blue-500/40 transition-colors">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="text-center text-sm sm:text-base text-zinc-500 pt-2">
              See what this looks like in practice:{' '}
              <Link
                href="/solutions"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-400/30 hover:decoration-blue-300 transition-colors"
              >
                explore our solutions
              </Link>
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
