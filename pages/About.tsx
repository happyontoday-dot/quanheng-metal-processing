import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Package, ChevronRight, CheckCircle2, Factory, ShieldCheck, Globe } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export const About: React.FC = () => {
  useSEO({
    title: "About QUMETAL - Precision Metal Fabrication Since 1993",
    description: "Founded in 1993, QUMETAL is an ISO 9001:2015 certified precision metal fabrication factory. Over 30 years of engineering excellence and global manufacturing."
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-12');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-elem').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-900 selection:bg-orange-500 selection:text-white">

      {/* -------------------------------------------
          HERO SECTION (Editorial Splash)
          ------------------------------------------- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-8 lg:px-16 bg-slate-900 overflow-hidden min-h-[70vh] flex flex-col justify-end">
        {/* Abstract structural graphics */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-800 rounded-full blur-[150px] opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MCAwaC0xdjQwaDFWMHoiIGZpbGw9InJ मुआवजेKTI1NSwyNTUsMjU1LDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+')] opacity-20 z-0"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 opacity-0 translate-y-12 transition-all duration-1000 ease-out reveal-elem">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-semibold mb-8 tracking-widest uppercase">
              <Award className="w-3.5 h-3.5" /> Founded & Established 1993
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-bold text-white uppercase tracking-tighter leading-[0.9]">
              Forging the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500">Foundation of Industry.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 pl-0 lg:pl-12 border-t md:border-t-0 md:border-l border-slate-700 pt-8 md:pt-0 opacity-0 translate-y-12 transition-all duration-1000 delay-200 ease-out reveal-elem">
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
              Leading the way in precision metal manufacturing with over three decades of engineering excellence, solving complex fabrication challenges for global clients.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------
          STATISTICS (Massive Typography)
          ------------------------------------------- */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
            {[
              { value: '30+', label: 'Years of Expertise' },
              { value: '50+', label: 'Material Types' },
              { value: '200+', label: 'Global Enterprise Clients' },
              { value: '9001', label: 'ISO Certified Standard' },
            ].map((stat, i) => (
              <div key={i} className="py-16 px-8 flex flex-col justify-center items-center text-center group bg-white hover:bg-slate-50 transition-colors opacity-0 translate-y-12 reveal-elem" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-slate-900 tracking-tighter mb-4 group-hover:text-orange-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------
          OUR STORY (Editorial Multi-column)
          ------------------------------------------- */}
      <section className="py-24 md:py-32 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 opacity-0 translate-y-12 transition-all duration-1000 ease-out reveal-elem">
            <span className="text-orange-600 font-semibold tracking-widest text-xs uppercase mb-4 block">Corporate Profile</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-6">
              Three Decades of Engineering Focus.
            </h2>
            <div className="w-16 h-1 bg-orange-500 mb-8"></div>
            <p className="text-slate-500 leading-relaxed font-light text-lg">
              We don't just process metal; we optimize your entire supply chain through uncompromising quality and intelligent manufacturability.
            </p>
          </div>

          {/* Right Heavy Text Content */}
          <div className="lg:col-span-8 space-y-8 text-slate-600 text-lg leading-loose opacity-0 translate-y-12 transition-all duration-1000 delay-200 ease-out reveal-elem">
            <p className="text-2xl text-slate-900 font-medium leading-relaxed bg-slate-50 p-8 border-l-4 border-orange-500 rounded-r-2xl">
              Founded in 1993, QUMETAL (Cangzhou Quanheng Metals Ltd) operates from the heart of China's most important industrial hub for precision metal processing.
            </p>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-orange-500" /> Strategic Location
                </h3>
                <p className="text-base text-slate-500">
                  Cangzhou forms a highly mature and efficient industrial ecosystem. We leverage this region's concentration of skilled technicians, experienced engineers, and specialized suppliers to guarantee stable production capacity, raw material sourcing, and unmatched cost control for our clients.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Factory className="w-4 h-4 text-orange-500" /> Broad Capabilities
                </h3>
                <p className="text-base text-slate-500">
                  With deep practical experience, we specialize in comprehensive sheet metal fabrication and CNC machining, supporting everything from rapid prototyping through full-scale mass production across 50+ types of challenging metal and engineering alloys.
                </p>
              </div>
            </div>

            <p className="pt-8 text-base">
              Our engineering philosophy focuses heavily on <strong className="text-slate-900">Design for Manufacturability (DFM)</strong>. We collaborate with internationally renowned brands across Europe, North America, the Middle East, and Asia, constantly pushing the boundaries to lower client costs while significantly improving part performance and accelerating time-to-market.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------
          MANUFACTURING FACILITIES (Asymmetric Gallery)
          ------------------------------------------- */}
      <section className="py-32 px-4 sm:px-8 bg-slate-100 border-t border-slate-200/60 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out reveal-elem">
            <div className="max-w-2xl">
              <span className="text-orange-600 font-semibold tracking-widest text-xs uppercase mb-4 block">Infrastructure</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">
                State-of-the-Art Facilities
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm font-light md:text-right">
              Explore our industrial backbone. Fully equipped, highly automated, and strictly calibrated for global production demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Main Feature - Large */}
            <div className="md:col-span-8 group relative rounded-2xl overflow-hidden aspect-video md:aspect-auto md:h-[500px] opacity-0 translate-y-12 transition-all duration-1000 ease-out reveal-elem">
              <img src="/about/Metal Stamping floor.jpg" alt="Metal Stamping Floor" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="text-orange-400 font-mono text-xs tracking-[0.2em] mb-2 uppercase">Zone 01</div>
                <h3 className="text-3xl font-display font-bold text-white mb-2">High-Capacity Stamping Floor</h3>
                <p className="text-slate-300 font-light max-w-md hidden md:block">Equipped with heavy-duty presses for high-volume, precision-critical metal blanking and forming operations.</p>
              </div>
            </div>

            {/* Side Column - 2 Stacked */}
            <div className="md:col-span-4 flex flex-col gap-8 opacity-0 translate-y-12 transition-all duration-1000 delay-200 ease-out reveal-elem">
              <div className="group relative rounded-2xl overflow-hidden h-[230px]">
                <img src="/about/CNC Machining Centres.jpg" alt="CNC Centers" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl font-display font-bold text-white">CNC Machining Centers</h3>
                </div>
              </div>
              <div className="group relative rounded-2xl overflow-hidden h-[238px]"> {/* Adjust height for gap */}
                <img src="/about/Laser Cutting machine.jpg" alt="Laser Cutting" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl font-display font-bold text-white">Fiber Laser Cutting</h3>
                </div>
              </div>
            </div>

            {/* Bottom Row - 3 Columns */}
            <div className="md:col-span-4 group relative rounded-2xl overflow-hidden h-[300px] opacity-0 translate-y-12 transition-all duration-1000 ease-out reveal-elem">
              <img src="/about/Auto-lathe production.jpg" alt="Auto-lathe" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-display font-bold text-white">Automated Lathe Array</h3>
              </div>
            </div>

            <div className="md:col-span-4 group relative rounded-2xl overflow-hidden h-[300px] opacity-0 translate-y-12 transition-all duration-1000 delay-100 ease-out reveal-elem">
              <img src="/about/Wire-cutting machine.jpg" alt="Wire EDM" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-display font-bold text-white">Wire EDM Processing</h3>
              </div>
            </div>

            <div className="md:col-span-4 group relative rounded-2xl overflow-hidden h-[300px] opacity-0 translate-y-12 transition-all duration-1000 delay-200 ease-out reveal-elem">
              <img src="/about/Die-casting products machining.jpg" alt="Die Casting" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-display font-bold text-white">Die-Casting Operations</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------
          CORE COMPETENCIES (Minimalist Cards)
          ------------------------------------------- */}
      <section className="bg-white py-32 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out reveal-elem">
            <span className="text-orange-600 font-semibold tracking-widest text-xs uppercase mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Comprehensive Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {[
              { title: "Precision Stamping & Punching", desc: "High-tonnage mechanical presses for complex custom geometries and deep drawing.", num: "01" },
              { title: "CNC Milling & Turning", desc: "Multi-axis machining centers delivering absolute microscopic tolerances.", num: "02" },
              { title: "Sheet Metal Fabrication", desc: "End-to-end laser cutting, complex CNC bending, and certified robotic welding.", num: "03" },
              { title: "Investment Sand Casting", desc: "Reliable casting solutions for heavy-duty components and complex internal structures.", num: "04" },
              { title: "Forging Operations", desc: "Cold and hot forging techniques to ensure maximum structural integrity and strength.", num: "05" },
              { title: "Aluminum Extrusion", desc: "Custom designed aluminum profiles machined and finished for architectural and industrial uses.", num: "06" },
            ].map((service, i) => (
              <div key={i} className="group relative pl-8 border-l border-slate-200 hover:border-orange-500 transition-colors opacity-0 translate-y-12 reveal-elem" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="absolute -left-10 top-0 text-5xl font-display font-medium text-slate-100 group-hover:-translate-x-2 transition-transform select-none">
                  {service.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {service.desc}
                </p>
                <Link to="/sheet-metal-fabrication" className="inline-flex items-center text-slate-900 text-sm font-semibold mt-4 group/btn">
                  Explore Details
                  <ArrowRight className="w-4 h-4 ml-2 text-slate-300 group-hover/btn:text-orange-500 group-hover/btn:translate-x-1 transition-all" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------
          BOTTOM CTA (Bold Banner)
          ------------------------------------------- */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        {/* Accent graphics */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/20 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-800 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10 opacity-0 translate-y-12 transition-all duration-1000 ease-out reveal-elem">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Ready to Engineer <br className="hidden md:block" /> Your Next Project?
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Upload your CAD drawings or technical specs. Our engineering team returns a comprehensive DFM analysis and reliable quotation within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/quote"
              className="px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold tracking-widest uppercase rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(234,88,12,0.3)] hover:shadow-[0_0_60px_rgba(234,88,12,0.5)] transform hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-3"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-10 py-5 bg-transparent border border-slate-700 hover:bg-slate-800 text-white text-sm font-semibold tracking-widest uppercase rounded-full transition-all w-full sm:w-auto"
            >
              Contact Facility
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
