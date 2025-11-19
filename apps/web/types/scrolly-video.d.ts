declare module 'scrolly-video/dist/ScrollyVideo.cjs.jsx' {
  import { ComponentType } from 'react';

  interface ScrollyVideoProps {
    src: string;
    poster?: string;
    transitionSpeed?: number;
    frameThreshold?: number;
    cover?: boolean;
    sticky?: boolean;
    full?: boolean;
    trackScroll?: boolean;
    onChange?: (progress: number) => void;
  }

  const ScrollyVideo: ComponentType<ScrollyVideoProps>;
  export default ScrollyVideo;
}

