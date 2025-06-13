"use server";

import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  layoutHeroCategories,
  layoutHeroCategoryItems,
  products,
  productCategories,
  productLabels,
} from "@/lib/schema";
import { LayoutHeroCategoryItemType } from "@/enums/layout";
import type { LayoutHeroCategory } from "@/types/layout";

async function findHeroCategoryItems(
  category: typeof layoutHeroCategories.$inferSelect
) {
  const items = await db
    .select({
      id: layoutHeroCategoryItems.id,
      type: layoutHeroCategoryItems.type,
      associatedId: layoutHeroCategoryItems.associatedId,
      name1: productLabels.name,
      pictureUrl1: productLabels.pictureUrl,
      name2: productCategories.name,
      pictureUrl2: productCategories.pictureUrl,
      name3: products.name,
      pictureUrl3: products.pictureUrl,
      categoryId1: productLabels.categoryId,
      categoryId2: productCategories.parentId,
    })
    .from(layoutHeroCategoryItems)
    .leftJoin(
      productLabels,
      eq(layoutHeroCategoryItems.associatedId, productLabels.id)
    )
    .leftJoin(
      productCategories,
      eq(layoutHeroCategoryItems.associatedId, productCategories.id)
    )
    .leftJoin(products, eq(layoutHeroCategoryItems.associatedId, products.id))
    .where(eq(layoutHeroCategoryItems.parentId, category.id))
    .limit(24);

  return items.map(async (item) => {
    let name: string | null,
      pictureUrl: string | null,
      categoryId: number | null = null,
      parentCategoryId: number | null = null;

    switch (item.type) {
      case LayoutHeroCategoryItemType.LABEL:
        name = item.name1;
        pictureUrl = item.pictureUrl1;
        categoryId = item.categoryId1;
        if (categoryId) {
          parentCategoryId = (
            await db
              .select({ parentId: productCategories.parentId })
              .from(productCategories)
              .where(eq(productCategories.id, categoryId))
              .limit(1)
          )[0]?.parentId;
        }
        break;
      case LayoutHeroCategoryItemType.CATEGORY:
        name = item.name2;
        pictureUrl = item.pictureUrl2;
        categoryId = item.categoryId2;
        break;
      case LayoutHeroCategoryItemType.PRODUCT:
        name = item.name3;
        pictureUrl = item.pictureUrl3;
    }

    return {
      id: item.id,
      type: item.type,
      associatedId: item.associatedId,
      name: name!,
      pictureUrl: pictureUrl!,
      categoryId,
      parentCategoryId,
    };
  });
}

export async function findHeroCategories() {
  const categories = await db.select().from(layoutHeroCategories).limit(10);

  const categoryPromises = categories.map(async (category) => {
    const itemsPromise = await findHeroCategoryItems(category);
    const items = await Promise.all(itemsPromise);

    return {
      ...category,
      children: items,
    } as LayoutHeroCategory;
  });

  return Promise.all(categoryPromises);
}
