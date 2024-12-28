'use client';
import { useUser } from '@stackframe/stack';
import { Button } from '../ui/button';

export default function SignOutButton() {
  const user = useUser();
  return user ? (
    <Button variant={'destructive'} onClick={() => user.signOut()}>
      Sign Out
    </Button>
  ) : (
    'Not signed in'
  );
}
