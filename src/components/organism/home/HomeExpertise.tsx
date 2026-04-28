"use client";
import homeExpertiseData from '@/data/home/homeExpertiseData';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { TransitionLink } from '@/components/atoms/TransitionLink';

const HomeExpertise = () => {
    // ========================================== All Refs =========================================
    const imgContainerRef = useRef<HTMLDivElement>(null);
    const focus = useRef<number>(0);

    const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
    const backgroundRefs = useRef<(HTMLDivElement | null)[]>([]);
    const numberRefs = useRef<(HTMLDivElement | null)[]>([]);
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);
    const svgRefs = useRef<(SVGSVGElement | null)[]>([]);
    const linkWrapperClass = useRef<(HTMLDivElement | null)[]>([]);

    const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
        minimumIntegerDigits: 2,
    });


    useEffect(() => {
        const imgContainer = imgContainerRef.current;

        return () => {
            if (imgContainer) {
                gsap.killTweensOf(imgContainer.children);
            }
        };
    }, []);

    const handleFocus = useCallback(
        (newFocus: number, directionalSensitive: boolean) => {
            if (newFocus === focus.current || !imgContainerRef.current) return;

            const images = imgContainerRef.current.querySelectorAll('[data-index]') as NodeListOf<HTMLElement>;

            images.forEach((el, i) => {
                if (i === newFocus) {
                    gsap.set(el, { zIndex: 2 });
                } else if (i === focus.current) {
                    gsap.set(el, { zIndex: 1 });
                } else {
                    gsap.set(el, { zIndex: 0 });
                }
            });

            const targetElement = images[newFocus];

            if (targetElement) {
                gsap.killTweensOf(targetElement);

                const isGoingBackward = newFocus < focus.current && directionalSensitive;

                gsap.set(targetElement, {
                    clipPath: isGoingBackward
                        ? "inset(0% 0% 100% 0%)"
                        : "inset(100% 0% 0% 0%)",
                    scale: 1.15,
                });

                const tl = gsap.timeline();

                tl.to(targetElement, {
                    clipPath: "inset(0% 0% 0% 0%)",
                    duration: 0.45,
                    ease: "cubic-bezier(0.24, 0.43, 0.15, 0.97)",
                }, 0).to(targetElement, {
                    scale: 1,
                    duration: 0.6,
                    ease: "cubic-bezier(0.24, 0.43, 0.15, 0.97)",
                }, 0);
            }

            focus.current = newFocus;
        },
        []
    );


    useEffect(() => {
        const cleanupFunctions: (() => void)[] = [];

        homeExpertiseData.expertiseItems.forEach((_, index) => {
            const container = containerRefs.current[index];
            const background = backgroundRefs.current[index];
            const number = numberRefs.current[index];
            const text = textRefs.current[index];
            const svg = svgRefs.current[index];
            const linkWrapper = linkWrapperClass.current[index];

            if (!container || !background) return;

            gsap.set(background, {
                scaleY: 0,
                transformOrigin: 'top center',
            });

            const handleMouseEnter = (e: MouseEvent) => {
                handleFocus(index, true);

                const bounds = container.getBoundingClientRect();
                const mouseY = e.clientY;
                const isFromTop = mouseY < bounds.top + bounds.height / 2;

                const origin = isFromTop ? 'top' : 'bottom';
                background.style.transformOrigin = `${origin} center`;

                gsap.killTweensOf(background);

                gsap.to(background, {
                    scaleY: 1,
                    duration: 0.45,
                    ease: 'power3.out',
                });

                if (number) {
                    gsap.to(number, {
                        color: '#1A1A19',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                }

                if (text) {
                    gsap.to(text, {
                        color: '#1A1A19',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                }

                if (svg) {
                    const path = svg.querySelector('path');
                    if (path) {
                        gsap.to(path, {
                            fill: '#1A1A19',
                            duration: 0.3,
                            ease: 'power2.out',
                        });
                    }

                    gsap.to(svg, {
                        rotate: 45,
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                }

                if (linkWrapper) {
                    gsap.to(linkWrapper, {
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                }
            };

            const handleMouseLeave = (e: MouseEvent) => {
                const bounds = container.getBoundingClientRect();
                const mouseY = e.clientY;
                const isToTop = mouseY < bounds.top + bounds.height / 2;

                const origin = isToTop ? 'top' : 'bottom';
                background.style.transformOrigin = `${origin} center`;

                gsap.killTweensOf(background);

                gsap.to(background, {
                    scaleY: 0,
                    duration: 0.3,
                    ease: 'power2.inOut',
                });

                if (number) {
                    gsap.to(number, {
                        color: '#F8FAFC',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                }

                if (text) {
                    gsap.to(text, {
                        color: '#F8FAFC',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                }

                if (svg) {
                    const path = svg.querySelector('path');
                    if (path) {
                        gsap.to(path, {
                            fill: 'white',
                            duration: 0.3,
                            ease: 'power2.out',
                        });
                    }
                    gsap.to(svg, {
                        rotate: 0,
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                }

                if (linkWrapper) {
                    gsap.to(linkWrapper, {
                        paddingLeft: "0",
                        paddingRight: "0",
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                }
            };

            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);

            cleanupFunctions.push(() => {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            });
        });

        return () => {
            cleanupFunctions.forEach(cleanup => cleanup());
        };
    }, [handleFocus]);
    return (
        <section className='px-9 xl:px-21 pb-18.5 pt-12.5 lg:pb-37.5 lg:pt-25 bg-primary'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8'>
                <div className='md:col-span-4'>
                    <pre className='font-sans! font-medium text-sm md:text-base'>{homeExpertiseData.preTitle}</pre>
                </div>
                <div className='md:col-span-7 md:col-start-6'>
                    <h2 className='text-3xl md:text-5xl xl:text-6xl font-medium'>{homeExpertiseData.title}</h2>
                </div>
            </div>
            <div className='hidden md:grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8 mt-12.5 xl:mt-37.5'>
                <div className='md:col-span-4'>
                    <div ref={imgContainerRef} className="relative overflow-hidden md:w-full h-full">
                        <Image
                            src={homeExpertiseData.expertiseItems[homeExpertiseData.expertiseItems.length - 1].image}
                            alt="placeholder"
                            aria-hidden={true}
                            className="invisible w-full aspect-square lg:h-full"
                        />
                        {homeExpertiseData.expertiseItems.map((eachLink, i) => (
                            <div
                                key={`image-${i + 1}`}
                                data-index={i}
                                className="absolute inset-0"
                                style={{ zIndex: -i }}
                            >
                                <Image
                                    src={eachLink.image}
                                    alt={eachLink.label}
                                    className="size-full object-cover aspect-square w-full md:w-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='md:col-span-5 md:col-start-6 mt-12.5 md:mt-0'>
                    {homeExpertiseData.expertiseItems.map((eachLink, index) => (
                        <TransitionLink href={eachLink.link} key={`link-${index + 1}`}>
                            <div>
                                <div
                                    ref={(el) => { containerRefs.current[index] = el; }}
                                    className="relative overflow-hidden cursor-pointer border-t border-[#F8FAFC]/20"
                                >
                                    <div
                                        ref={(el) => { backgroundRefs.current[index] = el; }}
                                        className="absolute left-0 right-0 bg-[#F8FAFC] z-0 h-full origin-top scale-y-0"
                                    />
                                    <div className="relative z-10 flex items-center gap-4 py-4 lg:py-6 justify-between" ref={(el) => { linkWrapperClass.current[index] = el; }}>
                                        <div className='flex flex-row gap-x-10 lg:gap-x-20'>
                                            <div
                                                ref={(el) => { numberRefs.current[index] = el; }}
                                                className="text-sm text-[#F8FAFC]"
                                            >
                                                [ {leadingZeroFormatter.format(index + 1)} ]
                                            </div>
                                            <div
                                                ref={(el) => { textRefs.current[index] = el; }}
                                                className="text-semiBold text-base 2xl:text-xl leading-none text-[#F8FAFC]"
                                            >
                                                {eachLink.label}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TransitionLink>
                    ))}
                </div>

            </div>
            {/* mobile */}
            <div className='md:hidden grid grid-cols-1 mt-12.5'>
                {homeExpertiseData.expertiseItems.map((eachLink, index) => (
                    <TransitionLink href={eachLink.link} key={index}
                        className='w-full relative group'>
                        <div className='overflow-hidden relative w-full h-[10rem]'>
                            <Image
                                src={eachLink.image}
                                alt={eachLink.label}
                                className="size-full object-cover h-[10rem] group-hover:scale-110 transition-all duration-500"
                            />
                            <div className='absolute top-0 left-0 w-full h-full bg-primary/50'></div>
                            <span className='text-semiBold w-full text-center text-2xl leading-none text-[#F8FAFC] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                {eachLink.label}
                            </span>
                        </div>
                    </TransitionLink>
                ))}
            </div>
        </section>
    )
}

export default HomeExpertise
