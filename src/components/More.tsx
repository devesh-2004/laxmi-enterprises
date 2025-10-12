// components/FeaturedProducts.tsx
"use client"; // This must be a client component for hooks and event handlers.

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Plus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- 1. ADDING TYPESCRIPT FOR ROBUSTNESS ---
// This defines the shape of our product data, preventing common errors.
type Product = {
  id: number;
  name: string;
  href: string;
  brand: string;
  image: string;
  price: number;
  oldPrice: number;
};

// --- EDITABLE PRODUCT DATA ---
// IMPORTANT: Ensure every 'id' is unique. This is critical for React and Framer Motion.
const products: Product[] = [
  {
    id: 1,
    name: "Ace Exterior Emulsion",
    href: "/products/ace-exterior-emulsion",
    brand: "Asian Paints",
    image: "/images/product-ace.png", // Replace with your image paths
    price: 3050.0,
    oldPrice: 3800.0,
  },
  {
    id: 2,
    name: "JSW Paints All Weather Coat",
    href: "/products/jsw-all-weather-1", // Made href unique
    brand: "JSW Paints",
    image: "/images/product-jsw.png",
    price: 1800.0,
    oldPrice: 2160.0,
  },
  {
    id: 3,
    name: "JSW Paints Interior Sheen",
    href: "/products/jsw-interior-sheen",
    brand: "JSW Paints",
    image: "/images/product-jsw.png",
    price: 1950.0,
    oldPrice: 2300.0,
  },
  {
    id: 4,
    name: "Nerolac Beauty Gold Washable",
    href: "/products/nerolac-beauty-gold",
    brand: "Nerolac",
    image: "/images/product-ace.png", // Example with different brand
    price: 2200.0,
    oldPrice: 2550.0,
  },
  // Add more unique products here...
];

const FeaturedProducts = () => {
  // --- 2. IMPROVED STATE MANAGEMENT ---
  // We only store the ID of the selected product, not the whole object. This is cleaner.
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Find the full product object from the ID when needed.
  const selectedProduct = selectedId
    ? products.find((p) => p.id === selectedId)
    : null;

  // --- 3. ACCESSIBILITY IMPROVEMENT: Close modal with Escape key ---
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-blue-900 via-slate-900 to-black py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header Section (Unchanged, but text colors are suited for dark bg) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
              FEATURED
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
              High-Demand Products
            </h2>
            <p className="text-gray-400 mt-2">
              Discover our most popular products.
            </p>
          </div>
          <Link href="/products" className="mt-4 sm:mt-0">
            <button
              className="flex items-center gap-2 bg-transparent border border-gray-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md
                               hover:bg-white hover:text-black transition-all duration-300"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              layoutId={`product-card-${product.id}`}
              // --- 4. ACCESSIBILITY: Added tabIndex and onFocus for keyboard navigation ---
              tabIndex={0}
              onMouseEnter={() => setSelectedId(product.id)}
              onFocus={() => setSelectedId(product.id)}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {/* Card content remains the same */}
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {product.brand}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white truncate">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <p className="text-2xl font-extrabold text-white">
                    ₹{product.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500 line-through">
                    ₹{product.oldPrice.toFixed(2)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enlarged Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          // Use a div wrapper for the backdrop and mouse leave event
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onMouseLeave={() => setSelectedId(null)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* The Enlarged Card */}
            <motion.div
              layoutId={`product-card-${selectedProduct.id}`}
              className="relative w-11/12 max-w-sm bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {selectedProduct.brand}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {selectedProduct.name}
                </h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <p className="text-3xl font-extrabold text-white">
                    ₹{selectedProduct.price.toFixed(2)}
                  </p>
                  <p className="text-base text-gray-500 line-through">
                    ₹{selectedProduct.oldPrice.toFixed(2)}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Link href={selectedProduct.href} className="flex-1">
                    <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      <ShoppingCart className="w-5 h-5" /> View Details
                    </button>
                  </Link>
                  <button className="p-3 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition-colors duration-300">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProducts;
