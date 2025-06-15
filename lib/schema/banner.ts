import {
  mysqlTable,
  mysqlEnum,
  serial,
  int,
  varchar,
  text,
  boolean,
  timestamp,
} from "drizzle-orm/mysql-core";
import { BannerType, TargetType } from "@/enums/banner";

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
