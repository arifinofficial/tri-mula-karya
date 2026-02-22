'use client'

import homeHeroData from '@/data/home/homeHeroData'
import Image from 'next/image'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HomeHero = () => {
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
        <section ref={wrapperRef} style={{ height: '100vh' }}>
            <div ref={sectionRef} className='h-screen relative overflow-hidden'>

                <div
                    ref={imageRef}
                    className='absolute w-full'
                    style={{ height: '120%', top: '-10%', willChange: 'transform' }}
                >
                    <Image
                        src={homeHeroData.imageBg}
                        alt="Tri Mula Karya - Hero Image"
                        className='object-cover w-full h-full'
                        fill
                        priority
                    />
                </div>

                {/* Base overlay */}
                <div className='absolute inset-0 bg-black/20' style={{ zIndex: 10 }} />

                {/* Scroll-driven dark overlay */}
                <div
                    ref={overlayRef}
                    className='absolute inset-0 bg-black'
                    style={{ zIndex: 11, opacity: 0, willChange: 'opacity' }}
                />

                {/* Content */}
                <div
                    ref={contentRef}
                    className='px-9 xl:px-21 absolute bottom-0 pb-16 lg:pb-16 left-0 w-full gap-16 lg:gap-30 2xl:gap-56 flex flex-col'
                    style={{ zIndex: 30, willChange: 'transform, opacity' }}
                >
                    <h1 className='font-medium text-4xl md:text-6xl 2xl:text-[5rem] leading-[130%] xl:w-7/12'>
                        {homeHeroData.title}
                    </h1>

                    <div className='flex flex-col md:flex-row md:justify-between md:items-end'>
                        <p className='md:w-1/2 lg:w-5/12 xl:w-4/12 text-lg md:text-xl 2xl:text-2xl'>
                            {homeHeroData.desc}
                        </p>
                        <p className='text-sm md:text-base mt-20 md:mt-0'>Scroll Down</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero