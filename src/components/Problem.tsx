'use client';

import { motion } from 'framer-motion';
import { DollarSign, AlertTriangle, Clock } from 'lucide-react';

export default function Problem() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const problems = [
    {
      icon: DollarSign,
      title: 'Cost',
      description: 'Paying humans $45k/year to copy-paste data.'
    },
    {
      icon: AlertTriangle,
      title: 'Errors',
      description: 'A single mistyped freight line-item costs thousands in overpayments.'
    },
    {
      icon: Clock,
      title: 'Speed',
      description: 'Invoices sit in inboxes for days, causing late fees and angry vendors.'
    }
  ];

  return (
    <section className="bg-transparent px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-light text-white tracking-tight mb-16 lg:mb-20 geist-font">
          Manual Data Entry is Killing Your Margins
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  borderColor: 'rgba(239, 68, 68, 0.3)',
                  boxShadow: '0 0 30px rgba(239, 68, 68, 0.15)',
                  transition: { duration: 0.3 }
                }}
                className="glass-card rounded-2xl p-6 text-left backdrop-blur-md bg-white/[0.02] border border-white/10 transition-all duration-300"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-red-500/70" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-medium text-white mb-3 geist-font">
                  {problem.title}
                </h3>
                
                <p className="text-base text-gray-400 leading-relaxed inter-font">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
