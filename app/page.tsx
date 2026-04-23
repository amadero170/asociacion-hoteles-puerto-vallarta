import HeroSection from "@/components/home/hero";
import StatsSection from "@/components/home/stats";
import ServicesSection from "@/components/home/services";
import HotelsMarquee from "@/components/home/hotels-marquee";
import DestinationSection from "@/components/home/destination";
import CtaSection from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <HotelsMarquee />
      <DestinationSection />
      <CtaSection />
    </>
  );
}
