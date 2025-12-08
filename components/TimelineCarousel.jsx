"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

const timelineEvents = [
  {
    date: "JULY 2022",
    image: "/timeline1.svg",
    label: "Plant Commissioned",
    description:
      "First industrial plant commissioned with full carbon capture process.",
  },
  {
    date: "DECEMBER 2024",
    image: "/timeline2.svg",
    label: "Scale Up",
    description:
      "Expansion to two more industrial facilities in Europe and Asia.",
  },
  {
    date: "JUNE 2025",
    image: "/timeline3.svg",
    label: "New Technology",
    description:
      "Launch of next-gen reactor for increased efficiency and throughput.",
  },
  {
    date: "JULY 2025",
    image: "/timeline4.svg",
    label: "First Carbon Credit",
    description: "TraceXero issues first third-party verified carbon credit.",
  },
  {
    date: "August 2025",
    image: "/timeline4.svg",
    label: "Global Milestone",
    description: "Entered strategic partnership for global market expansion.",
  },
  {
    date: "September 2025",
    image: "/timeline4.svg",
    label: "Award Winner",
    description: "Won international award for innovation in carbon removal.",
  },
  {
    date: "October 2025",
    image: "/timeline4.svg",
    label: "1MT Captured",
    description: "Achieved 1 million tons of CO₂ captured milestone.",
  },
  {
    date: "November 2025",
    image: "/timeline4.svg",
    label: "New Product",
    description: "Launched byproduct for use in energy storage.",
  },
  {
    date: "December 2025",
    image: "/timeline4.svg",
    label: "Green Factory",
    description: "All facilities now fully powered by renewables.",
  },
  {
    date: "January 2026",
    image: "/timeline4.svg",
    label: "Verified Impact",
    description:
      "Third-party audit: technology verified as net carbon negative.",
  },
  {
    date: "February 2026",
    image: "/timeline4.svg",
    label: "Global Deployment",
    description: "Expanded to deploy in North America and Oceania.",
  },
  {
    date: "March 2026",
    image: "/timeline4.svg",
    label: "Science Publication",
    description: "Results published in top scientific journal.",
  },
  {
    date: "April 2026",
    image: "/timeline4.svg",
    label: "Open Source Protocol",
    description: "Released transparency protocol to industry alliance.",
  },
];

export default function TimelineCarousel() {
  return (
    <section className="w-full bg-black py-20 px-3 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* <h2 className="text-white text-3xl md:text-4xl font-normal mb-12 text-left pl-2">
          TIMELINE
        </h2> */}
        {/* <div className="relative flex flex-col items-center mb-20">
          <div
            className="absolute top-11 left-0 right-0 h-2 w-full bg-yellow-200"
            style={{ zIndex: 1 }}
          />
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{ delay: 1800, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="w-full"
            style={{
              paddingBottom: "2rem",
            }}
          >
            {timelineEvents.map((event, idx) => (
              <SwiperSlide key={event.date + idx}>
                <div className="flex flex-col items-center w-60 md:w-64">
                  <div className="mb-2 text-center text-lg tracking-widest text-white font-semibold">
                    {event.date}
                  </div>
                  <div className="h-8 flex items-end justify-center">
                    <div className="w-9 h-9 border-4 border-yellow-200 bg-black rounded-full flex items-center justify-center z-10 relative">
                      <div className="w-3 h-3 bg-yellow-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="mt-4 mb-2">
                    <Image
                      src={event.image}
                      alt={event.label}
                      width={180}
                      height={150}
                    />
                  </div>
                  <div className="mt-2 w-full text-center">
                    <div className="text-white font-bold text-base md:text-lg">
                      {event.label}
                    </div>
                    <div className="text-white text-xs md:text-sm opacity-80 mt-1 px-2">
                      {event.description}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
        <h3 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">
          Know More
        </h3>
        <div className="flex flex-col md:flex-row gap-10 md:gap-28 justify-center w-full pb-3">
          <Link
            href="/technology"
            className="border border-orange-400 px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-orange-400 tracking-wider sm:tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between text-sm sm:text-base md:text-lg font-light w-full sm:w-auto"
          >
            TECHNOLOGY <span className="ml-2 sm:ml-3">&gt;</span>
          </Link>
          <Link
            href="/climate-impact-goal"
            className="border border-orange-400 px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-orange-400 tracking-wider sm:tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between text-sm sm:text-base md:text-lg font-light w-full sm:w-auto"
          >
            3 POINT CLIMATE IMPACT GOAL{" "}
            <span className="ml-2 sm:ml-3">&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
