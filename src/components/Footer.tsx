import { motion } from 'motion/react';
import { Instagram, Twitter, Youtube, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-ps-dark border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 w-1/2 h-32 bg-ps-blue-light/10 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/00/PlayStation_logo.svg" 
                  alt="PlayStation" 
                  className="w-8 h-8 invert"
                />
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-white">
                PS SHOWROOM
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The ultimate destination for PlayStation fans in Kolkata. Experience the future of gaming today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-ps-blue-light transition-all box-glow-hover">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-ps-blue-light transition-all box-glow-hover">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-ps-blue-light transition-all box-glow-hover">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-ps-blue-light transition-all box-glow-hover">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-4">
              {['Home', 'Games', 'PS5 Console', 'Accessories', 'Game Zones', 'Events'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-ps-blue-light transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider">SUPPORT</h4>
            <ul className="space-y-4">
              {['FAQ', 'Warranty', 'Returns', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-ps-blue-light transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider">CONTACT US</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-ps-blue-light shrink-0 mt-0.5" />
                <span>Ganesh Chandra Avenue, Near Chandni Chowk Metro Station Gate No. 3, Kolkata, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-ps-blue-light shrink-0" />
                <span>+91 98300 33535</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-ps-blue-light shrink-0" />
                <span>info@psshowroomkolkata.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PlayStation Exclusive Showroom Kolkata. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            "PlayStation", "PS5", "DualSense" and "Play Has No Limits" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
