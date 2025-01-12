import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section className="py-20 bg-navy-light relative overflow-hidden">
      {/* Background gradient similar to other sections */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 gradient-text">
          Pricing
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-navy/50 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-green-400 mb-2 animate-fade-in">
                  Currently Free
                </h3>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-6" />
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  We're currently in the testing phase and offering the scorekeeper completely free of charge. We'd love to hear your feedback via email (
                  <a 
                    href="mailto:felix.koch@mail.de" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    felix.koch@mail.de
                  </a>
                  ), and we respond to every message!
                </p>
                
                <p className="text-gray-400 leading-relaxed">
                  While the tool is free during our testing phase, this might change in the future. Take advantage of this opportunity to try out all features without any cost!
                </p>
              </div>
              
              <div className="pt-6">
                <div className="flex justify-center">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                  >
                    <a 
                      href="https://grand-pegasus-1a9e49.netlify.app" 
                      className="flex items-center text-white"
                    >
                      Try It Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}