import { Card } from "lucide-react";

const games = [
  { name: "Schafkopf", players: "4 players" },
  { name: "Skat", players: "3 players" },
  { name: "Hearts", players: "4 players" },
  { name: "Spades", players: "4 players" },
];

export function Games() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Works Seamlessly for These Games
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-navy-light border border-gray-800 hover:border-blue-500/50 transition-all duration-300 text-center group"
            >
              <Card className="w-12 h-12 mx-auto mb-4 text-blue-500 group-hover:text-blue-400 transition-colors" />
              <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
              <p className="text-gray-400">{game.players}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}