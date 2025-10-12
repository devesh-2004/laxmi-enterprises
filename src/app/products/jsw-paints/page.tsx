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

// --- Mock Data for JSW Paints Page ---
const JSW_PRODUCTS: Product[] = [
  {
    id: 101,
    name: "JSW Halo Majestic Interior Emulsion - 1L",
    brand: "JSW PAINTS",
    price: 2200,
    originalPrice: 2640,
    imageSrc: "/jsw/p1.jpg",
  },
  {
    id: 102,
    name: "JSW Halo Majestic Interior Emulsion - 4L",
    brand: "JSW PAINTS",
    price: 4400,
    originalPrice: 5280,
    imageSrc: "/jsw/p2.jpg",
  },
  {
    id: 103,
    name: "JSW Halo Majestic Interior Emulsion - 10L",
    brand: "JSW PAINTS",
    price: 8800,
    originalPrice: 10560,
    imageSrc: "/jsw/p3.jpg",
  },
  {
    id: 104,
    name: "JSW Paints All Weather Coat - 1L",
    brand: "JSW PAINTS",
    price: 1800,
    originalPrice: 2160,
    imageSrc: "/jsw/p4.jpg",
  },
  {
    id: 105,
    name: "JSW Paints All Weather Coat - 4L",
    brand: "JSW PAINTS",
    price: 3600,
    originalPrice: 4320,
    imageSrc: "/jsw/p5.jpg",
  },
  {
    id: 106,
    name: "JSW Paints All Weather Coat - 10L",
    brand: "JSW PAINTS",
    price: 7200,
    originalPrice: 8640,
    imageSrc: "/jsw/p6.jpg",
  },
  // Add more products as needed
];

export default function JSWPaintsPage() {
  return (
    <ProductListingTemplate
      categoryTitle="JSW Paints"
      initialActiveCategory="JSW Paints"
      products={JSW_PRODUCTS}
      categories={CATEGORIES}
    />
  );
}
