"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Top-level pages / buttons currently in the website
const navItems = [
  { href: "/", label: "Home" },
  { href: "/timeline", label: "About TraceXero" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/climate-impact-goal", label: "Climate Impact Goal" },
  { href: "/technology", label: "Technology" },
  { href: "/contact", label: "Contact us" },
];

function NavLink({ href, label, isActive, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative px-3 py-1.5 text-sm font-medium tracking-wide transition-colors ${
        isActive
          ? "text-[#FA7A50]"
          : "text-white/80 hover:text-[#FA7A50]"
      }`}
    >
      <span>{label}</span>
      {isActive && (
        <span className="pointer-events-none absolute inset-x-2 -bottom-1 h-px bg-gradient-to-r from-[#FA7A50]/0 via-[#FA7A50] to-[#FA7A50]/0" />
      )}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  const isItemActive = (href) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand with your logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <Image
            src="/TXo_-icon.png"
            alt="TraceXero logo"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base font-semibold tracking-[0.18em] text-white uppercase">
              TRACEXERO
            </span>
            <span className="text-[11px] text-white/60">
              Building the future of carbon capture
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={isItemActive(item.href)}
            />
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 md:hidden"
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={isItemActive(item.href)}
                onClick={closeMenu}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

