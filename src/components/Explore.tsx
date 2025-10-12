// components/CategorySection.tsx
"use client"; // This directive is necessary for using Framer Motion.

import Link from "next/link";
import { motion } from "framer-motion"; // Import motion for animations
import {
  Paintbrush,
  PaintBucket,
  Wrench,
  Droplets,
  Bath,
  Hammer,
  Package,
  ArrowRight,
  Construction,
} from "lucide-react";

// --- EDITABLE CATEGORY DATA (No changes here) ---
const categories = [
  {
    name: "Asian Paints",
    href: "/products/asian-paints",
    Icon: Paintbrush,
    bgColor: "from-red-800 to-red-900",
  },
  {
    name: "JSW Paints",
    href: "/products/jsw-paints",
    Icon: PaintBucket,
    bgColor: "from-yellow-700 to-yellow-900",
  },
  {
    name: "JK Maxx Paints",
    href: "/products/jk-maxx-paints",
    Icon: PaintBucket,
    bgColor: "from-indigo-700 to-indigo-900",
  },
  {
    name: "CPVC Pipe and Fittings",
    href: "/products/cpvc",
    Icon: Wrench,
    bgColor: "from-green-700 to-green-900",
  },
  {
    name: "UPVC Pipe and Fittings",
    href: "/products/upvc",
    Icon: Droplets,
    bgColor: "from-blue-700 to-blue-900",
  },
  {
    name: "PVC Pipe and Fittings",
    href: "/products/pvc",
    Icon: Droplets,
    bgColor: "from-slate-700 to-slate-900",
  },
  {
    name: "Bath Fittings",
    href: "/products/bath-fittings",
    Icon: Bath,
    bgColor: "from-cyan-700 to-cyan-900",
  },
  {
    name: "Sanitary Items",
    href: "/products/sanitary",
    Icon: Bath,
    bgColor: "from-purple-700 to-purple-900",
  },
  {
    name: "GI Fittings",
    href: "/products/gi-fittings",
    Icon: Hammer,
    bgColor: "from-pink-700 to-pink-900",
  },
  {
    name: "Extra Items",
    href: "/products/extra",
    Icon: Package,
    bgColor: "from-amber-700 to-amber-900",
  },
];

const CategorySection = () => {
  return (
    // --- UPDATED: Background changed to a subtle dark gradient ---
    <section
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black 
     py-16 sm:py-20 md:py-24"
    >
      <div className="container mx-auto px-4">
        {/* --- HEADING SECTION (No changes here) --- */}
        <div className="text-center mb-12">
          <span className="text-blue-400 font-semibold tracking-widest uppercase">
            EXPLORE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-2 mb-4">
            Shop by Category
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore our wide range of quality paint and plumbing products by
            category.
          </p>
        </div>

        {/* --- CATEGORY GRID (No changes to the grid layout itself) --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {categories.map((category) => (
            <Link
              href={category.href}
              key={category.name}
              className="group"
              style={{ perspective: 1000 }}
            >
              {/* --- UPDATED: The div is now a motion.div for animation --- */}
              <motion.div
                // --- Animation for continuous 360-degree rotation ---
                animate={{ rotateY: 360 }}
                transition={{
                  duration: 15, // Slower rotation for a classier feel
                  repeat: Infinity, // Loop the animation forever
                  ease: "linear", // Constant speed, no easing
                }}
                // --- Animation for when the user hovers over the card ---
                whileHover={{
                  rotateY: 0, // Stop the rotation
                  scale: 1.05, // Make the card slightly larger
                  transition: {
                    duration: 0.4, // Make the hover effect quick and responsive
                    ease: "easeOut",
                  },
                }}
                // --- UPDATED: Classes for hover color change and minimal look ---
                className={`relative p-6 rounded-xl shadow-lg h-full flex flex-col justify-between
                            bg-gradient-to-br ${category.bgColor}
                            text-white overflow-hidden
                            transition-colors duration-300 ease-in-out
                            group-hover:bg-gradient-none group-hover:bg-gray-700/50 group-hover:backdrop-blur-sm
                            hover:shadow-2xl hover:shadow-blue-500/20`}
              >
                {/* Abstract background shape for decoration */}
                <div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full opacity-50
                                transition-transform duration-500 group-hover:scale-125"
                ></div>

                <div>
                  {/* Icon Container */}
                  <div className="mb-4 inline-block p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <category.Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Category Name */}
                  <h3 className="text-lg font-bold">{category.name}</h3>
                </div>

                {/* Arrow Icon at the bottom right */}
                <div className="self-end mt-4">
                  <div
                    className="p-2 bg-black/30 rounded-full transition-all duration-300 
                                  group-hover:translate-x-1 group-hover:bg-blue-500"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
