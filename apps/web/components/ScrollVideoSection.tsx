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
 * Fully responsive: adapts to all screen sizes dynamically
 */
export default function ScrollVideoSection({
  videoSrc,
  posterSrc,
  height = 'h-[400vh]',
  contents,
}: ScrollVideoSectionProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [viewportSize, setViewportSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoReadyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive viewport detection - handles all screen sizes
  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setViewportSize('mobile');
      } else if (width < 1024) {
        setViewportSize('tablet');
      } else {
        setViewportSize('desktop');
      }
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Fallback: Set ready after a short delay if onChange hasn't fired
  useEffect(() => {
    if (!isReady) {
      // Set a shorter timeout as fallback - video should initialize quickly
      videoReadyTimeoutRef.current = setTimeout(() => {
        setIsReady(true);
      }, 500); // Wait 500ms for video to initialize

      return () => {
        if (videoReadyTimeoutRef.current) {
          clearTimeout(videoReadyTimeoutRef.current);
        }
      };
    }
  }, [isReady]);

  const handleScrollUpdate = useCallback((progress: number) => {
    setScrollProgress(progress);
    if (!isReady) {
      setIsReady(true);
      // Clear the fallback timeout if onChange fires
      if (videoReadyTimeoutRef.current) {
        clearTimeout(videoReadyTimeoutRef.current);
        videoReadyTimeoutRef.current = null;
      }
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

  // Responsive height calculation - adapts to all screen sizes
  const getResponsiveHeight = () => {
    switch (viewportSize) {
      case 'mobile':
        return 'h-[200vh]';
      case 'tablet':
        return 'h-[300vh]';
      case 'desktop':
        return height;
      default:
        return height;
    }
  };

  // Responsive performance settings - optimized for each viewport
  const getPerformanceSettings = () => {
    switch (viewportSize) {
      case 'mobile':
        return { frameThreshold: 0.5, transitionSpeed: 1.5 };
      case 'tablet':
        return { frameThreshold: 0.3, transitionSpeed: 1.2 };
      case 'desktop':
        return { frameThreshold: 0.1, transitionSpeed: 1 };
      default:
        return { frameThreshold: 0.1, transitionSpeed: 1 };
    }
  };

  const { frameThreshold, transitionSpeed } = getPerformanceSettings();
  const sectionHeight = getResponsiveHeight();

  return (
    <div 
      ref={sectionRef} 
      className={`relative ${sectionHeight} w-full`}
      data-scroll-section
    >
      {/* Video Component - Fully responsive */}
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

      {/* Content Overlays - Responsive positioning */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="relative h-full w-full flex items-center justify-center">
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content transitions */}
          <div className="relative z-10 h-full w-full flex items-center justify-center px-4 sm:px-6 md:px-8">
            {contents.map((content, idx) => {
              const opacity = getContentOpacity(content);

              return (
                <div
                  key={idx}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    opacity,
                    pointerEvents: opacity > 0.5 ? 'auto' : 'none',
                    transition: 'opacity 0.3s ease-out',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <div className="text-center max-w-3xl pointer-events-auto flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8">
                    <div className="space-y-3 sm:space-y-4 md:space-y-6 w-full">
                      {content.badge && (
                        <Badge className="mb-2 text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1" variant="secondary">
                          {content.badge}
                        </Badge>
                      )}
                      <div className="flex items-center justify-center min-h-[80px] sm:min-h-[120px] md:min-h-[200px] lg:min-h-[250px]">
                        <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-2xl leading-tight px-2 sm:px-4">
                          {content.title}
                        </h2>
                      </div>
                      {content.description && (
                        <div className="flex items-center justify-center min-h-[40px] sm:min-h-[60px] md:min-h-[100px] lg:min-h-[120px]">
                          <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 drop-shadow-xl px-2 sm:px-4 max-w-4xl">
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
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-cover bg-center" style={{ backgroundImage: `url(${posterSrc})` }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative text-center space-y-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <div className="text-white text-sm sm:text-base md:text-lg">Loading experience...</div>
          </div>
        </div>
      )}
      
      {/* Fallback loading (no poster) */}
      {!isReady && !posterSrc && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <div className="text-white text-sm sm:text-base md:text-lg">Loading experience...</div>
          </div>
        </div>
      )}
    </div>
  );
}
