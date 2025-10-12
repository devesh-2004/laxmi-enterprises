// components/EmptyCart.tsx
"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const EmptyCart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 text-center p-4"
    >
      {/* Icon */}
      <div className="p-5 bg-gray-100 rounded-full mb-6">
        <ShoppingBag className="w-16 h-16 text-slate-700" strokeWidth={1.5} />
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-slate-800">Your Cart is Empty</h1>

      {/* Subheading */}
      <p className="mt-2 text-lg text-gray-500">
        Looks like you haven't added any items to your cart yet.
      </p>

      {/* "Continue Shopping" Button */}
      <div className="mt-8">
        <Link href="/products">
          <button
            className="px-8 py-3 bg-slate-800 text-white font-semibold rounded-lg shadow-md
                       hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default EmptyCart;
