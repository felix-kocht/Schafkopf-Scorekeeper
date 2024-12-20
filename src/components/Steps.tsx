const steps = [
  {
    number: "01",
    title: "Enter Player Names",
    description: "Add all participants quickly and easily.",
  },
  {
    number: "02",
    title: "Track Rounds",
    description: "Record scores as you play with our intuitive interface.",
  },
  {
    number: "03",
    title: "See Results",
    description: "Get instant totals and game statistics.",
  },
];

export function Steps() {
  return (
    <section className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          How It Works
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute top-12 left-0 w-full h-1 bg-gray-800" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-navy-light rounded-full border-4 border-gray-800 flex items-center justify-center">
                    <span className="text-4xl font-bold text-blue-500">{step.number}</span>
                  </div>
                  <div className="pt-20 text-center">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}