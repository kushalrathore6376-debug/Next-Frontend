"use client";
import Image from "next/image";
import Home from "../components/Home";
import SectionAbout from "../components/SectionAbout";
import TimelineCarousel from "../components/TimelineCarousel";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Home />

      {/* HERO SECTION WITH BACKGROUND IMAGE NOW AT THE END */}
      {/* {/* <section
        className="w-full min-h-[55vh] flex items-center"
        style={{
          backgroundImage: "url(/hero.jpg)", // Replace with your real hero image in /public
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-5xl mx-auto px-8 md:px-0">
          <h1
            className="text-white text-3xl md:text-5xl font-bold leading-snug md:leading-tight drop-shadow-xl"
            style={{ marginTop: "5vw" }}
          >
            True Innovation in Pathway to
            <br /> Carbon Removal
          </h1>
        </div>
      </section>

      {/* BLACK INFO SECTION BELOW HERO */}
      
    </div>
  );
}
