import { stackServerApp } from '@/stack';
import { Card, CardContent } from '@/components/ui/card';
import SignOutButton from '@/components/auth/sign-out';
import Image from 'next/image';

export default async function Page() {
  const user = await stackServerApp.getUser();
  return (
    <div>
      {user ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
          <Card className="w-full max-w-md">
            <CardContent className="flex flex-col items-center space-y-6 p-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src={user.profileImageUrl || ''}
                  alt={user.displayName || 'Profile Picture'}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {user.displayName}
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  {user.primaryEmail}
                </p>
              </div>
              <SignOutButton />
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
    </div>
  );
}
