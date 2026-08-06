import Link from 'next/link';
import CaptureDiagram from './CaptureDiagram';

/** "From Pollutant to Commodity" section. */
export default function ProcessSection() {
  return (
    <section id="pollutant" className="relative py-16 sm:py-[120px] lg:py-[150px] px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div
        className="absolute top-[10%] -left-24 w-[440px] h-[440px] rounded-full pointer-events-none parallax"
        data-speed="0.05"
        style={{ background: 'radial-gradient(circle,rgba(228,99,58,.1),transparent 62%)', filter: 'blur(18px)' }}
      />
      <div className="streak" style={{ left: '-15%', opacity: 0.25 }} />
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,440px)_1fr] gap-8 sm:gap-12 lg:gap-20 items-center relative z-[2]">
        {/* media */}
        <div className="reveal-l">
          <CaptureDiagram />
        </div>

        {/* text */}
        <div className="reveal-r">
          <span className="eyebrow" style={{ color: 'var(--orange)' }}>Our Process</span>
          <h2 className="display text-[clamp(2.2rem,4.4vw,3.6rem)] text-ink mt-4 mb-8">
            From Pollutant to <span className="serif-italic" style={{ color: 'var(--orange)' }}>Commodity</span>
          </h2>
          <div className="space-y-6 max-w-[620px]">
            <p className="lead">TraceXero designs and installs carbon capture systems directly at the source of industrial emissions. Capturing carbon at this stage keeps the process efficient and suitable for everyday industrial operations.</p>
            <p className="lead">Instead of letting emissions go to waste, our technology converts them into graphitic carbon, a high value raw material across different industries. This helps businesses reduce emissions while making practical use of captured carbon.</p>
            <p className="lead">Built on patented research, TraceXero supports a circular approach where <strong className="font-medium" style={{ color: 'var(--orange)' }}>carbon is reused as a resource rather than released as pollution.</strong></p>
          </div>
          <Link href="/technology" className="link-underline mt-10">Know More <span className="arr">→</span></Link>
        </div>
      </div>
    </section>
  );
}
