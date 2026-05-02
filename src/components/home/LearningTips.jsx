'use client';

import { LuCircleCheck, LuBookOpen, LuUsers } from 'react-icons/lu';
import { motion } from 'motion/react';

export default function LearningTips() {
  const tips = [
    {
      title: 'Pomodoro Technique',
      desc: 'Study for 25 minutes, then take a 5-minute break to maintain focus.',
    },
    {
      title: 'Active Recall',
      desc: 'Test yourself frequently rather than just passively reading material.',
    },
    {
      title: 'Consistent Practice',
      desc: 'Dedicate at least 30 minutes every day instead of cramming on weekends.',
    },
  ];

  return (
    <section className="bg-base-200 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-base-content">
              Effective Learning Tips
            </h2>

            <div className="space-y-4">
              {tips.map((tip, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 items-start bg-base-100 p-5 rounded-2xl shadow-sm border border-transparent hover:border-primary/30 hover:shadow-md transition-all cursor-default group"
                >
                  <LuCircleCheck className="text-success mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                  <p className="text-base-content/80 group-hover:text-base-content">
                    <strong className="text-primary">{tip.title}:</strong> {tip.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="stat bg-base-100 rounded-2xl shadow-xl border border-base-300 p-8"
            >
              <div className="stat-figure text-primary">
                <LuBookOpen size={48} className="opacity-80 group-hover:opacity-100" />
              </div>
              <div className="stat-title font-bold text-base-content/70">Courses</div>
              <div className="stat-value text-primary">100+</div>
              <div className="stat-desc">Available for you</div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="stat bg-base-100 rounded-2xl shadow-xl border border-base-300 p-8"
            >
              <div className="stat-figure text-secondary">
                <LuUsers size={48} className="opacity-80" />
              </div>
              <div className="stat-title font-bold text-base-content/70">Students</div>
              <div className="stat-value text-secondary">50k+</div>
              <div className="stat-desc">Learning actively</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}