const steps = [
  {
    number: "01",
    title: "Select a game",
    description: "Choose from our supported card games.",
  },
  {
    number: "02",
    title: "Add player names",
    description: "Enter the names of all participants.",
  },
  {
    number: "03",
    title: "Track scores live",
    description: "Record points as the game progresses.",
  },
  {
    number: "04",
    title: "Access game history",
    description: "Review past games and statistics anytime.",
  },
];

export function Steps() {
  return (
    <section className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg bg-navy/50 backdrop-blur-sm border border-gray-800"
            >
              <div className="text-4xl font-bold text-blue-500/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}