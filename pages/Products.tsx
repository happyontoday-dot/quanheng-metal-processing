import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

export const Products: React.FC = () => {
  return (
    <div className="w-full fade-in bg-slate-50 min-h-screen pb-20">
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Comprehensive metal fabrication solutions tailored to your industry needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group">
              <Link to={`/services/${service.id}`} className="block h-56 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </Link>
              <div className="p-6 flex-grow flex flex-col">
                <Link to={`/services/${service.id}`}>
                  <h3 className="text-xl font-bold text-primary mb-3 min-h-[56px] flex items-center hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                </Link>

                {service.description && (
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description.substring(0, 100)}...
                  </p>
                )}

                {service.features && (
                  <ul className="space-y-2 mb-4 flex-grow">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <span className="text-accent mr-2 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-xs text-slate-400 italic pl-3">+ {service.features.length - 3} more...</li>
                    )}
                  </ul>
                )}

                <div className="border-t border-slate-100 pt-4 mt-auto">
                  <Link
                    to={`/services/${service.id}`}
                    className="text-accent text-sm font-semibold cursor-pointer hover:text-sky-700 flex items-center"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};