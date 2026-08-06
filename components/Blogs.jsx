/** Latest Blogs & Updates — three cards with distinct animated SVG headers. */
export default function Blogs() {
  return (
    <section className="relative py-16 sm:py-[110px] lg:py-[130px] px-4 sm:px-6 lg:px-10 overflow-hidden" style={{ background: 'var(--paper-2)' }}>
      <div className="rule absolute top-0 inset-x-0" />
      <div className="slide-sheet" style={{ background: 'linear-gradient(90deg,transparent,rgba(228,99,58,.045),transparent)', animationDuration: '36s' }} />
      <div className="max-w-[1280px] mx-auto relative z-[2]">
        <div className="flex items-end justify-between flex-wrap gap-4 sm:gap-6 mb-10 sm:mb-14 reveal">
          <div>
            <span className="eyebrow" style={{ color: 'var(--green)' }}>News</span>
            <h2 className="display text-[clamp(2rem,3.6vw,3rem)] text-ink mt-4">Latest Blogs and <span className="serif-italic" style={{ color: 'var(--orange)' }}>Updates</span></h2>
          </div>
          <a href="#" className="link-underline">Read More <span className="arr">→</span></a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {/* card 1 — live trend/bar chart */}
          <article className="paper-card overflow-hidden reveal-s d1">
            <div className="media sheen-wrap rounded-none h-[180px] sm:h-[210px]" style={{ borderLeft: 0, borderRight: 0, borderTop: 0 }}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 210" preserveAspectRatio="xMidYMid meet" fill="none">
                <line x1="30" y1="168" x2="292" y2="168" stroke="rgba(28,27,22,.15)" strokeWidth="1" />
                <g fill="rgba(95,143,62,.22)" stroke="rgba(95,143,62,.5)" strokeWidth="1">
                  <rect x="52" y="120" width="20" height="48" rx="2" />
                  <rect x="100" y="100" width="20" height="68" rx="2" />
                  <rect x="148" y="112" width="20" height="56" rx="2" />
                  <rect x="196" y="82" width="20" height="86" rx="2" />
                  <rect x="244" y="64" width="20" height="104" rx="2" />
                </g>
                <polyline points="62,120 110,100 158,112 206,82 254,64" fill="none" stroke="#5F8F3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="300" style={{ animation: 'flowDash 6s linear infinite' }} />
                <circle cx="254" cy="64" r="3.6" fill="#5F8F3E"><animate attributeName="opacity" values=".4;1;.4" dur="2s" repeatCount="indefinite" /></circle>
              </svg>
              <span className="media-corner">01 · Insights</span>
            </div>
            <div className="p-5 sm:p-7">
              <div className="text-[11px] tracking-[.14em] uppercase mb-3" style={{ color: 'var(--green)' }}>Industry Insights</div>
              <h3 className="font-display text-xl text-ink mb-3 leading-snug">Latest developments in carbon capture</h3>
              <p className="text-[13px] leading-[1.75] text-ink-soft font-light">Latest developments in carbon capture technology and industry trends.</p>
            </div>
          </article>

          {/* card 2 — orbiting milestones */}
          <article className="paper-card overflow-hidden reveal-s d2">
            <div className="media sheen-wrap rounded-none h-[180px] sm:h-[210px]" style={{ borderLeft: 0, borderRight: 0, borderTop: 0 }}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 210" preserveAspectRatio="xMidYMid meet" fill="none">
                <circle cx="160" cy="105" r="66" stroke="rgba(228,99,58,.25)" strokeWidth="1" strokeDasharray="2 9" fill="none" />
                <circle cx="160" cy="105" r="42" stroke="rgba(28,27,22,.12)" strokeWidth="1" fill="none" />
                <circle cx="160" cy="105" r="7" fill="rgba(228,99,58,.3)" stroke="#E4633A" strokeWidth="1.4" />
                <g><circle r="4.5" fill="#E4633A"><animateMotion dur="9s" repeatCount="indefinite" path="M160,39 a66,66 0 1,1 -0.1,0" /></circle></g>
                <g><circle r="3.5" fill="#5F8F3E"><animateMotion dur="9s" begin="-3s" repeatCount="indefinite" path="M160,39 a66,66 0 1,1 -0.1,0" /></circle></g>
                <g><circle r="3" fill="#3f7fbf"><animateMotion dur="7s" repeatCount="indefinite" path="M160,63 a42,42 0 1,1 -0.1,0" /></circle></g>
                <g stroke="rgba(28,27,22,.2)" strokeWidth="1"><line x1="160" y1="30" x2="160" y2="38" /><line x1="235" y1="105" x2="227" y2="105" /><line x1="160" y1="180" x2="160" y2="172" /><line x1="85" y1="105" x2="93" y2="105" /></g>
              </svg>
              <span className="media-corner">02 · Company</span>
            </div>
            <div className="p-5 sm:p-7">
              <div className="text-[11px] tracking-[.14em] uppercase mb-3" style={{ color: 'var(--orange)' }}>Company Updates</div>
              <h3 className="font-display text-xl text-ink mb-3 leading-snug">Milestones and partnerships</h3>
              <p className="text-[13px] leading-[1.75] text-ink-soft font-light">Milestones, partnerships, and progress on our carbon capture mission.</p>
            </div>
          </article>

          {/* card 3 — rotating carbon ring molecule + research lines */}
          <article className="paper-card overflow-hidden reveal-s d3">
            <div className="media sheen-wrap rounded-none h-[180px] sm:h-[210px]" style={{ borderLeft: 0, borderRight: 0, borderTop: 0 }}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 210" preserveAspectRatio="xMidYMid meet" fill="none">
                <g stroke="rgba(28,27,22,.12)" strokeWidth="2" strokeLinecap="round">
                  <line x1="40" y1="66" x2="120" y2="66" /><line x1="40" y1="86" x2="140" y2="86" />
                  <line x1="40" y1="128" x2="120" y2="128" /><line x1="40" y1="148" x2="150" y2="148" />
                </g>
                <g style={{ transformOrigin: '214px 105px' }} className="anim-spinSlow">
                  <polygon points="260,105 237,145 191,145 168,105 191,65 237,65" fill="rgba(63,127,191,.1)" stroke="rgba(63,127,191,.5)" strokeWidth="1.6" />
                  <g stroke="rgba(63,127,191,.4)" strokeWidth="1.4"><line x1="232" y1="74" x2="215" y2="74" /><line x1="196" y1="105" x2="205" y2="121" /><line x1="232" y1="136" x2="215" y2="136" /></g>
                  <g fill="#3f7fbf"><circle cx="260" cy="105" r="4" /><circle cx="237" cy="145" r="4" /><circle cx="191" cy="145" r="4" /><circle cx="168" cy="105" r="4" /><circle cx="191" cy="65" r="4" /><circle cx="237" cy="65" r="4" /></g>
                </g>
              </svg>
              <span className="media-corner">03 · Research</span>
            </div>
            <div className="p-5 sm:p-7">
              <div className="text-[11px] tracking-[.14em] uppercase mb-3" style={{ color: '#3f7fbf' }}>Research Papers</div>
              <h3 className="font-display text-xl text-ink mb-3 leading-snug">Peer-reviewed research</h3>
              <p className="text-[13px] leading-[1.75] text-ink-soft font-light">Our peer-reviewed research and publications on carbon conversion.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
