"use client";

import Link from "next/link";
import Image from "next/image";
import { LuStar, LuClock, LuUser } from "react-icons/lu";
import { motion } from "motion/react";

export default function CourseCard({ course, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card bg-base-100 shadow-md border border-base-200 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 group h-full flex flex-col cursor-pointer"
    >
      <figure className="relative h-48 w-full overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute top-2 right-2 badge badge-secondary font-medium tracking-wide shadow-md">
          {course.category}
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
      </figure>
      <div className="card-body p-5 grow flex flex-col relative">
        <h2 className="card-title text-lg leading-tight mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {course.title}
        </h2>

        <div className="flex flex-col gap-2 text-sm text-base-content/70 mb-4">
          <div className="flex items-center gap-2 group-hover:text-base-content transition-colors duration-300">
            <LuUser
              size={16}
              className="text-primary group-hover:scale-110 transition-transform"
            />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-warning font-medium">
              <LuStar
                size={16}
                fill="currentColor"
                className="group-hover:rotate-12 transition-transform"
              />
              <span>{course.rating}</span>
            </div>
            <div className="flex items-center gap-1 group-hover:text-base-content transition-colors duration-300">
              <LuClock size={16} className="text-secondary" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>

        <div className="card-actions justify-end mt-auto">
          <Link
            href={`/courses/${course.id}`}
            className="btn btn-primary btn-sm w-full group-hover:btn-secondary transition-colors duration-300 gap-2"
          >
            View Details
            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
