// app/components/TransitionLink.tsx
'use client'

import Link, { LinkProps } from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { usePageTransition } from '@/context/PageTransitionContext' 
import { ReactNode, MouseEvent, AnchorHTMLAttributes } from 'react'

type TransitionLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  Omit<LinkProps, 'href'> & {
    href: string
    children: ReactNode
    className?: string
  }

export const TransitionLink = ({ href, children, className, onClick, ...rest }: TransitionLinkProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const { startTransition, isTransitioning } = usePageTransition()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Same page: just call onClick (e.g. close nav) and skip navigation
    if (pathname === href) {
      onClick?.(e)
      return
    }

    onClick?.(e)

    if (isTransitioning) return

    startTransition(() => {
      router.push(href)
    })
  }

  return (
    <Link 
      href={href} 
      onClick={handleClick}
      className={className}
      {...rest}
    >
      {children}
    </Link>
  )
}
