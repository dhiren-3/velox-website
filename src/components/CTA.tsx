'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="booking" className="relative bg-[#050505] px-6 py-32 lg:py-40 overflow-hidden">
      {/* Radial Emerald Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px]" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] font-bold text-white tracking-tight mb-8 geist-font">
          Stop Typing. Start Scaling.
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-16 inter-font leading-relaxed">
          Book a 15-minute discovery call to see if your freight operation qualifies for the $4,000 Early Access Pilot.
        </p>

        <div className="w-full max-w-3xl mx-auto h-[850px] md:h-[750px] overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md bg-white/[0.02]">
          <iframe src="https://calendly.com/dhiren3june/new-meeting" width="100%" height="100%" className="w-full h-full bg-transparent" frameBorder="0"></iframe>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="relative z-10 mt-32">
        <div className="w-full h-px bg-white/10 mb-8" />
        <p className="text-center text-sm text-gray-500 inter-font">
          © 2026 Velox Agency. Built for US Freight Forwarders.
        </p>
      </div>
    </section>
  );
}
