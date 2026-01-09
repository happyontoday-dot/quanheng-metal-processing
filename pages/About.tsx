import React from 'react';
import { GeminiImage } from '../components/GeminiImage';

export const About: React.FC = () => {
  return (
    <div className="w-full fade-in bg-white">
      {/* Header */}
      <div className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">About Quanheng</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Dedicated to precision, quality, and innovation in metal manufacturing since 1993.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <GeminiImage
              prompt="Modern clean metal processing factory workshop, organized shelving, workers in safety gear, wide angle 8k"
              fallbackSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
              alt="Factory Workshop"
              className="rounded-lg shadow-2xl h-96 w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Quanheng Metals Ltd was founded in 1993 with a focus on delivering tailored manufacturing solutions. Our goal is to assist you in the development and efficient production of custom metal parts and custom sheet metal components. We specialize in working with a wide variety of materials, including over 50 types of metals and plastics.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our team of experts possesses extensive knowledge and experience in custom sheet metal parts and custom metal parts manufacturing.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We are committed to providing comprehensive technical support services, helping you achieve the best possible value for your products through the development of prototypes and manufacturing solutions. Our commitment to delivering 100% qualified products, with a focus on punctuality, efficiency, and reliability, makes us the ideal partner for your custom metal parts and custom sheet metal parts manufacturing needs.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="border-l-4 border-accent pl-4">
                <span className="block text-3xl font-bold text-primary">30+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <span className="block text-3xl font-bold text-primary">50+</span>
                <span className="text-sm text-slate-500">Material Types</span>
              </div>
            </div>
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
                img: "/about/imgi_14_HWZ_7447.jpg",
                title: "Metal Stamping floor",
                desc: "High-capacity stamping workshop with precision equipment for mass production"
              },
              {
                img: "/about/imgi_17_HWZ_7497.jpg",
                title: "Tooling Production",
                desc: "Professional mold and tooling manufacturing center for custom tooling solutions"
              },
              {
                img: "/about/imgi_19_HWZ_8531.jpg",
                title: "CNC Machining Centres",
                desc: "Advanced CNC machining capabilities for high-precision components"
              },
              {
                img: "/about/imgi_2_HWZ_8572-edited.jpg",
                title: "Auto-lathe production",
                desc: "Automated lathe production line for efficient high-volume manufacturing"
              },
              {
                img: "/about/imgi_3_HWZ_7926.jpg",
                title: "EDM Machining",
                desc: "Electrical discharge machining facility for complex geometries and hard materials"
              },
              {
                img: "/about/imgi_4_HWZ_7680.jpg",
                title: "Wire-cutting machine",
                desc: "Wire EDM cutting capabilities for intricate designs and tight tolerances"
              },
              {
                img: "/about/imgi_5_HWZ_8252.jpg",
                title: "Die-casting products machining",
                desc: "Die-casting machining operations for precision metal components"
              },
              {
                img: "/about/imgi_8_HWZ_7782.jpg",
                title: "Die-casting products - polishing",
                desc: "Professional polishing and finishing for superior surface quality"
              },
              {
                img: "/about/imgi_9_HWZ_7581-edited.jpg",
                title: "Laser Cutting machine",
                desc: "High-precision laser cutting equipment for clean, accurate cuts"
              }
            ].map((facility, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={facility.img}
                    alt={facility.title}
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