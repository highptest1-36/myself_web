"use client";

import Hero from '@/components/Hero';
import About from '@/components/About';
import SkillsChart from '@/components/SkillsChart';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ParticlesBackground />
      <Hero />
      <About />
      <SkillsChart />
      <Projects />
      <Publications />
      <Awards />
      <Contact />
    </main>
  );
}
