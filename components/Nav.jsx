'use client';

import { forwardRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/technology', label: 'Technology' },
  { href: '/about', label: 'About' },
];

const Nav = forwardRef(function Nav(_props, ref) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav
      id="nav"
      ref={ref}
      className="fixed top-0 inset-x-0 z-[100] transition-all duration-500"
      style={{
        background: 'rgba(244,242,234,.72)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid transparent',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 h-[68px] sm:h-[76px] flex items-center justify-between">
        <Link href="/" className="flex items-center no-underline group min-w-0 shrink" aria-label="TraceXero Home">
          <Logo className="h-[40px] sm:h-[52px] w-auto transition-opacity duration-300 group-hover:opacity-90" />
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {LINKS.map(({ href, label }) => (
            <Link key={label} href={href} className="nav-link">
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-fill" style={{ padding: '11px 24px' }}>
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          className="relative flex flex-col justify-center items-center w-11 h-11 shrink-0 bg-transparent border-none cursor-pointer lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute w-7 h-[1.5px] bg-ink/60 rounded-full transition-all duration-300 ${open ? 'rotate-45' : '-translate-y-[7px]'}`}
          />
          <span
            className={`absolute w-7 h-[1.5px] bg-ink/60 rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`}
          />
          <span
            className={`absolute w-7 h-[1.5px] bg-ink/60 rounded-full transition-all duration-300 ${open ? '-rotate-45' : 'translate-y-[7px]'}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-[68px] sm:top-[76px] bottom-0 z-[99] lg:hidden transition-all duration-300 ${
          open ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          className="absolute inset-0 w-full h-full bg-ink/20 backdrop-blur-[2px] border-none cursor-pointer"
          aria-label="Close menu"
          onClick={close}
        />
        <div
          className={`relative z-10 bg-[rgba(244,242,234,.98)] border-b border-[var(--line-soft)] shadow-lg transition-transform duration-300 ${
            open ? 'translate-y-0' : '-translate-y-3'
          }`}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 flex flex-col gap-1">
            {LINKS.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="nav-link py-3.5 text-[15px] border-b border-[var(--line-soft)] last:border-b-0"
                onClick={close}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-fill justify-center mt-4 w-full sm:w-auto sm:self-start"
              onClick={close}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
});

export default Nav;
