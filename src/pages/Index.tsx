import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Demo } from "@/components/Demo";
import { Features } from "@/components/Features";
import { Games } from "@/components/Games";
import { Steps } from "@/components/Steps";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Hero />
      <Problems />
      <Demo />
      <Features />
      <Games />
      <Steps />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;