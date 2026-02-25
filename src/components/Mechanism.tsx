'use client';

import { motion } from 'framer-motion';
import { Mail, BrainCircuit, Database } from 'lucide-react';

export default function Mechanism() {
  const steps = [
    {
      icon: Mail,
      title: 'Ingest',
      description: 'Auto-fetches PDF and image invoices directly from your AP inbox the second they arrive.'
    },
    {
      icon: BrainCircuit,
      title: 'Extract & Match',
      description: 'Proprietary AI extracts line-items, taxes, and vendor details with 99.9% accuracy and matches them against your POs.'
    },
    {
      icon: Database,
      title: 'Sync to ERP',
      description: 'Clean, formatted data is pushed instantly into CargoWise, QuickBooks, or your custom ERP.'
    }
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
            How the Invisible Agent Works.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-gray-400 inter-font"
          >
            Deployed in 48 hours. Zero IT lift required.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-[72px] left-[16.67%] right-[16.67%] -z-10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full border-t-4 border-dashed border-emerald-600 origin-left"
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{
                    x: 2,
                    y: 2,
                    boxShadow: '4px 4px 0px #047857',
                    transition: { duration: 0.1 }
                  }}
                  className="relative bg-[#050505] border-2 border-emerald-500 shadow-[6px_6px_0px_#047857] p-8"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Power-up icon square */}
                    <div className="mb-6 w-16 h-16 bg-emerald-500 shadow-[4px_4px_0px_#000000] flex items-center justify-center">
                      <Icon className="w-8 h-8 text-black" strokeWidth={2} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest geist-font">
                      {step.title}
                    </h3>

                    <p className="text-base text-gray-400 leading-relaxed inter-font">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-emerald-500 shadow-[2px_2px_0px_#064e3b] flex items-center justify-center text-black text-sm font-bold">
                    {index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
