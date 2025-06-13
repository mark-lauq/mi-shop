import { findBannersByType } from "@/services/banners";
import { BannerType } from "@/enums/banner";
import HeroCarousel from "./hero-carousel";

export default async function Hero() {
  const [banners] = await Promise.all([
    findBannersByType(BannerType.HOME_HERO),
  ]);

  if (!banners.length) {
    return null;
  }

  return (
    <section className="w-primary relative h-[460]">
      <HeroCarousel banners={banners} />
    </section>
  );
}

export function HeroSkeleton() {
  return <div className="w-primary h-[460] animate-pulse bg-gray-200" />;
}
