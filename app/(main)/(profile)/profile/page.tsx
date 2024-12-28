import { stackServerApp } from '@/stack';
import { Card, CardContent } from '@/components/ui/card';
import SignOutButton from '@/components/auth/sign-out';
import Image from 'next/image';
import { SettingSidebar } from './sidebar';
import { AccountSettings } from '@stackframe/stack';

export default async function Page() {
  // await ensureOnboarded();
  const user = await stackServerApp.getUser();
  return (
    <>
      {user ? (
        <AccountSettings fullPage />
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
