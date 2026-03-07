// src/components/organism/about/AboutProcess.tsx
import aboutProcessData from '@/data/about/aboutProcessData'
import React from 'react'

const AboutProcess = () => {
    return (
        <section className='px-9 xl:px-21 pb-37.5 pt-25 bg-primary'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8'>
                <div className='md:col-span-5'>
                    <div className='flex flex-col gap-4 lg:gap-8 sticky top-25'>
                        <pre className='font-sans! font-medium text-sm md:text-base'>{aboutProcessData.preTitle}</pre>
                        <h2 className='text-3xl md:text-5xl xl:text-6xl font-medium'>{aboutProcessData.title}</h2>
                    </div>
                </div>
                <div className='md:col-span-6 md:col-start-7 mt-12.5 md:mt-0'>
                    <div className='flex flex-col'>
                        {aboutProcessData.processItems.map((item, index) => {
                            const isLast = index === aboutProcessData.processItems.length - 1
                            const number = String(index + 1).padStart(2, '0') // 01, 02, 03...

                            return (
                                <div key={index} className='flex flex-row gap-8'>
                                    <div className='flex flex-col items-center'>
                                        <div className='flex items-center justify-center w-8 h-8 lg:w-11 lg:h-11 bg-foreground text-primary font-medium text-lg lg:text-xl xl:text-2xl'>
                                            {number}
                                        </div>
                                        {!isLast && (
                                            <div className="w-px h-full border-l border-transparent"
                                                style={{
                                                    borderImage: "repeating-linear-gradient(to bottom, currentColor 0, currentColor 12px, transparent 12px, transparent 24px) 1"
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className={`flex flex-col gap-4 ${!isLast ? 'mb-20 lg:mb-40' : ''}`}>
                                        <h3 className='text-2xl font-medium lg:text-[2rem]'>{item.name}</h3>
                                        <p className='text-foreground/70 text-base'>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProcess