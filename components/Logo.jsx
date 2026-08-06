/** TraceXero brand mark — icon + two-tone wordmark + tagline. */
export default function Logo({ className = 'h-12 w-auto', variant = 'default', ...props }) {
  const dark = variant === 'footer';
  const orange = 'var(--orange)';
  // On the footer's dark green gradient, the site's default --green (#5F8F3E)
  // sits too close to the background to read; the lighter --green-soft
  // carries the same hue with enough contrast.
  const green = dark ? 'var(--green-soft)' : 'var(--green)';

  const img = (
    <img
      src="/assets/tx-logo.png"
      alt="TraceXero — Pollutant to Commodity"
      className={className}
      draggable={false}
      {...props}
    />
  );

  const wordmark = (
    <div className="flex flex-col leading-none shrink-0 min-w-0">
      <span className="font-sans text-[1rem] sm:text-[1.2rem] font-bold tracking-tight whitespace-nowrap">
        <span style={{ color: orange }}>TRACE</span>
        <span style={{ color: green }}>XERO</span>
      </span>
      <span className="hidden min-[400px]:block text-[9px] sm:text-[10px] tracking-[.12em] sm:tracking-[.14em] uppercase mt-1 whitespace-nowrap">
        <span style={{ color: orange }}>Pollutant to</span>{' '}
        <span style={{ color: green }}>commodity</span>
      </span>
    </div>
  );

  if (dark) {
    return (
      <div className="inline-flex items-center gap-2.5 sm:gap-3.5 max-w-full">
        <div
          className="inline-flex items-center justify-center rounded-[14px] sm:rounded-[18px] px-3 py-2 sm:px-4 sm:py-3 shrink-0"
          style={{
            background: 'linear-gradient(155deg, #fffdf5 0%, #f4f2ea 52%, #ece9dd 100%)',
            border: '1px solid rgba(255,255,255,.35)',
            boxShadow: '0 14px 36px -14px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.85)',
          }}
        >
          {img}
        </div>
        {wordmark}
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-3">
      {img}
      {wordmark}
    </div>
  );
}
