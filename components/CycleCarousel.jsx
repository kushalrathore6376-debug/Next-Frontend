'use client';

import { useEffect, useRef, useState } from 'react';

const CARDS = [
  { n: '01', accent: 'green', title: 'Capture', body: 'Carbon is captured directly at the source of industrial emissions, keeping operations efficient and everyday-ready.',
    icon: (<><circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" /></>) },
  { n: '02', accent: 'orange', title: 'Convert', body: 'Captured emissions are transformed into graphitic carbon — a high-value raw material rather than waste.',
    icon: (<path d="M3 21h18M5 21V7l5 4V7l5 4V3h4v18" />) },
  { n: '03', accent: 'green', title: 'Deploy', body: 'Graphitic carbon re-enters industrial value chains, closing the loop toward a transparent circular economy.',
    icon: (<><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>) },
  { n: '04', accent: 'orange', title: 'Earn', body: 'Industries reduce emissions, generate carbon credits, and unlock new value from what was once pollution.',
    icon: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v10M9.5 9.2c0-1 1.1-1.7 2.5-1.7s2.5.7 2.5 1.7-1 1.5-2.5 1.8-2.5.8-2.5 1.9 1.1 1.6 2.5 1.6 2.5-.6 2.5-1.6" /></>) },
];

const ACCENT = {
  green: { color: 'var(--green)', bg: 'rgba(95,143,62,.1)', border: '1px solid rgba(95,143,62,.22)' },
  orange: { color: 'var(--orange)', bg: 'rgba(228,99,58,.1)', border: '1px solid rgba(228,99,58,.22)' },
};

export default function CycleCarousel() {
  const carRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = () => {
    const car = carRef.current;
    if (!car) return;
    setAtStart(car.scrollLeft <= 4);
    setAtEnd(car.scrollLeft + car.clientWidth >= car.scrollWidth - 4);
  };

  useEffect(() => {
    sync();
    const car = carRef.current;
    if (!car) return;
    car.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      car.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, []);

  const step = () => {
    const car = carRef.current;
    return Math.min((car?.clientWidth || 0) * 0.8, 362);
  };
  const scroll = (dir) => carRef.current?.scrollBy({ left: dir * step(), behavior: 'smooth' });

  return (
    <div className="reveal">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-7">
        <p className="eyebrow min-w-0">The Cycle — Capture · Convert · Deploy</p>
        <div className="flex gap-3 shrink-0">
          <button className="round-btn" onClick={() => scroll(-1)} disabled={atStart} aria-label="Previous">←</button>
          <button className="round-btn" onClick={() => scroll(1)} disabled={atEnd} aria-label="Next">→</button>
        </div>
      </div>

      <div className="carousel -mx-1 px-1" ref={carRef}>
        {CARDS.map((c) => (
          <article key={c.n} className="paper-card p-6 sm:p-8 w-[min(300px,82vw)] sm:w-[340px]">
            <div className="flex items-center justify-between mb-8">
              <span className="font-display text-[3.4rem] leading-none text-ink/10">{c.n}</span>
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: ACCENT[c.accent].bg, border: ACCENT[c.accent].border, color: ACCENT[c.accent].color }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{c.icon}</svg>
              </div>
            </div>
            <h3 className="font-display text-2xl text-ink mb-3">{c.title}</h3>
            <p className="text-[14px] leading-[1.8] text-ink-soft font-light">{c.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
