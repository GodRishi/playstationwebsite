import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';

export default function VisitShowroom() {
  return (
    <section id="visit" className="py-32 bg-ps-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-glow">
              VISIT OUR SHOWROOM
            </h2>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Experience the future of gaming in person. Try out the latest PS5 consoles, test accessories, and immerse yourself in our dedicated gaming zones.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-ps-blue-light/20 flex items-center justify-center text-ps-blue-light shrink-0 box-glow border border-ps-blue-light/30">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Location</h4>
                  <p className="text-gray-400 leading-relaxed">
                    PlayStation Exclusive Showroom<br />
                    Ganesh Chandra Avenue<br />
                    Near Chandni Chowk Metro Station Gate No. 3<br />
                    Kolkata, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-ps-blue-light/20 flex items-center justify-center text-ps-blue-light shrink-0 box-glow border border-ps-blue-light/30">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Contact</h4>
                  <p className="text-gray-400 text-lg">+91 98300 33535</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-4 bg-ps-blue-light text-white font-bold rounded-xl hover:bg-ps-blue-light/80 transition-colors box-glow flex items-center gap-2 border border-ps-blue-light/50 hover:scale-105">
                <Navigation size={20} />
                Get Directions
              </button>
              <button className="px-6 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2 border border-white/20 hover:scale-105">
                <Phone size={20} />
                Call Now
              </button>
              <button className="px-6 py-4 bg-[#25D366]/20 text-[#25D366] font-bold rounded-xl hover:bg-[#25D366]/30 transition-colors flex items-center gap-2 border border-[#25D366]/50 hover:scale-105">
                <MessageCircle size={20} />
                WhatsApp
              </button>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 group box-glow-hover transition-all duration-500"
          >
            <div className="absolute inset-0 bg-ps-blue-light/10 mix-blend-overlay pointer-events-none z-10" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.148181464971!2d88.35338161535898!3d22.56611398518598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a06b000001%3A0x8e8b8b8b8b8b8b8b!2sGanesh%20Chandra%20Ave%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-0"
            />
            {/* Overlay to make it look more integrated */}
            <div className="absolute inset-0 pointer-events-none border-4 border-transparent group-hover:border-ps-blue-light/30 rounded-3xl transition-colors duration-500 z-20" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
