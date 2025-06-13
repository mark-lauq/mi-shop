import { Suspense } from "react";
import Hero, { HeroSkeleton } from "./hero";
import HeroSub from "./hero-sub";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <HeroSub />
    </>
  );
}
