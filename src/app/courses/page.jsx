'use client';

import { useState, useEffect } from 'react';
import CourseCard from '@/components/CourseCard';
import { LuSearch } from 'react-icons/lu';
import { motion } from 'motion/react';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
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

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">All Courses</h1>
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
          Explore our wide range of professional courses and start learning
          today.
        </p>
      </motion.div>

      <div className="flex justify-center mb-12">
        <div className="join w-full max-w-xl">
          <div className="bg-base-200 flex items-center px-4 rounded-l-full border border-base-300 border-r-0">
            <LuSearch className="text-base-content/50" />
          </div>
          <input
            type="text"
            placeholder="Search courses by title"
            className="input input-bordered join-item w-full focus:outline-none rounded-r-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20 min-h-[40vh]">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-base-200 rounded-3xl border border-base-300">
          <h3 className="text-2xl font-semibold mb-2">No courses found</h3>
          <p className="text-base-content/60">
            Try adjusting your search query.
          </p>
        </div>
      )}
    </div>
  );
}
