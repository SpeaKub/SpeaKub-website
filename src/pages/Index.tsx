import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { AnxietyImpactSection } from "@/components/AnxietyImpactSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { Plans } from "@/components/Plans";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AnxietyImpactSection />
        <BenefitsSection />
        <Plans />
        <ComparisonTable />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
