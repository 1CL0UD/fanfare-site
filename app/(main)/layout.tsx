import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
