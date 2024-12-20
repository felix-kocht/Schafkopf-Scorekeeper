import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-light" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
          Track Scores Effortlessly Across Your Favorite Games
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
          Perfect for games like Schafkopf, Skat, Bridge, and more.
        </p>
        <div className="flex gap-4 justify-center animate-fade-in">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Tracking Now
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            Learn More <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}