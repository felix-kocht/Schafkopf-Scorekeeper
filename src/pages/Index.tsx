import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Games } from "@/components/Games";
import { Steps } from "@/components/Steps";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Hero />
      <Features />
      <Games />
      <Steps />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;