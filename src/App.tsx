import React from 'react';
import { Layout } from './components/Layout';
import { HeroSection, FinalCTA } from './sections/Hero';
import { CurriculumSection } from './sections/Curriculum';
import { PricingSection } from './sections/Pricing';
import { FounderSection } from './sections/Founder';

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <CurriculumSection />
      <PricingSection />
      <FounderSection />
      <FinalCTA />
    </Layout>
  );
}
