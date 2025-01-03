import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <div className="flex flex-col gap-y-6">
        <Skeleton className="h-32 w-full sm:h-32 sm:w-64" />
        <Skeleton className="h-32 w-full sm:h-32 sm:w-64" />
      </div>
      <main className="flex-grow space-y-6">
        <Skeleton className="h-16 sm:max-w-80 w-full" />
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
      </main>
    </div>
  );
}
