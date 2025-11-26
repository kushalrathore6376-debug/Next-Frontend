const visionPoints = [
  "Every building or factory captures and transforms its own emissions.",
  "CO2 is no longer a waste product—but a raw material.",
  "Countries can meet climate targets without compromising growth.",
];

const goals2030 = [
  "Remove 1 million tons of CO2 annually.",
  "Produce 500,000+ tons of graphitic carbon.",
  "Power thousands of modular systems with near-zero energy input.",
];

export default function VisionSection() {
  return (
    <section className="w-full bg-[#73A94A] py-12 sm:py-16 md:py-24 px-4 sm:px-8">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 text-left">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-wide">
          VISION: Carbon Negative by Design
        </h2>
        <div className="text-white text-base sm:text-lg md:text-xl font-light leading-relaxed space-y-8">
          <div>
            <p className="font-medium mb-3">We envision a future where:</p>
            <ul className="space-y-2 pl-4 sm:pl-6 list-disc marker:text-white/80">
              {visionPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium mb-3">By 2030, our goal is to:</p>
            <ul className="space-y-2 pl-4 sm:pl-6 list-disc marker:text-white/80">
              {goals2030.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
