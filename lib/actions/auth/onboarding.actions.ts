import { stackServerApp } from '@/stack';
import { redirect } from 'next/navigation';

export async function ensureOnboarded() {
  const user = await stackServerApp.getUser();
  if (user?.serverMetadata.onboarded) {
    redirect('/onboarding');
  }
}

export async function finishOnboarding() {
  const user = await stackServerApp.getUser();
  await user?.update({
    clientReadOnlyMetadata: {
      onBoarded: true,
    },
  });
}
