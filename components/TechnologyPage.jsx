import Link from 'next/link';
import PageShell from '@/components/PageShell';
import PageHero from '@/components/PageHero';
import GrapheneLattice from '@/components/GrapheneLattice';
import PathwayTabs from '@/components/PathwayTabs';
import DigitalTwinViewer from '@/components/digital-twin/DigitalTwinViewer.jsx';

const HERO_STATS = [
  { value: '3', label: 'Pathways', color: 'var(--green)' },
  { value: '40°C', label: 'Ambient Ops', color: 'var(--orange)' },
  { value: '0', label: 'Storage Needed', color: '#3f7fbf' },
];

const COMPARISON = [
  { label: 'Operating Temperature', legacy: '600°C+', tx: '40°C' },
  { label: 'CO₂ Storage', legacy: 'Geological', tx: 'None' },
  { label: 'Output State', legacy: 'Compressed gas', tx: 'Solid carbon' },
  { label: 'Reusability', legacy: 'Limited', tx: 'Universal' },
];

const STEPS = [
  {
    n: '01',
    title: 'Air Intake',
    body: 'Ambient air is drawn into the system using low-energy fans, optimized to handle both outdoor and industrial exhaust environments.',
    metric: { label: 'Energy Draw', from: 'minimal', to: '22%', pct: 22 },
    color: 'var(--green)',
  },
  {
    n: '02',
    title: 'CO₂ Absorption',
    body: 'Using our proprietary catalytic platform, CO₂ molecules are separated from the air stream without high heat, chemical solvents, or compression.',
    metric: { label: 'Selectivity', from: 'high', to: '96%', pct: 96 },
    color: 'var(--orange)',
  },
  {
    n: '03',
    title: 'Ambient Decomposition',
    body: 'CO₂ undergoes a novel room-temperature reaction. Carbon atoms are liberated and reform into a stable graphitic structure — energy-efficient, modular, carbon-negative by design.',
    metric: { label: 'Temperature', from: '25°C', to: 'ambient', pct: 18 },
    color: '#3f7fbf',
  },
  {
    n: '04',
    title: 'Solid Carbon Collection',
    body: 'Collected as a solid graphitic form — chemically stable, lightweight, and ready for reuse in:',
    chips: ['Water Filtration', 'Composites', 'Electronics', 'Agriculture'],
    color: 'var(--green)',
  },
];

const INDUSTRIES = ['Electronics', 'Batteries', 'Composites', 'Filters', 'Construction', 'Water Filtration'];

const ADVANTAGES = [
  {
    n: 'A01',
    title: 'Energy Efficiency',
    body: 'Operating at ambient temperatures significantly reduces energy consumption compared to traditional methods that require high heat.',
    metric: '−76%',
    color: 'var(--green)',
  },
  {
    n: 'Featured',
    title: 'Environmental Impact',
    body: 'Not only captures CO₂ but also reduces overall carbon footprint by producing useful materials — a net-negative climate contribution.',
    metric: 'Net −',
    color: 'var(--orange)',
  },
  {
    n: 'A03',
    title: 'Valuable Byproducts',
    body: 'The graphitic carbon produced is utilized in high-growth industries: electronics, batteries, composites, and filters.',
    color: '#3f7fbf',
  },
  {
    n: 'A04',
    title: 'Scalability',
    body: 'Modular architecture allows easy scaling to meet varying demands — from single-facility pilots to industrial-grade deployments.',
    color: 'var(--green)',
  },
];

export default function TechnologyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Permanent · Scalable · Carbon-Negative"
        titleMain="True Innovation in"
        titleAccent="Carbon Removal"
        lead="The purpose of this technology is to combat climate change on a global scale by permanently removing CO₂ from the atmosphere, while generating valuable by-products that benefit multiple industries and promote sustainability across sectors."
        accent="orange"
      />

      {/* Hero stat strip */}
      <div className="max-w-[560px] mx-auto -mt-4 sm:-mt-6 mb-4 px-4 sm:px-6 relative z-[2]">
        <div className="grid grid-cols-3 gap-2 sm:gap-3 reveal">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="stat-card p-3 sm:p-4 text-center min-w-0">
              <div className="font-display text-[18px] sm:text-[22px]" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[9px] sm:text-[10px] text-muted tracking-[.08em] sm:tracking-[.12em] uppercase mt-1 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pathways */}
      <section id="pathways" className="relative py-14 sm:py-[110px] lg:py-[130px] px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-[2]">
          <div className="max-w-[720px] mb-12 sm:mb-14 reveal">
            <span className="eyebrow" style={{ color: 'var(--green)' }}>Three Pathways · One Mission</span>
            <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-ink mt-4 mb-6">
              Engineered for Every <span className="serif-italic" style={{ color: 'var(--orange)' }}>Source of Emission</span>
            </h2>
            <p className="lead">
              TraceXero deploys three complementary carbon removal pathways — each tuned to a distinct emission profile, all converging on the same endpoint: <strong className="font-medium" style={{ color: 'var(--green)' }}>graphitic carbon</strong>.
            </p>
          </div>
          <PathwayTabs />
        </div>
      </section>

      {/* Digital Twin */}
      <section className="relative py-14 sm:py-[100px] lg:py-[120px] px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-[2]">
          <div className="max-w-[680px] mb-8 sm:mb-10 reveal">
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>Live 3D Model</span>
            <h2 className="display text-[clamp(1.8rem,3.6vw,2.8rem)] text-ink mt-4 mb-6">
              Explore Our <span className="serif-italic" style={{ color: 'var(--orange)' }}>Tech</span>
            </h2>
            <p className="lead">
              A live, interactive model of the TX-1000 capture unit. Drag or touch to orbit, or switch between the built exterior and an X-ray schematic of the process running inside.
            </p>
          </div>

          <div
            className="reveal-s overflow-hidden mx-auto w-full h-[min(70vh,480px)] min-h-[380px] sm:min-h-[420px] max-w-[900px]"
            style={{
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--line-soft)',
              boxShadow: '0 30px 60px -30px rgba(28,27,22,.35)',
            }}
          >
            <DigitalTwinViewer />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-5 text-center px-2">
            <span className="text-[11px] tracking-[.12em] uppercase text-muted">Drag or touch to orbit</span>
            <span className="w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--line)' }} />
            <span className="text-[11px] tracking-[.12em] uppercase text-muted">Toggle exterior / cutaway</span>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="canopy-wash relative py-14 sm:py-[110px] lg:py-[130px] px-4 sm:px-6 lg:px-10 overflow-hidden" style={{ background: 'var(--paper-2)' }}>
        <div className="rule absolute top-0 inset-x-0" />
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-[2]">
          <div className="reveal-l">
            <span className="eyebrow" style={{ color: 'var(--green)' }}>The Difference</span>
            <h2 className="display text-[clamp(1.8rem,3.6vw,2.6rem)] text-ink mt-4 mb-6 leading-[1.15]">
              Not another carbon capture method.<br />
              <span className="serif-italic" style={{ color: 'var(--green)' }}>A fundamentally new one.</span>
            </h2>
            <p className="text-[14px] leading-[1.9] text-ink-soft font-light mb-5">
              Unlike conventional carbon capture methods that rely on <strong className="font-medium" style={{ color: 'var(--orange)' }}>heat, pressure, or geological storage</strong>, TraceXero's technology operates under <strong className="font-medium" style={{ color: 'var(--green)' }}>ambient conditions</strong> to decompose CO₂ into solid graphitic carbon.
            </p>
            <p className="text-[14px] leading-[1.9] text-ink-soft font-light">
              Our approach eliminates the need for CO₂ storage — no pipelines, no cavern wells, no leakage risk. Just a clean transformation from pollutant to permanent, valuable material.
            </p>
          </div>

          <div className="reveal-r space-y-3">
            {COMPARISON.map((c) => (
              <div key={c.label} className="paper-card grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-1.5 sm:gap-4 sm:items-center py-3.5 px-4 sm:px-5">
                <div className="text-[13px] text-ink font-medium">{c.label}</div>
                <div className="flex items-center gap-3 sm:contents">
                  <div className="text-[11px] text-muted line-through">{c.legacy}</div>
                  <div className="text-[12px] font-medium" style={{ color: 'var(--green)' }}>{c.tx}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative py-14 sm:py-[110px] lg:py-[130px] px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-[2]">
          <div className="max-w-[680px] mb-12 sm:mb-14 reveal">
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>Process Breakdown</span>
            <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-ink mt-4 mb-6">
              How It <span className="serif-italic" style={{ color: 'var(--orange)' }}>Works</span>
            </h2>
            <p className="lead">
              Four precisely engineered stages transform atmospheric or industrial CO₂ into a valuable solid commodity — with no heat, no pressure, and no storage required.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className={`paper-card p-6 sm:p-7 relative overflow-hidden reveal-s d${i + 1}`}>
                <span className="font-display text-[2.6rem] leading-none text-ink/10 absolute top-4 right-5">{s.n}</span>
                <h3 className="font-display text-lg text-ink mb-3 relative">{s.title}</h3>
                <p className="text-[13px] leading-[1.8] text-ink-soft font-light relative mb-5">{s.body}</p>
                {s.metric && (
                  <div className="relative">
                    <div className="text-[10px] text-muted tracking-[.12em] uppercase mb-2">{s.metric.label}</div>
                    <div className="h-[4px] rounded-full" style={{ background: 'var(--line-soft)' }}>
                      <div className="h-full rounded-full" style={{ width: `${s.metric.pct}%`, background: s.color }} />
                    </div>
                    <div className="flex justify-between mt-1.5 text-[10px] text-muted">
                      <span>{s.metric.from}</span><span>{s.metric.to}</span>
                    </div>
                  </div>
                )}
                {s.chips && (
                  <div className="flex flex-wrap gap-1.5 relative">
                    {s.chips.map((c) => (
                      <span key={c} className="text-[10px] tracking-[.04em] text-ink-soft bg-[var(--paper-2)] border border-[var(--line)] rounded-full px-3 py-1.5">{c}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Output: graphitic carbon */}
      <section className="relative overflow-hidden">
        <div className="media rounded-none min-h-[440px] sm:min-h-[540px] flex items-end" style={{ borderLeft: 0, borderRight: 0 }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-[.55]"
            style={{ background: 'radial-gradient(60% 60% at 80% 26%,rgba(228,99,58,.18),transparent 60%),radial-gradient(52% 52% at 12% 82%,rgba(95,143,62,.16),transparent 60%)' }}
          />
          <GrapheneLattice />
          <span className="media-corner" style={{ top: 28, right: 28 }}>Graphitic Carbon · Lattice</span>

          <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-10 py-16 sm:py-[90px] relative z-[2]">
            <div className="max-w-[640px] reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Valuable Byproducts</span>
              <h2 className="display text-[clamp(2rem,4vw,3.4rem)] text-ink mt-4 mb-7">
                A Raw Material for <span className="serif-italic" style={{ color: 'var(--orange)' }}>Real Industries</span>
              </h2>
              <p className="lead mb-8">
                Graphitic carbon produced from captured emissions serves as a green alternative to mined carbon across trillion-dollar supply chains — without requiring industries to change how they operate.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {INDUSTRIES.map((ind) => (
                  <span key={ind} className="text-[12px] tracking-[.04em] text-ink-soft bg-[var(--card)] border border-[var(--line)] rounded-full px-4 py-2">{ind}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="canopy-wash relative py-14 sm:py-[110px] lg:py-[130px] px-4 sm:px-6 lg:px-10 overflow-hidden" style={{ background: 'var(--paper-2)' }}>
        <div className="rule absolute top-0 inset-x-0" />
        <div className="max-w-[1280px] mx-auto relative z-[2]">
          <div className="max-w-[680px] mb-12 sm:mb-14 reveal">
            <span className="eyebrow" style={{ color: 'var(--green)' }}>Core Advantages</span>
            <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-ink mt-4 mb-6">
              Top Advantages of <span className="serif-italic" style={{ color: 'var(--orange)' }}>TX Technology</span>
            </h2>
            <p className="lead">
              Four design principles make TraceXero's technology uniquely positioned to lead the next generation of carbon removal systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {ADVANTAGES.map((a, i) => (
              <div key={a.title} className={`paper-card p-6 sm:p-8 reveal-s d${i + 1}`}>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: `${a.color}1a`, border: `1px solid ${a.color}40`, color: a.color }}>
                    <span className="font-display text-lg">{a.title.charAt(0)}</span>
                  </div>
                  <span className="text-[10px] tracking-[.12em] uppercase text-muted">{a.n}</span>
                </div>
                <h3 className="font-display text-xl text-ink mb-3">{a.title}</h3>
                <p className="text-[14px] leading-[1.85] text-ink-soft font-light">{a.body}</p>
                {a.metric && (
                  <div className="mt-5 font-display text-2xl" style={{ color: a.color }}>{a.metric}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-16 sm:py-[110px] px-4 sm:px-6 lg:px-10 overflow-hidden text-[#f2fbec]"
        style={{ background: 'linear-gradient(150deg,#5DAF3B 0%,#489C2E 46%,#357F22 100%)' }}
      >
        <div className="max-w-[900px] mx-auto text-center relative z-[2] reveal">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.55)' }}>Ready to Deploy</span>
          <h2 className="display text-[clamp(1.8rem,3.6vw,2.8rem)] text-white mt-4 mb-6">
            Pilot TX Technology at Your Facility
          </h2>
          <p className="text-[15px] leading-[1.9] text-white/70 font-light max-w-[560px] mx-auto mb-9">
            Partner with TraceXero to install carbon capture systems at the source of emissions — and turn every facility into a climate asset.
          </p>
          <Link href="/contact" className="btn-fill" style={{ background: 'var(--orange)', borderColor: 'var(--orange)', color: '#fff' }}>
            Contact Us <span className="arr">→</span>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
