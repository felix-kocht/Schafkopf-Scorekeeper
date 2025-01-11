export function Demo() {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          See It In Action
        </h2>
        <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border border-gray-800">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/kXTM4-y5Eh4?si=Ao9ixyZxP233RsR_" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}