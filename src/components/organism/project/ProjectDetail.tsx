// src/components/organism/project/ProjectDetail.tsx
"use client";
import { ProjectDataType } from '@/data/global/projectData';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
interface ProjectDetailHeroProps {
    data: ProjectDataType;
}
const ProjectDetail = ({ data }: ProjectDetailHeroProps) => {
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
                            src={data.projectHero}
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
                        className='px-9 xl:px-21 absolute bottom-0 pb-24 lg:pb-16 left-0 w-full gap-5 md:gap-10 flex flex-col'
                        style={{ zIndex: 30, willChange: 'transform, opacity' }}
                    >
                        <h1 className='font-medium text-4xl md:text-6xl 2xl:text-[5rem] leading-[130%] xl:w-7/12'>
                            {data.projectName}
                        </h1>

                        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 gap-y-8 lg:gap-8 items-center'>
                            <div className='lg:col-span-5 xl:col-span-5 2xl:col-span-5'>
                                <p className='text-lg md:text-xl 2xl:text-2xl'>
                                    {data.projectDesc}
                                </p>
                            </div>
                            <div className='lg:col-span-5 lg:col-start-8 xl:col-span-6 xl:col-start-7 2xl:col-span-5 2xl:col-start-8'>
                                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8'>
                                    <div className='flex flex-col gap-2'>
                                        <span className='text-sm md:text-base'>Date Completed</span>
                                        <p className='text-base lg:text-lg xl:text-xl font-medium'>{data.projectInfo.dateCompleted}</p>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <span className='text-sm md:text-base'>Project Type</span>
                                        <p className='text-base lg:text-lg xl:text-xl font-medium'>{data.projectInfo.projectType}</p>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <span className='text-sm md:text-base'>Project Location</span>
                                        <p className='text-base lg:text-lg xl:text-xl font-medium'>{data.projectInfo.projectLocation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-primary z-10 relative py-25 px-9 xl:px-21">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8">
                    {data.projectGallery.map((image, index) => {
                        const isThird = index % 3 === 2;

                        return (
                            <div
                                key={index}
                                className={
                                    isThird
                                        ? "col-span-1 md:col-span-12"
                                        : "col-span-1 md:col-span-6"
                                }
                            >
                                <Image
                                    src={image}
                                    alt=""
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    )
}

export default ProjectDetail
