"use client"

import { useEffect, useRef } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
    const currentWidth = useRef<number>(0)

    useEffect(() => {
        window.history.scrollRestoration = "manual"

        currentWidth.current = window.innerWidth
        
        const handleResize = () => {
            if (currentWidth.current !== window.innerWidth) {
                window.location.reload()
            }
        }
        
        window.addEventListener('resize', handleResize)
        
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    return (
        <>
            {children}
        </>
    )
}