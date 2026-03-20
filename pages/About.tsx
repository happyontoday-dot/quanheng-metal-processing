import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Package, ChevronRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="w-full fade-in bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-primary opacity-60"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-accent text-xs font-semibold mb-6 tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" aria-hidden="true" /> Est. 1993
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">About QuMetal</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Leading the way in precision metal manufacturing with over three decades of excellence.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: '30+', label: 'Years Experience', icon: <Award className="w-5 h-5 text-accent" aria-hidden="true" /> },
              { value: '50+', label: 'Material Types', icon: <Package className="w-5 h-5 text-accent" aria-hidden="true" /> },
              { value: '200+', label: 'Global Clients', icon: <Users className="w-5 h-5 text-accent" aria-hidden="true" /> },
              { value: 'ISO', label: '9001:2015 Certified', icon: <Award className="w-5 h-5 text-accent" aria-hidden="true" /> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-2 py-8 px-4">
                {stat.icon}
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-400 text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="relative">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-accent/30 w-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Who We Are</h2>
          </div>
          <div className="text-slate-600 leading-loose text-lg space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed border-l-4 border-accent pl-6 py-2 bg-slate-50 rounded-r-xl">
              Founded in 1993, QuMetal (Cangzhou Quanheng Metals Ltd) is a professional metal manufacturing factory located in Cangzhou, China—one of the country's most important industrial hubs for metal processing and fabrication.
            </p>
            <p>
              Cangzhou is home to thousands of metalworking and manufacturing enterprises, forming a highly mature and efficient industrial ecosystem. This region brings together a large number of skilled technicians, experienced engineers, and specialized suppliers, enabling fast collaboration, stable production capacity, and strong cost control.
            </p>
            <p>
              With more than 30 years of practical experience, we specialize in custom metal parts and sheet metal fabrication, supporting projects from prototyping through full-scale production. We process over 50 types of metals and engineering materials, including steel, stainless steel, aluminum, and copper.
            </p>
            <p>
              Our engineering and production teams focus on design optimization and manufacturability, helping customers lower costs, improve part performance, and shorten lead times through practical, production-oriented solutions.
            </p>
            <p>
              We serve clients across Europe, North America, the Middle East, Asia, and Russia, with a solid understanding of international standards, quality requirements, and business practices.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-accent text-xs font-semibold mb-4 tracking-widest uppercase">Our Facilities</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">Manufacturing Facilities</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Equipped with state-of-the-art production technology to ensure precision and efficiency at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "/about/Metal Stamping floor.jpg", title: "Metal Stamping Floor", desc: "High-capacity stamping workshop with precision equipment for mass production" },
              { img: "/about/Tooling Production.jpg", title: "Tooling Production", desc: "Professional mold and tooling manufacturing center for custom tooling solutions" },
              { img: "/about/CNC Machining Centres.jpg", title: "CNC Machining Centres", desc: "Advanced CNC machining capabilities for high-precision components" },
              { img: "/about/Auto-lathe production.jpg", title: "Auto-lathe Production", desc: "Automated lathe production line for efficient high-volume manufacturing" },
              { img: "/about/Laser Cutting machine.jpg", title: "Laser Cutting Machine", desc: "High-precision laser cutting equipment for clean, accurate cuts" },
              { img: "/about/Wire-cutting machine.jpg", title: "Wire-cutting Machine", desc: "Wire EDM cutting capabilities for intricate designs and tight tolerances" },
              { img: "/about/Die-casting products machining.jpg", title: "Die-casting Machining", desc: "Die-casting machining operations for precision metal components" },
            ].map((facility, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                  <img
                    src={facility.img}
                    alt={facility.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-lg mb-1">{facility.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{facility.desc}</p>
                  </div>
                  {/* Always-visible bottom tag */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4 px-4 group-hover:opacity-0 transition-opacity duration-300">
                    <p className="text-white font-semibold text-sm">{facility.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-accent text-xs font-semibold mb-4 tracking-widest uppercase">What We Do</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">Our Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Comprehensive manufacturing solutions tailored to meet the most demanding engineering requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Metal Stamping / Punched Service", desc: "High-precision stamping and punching for complex geometries", num: "01" },
              { title: "CNC Machining", desc: "CNC Turning, Milling for tight tolerance parts", num: "02" },
              { title: "Sheet Metal Fabrication", desc: "Custom sheet metal components and assemblies", num: "03" },
              { title: "Metal Casting", desc: "Investment casting and sand casting solutions", num: "04" },
              { title: "Forging Services", desc: "Cold forging and hot forging capabilities", num: "05" },
              { title: "Aluminum Extrusion", desc: "Custom aluminum profiles and extrusions", num: "06" },
            ].map((service, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all cursor-pointer group relative overflow-hidden">
                <div className="absolute top-4 right-5 text-4xl font-black text-slate-100 group-hover:text-accent/10 transition-colors select-none">{service.num}</div>
                <h3 className="text-xl font-bold text-primary mb-3 tracking-tight relative z-10">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm relative z-10 mb-4">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center text-accent text-sm font-semibold gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Ready to Start Your Project?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Upload your drawings and get a detailed quotation within 24 hours. No minimum order quantity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/quote"
              className="px-8 py-4 bg-accent hover:bg-orange-600 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center gap-2"
            >
              Request a Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-200 border border-white/20 cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
