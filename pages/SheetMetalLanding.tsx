import React, { useEffect } from 'react';
import { ChevronRight, Settings, ShieldCheck, Clock, CheckCircle2, ChevronDown, Package, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const SheetMetalLanding: React.FC = () => {
    useSEO({
        title: "Custom Sheet Metal Fabrication Services | ISO 9001 Factory | QUMETAL",
        description: "Professional custom sheet metal fabrication including laser cutting, bending, punching, and welding. Fast prototyping and mass production with global delivery."
    });

    // Animation observer
    useEffect(() => {
        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-[#0a0f1a] text-slate-50 min-h-screen font-sans selection:bg-orange-500/30">
            {/* Scoped Styles for Dark Industrial Theme */}
            <style>{`
        .sheet-metal-page {
          background-color: #0a0f1a;
          color: #f8fafc;
          --qm-bg: #0a0f1a;
          --qm-surface: #0f172a;
          --qm-surface-2: #1e293b;
          --qm-orange: #f97316;
          --qm-orange-light: #fb923c;
          --qm-blue: #38bdf8;
          --qm-border: rgba(255,255,255,0.08);
          font-family: 'DM Sans', 'Inter', sans-serif;
        }
        
        /* Force typography overriding App.tsx global styles */
        .sheet-metal-page h1, .sheet-metal-page h2, .sheet-metal-page h3, .sheet-metal-page .font-display { 
          font-family: 'Barlow Condensed', sans-serif !important; 
        }
        .sheet-metal-page p, .sheet-metal-page li, .sheet-metal-page div:not(.font-display) {
          font-family: 'DM Sans', 'Inter', sans-serif;
        }
        
        .gradient-text-orange {
          background: linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .steel-card {
          background: linear-gradient(135deg, var(--qm-surface) 0%, var(--qm-surface-2) 100%);
          border: 1px solid var(--qm-border);
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .steel-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent);
        }
        .steel-card:hover {
          transform: translateY(-4px);
          border-color: rgba(249,115,22,0.3);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(249,115,22,0.08);
        }

        .btn-cta {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-family: 'Barlow Condensed', sans-serif !important;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(249,115,22,0.3);
          border: none;
        }
        .btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(249,115,22,0.5);
          background: linear-gradient(135deg, #fb923c, #f97316);
          color: white;
        }

        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-left.visible { opacity: 1; transform: translateX(0); }
      `}</style>

            {/* Import Display Font */}
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div className="sheet-metal-page">
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 md:pt-36 overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/Core%20Competencies/imgi_9_Sheet-Metal-Fabrication.jpg"
                            alt="Sheet Metal Fabrication Facility"
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/90 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wide reveal-left">
                                    <ShieldCheck className="w-4 h-4" />
                                    ISO 9001 CERTIFIED FABRICATION
                                </div>

                                <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6 reveal-left" style={{ transitionDelay: '100ms' }}>
                                    PRECISION CUSTOM<br />
                                    <span className="gradient-text-orange">SHEET METAL</span><br />
                                    FABRICATION
                                </h1>

                                <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed reveal-left" style={{ transitionDelay: '200ms' }}>
                                    Qumetal delivers high-precision sheet metal solutions for communication equipment, industrial chassis, and precision brackets — featuring advanced laser cutting, bending, welding, and surface treatment capabilities.
                                </p>

                                <div className="flex flex-wrap gap-4 reveal-left" style={{ transitionDelay: '300ms' }}>
                                    <Link to="/quote" className="btn-cta px-8 py-4 rounded-md flex items-center gap-2 text-lg">
                                        Get Instant Quote <ChevronRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Visual Grid (Desktop Only) */}
                            <div className="hidden lg:grid grid-cols-2 gap-4 reveal" style={{ transitionDelay: '400ms' }}>
                                <div className="space-y-4 pt-12">
                                    <img src="/metal%20stamping/imgi_10_202508071120514777.jpg" alt="Metal Stamping Part" className="rounded-lg object-cover h-64 w-full border border-white/10" />
                                    <img src="/enclosures/imgi_24_Electrical-Cabinet.jpg" alt="Sheet Metal Enclosure" className="rounded-lg object-cover h-48 w-full border border-white/10" />
                                </div>
                                <div className="space-y-4">
                                    <img src="/punching/imgi_9_Round-Hole-Metal-Sheets.jpg" alt="Precision Round Hole Punching" className="rounded-lg object-cover h-56 w-full border border-white/10" />
                                    <img src="/image/imgi_17_brushed-finishes-aesthetic-and-functional-applications.webp" alt="Brushed Metal Finishes & Materials" className="rounded-lg object-cover h-56 w-full border border-white/10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STATS STRIP */}
                <section className="border-y border-white/10 bg-[#0f172a]/50 backdrop-blur-md relative z-20">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
                            <div className="reveal hidden md:block" style={{ transitionDelay: '100ms' }}>
                                <div className="text-4xl font-display font-bold text-white mb-1">15<span className="text-orange-500">+</span></div>
                                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Surface Finishes Available</div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="text-4xl font-display font-bold text-white mb-1">30<span className="text-orange-500">+</span></div>
                                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Years Experience</div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '300ms' }}>
                                <div className="text-4xl font-display font-bold text-orange-500 mb-1">Global</div>
                                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Shipping</div>
                            </div>
                            <div className="reveal hidden md:block" style={{ transitionDelay: '400ms' }}>
                                <div className="text-4xl font-display font-bold text-white mb-1">3-7<span className="text-orange-500"> Days</span></div>
                                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Fast Lead Time</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES SECTION */}
                <section className="py-24 bg-[#080c14]">
                    <div className="container mx-auto px-4">
                        <div className="mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Our Capabilities <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Comprehensive Sheet Metal Services</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {/* Laser Cutting */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '100ms' }}>
                                <Link to="/services/metal-cutting" className="h-64 overflow-hidden relative block cursor-pointer">
                                    <img src="/Core%20Competencies/laser%20cutting.jpeg" alt="Laser Cutting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">Laser Cutting</h3>
                                </Link>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-6 min-h-[48px]">High-precision laser cutting for carbon steel, stainless steel, and aluminum with extremely tight tolerances and clean edges.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Max Thickness: 20mm</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Tolerance: ±0.05mm</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Link to="/services/metal-cutting" className="text-orange-500 font-bold uppercase text-sm flex items-center gap-1 hover:text-orange-400 transition-colors">Learn More <ChevronRight className="w-4 h-4" /></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Bending */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '200ms' }}>
                                <Link to="/services/metal-bending" className="h-64 overflow-hidden relative block cursor-pointer">
                                    <img src="/Core%20Competencies/metal%20bending.jpeg" alt="Bending & Forming" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">Bending & Forming</h3>
                                </Link>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-6 min-h-[48px]">Computer-controlled bending with ±0.25mm accuracy. Expert flat pattern design and bending sequence optimization for complex parts.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Accuracy: ±0.25mm</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Max Length: 3000mm</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Link to="/services/metal-bending" className="text-orange-500 font-bold uppercase text-sm flex items-center gap-1 hover:text-orange-400 transition-colors">Learn More <ChevronRight className="w-4 h-4" /></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Welding */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '100ms' }}>
                                <Link to="/services/metal-welding" className="h-64 overflow-hidden relative block cursor-pointer">
                                    <img src="/Core%20Competencies/metal%20welding%20.jpeg" alt="Metal Welding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">Metal Welding</h3>
                                </Link>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-6 min-h-[48px]">Precision TIG, MIG, and spot welding services. Full distortion control and post-weld treatment for structural integrity and aesthetics.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">TIG / MIG / Spot</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Distortion Control</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Link to="/services/metal-welding" className="text-orange-500 font-bold uppercase text-sm flex items-center gap-1 hover:text-orange-400 transition-colors">Learn More <ChevronRight className="w-4 h-4" /></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Surface Treatment */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '200ms' }}>
                                <Link to="/services/surface-finishing" className="h-64 overflow-hidden relative block cursor-pointer">
                                    <img src="/Core%20Competencies/imgi_73_Surface-Finishes-768x509.jpg" alt="Surface Treatment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">Surface Treatment</h3>
                                </Link>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-6 min-h-[48px]">Complete finishing solutions including powder coating, anodizing, sandblasting, and plating to enhance durability and corrosion resistance.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Powder Coating</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Anodizing</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Link to="/services/surface-finishing" className="text-orange-500 font-bold uppercase text-sm flex items-center gap-1 hover:text-orange-400 transition-colors">Learn More <ChevronRight className="w-4 h-4" /></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Metal Stamping */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '300ms' }}>
                                <Link to="/services/custom-stamping" className="h-64 overflow-hidden relative block cursor-pointer">
                                    <img src="/Core%20Competencies/metal%20stamping.jpeg" alt="Metal Stamping" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">Metal Stamping</h3>
                                </Link>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-6 min-h-[48px]">High-volume, high-precision metal stamping for consistent part production with complex geometries at tight tolerances.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">High Volume</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Progressive Die</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Link to="/services/custom-stamping" className="text-orange-500 font-bold uppercase text-sm flex items-center gap-1 hover:text-orange-400 transition-colors">Learn More <ChevronRight className="w-4 h-4" /></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Metal Punching */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '400ms' }}>
                                <Link to="/services/metal-punching" className="h-64 overflow-hidden relative block cursor-pointer">
                                    <img src="/Core%20Competencies/Sheet-Metal-Punching.jpg" alt="Metal Punching" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">Metal Punching</h3>
                                </Link>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-6 min-h-[48px]">Rapid, cost-effective CNC turret punching for perforating, countersinking, and forming standard sheet metal profiles.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">CNC Turret</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Cost Effective</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Link to="/services/metal-punching" className="text-orange-500 font-bold uppercase text-sm flex items-center gap-1 hover:text-orange-400 transition-colors">Learn More <ChevronRight className="w-4 h-4" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BENEFITS SECTION */}
                <section className="py-24 bg-[#0f172a]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6 text-white">Benefits of Custom Sheet Metal Prototyping</h2>
                            <p className="text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed">
                                Sheet metal can be quickly cut into 2D profile shapes and formed out of a variety of high-strength materials, making it perfect for rapid tooling. Its per-unit pricing lowers significantly in production volumes. Combined with end-use materials and high throughput, sheet metal fabrication is a well-known production method.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Applications Card */}
                            <div className="steel-card p-8 reveal-left">
                                <h3 className="text-2xl font-display font-bold uppercase mb-6 text-orange-500 flex items-center gap-3">
                                    <Package className="w-6 h-6" /> Used For
                                </h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Sheet Metal Fabrication is widely used across industries for:
                                </p>
                                <ul className="space-y-4 text-slate-400">
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span>Rapid prototypes and low volume production</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span>Medical and communications products</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span>Housings and enclosures</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span>Everything from cars and space rockets and planes</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span>Consumer goods like air conditioners and soda cans</span></li>
                                </ul>
                            </div>

                            {/* Advantages Card */}
                            <div className="steel-card p-8 reveal-left" style={{ transitionDelay: '100ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase mb-6 text-orange-500 flex items-center gap-3">
                                    <Settings className="w-6 h-6" /> Advantages
                                </h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Key benefits of Sheet Metal Prototyping & Production:
                                </p>
                                <ul className="space-y-4 text-slate-400">
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span className="font-semibold text-slate-200 uppercase tracking-wider text-sm">Quick and inexpensive</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span className="font-semibold text-slate-200 uppercase tracking-wider text-sm">High strength and durability</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span className="font-semibold text-slate-200 uppercase tracking-wider text-sm">Very efficient</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span className="font-semibold text-slate-200 uppercase tracking-wider text-sm">High Precision</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span className="font-semibold text-slate-200 uppercase tracking-wider text-sm">Sustainable solution</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SUPPORTED MATERIALS SECTION */}
                <section className="py-24 relative overflow-hidden bg-[#080c14] border-y border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Material Library <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white mb-6">Supported Sheet Metal Materials</h2>
                            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                We specialize in processing a diverse range of metals, including iron, aluminum, stainless steel, galvanized steel, titanium, brass, bronze, and nickel.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 reveal">
                            {[
                                {
                                    category: "Aluminum",
                                    alloys: ["1100-H14 Aluminum Alloy", "5052-H32 Aluminum Alloy", "6061 Aluminum Alloy", "7075 Aluminum Alloy"]
                                },
                                {
                                    category: "Stainless Steel",
                                    alloys: ["301 Stainless Steel", "303 Stainless Steel", "304 Stainless Steel", "316 Stainless Steel", "430 Stainless Steel"]
                                },
                                {
                                    category: "Steel",
                                    alloys: ["DC01 Carbon Steel", "1018 Steel", "1020 Steel", "Galvanized Steel", "Cold Rolled Steel", "Hot Rolled Steel"]
                                },
                                {
                                    category: "Copper",
                                    alloys: ["260 Copper", "1100 Copper", "110 Copper", "101 Copper"]
                                },
                                {
                                    category: "Bronze",
                                    alloys: ["Bronze 220", "Bronze 510"]
                                },
                                {
                                    category: "Nickel Alloys",
                                    alloys: ["Inconel 600", "Inconel 625", "Monel 400", "Nickel 200", "Nickel 400"]
                                },
                                {
                                    category: "Titanium",
                                    alloys: ["Titanium Grade 2", "Titanium Grade 4", "Titanium 6Al-4V Grade 5"]
                                }
                            ].map((material, idx) => (
                                <div key={idx} className="steel-card p-8 group">
                                    <div className="text-orange-500 mb-6">
                                        <Package className="w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold uppercase text-white mb-6 tracking-wide">
                                        {material.category}
                                    </h3>
                                    <div className="h-0.5 w-12 bg-orange-500/30 group-hover:w-full transition-all duration-500 mb-6"></div>
                                    <ul className="space-y-3">
                                        {material.alloys.map((alloy, aIdx) => (
                                            <li key={aIdx} className="text-slate-400 text-sm font-medium flex items-center gap-3 group/item">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40 group-hover/item:bg-orange-500 transition-colors"></div>
                                                {alloy}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SHEET METAL FINISHES SECTION */}
                <section className="py-24 bg-[#0a0f1a] relative">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Post-Processing <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Sheet Metal Finishes</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Finish 1 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '100ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Powder Coating</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Color & Durability</div>
                                <p className="text-slate-400 text-sm leading-relaxed">A durable, impact-resistant finish applied as a dry powder and baked. Available in various colors and textures. Suitable for steel and aluminum.</p>
                            </div>

                            {/* Finish 2 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '200ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Anodizing</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Corrosion Resistance</div>
                                <p className="text-slate-400 text-sm leading-relaxed">An electrolytic process that significantly enhances aluminum's natural corrosion resistance and surface hardness while allowing for color dyeing.</p>
                            </div>

                            {/* Finish 3 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '300ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Bead Blasting</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Matte Texture</div>
                                <p className="text-slate-400 text-sm leading-relaxed">A gentle cleaning method using fine abrasive glass beads to remove tooling marks and achieve a uniform, non-directional matte textured surface.</p>
                            </div>

                            {/* Finish 4 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '400ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Galvanizing / Plating</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Rust Protection</div>
                                <p className="text-slate-400 text-sm leading-relaxed">Applying a protective zinc coating (galvanizing) or other metals like nickel/chrome (plating) to steel parts to prevent rusting and extend lifespan.</p>
                            </div>

                            {/* Finish 5 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '500ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Passivation</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Stainless Steel Only</div>
                                <p className="text-slate-400 text-sm leading-relaxed">A specialized acid treatment for stainless steel that removes free iron from the surface, creating a protective oxide layer that maximizes corrosion resistance.</p>
                            </div>

                            {/* Finish 6 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '600ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Brushing / Polishing</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Aesthetic Finish</div>
                                <p className="text-slate-400 text-sm leading-relaxed">Creating a linear pattern (brushing) or a highly reflective surface (polishing) on stainless steel or aluminum for premium cosmetic applications.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GALLERY CTA SECTION */}
                <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0f1a] to-[#0f172a]">
                    <div className="container mx-auto px-4 text-center z-10 relative">
                        <div className="max-w-3xl mx-auto reveal">
                            <h2 className="text-5xl md:text-6xl font-display font-black uppercase mb-6 leading-none">
                                Ready to fabricate your <span className="gradient-text-orange">Sheet Metal</span> parts?
                            </h2>
                            <p className="text-xl text-slate-400 mb-10">
                                Upload your 2D/3D CAD files today for a free design-for-manufacturability analysis and instant pricing.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/quote" className="btn-cta px-10 py-5 rounded-md text-xl">Upload Your Drawings</Link>
                                <Link to="/contact" className="px-10 py-5 rounded-md text-xl font-display font-bold uppercase border border-white/20 hover:bg-white/5 transition-colors">Contact Sales</Link>
                            </div>
                            <p className="mt-8 text-xs text-slate-500 italic flex items-center justify-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-orange-500/50" />
                                All uploads are secure and confidential.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default SheetMetalLanding;
