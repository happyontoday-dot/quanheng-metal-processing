import React, { useEffect } from 'react';
import { ChevronRight, Settings, ShieldCheck, Clock, CheckCircle2, ChevronDown, Package, PenTool, Cpu, Layers, RotateCcw, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const CNCLanding: React.FC = () => {
    useSEO({
        title: "CNC Machining Services: Milling, Turning & 5-Axis | QUMETAL",
        description: "Expert CNC machining services including 3/4/5-axis milling, precision turning, and gear cutting. ISO 9001 certified factory with 600+ machines and 1-day lead time."
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
        .cnc-page {
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
        .cnc-page h1, .cnc-page h2, .cnc-page h3, .cnc-page .font-display { 
          font-family: 'Barlow Condensed', sans-serif !important; 
        }
        .cnc-page p, .cnc-page li, .cnc-page div:not(.font-display) {
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

            <div className="cnc-page">
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 md:pt-36 overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/Core%20Competencies/imgi_8_CNC-Machining.jpg"
                            alt="CNC Machining Facility"
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
                                    ISO-CERTIFIED PRECISION MACHINING
                                </div>

                                <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6 reveal-left" style={{ transitionDelay: '100ms' }}>
                                    PROFESSIONAL<br />
                                    <span className="gradient-text-orange">CNC MACHINING</span><br />
                                    SERVICES
                                </h1>

                                <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed reveal-left" style={{ transitionDelay: '200ms' }}>
                                    QuMetal provides comprehensive CNC machining solutions — from prototype to production — leveraging our network of certified factories with 600+ advanced CNC machines.
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
                                    <img src="/CNC/cnc-milling01.avif" alt="CNC Milled Parts" className="rounded-lg object-cover h-64 w-full" />
                                    <img src="/CNC/cnc-turing04.avif" alt="Metal Parts" className="rounded-lg object-cover h-48 w-full" />
                                </div>
                                <div className="space-y-4">
                                    <img src="/CNC/5-axis-machining-6.avif" alt="CNC Housing" className="rounded-lg object-cover h-56 w-full" />
                                    <div className="steel-card p-6 flex flex-col justify-center h-56">
                                        <div className="text-4xl font-display font-bold text-orange-500 mb-2">±0.005<span className="text-2xl">mm</span></div>
                                        <div className="text-slate-300 font-medium">Ultra-Precision Accuracy</div>
                                        <div className="mt-4 h-1 w-12 bg-orange-500/50 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STATS STRIP */}
                <section className="border-y border-white/10 bg-[#0f172a]/50 backdrop-blur-md relative z-20">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
                            <div className="reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="text-4xl font-display font-bold text-white mb-1">600<span className="text-orange-500">+</span></div>
                                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Advanced Machines</div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="text-4xl font-display font-bold text-white mb-1">1<span className="text-orange-500"> Day</span></div>
                                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Shortest Lead Time</div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '300ms' }}>
                                <div className="text-4xl font-display font-bold text-orange-500 mb-1">ISO<span className="text-white"> 9001</span></div>
                                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Certified Quality</div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '400ms' }}>
                                <div className="text-4xl font-display font-bold text-white mb-1">24/7<span className="text-orange-500"> Support</span></div>
                                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Engineering DFM</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES SECTION */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> CNC Capabilities <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Precision Machining Solutions</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                            {/* CNC Milling */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="h-80 overflow-hidden relative">
                                    <img src="/Core%20Competencies/imgi_8_CNC-Machining.jpg" alt="CNC Milling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">CNC Milling</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-3 min-h-[50px] leading-snug text-sm">High-precision, tight-tolerance parts and complex geometries in metal or plastic using 3-axis to 5-axis CNC mills. Precision components or molds for diverse industries.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">3 to 5-Axis</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Metal & Plastic</span>
                                    </div>
                                    <Link to="/services/cnc-milling" className="text-orange-500 font-bold uppercase text-xs flex items-center gap-1 hover:text-orange-400 transition-colors">Learn More <ChevronRight className="w-4 h-4" /></Link>
                                </div>
                            </div>

                            {/* CNC Turning */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="h-80 overflow-hidden relative">
                                    <img src="/CNC/cnc-turning-new.jpg" alt="CNC Turning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">CNC Turning</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-3 min-h-[50px] leading-snug text-sm">Receive precision turned parts from prototype to production. We machine cylindrical, square, and hexagonal materials using CNC lathes and mill-turn systems.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Mill-Turn Systems</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Shortened Lead Time</span>
                                    </div>
                                    <Link to="/services/cnc-turning" className="text-orange-500 font-bold uppercase text-xs flex items-center gap-1 hover:text-orange-400 transition-colors">Learn More <ChevronRight className="w-4 h-4" /></Link>
                                </div>
                            </div>

                            {/* 5-Axis Machining */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '300ms' }}>
                                <div className="h-80 overflow-hidden relative">
                                    <img src="/CNC/5-axis-machining-new.jpg" alt="5-Axis Machining" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">5-Axis CNC Machining</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-3 min-h-[50px] leading-snug text-sm">Machine complex parts in one setup. Delivering tight tolerances, shorter lead times, and streamlined production for prototypes and full production runs.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Complex Geometries</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Metal or Plastic</span>
                                    </div>
                                    <Link to="/quote" className="text-orange-500 font-bold uppercase text-xs flex items-center gap-1 hover:text-orange-400 transition-colors">Get Quote <ChevronRight className="w-4 h-4" /></Link>
                                </div>
                            </div>

                            {/* Precision Gear Machining */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '400ms' }}>
                                <div className="h-80 overflow-hidden relative">
                                    <img src="/CNC/Gear.webp" alt="Gear Machining" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">Precision Gears</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-3 min-h-[50px] leading-snug text-sm">Dedicated gear cutting centers for spur, helical, bevel, and worm gears. Serving industries from automotive to robotics with custom gear solutions.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">CNC Hobbing</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Grinding</span>
                                    </div>
                                    <Link to="/quote" className="text-orange-500 font-bold uppercase text-xs flex items-center gap-1 hover:text-orange-400 transition-colors">Get Quote <ChevronRight className="w-4 h-4" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CNC MACHINING PROCESS SECTION */}
                <section className="py-24 bg-[#0a0f1a] relative overflow-hidden border-t border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> How It Works <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Our CNC Machining Process</h2>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 relative">
                            {/* Connecting Line */}
                            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>

                            {/* Step 1 */}
                            <div className="relative text-center group reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="w-24 h-24 mx-auto bg-[#0f172a] rounded-full border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-orange-500/50 transition-colors">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent flex items-center justify-center text-orange-500">
                                        <PenTool className="w-8 h-8" />
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-500 text-white font-display font-bold flex items-center justify-center text-sm shadow-lg shadow-orange-500/30">01</div>
                                </div>
                                <h3 className="text-xl font-display font-bold uppercase text-white mb-3">Upload CAD</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Submit your 2D/3D files for an instant review and manufacturability check.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative text-center group reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="w-24 h-24 mx-auto bg-[#0f172a] rounded-full border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-orange-500/50 transition-colors">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent flex items-center justify-center text-orange-500">
                                        <Cpu className="w-8 h-8" />
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-500 text-white font-display font-bold flex items-center justify-center text-sm shadow-lg shadow-orange-500/30">02</div>
                                </div>
                                <h3 className="text-xl font-display font-bold uppercase text-white mb-3">Quote & DFM</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Receive a detailed competitive quote and expert Design for Manufacturability analysis.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative text-center group reveal" style={{ transitionDelay: '300ms' }}>
                                <div className="w-24 h-24 mx-auto bg-[#0f172a] rounded-full border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-orange-500/50 transition-colors">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent flex items-center justify-center text-orange-500">
                                        <Clock className="w-8 h-8" />
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-500 text-white font-display font-bold flex items-center justify-center text-sm shadow-lg shadow-orange-500/30">03</div>
                                </div>
                                <h3 className="text-xl font-display font-bold uppercase text-white mb-3">Rapid Prototyping</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Get precision-machined functional samples delivered in as fast as 24 hours.</p>
                            </div>

                            {/* Step 4 */}
                            <div className="relative text-center group reveal" style={{ transitionDelay: '400ms' }}>
                                <div className="w-24 h-24 mx-auto bg-[#0f172a] rounded-full border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-orange-500/50 transition-colors">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent flex items-center justify-center text-orange-500">
                                        <Package className="w-8 h-8" />
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-500 text-white font-display font-bold flex items-center justify-center text-sm shadow-lg shadow-orange-500/30">04</div>
                                </div>
                                <h3 className="text-xl font-display font-bold uppercase text-white mb-3">Mass Production</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Scale up smoothly with our ISO-certified quality control and smart supply chain.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BENEFITS SECTION */}
                <section className="py-24 bg-[#0f172a]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4 text-white">Advanced Manufacturing Network</h2>
                            <p className="text-lg text-slate-400 max-w-2xl mx-auto">From rapid prototypes to high-volume production, we ensure consistent quality at every stage.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            <div className="flex gap-6 reveal-left">
                                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center text-orange-500">
                                    <RotateCcw className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold uppercase mb-3">Prototype to Production</h3>
                                    <ul className="space-y-2 text-slate-400">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> Fast iteration for R&D phases</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> Scalable production for market readiness</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-6 reveal-left" style={{ transitionDelay: '100ms' }}>
                                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center text-orange-500">
                                    <Layers className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold uppercase mb-3">Diverse Material Range</h3>
                                    <ul className="space-y-2 text-slate-400">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> Aluminum, Stainless Steel, Titanium, Brass</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> High-performance plastics (PEEK, POM, ABS)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-6 reveal-left" style={{ transitionDelay: '200ms' }}>
                                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center text-orange-500">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold uppercase mb-3">ISO-Certified Quality</h3>
                                    <ul className="space-y-2 text-slate-400">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> In-process and final inspection protocols</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> Material certifications and COAs provided</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-6 reveal-left" style={{ transitionDelay: '300ms' }}>
                                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center text-orange-500">
                                    <Activity className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold uppercase mb-3">Smart Supply Chain</h3>
                                    <ul className="space-y-2 text-slate-400">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> 600+ nodes in our manufacturing network</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> Integrated logistics and localized support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MATERIALS TABLE SECTION */}
                <section className="py-24 relative overflow-hidden bg-[#080c14] border-t border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Material Library <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Materials For CNC Parts</h2>
                        </div>

                        <div className="reveal">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10 bg-[#0f172a]">
                                            <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-orange-500 w-1/4">Category</th>
                                            <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-orange-500">Available Materials</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-6 font-display font-bold text-xl uppercase text-slate-200">Aluminum Alloys</td>
                                            <td className="px-6 py-6 text-slate-400 leading-relaxed">6061, 5052, 2A12, 7075, etc. Excellent strength-to-weight ratio, highly machinable, and corrosion resistant.</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-6 font-display font-bold text-xl uppercase text-slate-200">Stainless Steel</td>
                                            <td className="px-6 py-6 text-slate-400 leading-relaxed">301, 303, 304, 316, 316L, 321, 420, 430, 17-4PH. Durable, heat resistant, and superior corrosion resistance for food and medical use.</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-6 font-display font-bold text-xl uppercase text-slate-200">Alloy & Mold Steel</td>
                                            <td className="px-6 py-6 text-slate-400 leading-relaxed">Q235, 45 Steel, Cr12, 3Cr13, GCr15, 40Cr, 65Mn, SKD11. High hardness and wear resistance, ideal for tools and structural parts.</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-6 font-display font-bold text-xl uppercase text-slate-200">Copper & Brass</td>
                                            <td className="px-6 py-6 text-slate-400 leading-relaxed">Brass H59/H62, Copper T2, TU2, Tin Bronze, Beryllium Copper C17200. High thermal and electrical conductivity.</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-6 font-display font-bold text-xl uppercase text-slate-200">Other Alloys</td>
                                            <td className="px-6 py-6 text-slate-400 leading-relaxed">Titanium Alloy TC4, Magnesium Alloy AZ91D, Pure Iron DT4C/E. For specialized high-performance applications.</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-6 font-display font-bold text-xl uppercase text-slate-200">Engineering Plastics</td>
                                            <td className="px-6 py-6 text-slate-400 leading-relaxed">ABS, PTFE, POM (Delrin®), PMMA, PP, PPS, PU, PVC, HDPE, Nylon PA6/66, PC, PEEK. Versatile, lightweight, and cost-effective.</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-6 font-display font-bold text-xl uppercase text-slate-200">Advanced Materials</td>
                                            <td className="px-6 py-6 text-slate-400 leading-relaxed">Carbon Fiber, Graphite, Epoxy Board FR4, Phenolic Board. Exceptional strength and unique physical properties.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SURFACE FINISHES SECTION */}
                <section className="py-24 bg-[#0a0f1a] relative">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Post-Processing <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Surface Finishes</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Finish 1 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '100ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">As-Machined</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Ra 3.2 - 6.3 µm</div>
                                <p className="text-slate-400 text-sm leading-relaxed">Standard finish with visible tool marks. Ideal for functional parts where aesthetics are not critical. Available for all metals and plastics.</p>
                            </div>

                            {/* Finish 2 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '200ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Bead Blasted</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Ra 1.6 - 3.2 µm</div>
                                <p className="text-slate-400 text-sm leading-relaxed">Provides a uniform, smooth, matte appearance by brushing parts with fine abrasive media. Great for removing tool marks.</p>
                            </div>

                            {/* Finish 3 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '300ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Anodized (Type II/III)</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Ra 0.8 - 1.6 µm</div>
                                <p className="text-slate-400 text-sm leading-relaxed">Creates a hard, durable, corrosion-resistant oxide layer. Available in various colors (Type II) or as hardcoat (Type III) for maximum durability.</p>
                            </div>

                            {/* Finish 4 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '400ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Powder Coated</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">High Durability</div>
                                <p className="text-slate-400 text-sm leading-relaxed">Applies a dry powder that is cured under heat, producing a tough, wear-resistant finish in virtually any color. Ideal for external facing metal parts.</p>
                            </div>

                            {/* Finish 5 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '500ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Polished</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Ra 0.1 - 0.4 µm</div>
                                <p className="text-slate-400 text-sm leading-relaxed">Creates a highly reflective, mirror-like surface using progressively finer abrasives. Perfect for aesthetic parts or optical applications.</p>
                            </div>

                            {/* Finish 6 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '600ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Chemical Film</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Chromate Conversion</div>
                                <p className="text-slate-400 text-sm leading-relaxed">Provides excellent corrosion protection for aluminum while maintaining electrical conductivity. Often used as a base for priming or painting.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA SECTION */}
                <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0f1a] to-[#0f172a]">
                    <div className="container mx-auto px-4 text-center z-10 relative">
                        <div className="max-w-3xl mx-auto reveal">
                            <h2 className="text-5xl md:text-6xl font-display font-black uppercase mb-6 leading-none">
                                Start your <span className="gradient-text-orange">CNC Machining</span> project today
                            </h2>
                            <p className="text-xl text-slate-400 mb-10">
                                Leverage our advanced machinery and expert engineering support for your custom precision parts.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/quote" className="btn-cta px-10 py-5 rounded-md text-xl">Get Instant Quote</Link>
                                <Link to="/contact" className="px-10 py-5 rounded-md text-xl font-display font-bold uppercase border border-white/20 hover:bg-white/5 transition-colors">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default CNCLanding;
