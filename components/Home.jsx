"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import ImpactHeaderSection from "./ImpactHeaderSection";
import VisionSection from "./VisionSection";
import KnowMoreSection from "./KnowMoreSection";

export default function Home() {
  const supportedLogos = [
    "/Logo Radox .JPG",
    "/MNIT logo.jpg",
    "/finaloasislogo.svg",
    "/Logo IIITD.PNG",
    "/Logo PRESPL.png",
    "/Logo Metrecon.PNG",
    "/Logo NCCBM.PNG",
  ];
  const blogs = [
    {
      id: "b1",
      title: "Scaling Carbon Capture in Emerging Markets",
      cover: "/blog/blog-1.jpg",
      excerpt:
        "How modular systems can accelerate adoption across diverse industrial clusters.",
      content:
        "Emerging markets present unique challenges and opportunities for carbon capture. In this article, we explore modular deployments, financing mechanisms, and public–private partnerships enabling scalable climate tech adoption. We also outline a practical rollout playbook our team has refined with multiple industrial partners.",
    },
    {
      id: "b2",
      title: "Designing for Reliability and Low OPEX",
      cover: "/blog/blog-2.jpg",
      excerpt:
        "Engineering choices that reduce downtime and operating costs over the long run.",
      content:
        "Reliability engineering is not a feature—it's a philosophy. We discuss redundancy, materials selection, easy-to-service layouts, and telemetry that keeps systems online and efficient. Real-world field data highlights the biggest levers to lower OPEX without sacrificing capture performance.",
    },
    {
      id: "b3",
      title: "Turning CO2 Into Opportunity",
      cover: "/blog/blog-3.jpg",
      excerpt:
        "From utilization to credits—creating economic value while decarbonizing.",
      content:
        "A growing set of utilization pathways and credit markets are enabling viable business models for CO2 capture. We break down utilization options, evolving MRV standards, and practical steps to integrate credits into project financing.",
    },
  ];
  const [openBlog, setOpenBlog] = useState(null);
  const blogTrackRef = useRef(null);
  const blogAutoScrollTimer = useRef(null);
  const [isBlogHover, setIsBlogHover] = useState(false);
  // gentle auto-scroll for blogs with pause on hover/modal
  useEffect(() => {
    const el = blogTrackRef.current;
    if (!el) return;
    if (openBlog || isBlogHover) {
      if (blogAutoScrollTimer.current) {
        clearInterval(blogAutoScrollTimer.current);
        blogAutoScrollTimer.current = null;
      }
      return;
    }
    blogAutoScrollTimer.current = setInterval(() => {
      if (!el) return;
      const scrollAmount = el.clientWidth * 0.6;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const nextLeft =
        el.scrollLeft + scrollAmount >= maxScroll
          ? 0
          : el.scrollLeft + scrollAmount;
      el.scrollTo({ left: nextLeft, behavior: "smooth" });
    }, 4000);
    return () => {
      if (blogAutoScrollTimer.current) {
        clearInterval(blogAutoScrollTimer.current);
        blogAutoScrollTimer.current = null;
      }
    };
  }, [openBlog, isBlogHover]);
  return (
    <>
      <div className="bg-black w-full flex flex-col">
        {/* Header Logo */}
        <div className="pt-4 sm:pt-6 md:pt-8 pl-4 sm:pl-6 md:pl-24 mb-6 sm:mb-8 md:mb-0">
          {/* Swap src with '/tracexero-logo.png' when available */}
          <Image
            src="/TXo_-icon.png" // placeholder for logo file
            alt="TraceXero Logo"
            width={80}
            height={80}
            className="fit-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            priority
          />
        </div>

        <div className="flex flex-1 flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-24 gap-6 md:gap-8">
          {/* Left - Text and Buttons */}
          <div className="w-full md:w-1/2 lg:w-2/5 max-w-xl mt-8 md:mt-0 order-2 md:order-1">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-light leading-tight tracking-widest mb-6 md:mb-8">
              BUILDING THE FUTURE OF <br className="hidden md:block" /> CARBON
              CAPTURE
            </h1>
            <p className="text-white text-base sm:text-lg font-light mb-8 md:mb-10">
              By enabling industries to lower their Carbon Footprints, generate
              Carbon Credits, and adopt sustainable practices without
              sacrificing efficiency, we pave the way for a cleaner, greener
              future.
            </p>
            <div className="space-y-4">
              <Link
                href="/climate-impact-goal"
                className="w-full md:w-auto border border-orange-400 px-8 py-3 text-orange-400 tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between"
              >
                3 POINT CLIMATE IMPACT GOAL
                <span className="ml-2">&gt;</span>
              </Link>
              <Link
                href="/timeline"
                className="w-full md:w-auto border border-orange-400 px-8 py-3 text-orange-400 tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between"
              >
                About Trace Xero
                <span className="ml-2">&gt;</span>
              </Link>
            </div>
          </div>
          {/* Right - Earth (Globe) Video */}
          <div className="w-full md:w-1/2 lg:w-3/5 flex justify-center items-center order-1 md:order-2 mb-4 md:mb-0">
            <div className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-square relative">
              <video
                src="/earth-nasa.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="/earth-nasa.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* <Image
              src="/globe.svg" // Replace with '/earth.png' when real image available
              alt="Earth at Night"
              width={600}
              height={600}
              className="object-contain"
              priority
            /> */}
          </div>
        </div>
        <section>
          <div className="min-h-screen w-full flex flex-col">
            <ImpactHeaderSection />
            <VisionSection />
            {/* <KnowMoreSection /> */}
          </div>
        </section>

        {/* STATS/HERO SECTION BELOW LANDING */}
        <section className="w-full pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 md:pb-28 px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col items-center bg-black relative overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(115,169,74,0.1),transparent_70%) pointer-events-none" />

          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-4 sm:mb-6 px-4 leading-tight tracking-tight">
              Driving the World to Net Zero{" "}
              <span className="text-[#73A94A]">Emissions</span>
            </h2>

            {/* Stats Row */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16 w-full px-4">
              {/* Stat 1 */}
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-10 md:p-12 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  {/* Icon/Accent */}
                  <div className="mb-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#73A94A]/20 flex items-center justify-center border border-[#73A94A]/30 group-hover:bg-[#73A94A]/30 group-hover:border-[#73A94A]/50 transition-all duration-300">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#73A94A] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Number */}
                  <div className="mb-4">
                    <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
                      2KG
                    </span>
                    <span className="block text-[#73A94A] text-sm sm:text-base font-semibold uppercase tracking-wider">
                      /Day
                    </span>
                  </div>

                  {/* Label */}
                  <div className="space-y-1">
                    <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
                      CO₂ Captured
                    </p>
                    <p className="text-white/50 text-sm sm:text-base">
                      Daily Average
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-10 md:p-12 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  {/* Icon/Accent */}
                  <div className="mb-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#73A94A]/20 flex items-center justify-center border border-[#73A94A]/30 group-hover:bg-[#73A94A]/30 group-hover:border-[#73A94A]/50 transition-all duration-300">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#73A94A] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Number */}
                  <div className="mb-4">
                    <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
                      3,362KG
                    </span>
                    <span className="block text-[#73A94A] text-sm sm:text-base font-semibold uppercase tracking-wider">
                      Total
                    </span>
                  </div>

                  {/* Label */}
                  <div className="space-y-1">
                    <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
                      CO₂ Captured
                    </p>
                    <p className="text-white/50 text-sm sm:text-base">
                      Since Feb 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Description */}
            <div className="max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-14 px-4 sm:px-6 md:px-8">
              <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-light tracking-wide leading-relaxed text-center">
                Our global company is led by industry experts with over a decade
                of experience designing, building, financing and operating
                industrial carbon capture systems.
              </p>
            </div>

            {/* 'How it works' Button */}
            <Link
              href="/how-it-works"
              className="group relative border-2 border-orange-400 px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-orange-400 tracking-wider sm:tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition-all duration-300 flex items-center justify-center text-sm sm:text-base md:text-lg font-semibold overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                HOW IT WORKS
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  &gt;
                </span>
              </span>
              <div className="absolute inset-0 bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </div>
        </section>

        {/* NEWS & SUPPORTED SECTION - LIGHT */}
        <section className="bg-white w-full py-12 sm:py-16 md:py-20 px-4 sm:px-5 md:px-6 lg:px-0 flex flex-col items-center">
          {/* <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-9 w-full text-left max-w-7xl pl-4 sm:pl-6">
            Latest News & Insights
          </h2>
          <div className="w-full max-w-7xl mb-10 sm:mb-12 md:mb-16 px-4">
            <div className="relative">
              <button
                aria-label="Previous blogs"
                onClick={() => {
                  const el = blogTrackRef.current;
                  if (!el) return;
                  el.scrollBy({
                    left: -el.clientWidth * 0.8,
                    behavior: "smooth",
                  });
                }}
                className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black shadow px-3 py-2"
              >
                ‹
              </button>
              <div
                ref={blogTrackRef}
                className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 no-scrollbar"
                onMouseEnter={() => setIsBlogHover(true)}
                onMouseLeave={() => setIsBlogHover(false)}
              >
                {blogs.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setOpenBlog(b)}
                    className="group text-left bg-white border border-gray-200 hover:shadow-xl transition rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black min-w-[260px] sm:min-w-[300px] md:min-w-[360px] snap-start"
                  >
                    <div className="relative w-full h-48 sm:h-56 md:h-60 bg-gray-100">
                      <Image
                        src={b.cover || ""}
                        alt={b.title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform"
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
                      />
                    </div>
                    <div className="p-4 sm:p-5">
                      <h4 className="text-lg sm:text-xl font-semibold text-black mb-2 line-clamp-2">
                        {b.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
                        {b.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-orange-500 mt-3 text-sm sm:text-base">
                        Read more <span>&gt;</span>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <button
                aria-label="Next blogs"
                onClick={() => {
                  const el = blogTrackRef.current;
                  if (!el) return;
                  el.scrollBy({
                    left: el.clientWidth * 0.8,
                    behavior: "smooth",
                  });
                }}
                className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black shadow px-3 py-2"
              >
                ›
              </button>
            </div>
          </div> */}
          {/* Supported By */}
          <h3 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-9 w-full text-left max-w-7xl pl-4 sm:pl-6">
            Supported By
          </h3>
          {/* Logos Row */}
          <div className="w-full max-w-7xl pb-4 px-4">
            <div className="relative w-full overflow-hidden">
              <div
                className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 whitespace-nowrap animate-logo-scroll"
                style={{ minWidth: "200%" }}
              >
                {[...supportedLogos, ...supportedLogos].map((src, idx) => (
                  <div
                    key={`${src}-${idx}`}
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full  flex items-center justify-center"
                  >
                    <Image
                      src={src}
                      alt="Partner logo"
                      width={140}
                      height={140}
                      className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes logo-scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-logo-scroll {
              animation: logo-scroll 30s linear infinite;
            }
            /* Hide scrollbar cross-browser for horizontally scrollable carousels */
            .no-scrollbar {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
            .no-scrollbar::-webkit-scrollbar {
              display: none; /* Chrome, Safari, Opera */
            }
          `}</style>
        </section>
      </div>
      {/* Blog Modal */}
      {openBlog && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setOpenBlog(null)}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="relative bg-white w-full max-w-3xl rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-56 sm:h-72 bg-gray-100">
              <Image
                src={openBlog.cover}
                alt={openBlog.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black">
                {openBlog.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {openBlog.content}
              </p>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setOpenBlog(null)}
                  className="px-5 py-2.5 bg-black text-white hover:bg-black/80 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GREEN CTA SECTION */}
      <section className="w-full bg-[#73A94A] py-16 sm:py-20 md:py-24 lg:py-28 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <p className="text-white text-lg sm:text-xl md:text-2xl font-light text-center max-w-3xl mb-8 sm:mb-10 md:mb-12 tracking-wide leading-relaxed">
          India&apos;s first technology to partner with industries
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>and help them be a part of
          building a climate
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>positive world
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto">
          <Link
            href="/"
            className="bg-[#FA7A50] hover:bg-[#fa7a5099] text-white px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg tracking-wider sm:tracking-widest font-light rounded-none flex items-center justify-center gap-3 sm:gap-4 transition w-full sm:w-auto"
          >
            TRACEXERO <span>&gt;</span>
          </Link>
          <Link
            href="/contact"
            className="bg-[#FA7A50] hover:bg-[#fa7a5099] text-white px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg tracking-wider sm:tracking-widest font-light rounded-none flex items-center justify-center gap-3 sm:gap-4 transition w-full sm:w-auto text-center"
          >
            CONTACT US <span>&gt;</span>
          </Link>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="w-full bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Top divider accent */}
        <div className="h-1 w-full bg-linear-to-r from-[#FA7A50] via-[#73A94A] to-[#FA7A50]" />
        <div className="py-12 sm:py-16 md:py-20 max-w-7xl mx-auto">
          {/* Brand and short value prop */}
          <div className="mb-10 sm:mb-12 md:mb-16">
            <div className="flex items-center gap-3">
              <Image
                src="/TXo_-icon.png"
                alt="TraceXero"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <span className="text-xl sm:text-2xl font-semibold tracking-wider">
                TraceXero
              </span>
            </div>
            <p className="mt-4 text-sm sm:text-base text-white/80 max-w-2xl">
              Building the future of carbon capture with modular, reliable
              systems that enable industries to lower their footprint and unlock
              new value.
            </p>
          </div>
          {/* Footer grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 md:gap-16">
            {/* Company */}
            <div>
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-4">
                Company
              </h4>
              <ul className="space-y-3 text-sm sm:text-base text-white/80">
                <li>
                  <Link
                    href="/how-it-works"
                    className="hover:text-[#FA7A50] transition"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/timeline"
                    className="hover:text-[#FA7A50] transition"
                  >
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#news"
                    className="hover:text-[#FA7A50] transition"
                  >
                    News & Insights
                  </Link>
                </li>
              </ul>
            </div>
            {/* Solutions */}
            {/* <div>
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-4">
                Solutions
              </h4>
              <ul className="space-y-3 text-sm sm:text-base text-white/80">
                <li>
                  <a href="#" className="hover:text-[#FA7A50] transition">
                    Industrial Decarbonization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FA7A50] transition">
                    Carbon Credits (MRV)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FA7A50] transition">
                    Utilization & Storage
                  </a>
                </li>
              </ul>
            </div> */}
            {/* Contact */}
            <div>
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-4">
                Contact
              </h4>
              <ul className="space-y-3 text-sm sm:text-base text-white/80">
                <li>
                  <a
                    href="mailto:contact@tracexero.com"
                    className="hover:text-[#FA7A50] transition"
                  >
                    info@tracexero.com
                  </a>
                </li>

                <li>Jaipur, Delhi, India</li>
              </ul>
            </div>
            {/* Follow */}
            <div>
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-4">
                Follow
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/tracexero/"
                  aria-label="LinkedIn"
                  target="_blank"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.94 6.5A1.44 1.44 0 1 1 5.5 5.06 1.44 1.44 0 0 1 6.94 6.5zM6.75 8.5H4.5V20h2.25zM12.75 8.5H10.5V20h2.25v-5.91c0-1.56.3-3.07 2.23-3.07 1.9 0 1.93 1.77 1.93 3.17V20H19.2v-6.64c0-3.27-.7-5.86-4.49-5.86-1.82 0-3.04.99-3.53 1.93h-.04z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/tracexero/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-white/70">
            <p>© {new Date().getFullYear()} TraceXero. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-[#FA7A50] transition">
                Privacy
              </a>
              <a href="#" className="hover:text-[#FA7A50] transition">
                Terms
              </a>
              <a href="#" className="hover:text-[#FA7A50] transition">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
