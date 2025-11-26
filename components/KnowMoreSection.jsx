import Link from "next/link";

export default function KnowMoreSection() {
  return (
    <section className="w-full bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 px-4 leading-tight">
          Know More
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 lg:gap-28 justify-center w-full pb-3 px-4">
          <Link href="/how-it-works" className="border border-orange-400 px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-orange-400 tracking-wider sm:tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between text-sm sm:text-base md:text-lg font-light w-full sm:w-auto">
            HOW IT WORKS <span className="ml-2 sm:ml-3">&gt;</span>
          </Link>
          <Link href="/" className="border border-orange-400 px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-orange-400 tracking-wider sm:tracking-widest rounded-none hover:bg-orange-400 hover:text-black transition flex items-center justify-between text-sm sm:text-base md:text-lg font-light w-full sm:w-auto">
            TRACE XERO <span className="ml-2 sm:ml-3">&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}


