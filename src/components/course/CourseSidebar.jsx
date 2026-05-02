import { LuClock, LuBookOpen, LuCircleCheck } from 'react-icons/lu';
import BuyButton from '@/components/BuyButton';

export default function CourseSidebar({ course }) {
  return (
    <div className="md:col-span-1">
      <div className="bg-base-200 p-6 rounded-2xl sticky top-24 border border-base-300 shadow-sm">
        <h3 className="text-xl font-bold mb-4">Enroll in this course</h3>
        <div className="text-3xl font-bold mb-6 text-primary">
          ${course.price}
        </div>
        <BuyButton title={course.title} courseId={course.id} />
        <p className="text-sm text-center text-base-content/60">
          14 days money back guarantee
        </p>
        <div className="divider"></div>
        <h4 className="font-semibold mb-3">This course includes:</h4>
        <ul className="space-y-2 text-sm text-base-content/80">
          <li className="flex items-center gap-2">
            <LuClock size={16} /> {course.duration} on demand video
          </li>
          <li className="flex items-center gap-2">
            <LuBookOpen size={16} /> 15 downloadable resources
          </li>
          <li className="flex items-center gap-2">
            <LuCircleCheck size={16} /> Certificate of completion
          </li>
        </ul>
      </div>
    </div>
  );
}
