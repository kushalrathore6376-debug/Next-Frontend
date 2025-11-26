"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const supportedLogos = [
    "/Logo Radox .JPG",
    "/MNIT logo.jpg",
    "/finaloasislogo.svg",
    "/Logo iiiTD.PNG",
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
                TIMELINE
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

        {/* STATS/HERO SECTION BELOW LANDING */}
        <section className="w-full pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col items-center bg-black">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-8 sm:mb-12 md:mb-14 px-4 leading-tight">
            Driving the World to Net Zero Emmisions
          </h2>
          {/* Stats Row */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-16 lg:gap-28 items-center justify-center mb-6 sm:mb-7 w-full px-4">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full flex items-center justify-center mb-4 sm:mb-6 bg-linear-to-br from-lime-100 via-green-300 to-green-700/80 shadow-lg">
                <span
                  className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider sm:tracking-widest"
                  style={{ textShadow: "0 0 10px #0008" }}
                >
                  2KG/Day
                </span>
              </div>
              <p className="text-white text-base sm:text-lg md:text-xl tracking-wide font-light text-center">
                CO2 Captured
              </p>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full flex items-center justify-center mb-4 sm:mb-6 bg-linear-to-br from-lime-100 via-green-300 to-green-700/80 shadow-lg">
                <span
                  className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider sm:tracking-widest"
                  style={{ textShadow: "0 0 10px #0008" }}
                >
                  3362KG
                </span>
              </div>
              <p className="text-white text-base sm:text-lg md:text-xl tracking-wide font-light text-center">
                CO2 Captured
                <br />
                Since Feb 2022
              </p>
            </div>
          </div>
          {/* Company Description */}
          <p className="max-w-3xl text-white text-base sm:text-lg md:text-xl font-light tracking-wide sm:tracking-widest text-center mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 md:px-8">
            Our global company is led by industry experts with over a decade of
            experience designing, building, financing and operating industrial
            carbon capture systems.
          </p>
          {/* 'How it works' Button */}
          <Link
            href="/how-it-works"
            className="border border-orange-400 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 text-orange-400 tracking-wider sm:tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-center text-sm sm:text-base font-semibold"
          >
            HOW IT WORKS <span className="ml-2 sm:ml-3">&gt;</span>
          </Link>
        </section>

        {/* NEWS & SUPPORTED SECTION - LIGHT */}
        <section className="bg-white w-full py-12 sm:py-16 md:py-20 px-4 sm:px-5 md:px-6 lg:px-0 flex flex-col items-center">
          {/* Latest News & Insights */}
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-9 w-full text-left max-w-7xl pl-4 sm:pl-6">
            Latest News & Insights
          </h2>
          {/* Blog Carousel */}
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
          </div>
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
                  <Link href="/#news" className="hover:text-[#FA7A50] transition">
                    News & Insights
                  </Link>
                </li>
              </ul>
            </div>
            {/* Solutions */}
            <div>
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
            </div>
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
                    contact@tracexero.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+911234567890"
                    className="hover:text-[#FA7A50] transition"
                  >
                    +91 12345 67890
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
                  href="#"
                  aria-label="LinkedIn"
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
                  href="#"
                  aria-label="Twitter"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 5.92c-.75.33-1.55.55-2.39.65a4.16 4.16 0 0 0 1.83-2.3 8.27 8.27 0 0 1-2.62 1 4.13 4.13 0 0 0-7.03 3.77A11.72 11.72 0 0 1 3.16 4.87a4.12 4.12 0 0 0 1.28 5.5 4.1 4.1 0 0 1-1.87-.52v.05a4.14 4.14 0 0 0 3.31 4.05c-.45.12-.93.18-1.42.07a4.14 4.14 0 0 0 3.86 2.87A8.29 8.29 0 0 1 2 18.57a11.7 11.7 0 0 0 6.34 1.86c7.61 0 11.77-6.31 11.77-11.77 0-.18 0-.36-.01-.53A8.38 8.38 0 0 0 22 5.92z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.5 7.5s-.23-1.62-.93-2.33c-.9-.94-1.9-.94-2.36-.99C16.63 4 12 4 12 4h-.01s-4.63 0-8.2.18c-.46.05-1.46.05-2.36.99C.73 5.88.5 7.5.5 7.5S.3 9.4.3 11.31v1.37C.3 14.6.5 16.5.5 16.5s.23 1.62.93 2.33c.9.94 2.08.91 2.61 1.01 1.9.18 8 .19 8 .19s4.63 0 8.2-.18c.46-.05 1.46-.05 2.36-.99.7-.71.93-2.33.93-2.33s.2-1.9.2-3.81v-1.37c0-1.91-.2-3.81-.2-3.81zM9.75 14.39V8.61l6.13 2.89-6.13 2.89z" />
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
