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

// --- Mock Data for Sanitary Items ---
const SANITARY_PRODUCTS: Product[] = [
  // Using 'ASIAN PAINTS' brand as a placeholder for the Product type constraint
  {
    id: 701,
    name: "Floor Mounted Western Toilet (White)",
    brand: "ASIAN PAINTS",
    price: 6500,
    originalPrice: 7800,
    imageSrc: "/sanitary/p1.jpg",
  },
  {
    id: 702,
    name: "Pedestal Wash Basin (Ivory)",
    brand: "ASIAN PAINTS",
    price: 3200,
    originalPrice: 3840,
    imageSrc: "/sanitary/p2.jpg",
  },
  {
    id: 703,
    name: "Ceramic Urinal (Small)",
    brand: "ASIAN PAINTS",
    price: 4100,
    originalPrice: 4920,
    imageSrc: "/sanitary/p3.jpg",
  },
  {
    id: 704,
    name: "Concealed Cistern Dual Flush",
    brand: "ASIAN PAINTS",
    price: 5500,
    originalPrice: 6600,
    imageSrc: "/sanitary/p4.jpg",
  },
  {
    id: 705,
    name: "Squatting Pan (Indian Style)",
    brand: "ASIAN PAINTS",
    price: 1800,
    originalPrice: 2160,
    imageSrc: "/sanitary/p5.jpg",
  },
];

export default function SanitaryItemsPage() {
  return (
    <ProductListingTemplate
      categoryTitle="Sanitary Items"
      initialActiveCategory="Sanitary Items"
      products={SANITARY_PRODUCTS}
      categories={CATEGORIES}
    />
  );
}
