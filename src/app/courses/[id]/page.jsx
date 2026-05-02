import courses from '../../../../public/courses.json';
import { notFound, redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import CourseHero from '@/components/course/CourseHero';
import CourseContent from '@/components/course/CourseContent';
import CourseSidebar from '@/components/course/CourseSidebar';

export default async function CourseDetailsPage({ params }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user) {
    redirect('/login');
  }

  const { id } = await params;
  const courseId = parseInt(id);
  const course = courses.find((item) => item.id === courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="bg-base-100 rounded-3xl shadow-lg overflow-hidden border border-base-200">
        <CourseHero course={course} />
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <CourseContent course={course} />
          <CourseSidebar course={course} />
        </div>
      </div>
    </div>
  );
}
