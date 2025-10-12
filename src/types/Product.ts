// src/types/Product.ts

/**
 * Defines the structure for a single product item.
 */
export interface Product {
  /** A unique identifier for the product. */
  id: number;
  /** The full name or description of the product. */
  name: string;
  /** The primary brand of the product, used for filtering. */
  brand: "ASIAN PAINTS" | "JSW PAINTS" | "JK MAXX PAINTS" | "GLASS FITTINGS" | "GLASS Fittings" | "UPVC Pipe and Fittings" | "CPVC Pipe and Fittings" | "PVC Pipe and Fittings" | "Bath Fittings" | "Sanitary Items" ;
  /** The current selling price of the product. */
  price: number;
  /** The original, list price of the product (for discount display). */
  originalPrice: number;
  /** A string representing the source path or URL for the product image. */
  imageSrc: string;
}

/**
 * Defines all available categories displayed in the filter bar.
 */
export type Category =
  | "All Products"
  | "Asian Paints"
  | "JSW Paints"
  | "JK Maxx Paints"
  | "CPVC Pipe and Fittings"
  | "UPVC Pipe and Fittings"
  | "PVC Pipe and Fittings"
  | "Bath Fittings"
  | "Sanitary Items"
  | "Glass Fittings";
