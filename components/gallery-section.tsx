'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  { id: 1, image: '/assets/gallery/gallery-1.jpeg', title: 'Abstract Art' },
  { id: 2, image: '/assets/gallery/gallery-2.jpeg', title: 'Tech Startup' },
  { id: 3, image: '/assets/gallery/gallery-3.jpeg', title: 'Fashion Design' },
  { id: 4, image: '/assets/gallery/gallery-4.jpeg', title: 'Mobile App' },
  {
    id: 5,
    image: '/assets/gallery/gallery-5.jpeg',
    title: 'Eco-Friendly Product',
  },
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="gallery" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Gallery
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <Image
              src={galleryItems[currentIndex].image}
              alt={galleryItems[currentIndex].title}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500"
            />
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="text-gray-800 dark:text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="text-gray-800 dark:text-white" />
          </button>
        </div>
        <p className="text-center mt-4 text-lg font-semibold">
          {galleryItems[currentIndex].title}
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
