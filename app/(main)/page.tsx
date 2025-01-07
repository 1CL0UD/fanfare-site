import AboutSection from '@/components/about-section';
import ContactForm from '@/components/contact-form';
import GallerySection from '@/components/gallery-section';
import HeroSection from '@/components/hero-section';
import ProjectShowcase from '@/components/project-showcase';
import { getFeaturedProjects } from '@/lib/actions/project.actions';

export default async function Page() {
  const projects = await getFeaturedProjects();
  return (
    <main>
      <HeroSection />
      <ProjectShowcase projects={projects} />
      <AboutSection />
      <GallerySection />
      <ContactForm />
    </main>
  );
}
