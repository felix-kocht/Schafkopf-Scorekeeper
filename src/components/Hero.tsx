import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 py-12 md:py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text animate-fade-in leading-tight">
            Track Scores Effortlessly Across Your Games
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in">
            The smart way to keep track of your card game scores. No more paper, no more mistakes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              <Download className="mr-2" /> Download App
            </Button>
            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
              Learn More <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}