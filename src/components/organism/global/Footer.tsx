import TransitionLink from '@/components/atoms/TransitionLink'
import footerData from '@/data/global/footerData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='px-9 xl:px-21 pt-20 pb-25 bg-primary'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-y-10'>
                <div className='order-2 mt-10 md:-order-2 md:mt-0 md:col-span-2'>
                    <Image src={footerData.logo}
                        alt='Tri Mula Karya - Logo'
                        className='w-full xl:w-[80%]'
                    />
                </div>
                <div className='md:col-span-2 md:col-start-5'>
                    <span className='text-small md:text-base block mb-3.75 text-foreground/70'>{footerData.nav.label}</span>
                    <div className='flex flex-col gap-4 lg:gap-8'>
                        {footerData.nav.navItems.map((item, index) => (
                            <TransitionLink
                                href={item.url}
                                key={index}
                                className="
                                    w-fit text-2xl lg:text-3xl xl:text-4xl relative
                                    before:absolute
                                    before:left-0
                                    before:bottom-0
                                    before:h-px
                                    before:w-full
                                    before:bg-[#F8FAFC]
                                    before:scale-x-0
                                    before:origin-right
                                    before:transition-transform
                                    before:duration-300
                                    hover:before:scale-x-100
                                    hover:before:origin-left
                                    text-foreground
                                "
                            >
                                {item.label}
                            </TransitionLink>
                        ))}
                    </div>
                </div>
                <div className='md:col-span-5 md:col-start-8'>
                    <div className='flex flex-col gap-y-8 gap-12.5'>
                        <div className='flex flex-col gap-3.75'>
                            <span className='text-small md:text-base text-foreground/70'>{footerData.contact.label}</span>
                            <p className='text-lg xl:text-xl'>{footerData.contact.address}</p>
                            <Link href={footerData.contact.email.url} className=" w-fit text-lg text-foreground xl:text-xl relative before:absolute before:left-0 before:bottom-0 before:h-px before:w-full before:bg-[#F8FAFC] before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left " >
                                {footerData.contact.email.label}
                            </Link>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-y-8 gap-15'>
                            {footerData.contact.phone.map((item, index) => (
                                <div className='flex flex-col gap-3.75' key={index}>
                                    <span className='text-small md:text-base text-foreground/70'>{item.label}</span>
                                    <Link href={item.url} className=" w-fit text-lg text-foreground xl:text-xl relative before:absolute before:left-0 before:bottom-0 before:h-px before:w-full before:bg-[#F8FAFC] before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left " >
                                        {item.value}
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col gap-3.75'>
                            <span className='text-small md:text-base text-foreground/70'>{footerData.contact.social.label}</span>
                            <div className='flex flex-wrap gap-5'>
                                {footerData.contact.social.socialItems.map((item, index) => (
                                    <Link href={item.url} key={index} className=" w-fit text-lg text-foreground xl:text-xl relative before:absolute before:left-0 before:bottom-0 before:h-px before:w-full before:bg-[#F8FAFC] before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left " >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='my-12.5 lg:my-25 w-full h-px bg-foreground/30 '></div>
            <div className='flex flex-row justify-between'>
                <p className='text-xs md:text-small xl:text-base text-foreground/70'>{footerData.footerCopyright}</p>
                <p className='text-xs md:text-small xl:text-base text-foreground/70'>{footerData.basedOn}</p>
            </div>
        </footer>
    )
}

export default Footer
