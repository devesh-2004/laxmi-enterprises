"use client";

import { useState, useMemo, useCallback } from "react";
import { Category, Product } from "@/types/Product";
import ProductCard from "./ProductCard";
import { Search, ChevronDown } from "lucide-react";

interface ProductListingTemplateProps {
  /** The specific category title for the header (e.g., "JSW Paints"). */
  categoryTitle: string;
  /** The initially active category tab. */
  initialActiveCategory: Category;
  /** The full list of products for this view. */
  products: Product[];
  /** All available categories for the filter tabs. */
  categories: Category[];
}

const ProductListingTemplate: React.FC<ProductListingTemplateProps> = ({
  categoryTitle,
  initialActiveCategory,
  products,
  categories,
}) => {
  const [activeCategory, setActiveCategory] = useState<Category>(
    initialActiveCategory
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"name-asc" | "price-asc" | "price-desc">(
    "name-asc"
  );

  // ✅ Filter + Search + Sort Logic
  const filteredProducts = useMemo(() => {
    let list = [...products]; // clone to prevent mutation

    // 1️⃣ Filter by Category (if not "All Products")
    if (activeCategory !== "All Products") {
      const categoryMatchTerm = activeCategory.split(" ")[0].toUpperCase();
      list = list.filter((p) =>
        (p.brand || "").toUpperCase().includes(categoryMatchTerm)
      );
    }

    // 2️⃣ Filter by Search Term (matches name or brand)
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerSearch) ||
          (p.brand && p.brand.toLowerCase().includes(lowerSearch))
      );
    }

    // 3️⃣ Sort safely (non-mutating)
    const sortedList = [...list].sort((a, b) => {
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0;
    });

    return sortedList;
  }, [products, activeCategory, searchTerm, sortBy]);

  // ✅ Search handler
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* 🏷️ Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          {categoryTitle}
        </h1>
        <p className="text-gray-600">Browse our selection of {categoryTitle}</p>
      </header>

      {/* 🧭 Category Tabs */}
      <div className="overflow-x-auto whitespace-nowrap mb-6 border-b border-gray-200 pb-4">
        <div className="inline-flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm rounded-full transition duration-150 flex-shrink-0
                ${
                  cat === activeCategory
                    ? "bg-blue-600 text-white font-medium shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 🔍 Search + Sort Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        {/* Search */}
        <div className="relative w-full md:w-2/3">
          <Search
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Sort Dropdown */}
        <div className="flex-shrink-0 w-full md:w-auto relative">
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as "name-asc" | "price-asc" | "price-desc"
              )
            }
            className="appearance-none flex items-center justify-center bg-white border border-gray-300 text-gray-700 text-sm font-medium px-4 py-2 pr-8 rounded-lg hover:bg-gray-50 transition w-full cursor-pointer"
          >
            <option value="name-asc">Sort by: Name (A–Z)</option>
            <option value="price-asc">Sort by: Price (Low → High)</option>
            <option value="price-desc">Sort by: Price (High → Low)</option>
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
          />
        </div>
      </div>

      {/* 📊 Results Count */}
      <p className="text-gray-600 mb-6 font-medium">
        Showing {filteredProducts.length} products in {activeCategory}
      </p>

      {/* 🛍️ Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="lg:col-span-4 text-center py-10 text-gray-500">
            No products match your filters or search term.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListingTemplate;
