'use client';

import { motion } from 'framer-motion';

export default function ROI() {
  const metrics = [
    { value: '99.9%', label: 'Extraction Accuracy' },
    { value: '48 Hrs', label: 'To Full Deployment' },
    { value: '$40k+', label: 'Saved per AP Clerk' },
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
            className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-light text-white tracking-tight mb-6 geist-font"
          >
            The Math Makes Sense.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-gray-400 inter-font"
          >
            Stop leaking margin on manual entry errors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
              className="glass-card rounded-2xl p-8 backdrop-blur-md bg-white/[0.02] border border-white/10 text-center hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
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
                className="text-5xl md:text-6xl font-bold text-emerald-400 mb-3 geist-font tracking-tight"
              >
                {metric.value}
              </motion.div>
              <p className="text-base text-gray-400 inter-font">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
