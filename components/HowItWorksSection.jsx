import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 px-4 leading-tight">
          How it Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 gap-y-10 sm:gap-y-12 md:gap-y-14 lg:gap-y-16 w-full">
          {/* Air Intake */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Image
              src="/greenimg4.svg"
              alt="Air Intake"
              width={100}
              height={100}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 object-contain"
            />
            <div>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-light mb-2 sm:mb-3 tracking-wide leading-tight">
                Air Intake
              </h3>
              <p className="text-white text-sm sm:text-base md:text-lg font-light tracking-wide leading-relaxed">
                Ambient air is drawn into the system using low-energy fans,
                optimized to handle both outdoor and industrial exhaust
                environments.
              </p>
            </div>
          </div>
          {/* CO2 Absorption */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Image
              src="/greenimg2.svg"
              alt="CO2 Absorption"
              width={56}
              height={56}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0"
            />
            <div>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-light mb-2 sm:mb-3 tracking-wide leading-tight">
                CO2 Absorption
              </h3>
              <p className="text-white text-sm sm:text-base md:text-lg font-light tracking-wide leading-relaxed">
                Using our proprietary catalytic platform, CO2 molecules are
                separated from the air stream without the use of high heat,
                chemical solvents, or compression.
              </p>
            </div>
          </div>
          {/* Ambient Temperature Decomposition */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Image
              src="/greenimg.svg"
              alt="Ambient Temperature Decomposition"
              width={56}
              height={56}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0"
            />
            <div>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-light mb-2 sm:mb-3 tracking-wide leading-tight">
                Ambient Temperature
                <br /> Decomposition
              </h3>
              <p className="text-white text-sm sm:text-base md:text-lg font-light tracking-wide leading-relaxed">
                Once isolated, CO2 undergoes a novel decomposition reaction at
                room temperature. Instead of storing it, the carbon atom is
                liberated and begins to reform into a graphitic structure. This
                reaction is:
                <br />
                - Energy efficient
                <br />
                - Modular and scalable
                <br />- Carbon-negative by design
              </p>
            </div>
          </div>
          {/* Solid Carbon Collection */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Image
              src="/greenimg3.svg"
              alt="Solid Carbon Collection"
              width={56}
              height={56}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0"
            />
            <div>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-light mb-2 sm:mb-3 tracking-wide leading-tight">
                Solid Carbon Collection
              </h3>
              <p className="text-white text-sm sm:text-base md:text-lg font-light tracking-wide leading-relaxed">
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
  );
}



