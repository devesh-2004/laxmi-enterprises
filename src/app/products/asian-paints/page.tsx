// /app/products/asian/page.tsx

"use client";

import { useState } from "react";
import { Category, Product } from "@/types/Product";
import ProductCard from "@/components/ProductCard";
import { Search, ChevronDown, ShoppingCart, Heart } from "lucide-react"; // Assuming 'lucide-react'

// --- Mock Data ---
const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Ace Exterior Emulsion",
    brand: "ASIAN PAINTS",
    price: 3050,
    originalPrice: 3650,
    imageSrc: "/path/to/img1.jpg",
  },
  {
    id: 2,
    name: "Ace Power Plus Exterior Emulsion",
    brand: "ASIAN PAINTS",
    price: 4400,
    originalPrice: 5200,
    imageSrc: "/path/to/img2.jpg",
  },
  {
    id: 3,
    name: "Ace Shyne Exterior Emulsion",
    brand: "ASIAN PAINTS",
    price: 3400,
    originalPrice: 4050,
    imageSrc: "/path/to/img3.jpg",
  },
  {
    id: 4,
    name: "Ace Sparc Exterior Emulsion",
    brand: "ASIAN PAINTS",
    price: 2200,
    originalPrice: 2640,
    imageSrc: "/path/to/img4.jpg",
  },
  {
    id: 5,
    name: "Acerlic Wall Putty",
    brand: "ASIAN PAINTS",
    price: 1200,
    originalPrice: 1440,
    imageSrc: "/path/to/img5.jpg",
  },
  {
    id: 6,
    name: "Apex Dust Proof Exterior Emulsion",
    brand: "ASIAN PAINTS",
    price: 5000,
    originalPrice: 6000,
    imageSrc: "/path/to/img6.jpg",
  },
  {
    id: 7,
    name: "Apex Shyne Dust Proof Exterior Emulsion",
    brand: "ASIAN PAINTS",
    price: 5100,
    originalPrice: 6120,
    imageSrc: "/path/to/img7.jpg",
  },
  {
    id: 8,
    name: "Apex Ultima Exterior Emulsion",
    brand: "ASIAN PAINTS",
    price: 7800,
    originalPrice: 9360,
    imageSrc: "/path/to/img8.jpg",
  },
];

const CATEGORIES: Category[] = [
  "All Products",
  "Asian Paints",
  "JSW Paints",
  "JK Maxx Paints",
  "CPVC Pipe and Fittings",
  "UPVC Pipe and Fittings",
  "PVC Pipe and Fittings",
  "Bath Fittings",
  "Sanitary Items",
];
// -----------------

export default function AsianPaintsProductsPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Asian Paints");

  // In a real application, you would fetch the products based on the 'activeCategory'
  const filteredProducts = MOCK_PRODUCTS;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header and Subtitle */}
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Asian Paints</h1>
        <p className="text-gray-600">Browse our selection of Asian Paints</p>
      </header>

      {/* Category/Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 pb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-4 py-2 text-sm rounded-full transition duration-150
              ${
                cat === activeCategory
                  ? "bg-blue-600 text-white font-medium shadow-md"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search and Sort Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-2/3">
          <Search
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Sort Button */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <button
            className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition w-full"
            aria-haspopup="true"
          >
            <ChevronDown size={16} className="mr-2" />
            Sort by: Name (A-Z)
          </button>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-gray-600 mb-6">
        Showing {filteredProducts.length} products
        {activeCategory !== "All Products" && ` in ${activeCategory}`}
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
