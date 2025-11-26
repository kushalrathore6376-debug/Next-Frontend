import Link from "next/link";

export default function IndustryReadinessSection() {
  return (
    <section className="w-full bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 px-4 leading-tight">
          Why are Industries ready to capture carbon with TraceXero
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 lg:gap-36 justify-center w-full px-4">
          <Link href="/technology" className="border border-orange-400 px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-orange-400 tracking-wider sm:tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between text-sm sm:text-base md:text-lg font-light w-full sm:w-auto">
            TECHNOLOGY <span className="ml-2 sm:ml-3">&gt;</span>
          </Link>
          <a href="/climate-impact-goal" className="border border-orange-400 px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-orange-400 tracking-wider sm:tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between text-sm sm:text-base md:text-lg font-light w-full sm:w-auto">
            3 POINT CLIMATE IMPACT GOAL{" "}
            <span className="ml-2 sm:ml-3">&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}


