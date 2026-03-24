import React, { useEffect } from 'react';
import { ChevronRight, Settings, ShieldCheck, CheckCircle2, Target, Zap, Cpu, Compass, LayoutGrid, RotateCcw, Activity, Layers, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const CNCTurning: React.FC = () => {
    useSEO({
        title: "Custom CNC Turning Services - Precision Lathe Parts | QUMETAL",
        description: "CNC turning for cylindrical, square, and hexagonal parts. ±0.005mm precision. Vertical & horizontal turning centers. ISO 9001 certified with rapid 1-day lead time."
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
            {/* Required CSS mappings to keep the same aesthetic baseline */}
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
                {/* Hero Section (Matched ServiceDetail) */}
                <div className="relative min-h-[40vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#0a0f1a]">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent z-10"></div>
                        <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-20">
                        <div className="max-w-4xl reveal-left">
                            <Link to="/cnc-machining" className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-xs mb-6 hover:text-orange-400 transition-colors group">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to CNC Machining
                            </Link>
                            <h1 className="text-4xl md:text-7xl font-display font-black uppercase text-white leading-none tracking-tighter mb-6">
                                Custom CNC Turning<br />Services
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Overview Section (Matched ServiceDetail) */}
                <section className="py-20 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="reveal-left">
                                    <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                        <span className="w-8 h-px bg-orange-500"></span> Service Overview
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-slate-900 mb-8 leading-tight">
                                        High-Accuracy <br />Turning Solutions
                                    </h2>
                                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                                        Precision turning for cylindrical, square, and hexagonal materials. From micro-components to large industrial shafts with high-accuracy surface finishes.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            "Precision Finish: ±0.005mm",
                                            "Lathe Centers: 200+",
                                            "Rapid Response: 1 Day",
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
                                        <img src="/CNC/cnc-turning-new.jpg" alt="CNC Turning Center" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>



                {/* Dynamic Sections Base (Matched ServiceDetail) */}
                <section className="py-24 bg-white border-y border-slate-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 max-w-3xl mx-auto reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Technical Capabilities
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-slate-900 mb-6">Our Advanced Turning Centers</h2>
                            <p className="text-lg text-slate-500 leading-relaxed">Our vertical and horizontal turning centers offer precise, efficient machining with single to multi-axis capabilities for complex part machining.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto reveal">
                            {[
                                {
                                    title: "Vertical Turning Center",
                                    desc: "2 to 4 axes (X, Y, Z, C-axis). Vertically oriented spindle for heavy workpieces. Ideal for wheels, discs, pulleys, and large diameters.",
                                    img: "/CNC Turning Service/imgi_8_Vertical-Turning-Center.jpg"
                                },
                                {
                                    title: "Horizontal Turning Center",
                                    desc: "2 to 5 axes (X, Y, Z, C, and Y-axis). Horizontally mounted workpiece on high-precision chucks. Perfect for shafts, rods, pipes, and slender components.",
                                    img: "/CNC Turning Service/imgi_9_Horizontal-Turning-Center.jpg"
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

                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 max-w-3xl mx-auto reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Technical Capabilities
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-slate-900 mb-6">Our Turning Ability</h2>
                            <p className="text-lg text-slate-500 leading-relaxed">Our facilities handle complex geometries effortlessly using multi-axis lathes.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto reveal">
                            {[
                                {
                                    title: "Y-Axis Turning",
                                    desc: "Allows for off-center cutting, providing additional flexibility in machining features not aligned with the main axis.",
                                    img: "/CNC Turning Service/imgi_10_Y-Axis-Turning.jpg"
                                },
                                {
                                    title: "C-Axis Turning",
                                    desc: "The spindle rotates while the tool moves along X and Z axes, enabling additional capabilities like drilling and milling.",
                                    img: "/CNC Turning Service/imgi_11_C-Axis-Turning.jpg"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500 flex flex-col h-full w-full sm:w-[calc(50%-2rem)] max-w-md">
                                    <div className="relative overflow-hidden h-64 bg-slate-100 flex-shrink-0">
                                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10 transition-all duration-500"></div>
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow text-center">
                                        <h4 className="text-xl font-display font-bold text-slate-900 uppercase mb-3 group-hover:text-orange-600 transition-colors tracking-tight">
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

                <section className="py-24 bg-white border-y border-slate-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 max-w-3xl mx-auto reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Technical Capabilities
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-slate-900 mb-6">Materials For CNC Turning</h2>
                            <p className="text-lg text-slate-500 leading-relaxed">We work with a wide range of metals and plastics to meet your specific application requirements.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto reveal">
                            {[
                                {
                                    title: "Brass",
                                    desc: "Provides fine detail and accuracy in CNC turning, making it ideal for applications that require both functionality and visual appeal.",
                                    img: "/CNC Turning Service/imgi_14_Brass-CNC-Turning.jpg"
                                },
                                {
                                    title: "Aluminum",
                                    desc: "Excellent strength-to-weight ratio and machinability. Perfect for aerospace, automotive, and electronic components.",
                                    img: "/CNC Turning Service/imgi_15_Aluminum-CNC-Turning.jpg"
                                },
                                {
                                    title: "Plastics",
                                    desc: "Turning plastics like acrylic, PC, and nylon allows for the production of precise parts with a smooth, consistent finish.",
                                    img: "/CNC Turning Service/imgi_16_Plastic-CNC-Turning.jpg"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500 flex flex-col h-full w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-sm">
                                    <div className="relative overflow-hidden h-56 bg-slate-100 flex-shrink-0">
                                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10 transition-all duration-500"></div>
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow text-center">
                                        <h4 className="text-xl font-display font-bold text-slate-900 uppercase mb-3 group-hover:text-orange-600 transition-colors tracking-tight">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-slate-500 leading-relaxed flex-grow font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Project Showcase Section (Matched ServiceDetail) */}
                <section className="py-24 bg-slate-50 border-t border-slate-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Project Showcase
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-slate-900">Portfolio Highlights</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto reveal" style={{ transitionDelay: '100ms' }}>
                            {[
                                {
                                    img: "/CNC Turning Service/imgi_50_CNC-Precision-Turning.jpg",
                                    title: "Precision Turned Part",
                                    desc: "High-accuracy component showcasing exceptional surface excellence & tight tolerances."
                                },
                                {
                                    img: "/CNC Turning Service/imgi_23_Y-Axis-Turning-768x509.jpg",
                                    title: "CNC Machining Components",
                                    desc: "Complex CNC turned parts achieving ISO 2768 standards for consistent precision across batches."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-orange-500/20 hover:shadow-xl transition-all flex flex-col h-full">
                                    <div className="relative overflow-hidden aspect-video">
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div className="p-6 text-center">
                                        <h4 className="font-display font-bold text-2xl uppercase text-slate-900 mb-2">{item.title}</h4>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 bg-[#0a0f1a]">
                    <div className="container mx-auto px-6 text-center reveal">
                        <h2 className="text-4xl md:text-6xl text-white font-display font-black uppercase mb-8">Start Your Turning Project</h2>
                        <Link to="/quote" className="px-12 py-5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-md text-xl transition-all inline-flex items-center gap-3 group shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                            Request Turning Quote <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default CNCTurning;
