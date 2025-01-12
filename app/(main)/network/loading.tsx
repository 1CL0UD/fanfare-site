import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-16 sm:max-w-80 w-full" />
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
    </div>
  );
}
