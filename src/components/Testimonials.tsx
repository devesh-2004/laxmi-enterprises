// components/TestimonialSlider.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

// --- NEW: Using TypeScript for type safety ---
type Testimonial = {
  id: number;
  rating: number;
  text: string;
  author: string;
  title: string;
  avatarInitial: string;
};

// --- EDITABLE TESTIMONIAL DATA ---
const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "Laxmi Enterprises has provided excellent service for all my painting needs. The quality of products and their helpful staff made my house renovation a breeze!",
    author: "Rajesh Sharma",
    title: "Homeowner",
    avatarInitial: "RS",
  },
  {
    id: 2,
    rating: 5,
    text: "Outstanding selection of plumbing supplies and their delivery was super fast. The team was very knowledgeable and helped me pick the right fittings.",
    author: "Priya Singh",
    title: "Contractor",
    avatarInitial: "PS",
  },
  {
    id: 3,
    rating: 4,
    text: "Good quality paints, though a bit pricier than local shops. However, the expert advice and range of colors were worth it. Satisfied with the outcome.",
    author: "Amit Kumar",
    title: "DIY Enthusiast",
    avatarInitial: "AK",
  },
  {
    id: 4,
    rating: 5,
    text: "My go-to place for all construction materials. Their Bath Fittings collection is superb! Highly recommend for anyone looking for premium quality.",
    author: "Sunita Devi",
    title: "Interior Designer",
    avatarInitial: "SD",
  },
  {
    id: 5,
    rating: 5,
    text: "The customer support is fantastic! They helped me resolve an issue with my order quickly and efficiently. Truly a customer-first approach.",
    author: "Vikram Gupta",
    title: "Repeat Customer",
    avatarInitial: "VG",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    // Main section with a gradient background
    <section className="bg-gradient-to-b from-slate-900 to-black text-white py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Hear from our satisfied customers about their experiences
        </p>

        {/* --- FIXED: Testimonial Slider Container --- 
            This container now has a responsive min-height to prevent layout shifts,
            while allowing the content inside to grow as needed on any screen size. */}
        <div className="relative mt-12 max-w-3xl mx-auto min-h-[450px] sm:min-h-[380px] md:min-h-[350px] flex items-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              // --- UPDATED: The card is absolutely positioned but has no fixed height.
              // Padding is now responsive for smaller screens.
              className="absolute w-full bg-slate-800/70 backdrop-blur-sm border border-slate-700 
                         p-6 sm:p-10 md:p-12 rounded-xl shadow-2xl flex flex-col items-center justify-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current mx-0.5"
                  />
                ))}
              </div>
              <p className="text-base sm:text-lg md:text-xl font-serif italic text-gray-200 mb-8 max-w-2xl">
                &quot;{currentTestimonial.text}&quot;
              </p>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">
                  {currentTestimonial.avatarInitial}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {currentTestimonial.author}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {currentTestimonial.title}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- Slider Navigation (No changes needed, already responsive) --- */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={handlePrevious}
            className="p-3 border border-gray-600 rounded-full text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-3 border border-blue-500 rounded-full text-white bg-blue-500 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
