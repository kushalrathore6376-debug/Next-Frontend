const PARTNERS = [
  { name: 'Rocksensor', src: '/assets/rocksensor.png' },
  { name: 'MNIT', src: '/assets/mnit.png' },
  { name: 'Sustainable Oasis', src: '/assets/sustainable-oasis.jpg' },
  { name: 'IIIT Delhi', src: '/assets/iiitd.png' },
  { name: 'PRESPL', src: '/assets/prespl.png' },
  { name: 'MetreCon', src: '/assets/metrecon.png' },
  { name: 'NCCBM', src: '/assets/nccbm.png' },
];

function LogoRow({ ariaHidden = false }) {
  return (
    <div
      className="flex items-center gap-8 sm:gap-14 lg:gap-16 pr-8 sm:pr-14 lg:pr-16"
      {...(ariaHidden ? { 'aria-hidden': true } : {})}
    >
      {PARTNERS.map((partner) => (
        <div
          key={`${ariaHidden ? 'dup-' : ''}${partner.name}`}
          className="flex items-center justify-center shrink-0 h-[56px] sm:h-[88px] lg:h-[100px]"
        >
          <img
            src={partner.src}
            alt={ariaHidden ? '' : partner.name}
            className="block h-full w-auto max-w-[120px] sm:max-w-[180px] lg:max-w-[200px] object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default function SupportedBy() {
  return (
    <section className="relative py-16 sm:py-[110px] lg:py-[130px] overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(228,99,58,.06),transparent 60%)', filter: 'blur(30px)' }}
      />
      <div className="max-w-[1100px] mx-auto text-center relative z-[2] px-4 sm:px-6 lg:px-10">
        <div className="reveal">
          <span className="eyebrow" style={{ color: 'var(--orange)' }}>Partners</span>
          <h2 className="display text-[clamp(2rem,3.6vw,3rem)] text-ink mt-4 mb-4">Supported By</h2>
          <div className="h-px w-[70px] mx-auto mb-14 sm:mb-16" style={{ background: 'var(--orange)' }} />
        </div>
      </div>

      <div className="marquee-track relative z-[2] overflow-hidden">
        <div className="marquee" style={{ animationDuration: '40s' }}>
          <LogoRow />
          <LogoRow ariaHidden />
        </div>
      </div>
    </section>
  );
}
