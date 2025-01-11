import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const handleLearnMore = () => {
    const featuresSection = document.querySelector('#features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center bg-navy">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/lovable-uploads/d0055543-8d6d-4d7b-a368-bbea71d1696c.png"
              alt="Scorekeeper App Interface"
              className="w-[400px] md:w-[500px] lg:w-[600px] transform rotate-[-5deg] drop-shadow-2xl animate-fade-in"
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
                <a href="https://grand-pegasus-1a9e49.netlify.app" className="flex items-center">
                  Try It Now
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 w-full sm:w-auto"
                onClick={handleLearnMore}
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}