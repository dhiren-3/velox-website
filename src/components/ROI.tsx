'use client';

import { motion } from 'framer-motion';

export default function ROI() {
  const metrics = [
    { value: '99.9%', label: 'Process Accuracy' },
    { value: '48 Hrs', label: 'To Full Deployment' },
    { value: '$40k+', label: 'Saved per Employee' },
    { value: 'Zero', label: 'IT Integration Lift' }
  ];

  return (
    <section className="bg-transparent px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold text-white tracking-widest uppercase mb-6 geist-font"
          >
            THE MATH MAKES SENSE.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-gray-400 inter-font"
          >
            Stop leaking margin on manual processes.
          </motion.p>
        </div>

        {/* Retro Scoreboard outer container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto bg-[#050505] border-2 border-emerald-500 shadow-[6px_6px_0px_#047857] p-2"
        >
          {/* Scoreboard header bar */}
          <div className="bg-emerald-500 px-4 py-2 mb-2 flex items-center justify-between">
            <span className="text-black text-xs font-bold tracking-widest uppercase geist-font">— SCOREBOARD —</span>
            <span className="text-black text-xs font-bold tracking-widest geist-font">HIGH SCORE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-emerald-900/40">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="bg-[#050505] p-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1 + 0.2,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="text-5xl md:text-6xl font-bold text-emerald-400 mb-3 geist-font tracking-tight drop-shadow-[2px_2px_0px_#064e3b]"
                >
                  {metric.value}
                </motion.div>
                <p className="text-sm text-gray-400 inter-font uppercase tracking-widest">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
