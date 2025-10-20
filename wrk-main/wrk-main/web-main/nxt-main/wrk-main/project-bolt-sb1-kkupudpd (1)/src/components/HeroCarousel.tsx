import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import blackFridayImg from '../assets/carousel-images/1000031937.png';
import package1Img from '../assets/carousel-images/1000031934.png';
import streamingImg from '../assets/carousel-images/1000031935.png';
import socialImg from '../assets/carousel-images/1000031936.png';

const slides = [
  {
    id: 1,
    image: blackFridayImg,
    alt: 'Black Friday Special',
    title: '',
    subtitle: '',
    cta: '',
    link: '/internet',
    hideText: true,
  },
  {
    id: 2,
    image: package1Img,
    alt: 'JMD 200 Package - 3 Days Plan',
    title: 'JMD 200 Package',
    subtitle: '3 Days of unlimited internet',
    cta: 'Get Started',
    link: '/internet',
    hideText: false,
  },
  {
    id: 3,
    image: streamingImg,
    alt: 'Watch Now - Streaming Services',
    title: 'Watch Now',
    subtitle: 'Premium streaming channels',
    cta: 'Explore',
    link: '/streaming',
    hideText: false,
  },
  {
    id: 4,
    image: socialImg,
    alt: 'More For Less - Social Media',
    title: 'More For Less',
    subtitle: 'Stay connected with friends',
    cta: 'Learn More',
    link: '/bundle',
    hideText: false,
  },
];

export const HeroCarousel: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full bg-white overflow-hidden">
      <div className="relative w-full">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/50 transition-all text-white backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-contain object-center bg-white"
          />

          {!slide.hideText && (
            <div
              key={slide.id}
              className="absolute inset-0 flex items-center z-10 animate-[slideIn_0.6s_ease-out]"
            >
              <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl pl-4 sm:pl-8 md:pl-12 lg:pl-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-[slideInLeft_0.8s_ease-out]">
                    {slide.title}
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] animate-[slideInLeft_0.8s_ease-out_0.1s_both]">
                    {slide.subtitle}
                  </p>
                  <button
                    onClick={() => navigate(slide.link)}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-button shadow-glow-primary hover:shadow-glow-secondary hover:scale-105 transition-all duration-300 animate-[slideInLeft_0.8s_ease-out_0.2s_both]"
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/50 transition-all text-white backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-6 sm:w-8' : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
