import { Gamepad2, Dice1, Dice2, Dice3, Dice4, Dice5 } from "lucide-react";

const games = [
  { name: "Schafkopf", players: "4 players", Icon: Dice1 },
  { name: "Skat", players: "3 players", Icon: Dice2 },
  { name: "Bridge", players: "4 players", Icon: Dice3 },
  { name: "Doppelkopf", players: "4 players", Icon: Dice4 },
  { name: "Poker", players: "2-10 players", Icon: Dice5 },
  { name: "Custom Games", players: "Any number", Icon: Gamepad2 },
];

export function Games() {
  return (
    <section className="py-20 bg-navy relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent)]" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Supported Games
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-navy-light border border-gray-800 hover:border-blue-500/50 transition-all duration-300 text-center group"
            >
              <game.Icon className="w-12 h-12 mx-auto mb-4 text-blue-500 group-hover:text-blue-400 transition-colors" />
              <h3 className="text-lg font-semibold mb-2">{game.name}</h3>
              <p className="text-sm text-gray-400">{game.players}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}