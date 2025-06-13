import { LayoutHeroCategoryItemType } from "@/enums/layout";

export interface LayoutHeroCategory {
  id: number;
  name: string;
  children: LayoutHeroCategoryItem[];
}

export interface LayoutHeroCategoryItem {
  id: number;
  associatedId: number;
  name: string;
  pictureUrl: string;
  type: LayoutHeroCategoryItemType;
  categoryId: number | null;
  parentCategoryId: number | null;
}
