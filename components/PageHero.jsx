/** Shared editorial hero band for interior pages (Technology / About / Contact). */
export default function PageHero({ eyebrow, titleMain, titleAccent, lead, accent = 'orange' }) {
  const accentVar = accent === 'green' ? 'var(--green)' : 'var(--orange)';
  const glow = accent === 'green' ? 'rgba(95,143,62,.13)' : 'rgba(228,99,58,.13)';

  return (
    <section className="relative overflow-hidden pt-[128px] sm:pt-[156px] lg:pt-[176px] pb-14 sm:pb-20 px-4 sm:px-6 lg:px-10">
      <div className="grid-slide" />
      <div className="streak max-sm:hidden" style={{ left: '-20%' }} />
      <div
        className="absolute -top-24 -right-24 w-[min(560px,120vw)] h-[min(560px,120vw)] rounded-full pointer-events-none max-sm:opacity-60"
        style={{ background: `radial-gradient(circle, ${glow}, transparent 62%)`, filter: 'blur(20px)', animation: 'drift 26s ease-in-out infinite' }}
      />

      <div className="max-w-[840px] mx-auto text-center relative z-[2]">
        <span className="eyebrow reveal" style={{ color: accentVar }}>{eyebrow}</span>
        <h1 className="display text-[clamp(2.3rem,6vw,4.2rem)] text-ink mt-5 reveal d1">
          {titleMain}{' '}
          <span className="serif-italic" style={{ color: accentVar }}>{titleAccent}</span>
        </h1>
        {lead && <p className="lead mt-6 sm:mt-8 max-w-[620px] mx-auto reveal d2">{lead}</p>}
      </div>
    </section>
  );
}
