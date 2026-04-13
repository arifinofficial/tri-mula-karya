import ImageParallax from '@/components/atoms/ImageParallax'
import ctaData from '@/data/global/ctaData'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
    return (
        <section className='px-3 xl:px-5 bg-primary'>
            <div className='relative'>
                <ImageParallax
                    src={ctaData.imageBg}
                    alt="Tri Mula Karya - image"
                    className="w-full h-[90vh] lg:h-[100vh]"
                    containerClassName='h-full'
                />

                <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center bg-primary/40'>
                    <div className='w-10/12 lg:w-8/12 flex flex-col gap-12.5 items-center'>
                        <h2 className='font-medium text-4xl md:text-6xl 2xl:text-[5rem] leading-[130%] text-center'>
                            {ctaData.title}
                        </h2>
                        <Link
                            href={ctaData.cta.url}
                            className={`text-[#1A1A19] bg-[#F8FAFC] p-2.5 px-5 flex items-center gap-2.5 text-base hover:bg-[#D4D5D7] transition-all duration-500 ease-in-out flex-shrink-0 w-fit`}
                        >
                            <div className="w-1.5 h-1.5 bg-[#1A1A19]"></div>
                            {ctaData.cta.label}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
