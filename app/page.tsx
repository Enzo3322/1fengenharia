import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { TrustBar } from "@/components/trust-bar";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ProcessSection } from "@/components/process-section";
import { AreasSection } from "@/components/areas-section";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { WhatsappFab } from "@/components/whatsapp-fab";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <AreasSection />
        <CtaBanner />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
