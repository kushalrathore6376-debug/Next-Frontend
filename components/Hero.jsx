import Link from 'next/link';
import EarthVisual from './EarthVisual';
import StatCard from './ui/StatCard';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[100px] sm:pt-[130px] lg:pt-[150px] pb-12 sm:pb-[70px] px-4 sm:px-6 lg:px-10">
      <div
        className="absolute -top-24 -right-24 w-[min(560px,120vw)] h-[min(560px,120vw)] rounded-full pointer-events-none parallax max-sm:opacity-60"
        data-speed="-0.08"
        style={{ background: 'radial-gradient(circle,rgba(228,99,58,.13),transparent 62%)', filter: 'blur(20px)', animation: 'drift 26s ease-in-out infinite' }}
      />
      <div
        className="absolute top-1/3 -left-32 w-[min(480px,100vw)] h-[min(480px,100vw)] rounded-full pointer-events-none parallax max-sm:opacity-60"
        data-speed="0.06"
        style={{ background: 'radial-gradient(circle,rgba(95,143,62,.13),transparent 62%)', filter: 'blur(20px)', animation: 'drift2 30s ease-in-out infinite' }}
      />
      <div className="grid-slide" />
      <div className="streak max-sm:hidden" style={{ left: '-20%' }} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="co2" style={{ width: 6, height: 6, left: '12%', bottom: '8%', background: 'rgba(228,99,58,.5)', '--rx': '24px', animation: 'rise 9s ease-in 0s infinite' }} />
        <span className="co2" style={{ width: 4, height: 4, left: '24%', bottom: '4%', background: 'rgba(95,143,62,.5)', '--rx': '-18px', animation: 'rise 11s ease-in 1.5s infinite' }} />
        <span className="co2" style={{ width: 5, height: 5, left: '38%', bottom: '10%', background: 'rgba(228,99,58,.4)', '--rx': '14px', animation: 'rise 10s ease-in 3s infinite' }} />
        <span className="co2 max-sm:hidden" style={{ width: 3, height: 3, left: '62%', bottom: '6%', background: 'rgba(63,127,191,.45)', '--rx': '-22px', animation: 'rise 12s ease-in .8s infinite' }} />
        <span className="co2 max-sm:hidden" style={{ width: 6, height: 6, left: '74%', bottom: '12%', background: 'rgba(95,143,62,.45)', '--rx': '20px', animation: 'rise 8.5s ease-in 2.2s infinite' }} />
        <span className="co2 max-sm:hidden" style={{ width: 4, height: 4, left: '86%', bottom: '5%', background: 'rgba(228,99,58,.4)', '--rx': '-14px', animation: 'rise 10.5s ease-in 4s infinite' }} />
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-10 sm:gap-14 lg:gap-10 items-center relative z-[2]">
        <div className="max-lg:text-center max-lg:order-2">
          <h1 className="display text-[clamp(2.25rem,8vw,5.4rem)] text-ink reveal d1">
            Building the<br className="hidden sm:block" /> Future of<br className="hidden sm:block" />
            <span className="serif-italic" style={{ color: 'var(--orange)' }}>Carbon Capture</span>
          </h1>

          <p className="lead max-w-[500px] mt-6 sm:mt-8 mb-8 sm:mb-10 max-lg:mx-auto reveal d2">
            Enabling industries to lower their carbon footprints, generate carbon credits, and adopt sustainable practices without sacrificing efficiency.
          </p>

          <div className="flex items-center gap-3 sm:gap-4 flex-col sm:flex-row flex-wrap max-lg:justify-center reveal d3 w-full sm:w-auto">
            <a href="#about" className="btn-fill w-full sm:w-auto justify-center">Climate Impact Goal <span className="arr">→</span></a>
            <Link href="/technology" className="btn-ghost w-full sm:w-auto justify-center">Technology <span className="arr">→</span></Link>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:flex sm:items-stretch sm:justify-start sm:gap-8 mt-10 sm:mt-12 max-lg:justify-center reveal d4">
            <div className="text-center sm:text-left min-w-0">
              <div className="font-display text-[clamp(1.35rem,4.5vw,2rem)] text-ink leading-none">
                99.2<span className="text-[1rem] sm:text-[1.2rem]" style={{ color: 'var(--orange)' }}>%</span>
              </div>
              <div className="text-[9px] sm:text-[11px] text-muted tracking-[.08em] sm:tracking-[.14em] uppercase mt-1.5 sm:mt-2 leading-snug">Capture Efficiency</div>
            </div>
            <div className="hidden sm:block w-px self-stretch shrink-0" style={{ background: 'var(--line)' }} />
            <div className="text-center sm:text-left min-w-0">
              <div className="font-display text-[clamp(1.35rem,4.5vw,2rem)] text-ink leading-none">
                1M<span className="text-[1rem] sm:text-[1.2rem]" style={{ color: 'var(--green)' }}>+</span>
              </div>
              <div className="text-[9px] sm:text-[11px] text-muted tracking-[.08em] sm:tracking-[.14em] uppercase mt-1.5 sm:mt-2 leading-snug">Tons CO₂ Target</div>
            </div>
            <div className="hidden sm:block w-px self-stretch shrink-0" style={{ background: 'var(--line)' }} />
            <div className="text-center sm:text-left min-w-0">
              <div className="font-display text-[clamp(1.35rem,4.5vw,2rem)] text-ink leading-none serif-italic">2030</div>
              <div className="text-[9px] sm:text-[11px] text-muted tracking-[.08em] sm:tracking-[.14em] uppercase mt-1.5 sm:mt-2 leading-snug">Net Zero Goal</div>
            </div>
          </div>
        </div>

        <div className="relative reveal-s max-lg:order-1 h-[min(300px,78vw)] sm:h-[360px] md:h-[420px] lg:h-auto lg:min-h-[560px] max-lg:overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] w-[min(260px,70vw)] h-[min(260px,70vw)] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:left-auto lg:right-[-14%] lg:translate-x-0 lg:w-[600px] lg:h-[600px]">
            <EarthVisual />
          </div>

          <StatCard className="hidden sm:block absolute top-[15%] left-[0%] lg:left-[2%] px-4 sm:px-5 py-3 sm:py-4 anim-floatY z-[3] max-w-[calc(100%-1rem)]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="tick anim-breathe" />
              <span className="font-display text-[1.25rem] sm:text-[1.5rem] leading-none" style={{ color: 'var(--orange)' }}>99.2%</span>
            </div>
            <div className="text-[10px] text-muted tracking-[.14em] uppercase">Capture Efficiency</div>
            <svg className="mt-2 h-4 w-full max-w-[96px]" viewBox="0 0 96 18">
              <polyline points="0,15 12,11 24,13 36,7 48,9 60,4 72,6 84,2 96,1" fill="none" stroke="#E4633A" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </StatCard>

          <StatCard className="hidden sm:block absolute bottom-[8%] left-[4%] sm:left-[6%] lg:left-[10%] px-4 sm:px-5 py-3 sm:py-4 anim-floatYd z-[3] max-w-[calc(100%-1rem)]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="tick anim-breathe" style={{ background: 'var(--green)' }} />
              <span className="font-display text-[1.15rem] sm:text-[1.5rem] leading-none" style={{ color: 'var(--green)' }}>1M+ tons</span>
            </div>
            <div className="text-[10px] text-muted tracking-[.14em] uppercase">CO₂ Captured Target</div>
            <svg className="mt-2 h-4 w-full max-w-[96px]" viewBox="0 0 96 18">
              <polyline points="0,14 12,12 24,10 36,12 48,7 60,6 72,8 84,3 96,2" fill="none" stroke="#5F8F3E" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </StatCard>

          <StatCard className="absolute top-[50%] right-[2%] sm:right-[6%] lg:right-[14%] hidden md:block px-4 py-3 z-[3]">
            <div className="text-[10px] text-muted tracking-[.14em] uppercase mb-0.5">2030 Goal Status</div>
            <div className="flex items-center gap-2">
              <span className="tick" style={{ background: '#3f7fbf' }} />
              <span className="font-display text-[1.05rem] serif-italic" style={{ color: '#2f5c86' }}>Net Zero · On Track</span>
            </div>
          </StatCard>
        </div>
      </div>
    </section>
  );
}
