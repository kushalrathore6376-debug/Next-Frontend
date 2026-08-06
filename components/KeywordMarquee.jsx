const ITEMS = [
  { text: 'Carbon Capture', italic: true },
  { text: 'Graphitic Carbon', italic: false, green: true },
  { text: 'Circular Economy', italic: true },
  { text: 'Net Zero 2030', italic: false, green: true },
  { text: 'Decarbonise & Earn', italic: true },
];

function Row({ ariaHidden }) {
  return (
    <div className="flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10 text-muted" aria-hidden={ariaHidden || undefined}>
      {ITEMS.map((it, i) => (
        <span key={i} className="contents">
          <span className={`font-display text-[1.15rem] sm:text-[1.4rem] lg:text-[1.6rem] whitespace-nowrap ${it.italic ? 'serif-italic' : ''}`}>{it.text}</span>
          <span className="tick shrink-0" style={it.green ? { background: 'var(--green)' } : undefined} />
        </span>
      ))}
    </div>
  );
}

export default function KeywordMarquee() {
  return (
    <div className="marquee-track py-4 sm:py-6 border-y overflow-hidden" style={{ borderColor: 'var(--line-soft)', background: 'var(--paper-2)' }}>
      <div className="marquee">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}
