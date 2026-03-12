import { motion } from 'motion/react';
import { Cpu, Zap, Headphones, Gamepad2 } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-ps-blue-light" />,
    title: 'Ultra-fast SSD',
    description: 'Maximize your play sessions with near instant load times for installed PS5 games.',
  },
  {
    icon: <Cpu className="w-6 h-6 text-ps-blue-light" />,
    title: 'Ray Tracing',
    description: 'Immerse yourself in worlds with a new level of realism as rays of light are individually simulated.',
  },
  {
    icon: <Gamepad2 className="w-6 h-6 text-ps-blue-light" />,
    title: 'Adaptive Triggers',
    description: 'Experience varying levels of force and tension as you interact with your in-game gear.',
  },
  {
    icon: <Headphones className="w-6 h-6 text-ps-blue-light" />,
    title: 'Immersive 3D Audio',
    description: 'Discover a new acoustic dimension that puts you at the center of the action.',
  },
];

export default function FeaturedExperience() {
  return (
    <section id="ps5" className="relative py-32 bg-ps-darker overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-ps-blue-light/20 rounded-full blur-[150px] -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Console Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-ps-blue-light/30 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=2944&auto=format&fit=crop"
              alt="PlayStation 5 Console"
              loading="lazy"
              decoding="async"
              className="relative z-10 w-full rounded-3xl shadow-2xl border border-white/5 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 glass-panel p-4 rounded-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-ps-blue-light box-glow animate-pulse" />
                <span className="text-sm font-bold tracking-wider">SYSTEM ONLINE</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-glow">
              PLAY HAS NO LIMITS
            </h2>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-ps-blue-light/20 group-hover:border-ps-blue-light/50 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-ps-blue-light transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
