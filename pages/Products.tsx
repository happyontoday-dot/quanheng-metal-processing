import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowRight } from 'lucide-react';

export const Products: React.FC = () => {
  return (
    <div className="w-full fade-in bg-slate-50 min-h-screen pb-20">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-orange-300 text-xs font-semibold mb-6 tracking-widest uppercase">
            Full-Service Metal Fabrication
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            From precision stamping to CNC machining and laser cutting — comprehensive metal fabrication solutions tailored to your needs.
          </p>
          <div className="mt-8">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-orange-600 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer text-sm"
            >
              Request a Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            let targetUrl = `/services/${service.id}`;
            if (service.id === '3d-printing-service') targetUrl = '/3d-printing-service';
            if (service.id === 'enclosures-housings') targetUrl = '/products/metal-enclosures';

            return (
              <Link
                key={service.id}
                to={targetUrl}
                className="relative h-80 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  {service.description && (
                    <p className="text-slate-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3">
                      {service.description}
                    </p>
                  )}
                  <div className="inline-flex items-center gap-1 text-accent text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
