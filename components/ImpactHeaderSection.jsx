export default function ImpactHeaderSection() {
  return (
    <>
      <section className="w-full relative">
        <div
          className="w-full min-h-[240px] sm:min-h-[280px] opacity-90 md:min-h-[320px] lg:min-h-[340px] flex items-center px-4 sm:px-5 md:px-6 lg:px-0"
          style={{
            backgroundImage: "url(/2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          {/* <div className="absolute w-full h-full left-0 top-0  bg-opacity-60 z-0" /> */}
          <div className="relative z-10 w-full max-w-5xl mx-auto">
            <h2
              className="text-white text-xl sm:text-2xl md:text-3xl font-semibold md:font-bold text-left leading-tight"
              style={{ textShadow: "0 2px 24px #000" }}
            >
              Impact Beyond Emmissions
            </h2>
          </div>
        </div>
      </section>
      <section className="w-full bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 sm:gap-8">
          <div className="text-white text-lg sm:text-xl md:text-3xl font-medium text-center mb-2">
            Impact that Aligns with Global Goals
          </div>
          <div className="text-white text-sm sm:text-base md:text-lg lg:text-2xl font-light text-center mb-6 sm:mb-8">
            Our work directly contributes to
          </div>
          {/* SDG/UNFCCC Contributions */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6">
            {[
              {
                code: "SDG 13",
                label: "Climate Action",
                color: "text-[#d14630]",
              },
              {
                code: "SDG 9",
                label: "Industry, Innovation & Infrastructure",
                color: "text-[#d17830]",
              },
              {
                code: "SDG 12",
                label: "Responsible Consumption & Production",
                color: "text-[#d19430]",
              },
              {
                code: "UNFCCC",
                label: "Net Zero Pathways",
                color: "text-[#ff8032]",
              },
            ].map((item) => (
              <div
                key={item.code}
                className="flex flex-col items-center text-center gap-2 sm:gap-3"
              >
                <span
                  className={`${item.color} font-bold tracking-wide text-base sm:text-lg md:text-xl`}
                >
                  {item.code}
                </span>
                <span className="text-white text-sm sm:text-base md:text-lg leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          {/* Transform It! */}
          <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-left mb-6 sm:mb-8 md:mb-10 w-full px-4 lg:px-0">
            We Don&apos;t Just Capture Carbon dioxide - We Transform It !
          </div>
          {/* 3-point list */}
          <ol className="text-white text-sm sm:text-base md:text-lg font-light w-full flex flex-col gap-6 sm:gap-7 text-left px-4 lg:px-0">
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
    </>
  );
}
