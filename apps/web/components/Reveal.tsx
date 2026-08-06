'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

type RevealProps = {
  children: React.ReactNode;
  /** Stagger in milliseconds, applied once the element enters the viewport */
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    // An observer reports on every target as soon as it is observed, even when
    // off-screen. If nothing arrives at all the observer is not running, so we
    // reveal unconditionally rather than leave the content invisible forever.
    let didReport = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        didReport = true;
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);

    const failsafe = window.setTimeout(() => {
      if (!didReport) setHasEntered(true);
    }, 1000);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  const isVisible = hasEntered || prefersReducedMotion;

  return (
    <div
      ref={ref}
      data-reveal
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
}
