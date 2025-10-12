// /components/ProductCard.tsx

import React from "react";
import { Product } from "@/types/Product";
import { ShoppingCart, Heart } from "lucide-react"; // Assuming 'lucide-react' for icons

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, brand, price, originalPrice, imageSrc } = product;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-shadow duration-300 hover:shadow-xl">
      {/* Brand Tag */}
      <div className="absolute z-10 m-2 px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
        {product.brand}
      </div>

      {/* Image Container (Simulated) */}
      <div className="bg-gradient-to-br from-teal-200 to-yellow-100 p-4 pt-10 flex justify-center items-center h-48 relative">
        {/* Replace with a real <Image /> component in a production app */}
        <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-sm">
          {/* Placeholder for the paint can image */}
          Image Placeholder
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-gray-800 font-medium text-sm h-10 line-clamp-2">
          {name}
        </h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-lg font-bold text-gray-900">
            ₹{price.toLocaleString("en-IN")}
          </span>
          <span className="ml-2 text-xs text-gray-400 line-through">
            ₹{originalPrice.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex space-x-2">
          <button
            className="flex-1 flex items-center justify-center bg-blue-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </button>
          <button
            className="p-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-100 transition"
            aria-label={`Save ${name} to wishlist`}
          >
            <Heart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
