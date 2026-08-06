import CycleCarousel from './CycleCarousel';

/** "Decarbonise and Earn" (Circular Economy) section. */
export default function DecarboniseSection() {
  return (
    <section className="relative py-16 sm:py-[120px] lg:py-[150px] px-4 sm:px-6 lg:px-10 overflow-hidden" style={{ background: 'var(--paper-2)' }}>
      <div className="rule absolute top-0 inset-x-0" />
      <div className="slide-sheet" style={{ background: 'linear-gradient(90deg,transparent,rgba(95,143,62,.05),transparent)' }} />
      <div className="streak" style={{ left: '40%', opacity: 0.3, animationDuration: '14s' }} />
      <div className="max-w-[1280px] mx-auto relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-14 items-end mb-12 sm:mb-16">
          <div className="reveal-l">
            <span className="eyebrow" style={{ color: 'var(--green)' }}>Circular Economy</span>
            <h2 className="display text-[clamp(2.2rem,4.4vw,3.6rem)] text-ink mt-4 mb-8">
              Decarbonise and <span className="serif-italic" style={{ color: 'var(--green)' }}>Earn</span>
            </h2>
            <p className="lead mb-4">Industries account for over <strong className="font-medium" style={{ color: 'var(--green)' }}>30% of global emissions.</strong></p>
            <p className="lead">A true circular economy enables transparent emission flows across industrial value chains.</p>
          </div>

          {/* big stat block */}
          <div className="reveal-r flex lg:justify-end">
            <div className="paper-card px-6 sm:px-10 py-7 sm:py-9 w-full lg:max-w-[380px] text-center lg:text-right">
              <div className="font-display display text-[clamp(4rem,8vw,6rem)]" style={{ color: 'var(--green)' }}>30%</div>
              <div className="text-[12px] text-muted tracking-[.16em] uppercase mt-2">of global emissions come from industry</div>
            </div>
          </div>
        </div>

        <CycleCarousel />
      </div>
    </section>
  );
}
