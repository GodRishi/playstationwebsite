import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const characters = [
  {
    name: 'Cloud Strife',
    game: 'Final Fantasy VII Rebirth',
    tagline: 'The Ex-SOLDIER Mercenary',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop', // Placeholder
  },
  {
    name: 'Sam Porter Bridges',
    game: 'Death Stranding 2: On the Beach',
    tagline: 'The Great Deliverer',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2940&auto=format&fit=crop', // Placeholder
  },
  {
    name: 'Spider-Man & Miles Morales',
    game: "Marvel's Spider-Man 2",
    tagline: 'Be Greater. Together.',
    image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2940&auto=format&fit=crop', // Placeholder
  },
  {
    name: 'Kratos',
    game: 'God of War Ragnarök',
    tagline: 'The God of War',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2940&auto=format&fit=crop', // Placeholder
  },
  {
    name: 'Aloy',
    game: 'Horizon Forbidden West',
    tagline: 'The Nora Brave',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2942&auto=format&fit=crop', // Placeholder
  },
  {
    name: 'Jin Sakai',
    game: 'Ghost of Tsushima',
    tagline: 'The Ghost',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop', // Placeholder
  },
  {
    name: 'Nathan Drake',
    game: 'Uncharted',
    tagline: 'The Fortune Hunter',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2940&auto=format&fit=crop', // Placeholder
  },
];

export default function CharacterShowcase() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-32 bg-ps-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-glow">
            ICONIC HEROES
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Step into the shoes of legendary characters and experience their epic journeys on PlayStation 5.
          </p>
        </motion.div>
        
        <div className="hidden md:flex gap-4">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50">
            <ChevronLeft />
          </div>
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50">
            <ChevronRight />
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex gap-6 md:gap-8 px-6 md:px-12 pb-12 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          {characters.map((char, index) => (
            <div
              key={index}
              className="min-w-[85vw] sm:min-w-[300px] md:min-w-[400px] h-[450px] md:h-[500px] rounded-3xl overflow-hidden relative group snap-center shrink-0"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-ps-darker via-ps-darker/40 to-transparent z-10" />
              <img 
                src={char.image} 
                alt={char.name} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                draggable="false"
              />
              
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-ps-blue-light font-bold text-sm tracking-widest uppercase mb-2">
                  {char.game}
                </p>
                <h3 className="text-3xl font-black text-white mb-2 text-glow">
                  {char.name}
                </h3>
                <p className="text-gray-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {char.tagline}
                </p>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-ps-blue-light/50 rounded-3xl z-30 transition-colors duration-500 box-glow-hover pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
