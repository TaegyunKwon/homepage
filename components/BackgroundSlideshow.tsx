"use client";

import { useState, useEffect } from 'react';
import styles from '../styles/BackgroundSlideshow.module.css';

const imageFiles = [
  'AAE2.webp',
  '50주년.webp',
  '신세계.webp',
  'X-Space7.webp',
];

export default function BackgroundSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isScrolling, setIsScrolling] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollEndTimeout = setTimeout(() => {
      setIsScrolling(false);
      setIsScrolled(true);
    }, 10000); // 10초 스크롤

    const changeImageTimeout = setTimeout(() => {
      setCurrentImageIndex(nextImageIndex);
      setNextImageIndex((nextImageIndex + 1) % imageFiles.length);
      setIsScrolling(true);
      setIsScrolled(false);
    }, 13000); // 10초 스크롤 + 2초 대기 + 1초 페이드

    return () => {
      clearTimeout(scrollEndTimeout);
      clearTimeout(changeImageTimeout);
    };
  }, [currentImageIndex, nextImageIndex]);

  return (
    <div className={styles.slideshowContainer}>
      {imageFiles.map((file, index) => (
        <div
          key={file}
          className={`
            ${styles.backgroundImage} 
            ${index === currentImageIndex ? styles.active : ''}
            ${index === currentImageIndex && isScrolling ? styles.scrolling : ''}
            ${index === currentImageIndex && isScrolled ? styles.scrolled : ''}
            ${index === nextImageIndex && isScrolled ? styles.scrolled : ''}
          `}
          style={{ 
            backgroundImage: `url(/images/art/${file})`,
            opacity: index === currentImageIndex ? 1 : (index === nextImageIndex && isScrolled ? 1 : 0),
            transition: isScrolled ? 'opacity 1s ease-in-out' : 'none',
          }}
        />
      ))}
    </div>
  );
}
