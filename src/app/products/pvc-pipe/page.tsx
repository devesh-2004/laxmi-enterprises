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

// --- Mock Data for PVC Pipe and Fittings ---
const PVC_PRODUCTS: Product[] = [
  // Using 'ASIAN PAINTS' brand as a placeholder for the Product type constraint
  {
    id: 501,
    name: 'PVC SWR Pipe 4" (6ft)',
    brand: "ASIAN PAINTS",
    price: 850,
    originalPrice: 1020,
    imageSrc: "/pvc/p1.jpg",
  },
  {
    id: 502,
    name: 'PVC Coupler 3"',
    brand: "ASIAN PAINTS",
    price: 70,
    originalPrice: 90,
    imageSrc: "/pvc/p2.jpg",
  },
  {
    id: 503,
    name: 'PVC Trap with Jali 4"',
    brand: "ASIAN PAINTS",
    price: 120,
    originalPrice: 150,
    imageSrc: "/pvc/p3.jpg",
  },
  {
    id: 504,
    name: 'PVC Threaded Connector 1.5"',
    brand: "ASIAN PAINTS",
    price: 95,
    originalPrice: 125,
    imageSrc: "/pvc/p4.jpg",
  },
];

export default function PVCPipeAndFittingsPage() {
  return (
    <ProductListingTemplate
      categoryTitle="PVC Pipe and Fittings"
      initialActiveCategory="PVC Pipe and Fittings"
      products={PVC_PRODUCTS}
      categories={CATEGORIES}
    />
  );
}
