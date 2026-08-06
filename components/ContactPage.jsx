import PageShell from '@/components/PageShell';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

const INFO = [
  {
    label: 'Email',
    value: 'info@tracexero.com',
    href: 'mailto:info@tracexero.com',
    icon: (<><path d="M2 6h20v12H2z" /><path d="M22 6l-10 7L2 6" /></>),
  },
  {
    label: 'Offices',
    value: 'Jaipur, Delhi, India',
    href: null,
    icon: (<><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.6" /></>),
  },
  {
    label: 'Response Time',
    value: 'Usually within 1–2 business days',
    href: null,
    icon: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>),
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Get In Touch"
        titleMain="Let's Build a"
        titleAccent="Climate-Positive Future"
        lead="Whether you're exploring carbon capture for your facility or want to learn more about TraceXero, we'd like to hear from you."
        accent="orange"
      />

      <section className="relative py-6 sm:py-10 lg:py-[60px] pb-16 sm:pb-[110px] lg:pb-[130px] px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div className="streak" style={{ left: '-15%', opacity: 0.2 }} />
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 relative z-[2]">
          {/* info column */}
          <div className="reveal-l space-y-5">
            {INFO.map((item) => (
              <div key={item.label} className="paper-card p-5 sm:p-6 flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(228,99,58,.1)', border: '1px solid rgba(228,99,58,.22)', color: 'var(--orange)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                </div>
                <div>
                  <div className="text-[11px] text-muted tracking-[.14em] uppercase mb-1.5">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-[14px] text-ink font-light hover:text-[var(--orange)] transition-colors duration-300">{item.value}</a>
                  ) : (
                    <div className="text-[14px] text-ink font-light">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* form column */}
          <div className="reveal-r">
            <ContactForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
