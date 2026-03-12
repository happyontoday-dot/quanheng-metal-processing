import React, { useEffect } from 'react';
import { ChevronRight, Settings, ShieldCheck, CheckCircle2, Cpu, Zap, Box, Maximize, Rotate3d, Compass, Layers, RotateCcw, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const CNCMilling: React.FC = () => {
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
        
        .cnc-page h1, .cnc-page h2, .cnc-page h3, .cnc-page .font-display { 
          font-family: 'Barlow Condensed', sans-serif !important; 
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
        .steel-card:hover {
          transform: translateY(-4px);
          border-color: rgba(249,115,22,0.3);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(249,115,22,0.08);
        }

        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-left.visible { opacity: 1; transform: translateX(0); }
      `}</style>

            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div className="cnc-page">
                {/* HERO */}
                <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src="/cnc-milling/imgi_47_CNC-Milling-Service.jpg" alt="Milling Center" className="w-full h-full object-cover opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold reveal-left">
                                <Compass className="w-4 h-4" /> PRECISION MILLING SOLUTIONS
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-6 reveal-left" style={{ transitionDelay: '100ms' }}>
                                CUSTOM <span className="gradient-text-orange">CNC MILLING</span><br />SERVICES
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed reveal-left" style={{ transitionDelay: '200ms' }}>
                                High-precision milling for complex 3D parts and tight tolerances. Utilizing advanced 3, 4, and 5-axis centers for aerospace, medical, and industrial applications.
                            </p>
                            <div className="flex flex-wrap gap-4 reveal-left" style={{ transitionDelay: '300ms' }}>
                                <Link to="/quote" className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-md flex items-center gap-2 transition-all">
                                    Get Instant Quote <ChevronRight className="w-5 h-5" />
                                </Link>
                                <Link to="/contact" className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold rounded-md transition-all">
                                    Engineering Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STATS */}
                <section className="border-y border-white/10 bg-[#0f172a]/50 backdrop-blur-md">
                    <div className="container mx-auto px-6 py-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                            <div className="reveal">
                                <div className="text-4xl font-display font-bold text-white">±0.005<span className="text-orange-500 text-2xl">mm</span></div>
                                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-2">Precision Accuracy</div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="text-4xl font-display font-bold text-white">3 / 4 / 5</div>
                                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-2">Axis Capabilities</div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="text-4xl font-display font-bold text-white">24<span className="text-orange-500 text-2xl">h</span></div>
                                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-2">Prototype Leads</div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '300ms' }}>
                                <div className="text-4xl font-display font-bold text-orange-500">ISO-9001</div>
                                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-2">Quality Certified</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MILLING CENTER TYPES */}
                <section className="py-24 bg-[#080c14]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16 reveal">
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4 text-orange-500">Our CNC Milling Center Types</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">Our state-of-the-art milling centers allow us to handle a wide range of complex machining tasks with efficiency and precision.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="steel-card group reveal">
                                <div className="h-52 overflow-hidden relative border-b border-white/5">
                                    <img src="/cnc-milling/imgi_8_Vertical-Milling-Center.jpg" alt="Vertical Milling Center" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-display font-bold uppercase mb-4">Vertical Milling Center (VMC)</h3>
                                    <ul className="space-y-3 text-slate-400">
                                        <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" /> Typically has 3 axis configurations</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" /> Oriented vertical spindle for handling smaller to medium parts</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" /> Best for face milling, end milling, and complex 3D contours</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" /> Ideal for shorter production runs and prototype work</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="steel-card group reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="h-52 overflow-hidden relative border-b border-white/5">
                                    <img src="/cnc-milling/imgi_9_Horizontal-Milling-Center.jpg" alt="Horizontal Milling Center" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-display font-bold uppercase mb-4">Horizontal Milling Center (HMC)</h3>
                                    <ul className="space-y-3 text-slate-400">
                                        <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" /> Have 3~5 axis options available</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" /> Oriented horizontal spindle for heavy cutting and deep cavities</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" /> Ideal for large workpieces requiring multiple operations</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" /> Better suited for large production and mass production</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AXIS CONFIGURATION */}
                <section className="py-24 bg-[#0a0f1a] border-t border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16 reveal">
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">Axis Configuration</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">From straightforward tasks to high-precision complex geometries.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="steel-card p-6 reveal">
                                <div className="h-64 overflow-hidden relative rounded mb-6 bg-slate-900/50">
                                    <img src="/cnc-milling/imgi_10_3-Axis-Milling.gif" alt="3-Axis Milling" className="w-full h-full object-contain mix-blend-lighten" />
                                </div>
                                <h3 className="text-xl font-display font-bold uppercase mb-4 text-white">3-Axis Milling (X, Y, Z)</h3>
                                <p className="text-sm text-slate-400 leading-relaxed mb-4">The tool moves in three directions—left/right, forward/backward, and up/down. Simple to operate and suitable for low complexity parts.</p>
                            </div>

                            <div className="steel-card p-6 reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="h-64 overflow-hidden relative rounded mb-6 bg-slate-900/50">
                                    <img src="/cnc-milling/imgi_11_4-Axis-Milling.gif" alt="4-Axis Milling" className="w-full h-full object-contain mix-blend-lighten" />
                                </div>
                                <h3 className="text-xl font-display font-bold uppercase mb-4 text-white">4-Axis Milling (X, Y, Z, A)</h3>
                                <p className="text-sm text-slate-400 leading-relaxed mb-4">Adds a rotational A-axis, allowing the workpiece to rotate around the X-axis. Reduces repositioning and is ideal for intricate shapes.</p>
                            </div>

                            <div className="steel-card p-6 reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="h-64 overflow-hidden relative rounded mb-6 bg-slate-900/50">
                                    <img src="/cnc-milling/imgi_12_5-Axis-Milling.gif" alt="5-Axis Milling" className="w-full h-full object-contain mix-blend-lighten" />
                                </div>
                                <h3 className="text-xl font-display font-bold uppercase mb-4 text-white">5-Axis Milling (X, Y, Z, B, C)</h3>
                                <p className="text-sm text-slate-400 leading-relaxed mb-4">Features two additional rotational axes (B and C). Produces complex geometries with a single setup, ideal for high-precision aerospace parts.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* APPLICATIONS SECTION */}
                <section className="py-24 border-t border-white/5 bg-[#080c14]">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="reveal-left">
                                <h2 className="text-4xl font-display font-bold uppercase mb-6 leading-tight">CNC Milling Applications</h2>
                                <p className="text-slate-400 mb-10 leading-relaxed">Whether your project involves intricate micro parts or larger components, we are committed to delivering results with ISO 2768 tolerance standards.</p>

                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="w-16 h-16 rounded bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                                            <Activity className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-display font-bold uppercase text-white mb-2">PCB Manufacturing</h4>
                                            <p className="text-sm text-slate-400">Precise routing, drilling, and etching for board outlines, component holes, and fine circuit traces.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-16 h-16 rounded bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                                            <ShieldCheck className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-display font-bold uppercase text-white mb-2">Aerospace Components</h4>
                                            <p className="text-sm text-slate-400">Machining titanium and aluminum alloys for turbine blades, engine parts, and critical structural components.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 reveal">
                                <div className="space-y-4">
                                    <img src="/cnc-milling/imgi_16_PCB-CNC-Milling.jpg" alt="PCB Milling" className="rounded-lg border border-white/10 w-full h-48 object-cover" />
                                    <img src="/cnc-milling/imgi_17_Aerospace-CNC-Milling.jpg" alt="Aerospace Milling" className="rounded-lg border border-white/10 w-full h-64 object-cover" />
                                </div>
                                <div className="pt-8">
                                    <img src="/cnc-milling/imgi_46_Custom-CNC-Milling.jpg" alt="Custom Milling" className="rounded-lg border border-white/10 w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 bg-gradient-to-b from-[#0a0f1a] to-[#000]">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-8 reveal">Ready for Tight Tolerances?</h2>
                        <div className="reveal">
                            <Link to="/quote" className="px-12 py-5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-md text-xl transition-all inline-flex items-center gap-3 group">
                                Start Your Quote <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CNCMilling;
