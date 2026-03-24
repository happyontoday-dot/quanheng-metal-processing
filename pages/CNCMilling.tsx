import React, { useEffect } from 'react';
import { ChevronRight, Settings, ShieldCheck, CheckCircle2, Cpu, Zap, Box, Maximize, Rotate3d, Compass, Layers, RotateCcw, Activity, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const CNCMilling: React.FC = () => {
    useSEO({
        title: "Custom CNC Milling Services - 3/4/5-Axis Machining | QUMETAL",
        description: "High-precision CNC milling with 3, 4, and 5-axis centers. Tolerance ±0.005mm. Fast prototypes in 24h. ISO 9001 certified factory for aerospace, medical, and industrial parts."
    });

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
        <div className="w-full fade-in bg-slate-50 min-h-screen font-sans selection:bg-orange-500/30">
            <style>{`
                .cnc-page h1, .cnc-page h2, .cnc-page h3, .cnc-page h4, .font-display { 
                    font-family: 'Barlow Condensed', sans-serif !important; 
                }
                .reveal { opacity: 0; transform: translateY(30px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal.visible { opacity: 1; transform: translateY(0); }
                .reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-left.visible { opacity: 1; transform: translateX(0); }
            `}</style>

            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div className="cnc-page">
                {/* Hero Section */}
                <div className="relative min-h-[40vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#0a0f1a]">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent z-10"></div>
                        <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-20">
                        <div className="max-w-4xl reveal-left">
                            <Link to="/cnc-machining" className="flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-xs mb-6 hover:text-orange-400 transition-colors group w-fit">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to CNC Machining
                            </Link>
                            <h1 className="text-4xl md:text-7xl font-display font-black uppercase text-white leading-none tracking-tighter mb-6">
                                Custom CNC Milling<br />Services
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Overview Section */}
                <section className="py-20 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="reveal-left">
                                    <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                        <span className="w-8 h-px bg-orange-500"></span> Service Overview
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-slate-900 mb-8 leading-tight">
                                        Precision Milling <br />Solutions
                                    </h2>
                                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                                        High-precision milling for complex 3D parts and tight tolerances. Utilizing advanced 3, 4, and 5-axis centers for aerospace, medical, and industrial applications.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            "Precision Accuracy: ±0.005mm",
                                            "Axis Capabilities: 3 / 4 / 5",
                                            "Prototype Leads: 24h",
                                            "Quality Certified: ISO-9001"
                                        ].map((feature, idx) => (
                                            <div key={idx} className="flex gap-3 items-start p-3 rounded-lg bg-slate-50 border border-slate-100">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative reveal">
                                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
                                        <img src="/cnc-milling/imgi_46_Custom-CNC-Milling.jpg" alt="Milling Center" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 1: Milling Center Types */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 max-w-3xl mx-auto reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Technical Capabilities
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-slate-900 mb-6">Our CNC Milling Center Types</h2>
                            <p className="text-lg text-slate-500 leading-relaxed">Our state-of-the-art milling centers allow us to handle a wide range of complex machining tasks with efficiency and precision.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto reveal">
                            {[
                                {
                                    title: "Vertical Milling Center",
                                    desc: "Typically has 3 axis configurations with an oriented vertical spindle. Best for face milling, end milling, and intricate 3D contours. Ideal for shorter production runs.",
                                    img: "/cnc-milling/imgi_8_Vertical-Milling-Center.jpg"
                                },
                                {
                                    title: "Horizontal Milling Center",
                                    desc: "Features 3~5 axis capabilities with a horizontal spindle for heavy cutting and deep cavities. Ideal for large workpieces requiring multiple operations and mass production.",
                                    img: "/cnc-milling/imgi_9_Horizontal-Milling-Center.jpg"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500 flex flex-col h-full w-full sm:w-[calc(50%-2rem)] max-w-md">
                                    <div className="relative overflow-hidden h-64 bg-slate-100 flex-shrink-0">
                                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10 transition-all duration-500"></div>
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow text-center">
                                        <h4 className="text-2xl font-display font-bold text-slate-900 uppercase mb-3 group-hover:text-orange-600 transition-colors tracking-tight">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-500 leading-relaxed flex-grow font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 2: Axis Configuration */}
                <section className="py-24 bg-white border-y border-slate-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 max-w-4xl mx-auto reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Axis Capabilities
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-slate-900 mb-6">Axis Configuration</h2>
                            <p className="text-lg text-slate-500 leading-relaxed">From straightforward 3-axis tasks to high-precision 5-axis complex geometries.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto reveal">
                            {[
                                {
                                    title: "3-Axis Milling (X, Y, Z)",
                                    desc: "The tool moves in three directions—left/right, forward/backward, and up/down. Simple to operate and suitable for low complexity precision parts.",
                                    img: "/cnc-milling/imgi_10_3-Axis-Milling.gif"
                                },
                                {
                                    title: "4-Axis Milling (X, Y, Z, A)",
                                    desc: "Adds a rotational A-axis, allowing the workpiece to rotate around the X-axis. Significantly reduces repositioning and is ideal for intricate wrap-around shapes.",
                                    img: "/cnc-milling/imgi_11_4-Axis-Milling.gif"
                                },
                                {
                                    title: "5-Axis Milling (X, Y, Z, B, C)",
                                    desc: "Features two additional rotational axes (B and C). Can produce highly complex geometries with a single setup, ideal for high-precision aerospace components.",
                                    img: "/cnc-milling/imgi_12_5-Axis-Milling.gif"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500">
                                    <div className="relative overflow-hidden h-64 bg-slate-900/5 border-b border-slate-100 flex items-center justify-center p-4 py-8">
                                        <img src={item.img} alt={item.title} className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110" style={{ mixBlendMode: 'darken' }} />
                                    </div>
                                    <div className="p-8 text-center bg-white h-full relative z-10">
                                        <h4 className="text-xl font-display font-bold text-slate-900 uppercase mb-4 group-hover:text-orange-600 transition-colors tracking-tight">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 3: Applications */}
                <section className="py-24 bg-slate-50 border-t border-slate-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 max-w-3xl mx-auto reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Technical Applications
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-slate-900 mb-6">Milling Applications</h2>
                            <p className="text-lg text-slate-500 leading-relaxed">Whether your project involves intricate micro parts or larger components, we are committed to delivering results with ISO 2768 tolerance standards.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto reveal mt-12">
                            {[
                                {
                                    title: "PCB Manufacturing",
                                    desc: "Precise routing, drilling, and etching for board outlines, component holes, and fine circuit traces.",
                                    img: "/cnc-milling/imgi_16_PCB-CNC-Milling.jpg",
                                    icon: <Activity className="w-6 h-6" />
                                },
                                {
                                    title: "Aerospace Components",
                                    desc: "Machining titanium and aluminum alloys for turbine blades, engine parts, and critical structural components.",
                                    img: "/cnc-milling/imgi_17_Aerospace-CNC-Milling.jpg",
                                    icon: <ShieldCheck className="w-6 h-6" />
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-orange-500/20 transition-all duration-300">
                                    <div className="relative overflow-hidden aspect-[16/9] w-full bg-slate-100">
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="p-6 flex items-start gap-4">
                                        <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded flex items-center justify-center shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-2">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-slate-500 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 bg-[#0a0f1a]">
                    <div className="container mx-auto px-6 text-center reveal">
                        <h2 className="text-4xl md:text-6xl text-white font-display font-black uppercase mb-8">Ready for Tight Tolerances?</h2>
                        <Link to="/quote" className="px-12 py-5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-md text-xl transition-all inline-flex items-center gap-3 group shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                            Start Your Quote <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default CNCMilling;
