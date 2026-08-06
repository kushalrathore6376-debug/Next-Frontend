'use client';

import { useRef } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import useScrollEffects from '@/hooks/useScrollEffects';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

/** Shared chrome (aurora backdrop, nav, footer, scroll effects) for interior pages. */
export default function PageShell({ children }) {
  const navRef = useRef(null);

  useScrollReveal([]);
  useScrollEffects(navRef);

  return (
    <>
      <div className="bg-aurora" aria-hidden="true" />
      <Nav ref={navRef} />
      {children}
      <Footer />
    </>
  );
}
