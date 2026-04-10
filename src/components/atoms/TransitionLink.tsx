"use client";

import Link from "next/link";
import { usePageTransition } from "@/context/PageTransitionProvider";
import { forwardRef, ComponentPropsWithoutRef } from "react";

interface TransitionLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  // Tidak perlu mendefinisikan href dan children lagi karena sudah di-extend dari Link props
}

const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  ({ href, onClick, children, ...restProps }, ref) => {
    const { navigateTo } = usePageTransition();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      
      // Panggil onClick original jika ada
      if (onClick) {
        onClick(e);
      }
      
      navigateTo(href as string);
    };

    return (
      <Link
        href={href}
        ref={ref}
        onClick={handleClick}
        {...restProps}
      >
        {children}
      </Link>
    );
  }
);

TransitionLink.displayName = "TransitionLink";

export default TransitionLink;