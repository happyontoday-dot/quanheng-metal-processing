import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

export const Products: React.FC = () => {
  return (
    <div className="w-full fade-in bg-slate-50 min-h-screen pb-20">
      <div className="relative h-[200px] w-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1e40af 100%)' }}>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-slate-200 max-w-2xl mx-auto text-lg">
            Comprehensive metal fabrication solutions tailored to your industry needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`} className="relative h-80 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-slate-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};