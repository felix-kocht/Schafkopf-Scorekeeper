import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-navy">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/lovable-uploads/b8090340-c0d2-477b-bbd0-a07115892556.png"
              alt="Scorekeeper App Interface"
              className="w-64 md:w-80 h-auto transform rotate-[-5deg] drop-shadow-2xl animate-fade-in"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text animate-fade-in leading-tight">
              Track Scores Effortlessly Across Your Games
            </h1>
            <p className="text-lg md:text-xl text-gray-300 animate-fade-in">
              The smart way to keep track of your card game scores. No more paper, no more mistakes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in">
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
    </div>
  );
}