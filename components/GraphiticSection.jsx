import GrapheneLattice from "./GrapheneLattice";

/** "Why Graphitic Carbon" — full-bleed editorial section. */
export default function GraphiticSection() {
  return (
    <section id="graphitic" className="relative overflow-hidden">
      <div
        className="media rounded-none min-h-[480px] sm:min-h-[600px] lg:min-h-[720px] flex items-end"
        style={{ borderLeft: 0, borderRight: 0 }}
      >
        {/* ambient gradients */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[.55]"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 26%,rgba(228,99,58,.18),transparent 60%),radial-gradient(52% 52% at 12% 82%,rgba(95,143,62,.16),transparent 60%)",
          }}
        />
        {/* animated graphene / graphitic carbon lattice */}
        <GrapheneLattice />
        <span className="media-corner" style={{ top: 28, right: 28 }}>
          Graphitic Carbon · Lattice
        </span>

        <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-10 py-16 sm:py-[100px] relative z-[2]">
          <div className="max-w-[680px] reveal">
            <span className="eyebrow" style={{ color: "var(--orange)" }}>
              The Product
            </span>
            <h2 className="display text-[clamp(2.2rem,4.6vw,3.8rem)] text-ink mt-4 mb-8">
              Why{" "}
              <span className="serif-italic" style={{ color: "var(--orange)" }}>
                Graphitic Carbon
              </span>
            </h2>
            <p className="lead mb-5">
              Graphitic carbon is a high-value, high-volume industrial raw
              material used across multiple trillion-dollar industries.
            </p>
            <p className="lead mb-10">
              Producing it from emissions creates a{" "}
              <strong
                className="font-medium"
                style={{ color: "var(--orange)" }}
              >
                green alternative to mined carbon
              </strong>
              , enabling industries to switch to a climate-neutral raw material
              without disrupting existing supply chains.
            </p>
            {/* <a href="#" className="btn-fill">
              Product <span className="arr">→</span>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
