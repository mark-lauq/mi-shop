import { seedBanners } from "./banners";
import { seedLayoutHeroCategories } from "./layouts";
import {
  seedProducts,
  seedProductCategories,
  seedProductLabels,
} from "./products";

export async function GET() {
  try {
    await seedDatabase();
    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    console.error(error);
    return Response.json(error, { status: 500 });
  }
}

function seedDatabase() {
  return Promise.all([
    seedBanners(),
    seedLayoutHeroCategories(),
    seedProducts(),
    seedProductCategories(),
    seedProductLabels(),
  ]);
}
