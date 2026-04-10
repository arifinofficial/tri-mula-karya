// "use client";

// import React, {
//   createContext,
//   useCallback,
//   useContext,
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import gsap from "gsap";
// import { CustomEase } from "gsap/CustomEase";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

// // Register CustomEase plugin — must happen once at module level
// gsap.registerPlugin(CustomEase);

// // ─── Easing ───────────────────────────────────────────────────────────────────
// // Exact match to Framer's [0.76, 0, 0.24, 1] cubic-bezier
// CustomEase.create("pageEase", "0.76, 0, 0.24, 1");
// const EASE = "pageEase";

// // ─── Types ────────────────────────────────────────────────────────────────────

// interface TransitionContextValue {
//   navigateTo: (href: string) => void;
//   isTransitioning: boolean;
//   slideRef: React.RefObject<HTMLDivElement | null>;
//   pageRef: React.RefObject<HTMLDivElement | null>;
//   contentRef: React.RefObject<HTMLDivElement | null>;
//   /** Called by Inner layout on mount so enter animation can fire */
//   onPageMounted: () => void;
// }

// // ─── Context ──────────────────────────────────────────────────────────────────

// const TransitionContext = createContext<TransitionContextValue | null>(null);

// export function usePageTransition() {
//   const ctx = useContext(TransitionContext);
//   if (!ctx)
//     throw new Error(
//       "usePageTransition must be used inside PageTransitionProvider"
//     );
//   return ctx;
// }

// // ─── Provider ─────────────────────────────────────────────────────────────────

// export default function PageTransitionProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const router = useRouter();
//   const pathname = usePathname();

//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // DOM refs — attached by the Inner layout on each page
//   const slideRef = useRef<HTMLDivElement | null>(null);
//   const pageRef = useRef<HTMLDivElement | null>(null);
//   const contentRef = useRef<HTMLDivElement | null>(null);

//   // Track whether we're mid-transition so onPageMounted knows to run enter anim
//   const pendingEnter = useRef(false);
//   const currentPath = useRef(pathname);

//   // ─── onPageMounted ──────────────────────────────────────────────────────────
//   // Inner layout calls this in useLayoutEffect after the new page's DOM is ready.
//   // This is the reliable signal that refs are pointing at fresh DOM nodes.
//   const onPageMounted = useCallback(() => {
//     if (!pendingEnter.current) return;
//     pendingEnter.current = false;

//     const slide = slideRef.current;
//     const page = pageRef.current;
//     const content = contentRef.current;
//     if (!slide || !page || !content) return;

//     // Ensure new page starts invisible and at correct transform before revealing
//     gsap.set(page, { scale: 1, y: 0, opacity: 1 });
//     gsap.set(content, { opacity: 0 });

//     // ENTER sequence
//     const enterTl = gsap.timeline({
//       onComplete: () => {
//         setIsTransitioning(false);
//         ScrollTrigger.refresh(); // ← tambahkan ini
//       },
//     });

//     // Slide pulls back down off-screen (same ease + duration as exit slide)
//     enterTl.to(
//       slide,
//       { y: "100vh", duration: 1, ease: EASE },
//       0
//     );

//     // Content fades in after slide starts moving (mirrors opacity.enter — 0.5s)
//     enterTl.fromTo(
//       content,
//       { opacity: 0 },
//       { opacity: 1, duration: 0.5, ease: "power2.out" },
//       0.15
//     );
//   }, []);

//   // ─── navigateTo ─────────────────────────────────────────────────────────────
//   const navigateTo = useCallback(
//     (href: string) => {
//       if (href === currentPath.current || isTransitioning) return;

//       const slide = slideRef.current;
//       const page = pageRef.current;
//       const content = contentRef.current;

//       if (!slide || !page || !content) {
//         router.push(href);
//         return;
//       }

//       setIsTransitioning(true);

//       // EXIT sequence — all three layers fire in parallel (position "0")
//       const exitTl = gsap.timeline({
//         onComplete: () => {
//           currentPath.current = href;
//           pendingEnter.current = true; // onPageMounted will pick this up
//           router.push(href);
//         },
//       });

//       // slide (exit): y 100vh → 0, duration 1s
//       exitTl.to(slide, { y: 0, duration: 1, ease: EASE }, 0);

//       // perspective (exit): scale 0.9, y -150, opacity 0.5, duration 1.2s
//       exitTl.to(
//         page,
//         { scale: 0.9, y: -150, opacity: 0.5, duration: 1.2, ease: EASE },
//         0
//       );

//       // opacity (exit): current content stays opacity 1 — no change needed
//     },
//     [isTransitioning, router]
//   );

//   // ─── Handle direct URL navigation (back/forward, typed URL) ─────────────────
//   useEffect(() => {
//     if (pathname !== currentPath.current) {
//       currentPath.current = pathname;
//       // Reset slide position for direct navigations
//       if (slideRef.current) gsap.set(slideRef.current, { y: "100vh" });
//       if (pageRef.current) gsap.set(pageRef.current, { scale: 1, y: 0, opacity: 1 });
//       if (contentRef.current) gsap.set(contentRef.current, { opacity: 1 });
//     }
//   }, [pathname]);

//   return (
//     <TransitionContext.Provider
//       value={{
//         navigateTo,
//         isTransitioning,
//         slideRef,
//         pageRef,
//         contentRef,
//         onPageMounted,
//       }}
//     >
//       {children}
//     </TransitionContext.Provider>
//   );
// }


"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

CustomEase.create("pageEase", "0.76, 0, 0.24, 1");
const EASE = "pageEase";

interface TransitionContextValue {
  navigateTo: (href: string) => void;
  isTransitioning: boolean;
  /** true setelah enter animation selesai — aman untuk init ScrollTrigger */
  isPageReady: boolean;
  slideRef: React.RefObject<HTMLDivElement | null>;
  pageRef: React.RefObject<HTMLDivElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  onPageMounted: () => void;
}

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function usePageTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx)
    throw new Error(
      "usePageTransition must be used inside PageTransitionProvider"
    );
  return ctx;
}

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [isTransitioning, setIsTransitioning] = useState(false);
  // Mulai true karena halaman pertama (direct load / refresh) langsung siap
  const [isPageReady, setIsPageReady] = useState(true);

  const slideRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const pendingEnter = useRef(false);
  const currentPath = useRef(pathname);

  const onPageMounted = useCallback(() => {
    if (!pendingEnter.current) return;
    pendingEnter.current = false;

    const slide = slideRef.current;
    const page = pageRef.current;
    const content = contentRef.current;
    if (!slide || !page || !content) return;

    // Halaman baru belum siap — ScrollTrigger di child harus menunggu
    setIsPageReady(false);

    gsap.set(page, { scale: 1, y: 0, opacity: 1 });
    gsap.set(content, { opacity: 0 });

    const enterTl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
        // Baru set ready setelah enter animation benar-benar selesai
        setIsPageReady(true);
      },
    });

    enterTl.to(slide, { y: "100vh", duration: 1, ease: EASE }, 0);
    enterTl.fromTo(
      content,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" },
      0.15
    );
  }, []);

  const navigateTo = useCallback(
    (href: string) => {
      if (href === currentPath.current || isTransitioning) return;

      const slide = slideRef.current;
      const page = pageRef.current;
      const content = contentRef.current;

      if (!slide || !page || !content) {
        router.push(href);
        return;
      }

      setIsTransitioning(true);
      // Tandai tidak siap saat mulai exit
      setIsPageReady(false);

      const exitTl = gsap.timeline({
        onComplete: () => {
          currentPath.current = href;
          pendingEnter.current = true;
          router.push(href);
        },
      });

      exitTl.to(slide, { y: 0, duration: 1, ease: EASE }, 0);
      exitTl.to(
        page,
        { scale: 0.9, y: -150, opacity: 0.5, duration: 1.2, ease: EASE },
        0
      );
    },
    [isTransitioning, router]
  );

  useEffect(() => {
    if (pathname !== currentPath.current) {
      currentPath.current = pathname;
      if (slideRef.current) gsap.set(slideRef.current, { y: "100vh" });
      if (pageRef.current) gsap.set(pageRef.current, { scale: 1, y: 0, opacity: 1 });
      if (contentRef.current) gsap.set(contentRef.current, { opacity: 1 });
      // Direct navigation (back/forward) langsung siap
      setIsPageReady(true);
    }
  }, [pathname]);

  return (
    <TransitionContext.Provider
      value={{
        navigateTo,
        isTransitioning,
        isPageReady,
        slideRef,
        pageRef,
        contentRef,
        onPageMounted,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}