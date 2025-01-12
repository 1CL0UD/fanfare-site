import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/assets/hero-background.jpg"
        alt="Hero background"
        fill
        objectFit="cover"
        className="absolute z-0"
        priority
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Showcase Your Work
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Share your projects, startups, and creative endeavors with the world
        </p>
        <a
          href="#gallery"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Explore Projects
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
