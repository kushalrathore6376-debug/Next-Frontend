import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import ImpactEmblem from "@/components/ImpactEmblem";
import SupportedBy from "@/components/SupportedBy";

const TEAM_IMAGE_EXTS = [".jpeg", ".jpg", ".png", ".webp"];

function teamPhotoSrc(photo) {
  if (/\.(jpe?g|png|webp|avif|gif)$/i.test(photo)) {
    return `/team/${photo}`;
  }

  const dir = path.join(process.cwd(), "public", "team");
  const ext = TEAM_IMAGE_EXTS.find((item) =>
    fs.existsSync(path.join(dir, `${photo}${item}`)),
  );

  return `/team/${photo}${ext ?? ".jpeg"}`;
}

const STATS = [
  {
    value: "30%",
    label: "Of global emissions come from industry",
    color: "var(--green)",
  },
  {
    value: "99.2%",
    label: "Capture efficiency of the TX-1000",
    color: "var(--orange)",
  },
  {
    value: "1M+",
    label: "Tons of CO₂ targeted for capture",
    color: "var(--green)",
  },
  { value: "2030", label: "Net zero goal", color: "var(--orange)" },
];

const VALUES = [
  {
    title: "Research-driven",
    body: "Every system is built on patented, peer-reviewed research rather than off-the-shelf capture methods.",
  },
  {
    title: "Circular by design",
    body: "We treat carbon as a resource to be reused, not a pollutant to be stored and forgotten.",
  },
  {
    title: "Built for industry",
    body: "Our systems integrate into existing operations without disrupting how facilities already run.",
  },
];

const LEADERSHIP = [
  {
    name: "Deependra Singh Shekhawat",
    role: "CEO",
    bio: "Extensive experience in corporate finance and global trade operations.",
    photo: "deependra-singh-shekhawat",
  },
  {
    name: "Reetam Chaudhury",
    role: "CTO",
    bio: "Materials science and sustainability expert leading technical innovation.",
    photo: "reetam-chaudhury",
  },
  {
    name: "Dr. Pramod Sharma",
    role: "Chief Innovation Officer",
    bio: "Researcher and Chemical Expert.",
    photo: "pramod-sharma",
  },
  {
    name: "Dr. Mainak Palit",
    role: "Chief Product Officer",
    bio: "10+ Years in Experimental Condensed Matter Physics — Electron Microscopy, Cryogenics, and Low-Dimensional Materials.",
    photo: "mainak-palit",
  },
];

const MANAGEMENT = [
  {
    name: "Kushal Singh Rathore",
    role: "CCU Development",
    photo: "kushal-singh-rathore",
  },
  {name:"Dr. Supriya Tamta",
    role:"Head of Products",
    photo: "supriya",
  },
  {
    name: "Kirti Raj Singh Shekhawat",
    role: "Company Finances & Growth",
    photo: "kirti-raj-singh-shekhawat",
  },
  {
    name: "Hardik Abusariya",
    role: "CCU Automation & Data Management",
    photo: "hardik-abusariya",
  }

];

const ADVISORY = [
  {
    name: "Dr. LP Singh",
    role: "Director General, National Council for Cement & Building Materials — Govt. of India, IITR",
    photo: "lp-singh",
  },
  {
    name: "Mr. Samrat Sengupta",
    role: "Director Technical, ProClime",
    photo: "samrat-sengupta",
  },
  {
    name: "Lt. Col. Monish Ahuja (Retd.)",
    role: "Managing Director, PRESPL",
    photo: "monish-ahuja",
  },
];

function TeamCard({ person, delayClass }) {
  return (
    <div
      className={`team-card paper-card p-5 sm:p-7 text-center flex flex-col items-center h-full reveal-s ${delayClass}`}
    >
      <div className="team-card-photo mb-4 sm:mb-5 shrink-0">
        <img
          src={teamPhotoSrc(person.photo)}
          alt={person.name}
          className="team-card-img"
          draggable={false}
        />
      </div>
      <h3 className="font-display text-[15px] sm:text-[16px] text-ink leading-snug">
        {person.name}
      </h3>
      <p className="team-card-role mt-1.5 leading-snug">{person.role}</p>
      {person.bio && (
        <p className="text-[12px] leading-[1.65] text-ink-soft font-light mt-3 max-w-[240px]">
          {person.bio}
        </p>
      )}
    </div>
  );
}

function TeamGroup({ title, children }) {
  return (
    <div className="mb-14 sm:mb-16 last:mb-0">
      <div className="team-group-label mb-6 sm:mb-7">
        <span className="team-group-dot" aria-hidden="true" />
        <h3 className="font-display text-lg sm:text-xl text-ink">{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About TraceXero"
        titleMain="Turning Pollution Into"
        titleAccent="Progress"
        lead="TraceXero is an emerging climate technology company working with Indian industries to pilot carbon capture solutions at the source of emissions."
        accent="green"
      />

      {/* Story */}
      <section className="relative py-14 sm:py-[110px] lg:py-[130px] px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div className="streak" style={{ left: "30%", opacity: 0.25 }} />
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-[2]">
          <div className="reveal-l">
            <span className="eyebrow" style={{ color: "var(--green)" }}>
              Our Story
            </span>
            <h2 className="display text-[clamp(1.8rem,3.6vw,2.6rem)] text-ink mt-4 mb-6">
              From{" "}
              <span className="serif-italic" style={{ color: "var(--orange)" }}>
                pollutant
              </span>{" "}
              to{" "}
              <span className="serif-italic" style={{ color: "var(--green)" }}>
                commodity
              </span>
            </h2>
            <p className="lead">
              We started with a simple observation: industrial emissions are
              treated as waste when the carbon inside them is a valuable raw
              material. TraceXero was built to close that gap — capturing CO₂ at
              the source and converting it into graphitic carbon before it ever
              reaches the atmosphere.
            </p>
          </div>
          <div className="reveal-r">
            <span className="eyebrow" style={{ color: "var(--orange)" }}>
              Our Mission
            </span>
            <h2 className="display text-[clamp(1.8rem,3.6vw,2.6rem)] text-ink mt-4 mb-6">
              A{" "}
              <span className="serif-italic" style={{ color: "var(--green)" }}>
                climate-positive
              </span>{" "}
              industrial future
            </h2>
            <p className="lead">
              Our research-driven approach focuses on scalable systems that
              integrate into existing operations and support the transition
              towards a climate-positive world — without asking industries to
              sacrifice efficiency to get there.
            </p>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section
        className="canopy-wash relative py-14 sm:py-[110px] lg:py-[130px] px-4 sm:px-6 lg:px-10 overflow-hidden"
        style={{ background: "var(--paper-2)" }}
      >
        <div className="rule absolute top-0 inset-x-0" />
        <div className="max-w-[1280px] mx-auto relative z-[2]">
          <div className="max-w-[640px] mb-12 reveal">
            <span className="eyebrow" style={{ color: "var(--green)" }}>
              Impact So Far
            </span>
            <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-ink mt-4">
              The Numbers Behind Our{" "}
              <span className="serif-italic" style={{ color: "var(--green)" }}>
                Mission
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`paper-card px-5 sm:px-7 py-8 sm:py-10 text-center reveal-s d${i + 1}`}
              >
                <div
                  className="font-display display text-[clamp(1.8rem,3.4vw,2.6rem)]"
                  style={{ color: s.color }}
                >
                  {s.value}
                </div>
                <div className="text-[11px] text-muted tracking-[.14em] uppercase mt-3">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values + emblem */}
      <section
        className="relative py-16 sm:py-[120px] lg:py-[140px] px-4 sm:px-6 lg:px-10 overflow-hidden text-[#f2fbec]"
        style={{
          background:
            "linear-gradient(150deg,#5DAF3B 0%,#489C2E 46%,#357F22 100%)",
        }}
      >
        <div
          className="absolute inset-0 z-[1] opacity-[.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px,rgba(255,255,255,.6) 1px,transparent 0)",
            backgroundSize: "34px 34px",
          }}
        />
        <div className="max-w-[1200px] mx-auto relative z-[2] grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-8 sm:gap-12 lg:gap-14 items-center">
          <div className="reveal-l">
            <span
              className="eyebrow"
              style={{ color: "rgba(255,255,255,.55)" }}
            >
              What We Stand For
            </span>
            <h2 className="display text-[clamp(1.7rem,2.8vw,2.3rem)] text-white/95 mt-5 mb-8">
              Our values
            </h2>
            <div className="space-y-7">
              {VALUES.map((v) => (
                <div key={v.title}>
                  <h3 className="font-display text-lg text-white mb-1.5">
                    {v.title}
                  </h3>
                  <p className="text-[14px] leading-[1.8] text-white/70 font-light">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-r">
            <ImpactEmblem />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="canopy-wash relative py-14 sm:py-[110px] lg:py-[130px] px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-[2]">
          <div className="max-w-[680px] mb-12 sm:mb-14 reveal">
            <span className="eyebrow" style={{ color: "var(--orange)" }}>
              The People Behind TraceXero
            </span>
            <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-ink mt-4 mb-6">
              Meet the{" "}
              <span className="serif-italic" style={{ color: "var(--orange)" }}>
                Team
              </span>
            </h2>
            <p className="lead">
              Combined experience of 50+ years across finance, materials
              science, industrial engineering, and climate policy.
            </p>
          </div>

          <TeamGroup title="Leadership Team">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {LEADERSHIP.map((p, i) => (
                <TeamCard key={p.name} person={p} delayClass={`d${i + 1}`} />
              ))}
            </div>
          </TeamGroup>

          <TeamGroup title="Management & Operations">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {MANAGEMENT.map((p, i) => (
                <TeamCard key={p.name} person={p} delayClass={`d${i + 1}`} />
              ))}
            </div>
          </TeamGroup>

          <TeamGroup title="Advisory Team">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-[920px]">
              {ADVISORY.map((p, i) => (
                <TeamCard key={p.name} person={p} delayClass={`d${i + 1}`} />
              ))}
            </div>
          </TeamGroup>
        </div>
      </section>

      <SupportedBy />

      {/* CTA */}
      <section className="canopy-wash relative py-16 sm:py-[110px] px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 40%, rgba(95,143,62,.1), transparent 70%)",
          }}
        />
        <div className="max-w-[900px] mx-auto text-center relative z-[2] reveal">
          <span className="eyebrow" style={{ color: "var(--orange)" }}>
            Join Us
          </span>
          <h2 className="display text-[clamp(1.8rem,3.6vw,2.8rem)] text-ink mt-4 mb-8">
            Want to work with{" "}
            <span className="serif-italic" style={{ color: "var(--orange)" }}>
              TraceXero
            </span>
            ?
          </h2>
          <Link href="/contact" className="btn-fill">
            Contact Us <span className="arr">→</span>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
