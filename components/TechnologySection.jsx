export default function TechnologySection() {
  return (
    <section className="w-full">
      {/* Background image section */}
      <div className="relative w-full overflow-hidden">
        <div
          className="w-full min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex items-center justify-center px-6 sm:px-10 md:px-14"
          style={{
            backgroundImage: "url(/4.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/55 to-black/10" />
          <div className="absolute inset-0 pointer-events-none border border-white/5" />
          <div className="relative w-full max-w-6xl">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide">
              Our Technology
            </h2>
          </div>
        </div>
      </div>
      {/* Black content section below */}
      <div className="w-full bg-black py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 xl:px-0">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10 ">
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-[28px] font-light   tracking-wide sm:tracking-wider">
            The purpose of this technology is to combat climate change on a
            global scale by permanently removing CO₂ from the atmosphere, while
            also generating valuable by-products that can benefit multiple
            industries and promote sustainability across sectors.
          </p>
          <p className="text-white/90 text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide w-4/6">
            Unlike conventional carbon capture methods that rely on heat,
            pressure, or geological storage, Trace Xero&apos;s technology
            operates under ambient conditions to decompose CO₂ into solid
            graphitic carbon. Our approach eliminates the need for CO₂ storage.
          </p>
        </div>
      </div>
    </section>
  );
}
