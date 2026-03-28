// src/components/organism/project/ProjectDetail.tsx
"use client";
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PressDataType } from '@/data/press/pressData';
gsap.registerPlugin(ScrollTrigger)
interface PressDetailProps {
    data: PressDataType;
}
const PressDetail = ({ data }: PressDetailProps) => {
    const wrapperRef = useRef<HTMLElement>(null)
    const sectionRef = useRef<HTMLDivElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const section = sectionRef.current
        const wrapper = wrapperRef.current
        if (!section || !wrapper) return

        // Trigger dari wrapper (200vh), bukan section
        ScrollTrigger.create({
            trigger: wrapper,
            start: 'top top',
            end: 'bottom top',
            pin: section,
            pinSpacing: false,
        })

        gsap.to(imageRef.current, {
            y: -120,
            ease: 'none',
            scrollTrigger: {
                trigger: wrapper,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })

        gsap.to(overlayRef.current, {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: wrapper,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })

        gsap.to(contentRef.current, {
            y: 100,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: wrapper,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })

    }, { scope: wrapperRef })

    return (
        // Wrapper 200vh — memberi ruang scroll untuk animasi
        <>
            <section ref={wrapperRef} style={{ height: '100vh' }}>
                <div ref={sectionRef} className='h-screen relative overflow-hidden'>

                    <div
                        ref={imageRef}
                        className='absolute w-full'
                        style={{ height: '120%', top: '-10%', willChange: 'transform' }}
                    >
                        <Image
                            src={data.pressHero}
                            alt="Tri Mula Karya - Hero Image"
                            className='object-cover w-full h-full'
                            fill
                            priority
                        />
                    </div>

                    {/* Base overlay */}
                    <div className='absolute inset-0 bg-black/30' style={{ zIndex: 10 }} />

                    {/* Scroll-driven dark overlay */}
                    <div
                        ref={overlayRef}
                        className='absolute inset-0 bg-black'
                        style={{ zIndex: 11, opacity: 0, willChange: 'opacity' }}
                    />

                    {/* Content */}
                    <div
                        ref={contentRef}
                        className='px-9 xl:px-21 absolute bottom-0 pb-24 lg:pb-16 left-0 w-full gap-5 md:gap-5 flex flex-col'
                        style={{ zIndex: 30, willChange: 'transform, opacity' }}
                    >
                        <span className='text-foreground'>{data.date}, {data.location}</span>
                        <h1 className='font-medium text-4xl md:text-6xl 2xl:text-[5rem] leading-[130%] xl:w-7/12'>
                            {data.title}
                        </h1>
                    </div>
                </div>
            </section>
            <section className="bg-primary z-10 relative py-25 px-9 xl:px-21">
                <div className='w-full lg:max-w-4xl 2xl:max-w-6xl mx-auto'>
                    <div dangerouslySetInnerHTML={{ __html:data.pressContent }} />
                </div>
            </section>
        </>
    )
}

export default PressDetail
