import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const accessories = [
  {
    name: 'DualSense Wireless Controller',
    desc: 'Discover a deeper, highly immersive gaming experience.',
    price: '$69.99',
    image: 'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=2940&auto=format&fit=crop',
  },
  {
    name: 'PULSE 3D Wireless Headset',
    desc: 'Enjoy a seamless, wireless experience with a headset fine-tuned for 3D Audio.',
    price: '$99.99',
    image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=2940&auto=format&fit=crop',
  },
  {
    name: 'DualSense Charging Station',
    desc: 'Charge up to two DualSense wireless controllers simultaneously.',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=2940&auto=format&fit=crop',
  },
  {
    name: 'PlayStation VR2',
    desc: 'Escape into worlds that feel, look and sound truly real.',
    price: '$549.99',
    image: 'https://images.unsplash.com/photo-1622819584099-e09a56a2819d?q=80&w=2940&auto=format&fit=crop',
  },
];

export default function Accessories() {
  return (
    <section id="accessories" className="py-32 bg-ps-darker relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-ps-blue-light/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-glow">
            ELEVATE YOUR PLAY
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Enhance your PlayStation 5 experience with official accessories designed for maximum immersion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accessories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-ps-gray/50 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-ps-blue-light/30 transition-colors duration-500"
            >
              <div className="aspect-square p-8 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ps-darker/80 z-10" />
                <img 
                  src={item.image} 
                  alt={item.name} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain relative z-0 group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                />
              </div>
              
              <div className="p-6 relative z-20 -mt-12">
                <h3 className="text-xl font-bold mb-2 group-hover:text-ps-blue-light transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-400 mb-6 line-clamp-2 min-h-[40px]">
                  {item.desc}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-white">{item.price}</span>
                  <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-ps-blue-light group-hover:box-glow transition-all duration-300">
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
