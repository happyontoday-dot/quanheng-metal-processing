import React from 'react';
import { GeminiImage } from '../components/GeminiImage';

export const About: React.FC = () => {
  return (
    <div className="w-full fade-in bg-white">
      {/* Header */}
      <div className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">About Quanheng Metals</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Dedicated to precision, quality, and innovation in metal manufacturing since 1993.
          </p>
        </div>
      </div>

      {/* Who We Are - Sketch-based Wrap Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-slate max-w-none">
          <div className="relative">
            {/* Title and Text */}
            <h2 className="text-3xl font-bold text-primary mb-8">Who We Are</h2>

            <div className="text-slate-600 leading-relaxed text-lg space-y-6">
              <p className="text-xl text-primary/80 font-medium">
                Founded in 1993, <strong>Quanheng Metals Ltd</strong> is a professional metal manufacturing factory located in Cangzhou, China—one of the country’s most important industrial hubs for metal processing and fabrication.
              </p>

              <p>
                Cangzhou is home to thousands of metalworking and manufacturing enterprises, forming a highly mature and efficient industrial ecosystem. This region brings together a large number of skilled technicians, experienced engineers, and specialized suppliers, enabling fast collaboration, stable production capacity, and strong cost control. Being deeply rooted in this manufacturing cluster allows us to offer our customers competitive pricing, flexible production, and proven manufacturing expertise.
              </p>

              <p>
                With over 30 years of hands-on experience, we focus on providing custom metal parts and custom sheet metal components, supporting projects from early-stage prototyping to mass production. We work with more than 50 types of metals and plastics, including steel, stainless steel, aluminum, copper, and other engineering materials, to meet diverse industry requirements.
              </p>

              <p>
                Our engineering and production teams have extensive practical experience in design optimization, process selection, and manufacturability improvement. We do not simply produce parts—we help our customers reduce costs, improve performance, and accelerate time to market through practical engineering support and efficient manufacturing solutions.
              </p>

              <p>
                Serving customers across Europe, North America, the Middle East, Asia, and Russia, we actively seek long-term partnerships with companies around the world. We understand the different technical standards, quality expectations, and business practices of international markets, and we are committed to providing clear communication, reliable delivery, and consistent product quality for global clients.
              </p>

              <p>
                From prototype development to large-scale production, we are committed to delivering 100% qualified products with consistent quality, reliable lead times, and responsive communication. Leveraging the strengths of China’s manufacturing supply chain and Cangzhou’s industrial concentration, Quanheng Metals Ltd is a trusted partner for customers seeking high-quality, cost-effective, and scalable metal fabrication solutions worldwide.
              </p>
            </div>

            <div className="clear-both"></div>
          </div>
        </div>
      </div>

      {/* Manufacturing Facilities Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Manufacturing Facilities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Advanced production equipment and professional manufacturing capabilities to deliver high-quality metal parts
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
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={facility.img}
                    alt={facility.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-primary mb-2">{facility.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive manufacturing solutions for all your metal parts needs</p>
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
              <div key={i} className="bg-white p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Surface Treatments Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Surface Treatments</h2>
            <p className="text-slate-400">Professional finishing options to meet your specifications</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Powder Coating",
              "Galvanized",
              "Anodizing",
              "Painting",
              "Passivation",
              "Brush",
              "Electroplating",
              "Special Surface Treatments"
            ].map((treatment, i) => (
              <div key={i} className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center">
                <p className="text-accent font-semibold">{treatment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};