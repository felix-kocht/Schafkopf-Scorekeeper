import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 gradient-text">
          Pricing
        </h2>
        <h3 className="text-2xl font-semibold text-center text-green-400 mb-4">
          Currently Free
        </h3>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-lg text-gray-300">
            We're currently in the testing phase and offering the scorekeeper completely free of charge. We'd love to hear your feedback via email though (
            <a href="mailto:felix.koch@mail.de" className="text-blue-400 hover:text-blue-300">
              felix.koch@mail.de
            </a>
            ), and we respond to every message!
          </p>
          <p className="text-gray-400">
            While the tool is free during our testing phase, this might change in the future. Take advantage of this opportunity to try out all features without any cost!
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="https://grand-pegasus-1a9e49.netlify.app" className="flex items-center text-white">
                Try It Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}