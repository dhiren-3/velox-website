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
            className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-light text-white tracking-tight mb-6 geist-font"
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
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 -z-10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 rounded-full blur-sm origin-left"
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
                  className="relative glass-card rounded-2xl p-8 backdrop-blur-md bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30">
                      <Icon className="w-10 h-10 text-purple-300" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-white mb-4 geist-font">
                      {step.title}
                    </h3>
                    
                    <p className="text-base text-gray-400 leading-relaxed inter-font">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">
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
