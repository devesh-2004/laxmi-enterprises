'use client'
// components/HeroSection.tsx
import Link from "next/link";
import { motion } from "framer-motion"; // For advanced animations, you'll need to install framer-motion

// If you want to use framer-motion, uncomment the line below and install it:
// npm install framer-motion

const HeroSection = () => {
  return (
    // Main container for the hero section with a grayscale gradient background
    // and responsive padding.
    // bg-gradient-to-br: defines a gradient from bottom-right (br)
    // from-gray-100 to-gray-300: sets the start and end colors of the gradient
    <section
      className="relative min-h-[95vh] flex items-center justify-center text-center 
                        bg-gradient-to-br from-gray-400 to-gray-600 py-16 px-4 
                        sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Content wrapper to center and limit width */}
      <div className="max-w-4xl mx-auto z-10">
        {/* "Premium Quality" tag */}
        {/* motion.div for animation: initial (start state), animate (end state), transition (how it animates) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block bg-gray-700 text-white text-xs sm:text-sm font-semibold 
                     px-4 py-1 rounded-full mb-6 shadow-md"
        >
          Premium Quality
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
        >
          Transform Your Space with{" "}
          <span className="text-blue-900  ">Premium Quality</span> Products
        </motion.h1>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-gray-900 mb-10 max-w-2xl mx-auto"
        >
          Your one-stop destination for quality painting and plumbing supplies.
          From Asian Paints to premium bath fittings, we have everything you
          need.
        </motion.p>

        {/* Call-to-action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <Link href="/products" passHref>
            <button
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white 
                                px-8 py-3 rounded-full text-lg font-semibold shadow-lg 
                                hover:from-blue-600 hover:to-indigo-700 
                                transform hover:-translate-y-1 transition-all duration-300 ease-in-out
                                w-full sm:w-auto"
            >
              Explore Products
            </button>
          </Link>
          <Link href="/services" passHref>
            <button
              className="bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold 
                                shadow-lg hover:bg-gray-900 
                                transform hover:-translate-y-1 transition-all duration-300 ease-in-out
                                w-full sm:w-auto"
            >
              Our Services
            </button>
          </Link>
        </motion.div>

        {/* Statistics/Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {/* Stat Card 1 */}
          <div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-xl 
                          transform hover:scale-105 transition-transform duration-300 ease-in-out
                          hover:shadow-2xl"
          >
            <p className="text-3xl font-bold mb-1">10+</p>
            <p className="text-gray-300 text-sm">Product Categories</p>
          </div>

          {/* Stat Card 2 */}
          <div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-xl 
                          transform hover:scale-105 transition-transform duration-300 ease-in-out
                          hover:shadow-2xl"
          >
            <p className="text-3xl font-bold mb-1">1000+</p>
            <p className="text-gray-300 text-sm">Quality Products</p>
          </div>

          {/* Stat Card 3 */}
          <div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-xl 
                          transform hover:scale-105 transition-transform duration-300 ease-in-out
                          hover:shadow-2xl"
          >
            <p className="text-3xl font-bold mb-1">5⭐</p>
            <p className="text-gray-300 text-sm">Customer Rating</p>
          </div>

          {/* Stat Card 4 */}
          <div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-xl 
                          transform hover:scale-105 transition-transform duration-300 ease-in-out
                          hover:shadow-2xl"
          >
            <p className="text-3xl font-bold mb-1">24/7</p>
            <p className="text-gray-300 text-sm">Customer Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
