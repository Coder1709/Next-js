"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";
import classes from "./image-slideshow.module.css";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

/**
 * ImageSlideshow Component
 *
 * A React component that displays an automatic image slideshow with smooth transitions.
 * Images cycle through automatically every 5 seconds, creating a continuous loop.
 *
 * @component
 * @returns {JSX.Element} A slideshow container with cycling images
 *
 * @description
 * This component manages an automatic image slideshow using React hooks:
 * - useState: Tracks the currently displayed image index
 * - useEffect: Sets up an interval timer for automatic image cycling
 *
 * Features:
 * - Automatic cycling every 5 seconds
 * - Loops back to first image after the last one
 * - CSS class-based styling with 'active' state for current image
 * - Accessible alt text for screen readers
 * - Cleanup of interval on component unmount to prevent memory leaks
 *
 * @requires images - Array of image objects with 'image' and 'alt' properties
 * @requires classes - CSS module object containing 'slideshow' and 'active' class names
 * @requires Image - Next.js Image component for optimized image rendering
 * @requires useState, useEffect - React hooks for state and side effect management
 */
export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Render the slideshow container with all images
  return (
    <div className={classes.slideshow}>
      {/* Map through all images and render each as a Next.js Image component */}
      {images.map((image, index) => (
        <Image
          key={index} // Use index as key for React rendering
          src={image.image} // Image source from imported assets
          className={index === currentImageIndex ? classes.active : ""} // Apply 'active' class to current image
          alt={image.alt} // Accessibility text for screen readers
        />
      ))}
    </div>
  );
}
