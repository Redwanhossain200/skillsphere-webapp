'use client';

export default function Loading() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh]">
      <span className="loading loading-spinner loading-lg text-primary mb-4"></span>
      <h2 className="text-2xl font-semibold text-base-content/80">
        Loading...
      </h2>
      <p className="text-sm text-base-content/50 mt-2">
        Fetching data, please wait
      </p>
    </div>
  );
}
