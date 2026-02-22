// "use client";

// import { logo, logoBlack } from '@/assets'
// // import { Link } from '@/components/atoms/Link';
// import Image from 'next/image'
// import Link from 'next/link';
// import React, { useState, useEffect } from 'react'

// export const Navbar = () => {
//     const [isOpen, setIsOpen] = useState<boolean>(false)
//     const [isAnimating, setIsAnimating] = useState<boolean>(false)
//     const [isMounted, setIsMounted] = useState<boolean>(false)
//     const [isScrolled, setIsScrolled] = useState<boolean>(false)

//     // Set mounted state after component mounts to prevent hydration mismatch
//     useEffect(() => {
//         setIsMounted(true)
//     }, [])

//     // Handle scroll effect
//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY
//             setIsScrolled(scrollPosition > 50) // Change navbar after scrolling 50px
//         }

//         window.addEventListener('scroll', handleScroll)
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//     const toggleMenu = () => {
//         if (!isOpen) {
//             // Opening menu
//             setIsOpen(true)
//             setIsAnimating(true)
//         } else {
//             // Closing menu
//             setIsAnimating(false)
//             // Wait for animation to complete before setting isOpen to false
//             setTimeout(() => {
//                 setIsOpen(false)
//             }, 600) // Match the animation duration
//         }
//     }

//     // Function to handle logo click - close menu if open
//     const handleLogoClick = () => {
//         if (isOpen || isAnimating) {
//             toggleMenu()
//         }
//     }

//     // Prevent body scroll when menu is open
//     useEffect(() => {
//         if (isOpen) {
//             document.body.style.overflow = 'hidden'
//         } else {
//             document.body.style.overflow = 'unset'
//         }

//         // Cleanup on unmount
//         return () => {
//             document.body.style.overflow = 'unset'
//         }
//     }, [isOpen])

//     const menuItems = [
//         { name: 'Padel', href: '/padel' },
//         { name: 'Pilates', href: '/pilates' },
//         { name: 'Wellness & Recovery', href: '/wellness-and-recovery' },
//         { name: 'About Us', href: '/about' },
//         { name: 'Contact', href: '/contact' }
//     ]

//     const socialLinks = [
//         { name: 'Instagram', href: '#' },
//         { name: 'Youtube', href: '#' },
//         { name: 'Facebook', href: '#' }
//     ]

//     // Determine logo and colors based on scroll state and menu state
//     const shouldUseLightTheme = isScrolled || isOpen || isAnimating
//     const currentLogo = shouldUseLightTheme ? logoBlack : logo
//     const navBackgroundColor = shouldUseLightTheme ? 'bg-[#F8FAFC]' : 'bg-transparent'
//     const textColor = shouldUseLightTheme ? 'text-[#1A1A19]' : 'text-[#F8FAFC]'
//     const navBtnColor = shouldUseLightTheme ? 'text-[#F8FAFC] bg-[#1A1A19]' : ' bg-[#F8FAFC] text-[#1A1A19]'
//     const navRectBtnColor = shouldUseLightTheme ? ' bg-[#F8FAFC] text-[#1A1A19] ' : 'text-[#F8FAFC] bg-[#1A1A19]'
//     const burgerColor = shouldUseLightTheme ? '#1A1A19' : '#F8FAFC'

//     // Don't render the full navigation until component is mounted
//     if (!isMounted) {
//         return (
//             <header className={`w-full px-[2.25rem] xl:px-[5.25rem] py-4 lg:py-6 bg-transparent fixed top-0 left-0 z-[100] transition-colors duration-300`}>
//                 <nav className='flex justify-between items-center relative z-[99]'>
//                     <Link href={'/'}>
//                         <Image
//                             src={logo}
//                             alt="Logo Desa Bali Padel"
//                             className='w-[3.5rem] lg:w-[4.5rem] transition-all duration-300'
//                         />
//                     </Link>

//                     <div className='flex-row gap-50 hidden lg:flex items-center'>
//                         <div className='flex-row gap-12.5 flex'>
//                             <Link href={'/projects'} className={`${textColor} text-base hover:opacity-70 transition-all duration-300`}>Projects</Link>
//                             <Link href={'/about-us'} className={`${textColor} text-base hover:opacity-70 transition-all duration-300`}>About Us</Link>
//                             <Link href={'/press'} className={`${textColor} text-base hover:opacity-70 transition-all duration-300`}>Press</Link>
//                         </div>

//                         <Link href={'/contact'} className={`${navBtnColor} p-2.5 px-5 flex items-center gap-2.5 text-base hover:opacity-70 transition-all duration-300`}>
//                             <div className={`w-1.5 h-1.5 ${navRectBtnColor}`}></div>
//                             Get In Touch
//                         </Link>
//                     </div>

//                     <div id="nav-burger" className="hamburger-icon">
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </div>
//                 </nav>
//             </header>
//         )
//     }

//     return (
//         <header className={`w-full px-[2.25rem] xl:px-[5.25rem] overflow-x-hidden py-4 lg:py-6 ${navBackgroundColor} fixed top-0 left-0 z-[100] transition-colors duration-300`}>
//             <nav className='flex justify-between items-center relative z-[99]'>
//                 <Link href={'/'} onClick={handleLogoClick}>
//                     <Image
//                         src={currentLogo}
//                         alt="Logo Desa Bali Padel"
//                         className='w-[3.5rem] lg:w-[4.5rem] xl:w-[5rem] transition-all duration-300'
//                     />
//                 </Link>

//                 <div className='flex-row gap-50 hidden lg:flex items-center'>
//                     <div className='flex-row gap-12.5 flex'>
//                         <Link href={'/projects'} className={`${textColor} text-base hover:opacity-70 transition-all duration-300`}>Projects</Link>
//                         <Link href={'/about-us'} className={`${textColor} text-base hover:opacity-70 transition-all duration-300`}>About Us</Link>
//                         <Link href={'/press'} className={`${textColor} text-base hover:opacity-70 transition-all duration-300`}>Press</Link>
//                     </div>

//                     <Link href={'/contact'} className={`${navBtnColor} p-2.5 px-5 flex items-center gap-2.5 text-base hover:opacity-70 transition-all duration-300`}>
//                         <div className={`w-1.5 h-1.5 ${navRectBtnColor}`}></div>
//                         Get In Touch
//                     </Link>
//                 </div>

//                 <div
//                     id="nav-burger"
//                     className={`hamburger-icon ${(isOpen || isAnimating) ? 'open' : ''}`}
//                     onClick={toggleMenu}
//                     style={{
//                         '--burger-color': burgerColor
//                     } as React.CSSProperties}
//                 >
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </div>
//             </nav>

//             {/* Full Navigation Overlay */}
//             <div
//                 className={`fullNav fixed inset-0 bg-[#F8FAFC] z-[90] transition-all duration-700 overflow-x-hidden ease-in-out overflow-scroll ${!isOpen && !isAnimating ? 'pointer-events-none' : ''
//                     }`}
//                 style={{
//                     clipPath: (isOpen && isAnimating)
//                         ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
//                         : 'polygon(0 0, 100% 0, 100% 0, 0 0)',
//                     visibility: isOpen || isAnimating ? 'visible' : 'hidden'
//                 }}
//             >
//                 <div className="flex flex-col h-full pt-24 px-[2.25rem]">
//                     {/* Main Menu Items */}
//                     <div className="flex-1">
//                         {menuItems.map((item, index) => (
//                             <div key={item.name} className="border-b border-[#1A1A19]/20 last:border-b-0">
//                                 <Link
//                                     href={item.href}
//                                     onClick={toggleMenu}
//                                     className={`block py-6 text-[#1A1A19] text-lg transition-all duration-500 ease-out ${(isOpen && isAnimating)
//                                         ? 'translate-x-0 opacity-100'
//                                         : 'translate-x-8 opacity-0'
//                                         }`}
//                                     style={{
//                                         transitionDelay: (isOpen && isAnimating) ? `${200 + (index * 100)}ms` : '0ms'
//                                     }}
//                                 >
//                                     {item.name}
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Social Links */}
//                     <div className="pb-8">
//                         <h3 className={`text-[#1A1A19] text-sm mb-4 transition-all duration-500 ease-out ${(isOpen && isAnimating)
//                             ? 'translate-x-0 opacity-100'
//                             : 'translate-x-8 opacity-0'
//                             }`}
//                             style={{
//                                 transitionDelay: (isOpen && isAnimating) ? '700ms' : '0ms'
//                             }}>
//                             Social
//                         </h3>
//                         <div className="flex flex-row gap-6">
//                             {socialLinks.map((social, index) => (
//                                 <Link
//                                     key={social.name}
//                                     href={social.href}
//                                     className={`text-[#1A1A19] text-sm font-normal hover:opacity-70 transition-all duration-500 ease-out  ${(isOpen && isAnimating)
//                                         ? 'translate-x-0 opacity-100'
//                                         : 'translate-x-8 opacity-0'
//                                         }`}
//                                     style={{
//                                         transitionDelay: (isOpen && isAnimating) ? `${800 + (index * 50)}ms` : '0ms'
//                                     }}
//                                 >
//                                     {social.name}
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     )
// }


"use client";

import { logo, logoBlack } from '@/assets'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isAnimating, setIsAnimating] = useState<boolean>(false)
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    useEffect(() => { setIsMounted(true) }, [])

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        if (!isOpen) {
            setIsOpen(true)
            setIsAnimating(true)
        } else {
            setIsAnimating(false)
            setTimeout(() => setIsOpen(false), 600)
        }
    }

    const handleLogoClick = () => {
        if (isOpen || isAnimating) toggleMenu()
    }

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset'
        return () => { document.body.style.overflow = 'unset' }
    }, [isOpen])

    const socialLinks = [
        { name: 'Instagram', href: '#' },
        { name: 'Youtube', href: '#' },
        { name: 'Facebook', href: '#' }
    ]

    const navLinks = [
        { label: 'Projects', href: '/projects' },
        { label: 'About Us', href: '/about-us' },
        { label: 'Press', href: '/press' },
    ]

    const isMenuActive = isOpen || isAnimating
    const textColor = 'text-[#F8FAFC]'
    const currentLogo = isMenuActive ? logoBlack : logo
    const burgerColor = isMenuActive ? '#1A1A19' : '#1A1A19'
    const slideItems = isScrolled && !isMenuActive
    const desktopBurgerVisible = slideItems || isMenuActive

    if (!isMounted) {
        return (
            <header className="w-full px-[2.25rem] xl:px-[5.25rem] py-4 lg:py-6 bg-transparent fixed top-0 left-0 z-[100]">
                <nav className='flex justify-between items-center'>
                    <Link href={'/'}><Image src={logo} alt="Logo" className='w-[3.5rem] lg:w-[4.5rem] xl:w-[5rem] transition-all duration-300' /></Link>
                    <div className='hidden lg:flex items-center'>

                        <div className='flex items-center gap-50'>
                            {/* Nav links */}
                            <div className='flex items-center gap-13'>
                                {navLinks.map(({ label, href }, index) => (
                                    <div key={label} className="overflow-hidden">
                                        <Link
                                            href={href}
                                            className={`block ${textColor} text-base hover:bg-[#D4D5D7] transition-all duration-500 ease-in-out ${(slideItems || isMenuActive) ? 'translate-y-[200%] opacity-0' : 'translate-y-0 opacity-100'}`}
                                            style={{
                                                transitionDelay: (slideItems || isMenuActive)
                                                    ? `${index * 60}ms`
                                                    : `${(navLinks.length - 1 - index) * 60}ms`
                                            }}
                                        >
                                            {label}
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            {/* Get In Touch — hidden when menu open */}
                            <div className="overflow-hidden">
                                <Link
                                    href={'/contact'}
                                    className={`text-[#1A1A19] bg-[#F8FAFC] p-2.5 px-5 flex items-center gap-2.5 text-base hover:bg-[#D4D5D7] transition-all duration-500 ease-in-out flex-shrink-0 ${isMenuActive ? 'translate-y-[200%] opacity-0' : 'translate-y-0 opacity-100'}`}
                                >
                                    <div className="w-1.5 h-1.5 bg-[#1A1A19]"></div>
                                    Get In Touch
                                </Link>
                            </div>
                        </div>

                        {/* Desktop burger — margin-left transitions with width so no leftover gap */}
                        <div
                            className={`nav-burger-desktop-wrapper hover:bg-[#D4D5D7]! transition-all duration-500 ease-in-out ${desktopBurgerVisible ? 'is-visible' : 'is-hidden'}`}
                            onClick={toggleMenu}
                        >
                            <div className={`nav-burger-desktop-icon ${isMenuActive ? 'open' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }

    return (
        <>
            <header className="w-full px-[2.25rem] xl:px-[5.25rem] py-4 lg:py-6 bg-transparent fixed top-0 left-0 z-[100]">
                <nav className='flex justify-between items-center relative z-[99]'>

                    {/* Logo */}
                    <div className="overflow-hidden">
                        <Link
                            href={'/'}
                            onClick={handleLogoClick}
                            className={`block transition-all duration-500 ease-in-out ${slideItems ? 'translate-y-[200%] opacity-0' : 'translate-y-0 opacity-100'}`}
                        >
                            <Image src={currentLogo} alt="Logo Desa Bali Padel" className='w-[3.5rem] lg:w-[4.5rem] xl:w-[5rem] transition-all duration-300' />
                        </Link>
                    </div>

                    {/* Desktop right side */}
                    <div className='hidden lg:flex items-center'>

                        <div className='flex items-center gap-50'>
                            {/* Nav links */}
                            <div className='flex items-center gap-13'>
                                {navLinks.map(({ label, href }, index) => (
                                    <div key={label} className="overflow-hidden">
                                        <Link
                                            href={href}
                                            className={`block ${textColor} text-base hover:bg-[#D4D5D7] transition-all duration-500 ease-in-out ${(slideItems || isMenuActive) ? 'translate-y-[200%] opacity-0' : 'translate-y-0 opacity-100'}`}
                                            style={{
                                                transitionDelay: (slideItems || isMenuActive)
                                                    ? `${index * 60}ms`
                                                    : `${(navLinks.length - 1 - index) * 60}ms`
                                            }}
                                        >
                                            {label}
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            {/* Get In Touch — hidden when menu open */}
                            <div className="overflow-hidden">
                                <Link
                                    href={'/contact'}
                                    className={`text-[#1A1A19] bg-[#F8FAFC] p-2.5 px-5 flex items-center gap-2.5 text-base hover:bg-[#D4D5D7] transition-all duration-500 ease-in-out flex-shrink-0 ${isMenuActive ? 'translate-y-[200%] opacity-0' : 'translate-y-0 opacity-100'}`}
                                >
                                    <div className="w-1.5 h-1.5 bg-[#1A1A19]"></div>
                                    Get In Touch
                                </Link>
                            </div>
                        </div>

                        {/* Desktop burger — margin-left transitions with width so no leftover gap */}
                        <div
                            className={`nav-burger-desktop-wrapper hover:bg-[#D4D5D7]! transition-all duration-500 ease-in-out ${desktopBurgerVisible ? 'is-visible' : 'is-hidden'}`}
                            onClick={toggleMenu}
                        >
                            <div className={`nav-burger-desktop-icon ${isMenuActive ? 'open' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>

                    {/* Mobile burger */}
                    <div className='p-[0.575rem] bg-foreground nav-burger-wrapper hover:bg-[#D4D5D7] transition-all duration-500 ease-in-out'>
                        <div
                            id="nav-burger"
                            className={`${isMenuActive ? 'open' : ''}`}
                            onClick={toggleMenu}
                            style={{ '--burger-color': burgerColor } as React.CSSProperties}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                </nav>

                {/* Full Navigation Overlay */}
                <div
                    className={`fullNav fixed inset-0 bg-[#F8FAFC] z-[90] transition-all duration-700 overflow-x-hidden ease-in-out overflow-scroll ${!isOpen && !isAnimating ? 'pointer-events-none' : ''}`}
                    style={{
                        clipPath: (isOpen && isAnimating)
                            ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                            : 'polygon(0 0, 100% 0, 100% 0, 0 0)',
                        visibility: isOpen || isAnimating ? 'visible' : 'hidden'
                    }}
                >
                    <div className="flex flex-col h-full pt-24 px-[2.25rem]">
                        <div className="flex-1">
                            {navLinks.map((item, index) => (
                                <div key={item.label} className="border-b border-[#1A1A19]/20 last:border-b-0">
                                    <Link
                                        href={item.href}
                                        onClick={toggleMenu}
                                        className={`block py-6 text-[#1A1A19] text-lg transition-all duration-500 ease-out ${(isOpen && isAnimating) ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                                        style={{ transitionDelay: (isOpen && isAnimating) ? `${200 + (index * 100)}ms` : '0ms' }}
                                    >
                                        {item.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className="pb-8">
                            <h3
                                className={`text-[#1A1A19] text-sm mb-4 transition-all duration-500 ease-out ${(isOpen && isAnimating) ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                                style={{ transitionDelay: (isOpen && isAnimating) ? '700ms' : '0ms' }}
                            >Social</h3>
                            <div className="flex flex-row gap-6">
                                {socialLinks.map((social, index) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        className={`text-[#1A1A19] text-sm font-normal hover:opacity-70 transition-all duration-500 ease-out ${(isOpen && isAnimating) ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                                        style={{ transitionDelay: (isOpen && isAnimating) ? `${800 + (index * 50)}ms` : '0ms' }}
                                    >
                                        {social.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}