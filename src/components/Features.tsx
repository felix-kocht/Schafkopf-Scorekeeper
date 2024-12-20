import { Clock, Gamepad, Layout, Smartphone } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Track scores as they happen with instant synchronization.",
  },
  {
    icon: Gamepad,
    title: "Multi-game Support",
    description: "One tool for all your favorite card games.",
  },
  {
    icon: Layout,
    title: "Simple Interface",
    description: "Clean and intuitive design for effortless score tracking.",
  },
  {
    icon: Smartphone,
    title: "Cross-platform Access",
    description: "Use on any device, anywhere, anytime.",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Everything You Need
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-navy/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}