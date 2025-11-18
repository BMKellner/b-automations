'use client';

import React, { useEffect, useRef } from 'react';

interface ParallaxVideoSectionProps {
  videoSrc: string;
  intensity?: number; // default: 0.25
  height?: string; // tailwind height classes, default: "h-[120vh]"
  children?: React.ReactNode;
  showOverlay?: boolean; // default: true
}

/**
 * ParallaxVideoSection - A production-quality React component with smooth parallax scrolling
 * 
 * Features:
 * - Smooth parallax effect using requestAnimationFrame
 * - Performance-optimized (no re-renders on scroll)
 * - Configurable intensity and styling
 * - Premium feel similar to Apple/Stripe hero sections
 * 
 * @example
 * <ParallaxVideoSection videoSrc="/parallax-background.mp4">
 *   <h1 className="text-white text-6xl font-bold drop-shadow-xl">
 *     Welcome to B Automations
 *   </h1>
 * </ParallaxVideoSection>
 */
export default function ParallaxVideoSection({
  videoSrc,
  intensity = 0.25,
  height = 'h-[120vh]',
  children,
  showOverlay = true,
}: ParallaxVideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return;

    let ticking = false;

    /**
     * Updates the video transform based on scroll position
     * Uses RAF to batch DOM updates for better performance
     */
    const updateParallax = () => {
      if (!videoRef.current) return;

      const scrollY = window.scrollY;
      const offset = scrollY * intensity;

      // Apply transform directly to DOM (no re-render)
      videoRef.current.style.transform = `translateY(${offset}px)`;

      lastScrollY.current = scrollY;
      ticking = false;
    };

    /**
     * Scroll event handler that throttles updates using RAF
     * This prevents jank and excessive calculations
     */
    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    // Initial position
    updateParallax();

    // Attach scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [intensity]);

  return (
    <section className={`relative ${height} overflow-hidden`}>
      {/* Background Video with Parallax Effect */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Gradient Overlay */}
      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 pointer-events-none" />
      )}

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        {children}
      </div>
    </section>
  );
}

/**
 * ============================================================================
 * EXAMPLE USAGE
 * ============================================================================
 * 
 * // Basic Usage
 * <ParallaxVideoSection videoSrc="/parallax-background.mp4">
 *   <h1 className="text-white text-6xl font-bold drop-shadow-xl">
 *     Welcome to B Automations
 *   </h1>
 * </ParallaxVideoSection>
 * 
 * // Custom Intensity & Height
 * <ParallaxVideoSection 
 *   videoSrc="/tech-particles.mp4"
 *   intensity={0.5}
 *   height="h-screen"
 *   showOverlay={false}
 * >
 *   <div className="text-center">
 *     <h1 className="text-white text-7xl font-black mb-4">
 *       Revolutionary Tech
 *     </h1>
 *     <p className="text-white/90 text-xl max-w-2xl">
 *       Experience the future of automation
 *     </p>
 *   </div>
 * </ParallaxVideoSection>
 * 
 * // Multiple Sections
 * <>
 *   <ParallaxVideoSection videoSrc="/hero.mp4">
 *     <h1>Hero Section</h1>
 *   </ParallaxVideoSection>
 * 
 *   <div className="h-screen bg-white">
 *     {/* Regular content *\/}
 *   </div>
 * 
 *   <ParallaxVideoSection 
 *     videoSrc="/features.mp4" 
 *     intensity={0.15}
 *   >
 *     <h2>Features Section</h2>
 *   </ParallaxVideoSection>
 * </>
 */

