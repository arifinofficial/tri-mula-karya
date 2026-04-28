import aboutHeroData from '@/data/about/aboutHeroData'
import Image from 'next/image'
import React from 'react'

const AboutHero = () => {
    return (
        <section className='pt-35 lg:pt-50 pb-18.5 lg:pb-37.5 px-9 xl:px-21 bg-primary border-b border-foreground/30 md:border-0'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-y-12.5 gap-4 lg:gap-8 md:gap-y-52! '>
                <div className=' md:col-span-4 md:row-span-2'>
                    <Image src={aboutHeroData.image1} className='aspect-3/4 object-cover w-full h-full' alt="Tri Mula Karya - image" />
                </div>
                <div className='md:col-span-7 md:col-start-6 md:row-start-1 -order-1 md:order-1'>
                    <div className='flex flex-col lg:flex-row md:justify-between gap-4 lg:gap-8'>
                        <pre className='font-sans! font-medium text-sm md:text-base lg:order-1'>{aboutHeroData.preTitle}</pre>
                        <h1 className='lg:w-7/12 xl:w-7/12 text-3xl md:text-5xl xl:text-6xl font-medium'>{aboutHeroData.title}</h1>
                    </div>
                </div>
                <div className='md:col-span-7 md:col-start-6 md:row-start-2 md:self-end'>
                    <div className='flex flex-col md:flex-row md:justify-between gap-4 lg:gap-8'>
                        <p className='md:w-10/12 lg:w-5/12 text-base md:text-lg xl:text-xl' dangerouslySetInnerHTML={{ __html: aboutHeroData.desc }} />
                        <Image src={aboutHeroData.image2} className='hidden lg:block aspect-square object-cover md:w-4/12 h-full' alt="Tri Mula Karya - image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHero
