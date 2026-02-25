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
        <h2 className="text-center text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold text-white tracking-widest uppercase mb-16 lg:mb-20 geist-font">
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
                  x: 2,
                  y: 2,
                  boxShadow: '4px 4px 0px #047857',
                  transition: { duration: 0.1 }
                }}
                className="bg-[#050505] border-2 border-emerald-500 shadow-[6px_6px_0px_#047857] p-6 text-left"
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-emerald-500 shadow-[3px_3px_0px_#064e3b]">
                  <Icon className="w-7 h-7 text-black" strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-widest geist-font">
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
