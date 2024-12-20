import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: ["Basic score tracking", "Up to 3 games", "7-day history"],
  },
  {
    name: "Pro",
    price: "$5/mo",
    features: [
      "Unlimited games",
      "30-day history",
      "Statistics & analytics",
      "Export data",
    ],
  },
  {
    name: "Premium",
    price: "$12/mo",
    features: [
      "Everything in Pro",
      "Unlimited history",
      "Custom game types",
      "Priority support",
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-navy-light border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6 text-blue-500">
                {plan.price}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}