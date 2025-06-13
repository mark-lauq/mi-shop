import {
  mysqlTable,
  mysqlEnum,
  serial,
  int,
  varchar,
  text,
  boolean,
  timestamp,
  decimal,
  customType,
} from "drizzle-orm/mysql-core";
import { BannerType, TargetType } from "@/enums/banner";
import { LayoutHeroCategoryItemType } from "@/enums/layout";
import { type ProductDetailItem } from "@/types/product";

const customJson = <T>(name: string) =>
  customType<{ data: T; driverData: string }>({
    dataType() {
      return "json";
    },
    toDriver(value: T) {
      return JSON.stringify(value);
    },
    fromDriver(value: string): T {
      return value.trim?.() ? JSON.parse(value) : (value as T);
    },
  })(name);

export const banners = mysqlTable("banners", {
  id: serial("id").primaryKey(),
  type: mysqlEnum("type", [
    BannerType.HOME_BANNER,
    BannerType.HOME_BRICK,
    BannerType.HOME_HERO,
    BannerType.HOME_HERO_SUB,
  ])
    .default(BannerType.HOME_HERO)
    .notNull(),
  src: varchar("src", { length: 200 }).notNull(),
  href: text("href").notNull(),
  target: mysqlEnum("target", [TargetType.BLANK, TargetType.SELF])
    .default(TargetType.BLANK)
    .notNull(),
  associatedId: int("associated_id"),
  sortNo: int("sort_no").default(0).notNull(),
  enabled: boolean("enabled").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
});

export const layoutHeroCategories = mysqlTable("layout_hero_categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
});

export const layoutHeroCategoryItems = mysqlTable(
  "layout_hero_category_items",
  {
    id: serial("id").primaryKey(),
    parentId: int("parent_id").notNull(),
    type: mysqlEnum("type", [
      LayoutHeroCategoryItemType.PRODUCT,
      LayoutHeroCategoryItemType.CATEGORY,
      LayoutHeroCategoryItemType.LABEL,
    ]).notNull(),
    associatedId: int("associated_id").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
  }
);

export const products = mysqlTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  slug: varchar("slug", { length: 100 }).unique(),
  pictureUrl: varchar("picture_url", { length: 200 }).notNull(),
  description: text("description"),
  price: decimal("price", { precision: 10, scale: 2 })
    .default("0.00")
    .notNull(),
  originalPrice: decimal("original_price", { precision: 10, scale: 2 }),
  hasMultipleSkus: boolean("has_multiple_skus").default(false).notNull(),
  sales: int("sales").default(0).notNull(),
  rating: int("rating").default(5).notNull(),
  categoryId: int("category_id").notNull(),
  staticDetails: customJson<ProductDetailItem[]>("static_details"),
  enabled: boolean("enabled").default(true).notNull(),
  sortNo: int("sort_no").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
});

export const productCategories = mysqlTable("product_categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 32 }).notNull().unique(),
  parentId: int("parent_id").default(0).notNull(),
  pictureUrl: varchar("picture_url", { length: 200 }),
  sortNo: int("sort_no").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
});

export const productLabels = mysqlTable("product_labels", {
  id: serial("id").primaryKey(),
  categoryId: int("category_id").notNull(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  pictureUrl: varchar("picture_url", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
});
