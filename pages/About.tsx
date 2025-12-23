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
            Dedicated to precision, quality, and innovation in metal manufacturing since 2008.
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
              Quanheng Metal Processing Factory is a comprehensive manufacturing enterprise specializing in precision sheet metal fabrication. We serve a diverse range of industries including automotive, electronics, medical, and construction.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our facility is equipped with state-of-the-art Amada laser cutting machines, CNC punch presses, and robotic bending cells. This investment in technology allows us to maintain tight tolerances and high repeatability, ensuring every part meets international quality standards.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="border-l-4 border-accent pl-4">
                <span className="block text-3xl font-bold text-primary">15+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <span className="block text-3xl font-bold text-primary">5000+</span>
                <span className="text-sm text-slate-500">Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Quality Assurance</h2>
            <p className="text-slate-400">We don't just process metal; we guarantee reliability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "ISO Certified", desc: "Operating under ISO 9001:2015 quality management systems." },
              { title: "Material Traceability", desc: "All raw materials are sourced from certified suppliers with mill certificates." },
              { title: "Final Inspection", desc: "100% inspection for critical dimensions before shipping." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <h3 className="text-xl font-bold text-accent mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};