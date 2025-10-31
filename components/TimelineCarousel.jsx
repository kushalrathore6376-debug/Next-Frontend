"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const timelineEvents = [
  {
    date: "JULY 2022",
    image: "/timeline1.svg",
    label: "Plant Commissioned",
    description:
      "First industrial plant commissioned with full carbon capture process.",
  },
  // ... keep rest of events as-is ...
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
        <h2 className="text-white text-3xl md:text-4xl font-normal mb-12 text-left pl-2">
          TIMELINE
        </h2>
        <div className="relative flex flex-col items-center mb-20">
          {/* Timeline Line (absolute, behind carousel) */}
          <div
            className="absolute top-8 left-0 right-0 h-2 w-full bg-yellow-200"
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
                  {/* Timeline checkpoint */}
                  <div className="h-8 flex items-end justify-center">
                    <div className="w-9 h-9 border-4 border-yellow-200 bg-black rounded-full flex items-center justify-center z-10 relative">
                      <div className="w-3 h-3 bg-yellow-200 rounded-full"></div>
                    </div>
                  </div>
                  {/* Timeline image */}
                  <div className="mt-4 mb-2">
                    <Image
                      src={event.image}
                      alt={event.label}
                      width={180}
                      height={150}
                    />
                  </div>
                  {/* Timeline label and description */}
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
        </div>
        <h3 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">
          Know More
        </h3>
        <div className="flex flex-col md:flex-row gap-10 md:gap-28 justify-center w-full pb-3">
          <button className="border border-orange-400 px-12 py-4 text-orange-400 tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between text-lg font-light w-full md:w-auto">
            TECHNOLOGY <span className="ml-3">&gt;</span>
          </button>
          <button className="border border-orange-400 px-12 py-4 text-orange-400 tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between text-lg font-light w-full md:w-auto">
            3 POINT CLIMATE IMPACT GOAL <span className="ml-3">&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
