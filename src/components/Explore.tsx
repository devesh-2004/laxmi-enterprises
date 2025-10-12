// components/CategorySection.tsx
import Link from "next/link";
// Corrected the icon imports. 'Pipe' does not exist in lucide-react.
import {
  Paintbrush,
  PaintBucket,
  Wrench,
  Droplets, // This is a suitable icon for pipes and fittings
  Bath,
  Hammer,
  Package,
  ArrowRight,
  Construction, // Added another option you can use
} from "lucide-react";

// --- EDITABLE CATEGORY DATA ---
// To change categories, simply edit this array.
// - name: The text displayed on the card.
// - href: The URL the card will link to.
// - Icon: The icon component from lucide-react.
// - bgColor: The Tailwind CSS gradient classes for the card's background.
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
    // --- THIS IS THE CORRECTED SECTION ---
    // The previous 'Pipe' icon does not exist. It has been replaced with 'Droplets'.
    // You could also use 'Wrench' or 'Construction' if you prefer.
    name: "PVC Pipe and Fittings",
    href: "/products/pvc",
    Icon: Droplets, // <<< FIX APPLIED HERE
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
    Icon: Bath, // Using 'Bath' again as it's relevant for sanitary ware
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
    // Main section container with a dark, classy background color.
    // py-16 to py-24 adds vertical padding that adjusts for screen size.
    <section className="bg-slate-900 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4">
        {/* --- HEADING SECTION --- */}
        <div className="text-center mb-12">
          <span className="text-blue-400 font-semibold tracking-widest uppercase">
            EXPLORE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-2 mb-4">
            Shop by Category
          </h2>
          {/* Underline accent */}
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore our wide range of quality paint and plumbing products by
            category.
          </p>
        </div>

        {/* --- CATEGORY GRID --- */}
        {/* This grid is responsive. It shows:
            - 2 columns on small screens (sm)
            - 3 columns on medium screens (md)
            - 4 columns on large screens (lg)
            - 5 columns on extra-large screens (xl) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            // The Link component from Next.js handles client-side navigation.
            // The 'group' class is used to control child element styles on hover (e.g., the arrow).
            <Link href={category.href} key={category.name} className="group">
              <div
                className={`relative p-6 rounded-xl shadow-lg h-full flex flex-col justify-between
                            bg-gradient-to-br ${category.bgColor}
                            text-white overflow-hidden
                            transition-all duration-300 ease-in-out
                            transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20`}
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
                    className="p-2 bg-black/30 rounded-full transition-transform duration-300 
                                  group-hover:translate-x-1 group-hover:bg-blue-500"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
