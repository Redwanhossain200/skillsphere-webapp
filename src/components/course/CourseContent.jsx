import { LuCircleCheck } from 'react-icons/lu';

export default function CourseContent({ course }) {
  return (
    <div className="md:col-span-2 space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Course Description</h2>
        <p className="text-lg text-base-content/80 leading-relaxed">
          {course.description}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 p-4 bg-base-200 rounded-xl border border-base-300">
            <LuCircleCheck className="text-success shrink-0" />
            <span className="font-medium">
              Module 1: Introduction and Fundamentals
            </span>
          </li>
          <li className="flex items-center gap-3 p-4 bg-base-200 rounded-xl border border-base-300">
            <LuCircleCheck className="text-success shrink-0" />
            <span className="font-medium">
              Module 2: Core Concepts and Techniques
            </span>
          </li>
          <li className="flex items-center gap-3 p-4 bg-base-200 rounded-xl border border-base-300">
            <LuCircleCheck className="text-success shrink-0" />
            <span className="font-medium">Module 3: Advanced Strategies</span>
          </li>
          <li className="flex items-center gap-3 p-4 bg-base-200 rounded-xl border border-base-300">
            <LuCircleCheck className="text-success shrink-0" />
            <span className="font-medium">
              Module 4: Real-world Projects and Case Studies
            </span>
          </li>
          <li className="flex items-center gap-3 p-4 bg-base-200 rounded-xl border border-base-300">
            <LuCircleCheck className="text-success shrink-0" />
            <span className="font-medium">
              Module 5: Final Assessment and Certification
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
