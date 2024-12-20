import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-light" />
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text animate-fade-in">
            Track Scores Effortlessly Across Your Games
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl animate-fade-in">
            The smart way to keep track of your card game scores. No more paper, no more mistakes.
          </p>
          <div className="flex gap-4 animate-fade-in">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2" /> Download App
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Learn More <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="relative h-[600px] hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-6 scale-95" />
          <div className="absolute inset-0 bg-navy-light rounded-3xl border border-gray-800">
            <img
              src="/placeholder.svg"
              alt="App Screenshot"
              className="w-full h-full object-cover rounded-3xl opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}