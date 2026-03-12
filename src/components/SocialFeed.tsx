import { motion } from 'motion/react';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const socialPosts = [
  {
    type: 'video',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800&auto=format&fit=crop',
    platform: <Youtube size={20} className="text-red-500" />,
    text: 'Unboxing the new PS5 Pro at our Kolkata Showroom! Come check it out.',
  },
  {
    type: 'image',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    platform: <Instagram size={20} className="text-pink-500" />,
    text: 'God of War Ragnarök tournament happening this weekend. Register now!',
  },
  {
    type: 'image',
    image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=800&auto=format&fit=crop',
    platform: <Twitter size={20} className="text-blue-400" />,
    text: 'New restock alert! DualSense Edge controllers are back in stock.',
  },
  {
    type: 'image',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
    platform: <Facebook size={20} className="text-blue-600" />,
    text: 'Join us for the midnight launch of Marvel\'s Spider-Man 2.',
  },
];

export default function SocialFeed() {
  return (
    <section id="social" className="py-32 bg-ps-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-glow">
            JOIN THE CONVERSATION
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Follow us on social media for the latest updates, game releases, and showroom events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-ps-gray/30 border border-white/5 box-glow-hover"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt="Social Post" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ps-darker via-ps-darker/50 to-transparent" />
                
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  {post.platform}
                </div>
              </div>

              <div className="p-6 relative z-10 -mt-16">
                <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors line-clamp-3">
                  {post.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
