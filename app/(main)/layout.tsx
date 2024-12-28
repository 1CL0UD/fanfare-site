import Header from '@/components/shared/header';
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen flex flex-col">
      <Header />
      <Suspense fallback>{children}</Suspense>
    </section>
  );
}
