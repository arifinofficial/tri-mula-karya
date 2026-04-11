"use client";

import { logo } from '@/assets';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const LoadingScreen = () => {
    const [count, setCount] = useState(0);
    const [isLabelExiting, setIsLabelExiting] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const duration = 2200;
        const start = performance.now();

        const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * 100));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(100);
                // Step 1: slide text up
                setTimeout(() => {
                    setIsLabelExiting(true);
                    // Step 2: after text animation (400ms) + pause (500ms) → exit
                    setTimeout(() => {
                        setIsExiting(true);
                        setTimeout(() => setIsVisible(false), 800);
                    }, 900);
                }, 300);
            }
        };

        requestAnimationFrame(animate);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 z-[500] bg-black transition-[clip-path] duration-700 ease-in-out"
            style={{
                clipPath: isExiting
                    ? 'polygon(0 0, 100% 0, 100% 0, 0 0)'
                    : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
            }}
        >
            {/* Mobile: logo centered */}
            <div className="lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image src={logo} alt="Tri Mula Karya" className="w-28" />
            </div>

            {/* Mobile: bottom bar */}
            <div className="lg:hidden absolute bottom-8 left-9 right-9 flex justify-between items-center">
                <div className="overflow-hidden h-5 md:h-6 lg:h-8">
                    <div
                        className="flex flex-col transition-transform duration-700 ease-in-out"
                        style={{ transform: isLabelExiting ? 'translateY(-50%)' : 'translateY(0)' }}
                    >
                        <span className="text-[#F8FAFC] text-base md:text-lg lg:text-2xl leading-5 md:leading-6 lg:leading-8">Tri Mula Karya</span>
                        <span className="text-[#F8FAFC] text-base md:text-lg lg:text-2xl leading-5 md:leading-6 lg:leading-8">Tri Mula Karya</span>
                    </div>
                </div>
                <span className="text-[#F8FAFC] text-base md:text-lg">[{count}%]</span>
            </div>

            {/* Desktop: single bottom row — logo left, name + counter right-aligned */}
            <div className="hidden lg:flex items-end absolute bottom-8 left-[5.25rem] right-[5.25rem]">
                <Image src={logo} alt="Tri Mula Karya" className="w-64 shrink-0" />
                <div className="flex flex-1 justify-between items-center pl-12 pb-1">
                    <div className="overflow-hidden h-5 md:h-6 lg:h-8">
                        <div
                            className="flex flex-col transition-transform duration-700 ease-in-out"
                            style={{ transform: isLabelExiting ? 'translateY(-50%)' : 'translateY(0)' }}
                        >
                            <span className="text-[#F8FAFC] text-base md:text-lg lg:text-2xl leading-5 md:leading-6 lg:leading-8">Tri Mula Karya</span>
                            <span className="text-[#F8FAFC] text-base md:text-lg lg:text-2xl leading-5 md:leading-6 lg:leading-8">Tri Mula Karya</span>
                        </div>
                    </div>
                    <span className="text-[#F8FAFC] text-base md:text-lg">[{count}%]</span>
                </div>
            </div>
        </div>
    );
};
