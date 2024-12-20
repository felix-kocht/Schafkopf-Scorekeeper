const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Bridge Player",
    image: "/placeholder.svg",
    quote: "This app has completely transformed how we track scores in our weekly bridge club. No more paper sheets!",
  },
  {
    name: "Michael Schmidt",
    role: "Skat Enthusiast",
    image: "/placeholder.svg",
    quote: "Perfect for our Skat rounds. The calculations are always correct, and it's so easy to use.",
  },
  {
    name: "Thomas Weber",
    role: "Card Game Host",
    image: "/placeholder.svg",
    quote: "Whether it's Schafkopf or Poker, this app handles everything perfectly. Best investment for our game nights.",
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
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-500"
                />
              </div>
              <div className="pt-8 text-center">
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}