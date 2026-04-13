"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePageTransition } from "@/context/PageTransitionContext";

gsap.registerPlugin(ScrollTrigger);

function ScrollTriggerSync() {
  const lenis = useLenis(() => {
    ScrollTrigger.update();
  });

  const { isTransitioning } = usePageTransition();

  useEffect(() => {
    if (!lenis) return;
    if (isTransitioning) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [lenis, isTransitioning]);

  useEffect(() => {
    if (!lenis) return;

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value?: number) {
        if (value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.scrollerProxy(document.body, undefined as any);
    };
  }, [lenis]);

  return null;
}

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.4,
        smoothWheel: true,
        touchMultiplier: 1.5,
        wheelMultiplier: 1,
        syncTouch: false,
      }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}