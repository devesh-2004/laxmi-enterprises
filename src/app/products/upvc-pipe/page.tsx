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

// --- Mock Data for UPVC Pipe and Fittings ---
const UPVC_PRODUCTS: Product[] = [
  // Using 'ASIAN PAINTS' brand as a placeholder for the Product type constraint
  {
    id: 401,
    name: 'UPVC Pipe Sch 40 2" (20ft)',
    brand: "ASIAN PAINTS",
    price: 1200,
    originalPrice: 1500,
    imageSrc: "/upvc/p1.jpg",
  },
  {
    id: 402,
    name: 'UPVC End Cap 1.5"',
    brand: "ASIAN PAINTS",
    price: 50,
    originalPrice: 65,
    imageSrc: "/upvc/p2.jpg",
  },
  {
    id: 403,
    name: 'UPVC Ball Valve 1"',
    brand: "ASIAN PAINTS",
    price: 250,
    originalPrice: 310,
    imageSrc: "/upvc/p3.jpg",
  },
  {
    id: 404,
    name: 'UPVC 45° Elbow 2"',
    brand: "ASIAN PAINTS",
    price: 140,
    originalPrice: 170,
    imageSrc: "/upvc/p4.jpg",
  },
];

export default function UPVCPipeAndFittingsPage() {
  return (
    <ProductListingTemplate
      categoryTitle="UPVC Pipe and Fittings"
      initialActiveCategory="UPVC Pipe and Fittings"
      products={UPVC_PRODUCTS}
      categories={CATEGORIES}
    />
  );
}
