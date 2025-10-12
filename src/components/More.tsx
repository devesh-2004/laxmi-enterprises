// components/FeaturedProducts.tsx
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Plus, ArrowRight } from "lucide-react";

// --- EDITABLE PRODUCT DATA ---
// To add or change products, simply edit this array.
// - id: A unique identifier.
// - name: The product's name.
// - href: The link to the product's detail page.
// - brand: The brand name displayed on the tag.
// - image: The path to the product image (use your own images here).
// - price: The current selling price.
// - oldPrice: The original price (will be struck through).
const products = [
  {
    id: 1,
    name: "Ace Exterior Emulsion",
    href: "/products/ace-exterior-emulsion",
    brand: "Asian Paints",
    image: "/images/product-ace.png", // Replace with your image path
    price: 3050.0,
    oldPrice: 3800.0,
  },
  {
    id: 2,
    name: "JSW Paints All Weather Coat",
    href: "/products/jsw-all-weather",
    brand: "JSW Paints",
    image: "/images/product-jsw.png", // Replace with your image path
    price: 1800.0,
    oldPrice: 2160.0,
  },
  {
    id: 3,
    name: "JSW Paints All Weather Coat",
    href: "/products/jsw-all-weather",
    brand: "JSW Paints",
    image: "/images/product-jsw.png", // Replace with your image path
    price: 1800.0,
    oldPrice: 2160.0,
  },
  {
    id: 4,
    name: "JSW Paints All Weather Coat",
    href: "/products/jsw-all-weather",
    brand: "JSW Paints",
    image: "/images/product-jsw.png", // Replace with your image path
    price: 1800.0,
    oldPrice: 2160.0,
  },
  {
    id: 5,
    name: "JSW Paints All Weather Coat",
    href: "/products/jsw-all-weather",
    brand: "JSW Paints",
    image: "/images/product-jsw.png", // Replace with your image path
    price: 1800.0,
    oldPrice: 2160.0,
  },
  {
    id: 6,
    name: "JSW Paints All Weather Coat",
    href: "/products/jsw-all-weather",
    brand: "JSW Paints",
    image: "/images/product-jsw.png", // Replace with your image path
    price: 1800.0,
    oldPrice: 2160.0,
  },
  // Add more products here...
];

const FeaturedProducts = () => {
  return (
    // Main section container with the orange background from your image.
    // Adjust padding for different screen sizes (py-16, sm:py-20, etc.).
    <section className="bg-orange-500 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4">
        {/* --- HEADER SECTION --- */}
        {/* Uses flexbox to align title on the left and "View All" on the right. */}
        {/* On small screens, it stacks (flex-col) and on larger screens, it's a row (sm:flex-row). */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <span className="bg-yellow-300 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
              FEATURED
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
              High-Demand Products
            </h2>
            <p className="text-gray-700 mt-2">
              Discover our most popular products.
            </p>
          </div>
          <Link href="/products" className="mt-4 sm:mt-0">
            <button
              className="flex items-center gap-2 bg-white text-gray-800 font-semibold px-4 py-2 rounded-lg shadow-md
                               hover:bg-gray-100 transition-colors duration-300"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* --- PRODUCTS GRID --- */}
        {/* A responsive grid that changes the number of columns based on screen size.
            - 1 column on mobile.
            - 2 columns on small screens (sm).
            - 3 columns on medium screens (md).
            - 4 columns on large screens (lg). */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            // Each card is a group, allowing for cool hover effects on child elements.
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden
                                              transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Product Image Section */}
              <div className="relative">
                <Link href={product.href}>
                  {/* Next.js Image component for optimized image loading. */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-56 object-cover"
                  />
                </Link>
                {/* Brand Tag - positioned absolutely within the relative container */}
                <span className="absolute top-3 right-3 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                  {product.brand}
                </span>
              </div>

              {/* Product Details Section */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 truncate">
                  <Link
                    href={product.href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {product.name}
                  </Link>
                </h3>

                {/* Price Section */}
                <div className="flex items-baseline gap-2 mt-2">
                  <p className="text-2xl font-extrabold text-gray-900">
                    ₹{product.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500 line-through">
                    ₹{product.oldPrice.toFixed(2)}
                  </p>
                </div>

                {/* Action Buttons Section */}
                <div className="mt-4 flex items-center gap-3">
                  <button
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg
                                     hover:bg-blue-700 transition-colors duration-300"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button
                    className="p-2 bg-gray-200 text-gray-700 rounded-full
                                     hover:bg-gray-300 transition-colors duration-300"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
