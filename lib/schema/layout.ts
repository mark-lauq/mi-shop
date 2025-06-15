import {
  mysqlTable,
  mysqlEnum,
  serial,
  int,
  varchar,
  timestamp,
} from "drizzle-orm/mysql-core";
import { LayoutHeroCategoryItemType } from "@/enums/layout";

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
