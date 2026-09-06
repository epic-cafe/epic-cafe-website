import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturedSection } from "@/components/featured-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { MenuSection } from "@/components/menu-section";
import { ContactSection } from "@/components/contact-section";
import { FranchiseSection } from "@/components/franchise-section";
import { Footer } from "@/components/footer";
import { WhatsAppFAB } from "@/components/whatsapp-fab";

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <FranchiseSection />
      <FeaturedSection />
      <WhyChooseSection />
      <MenuSection />
      <ContactSection />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
