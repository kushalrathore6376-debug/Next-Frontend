import Image from "next/image";

export default function SectionAbout() {
  return (
    <section className="relative w-full">
      {/* Background image + heading overlay */}
      <div
        className="w-full min-h-[340px] md:min-h-[420px] flex items-end"
        style={{
          backgroundImage: "url(/about-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-5xl mx-auto pb-10 px-8 md:px-0">
          <h2 className="text-white text-3xl md:text-5xl font-bold" style={{ textShadow: "0 2px 24px #000" }}>
            About Trace Xero
          </h2>
        </div>
      </div>
      {/* Black full-width text area flush under image */}
      <div className="w-full bg-black py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-8 md:px-0">
          <p className="text-white text-lg md:text-2xl font-light leading-relaxed tracking-wide mb-4">
            TraceXero was founded with the mission to tackle carbon emissions
            using advanced capture and decomposition technology. What began as
            a small-scale experiment has evolved into a groundbreaking
            solution for removing CO₂ with efficiency and sustainability.
          </p>
          <p className="text-white text-lg md:text-2xl font-light leading-relaxed tracking-wide">
            Fueled by innovation, we strive to be at the forefront of the
            carbon removal and credits market, supporting industries in their
            shift toward a cleaner future.{' '}
            <span className="text-sky-400 underline underline-offset-2">
              Each breakthrough brings us one step closer to achieving true
              carbon neutrality.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
