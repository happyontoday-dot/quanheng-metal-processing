import React, { useEffect } from 'react';
import { ChevronRight, Settings, ShieldCheck, CheckCircle2, Target, Zap, Cpu, Compass, LayoutGrid, RotateCcw, Activity, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const CNCTurning: React.FC = () => {
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
                        <img src="/CNC Turning Service/imgi_49_CNC-Turning-Service.jpg" alt="Turning Center" className="w-full h-full object-cover opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold reveal-left">
                                <Compass className="w-4 h-4" /> HIGH-ACCURACY TURNING SOLUTIONS
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-6 reveal-left" style={{ transitionDelay: '100ms' }}>
                                CUSTOM <span className="gradient-text-orange">CNC TURNING</span><br />SERVICES
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed reveal-left" style={{ transitionDelay: '200ms' }}>
                                Precision turning for cylindrical, square, and hexagonal materials. From micro-components to large industrial shafts with high-accuracy surface finishes.
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
                                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-2">Precision Finish</div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="text-4xl font-display font-bold text-white">200<span className="text-orange-500 text-2xl">+</span></div>
                                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-2">Lathe Centers</div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="text-4xl font-display font-bold text-white">1<span className="text-orange-500 text-2xl"> Day</span></div>
                                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-2">Rapid Response</div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '300ms' }}>
                                <div className="text-4xl font-display font-bold text-orange-500">ISO-9001</div>
                                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-2">Quality Certified</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CAPABILITIES */}
                <section className="py-24 bg-[#080c14]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16 reveal">
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">Turning & Mill-Turn Capabilities</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">Advanced multi-axis control for streamlined production and superior accuracy.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="steel-card p-8 reveal">
                                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-6">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-display font-bold uppercase mb-4">Turning Centers</h3>
                                <ul className="space-y-3 text-slate-400 text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" /> Horizontal Turning Centers</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" /> Vertical Turret Lathes (VTL)</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" /> Multi-Spindle Tooling</li>
                                </ul>
                            </div>

                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-6">
                                    <LayoutGrid className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-display font-bold uppercase mb-4">Control Options</h3>
                                <ul className="space-y-3 text-slate-400 text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" /> Y-Axis for off-center features</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" /> C-Axis for live tool milling</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" /> Dual-axis sub-spindle systems</li>
                                </ul>
                            </div>

                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-6">
                                    <Cpu className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-display font-bold uppercase mb-4">Material Specialization</h3>
                                <ul className="space-y-3 text-slate-400 text-sm">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" /> Hardened Steels & alloys</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" /> Aerospace Titanium alloys</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" /> Medical grade Thermoplastics</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SHOWCASE */}
                <section className="py-24 border-t border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="grid grid-cols-2 gap-4 reveal">
                                <img src="/CNC Turning Service/imgi_49_CNC-Turning-Service.jpg" alt="Metal turned part" className="rounded-lg border border-white/10 w-full h-64 object-cover" />
                                <img src="/CNC Turning Service/imgi_14_Brass-CNC-Turning.jpg" alt="Brass component" className="rounded-lg border border-white/10 w-full h-64 object-cover mt-8" />
                            </div>
                            <div className="reveal">
                                <h2 className="text-4xl font-display font-bold uppercase mb-6 leading-tight">Advanced Turning<br />Applications</h2>
                                <p className="text-slate-400 mb-8 leading-relaxed">From micro-turned electronic pins to large shafts for marine and energy sectors, or precision brass fittings, we deliver consistency at every scale.</p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded bg-orange-500/10 flex items-center justify-center text-orange-500">
                                            <RotateCcw className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm">Prototype to Scale</h4>
                                            <p className="text-slate-500 text-xs">Seamless transition from single-unit R&D to 10,000+ unit production runs.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded bg-orange-500/10 flex items-center justify-center text-orange-500">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm">Regulatory Compliance</h4>
                                            <p className="text-slate-500 text-xs">Full traceability and material certs for medical and defense applications.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 bg-gradient-to-b from-[#0a0f1a] to-[#000]">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-8 reveal">Start Your Turning Project</h2>
                        <div className="reveal">
                            <Link to="/quote" className="px-12 py-5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-md text-xl transition-all inline-flex items-center gap-3 group">
                                Request Turning Quote <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CNCTurning;
