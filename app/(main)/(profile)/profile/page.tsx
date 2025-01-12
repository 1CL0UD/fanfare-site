import { stackServerApp } from '@/stack';
import { Card, CardContent } from '@/components/ui/card';
import { AccountSettings } from '@stackframe/stack';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Settings, ShieldAlert, User } from 'lucide-react';

export default async function Page() {
  // await ensureOnboarded();
  const user = await stackServerApp.getUser();
  return (
    <>
      {user ? (
        <div className="flex sm:flex-row flex-col flex-1 p-4">
          <Card className="sm:hidden flex flex-col justify-start items-start p-4 gap-4 sm:mb-0 mb-4">
            <Link
              href="#profile"
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'w-full justify-start'
              )}
            >
              <span>
                <User />
              </span>
              Profile
            </Link>
            <Link
              href="#auth"
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'w-full justify-start'
              )}
            >
              <span>
                <ShieldAlert />
              </span>
              Emails & Auth
            </Link>
            <Link
              href="#settings"
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'w-full justify-start'
              )}
            >
              <span>
                <Settings />
              </span>
              Settings
            </Link>
          </Card>
          <Card className="flex-1 p-4">
            <CardContent>
              <AccountSettings fullPage={true} />
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
