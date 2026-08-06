import { useEffect } from 'react';

/**
 * Reproduces the original scroll handler:
 *  - toggles nav border/shadow/background past 20px scroll
 *  - rAF-throttled parallax on any `.parallax[data-speed]` element
 * Pass a ref to the <nav> element.
 */
export default function useScrollEffects(navRef) {
  useEffect(() => {
    const nav = navRef.current;
    const pxEls = [...document.querySelectorAll('.parallax')];
    const mq = window.matchMedia('(prefers-reduced-motion:reduce)');
    let ticking = false;

    const render = () => {
      const y = window.scrollY;
      if (nav) {
        if (y > 20) {
          nav.style.borderBottomColor = 'var(--line-soft)';
          nav.style.boxShadow = '0 8px 30px -18px rgba(28,27,22,.4)';
          nav.style.background = 'rgba(244,242,234,.9)';
        } else {
          nav.style.borderBottomColor = 'transparent';
          nav.style.boxShadow = 'none';
          nav.style.background = 'rgba(244,242,234,.72)';
        }
      }
      if (!mq.matches) {
        const vh = window.innerHeight;
        pxEls.forEach((el) => {
          const r = el.getBoundingClientRect();
          const off = r.top + r.height / 2 - vh / 2;
          const sp = parseFloat(el.dataset.speed || '0');
          el.style.transform = 'translate3d(0,' + (off * sp).toFixed(1) + 'px,0)';
        });
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(render);
      }
    };

    render();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [navRef]);
}
