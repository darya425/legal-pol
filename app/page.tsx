import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { StatsSection } from "@/components/home/stats-section";
import { ReviewsSection } from "@/components/home/reviews-section";
import { ClientsSection } from "@/components/home/clients-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ReviewsSection />
      <ClientsSection />
      <CTASection />
    </>
  );
}
