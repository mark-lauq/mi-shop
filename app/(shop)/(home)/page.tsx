import { Suspense } from "react";
import Hero, { HeroSkeleton } from "./hero";

export default async function HomePage() {
  return (
    <Suspense fallback={<HeroSkeleton />}>
      <Hero />
    </Suspense>
  );
}
