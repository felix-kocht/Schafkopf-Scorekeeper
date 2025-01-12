const testimonials = [
  {
    name: "Elias Zorgati",
    quote: "Damit kann ja jeder Otto aufschreiben! \n(English: With this any Fool can keep score!)",
  },
  {
    name: "Michael Frank",
    quote: "Very nice, directly recommended it to another friend who could use this.",
  },
  {
    name: "You",
    quote: "Feel free to submit your opinion to the email felix.koch@mail.de",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          What Players Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-navy-light border border-gray-800 relative"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              </div>
              <div className="pt-8 text-center">
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <h3 className="font-bold">{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}