/** The "climate-positive impact" emblem shown in the About band. */
export default function ImpactEmblem() {
  return (
    <div
      className="relative rounded-[22px] sm:rounded-[30px] overflow-hidden h-[260px] sm:h-[320px] lg:h-[360px]"
      style={{ background: 'linear-gradient(150deg,rgba(255,255,255,.15),rgba(255,255,255,.03))', border: '1px solid rgba(255,255,255,.22)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg,rgba(255,255,255,.6),transparent)' }} />
      <div className="slide-sheet" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent)' }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 440 360" fill="none" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="aGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="rgba(255,255,255,.28)" />
            <stop offset="62%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <linearGradient id="aArc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFF3EC" />
            <stop offset="1" stopColor="#F0906A" />
          </linearGradient>
          <path id="aOrbit" d="M220,40 a140,140 0 1,1 -0.1,0" fill="none" />
          <path id="aOrbit2" d="M220,72 a108,108 0 1,1 -0.1,0" fill="none" />
          <filter id="aSoft"><feGaussianBlur stdDeviation="2" /></filter>
        </defs>
        {/* centre glow */}
        <circle cx="220" cy="180" r="150" fill="url(#aGlow)" />
        {/* twinkles */}
        <g fill="#fff">
          <circle cx="60" cy="70" r="1.5" style={{ animation: 'twinkle 3.4s ease-in-out infinite' }} />
          <circle cx="388" cy="96" r="1.4" style={{ animation: 'twinkle 4s ease-in-out 1s infinite' }} />
          <circle cx="360" cy="300" r="1.3" style={{ animation: 'twinkle 3.2s ease-in-out 1.7s infinite' }} />
        </g>
        {/* rotating dashed orbits */}
        <g style={{ transformOrigin: '220px 180px' }} className="anim-spinSlow"><circle cx="220" cy="180" r="140" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="1" strokeDasharray="2 11" /></g>
        <g style={{ transformOrigin: '220px 180px' }} className="anim-spinRev"><circle cx="220" cy="180" r="120" fill="none" stroke="rgba(255,255,255,.13)" strokeWidth="1" strokeDasharray="1 16" /></g>
        <circle cx="220" cy="180" r="94" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="1" />
        {/* net-zero progress gauge */}
        <circle cx="220" cy="180" r="108" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="3" />
        <circle cx="220" cy="180" r="108" fill="none" stroke="url(#aArc)" strokeWidth="3" strokeLinecap="round" strokeDasharray="512 680" transform="rotate(-90 220 180)"><animate attributeName="stroke-dasharray" values="0 1200;512 680" dur="2.6s" fill="freeze" /></circle>
        <circle cx="220" cy="72" r="4.5" fill="#FFF3EC" filter="url(#aSoft)"><animate attributeName="opacity" values=".6;1;.6" dur="2s" repeatCount="indefinite" /></circle>
        {/* inner world */}
        <circle cx="220" cy="180" r="64" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.24)" strokeWidth="1.2" />
        {/* growing sprout / leaves emblem */}
        <g stroke="rgba(255,255,255,.9)" strokeWidth="1.7" strokeLinecap="round" fill="none">
          <path d="M220,214 C220,196 220,172 220,150" />
          <path d="M220,176 C204,172 190,180 184,196 C202,200 216,192 220,176 Z" fill="rgba(255,255,255,.1)" />
          <path d="M220,160 C236,155 252,163 258,180 C240,184 224,175 220,160 Z" fill="rgba(255,255,255,.14)" />
          <path d="M198,190 C206,186 213,184 219,184" />
          <path d="M242,172 C234,170 227,169 221,170" />
        </g>
        {/* orbiting nodes */}
        <g filter="url(#aSoft)"><circle r="5" fill="#F0906A"><animateMotion dur="16s" repeatCount="indefinite"><mpath href="#aOrbit" /></animateMotion></circle></g>
        <g filter="url(#aSoft)"><circle r="3.6" fill="rgba(255,255,255,.92)"><animateMotion dur="16s" begin="-8s" repeatCount="indefinite"><mpath href="#aOrbit" /></animateMotion></circle></g>
        <g><circle r="3" fill="rgba(255,255,255,.7)"><animateMotion dur="12s" repeatCount="indefinite"><mpath href="#aOrbit2" /></animateMotion></circle></g>
        <text x="24" y="332" fontFamily="Inter" fontSize="9" letterSpacing="2" fill="rgba(255,255,255,.5)">CLIMATE-POSITIVE WORLD</text>
      </svg>
      {/* floating glass chips */}
      <div className="absolute top-3 left-3 sm:top-5 sm:left-5 anim-floatY max-w-[calc(100%-1.5rem)]" style={{ background: 'rgba(255,255,255,.14)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.3)', borderRadius: 14, padding: '8px 11px', boxShadow: '0 14px 30px -16px rgba(0,0,0,.5)' }}>
        <div className="flex items-center gap-2">
          <span className="tick anim-breathe shrink-0" style={{ background: '#FFE1D4', boxShadow: '0 0 8px rgba(255,225,212,.6)' }} />
          <span className="font-display text-white text-[0.85rem] sm:text-[1rem] leading-none serif-italic">Net Zero · 2030</span>
        </div>
      </div>
      <div className="absolute bottom-4 right-3 sm:bottom-6 sm:right-5 anim-floatYd max-w-[calc(100%-1.5rem)]" style={{ background: 'rgba(255,255,255,.14)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.3)', borderRadius: 14, padding: '8px 11px', boxShadow: '0 14px 30px -16px rgba(0,0,0,.5)' }}>
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4"><polyline points="20 6 9 17 4 12" /></svg>
          <span className="text-white text-[11px] font-medium tracking-[.1em] uppercase">Climate Positive</span>
        </div>
      </div>
      <span className="media-corner" style={{ color: 'rgba(255,255,255,.5)' }}>TRACEXERO · IMPACT</span>
    </div>
  );
}
