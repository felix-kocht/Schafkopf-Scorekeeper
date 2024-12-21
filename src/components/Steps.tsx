const steps = [
  {
    number: "01",
    title: "Enter Player Names",
    description: "Add all participants quickly and easily.",
    image: "/lovable-uploads/d8ade3d0-1f74-4d61-aea6-92e4262486d9.png"
  },
  {
    number: "02",
    title: "Track Rounds",
    description: "Record scores as you play with our intuitive interface.",
    image: "/lovable-uploads/6234c2d0-1e1e-43f1-9c10-66d999301d12.png"
  },
  {
    number: "03",
    title: "See Results",
    description: "Get instant totals and game statistics.",
    image: "/lovable-uploads/fc89911c-613d-4134-af66-6d034020e324.png"
  },
];

export function Steps() {
  return (
    <section className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          How It Works
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute top-12 left-0 w-full h-1 bg-gray-800" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-navy-light rounded-full border-4 border-gray-800 flex items-center justify-center">
                    <span className="text-4xl font-bold text-blue-500">{step.number}</span>
                  </div>
                  <div className="pt-20 text-center">
                    <div className="mb-6">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full max-w-[300px] mx-auto rounded-lg shadow-xl"
                      />
                    </div>
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