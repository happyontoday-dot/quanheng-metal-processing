import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-wider">QUANHENG</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A premier partner in precision metal fabrication. We deliver excellence in stamping, laser cutting, and custom metal solutions for global industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-200">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-slate-400 hover:text-accent transition-colors text-sm flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-200">Our Capabilities</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="hover:text-white transition-colors cursor-default">Metal Stamping</li>
              <li className="hover:text-white transition-colors cursor-default">Laser Cutting</li>
              <li className="hover:text-white transition-colors cursor-default">CNC Punching</li>
              <li className="hover:text-white transition-colors cursor-default">Bending & Forming</li>
              <li className="hover:text-white transition-colors cursor-default">Surface Finishing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-200">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start text-slate-400">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 shrink-0 text-accent" />
                <span className="text-sm">
                  123 Industrial Park Road,<br />
                  Shenzhen, Guangdong,<br />
                  China
                </span>
              </div>
              <div className="flex items-center text-slate-400">
                <Phone className="w-5 h-5 mr-3 shrink-0 text-accent" />
                <span className="text-sm">+86 123 4567 8900</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Mail className="w-5 h-5 mr-3 shrink-0 text-accent" />
                <span className="text-sm">sales@quanheng-metal.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Quanheng Metal Processing Factory. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span className="cursor-pointer hover:text-slate-300">Privacy Policy</span>
            <span className="cursor-pointer hover:text-slate-300">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};