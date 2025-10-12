import ProductListingTemplate from "@/components/ProductListingTemplate";
import { Product, Category } from "@/types/Product";

// --- Global Category List (from Product.ts) ---
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

// --- Mock Data for JK Maxx Paints (Add your real data here) ---
const JK_MAXX_PRODUCTS: Product[] = [
  {
    id: 201,
    name: "JK Maxx Interior Primer",
    brand: "JK MAXX PAINTS",
    price: 1500,
    originalPrice: 1800,
    imageSrc: "/jk/p1.jpg",
  },
  {
    id: 202,
    name: "JK Maxx Exterior Weather Shield",
    brand: "JK MAXX PAINTS",
    price: 3500,
    originalPrice: 4200,
    imageSrc: "/jk/p2.jpg",
  },
  // ... more JK Maxx products
];

export default function JKMaxxPaintsPage() {
  return (
    <ProductListingTemplate
      categoryTitle="JK Maxx Paints"
      initialActiveCategory="JK Maxx Paints"
      products={JK_MAXX_PRODUCTS}
      categories={CATEGORIES}
    />
  );
}
