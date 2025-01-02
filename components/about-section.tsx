import { Lightbulb } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-8 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Lightbulb
              size={64}
              className="text-blue-600 dark:text-blue-400 mb-4"
            />
            <h2 className="text-3xl font-bold mb-4">About Our Platform</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We provide a space for creators, innovators, and visionaries to
              showcase their work to the world. Whether you&apos;re an artist,
              entrepreneur, or tech enthusiast, our platform helps you connect
              with like-minded individuals and potential collaborators.
            </p>
          </div>
          <div className="md:w-1/2 h-full">
            <Image
              width={480}
              height={480}
              src="/assets/about-illustration.jpg"
              alt="About illustration"
              className="mx-auto aspect-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
