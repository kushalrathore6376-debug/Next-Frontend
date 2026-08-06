'use client';

import { useRef } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import useScrollEffects from '@/hooks/useScrollEffects';

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import KeywordMarquee from '@/components/KeywordMarquee';
import ProcessSection from '@/components/ProcessSection';
import DecarboniseSection from '@/components/DecarboniseSection';
import GraphiticSection from '@/components/GraphiticSection';
import AboutSection from '@/components/AboutSection';
import SupportedBy from '@/components/SupportedBy';
import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer';

export default function HomePage() {
  const navRef = useRef(null);

  useScrollReveal([]);
  useScrollEffects(navRef);

  return (
    <>
      <div className="bg-aurora" aria-hidden="true" />

      <Nav ref={navRef} />
      <Hero />
      <KeywordMarquee />
      <ProcessSection />
      <DecarboniseSection />
      <GraphiticSection />
      <AboutSection />
      <SupportedBy />
      {/* <Blogs /> */}
      <Footer />
    </>
  );
}
