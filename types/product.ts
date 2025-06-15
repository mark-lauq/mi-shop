export interface Product {
  id: number;
  name: string;
  slug?: string | null;
  description?: string | null;
  pictureUrl: string;
  price: string;
  originalPrice?: string | null;
  hasMultipleSkus?: boolean;
  categoryId?: number;
  tags?: string[];
  staticDetails?: ProductDetailItem[];
}

export interface ProductCategory {
  id: number;
  name: string;
  pictureUrl?: string;
  children?: ProductCategory[];
}

export interface ProductDetailItem {
  name: string;
  children: string[];
}

export interface ProductLabel {
  id: number;
  categoryId: number;
  name: string;
  pictureUrl?: string;
}
