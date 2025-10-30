"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SectionAbout from "../components/SectionAbout";
import TimelineCarousel from "../components/TimelineCarousel";

export default function Home() {
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

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* --- Previous landing sections (logo, black, stats, etc) --- */}
      <div className="bg-black w-full flex flex-col">
        {/* Header Logo */}
        <div className="pt-8 pl-8">
          {/* Swap src with '/tracexero-logo.png' when available */}
          <Image
            src="/tracexero-logo.png" // placeholder for logo file
            alt="TraceXero Logo"
            width={110}
            height={110}
            className="object-contain"
            priority
          />
        </div>

        {/* Main Content Row */}
        <div className="flex flex-1 flex-col md:flex-row items-center justify-between px-8 md:px-24">
          {/* Left - Text and Buttons */}
          <div className="w-full md:w-2/3 max-w-xl mt-8 md:mt-0">
            <h1 className="text-white text-4xl md:text-5xl font-light leading-tight tracking-widest mb-8">
              BUILDING THE FUTURE OF <br className="hidden md:block" /> CARBON
              CAPTURE
            </h1>
            <p className="text-white text-lg font-light mb-10">
              By enabling industries to lower their Carbon Footprints, generate
              Carbon Credits, and adopt sustainable practices without
              sacrificing efficiency, we pave the way for a cleaner, greener
              future.
            </p>
            <div className="space-y-4">
              <button className="w-full md:w-auto border border-orange-400 px-8 py-3 text-orange-400 tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between">
                3 POINT CLIMATE IMPACT GOAL
                <span className="ml-2">&gt;</span>
              </button>
              <button className="w-full md:w-auto border border-orange-400 px-8 py-3 text-orange-400 tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between">
                TIMELINE
                <span className="ml-2">&gt;</span>
              </button>
            </div>
          </div>
          {/* Right - Earth (Globe) Image */}
          <div className="hidden md:block md:w-1/2 flex justify-center items-center">
            <Image
              src="/globe.svg" // Replace with '/earth.png' when real image available
              alt="Earth at Night"
              width={600}
              height={600}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* STATS/HERO SECTION BELOW LANDING */}
        <section className="w-full pt-16 pb-24 px-4 md:px-0 flex flex-col items-center bg-black">
          <h2 className="text-white text-4xl md:text-5xl font-medium text-center mb-14">
            Driving the World to Net Zero Emmisions
          </h2>
          {/* Stats Row */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-28 items-center justify-center mb-7">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-lime-100 via-green-300 to-green-700/80 shadow-lg">
                <span
                  className="text-white text-3xl md:text-4xl font-semibold tracking-widest"
                  style={{ textShadow: "0 0 10px #0008" }}
                >
                  2KG/Day
                </span>
              </div>
              <p className="text-white text-xl tracking-wide font-light text-center">
                CO2 Captured
              </p>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-lime-100 via-green-300 to-green-700/80 shadow-lg">
                <span
                  className="text-white text-3xl md:text-4xl font-semibold tracking-widest"
                  style={{ textShadow: "0 0 10px #0008" }}
                >
                  3362KG
                </span>
              </div>
              <p className="text-white text-xl tracking-wide font-light text-center">
                CO2 Captured
                <br />
                Since Feb 2022
              </p>
            </div>
          </div>
          {/* Company Description */}
          <p className="max-w-3xl text-white text-lg font-light tracking-widest text-center mb-10 px-4">
            Our global company is led by industry experts with over a decade of
            experience designing, building, financing and operating industrial
            carbon capture systems.
          </p>
          {/* 'How it works' Button */}
          <button className="border border-orange-400 px-10 py-3 text-orange-400 tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-center text-base font-semibold">
            HOW IT WORKS <span className="ml-3">&gt;</span>
          </button>
        </section>

        {/* NEWS & SUPPORTED SECTION - LIGHT */}
        <section className="bg-white w-full py-16 px-5 md:px-0 flex flex-col items-center">
          {/* Latest News & Insights */}
          <h2 className="text-black text-4xl md:text-5xl font-bold mb-9 w-full text-left max-w-7xl pl-6">
            Latest News & Insights
          </h2>
          {/* Blog Placeholder */}
          <div className="w-full max-w-7xl bg-[#E8E1BC] h-56 flex items-center justify-center text-black text-3xl font-light mb-16">
            Blog
          </div>
          {/* Supported By */}
          <h3 className="text-black text-4xl md:text-5xl font-bold mb-9 w-full text-left max-w-7xl pl-6">
            Supported By
          </h3>
          {/* Logos Row */}
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 w-full max-w-7xl pb-4">
            {/* Five placeholder company logos as circles */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#E8E1BC] rounded-full flex items-center justify-center text-2xl text-black font-light">
              Logo
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#E8E1BC] rounded-full flex items-center justify-center"></div>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#E8E1BC] rounded-full flex items-center justify-center"></div>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#E8E1BC] rounded-full flex items-center justify-center"></div>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#E8E1BC] rounded-full flex items-center justify-center"></div>
          </div>
        </section>
      </div>

      {/* GREEN CTA SECTION */}
      <section className="w-full bg-[#73A94A] py-28 flex flex-col items-center justify-center">
        <p className="text-white text-xl md:text-2xl font-light text-center max-w-3xl mb-12 tracking-wide px-4">
          India’s first technology to partner with industries
          <br />
          and help them be a part of building a climate
          <br />
          positive world
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <button className="bg-[#FA7A50] hover:bg-[#fa7a5099] text-white px-16 py-5 text-lg tracking-widest font-light rounded-none flex items-center gap-4 transition">
            TRACEXERO <span>&gt;</span>
          </button>
          <button className="bg-[#FA7A50] hover:bg-[#fa7a5099] text-white px-16 py-5 text-lg tracking-widest font-light rounded-none flex items-center gap-4 transition">
            CONTACT US <span>&gt;</span>
          </button>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="w-full bg-black py-32 flex items-center justify-center">
        <p className="text-white text-4xl text-center font-light">Footer</p>
      </footer>

      {/* HERO SECTION WITH BACKGROUND IMAGE NOW AT THE END */}
      <section
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
      <section className="w-full bg-black py-20 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-14 md:gap-16">
          {/* LEFT COLUMN */}
          <div className="md:w-1/2 flex flex-col gap-24 justify-between pt-3">
            <div>
              <h2 className="text-white text-3xl md:text-3xl font-light tracking-wide mb-8">
                Modular scalable system
              </h2>
            </div>
            <div>
              <h2 className="text-white text-3xl md:text-3xl font-light tracking-wide mb-8">
                Converting Pollutants
                <br />
                to Products
              </h2>
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="md:w-1/2 flex flex-col gap-16">
            <div className="mb-10">
              <p className="text-white text-lg font-light mb-2">
                Each Trace Xero unit is containerized, allowing for:
              </p>
              <ul className="text-white text-lg font-light list-disc list-inside ml-2 mb-2">
                <li>Fast setup and relocation</li>
                <li>Urban, rural, or remote deployment</li>
                <li>Integration with factories or renewable plants</li>
              </ul>
            </div>
            <div>
              <p className="text-white text-lg font-light">
                Unlike conventional carbon capture methods that rely on heat,
                pressure, or geological storage, Trace Xero's technology
                operates under ambient conditions to decompose CO2 into solid
                graphitic carbon. Our approach eliminates the need for CO2
                storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION (NEW) */}
      <section className="w-full bg-black py-24 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-white text-5xl font-bold text-center mb-16">
            How it Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 w-full">
            {/* Air Intake */}
            <div className="flex gap-6">
              <Image src="/icon1.svg" alt="Air Intake" width={56} height={56} />
              <div>
                <h3 className="text-white text-3xl font-light mb-3 tracking-wide">
                  Air Intake
                </h3>
                <p className="text-white text-lg font-light tracking-wide">
                  Ambient air is drawn into the system using low-energy fans,
                  optimized to handle both outdoor and industrial exhaust
                  environments.
                </p>
              </div>
            </div>
            {/* CO2 Absorption */}
            <div className="flex gap-6">
              <Image
                src="/icon2.svg"
                alt="CO2 Absorption"
                width={56}
                height={56}
              />
              <div>
                <h3 className="text-white text-3xl font-light mb-3 tracking-wide">
                  CO2 Absorption
                </h3>
                <p className="text-white text-lg font-light tracking-wide">
                  Using our proprietary catalytic platform, CO2 molecules are
                  separated from the air stream without the use of high heat,
                  chemical solvents, or compression.
                </p>
              </div>
            </div>
            {/* Ambient Temperature Decomposition */}
            <div className="flex gap-6">
              <Image
                src="/icon3.svg"
                alt="Ambient Temperature Decomposition"
                width={56}
                height={56}
              />
              <div>
                <h3 className="text-white text-3xl font-light mb-3 tracking-wide">
                  Ambient Temperature
                  <br /> Decomposition
                </h3>
                <p className="text-white text-lg font-light tracking-wide">
                  Once isolated, CO2 undergoes a novel decomposition reaction at
                  room temperature. Instead of storing it, the carbon atom is
                  liberated and begins to reform into a graphitic structure.
                  This reaction is:
                  <br />
                  - Energy efficient
                  <br />
                  - Modular and scalable
                  <br />- Carbon-negative by design
                </p>
              </div>
            </div>
            {/* Solid Carbon Collection */}
            <div className="flex gap-6">
              <Image
                src="/icon4.svg"
                alt="Solid Carbon Collection"
                width={56}
                height={56}
              />
              <div>
                <h3 className="text-white text-3xl font-light mb-3 tracking-wide">
                  Solid Carbon Collection
                </h3>
                <p className="text-white text-lg font-light tracking-wide">
                  The resulting carbon is collected in a solid graphitic
                  form—chemically stable, lightweight, and ready for reuse in:
                  <br />
                  - Water filtration
                  <br />
                  - Building composites
                  <br />
                  - Electronics
                  <br />- Agricultural materials
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DOES IT MATTER SECTION - Green */}
      <section className="w-full bg-[#73A94A] py-20 px-2 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-white text-5xl font-bold text-center mb-14">
            Why Does it Matter
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 tracking-wide">
                Climate Urgency
              </h3>
              <p className="text-white text-lg font-light tracking-widest">
                The world must remove over
                <br />
                10 Gt of CO2 annually by
                <br />
                2050
              </p>
            </div>
            <div>
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 tracking-wide">
                Systemic Bottlenecks
              </h3>
              <p className="text-white text-lg font-light tracking-widest">
                Current technologies face
                <br />
                cost, energy, and land barriers
              </p>
            </div>
            <div>
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 tracking-wide">
                Trace Xero’s Advantage
              </h3>
              <p className="text-white text-lg font-light tracking-widest">
                A portable, low-cost, circular
                <br />
                solution that works anywhere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY READINESS SECTION - Black */}
      <section className="w-full bg-black py-20 px-2 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">
            Why are Industries ready to capture carbon with TraceXero
          </h2>
          <div className="flex flex-col md:flex-row gap-10 md:gap-36 justify-center w-full">
            <button className="border border-orange-400 px-12 py-4 text-orange-400 tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between text-lg font-light w-full md:w-auto">
              TECHNOLOGY <span className="ml-3">&gt;</span>
            </button>
            <button className="border border-orange-400 px-12 py-4 text-orange-400 tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between text-lg font-light w-full md:w-auto">
              3 POINT CLIMATE IMPACT GOAL <span className="ml-3">&gt;</span>
            </button>
          </div>
        </div>
      </section>

      {/* OUR TECHNOLOGY SECTION (NEW, at end) */}
      <section className="w-full">
        {/* Background image section */}
        <div
          className="w-full min-h-[340px] md:min-h-[420px] flex items-center justify-center"
          style={{
            backgroundImage: "url(/technology-bg.jpg)", // user should add file to /public
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2
            className="text-white text-4xl md:text-5xl font-bold text-center"
            style={{ textShadow: "0 2px 24px #000" }}
          >
            Our Technology
          </h2>
        </div>
        {/* Black content section below */}
        <div className="w-full bg-black py-16 px-5 md:px-0">
          <div className="max-w-5xl mx-auto flex flex-col gap-10">
            <p className="text-white text-2xl md:text-3xl font-light text-left leading-normal mb-3 tracking-wider">
              The purpose of this technology is to combat climate change on a
              global scale by permanently removing CO₂ from the atmosphere,
              while also generating valuable by-products that can benefit
              multiple industries and promote sustainability across sectors.
            </p>
            <p className="text-white text-base md:text-lg font-light opacity-90 leading-relaxed tracking-wide">
              Unlike conventional carbon capture methods that rely on heat,
              pressure, or geological storage, Trace Xero's technology operates
              under ambient conditions to decompose CO2 into solid graphitic
              carbon. Our approach eliminates the need for CO2 storage.
            </p>
          </div>
        </div>
      </section>

      {/* CARBON CAPTURE AND UTILISATION SECTION (NEW, at very end) */}
      <section className="w-full bg-black py-24 px-3 md:px-0">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <h2 className="text-white text-3xl md:text-4xl font-light mb-8 tracking-wide text-left">
            Carbon Capture and Utilisation (CCU)
          </h2>
          <p className="text-white text-lg md:text-xl font-light leading-relaxed tracking-wider text-left">
            At TraceXero, our CCU Technology captures CO₂, SOx, and NOx from
            industrial flue gas, preventing harmful emissions from entering the
            atmosphere. A heat exchanger first cools the flue gas, optimizing it
            for efficient processing. The cooled gas then enters our reactor,
            where these pollutants are absorbed and decomposed into their
            elemental forms. The captured CO₂ is broken down into Graphitic
            Carbon and Oxygen. This process not only reduces industrial
            emissions but also transforms waste gases into valuable resources,
            reinforcing our commitment to cleaner air and a sustainable,
            Net-Zero future.
          </p>
        </div>
      </section>

      {/* BECCS SECTION (NEW, at very end of page) */}
      <section className="w-full bg-[#73A94A] py-32 px-3 md:px-0">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <h2 className="text-white text-3xl md:text-4xl font-light mb-10 tracking-wide text-left">
            Bioenergy with Carbon Capture and Storage (BECCS)
          </h2>
          <p className="text-white text-lg md:text-xl font-light leading-relaxed tracking-wider text-left max-w-3xl">
            At TraceXero, our BECCS process transforms Biomass into heat energy
            while efficiently capturing both CO₂ and Particulate Matter (PM)
            generated during combustion. Instead of releasing these emissions
            into the atmosphere, our advanced technology instantly captures
            them, preventing environmental harm.
            <br />
            The captured CO₂ is then decomposed into Graphitic Carbon and
            Oxygen. By effectively removing both CO₂ and PM, our closed-loop
            system not only supports renewable energy production but also
            converts waste into valuable resources, advancing global Net-Zero
            targets.
          </p>
        </div>
      </section>

      {/* DAC SECTION (new, black) */}
      <section className="w-full bg-black py-24 px-3 md:px-0">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <h2 className="text-white text-3xl md:text-4xl font-light mb-8 tracking-wide text-left">
            Large-Scale Direct Air Capture (DAC)
          </h2>
          <p className="text-white text-lg md:text-xl font-light leading-relaxed tracking-wider text-left">
            At TraceXero, our Large-Scale Direct Air Capture Technology employs
            high-intensity blowers to draw ambient air through our advanced
            capture units, efficiently extracting CO₂ directly from the
            atmosphere. Once captured, the CO₂ is decomposed into Graphitic
            Carbon and Oxygen, transforming a harmful greenhouse gas into
            valuable resources.
            <br />
            This innovative process not only actively reduces atmospheric carbon
            footprint but also repurposes it for commercial and industrial use,
            supporting the global transition toward Net-Zero emissions and a
            more sustainable future.
          </p>
        </div>
      </section>

      {/* TOP ADVANTAGES SECTION (new, black) */}
      <section className="w-full bg-black py-24 px-3 md:px-0">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-10">
            Top Advantages of TX Tech
          </h2>
          <div className="w-full flex flex-col gap-5">
            {/* 1 - Energy Efficiency */}
            <div className="bg-white text-black rounded-none py-6 px-6 md:px-12">
              <div className="font-bold text-lg md:text-xl tracking-wide mb-1">
                Energy Efficiency
              </div>
              <div className="font-normal text-base md:text-lg leading-relaxed">
                Operating at ambient temperatures significantly reduces energy
                consumption compared to traditional methods that require high
                heat.
              </div>
            </div>
            {/* 2 - Environmental Impact */}
            <div className="bg-[#393940] text-white rounded-none py-6 px-6 md:px-12">
              <div className="font-bold text-lg md:text-xl tracking-wide mb-1">
                Environmental Impact
              </div>
              <div className="font-normal text-base md:text-lg leading-relaxed">
                Our process not only captures CO₂ but also contributes to
                reducing the overall carbon footprint by producing useful
                materials.
              </div>
            </div>
            {/* 3 - Valuable Byproducts */}
            <div className="bg-white text-black rounded-none py-6 px-6 md:px-12">
              <div className="font-bold text-lg md:text-xl tracking-wide mb-1">
                Valuable Byproducts
              </div>
              <div className="font-normal text-base md:text-lg leading-relaxed">
                The graphitic carbon produced can be utilized in industries such
                as electronics, batteries, and other valuable fields.
              </div>
            </div>
            {/* 4 - Scalability */}
            <div className="bg-white text-black rounded-none py-6 px-6 md:px-12">
              <div className="font-bold text-lg md:text-xl tracking-wide mb-1">
                Scalability
              </div>
              <div className="font-normal text-base md:text-lg leading-relaxed">
                The modular design allows for easy scaling to meet varying
                demands.
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 mt-10 md:mt-16 w-full justify-center">
            <button className="border border-orange-400 px-12 py-4 text-orange-400 tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between text-lg font-light w-full md:w-auto">
              TRACE XERO <span className="ml-3">&gt;</span>
            </button>
            <button className="border border-orange-400 px-12 py-4 text-orange-400 tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between text-lg font-light w-full md:w-auto">
              3 POINT CLIMATE IMPACT GOAL <span className="ml-3">&gt;</span>
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT TRACE XERO SECTION (flushed, image+heading then black text area) */}
      <SectionAbout />

      {/* OUR TEAM SECTION (NEW AT END) */}
      <section className="w-full bg-[#73A94A] py-20 px-4 md:px-0">
        {/* Heading */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl font-normal mb-12 text-left">
            OUR TEAM
          </h2>
          {/* Team cards */}
          <div className="flex flex-col md:flex-row gap-8 justify-start items-stretch">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-6 w-full max-w-xs">
              <Image
                src="/team1.jpg"
                alt="Team Member 1"
                width={112}
                height={112}
                className="rounded-full object-cover mb-4"
              />
              <div className="text-xl font-bold mb-1 text-gray-900">
                John Doe
              </div>
              <div className="text-sm font-medium text-gray-500 mb-2">
                Co-Founder & CEO
              </div>
              <p className="text-gray-700 text-center text-base">
                John is a passionate innovator in carbon tech with over a decade
                of experience in renewable energy and sustainability.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-6 w-full max-w-xs">
              <Image
                src="/team2.jpg"
                alt="Team Member 2"
                width={112}
                height={112}
                className="rounded-full object-cover mb-4"
              />
              <div className="text-xl font-bold mb-1 text-gray-900">
                Jane Smith
              </div>
              <div className="text-sm font-medium text-gray-500 mb-2">
                Lead Scientist
              </div>
              <p className="text-gray-700 text-center text-base">
                Jane leads our R&D initiatives, driving scientific advances in
                carbon capture, storage, and industrial decarbonization.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-6 w-full max-w-xs">
              <Image
                src="/team3.jpg"
                alt="Team Member 3"
                width={112}
                height={112}
                className="rounded-full object-cover mb-4"
              />
              <div className="text-xl font-bold mb-1 text-gray-900">
                Alice Patel
              </div>
              <div className="text-sm font-medium text-gray-500 mb-2">
                Operations Manager
              </div>
              <p className="text-gray-700 text-center text-base">
                Alice manages daily operations and partner relations to ensure
                seamless scaling and impactful project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE CAROUSEL SECTION (with Swiper) */}
      <TimelineCarousel />

      {/* IMPACT BEYOND EMISSIONS SECTION */}
      <section className="w-full relative">
        <div
          className="w-full min-h-[320px] md:min-h-[340px] flex items-center"
          style={{
            backgroundImage: "url(/impact-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute w-full h-full left-0 top-0 bg-black bg-opacity-60 z-0" />
          <div className="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-0">
            <h2
              className="text-white text-2xl md:text-3xl font-semibold md:font-bold text-left"
              style={{ textShadow: "0 2px 24px #000" }}
            >
              Impact Beyond Emmissions
            </h2>
          </div>
        </div>
      </section>
      {/* GOALS + IMPACT MAIN */}
      <section className="w-full bg-black py-20 px-6 md:px-0">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
          <div className="text-white text-xl md:text-2xl font-medium text-center mb-2">
            Impact that Aligns with Global Goals
          </div>
          <div className="text-white text-base font-light text-center mb-8">
            Our work directly contributes to
          </div>
          {/* SDG/UNFCCC Contributions */}
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
            <div className="flex flex-col items-center">
              <span className="text-[#d14630] font-bold tracking-wide">
                SDG 13
              </span>
              <span className="text-white mt-1 text-center">
                Climate Action
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#d17830] font-bold tracking-wide">
                SDG 9
              </span>
              <span className="text-white mt-1 text-center">
                Industry, Innovation & Infrastructure
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#d19430] font-bold tracking-wide">
                SDG 12
              </span>
              <span className="text-white mt-1 text-center">
                Responsible Consumption & Production
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#ff8032] font-bold tracking-wide">
                UNFCCC
              </span>
              <span className="text-white mt-1 text-center">
                Net Zero Pathways
              </span>
            </div>
          </div>
          {/* Transform It! */}
          <div className="text-white text-lg md:text-2xl font-semibold text-center mb-10 max-w-3xl">
            We Don’t Just Capture Carbon dioxide - We Transform It !
          </div>
          {/* 3-point list */}
          <ol className="text-white text-base md:text-lg font-light max-w-4xl mx-auto flex flex-col gap-5 text-left">
            <li>
              <span className="font-semibold">1. Carbon Transformation</span>
              <br />
              We convert CO2 into graphitic carbon, which is non-toxic,
              chemically stable & Industrially useful (filtration, composites,
              batteries)
            </li>
            <li>
              <span className="font-semibold">2. Circular Climate Benefit</span>
              <br />
              Instead of burying CO2, we upcycle it—closing the loop between
              environmental harm and material utility.
            </li>
            <li>
              <span className="font-semibold">3. Localized Deployment</span>
              <br />
              Our modular units are deployable in urban zones, remote regions,
              and alongside industrial facilities—no massive infrastructure
              required.
            </li>
          </ol>
        </div>
      </section>

      {/* VISION SECTION (GREEN) */}
      <section className="w-full bg-[#73A94A] py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 items-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-6">
            VISION: Carbon Negative by Design
          </h2>
          <div className="text-white text-lg md:text-xl font-normal text-left max-w-3xl mb-4">
            <div className="mb-6">
              We envision a future where:
              <br />- Every building or factory captures and transforms its own
              emissions.
              <br />- CO2 is no longer a waste product—but a raw material.
              <br />- Countries can meet climate targets without compromising
              growth.
            </div>
            <div>
              By 2030, our goal is to:
              <br />- Remove 1 million tons of CO2 annually
              <br />- Produce 500,000+ tons of graphitic carbon
              <br />- Power thousands of modular systems with near-zero energy
              input
            </div>
          </div>
        </div>
      </section>

      {/* KNOW MORE - BLACK BOTTOM */}
      <section className="w-full bg-black py-20 px-3 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">
            Know More
          </h2>
          <div className="flex flex-col md:flex-row gap-10 md:gap-28 justify-center w-full pb-3">
            <button className="border border-orange-400 px-12 py-4 text-orange-400 tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between text-lg font-light w-full md:w-auto">
              HOW IT WORKS <span className="ml-3">&gt;</span>
            </button>
            <button className="border border-orange-400 px-12 py-4 text-orange-400 tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between text-lg font-light w-full md:w-auto">
              TRACE XERO <span className="ml-3">&gt;</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
