'use client'; // Required for scroll-triggered animations (whileInView)

import Link from "next/link";
import { motion } from "framer-motion";

// --- Animation Variants for the Statistics Cards ---
// This defines the animation for the container of the cards
const statsContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This creates the one-by-one effect
    },
  },
};

// This defines the animation for each individual card
const statCardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    // --- UPDATED: A classier, deep-blue to black gradient background ---
    <section
      className="relative min-h-[95vh] flex items-center justify-center text-center 
                        bg-gradient-to-b from-slate-900 to-black py-16 px-4 
                        sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto z-10">
        
        {/* --- UPDATED: Tag styling to match the new theme --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block bg-white/10 text-blue-300 text-xs sm:text-sm font-semibold 
                     px-4 py-1 rounded-full mb-6 shadow-md backdrop-blur-sm"
        >
          Premium Quality
        </motion.div>

        {/* --- FIXED: Main heading text color changed to white for readability --- */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
        >
          Transform Your Space with{" "}
          {/* --- UPDATED: Eye-catching gradient for highlighted text --- */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Premium Quality
          </span>{" "}
          Products
        </motion.h1>

        {/* --- FIXED: Description text color changed for readability --- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Your one-stop destination for quality painting and plumbing supplies.
          From Asian Paints to premium bath fittings, we have everything you
          need.
        </motion.p>

        {/* Call-to-action Buttons (Unchanged, they work well) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <Link href="/products" passHref>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white 
                               px-8 py-3 rounded-full text-lg font-semibold shadow-lg 
                               hover:from-blue-600 hover:to-indigo-700 
                               transform hover:-translate-y-1 transition-all duration-300 ease-in-out
                               w-full sm:w-auto">
              Explore Products
            </button>
          </Link>
          <Link href="/services" passHref>
            <button className="bg-slate-800 text-white px-8 py-3 rounded-full text-lg font-semibold 
                               shadow-lg hover:bg-slate-700
                               transform hover:-translate-y-1 transition-all duration-300 ease-in-out
                               w-full sm:w-auto">
              Our Services
            </button>
          </Link>
        </motion.div>

        {/* --- UPDATED: Statistics grid with scroll-triggered stagger animation --- */}
        <motion.div
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="show" // This triggers the animation when it enters the viewport
          viewport={{ once: true, amount: 0.3 }} // Animation runs once
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {/* --- UPDATED: Stat card with new styling and individual animation --- */}
          <motion.div variants={statCardVariants} className="bg-white/5 backdrop-blur-sm border border-white/10 text-white p-6 rounded-lg shadow-xl">
            <p className="text-3xl font-bold mb-1">10+</p>
            <p className="text-gray-300 text-sm">Product Categories</p>
          </motion.div>

          <motion.div variants={statCardVariants} className="bg-white/5 backdrop-blur-sm border border-white/10 text-white p-6 rounded-lg shadow-xl">
            <p className="text-3xl font-bold mb-1">1000+</p>
            <p className="text-gray-300 text-sm">Quality Products</p>
          </motion.div>

          <motion.div variants={statCardVariants} className="bg-white/5 backdrop-blur-sm border border-white/10 text-white p-6 rounded-lg shadow-xl">
            <p className="text-3xl font-bold mb-1">5⭐</p>
            <p className="text-gray-300 text-sm">Customer Rating</p>
          </motion.div>

          <motion.div variants={statCardVariants} className="bg-white/5 backdrop-blur-sm border border-white/10 text-white p-6 rounded-lg shadow-xl">
            <p className="text-3xl font-bold mb-1">24/7</p>
            <p className="text-gray-300 text-sm">Customer Support</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;