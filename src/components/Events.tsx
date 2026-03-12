import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const events = [
  {
    title: 'PlayStation Tournaments: XP',
    desc: 'A competitive global PlayStation esports experience featuring live matches, community highlights, and team-based tournaments across popular games like Tekken 8 and EA Sports FC.',
    badge: 'LIVE TOURNAMENT',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'Days of Play Celebration',
    desc: 'A special annual PlayStation celebration featuring exclusive game discounts, community activities, and console promotions for PlayStation players worldwide.',
    badge: 'LIMITED TIME EVENT',
    image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'PlayStation Store Seasonal Sale',
    desc: 'Massive seasonal discounts on PlayStation games, DLCs, and digital content available for PS5 and PS4 players.',
    badge: 'STORE EVENT',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'PlayStation Black Friday Event',
    desc: 'One of the biggest gaming sales events of the year with deals on consoles, accessories, and top PlayStation titles.',
    badge: 'BIG SALE EVENT',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'PlayStation Community Gaming Nights',
    desc: 'Community-driven gaming sessions where players compete, explore new releases, and connect with other gamers online and in-store.',
    badge: 'COMMUNITY NIGHT',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2942&auto=format&fit=crop',
  },
  {
    title: 'PlayStation Esports Challenges',
    desc: 'Competitive PlayStation tournaments where players battle in popular titles and compete for leaderboard positions and rewards.',
    badge: 'ESPORTS EVENT',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop',
  },
];

export default function Events() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section id="experience" className="py-32 bg-ps-darker relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-full h-[500px] bg-ps-blue-light/5 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-glow">
            COMMUNITY & EVENTS
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join the global PlayStation community. Participate in tournaments, seasonal sales, and exclusive in-store events.
          </p>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex gap-6 md:gap-8 px-6 md:px-12 pb-12 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          {events.map((event, index) => (
            <div
              key={index}
              className="min-w-[85vw] sm:min-w-[350px] md:min-w-[450px] bg-ps-gray/40 border border-white/10 rounded-3xl overflow-hidden relative group hover:border-ps-blue-light/50 transition-colors duration-500 box-glow-hover flex flex-col snap-center shrink-0"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ps-darker to-transparent" />
                
                {/* Neon Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-ps-blue-light/20 text-ps-blue-light rounded-full text-xs font-bold tracking-widest border border-ps-blue-light/50 box-glow flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-ps-blue-light animate-pulse" />
                    {event.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-ps-blue-light transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-400 font-medium mb-8 flex-1">
                  {event.desc}
                </p>
                
                <button className="w-full py-4 bg-white/5 hover:bg-ps-blue-light text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-white/10 hover:border-ps-blue-light">
                  <span>Join Event</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
