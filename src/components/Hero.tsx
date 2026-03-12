import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video / Image Fallback */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ps-darker/60 via-ps-darker/40 to-ps-darker z-10" />
        <img 
          src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2940&auto=format&fit=crop" 
          alt="PS5 Console Background" 
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        {/* Light beam effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-ps-blue-light/10 blur-[120px] -skew-x-12 z-10 mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/2 bg-blue-500/10 blur-[100px] z-10 mix-blend-screen" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto bg-ps-blue-light/20 rounded-2xl flex items-center justify-center box-glow mb-6 backdrop-blur-sm border border-ps-blue-light/30">
            <svg viewBox="0 0 24 24" fill="white" className="w-12 h-12">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 text-glow">
            PLAYSTATION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-ps-blue-light">
              SHOWROOM
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide max-w-2xl mx-auto">
            Experience the Power of PlayStation 5 in Kolkata
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-6 mt-12"
        >
          <a href="#games" className="group relative px-8 py-4 bg-white text-ps-darker font-bold rounded-full overflow-hidden flex items-center gap-2 transition-all hover:scale-105">
            <span className="relative z-10">Explore Games</span>
            <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </a>
          
          <a href="#visit" className="group px-8 py-4 bg-ps-blue-light/10 text-white font-bold rounded-full border border-ps-blue-light/30 flex items-center gap-2 transition-all hover:bg-ps-blue-light/20 hover:box-glow hover:scale-105 backdrop-blur-md">
            <Play size={20} className="fill-white" />
            <span>Visit Showroom</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-ps-blue-light box-glow"
          />
        </div>
      </motion.div>
    </section>
  );
}
