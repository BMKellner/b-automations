'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';

interface ScrollContent {
  startProgress: number;
  endProgress: number;
  title: string | React.ReactNode;
  description?: string;
  badge?: string;
  showButtons?: boolean;
}

interface ScrollVideoSectionProps {
  videoSrc: string;
  posterSrc?: string;
  height?: string;
  contents: ScrollContent[];
}

/**
 * Professional scroll-driven video using scrolly-video library
 * Updates continuously during scroll (not after)
 * Optimized for mobile: uses reduced intensity settings for better performance
 */
export default function ScrollVideoSection({
  videoSrc,
  posterSrc,
  height = 'h-[400vh]',
  contents,
}: ScrollVideoSectionProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScrollUpdate = useCallback((progress: number) => {
    setScrollProgress(progress);
    if (!isReady && progress >= 0) {
      setIsReady(true);
    }
  }, [isReady]);

  // Calculate content opacity
  const getContentOpacity = (content: ScrollContent): number => {
    const { startProgress, endProgress } = content;
    const fadeDistance = 0.05;

    if (startProgress === 0 && scrollProgress === 0) {
      return 1;
    }

    if (scrollProgress < startProgress) {
      return 0;
    } else if (scrollProgress < startProgress + fadeDistance) {
      return (scrollProgress - startProgress) / fadeDistance;
    } else if (scrollProgress < endProgress - fadeDistance) {
      return 1;
    } else if (scrollProgress < endProgress) {
      return (endProgress - scrollProgress) / fadeDistance;
    }
    return 0;
  };

  // Use shorter height on mobile for better performance
  const mobileHeight = 'h-[200vh]';
  const desktopHeight = height;
  const sectionHeight = isMobile ? mobileHeight : desktopHeight;

  // Mobile-optimized settings: higher frameThreshold = less frequent updates = better performance
  const frameThreshold = isMobile ? 0.5 : 0.1; // Mobile updates less frequently
  const transitionSpeed = isMobile ? 1.5 : 1; // Slightly slower on mobile for smoother performance

  return (
    <div ref={sectionRef} className={`relative ${sectionHeight}`} data-scroll-section>
      {/* Video Component - Optimized for both desktop and mobile */}
      <ScrollyVideo
        src={videoSrc}
        transitionSpeed={transitionSpeed}
        frameThreshold={frameThreshold}
        cover={true}
        sticky={true}
        full={true}
        trackScroll={true}
        onChange={handleScrollUpdate}
      />

      {/* Content Overlays */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="relative h-screen w-full flex items-center justify-center">
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content transitions */}
          <div className="relative z-10 h-full w-full flex items-center justify-center">
            {contents.map((content, idx) => {
              const opacity = getContentOpacity(content);

              return (
                <div
                  key={idx}
                  className="absolute inset-0 flex items-center justify-center px-8"
                  style={{
                    opacity,
                    pointerEvents: opacity > 0.5 ? 'auto' : 'none',
                    transition: 'opacity 0.3s ease-out',
                  }}
                >
                  <div className="text-center max-w-3xl pointer-events-auto flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px] px-4">
                    <div className="space-y-4 sm:space-y-6">
                      {content.badge && (
                        <Badge className="mb-2 text-xs sm:text-sm px-3 sm:px-4 py-1" variant="secondary">
                          {content.badge}
                        </Badge>
                      )}
                      <div className="min-h-[120px] sm:min-h-[200px] md:min-h-[250px] flex items-center justify-center">
                        <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl leading-tight">
                          {content.title}
                        </h2>
                      </div>
                      {content.description && (
                        <div className="min-h-[60px] sm:min-h-[100px] md:min-h-[120px] flex items-center justify-center">
                          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow-xl px-2 sm:px-0">
                            {content.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Loading state with poster image */}
      {!isReady && posterSrc && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 bg-cover bg-center"
          style={{ backgroundImage: `url(${posterSrc})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative text-center space-y-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <div className="text-white text-lg">Loading experience...</div>
          </div>
        </div>
      )}
      
      {/* Fallback loading (no poster) */}
      {!isReady && !posterSrc && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <div className="text-white text-lg">Loading experience...</div>
          </div>
        </div>
      )}
    </div>
  );
}
