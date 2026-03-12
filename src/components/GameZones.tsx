import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const zones = [
  {
    title: 'PS5 Demo Gaming Zone',
    desc: 'Experience the latest titles on 4K OLED displays with immersive 3D Audio.',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'Multiplayer Battle Zone',
    desc: 'Compete with friends in high-octane multiplayer setups with zero latency.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'VR Gaming Experience',
    desc: 'Step into new realities with our dedicated PlayStation VR2 stations.',
    image: 'https://images.unsplash.com/photo-1622819584099-e09a56a2819d?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'Racing Simulator Setup',
    desc: 'Feel every turn with professional racing wheels and Gran Turismo 7.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2942&auto=format&fit=crop',
  },
  {
    title: 'Lounge Gaming Area',
    desc: 'Relax and play in our premium lounge seating designed for comfort.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2940&auto=format&fit=crop',
  },
];

export default function GameZones() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section id="game-zones" className="py-32 bg-ps-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-glow">
            SHOWROOM EXPERIENCE
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Explore our state-of-the-art gaming zones designed for the ultimate PlayStation experience.
          </p>
        </motion.div>
        
        <div className="hidden md:flex gap-4">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 transition-colors cursor-pointer">
            <ChevronLeft />
          </div>
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 transition-colors cursor-pointer">
            <ChevronRight />
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex gap-6 md:gap-8 px-6 md:px-12 pb-12 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          {zones.map((zone, index) => (
            <div
              key={index}
              className="min-w-[85vw] sm:min-w-[350px] md:min-w-[500px] h-[350px] md:h-[400px] rounded-3xl overflow-hidden relative group snap-center shrink-0"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-ps-darker via-ps-darker/40 to-transparent z-10" />
              <img 
                src={zone.image} 
                alt={zone.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                draggable="false"
              />
              
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-ps-blue-light transition-colors">
                  {zone.title}
                </h3>
                <p className="text-gray-300 font-medium">
                  {zone.desc}
                </p>
              </div>
              
              {/* Ambient Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-ps-blue-light/50 rounded-3xl z-30 transition-colors duration-500 box-glow-hover pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
