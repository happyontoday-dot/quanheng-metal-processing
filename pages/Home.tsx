import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Settings, Layers, Zap, FileUp, Settings2, FileText, Truck } from 'lucide-react';


export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full fade-in">

      {/* Hero Section */}
      <section className="relative h-[600px] w-full flex items-center bg-slate-900 overflow-hidden">
        {/* Left Side Image */}
        <div className="absolute inset-y-0 left-0 w-1/2 z-0 opacity-40">
          <img
            src="/cases/Metal_20stamping_20parts.jpg"
            alt="Metal Stamping Parts"
            className="h-full w-full object-cover grayscale opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-900/80 to-slate-900"></div>
        </div>

        {/* Right Side Image */}
        <div className="absolute inset-y-0 right-0 w-1/2 z-0 opacity-40">
          <img
            src="/cases/Die_20casting_20parts.jpg"
            alt="Die Casting Parts"
            className="h-full w-full object-cover grayscale opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-slate-900/50 via-slate-900/80 to-slate-900"></div>
        </div>

        {/* Central Overlay for uniform darkness behind text - slightly reduced since side gradients handle most of it now */}
        <div className="absolute inset-0 bg-slate-900/30 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
            Custom Metal Fabrication Services
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-3xl leading-relaxed">
            Quanheng delivers on-demand manufacturing solutions that help you rapidly design, prototype, and mass-produce custom metal parts with high efficiency and reliability. We work with more than 50 types of metals and plastics and support projects from one-off prototypes to full-scale production. Our core capabilities include precision CNC machining, sheet metal bending and fabrication, metal stamping, 3D printing, metal casting.
          </p>
          <p className="text-sm text-slate-400 mb-8 max-w-3xl italic">
            *With over 30 years of manufacturing experience, a stable supply chain, and streamlined production processes, we offer competitive pricing for both small and large production runs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="px-8 py-3 bg-accent hover:bg-sky-600 text-white font-semibold rounded-md transition-all text-center"
            >
              View Our Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-semibold rounded-md transition-all text-center"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Intro / Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Quanheng?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="w-8 h-8 text-accent" />,
                title: "Stable Supply Chain, Lower Costs",
                desc: "A reliable supply chain enables us to control costs and deliver competitive pricing—helping customers significantly reduce manufacturing expenses."
              },
              {
                icon: <Settings className="w-8 h-8 text-accent" />,
                title: "One-Stop Metal Fabrication",
                desc: "From stamping and bending to laser cutting and welding, we offer complete in-house processes for fast, efficient, one-stop production."
              },
              {
                icon: <Truck className="w-8 h-8 text-accent" />,
                title: "Flexible Logistics Support — Only When You Need It",
                desc: "For customers new to international sourcing, we provide logistics assistance and door-to-door solutions when needed. If you already work with a trusted forwarder, we fully support your existing logistics arrangements."
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Core Competencies</h2>
            </div>
            <Link to="/products" className="hidden md:flex items-center text-accent hover:text-sky-700 font-medium">
              View All Services <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Laser Cutting",
                desc: "High-precision cutting for steel, aluminum, and copper.",
                img: "/Core%20Competencies/laser%20cutting.jpeg"
              },
              {
                title: "Metal Bending",
                desc: "Complex forming capabilities for intricate metal components.",
                img: "/Core%20Competencies/metal%20bending.jpeg"
              },
              {
                title: "Metal Stamping",
                desc: "High-volume, precision metal stamping for various industries.",
                img: "/Core%20Competencies/metal%20stamping.jpeg"
              },
              {
                title: "Metal Welding",
                desc: "Professional welding services for durable and clean joints.",
                img: "/Core%20Competencies/metal%20welding%20.jpeg"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl h-80">
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-200 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center italic">Project Showcase</h3>
            <div className="relative group">
              <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar scrolling-touch">
                {[
                  { name: "Aluminum Extrusion Parts", src: "/cases/Aluminum_20extrusion_20parts.jpg" },
                  { name: "Assembled Products", src: "/cases/Assembled_20products.jpg" },
                  { name: "Die Casting Parts", src: "/cases/Die_20casting_20parts.jpg" },
                  { name: "Metal Stamping Parts", src: "/cases/Metal_20stamping_20parts.jpg" },
                  { name: "Plastic Parts", src: "/cases/Plastic_20parts.jpg" },
                  { name: "Electronics Components", src: "/cases/electronics.jpg" },
                  { name: "Optoelectronic Products 1", src: "/cases/光电产品 (1).png" },
                  { name: "Optoelectronic Products 2", src: "/cases/光电产品 (2).png" },
                  { name: "Optoelectronic Products 3", src: "/cases/光电产品 (3).png" },
                  { name: "Optoelectronic Products", src: "/cases/光电产品.png" },
                ].map((item, idx) => (
                  <div key={idx} className="flex-none w-72 md:w-80 snap-center">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col">
                      <div className="h-56 w-full relative">
                        <img
                          src={item.src}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-4 flex-grow flex items-center justify-center">
                        <p className="text-slate-700 font-semibold text-center">{item.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll indicators (optional but helpful) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-2 hidden group-hover:block md:block pointer-events-none md:pointer-events-auto">
                <button className="bg-white/90 p-2 rounded-full shadow-lg border border-slate-200 text-slate-700 hover:bg-white transition-colors">
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-2 hidden group-hover:block md:block pointer-events-none md:pointer-events-auto">
                <button className="bg-white/90 p-2 rounded-full shadow-lg border border-slate-200 text-slate-700 hover:bg-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/products" className="inline-flex items-center text-accent hover:text-sky-700 font-medium">
              View All Services <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* How To Order Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How To Order Parts</h2>
            <p className="text-slate-600 text-lg">Easily customize your order and upload your files quickly to get started.</p>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
              {[
                {
                  step: "Step 1",
                  title: "Submit Your Design Files",
                  desc: "Upload your CAD files or drawings in formats such as STEP, IGES, STL, Or PDF. Our team will review your files and provide feedback if necessary.",
                  icon: <FileUp className="w-8 h-8 text-slate-700" />
                },
                {
                  step: "Step 2",
                  title: "Choose Materials And Processes",
                  desc: "Select the appropriate materials and manufacturing processes for your parts. Our experts can assist you in making the best choices for your project.",
                  icon: <Settings2 className="w-8 h-8 text-slate-700" />
                },
                {
                  step: "Step 3",
                  title: "Get a Quote",
                  desc: "Once you have provided your design files and selected materials and processes, we will send you a detailed quotation within 24 hours.",
                  icon: <FileText className="w-8 h-8 text-slate-700" />
                },
                {
                  step: "Step 4",
                  title: "Confirm Your Order",
                  desc: "Review the quotation and confirm your order. Our team will begin the manufacturing process upon your confirmation.",
                  icon: <CheckCircle className="w-8 h-8 text-slate-700" />
                },
                {
                  step: "Step 5",
                  title: "Production And Delivery",
                  desc: "We will manufacture your parts according to your specifications and deliver them to your specified address within the agreed timeline. Generally, samples are shipped by air, while formal orders are shipped by land or sea.",
                  icon: <Truck className="w-8 h-8 text-slate-700" />
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-accent transition-colors relative">
                    {item.icon}
                    {/* Step dot on line (Desktop) */}
                    <div className="hidden lg:block absolute -top-[50px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.step}: {item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-accent hover:bg-sky-600 text-white font-bold rounded-full transition-all shadow-md"
            >
              Get Instant Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Settings className="w-96 h-96 text-white" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your project?</h2>
          <p className="text-slate-300 mb-10 text-lg">
            Send us your drawings or specifications. Our engineering team is ready to provide a competitive quote and technical support.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-accent hover:bg-sky-600 text-white font-bold rounded-full transition-transform hover:-translate-y-1 shadow-lg hover:shadow-sky-900/50"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};