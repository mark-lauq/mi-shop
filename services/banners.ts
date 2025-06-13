import { eq } from "drizzle-orm";
import type { BannerType } from "@/enums/banner";
import { db } from "@/lib/db";
import { banners } from "@/lib/schema";

export function findBannersByType(type: BannerType, limit: number = -1) {
  return db
    .select()
    .from(banners)
    .where(eq(banners.type, type))
    .orderBy(banners.sortNo)
    .limit(limit);
}
