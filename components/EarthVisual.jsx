/**
 * Frameless Blue-Marble Earth with an animated CO2-flux data layer.
 * The Earth photo is a real image (default: /assets/earth.jpg) masked to a circle;
 * plumes/streamlines/hotspots are drawn in SVG and blended with `screen`.
 *
 * Put earth.jpg in your public assets and pass `imageSrc` if the path differs.
 */
export default function EarthVisual({ imageSrc = '/assets/earth.jpg' }) {
  return (
    <div className="relative w-full h-full anim-floatY">
      {/* atmosphere halo feathering into the page */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: '-13%',
          background:
            'radial-gradient(circle,rgba(96,168,235,.42),rgba(96,168,235,.12) 56%,rgba(96,168,235,0) 70%)',
          filter: 'blur(6px)',
        }}
      />
      {/* real Earth photo, masked to a pure sphere */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden"
        role="img"
        aria-label="Earth visualization showing global carbon dioxide emission patterns"
        style={{
          background: `url('${imageSrc}') center/118% no-repeat`,
          boxShadow:
            'inset -26px -24px 80px rgba(0,2,10,.72),inset 18px 16px 52px rgba(130,190,245,.14),0 0 90px rgba(72,142,220,.42),0 30px 80px -30px rgba(10,26,54,.6)',
        }}
      >
        {/* CO2 flux data layer */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 380 380"
          style={{ mixBlendMode: 'screen' }}
        >
          <defs>
            <radialGradient id="pHot" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="rgba(255,150,70,.9)" />
              <stop offset="45%" stopColor="rgba(255,84,40,.5)" />
              <stop offset="100%" stopColor="rgba(255,84,40,0)" />
            </radialGradient>
            <radialGradient id="pAmber" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="rgba(255,214,120,.85)" />
              <stop offset="50%" stopColor="rgba(255,168,60,.4)" />
              <stop offset="100%" stopColor="rgba(255,168,60,0)" />
            </radialGradient>
            <radialGradient id="pCool" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="rgba(175,130,255,.7)" />
              <stop offset="52%" stopColor="rgba(96,150,255,.32)" />
              <stop offset="100%" stopColor="rgba(96,150,255,0)" />
            </radialGradient>
            <radialGradient id="hot" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="rgba(255,240,194,1)" />
              <stop offset="34%" stopColor="rgba(255,106,42,.9)" />
              <stop offset="100%" stopColor="rgba(255,106,42,0)" />
            </radialGradient>
            <linearGradient id="flowG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="rgba(255,224,170,0)" />
              <stop offset="45%" stopColor="rgba(255,190,120,.95)" />
              <stop offset="100%" stopColor="rgba(255,120,60,0)" />
            </linearGradient>
            <filter id="pBlur" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="15" />
            </filter>
            <filter id="sBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.6" />
            </filter>
          </defs>

          {/* glowing concentration plumes over land + transport over oceans */}
          <g filter="url(#pBlur)">
            <g style={{ transformOrigin: '190px 190px', animation: 'drift 26s ease-in-out infinite' }}>
              <ellipse cx="200" cy="110" rx="66" ry="38" fill="url(#pHot)" transform="rotate(-18 200 110)" />
              <ellipse cx="163" cy="156" rx="56" ry="32" fill="url(#pHot)" transform="rotate(8 163 156)" />
              <ellipse cx="108" cy="166" rx="36" ry="24" fill="url(#pAmber)" />
            </g>
            <g style={{ transformOrigin: '190px 190px', animation: 'drift2 30s ease-in-out infinite' }}>
              <ellipse cx="240" cy="166" rx="78" ry="24" fill="url(#pAmber)" transform="rotate(16 240 166)" />
              <ellipse cx="270" cy="238" rx="62" ry="26" fill="url(#pCool)" transform="rotate(10 270 238)" />
            </g>
            <g style={{ transformOrigin: '190px 190px', animation: 'drift 34s ease-in-out 2s infinite' }}>
              <ellipse cx="146" cy="202" rx="52" ry="22" fill="url(#pAmber)" transform="rotate(-12 146 202)" />
              <ellipse cx="120" cy="242" rx="66" ry="28" fill="url(#pCool)" transform="rotate(-6 120 242)" />
            </g>
          </g>

          {/* wind transport streamlines */}
          <g fill="none" stroke="url(#flowG)" strokeLinecap="round" filter="url(#sBlur)">
            <path d="M50,150 C130,92 250,100 330,150" strokeWidth="2.4" strokeDasharray="6 16" style={{ animation: 'flowDash 4s linear infinite' }} />
            <path d="M64,232 C142,290 250,282 322,224" strokeWidth="2" strokeDasharray="5 17" style={{ animation: 'flowDash 4.8s linear infinite' }} />
            <path d="M120,86 C176,146 196,232 166,292" strokeWidth="1.8" strokeDasharray="5 18" style={{ animation: 'flowDash 5.4s linear infinite' }} />
          </g>

          {/* emission concentration hotspots */}
          <g>
            <circle cx="200" cy="108" r="6" fill="url(#hot)" style={{ animation: 'pulseNode 3.2s ease-in-out infinite' }} />
            <circle cx="200" cy="108" r="2" fill="#fff2cf" />
            <circle cx="166" cy="150" r="5.4" fill="url(#hot)" style={{ animation: 'pulseNode 3.2s ease-in-out .8s infinite' }} />
            <circle cx="166" cy="150" r="1.8" fill="#fff2cf" />
            <circle cx="150" cy="116" r="4.6" fill="url(#hot)" style={{ animation: 'pulseNode 3.2s ease-in-out 1.5s infinite' }} />
            <circle cx="150" cy="116" r="1.6" fill="#fff2cf" />
            <circle cx="232" cy="150" r="4.4" fill="url(#hot)" style={{ animation: 'pulseNode 3.2s ease-in-out 2.1s infinite' }} />
            <circle cx="232" cy="150" r="1.5" fill="#fff2cf" />
          </g>
        </svg>

        {/* specular limb highlight */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(58% 52% at 32% 26%,rgba(255,255,255,.2),transparent 58%)' }}
        />
        {/* terminator depth on lower-right */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(80% 80% at 34% 30%,transparent 52%,rgba(2,6,16,.55) 100%)' }}
        />
        {/* crisp atmosphere rim */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(150,205,240,.35)' }}
        />
      </div>
    </div>
  );
}
