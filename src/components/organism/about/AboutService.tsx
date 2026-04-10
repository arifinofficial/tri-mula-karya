// "use client";
// import ImageParallax from '@/components/atoms/ImageParallax'
// import aboutServiceData from '@/data/about/aboutServiceData'
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from 'next/image'
// import React, { useEffect, useRef } from 'react'

// const AboutService = () => {
//     const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
//     const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
//     const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
//         const overlays = overlayRefs.current.filter(Boolean) as HTMLElement[];
//         const contents = contentRefs.current.filter(Boolean) as HTMLElement[];

//         if (cards.length === 0) return;

//         const triggers: ScrollTrigger[] = [];

//         cards.forEach((card, index) => {
//             if (index < cards.length - 1) {
//                 const pinTrigger = ScrollTrigger.create({
//                     trigger: card,
//                     start: "top top",
//                     endTrigger: cards[cards.length - 1],
//                     end: "top top",
//                     pin: true,
//                     pinSpacing: false,
//                 });
//                 triggers.push(pinTrigger);
//             }

//             if (index < cards.length - 1) {
//                 const overlay = overlays[index];
//                 const content = contents[index];

//                 const updateTrigger = ScrollTrigger.create({
//                     trigger: cards[index + 1],
//                     start: "top bottom",
//                     end: "top top",
//                     onUpdate: (self) => {
//                         const progress = self.progress;
//                         const scale = 1 - progress * 0.25;
//                         const rotation = (index % 2 === 0 ? 5 : -5) * progress;

//                         gsap.set(card, { scale, rotation });

//                         // Opacity pada overlay (darkening)
//                         if (overlay) {
//                             overlay.style.opacity = String(progress * 0.5);
//                         }

//                         // Blur langsung pada content wrapper card
//                         if (content) {
//                             content.style.filter = `blur(${progress * 6}px)`;
//                         }
//                     },
//                 });
//                 triggers.push(updateTrigger);
//             }
//         });

//         return () => {
//             triggers.forEach(t => t.kill());
//         };
//     }, []);

//     return (
//         <section>
//             <div className='relative'>
//                 <ImageParallax
//                     src={aboutServiceData.imageBg}
//                     alt="Tri Mula Karya - image"
//                     className="w-full h-screen"
//                     containerClassName='h-full'
//                 />

//                 <div className='absolute top-0 left-0 h-full w-full bg-primary/20 px-9 xl:px-21 py-20'>
//                     <div className='w-full h-full flex flex-col justify-between gap-8'>
//                         <h2 className='font-medium text-4xl md:text-6xl 2xl:text-[5rem] leading-[130%] md:w-10/12 lg:w-8/12 xl:w-6/12'>
//                             {aboutServiceData.title}
//                         </h2>
//                         <Image
//                             src={aboutServiceData.arrow}
//                             className='w-15.5 lg:w-18.5 xl:w-27.5 h-auto self-end'
//                             alt='Tri Mula Karya - image'
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* Sticky cards section */}
//             <div className='relative w-full'>
//                 {aboutServiceData.serviceItems.map((item, index) => (
//                     <div
//                         key={index}
//                         ref={el => { cardRefs.current[index] = el; }}
//                         className='relative w-full h-svh bg-primary text-[#F8FAFC] will-change-transform'
//                     >
//                         {/* Dark overlay */}
//                         <div
//                             ref={el => { overlayRefs.current[index] = el; }}
//                             className='absolute inset-0 bg-black pointer-events-none z-[2]'
//                             style={{ opacity: 0 }}
//                         />

//                         {/* Content wrapper — blur applied here directly */}
//                         <div
//                             ref={el => { contentRefs.current[index] = el; }}
//                             className='relative z-[1] w-full px-9 xl:px-21 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8 py-6 lg:py-15'
//                             style={{ filter: 'blur(0px)' }}
//                         >
//                             {/* Index */}
//                             <div className='md:col-span-2'>
//                                 <span className='text-3xl md:text-5xl xl:text-6xl font-medium'>
//                                     [{String(index + 1).padStart(2, '0')}]
//                                 </span>
//                             </div>

//                             {/* Content */}
//                             <div className='md:col-span-8 md:col-start-4 mt-20 md:mt-0'>
//                                 <div className='w-full lg:w-3/4 flex flex-col gap-6 lg:gap-y-10'>
//                                     <h2 className='font-medium text-4xl md:text-6xl 2xl:text-[5rem] leading-[130%]'>
//                                         {item.name}
//                                     </h2>

//                                     <div className='w-full'>
//                                         <Image
//                                             src={item.image}
//                                             alt={item.name}
//                                             className='w-full object-cover aspect-video xl:h-[16rem] 2xl:h-auto'

//                                         />
//                                     </div>
//                                     <div className='flex flex-col lg:flex-'>

//                                         <div className='flex flex-col md:flex-row gap-y-2 gap-6'>
//                                             <div className='flex-[2]'>
//                                                 <p className=' text-foreground/70 text-sm'>
//                                                     [ About the service ]
//                                                 </p>
//                                             </div>
//                                             <div className='flex-[4]'>
//                                                 <p className='text-sm md:text-base'>
//                                                     {item.desc}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default AboutService;

"use client";
import ImageParallax from '@/components/atoms/ImageParallax'
import aboutServiceData from '@/data/about/aboutServiceData'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const AboutService = () => {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
        const overlays = overlayRefs.current.filter(Boolean) as HTMLElement[];
        const contents = contentRefs.current.filter(Boolean) as HTMLElement[];

        if (cards.length === 0) return;

        const triggers: ScrollTrigger[] = [];

        // Hanya scale/blur effect — pin sudah ditangani CSS sticky
        cards.forEach((card, index) => {
            if (index < cards.length - 1) {
                const overlay = overlays[index];
                const content = contents[index];

                const t = ScrollTrigger.create({
                    trigger: cards[index + 1],
                    scroller: document.body,
                    start: "top bottom",
                    end: "top top",
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const scale = 1 - progress * 0.25;
                        const rotation = (index % 2 === 0 ? 5 : -5) * progress;

                        gsap.set(card, { scale, rotation, transformOrigin: "center top" });

                        if (overlay) {
                            overlay.style.opacity = String(progress * 0.5);
                        }

                        if (content) {
                            content.style.filter = `blur(${progress * 4}px)`;
                        }
                    },
                    onLeaveBack: () => {
                        gsap.set(card, { scale: 1, rotation: 0 });
                        if (overlay) overlay.style.opacity = "0";
                        if (content) content.style.filter = "blur(0px)";
                    }
                });

                triggers.push(t);
            }
        });

        return () => {
            triggers.forEach(t => t.kill());
        };
    }, []);

    const itemCount = aboutServiceData.serviceItems.length;

    return (
        <section>
            <div className='relative'>
                <ImageParallax
                    src={aboutServiceData.imageBg}
                    alt="Tri Mula Karya - image"
                    className="w-full h-screen"
                    containerClassName='h-full'
                />
                <div className='absolute top-0 left-0 h-full w-full bg-primary/20 px-9 xl:px-21 py-20'>
                    <div className='w-full h-full flex flex-col justify-between gap-8'>
                        <h2 className='font-medium text-4xl md:text-6xl 2xl:text-[5rem] leading-[130%] md:w-10/12 lg:w-8/12 xl:w-6/12'>
                            {aboutServiceData.title}
                        </h2>
                        <Image
                            src={aboutServiceData.arrow}
                            className='w-15.5 lg:w-18.5 xl:w-27.5 h-auto self-end'
                            alt='Tri Mula Karya - image'
                        />
                    </div>
                </div>
            </div>

            {/*
                Wrapper tingginya = jumlah card × 100vh
                Setiap card sticky di top: 0, jadi card berikutnya
                akan "naik" di atas card sebelumnya saat scroll
            */}
            <div
                ref={wrapperRef}
                className='relative w-full'
                style={{ height: `${itemCount * 100}vh` }}
            >
                {aboutServiceData.serviceItems.map((item, index) => (
                    <div
                        key={index}
                        ref={el => { cardRefs.current[index] = el; }}
                        className='sticky top-0 w-full h-screen bg-primary text-[#F8FAFC] will-change-transform overflow-hidden'
                        style={{ zIndex: index + 1 }}
                    >
                        {/* Dark overlay */}
                        <div
                            ref={el => { overlayRefs.current[index] = el; }}
                            className='absolute inset-0 bg-black pointer-events-none'
                            style={{ opacity: 0, zIndex: 2 }}
                        />

                        {/* Content wrapper */}
                        <div
                            ref={el => { contentRefs.current[index] = el; }}
                            className='relative w-full h-full px-9 xl:px-21 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8 py-6 lg:py-15'
                            style={{ filter: 'blur(0px)', zIndex: 1 }}
                        >
                            {/* Index */}
                            <div className='md:col-span-2'>
                                <span className='text-3xl md:text-5xl xl:text-6xl font-medium'>
                                    [{String(index + 1).padStart(2, '0')}]
                                </span>
                            </div>

                            {/* Content */}
                            <div className='md:col-span-8 md:col-start-4 mt-20 md:mt-0'>
                                <div className='w-full lg:w-3/4 flex flex-col gap-6 lg:gap-y-10'>
                                    <h2 className='font-medium text-4xl md:text-6xl 2xl:text-[5rem] leading-[130%]'>
                                        {item.name}
                                    </h2>
                                    <div className='w-full'>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            className='w-full object-cover aspect-video xl:h-[16rem] 2xl:h-auto'
                                        />
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-y-2 gap-6'>
                                        <div className='flex-[2]'>
                                            <p className='text-foreground/70 text-sm'>
                                                [ About the service ]
                                            </p>
                                        </div>
                                        <div className='flex-[4]'>
                                            <p className='text-sm md:text-base'>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutService;