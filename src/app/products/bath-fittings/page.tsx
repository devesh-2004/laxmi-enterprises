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

// --- Mock Data for Bath Fittings ---
const BATH_FITTING_PRODUCTS: Product[] = [
  // Using 'ASIAN PAINTS' brand as a placeholder for the Product type constraint
  {
    id: 601,
    name: "Chrome Finish Wall Mixer with Hand Shower",
    brand: "ASIAN PAINTS",
    price: 3500,
    originalPrice: 4200,
    imageSrc: "/bath/p1.jpg",
  },
  {
    id: 602,
    name: "Single Lever Basin Mixer",
    brand: "ASIAN PAINTS",
    price: 2100,
    originalPrice: 2500,
    imageSrc: "/bath/p2.jpg",
  },
  {
    id: 603,
    name: 'Overhead Rain Shower 10"',
    brand: "ASIAN PAINTS",
    price: 4800,
    originalPrice: 5760,
    imageSrc: "/bath/p3.jpg",
  },
  {
    id: 604,
    name: "Pillar Cock Faucet (Half-Turn)",
    brand: "ASIAN PAINTS",
    price: 950,
    originalPrice: 1150,
    imageSrc: "/bath/p4.jpg",
  },
  {
    id: 605,
    name: "Health Faucet Gun Metal Finish",
    brand: "ASIAN PAINTS",
    price: 1100,
    originalPrice: 1320,
    imageSrc: "/bath/p5.jpg",
  },
];

export default function BathFittingsPage() {
  return (
    <ProductListingTemplate
      categoryTitle="Bath Fittings"
      initialActiveCategory="Bath Fittings"
      products={BATH_FITTING_PRODUCTS}
      categories={CATEGORIES}
    />
  );
}
