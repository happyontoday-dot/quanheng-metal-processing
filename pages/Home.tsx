import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Settings, Layers, Zap, FileUp, Settings2, FileText, Truck, ShieldCheck, Check } from 'lucide-react';


export const Home: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full fade-in">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center bg-[#050B14] overflow-hidden pt-20">

        {/* Dynamic Abstract Background Elements */}
        {/* Deep radial glow behind the text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MCAwaC0xdjQwaDFWMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8cGF0aCBkPSJNMCAzOWh0NDB2MWgtNDB2LTF6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+')] opacity-20 z-0"></div>

        {/* Diagonal Light Slashes / Reflections */}
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-gradient-to-b from-white/5 to-transparent rotate-[30deg] blur-3xl pointer-events-none transform -translate-y-1/2"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[150%] bg-gradient-to-t from-accent/10 to-transparent rotate-[30deg] blur-3xl pointer-events-none transform translate-y-1/2"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center text-center">

          {/* Top Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm mb-8 animate-fade-in-up opacity-0-init">
            <span className="w-2 h-2 rounded-full bg-accent mr-3 animate-pulse"></span>
            <span className="text-slate-300 text-sm font-semibold tracking-wide uppercase">Professional Precision Metal Fabrication</span>
          </div>

          {/* Massive Typography Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white mb-6 leading-[1.1] tracking-tight font-display max-w-5xl">
            <span className="block animate-fade-in-up opacity-0-init animate-delay-100">
              One-stop Solution
            </span>
            <span className="block animate-fade-in-up opacity-0-init animate-delay-200 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400">
              For Precision Parts
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl leading-relaxed animate-fade-in-up opacity-0-init animate-delay-300">
            Comprehensive production solutions from raw material control to after-sales service.
            Engineering excellence designed for the modern industrial era.
          </p>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center animate-fade-in-up opacity-0-init animate-delay-500 w-full">
            <Link
              to="/quote"
              className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 bg-accent rounded-full hover:bg-orange-500 shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:shadow-[0_0_40px_rgba(234,88,12,0.6)] hover:-translate-y-1 overflow-hidden group w-full sm:w-auto"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative flex items-center">
                Request Instant Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white transition-all duration-300 border border-slate-700 bg-slate-800/50 backdrop-blur-sm rounded-full hover:bg-slate-700 hover:text-white w-full sm:w-auto group"
            >
              Explore Capabilities
            </Link>
          </div>

        </div>
      </section>

      {/* Intro / Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:auto-rows-fr gap-8">
            {[
              {
                icon: <Layers className="w-12 h-12 text-accent" aria-hidden="true" />,
                title: "Stable Supply Chain, Lower Costs",
                desc: "A reliable supply chain enables us to control costs and deliver competitive pricing—helping customers significantly reduce manufacturing expenses."
              },
              {
                icon: <Settings className="w-12 h-12 text-accent" aria-hidden="true" />,
                title: "One-Stop Metal Fabrication",
                desc: "From stamping and bending to laser cutting and welding, we offer complete in-house processes for fast, efficient, one-stop production."
              },
              {
                icon: <Truck className="w-12 h-12 text-accent" aria-hidden="true" />,
                title: "Flexible Logistics Support — Only When You Need It",
                desc: "For customers new to international sourcing, we provide logistics assistance and door-to-door solutions when needed. If you already work with a trusted forwarder, we fully support your existing logistics arrangements."
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-accent" aria-hidden="true" />,
                title: "Quality Assurance",
                desc: "We have certified to ISO 9001:2015, from initial production to final delivery, we maintain strict quality control to ensure compliance with customer requirements."
              },
            ].map((feature, idx) => (
              <div key={idx} className="h-full p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 cursor-pointer">
                <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Core Competencies</h2>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-accent hover:text-orange-600 font-medium">
              View All Services <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Sheet Metal Fabrication",
                desc: "Comprehensive sheet metal processing including cutting, bending, stamping, and welding.",
                img: "/Core%20Competencies/metal%20bending.jpeg",
                link: "/sheet-metal-fabrication"
              },
              {
                title: "CNC Machining",
                desc: "High-precision CNC milling and turning for complex metal and plastic parts.",
                img: "/Core%20Competencies/imgi_8_CNC-Machining.jpg",
                link: "/cnc-machining"
              },
              {
                title: "3D Printing",
                desc: "Rapid prototyping and additive manufacturing for complex geometries.",
                img: "/Core%20Competencies/3d%20printing.jpeg",
                link: "/services"
              },
              {
                title: "Surface Finishing",
                desc: "Professional surface treatments including anodizing, powder coating, and plating.",
                img: "/Core%20Competencies/imgi_73_Surface-Finishes-768x509.jpg",
                link: "/services/surface-finishing"
              }
            ].map((item, idx) => (
              <Link to={item.link} key={idx} className="group relative overflow-hidden rounded-2xl h-[400px] block cursor-pointer border border-slate-200/50 hover:border-accent/50 transition-colors duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
                <img
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent flex flex-col justify-end p-6 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-2 md:line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                    <div className="flex items-center text-accent font-semibold text-sm tracking-widest uppercase">
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16">
            <div className="mb-8">
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Work</span>
              <h3 className="text-2xl font-bold text-primary mt-2">Project Showcase</h3>
            </div>
            <div className="relative group">
              <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 snap-x no-scrollbar scrolling-touch">
                {[
                  { name: "Aluminum Extrusion Parts", src: "/cases/Aluminum_20extrusion_20parts.webp" },
                  { name: "Assembled Products", src: "/cases/Assembled_20products.webp" },
                  { name: "Die Casting Parts", src: "/cases/Die_20casting_20parts.webp" },
                  { name: "Metal Stamping Parts", src: "/cases/Metal_20stamping_20parts.webp" },
                  { name: "Plastic Parts", src: "/cases/Plastic_20parts.webp" },
                  { name: "Electronics Components", src: "/cases/electronics.webp" },
                  { name: "Machining Parts", src: "/cases/machining parts.webp" },

                  { name: "Optoelectronic Products 1", src: "/cases/光电产品 (1).webp" },
                  { name: "Optoelectronic Products 2", src: "/cases/光电产品 (2).webp" },


                ].map((item, idx) => (
                  <div key={idx} className="flex-none w-72 md:w-80 snap-center">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col cursor-pointer">
                      <div className="h-56 w-full relative">
                        <img
                          src={item.src}
                          alt=""
                          width={400}
                          height={300}
                          loading="lazy"
                          decoding="async"
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
                <button aria-label="Scroll left" onClick={scrollLeft} className="bg-white/90 p-2 rounded-full shadow-lg border border-slate-200 text-slate-700 hover:bg-white transition-colors">
                  <ArrowRight className="w-5 h-5 rotate-180" aria-hidden="true" />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-2 hidden group-hover:block md:block pointer-events-none md:pointer-events-auto">
                <button aria-label="Scroll right" onClick={scrollRight} className="bg-white/90 p-2 rounded-full shadow-lg border border-slate-200 text-slate-700 hover:bg-white transition-colors">
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center text-accent hover:text-orange-600 font-medium">
              View All Services <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Supported Materials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Supported Sheet Metal Materials</h2>
            <p className="text-slate-600 max-w-4xl mx-auto">
              We specialize in processing a diverse range of metals, including iron, aluminum, stainless steel, galvanized steel, titanium, brass, bronze, and nickel.
            </p>
          </div>

          <div className="overflow-hidden border border-slate-200 rounded-lg shadow-sm bg-white mb-12">
            {[
              { name: "Aluminum", items: ["1100-H14 Aluminum Alloy", "5052-H32 Aluminum Alloy", "6061 Aluminum Alloy", "7075 Aluminum Alloy"] },
              { name: "Stainless Steel", items: ["301 Stainless Steel", "303 Stainless Steel", "304 Stainless Steel", "316 Stainless Steel", "430 Stainless Steel"] },
              { name: "Steel", items: ["DC01 Carbon Steel", "1018 Steel", "1020 Steel", "Galvanized Steel", "Cold Rolled Steel", "Hot Rolled Steel"] },
              { name: "Copper", items: ["260 Copper", "1100 Copper", "110 Copper", "101 Copper"] },
              { name: "Bronze", items: ["Bronze 220", "Bronze 510"] },
              { name: "Nickel Alloys", items: ["Inconel 600", "Inconel 625", "Monel 400", "Nickel 200", "Nickel 400"] },
              { name: "Titanium", items: ["Titanium Grade 2", "Titanium Grade 4", "Titanium 6Al-4V Grade 5"] },
            ].map((row, idx) => (
              <div key={idx} className="flex flex-col md:flex-row border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors duration-200">
                <div className="bg-slate-900 text-white py-4 px-6 md:w-48 flex-shrink-0 flex items-center justify-center md:justify-start font-bold">
                  {row.name}
                </div>
                <div className="flex-grow p-4 bg-white grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
                  {row.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="text-slate-600 text-sm text-center md:text-left px-2">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/quote"
              className="inline-block px-10 py-4 bg-accent hover:bg-orange-600 text-white font-bold rounded-md transition-all duration-200 shadow-md cursor-pointer hover:shadow-xl"
            >
              Tell Us Your Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* How To Order Section */}

      <section className="py-24 bg-slate-100">
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
                  desc: "Upload your CAD files or drawings. If you don't have existing design files, you may also send reference images and a brief description of your requirements. We can provide a preliminary evaluation and rough cost estimate based on this information.",
                  icon: <FileUp className="w-8 h-8 text-slate-700" aria-hidden="true" />
                },
                {
                  step: "Step 2",
                  title: "Choose Materials And Processes",
                  desc: "Select the appropriate materials and manufacturing processes for your parts. Our experts can assist you in making the best choices for your project.",
                  icon: <Settings2 className="w-8 h-8 text-slate-700" aria-hidden="true" />
                },
                {
                  step: "Step 3",
                  title: "Get a Quote",
                  desc: "Once you have provided your design files and selected materials and processes, we will send you a detailed quotation within 24 hours.",
                  icon: <FileText className="w-8 h-8 text-slate-700" aria-hidden="true" />
                },
                {
                  step: "Step 4",
                  title: "Confirm Your Order",
                  desc: "Review the quotation and confirm your order. Our team will begin the manufacturing process upon your confirmation.",
                  icon: <CheckCircle className="w-8 h-8 text-slate-700" aria-hidden="true" />
                },
                {
                  step: "Step 5",
                  title: "Production And Delivery",
                  desc: "We will manufacture your parts according to your specifications and deliver them to your specified address within the agreed timeline. Generally, samples are shipped by air, while formal orders are shipped by land or sea.",
                  icon: <Truck className="w-8 h-8 text-slate-700" aria-hidden="true" />
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-accent group-hover:shadow-md transition-all duration-300 relative">
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
              to="/quote"
              className="inline-flex items-center px-8 py-3 bg-accent hover:bg-orange-600 text-white font-bold rounded-md transition-all duration-200 shadow-md cursor-pointer hover:shadow-xl"
            >
              Get Instant Quote <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
};
