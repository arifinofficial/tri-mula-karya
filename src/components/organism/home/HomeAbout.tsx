import homeAboutData from '@/data/home/homeAboutData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeAbout = () => {
    return (
        <section className='px-9 xl:px-21 pt-37.5 pb-25 bg-primary z-10 relative '>
            <div className='flex flex-col md:flex-row md:justify-between gap-4 lg:gap-8'>
                <pre className='font-sans! font-medium text-sm md:text-base md:order-1'>{homeAboutData.preTitle}</pre>
                <h2 className='lg:w-7/12 xl:w-6/12 text-3xl md:text-5xl xl:text-6xl font-medium'>{homeAboutData.title}</h2>
            </div>
            <div className='grid grid-cols-6 md:grid-cols-12 gap-4 lg:gap-8 mt-12.5 xl:mt-25'>
                <div className='col-span-3 md:col-span-5 xl:col-span-2'>
                    <Image src={homeAboutData.imageLandscape}
                        alt="Tri Mula Karya - image"
                        className='w-full aspect-4/3 object-cover'
                    />
                </div>
                <div className='col-span-6 order-1 md:col-span-5 xl:row-span-2 xl:col-span-4 xl:col-start-4 xl:row-start-1'>
                    <p className='text-base md:text-lg xl:text-xl mt-10 xl:mt-0' dangerouslySetInnerHTML={{ __html: homeAboutData.desc }} />
                    <Link
                        href={'/about-us'}
                        className={`text-[#1A1A19] bg-[#F8FAFC] p-2.5 px-5 flex items-center gap-2.5 text-base hover:opacity-70 transition-all duration-500 ease-in-out flex-shrink-0 w-fit mt-10 xl:mt-17.5`}
                    >
                        <div className="w-1.5 h-1.5 bg-[#1A1A19]"></div>
                        More About Us
                    </Link>
                </div>
                <div className='col-span-3 col-start-4 md:col-span-6 md:col-start-7 md:row-span-2 xl:col-span-4 xl:col-start-9'>
                    <Image src={homeAboutData.imagePotrait}
                        alt="Tri Mula Karya - image"
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
        </section>
    )
}

export default HomeAbout
