import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import WhyChooseSection from "../components/WhyChooseSection";
import ApplicationsSection from "../components/ApplicationsSection";
import QualitySection from "../components/QualitySection";
import ContactCTA from "../components/ContactCTA";
import VideoSection from "../components/VideoSection";

export default function Home() {
  return (
    <main>
      <Hero />

      <StatsSection />

      <AboutSection />

      <ProductsSection />

      <WhyChooseSection />

      <ApplicationsSection />

      <QualitySection />
      <VideoSection />

      <ContactCTA />
    </main>
  );
}