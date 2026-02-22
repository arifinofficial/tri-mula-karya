'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image, { StaticImageData } from 'next/image';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ImageParallaxProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  containerClassName?: string;
  yStart?: number;
  yEnd?: number;
}

const ImageParallax: React.FC<ImageParallaxProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  yStart = -20,
  yEnd = 20,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imageRef.current;

    if (!container || !img) return;

    // Create GSAP timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
      }
    });

    // Parallax animation
    tl.fromTo(img, {
      yPercent: yStart,
      ease: 'none'
    }, {
      yPercent: yEnd,
      ease: 'none'
    });

    // Cleanup function
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [yStart, yEnd]);

  return (
    <div
      className={`relative ${className}`}
    >
      <div
        ref={containerRef}
        className={`img-parallaxContainer w-full relative overflow-hidden ${containerClassName}`}
      >
        <Image
          ref={imageRef}
          src={src}
          alt={alt}
          className="absolute w-full h-[120%] object-cover -top-[10%]"
        />
      </div>
    </div>
  );
};

export default ImageParallax;