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

// --- Mock Data for CPVC Pipe and Fittings ---
const CPVC_PRODUCTS: Product[] = [
  // Using 'ASIAN PAINTS' brand as a placeholder for the Product type constraint
  {
    id: 301,
    name: 'CPVC Pipe Class 1 1/2" (10ft)',
    brand: "ASIAN PAINTS",
    price: 650,
    originalPrice: 800,
    imageSrc: "/cpvc/p1.jpg",
  },
  {
    id: 302,
    name: 'CPVC Elbow 90° 1"',
    brand: "ASIAN PAINTS",
    price: 85,
    originalPrice: 105,
    imageSrc: "/cpvc/p2.jpg",
  },
  {
    id: 303,
    name: 'CPVC Union 3/4"',
    brand: "ASIAN PAINTS",
    price: 150,
    originalPrice: 180,
    imageSrc: "/cpvc/p3.jpg",
  },
  {
    id: 304,
    name: 'CPVC Reducer Tee 1" x 3/4"',
    brand: "ASIAN PAINTS",
    price: 110,
    originalPrice: 130,
    imageSrc: "/cpvc/p4.jpg",
  },
  {
    id: 305,
    name: "CPVC Solvent Cement 50ml",
    brand: "ASIAN PAINTS",
    price: 90,
    originalPrice: 115,
    imageSrc: "/cpvc/p5.jpg",
  },
];

export default function CPVCPipeAndFittingsPage() {
  return (
    <ProductListingTemplate
      categoryTitle="CPVC Pipe and Fittings"
      initialActiveCategory="CPVC Pipe and Fittings"
      products={CPVC_PRODUCTS}
      categories={CATEGORIES}
    />
  );
}
