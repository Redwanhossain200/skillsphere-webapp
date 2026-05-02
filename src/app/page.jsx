'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import PopularCourses from '@/components/home/PopularCourses';
import TrendingCourses from '@/components/home/TrendingCourses';
import LearningTips from '@/components/home/LearningTips';
import TopInstructors from '@/components/home/TopInstructors';

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCourses() {
      try {
        const res = await fetch('/courses.json');
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    getCourses();
  }, []);

  const topRatedCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const trendingCourses = courses.filter((c) => c.isTrending).slice(0, 3);

  return (
    <div className="flex flex-col gap-6 pb-16 overflow-hidden">
      <HeroSection />
      <PopularCourses popularCourses={topRatedCourses} isLoading={isLoading} />
      <TrendingCourses
        trendingCourses={trendingCourses}
        isLoading={isLoading}
      />
      <LearningTips />
      <TopInstructors />
    </div>
  );
}
