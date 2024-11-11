import React, { useState, useEffect, useRef } from 'react';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    'https://www.shutterstock.com/image-vector/summer-sale-three-blue-podium-260nw-2471730467.jpg',
    'https://cdn.sanity.io/images/cbjxg0yl/production_v2/207796ae5c4b77588415a94bdaf3c8c29ea92bd3-2480x761.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/83d70974403181.5c2e97fb1f91b.jpg'
  ];
  const autoPlayInterval = 3000; // 3 seconds
  const slideCount = slides.length;
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = startAutoPlay();
    return () => {
      stopAutoPlay();
    };
  }, [currentIndex]);

  const startAutoPlay = () => {
    return setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, autoPlayInterval);
  };

  const stopAutoPlay = () => {
    clearInterval(autoPlayRef.current);
  };

  const goToPrevious = () => {
    stopAutoPlay();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slideCount - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    stopAutoPlay();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  return (
    <div className="relative w-full mt-[80px] bg-white overflow-hidden">
      <div className="hs-carousel-body flex h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="hs-carousel-slide w-full flex-shrink-0" key={index}>
            <div className="flex justify-center items-center w-full h-[300px] sm:h-[400px] lg:h-[400px] bg-gray-100 dark:bg-neutral-900">
              <img 
                src={slide} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button - Hidden on Mobile */}
      <button
        type="button"
        onClick={goToPrevious}
        className="hidden sm:flex absolute inset-y-0 start-0 items-center justify-center w-12 h-full bg-gray-800/10 text-gray-800 dark:text-white hover:bg-gray-800/20"
      >
        <span aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>

      {/* Next Button - Hidden on Mobile */}
      <button
        type="button"
        onClick={goToNext}
        className="hidden sm:flex absolute inset-y-0 end-0 items-center justify-center w-12 h-full bg-gray-800/10 text-gray-800 dark:text-white hover:bg-gray-800/20"
      >
        <span aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
        <span className="sr-only">Next</span>
      </button>

      {/* Pagination */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full border border-gray-400 ${index === currentIndex ? 'bg-blue-700' : 'bg-gray-200'}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
