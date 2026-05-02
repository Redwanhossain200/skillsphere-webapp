'use client';

import { LuTrophy } from 'react-icons/lu';
import { motion } from 'motion/react';
import CourseCard from '@/components/CourseCard';

export default function TrendingCourses({ trendingCourses, isLoading }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="bg-linear-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
        <h2 className="text-xl md:text-2xl text-center md:text-left font-bold mb-8 flex items-center gap-2">
          <LuTrophy className="text-warning" /> Trending Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <div className="col-span-full flex justify-center py-10">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          ) : (
            trendingCourses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}>
                <CourseCard course={course} index={i} />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
