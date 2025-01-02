import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <>
      <div className="flex flex-1 p-4">
        <Card className="flex flex-1 p-4">
          <CardContent className="p-4 grid grid-cols-10 flex-1 gap-x-8">
            <Skeleton className="h-full col-span-2 hidden sm:block" />
            <Skeleton className="h-full col-span-10 sm:col-span-8" />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
