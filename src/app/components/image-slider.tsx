'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: '/bg1.webp',
    alt: 'IEEE CS Awards Ceremony',
    caption: 'Celebrating Innovation and Excellence'
  },
  {
    src: '/bg.webp',
    alt: 'Student Projects Showcase',
    caption: 'Showcasing Student Projects'
  },
  {
    src: '/inspire.png',
    alt: 'Award Winners',
    caption: 'Inspiring the Next Generation of Innovators'
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div style={styles.sliderContainer}>
      <div style={styles.imageContainer}>
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt}
          style={styles.image}
        />
        <div style={styles.overlay}>
          <div style={styles.caption}>
            <h3 style={styles.captionTitle}>{images[currentIndex].caption}</h3>
          </div>
        </div>
      </div>

      <button 
        onClick={goToPrevious}
        style={{...styles.navButton, ...styles.prevButton}}
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={goToNext}
        style={{...styles.navButton, ...styles.nextButton}}
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      <div style={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              ...styles.indicator,
              ...(index === currentIndex ? styles.activeIndicator : {})
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  sliderContainer: {
    position: 'relative' as const,
    width: '100%',
    height: '400px',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    margin: '2rem 0',
  },
  imageContainer: {
    position: 'relative' as const,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    transition: 'transform 0.5s ease',
  },
  overlay: {
    position: 'absolute' as const,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
    padding: '2rem',
  },
  caption: {
    color: 'white',
    textAlign: 'center' as const,
  },
  captionTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    margin: 0,
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  navButton: {
    position: 'absolute' as const,
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255,255,255,0.9)',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#333',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },
  prevButton: {
    left: '20px',
  },
  nextButton: {
    right: '20px',
  },
  indicators: {
    position: 'absolute' as const,
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
  },
  indicator: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: 'rgba(255,255,255,0.5)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  activeIndicator: {
    backgroundColor: 'white',
    transform: 'scale(1.2)',
  },
};
