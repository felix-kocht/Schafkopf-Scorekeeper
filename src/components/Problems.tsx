import { XCircle, Calculator, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: XCircle,
    title: "No More Pen & Paper",
    description: "Stop searching for paper and pens. Everything is digital and always available.",
  },
  {
    icon: Calculator,
    title: "Complex Calculations Solved",
    description: "Let the app handle all calculations. No more mental math required.",
  },
  {
    icon: AlertTriangle,
    title: "Eliminate Errors",
    description: "Prevent mistakes in final results with automatic verification.",
  },
];

export function Problems() {
  return (
    <section className="py-20 bg-gradient-to-b from-navy-light to-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Problems</span> We Solve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl bg-navy-light/50 backdrop-blur-sm border border-gray-800 group hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 p-4 bg-navy-light rounded-2xl border border-gray-800 group-hover:border-blue-500/50 transition-all duration-300">
                <problem.icon className="w-8 h-8 text-blue-500" />
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold mb-4">{problem.title}</h3>
                <p className="text-gray-400">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}