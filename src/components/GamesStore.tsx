import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Play, X } from 'lucide-react';

const games = [
  { title: 'God of War: Son of Sparta', version: 'PS5', price: '$69.99', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop', genre: 'Action-Adventure', year: '2026', mode: 'Single-player', desc: 'A new chapter begins as Atreus embarks on his own journey.' },
  { title: 'Crimson Desert', version: 'PS5', price: '$69.99', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop', genre: 'Open World RPG', year: '2025', mode: 'Single-player', desc: 'An epic open-world action-adventure set in a brutal fantasy world.' },
  { title: 'High on Life 2', version: 'PS5', price: '$59.99', image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=800&auto=format&fit=crop', genre: 'FPS', year: '2026', mode: 'Single-player', desc: 'The talking guns are back in this hilarious sci-fi shooter.' },
  { title: 'Madden NFL 2026', version: 'PS5 / PS4', price: '$69.99', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop', genre: 'Sports', year: '2025', mode: 'Multiplayer', desc: 'Experience the most realistic football simulation ever created.' },
  { title: 'Marathon', version: 'PS5', price: 'Free to Play', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop', genre: 'Extraction Shooter', year: '2025', mode: 'Multiplayer', desc: 'A sci-fi PvP extraction shooter from the creators of Halo and Destiny.' },
  { title: 'Death Stranding 2: On the Beach', version: 'PS5', price: '$69.99', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop', genre: 'Action', year: '2025', mode: 'Single-player', desc: 'Should we have connected? Sam Bridges returns in a new journey.' },
  { title: 'Ghost of Yōtei', version: 'PS5', price: '$69.99', image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=800&auto=format&fit=crop', genre: 'Action-Adventure', year: '2025', mode: 'Single-player', desc: 'A new Ghost rises in the lands surrounding Mount Yōtei.' },
  { title: 'Stellar Blade', version: 'PS5', price: '$69.99', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop', genre: 'Action-Adventure', year: '2024', mode: 'Single-player', desc: 'Reclaim Earth for humankind in this visually stunning action game.' },
  { title: 'Helldivers 2', version: 'PS5', price: '$39.99', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop', genre: 'Co-op Shooter', year: '2024', mode: 'Multiplayer', desc: 'Fight for freedom across a hostile galaxy in this fast-paced shooter.' },
  { title: 'Resident Evil Requiem', version: 'PS5', price: '$69.99', image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=800&auto=format&fit=crop', genre: 'Survival Horror', year: '2026', mode: 'Single-player', desc: 'The ultimate survival horror experience returns.' },
  { title: "Marvel's Spider-Man 2", version: 'PS5', price: '$69.99', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop', genre: 'Action', year: '2023', mode: 'Single-player', desc: 'Spider-Men Peter Parker and Miles Morales face the ultimate test.' },
  { title: 'God of War Ragnarök', version: 'PS5 / PS4', price: '$69.99', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop', genre: 'Action-Adventure', year: '2022', mode: 'Single-player', desc: 'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go.' },
];

export default function GamesStore() {
  const [selectedGame, setSelectedGame] = useState<typeof games[0] | null>(null);

  return (
    <section id="games" className="py-32 bg-ps-dark relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-glow">
            LATEST RELEASES
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover the most anticipated titles and critically acclaimed masterpieces available now.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative rounded-2xl overflow-hidden bg-ps-gray border border-white/5 box-glow-hover cursor-pointer"
              onClick={() => setSelectedGame(game)}
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ps-darker via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-widest border border-white/20">
                    {game.version}
                  </span>
                </div>
              </div>

              <div className="p-6 relative z-10 bg-gradient-to-t from-ps-darker to-ps-darker/90">
                <h3 className="text-xl font-bold mb-2 truncate group-hover:text-ps-blue-light transition-colors">
                  {game.title}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-medium text-gray-300">{game.price}</span>
                  <button className="w-10 h-10 rounded-full bg-ps-blue-light/20 flex items-center justify-center text-ps-blue-light group-hover:bg-ps-blue-light group-hover:text-white transition-all duration-300">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Game Modal */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedGame(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-ps-darker border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 shadow-2xl relative max-h-[90vh] overflow-y-auto hide-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-ps-blue-light transition-colors"
                onClick={() => setSelectedGame(null)}
              >
                <X size={20} />
              </button>

              <div className="aspect-[3/4] md:aspect-auto relative">
                <img src={selectedGame.image} alt={selectedGame.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ps-darker to-transparent md:bg-gradient-to-r" />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="px-3 py-1 bg-ps-blue-light/20 text-ps-blue-light rounded-full text-xs font-bold tracking-widest border border-ps-blue-light/30 w-max mb-4">
                  {selectedGame.version}
                </span>
                <h3 className="text-3xl md:text-4xl font-black mb-4 text-glow">{selectedGame.title}</h3>
                
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400 font-medium">
                  <span className="px-3 py-1 bg-white/5 rounded-md border border-white/10">{selectedGame.genre}</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md border border-white/10">{selectedGame.year}</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md border border-white/10">{selectedGame.mode}</span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8">
                  {selectedGame.desc}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <button className="flex-1 py-4 bg-ps-blue-light text-white font-bold rounded-xl hover:bg-ps-blue-light/80 transition-colors box-glow flex items-center justify-center gap-2">
                    <ShoppingCart size={20} />
                    {selectedGame.price}
                  </button>
                  <button className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20">
                    <Play size={20} className="text-white fill-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
