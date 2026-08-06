/** The "From Pollutant to Commodity" animated TX-1000 capture diagram (SVG). */
export default function CaptureDiagram() {
  return (
    <div className="media w-full h-[300px] sm:h-[420px] lg:h-[520px]">
      <div className="grid-slide" style={{ opacity: 0.3 }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 440 520" fill="none" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="capGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fbf8ef" />
            <stop offset="1" stopColor="#ece5d4" />
          </linearGradient>
          <radialGradient id="reactor" cx="42%" cy="38%" r="70%">
            <stop offset="0" stopColor="#F6B49B" />
            <stop offset=".55" stopColor="#E4633A" />
            <stop offset="1" stopColor="#5F8F3E" />
          </radialGradient>
          <path id="intakePipe" d="M142,84 C142,150 120,175 175,236" fill="none" />
          <filter id="capSoft"><feGaussianBlur stdDeviation="1.6" /></filter>
        </defs>

        {/* SECTION A · emission source */}
        <g stroke="rgba(28,27,22,.28)" strokeWidth="1.4">
          <rect x="112" y="112" width="84" height="54" rx="4" fill="#e7e0cf" />
          <rect x="130" y="80" width="18" height="34" rx="2" fill="#ded6c3" />
          <rect x="124" y="124" width="12" height="12" rx="1.5" fill="rgba(95,143,62,.25)" />
          <rect x="146" y="124" width="12" height="12" rx="1.5" fill="rgba(95,143,62,.25)" />
          <rect x="168" y="124" width="12" height="12" rx="1.5" fill="rgba(95,143,62,.25)" />
        </g>
        <text x="112" y="182" fontFamily="Inter" fontSize="8" letterSpacing="1.5" fill="rgba(28,27,22,.35)">EMISSION SOURCE</text>

        {/* intake pipe */}
        <path d="M142,84 C142,150 120,175 175,236" stroke="rgba(228,99,58,.35)" strokeWidth="6" strokeLinecap="round" />
        <path d="M142,84 C142,150 120,175 175,236" stroke="#E4633A" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 10" style={{ animation: 'flowDash 2.5s linear infinite' }} />

        {/* CO2 molecules travelling into the unit */}
        <g><g opacity=".85"><circle cx="-6" r="2.4" fill="#5F8F3E" /><circle r="3.4" fill="#E4633A" /><circle cx="6" r="2.4" fill="#5F8F3E" /><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#intakePipe" /></animateMotion></g></g>
        <g><g opacity=".7"><circle cx="-5" r="2" fill="#5F8F3E" /><circle r="3" fill="#E4633A" /><circle cx="5" r="2" fill="#5F8F3E" /><animateMotion dur="4s" begin="-1.3s" repeatCount="indefinite"><mpath href="#intakePipe" /></animateMotion></g></g>
        <g><g opacity=".6"><circle cx="-5" r="2" fill="#5F8F3E" /><circle r="3" fill="#E4633A" /><circle cx="5" r="2" fill="#5F8F3E" /><animateMotion dur="4s" begin="-2.6s" repeatCount="indefinite"><mpath href="#intakePipe" /></animateMotion></g></g>

        {/* SECTION B · capture module */}
        <rect x="150" y="212" width="200" height="128" rx="18" fill="url(#capGrad)" stroke="rgba(28,27,22,.22)" strokeWidth="1.4" />
        <rect x="150" y="212" width="200" height="26" rx="18" fill="rgba(28,27,22,.04)" />
        <circle cx="168" cy="225" r="3" fill="#5F8F3E"><animate attributeName="opacity" values=".3;1;.3" dur="1.6s" repeatCount="indefinite" /></circle>
        <text x="182" y="228" fontFamily="Inter" fontSize="8" letterSpacing="2" fill="rgba(28,27,22,.5)">TX-1000 · CAPTURE</text>
        {/* reactor window with swirl */}
        <circle cx="238" cy="292" r="34" fill="url(#reactor)" opacity=".9" />
        <g style={{ transformOrigin: '238px 292px' }} className="anim-spinSlow" stroke="rgba(255,255,255,.7)" strokeWidth="1.5" fill="none">
          <path d="M238,266 A26,26 0 0,1 264,292" /><path d="M238,318 A26,26 0 0,1 212,292" />
        </g>
        <circle cx="238" cy="292" r="34" fill="none" stroke="rgba(28,27,22,.25)" strokeWidth="1.4" />
        <circle cx="238" cy="292" r="3" fill="#fff"><animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" /></circle>
        {/* mini arc gauge */}
        <circle cx="316" cy="270" r="16" fill="none" stroke="rgba(28,27,22,.1)" strokeWidth="3" />
        <circle cx="316" cy="270" r="16" fill="none" stroke="#5F8F3E" strokeWidth="3" strokeLinecap="round" strokeDasharray="80 100" transform="rotate(-90 316 270)" />
        <text x="316" y="273" textAnchor="middle" fontFamily="Inter" fontSize="7" fontWeight="600" fill="rgba(95,143,62,.9)">99%</text>
        <text x="300" y="316" fontFamily="Inter" fontSize="7" fill="rgba(28,27,22,.35)">CO₂ → C</text>

        {/* outlet */}
        <path d="M238,340 L238,372" stroke="rgba(95,143,62,.4)" strokeWidth="6" strokeLinecap="round" />
        <path d="M238,340 L238,372" stroke="#5F8F3E" strokeWidth="2" strokeDasharray="4 8" style={{ animation: 'flowDash 2s linear infinite' }} />

        {/* SECTION C · graphite output */}
        <rect x="168" y="378" width="140" height="10" rx="3" fill="rgba(28,27,22,.1)" />
        <g stroke="rgba(95,143,62,.55)" strokeWidth="1.5" fill="rgba(95,143,62,.14)">
          <polygon points="205,378 214,373 223,378 223,388 214,393 205,388"><animate attributeName="opacity" values="0;1" dur=".6s" begin="0.2s" fill="freeze" /></polygon>
          <polygon points="223,378 232,373 241,378 241,388 232,393 223,388"><animate attributeName="opacity" values="0;1" dur=".6s" begin="0.6s" fill="freeze" /></polygon>
          <polygon points="241,378 250,373 259,378 259,388 250,393 241,388"><animate attributeName="opacity" values="0;1" dur=".6s" begin="1s" fill="freeze" /></polygon>
          <polygon points="214,368 223,363 232,368 232,378 223,383 214,378"><animate attributeName="opacity" values="0;1" dur=".6s" begin="1.4s" fill="freeze" /></polygon>
          <polygon points="232,368 241,363 250,368 250,378 241,383 232,378"><animate attributeName="opacity" values="0;1" dur=".6s" begin="1.8s" fill="freeze" /></polygon>
        </g>
        <text x="168" y="412" fontFamily="Inter" fontSize="8" letterSpacing="1.5" fill="rgba(95,143,62,.8)">GRAPHITIC CARBON · COMMODITY</text>
      </svg>
      <span className="media-corner">TRACEXERO TX-1000</span>
      <span className="media-label">Installed at source</span>
    </div>
  );
}
