import AboutSection from '@/components/about-section';
import ContactForm from '@/components/contact-form';
import GallerySection from '@/components/gallery-section';
import HeroSection from '@/components/hero-section';
import ProjectShowcase from '@/components/project-showcase';

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ProjectShowcase />
      <AboutSection />
      <GallerySection />
      <ContactForm />
    </main>
  );
}
