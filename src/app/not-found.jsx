import Link from 'next/link';
import { LuHouse } from 'react-icons/lu';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-32 px-4 text-center">
      <div className="text-9xl font-black text-primary/20 mb-4 animate-pulse">
        404
      </div>
      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-lg text-base-content/60 mb-8 max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn btn-primary gap-2">
        <LuHouse size={18} /> Back to Home
      </Link>
    </div>
  );
}
