import Image from 'next/image';
import { LuStar, LuClock, LuUser, LuBookOpen } from 'react-icons/lu';

export default function CourseHero({ course }) {
  return (
    <div className="relative h-64 md:h-96 w-full">
      <Image
        src={course.image}
        alt={course.title}
        fill
        quality={100}
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white w-full">
        <div className="badge badge-primary mb-2 md:mb-4">
          {course.category}
        </div>
        <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4">
          {course.title}
        </h1>
        <div className="flex flex-wrap gap-3 md:gap-6 text-xs sm:text-sm md:text-base font-medium">
          <div className="flex items-center gap-2">
            <LuUser size={20} className="text-primary" />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center gap-2 text-warning">
            <LuStar size={20} fill="currentColor" />
            <span>{course.rating} Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <LuClock size={20} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <LuBookOpen size={20} />
            <span>{course.level}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
