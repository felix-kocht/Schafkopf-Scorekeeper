import { Zap, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Quick Entry with Autofill",
    description: "Enter scores rapidly with smart autofill suggestions based on common patterns.",
  },
  {
    icon: BarChart3,
    title: "Complete Overview",
    description: "Get instant insights into game progress and total scores.",
  },
  {
    icon: Users,
    title: "Flexible Player Support",
    description: "Support for 2-7 players and custom amount tracking for any game type.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)]" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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