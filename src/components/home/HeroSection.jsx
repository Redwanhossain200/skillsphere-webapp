'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    title: 'Upgrade Your Skills',
    highlight: 'Today',
    desc: 'Learn from experts and grow your career with modern courses.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Master Modern',
    highlight: 'Development',
    desc: 'Frontend, backend & full stack skills for real world jobs.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Learn Anytime',
    highlight: 'Anywhere',
    desc: 'Flexible learning paths designed for your busy schedule.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden flex items-center min-h-[clamp(420px,60vh,700px)]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/60 to-black/70" />

      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 relative z-10 text-center text-white w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight">
              {slides[index].title}{' '}
              <span className="text-secondary">{slides[index].highlight}</span>{' '}
              🚀
            </h1>

            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8">
              {slides[index].desc}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/courses"
                className="btn btn-primary btn-sm sm:btn-md rounded-full border-none gap-2 group">
                Explore
                <LuArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-all"
                />
              </Link>

              <Link
                href="/register"
                className="btn btn-outline btn-sm sm:btn-md rounded-full text-white border-white hover:bg-white hover:text-black">
                Get Started
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === index ? 'bg-primary scale-125' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
