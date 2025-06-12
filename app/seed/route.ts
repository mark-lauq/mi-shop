import { seedBanners } from "./banners";

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
  return Promise.all([seedBanners()]);
}
