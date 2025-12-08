import Link from "next/link";

const advantages = [
  {
    title: "Energy Efficiency",
    description:
      "Operating at ambient temperatures significantly reduces energy consumption compared to traditional methods that require high heat.",
  },
  {
    title: "Environmental Impact",
    description:
      "Our process not only captures CO₂ but also contributes to reducing the overall carbon footprint by producing useful materials.",
  },
  {
    title: "Valuable Byproducts",
    description:
      "The Graphitic Carbon produced can be utilized in industries such as electronics, batteries, and other valuable fields.",
  },
  {
    title: "Scalability",
    description:
      "The modular design allows for easy scaling to meet varying demands.",
  },
];

export default function AdvantagesSection() {
  return (
    <section className="w-full bg-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 px-4 leading-tight">
          Top Advantages of TX Tech
        </h2>
        <div className="w-full flex flex-col gap-4 sm:gap-5">
          {advantages.map((advantage, index) => {
            
            return (
              <div
                key={advantage.title}
                className={`rounded-none py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 lg:px-12 border border-transparent transition-colors duration-300 ${
                 "bg-white text-black"
                } hover:bg-[#393940] hover:text-white`}
              >
                <div className="font-bold text-base sm:text-lg md:text-xl tracking-wide mb-1 sm:mb-2">
                  {advantage.title}
                </div>
                <div className="font-normal text-sm sm:text-base md:text-lg leading-relaxed">
                  {advantage.description}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-10 md:mt-16 w-full justify-center px-4">
          <Link
            href="/"
            className="border border-orange-400 px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-orange-400 tracking-wider sm:tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between text-sm sm:text-base md:text-lg font-light w-full sm:w-auto"
          >
            TRACE XERO <span className="ml-2 sm:ml-3">&gt;</span>
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
