import Link from 'next/link';
import ImpactEmblem from './ImpactEmblem';

/** About / CTA band (rich green). */
export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-[120px] lg:py-[140px] px-4 sm:px-6 lg:px-10 overflow-hidden text-[#f2fbec]"
      style={{ background: 'linear-gradient(150deg,#5DAF3B 0%,#489C2E 46%,#357F22 100%)' }}
    >
      <div
        className="absolute inset-0 z-[1] opacity-[.06] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,rgba(255,255,255,.6) 1px,transparent 0)', backgroundSize: '34px 34px' }}
      />
      <div
        className="absolute -top-24 -right-16 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(228,99,58,.16),transparent 62%)', filter: 'blur(10px)' }}
      />

      <div className="max-w-[1200px] mx-auto relative z-[2] grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-8 sm:gap-12 lg:gap-14 items-center">
        <div className="reveal-l">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.55)' }}>About TraceXero</span>
          <p className="font-display text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.4] text-white/95 mt-5 mb-7">
            TraceXero is an emerging climate technology company working with Indian industries to pilot carbon capture solutions at the source of emissions.
          </p>
          <p className="text-[16px] leading-[1.9] text-white/70 font-light mb-11 max-w-[560px]">
            Our research-driven approach focuses on scalable systems that integrate into existing operations and support the transition towards a climate-positive world.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/about" className="btn-fill" style={{ background: 'var(--orange)', borderColor: 'var(--orange)', color: '#fff' }}>About TraceXero <span className="arr">→</span></Link>
            <Link href="/contact" className="btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.35)' }}>Contact Us <span className="arr">→</span></Link>
          </div>
        </div>

        {/* climate-positive impact emblem */}
        <div className="reveal-r">
          <ImpactEmblem />
        </div>
      </div>
    </section>
  );
}
