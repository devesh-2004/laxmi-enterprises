import ProductListingTemplate from "@/components/ProductListingTemplate";
import { Product, Category } from "@/types/Product";

// --- Global Category List (must be consistent across all pages) ---
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
  "Glass Fittings", // <-- NEW CATEGORY
];

// --- Mock Data for Glass Fittings ---
const GLASS_FITTING_PRODUCTS: Product[] = [
  // Using 'ASIAN PAINTS' brand as a placeholder for the Product type constraint
  {
    id: 801,
    name: "Stainless Steel Patch Fitting (Top)",
    brand: "ASIAN PAINTS",
    price: 1850,
    originalPrice: 2200,
    imageSrc: "/glass/p1.jpg",
  },
  {
    id: 802,
    name: "Hydraulic Floor Spring (Heavy Duty)",
    brand: "ASIAN PAINTS",
    price: 5200,
    originalPrice: 6240,
    imageSrc: "/glass/p2.jpg",
  },
  {
    id: 803,
    name: "Glass Door Handle (D-Type, 12 inch)",
    brand: "ASIAN PAINTS",
    price: 1100,
    originalPrice: 1320,
    imageSrc: "/glass/p3.jpg",
  },
  {
    id: 804,
    name: "Shower Enclosure Hinge (90 degree)",
    brand: "ASIAN PAINTS",
    price: 950,
    originalPrice: 1140,
    imageSrc: "/glass/p4.jpg",
  },
  {
    id: 805,
    name: "Spider Fitting for Glass Canopy",
    brand: "ASIAN PAINTS",
    price: 3000,
    originalPrice: 3600,
    imageSrc: "/glass/p5.jpg",
  },
];

export default function GlassFittingsPage() {
  return (
    <ProductListingTemplate
      categoryTitle="Glass Fittings"
      initialActiveCategory="Glass Fittings"
      products={GLASS_FITTING_PRODUCTS}
      categories={CATEGORIES}
    />
  );
}
import ProductListingTemplate from "@/components/ProductListingTemplate";
import { Product, Category } from "@/types/Product";

// --- Global Category List (must be consistent across all pages) ---
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
  "Glass Fittings", // <-- NEW CATEGORY
];

// --- Mock Data for Glass Fittings ---
const GLASS_FITTING_PRODUCTS: Product[] = [
  // Using 'ASIAN PAINTS' brand as a placeholder for the Product type constraint
  {
    id: 801,
    name: "Stainless Steel Patch Fitting (Top)",
    brand: "ASIAN PAINTS",
    price: 1850,
    originalPrice: 2200,
    imageSrc: "/glass/p1.jpg",
  },
  {
    id: 802,
    name: "Hydraulic Floor Spring (Heavy Duty)",
    brand: "ASIAN PAINTS",
    price: 5200,
    originalPrice: 6240,
    imageSrc: "/glass/p2.jpg",
  },
  {
    id: 803,
    name: "Glass Door Handle (D-Type, 12 inch)",
    brand: "ASIAN PAINTS",
    price: 1100,
    originalPrice: 1320,
    imageSrc: "/glass/p3.jpg",
  },
  {
    id: 804,
    name: "Shower Enclosure Hinge (90 degree)",
    brand: "ASIAN PAINTS",
    price: 950,
    originalPrice: 1140,
    imageSrc: "/glass/p4.jpg",
  },
  {
    id: 805,
    name: "Spider Fitting for Glass Canopy",
    brand: "ASIAN PAINTS",
    price: 3000,
    originalPrice: 3600,
    imageSrc: "/glass/p5.jpg",
  },
];

export default function GlassFittingsPage() {
  return (
    <ProductListingTemplate
      categoryTitle="Glass Fittings"
      initialActiveCategory="Glass Fittings"
      products={GLASS_FITTING_PRODUCTS}
      categories={CATEGORIES}
    />
  );
}
