import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Mechanism from '@/components/Mechanism';
import ROI from '@/components/ROI';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen overflow-x-hidden">
      <Hero />
      <Problem />
      <div className="w-full h-px bg-white/10 my-24" />
      <Mechanism />
      <div className="w-full h-px bg-white/10 my-24" />
      <ROI />
      <CTA />
    </main>
  );
}
