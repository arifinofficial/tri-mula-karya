// "use client";

// import React, { useLayoutEffect } from "react";
// import TransitionLink from "./TransitionLink"; 
// import { usePageTransition } from "@/context/PageTransitionProvider"; 
// import gsap from "gsap";

// interface LayoutProps {
//   children: React.ReactNode;
// }

// export default function PageTransition({ children }: LayoutProps) {
//   const { slideRef, pageRef, contentRef, onPageMounted } = usePageTransition();

//   useLayoutEffect(() => {
//     if (slideRef.current) gsap.set(slideRef.current, { y: "100vh" });
//     onPageMounted();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     // bg-black so the "perspective" effect shows the dark bg behind the scaling page
//     <div className="bg-black">

//       {/* Layer 1 — white slide overlay, parked off-screen below by GSAP */}
//       <div
//         ref={slideRef}
//         className="fixed inset-0 z-10 bg-primary h-screen w-full"
//       />

//       {/* Layer 2 — page wrapper, scales back on exit (perspective effect) */}
//       <div
//         ref={pageRef}
//         className="relative bg-primary min-h-screen"
//       >
//         {/* Layer 3 — content wrapper, fades in on enter */}
//         <div ref={contentRef}>
//           {/* Page content */}
//           <main className="min-h-[calc(100vh-80px)]">
//             {children}
//           </main>

//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useLayoutEffect } from "react";
import { usePageTransition } from "@/context/PageTransitionProvider";
import gsap from "gsap";

interface LayoutProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: LayoutProps) {
  const { slideRef, pageRef, contentRef, onPageMounted } = usePageTransition();

  useLayoutEffect(() => {
    if (slideRef.current) gsap.set(slideRef.current, { y: "100vh" });
    onPageMounted();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // bg-black so the "perspective" effect shows the dark bg behind the scaling page
    <div className="bg-black">

      {/* Layer 1 — white slide overlay, parked off-screen below by GSAP */}
      <div
        ref={slideRef}
        className="fixed inset-0 z-10 bg-primary h-screen w-full"
      />

      {/* Layer 2 — page wrapper, scales back on exit (perspective effect) */}
      <div
        ref={pageRef}
        className="relative bg-primary min-h-screen"
      >
        {/* Layer 3 — content wrapper, fades in on enter */}
        <div ref={contentRef}>
          {/* Page content */}
          <main className="min-h-[calc(100vh-80px)]">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}