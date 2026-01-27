import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="w-full fade-in bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-slate-900 py-12 md:py-16">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-transparent to-primary"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">About QuMetal</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Leading the way in precision metal manufacturing with over three decades of excellence.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="prose prose-slate max-w-none">
          <div className="relative">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-accent/30 w-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Who We Are</h2>
            </div>

            <div className="text-slate-600 leading-loose text-lg space-y-8">
              <p className="text-xl md:text-2xl leading-relaxed border-l-4 border-accent pl-6 py-2">
                Founded in 1993, QuMetal (Cangzhou Quanheng Metals Ltd ) is a professional metal manufacturing factory located in Cangzhou, China—one of the country’s most important industrial hubs for metal processing and fabrication.
              </p>

              <p>
                Cangzhou is home to thousands of metalworking and manufacturing enterprises, forming a highly mature and efficient industrial ecosystem. This region brings together a large number of skilled technicians, experienced engineers, and specialized suppliers, enabling fast collaboration, stable production capacity, and strong cost control. Being deeply rooted in this manufacturing cluster allows us to offer our customers competitive pricing, flexible production, and proven manufacturing expertise.
              </p>

              <p>
                With more than 30 years of practical experience, we specialize in custom metal parts and sheet metal fabrication, supporting projects from prototyping through full-scale production. We process over 50 types of metals and engineering materials, including steel, stainless steel, aluminum, and copper, to meet a wide range of application needs.
              </p>

              <p>
                Our engineering and production teams focus on design optimization and manufacturability, helping customers lower costs, improve part performance, and shorten lead times through practical, production-oriented solutions.
              </p>

              <p>
                We serve clients across Europe, North America, the Middle East, Asia, and Russia, with a solid understanding of international standards, quality requirements, and business practices. Clear communication, stable quality, and reliable delivery are central to how we work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">Our Manufacturing Facilities</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Equipped with state-of-the-art production technology to ensure precision and efficiency at every stage of manufacturing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: "/about/Metal Stamping floor.jpg",
                title: "Metal Stamping floor",
                desc: "High-capacity stamping workshop with precision equipment for mass production"
              },
              {
                img: "/about/Tooling Production.jpg",
                title: "Tooling Production",
                desc: "Professional mold and tooling manufacturing center for custom tooling solutions"
              },
              {
                img: "/about/CNC Machining Centres.jpg",
                title: "CNC Machining Centres",
                desc: "Advanced CNC machining capabilities for high-precision components"
              },
              {
                img: "/about/Auto-lathe production.jpg",
                title: "Auto-lathe production",
                desc: "Automated lathe production line for efficient high-volume manufacturing"
              },
              {
                img: "/about/Laser Cutting machine.jpg",
                title: "Laser Cutting machine",
                desc: "High-precision laser cutting equipment for clean, accurate cuts"
              },
              {
                img: "/about/Wire-cutting machine.jpg",
                title: "Wire-cutting machine",
                desc: "Wire EDM cutting capabilities for intricate designs and tight tolerances"
              },
              {
                img: "/about/Die-casting products machining.jpg",
                title: "Die-casting products machining",
                desc: "Die-casting machining operations for precision metal components"
              }
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-primary mb-2 tracking-tight">{facility.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{facility.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">Our Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Comprehensive manufacturing solutions tailored to meet the most demanding engineering requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Metal Stamping / Punched Service", desc: "High-precision stamping and punching for complex geometries" },
              { title: "CNC Machining", desc: "CNC Turning, Milling for tight tolerance parts" },
              { title: "Sheet Metal Fabrication", desc: "Custom sheet metal components and assemblies" },
              { title: "Metal Casting", desc: "Investment casting and sand casting solutions" },
              { title: "Forging Services", desc: "Cold forging and hot forging capabilities" },
              { title: "Aluminum Extrusion", desc: "Custom aluminum profiles and extrusions" }
            ].map((service, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-primary mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};