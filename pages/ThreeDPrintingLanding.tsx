import React, { useEffect } from 'react';
import { ChevronRight, ShieldCheck, Zap, Cog, Layers, Hammer, Crosshair, Droplets, Shield, FileSearch, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThreeDPrintingLanding: React.FC = () => {
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
            {/* Scoped Styles */}
            <style>{`
        .printing-page {
          background-color: #0a0f1a;
          color: #f8fafc;
          --qm-bg: #0a0f1a;
          --qm-surface: #0f172a;
          --qm-surface-2: #1e293b;
          --qm-orange: #f97316;
          --qm-orange-light: #fb923c;
          --qm-border: rgba(255,255,255,0.08);
          font-family: 'DM Sans', 'Inter', sans-serif;
        }
        
        .printing-page h1, .printing-page h2, .printing-page h3, .printing-page .font-display { 
          font-family: 'Barlow Condensed', sans-serif !important; 
        }
        
        .gradient-text-orange {
          background: linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-card {
          background: linear-gradient(135deg, var(--qm-surface) 0%, var(--qm-surface-2) 100%);
          border: 1px solid var(--qm-border);
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .glass-card:hover {
          transform: translateY(-6px);
          border-color: rgba(249,115,22,0.4);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(249,115,22,0.1);
        }

        .btn-premium {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-family: 'Barlow Condensed', sans-serif !important;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(249,115,22,0.3);
        }
        .btn-premium:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(249,115,22,0.5);
          background: linear-gradient(135deg, #fb923c, #f97316);
        }

        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-left.visible { opacity: 1; transform: translateX(0); }
      `}</style>

            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div className="printing-page">
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-[#0a0f1a]">
                        <img
                            src="/Core%20Competencies/3d printing.jpeg"
                            alt="Industrial Metal 3D Printing Components"
                            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wide reveal-left">
                                <Zap className="w-4 h-4" />
                                ADVANCED SLM/DMLS TECHNOLOGY
                            </div>

                            <h1 className="font-display text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-6 reveal-left" style={{ transitionDelay: '100ms' }}>
                                INDUSTRIAL <span className="gradient-text-orange">METAL 3D PRINTING</span>
                            </h1>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-lg font-bold text-white reveal-left" style={{ transitionDelay: '150ms' }}>
                                <span className="flex items-center gap-2"><Cog className="w-5 h-5 text-orange-500" /> Complex Geometries</span>
                                <span className="hidden sm:inline border-l border-white/20"></span>
                                <span className="flex items-center gap-2"><Droplets className="w-5 h-5 text-orange-500" /> Conformal Cooling</span>
                                <span className="hidden sm:inline border-l border-white/20"></span>
                                <span className="flex items-center gap-2"><Layers className="w-5 h-5 text-orange-500" /> No Tooling Required</span>
                            </div>

                            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed reveal-left" style={{ transitionDelay: '200ms' }}>
                                Unlock impossible designs with direct metal laser melting. We print high-performance, fully dense metal parts in Titanium, Aluminum, Stainless Steel, and Die Steel for aerospace, medical, and tooling applications.
                            </p>

                            <div className="flex flex-wrap gap-6 reveal-left" style={{ transitionDelay: '300ms' }}>
                                <Link to="/quote" className="btn-premium px-10 py-5 rounded-md flex items-center gap-2 text-xl">
                                    Get Instant Quote <ChevronRight className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4 CORE GUARANTEES (四大支持) */}
                <section className="py-16 bg-[#0f172a]/50 border-y border-white/5 relative z-20 -mt-10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: FileSearch, title: "Free DFM Review", desc: "Expert engineers evaluate your CAD to optimize topology and support structures." },
                                { icon: Shield, title: "Strict NDA", desc: "Your intellectual property is protected with strict confidentiality agreements." },
                                { icon: Package, title: "Fast Global Delivery", desc: "Skip the tooling phase and get direct-to-metal parts shipped rapidly worldwide." },
                                { icon: ShieldCheck, title: "Worry-Free Quality", desc: "Rigorous metallurgical testing and heat treatment for 99.9% dense parts." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 glass-card reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                                        <item.icon className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-xl uppercase mb-1">{item.title}</h3>
                                        <p className="text-sm text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* METAL MATERIALS */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Aerospace Grade <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">High-Performance Metals</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto mt-4">We utilize industry-leading SLM/DMLS systems capable of processing reactive and non-reactive metals to craft parts with mechanical properties rivaling forged equivalents.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    tech: "Titanium Alloys (Ti6Al4V)",
                                    desc: "Exceptional strength-to-weight ratio and biocompatibility. Ideal for aerospace turbines and medical implants.",
                                    icon: Crosshair
                                },
                                {
                                    tech: "Aluminum (AlSi10Mg)",
                                    desc: "Lightweight with excellent thermal conductivity. Perfect for automotive parts, heat exchangers, and housings.",
                                    icon: Zap
                                },
                                {
                                    tech: "Stainless Steel (316L / 17-4PH)",
                                    desc: "High corrosion resistance and robust mechanical properties. Used in marine, food processing, and structural components.",
                                    icon: ShieldCheck
                                },
                                {
                                    tech: "Tool & Die Steel (Maraging)",
                                    desc: "Ultra-high strength and hardness. Revolutionizing injection molding with complex internal conformal cooling channels.",
                                    icon: Hammer
                                }
                            ].map((mat, idx) => (
                                <div key={idx} className="glass-card p-8 reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
                                    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center border border-white/10 mb-6 text-orange-500">
                                        <mat.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold uppercase mb-3">{mat.tech}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">{mat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* THE METAL ADVANTAGE - CAPABILITIES */}
                <section className="py-24 bg-[#080c14] border-y border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="reveal-left">
                                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-8">What Metal 3D Printing Unlocks</h2>
                                <div className="space-y-6">
                                    <div className="p-6 rounded-xl border border-white/5 bg-white/5 hover:border-orange-500/30 transition-colors">
                                        <h4 className="font-display font-bold text-2xl uppercase mb-2 text-orange-400">Topology Optimization</h4>
                                        <p className="text-slate-400">Reduce part weight by up to 60% while maintaining structural integrity. We print organic, lattice-based geometries that traditional CNC machining simply cannot reach.</p>
                                    </div>
                                    <div className="p-6 rounded-xl border border-white/5 bg-white/5 hover:border-orange-500/30 transition-colors">
                                        <h4 className="font-display font-bold text-2xl uppercase mb-2 text-orange-400">Conformal Cooling Molds</h4>
                                        <p className="text-slate-400">For injection molding tooling, we print internal cooling channels that follow the exact contour of your part, reducing cooling times by up to 40% and eliminating warpage.</p>
                                    </div>
                                    <div className="p-6 rounded-xl border border-white/5 bg-white/5 hover:border-orange-500/30 transition-colors">
                                        <h4 className="font-display font-bold text-2xl uppercase mb-2 text-orange-400">Part Consolidation</h4>
                                        <p className="text-slate-400">Combine assemblies of 20+ separate machined parts into a single, cohesive 3D printed metal component, eliminating assembly time and weak joints.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="reveal glass-card p-8 bg-slate-900/50">
                                <h3 className="text-2xl font-display font-bold uppercase mb-6 text-center">Precision Tolerances (SLM)</h3>
                                <table className="w-full text-center border-collapse text-sm">
                                    <thead>
                                        <tr className="border-b border-orange-500/20">
                                            <th className="p-4 font-bold uppercase tracking-wider text-orange-500 border-r border-white/10">Dimension</th>
                                            <th className="p-4 font-bold uppercase tracking-wider text-white">Metal Tolerance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        <tr>
                                            <td className="p-4 text-slate-300 font-medium border-r border-white/5">{'<'} 100 mm</td>
                                            <td className="p-4 text-slate-400">± 0.05 mm</td>
                                        </tr>
                                        <tr className="bg-white/[0.01]">
                                            <td className="p-4 text-slate-300 font-medium border-r border-white/5">100 - 400 mm</td>
                                            <td className="p-4 text-slate-400">± 0.1 mm</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-300 font-medium border-r border-white/5">{'>'} 400 mm</td>
                                            <td className="p-4 text-slate-400">± 0.2% + 0.1 mm</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="text-xs text-slate-500 mt-4 text-center">* Post-machining via CNC available for tighter tolerances down to ±0.01mm.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WIDELY APPLIED INDUSTRIES */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Industrial Applications <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Where Metal 3D Printing Excels</h2>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                            {[
                                "Aerospace Impellers",
                                "Conformal Cooling Molds",
                                "Medical Implants",
                                "Automotive Heat Sinks",
                                "Custom Robotics",
                                "Racing Components",
                                "Fluid Flow Manifolds",
                                "Legacy Part Replacement"
                            ].map((industry, idx) => (
                                <div key={idx} className="glass-card p-6 flex items-center justify-center text-center group reveal" style={{ transitionDelay: `${idx * 50}ms` }}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent group-hover:from-orange-500/10 transition-colors"></div>
                                    <span className="font-display font-bold text-lg uppercase tracking-wider text-slate-200 group-hover:text-orange-400 transition-colors z-10 block w-full">{industry}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA & PROCESS */}
                <section className="py-32 relative overflow-hidden bg-[#0f172a]/30 border-t border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent z-0"></div>
                    <div className="container mx-auto px-4 text-center relative z-10 reveal">
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">
                            <span>1. Upload STEP/STL</span>
                            <ChevronRight className="w-4 h-4 text-orange-500" />
                            <span>2. DFM & Quote</span>
                            <ChevronRight className="w-4 h-4 text-orange-500" />
                            <span>3. SLM Production</span>
                            <ChevronRight className="w-4 h-4 text-orange-500" />
                            <span>4. Fast Delivery</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-8 leading-none">
                            Ready to print <span className="gradient-text-orange">METAL</span> parts?
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Bypass traditional tooling constraints and accelerate your innovation. Upload your 3D models for a free engineering review and quote.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/quote" className="btn-premium px-12 py-5 rounded-md text-xl font-bold">Upload 3D File</Link>
                            <Link to="/contact" className="px-12 py-5 rounded-md text-xl font-display font-bold uppercase border border-white/20 hover:bg-white/5 transition-colors">Consult an Engineer</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ThreeDPrintingLanding;
