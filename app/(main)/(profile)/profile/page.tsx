import { stackServerApp } from '@/stack';
import { Card, CardContent } from '@/components/ui/card';
import { AccountSettings } from '@stackframe/stack';
import { Skeleton } from '@/components/ui/skeleton';

export default async function Page() {
  // await ensureOnboarded();
  const user = await stackServerApp.getUser();
  return (
    <>
      {user ? (
        <div className="flex flex-1 p-4">
          <Card className="flex-1 p-4">
            <CardContent>
              <AccountSettings />
            </CardContent>
          </Card>
        </div>
      ) : (
        <div>
          <p>You are not logged in</p>
          <p>
            <a href={stackServerApp.urls.signIn}>Sign in</a>
          </p>
          <p>
            <a href={stackServerApp.urls.signUp}>Sign up</a>
          </p>
        </div>
      )}
    </>
  );
}
