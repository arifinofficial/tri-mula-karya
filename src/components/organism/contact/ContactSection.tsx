"use client";
import contactData from '@/data/contact/contactData'
import { useLenis } from 'lenis/react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const ContactSection = () => {
    const [isActive, setIsActive] = useState(false)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsActive(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])
    return (
        <section className='pt-40 lg:pt-50 pb-37.5 px-9 xl:px-21 bg-primary border-b border-foreground/30 md:border-0'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8'>
                <div className='md:col-span-6 flex flex-col justify-between gap-18 md:gap-52'>
                    <div className='flex flex-col gap-4 lg:gap-8'>
                        <pre className='font-sans! font-medium text-sm md:text-base'>{contactData.preTitle}</pre>
                        <h2 className='text-3xl md:text-5xl xl:text-6xl font-medium'>{contactData.title}</h2>
                    </div>

                    <div className='flex flex-col gap-8  md:gap-17.5 '>
                        <div className='flex flex-col gap-2 lg:w-[80%] xl:w-[70%] 2xl:w-[60%]'>
                            <span className='text-small md:text-base text-foreground/70'>{contactData.address.label}</span>
                            <p className='text-lg xl:text-xl'>{contactData.address.value}</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <span className='text-small md:text-base text-foreground/70'>{contactData.email.label}</span>
                            <Link href={`mailto:${contactData.email.value}`} className=" w-fit text-lg text-foreground xl:text-xl relative before:absolute before:left-0 before:bottom-0 before:h-px before:w-full before:bg-[#F8FAFC] before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left " >
                                {contactData.email.value}
                            </Link>
                        </div>

                        <div className='flex flex-col lg:flex-row gap-y-8 gap-15'>
                            {contactData.phone.map((item, index) => (
                                <div className='flex flex-col gap-2' key={index}>
                                    <span className='text-small md:text-base text-foreground/70'>{item.label}</span>
                                    <Link href={item.url} className=" w-fit text-lg text-foreground xl:text-xl relative before:absolute before:left-0 before:bottom-0 before:h-px before:w-full before:bg-[#F8FAFC] before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left " >
                                        {item.value}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='md:col-span-4 md:col-start-9'>
                    <Image src={contactData.image} alt='Tri Mula Karya - Image' className='w-full object-cover aspect-3/4' />
                </div>
            </div>
        </section>
    )
}

export default ContactSection
