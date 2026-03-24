import React, { useEffect } from 'react';
import { ChevronRight, ShieldCheck, Box, Hammer, Shield, Battery, Bolt, Cog, Settings, Factory, CheckCircle, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const MetalEnclosuresLanding: React.FC = () => {
    useSEO({
        title: "Custom Metal Enclosures & Housings - IP65/IP68 Rated | QUMETAL",
        description: "OEM custom metal enclosures from aluminum, stainless steel, and sheet metal. IP65-IP68 rated. NEMA compliant. Save 30-60% vs. local fabrication with global delivery."
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
        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Helper component for standardizing the image grids
    const ImageGridSection = ({ title, subtitle, items, columns = "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" }: any) => (
        <section className="py-24 relative border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 reveal">
                    <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                        <span className="w-8 h-px bg-orange-500"></span> {subtitle} <span className="w-8 h-px bg-orange-500"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">{title}</h2>
                </div>
                <div className={`grid ${columns} gap-6 md:gap-8 max-w-7xl mx-auto`}>
                    {items.map((item: any, idx: number) => (
                        <div key={idx} className="group glass-card overflow-hidden reveal bg-slate-900/40 border border-white/5 hover:border-orange-500/30 transition-all duration-500" style={{ transitionDelay: `${idx * 100}ms` }}>
                            <div className="relative h-48 md:h-56 overflow-hidden bg-slate-800">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-10 opacity-60"></div>
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                            </div>
                            <div className="p-5 relative z-20">
                                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{item.title}</h3>
                                {item.description && <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    return (
        <div className="bg-[#0a0f1a] text-slate-50 min-h-screen font-sans selection:bg-orange-500/30">
            {/* Scoped Styles */}
            <style>{`
        .enclosures-page {
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
        
        .enclosures-page h1, .enclosures-page h2, .enclosures-page h3, .enclosures-page .font-display { 
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
        .reveal-scale { opacity: 0; transform: scale(0.95); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-scale.visible { opacity: 1; transform: scale(1); }
      `}</style>
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div className="enclosures-page">
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-[#0a0f1a]">
                        <img
                            src="/enclosures/imgi_77_Metal-Enclosure-Manufacturer.jpg"
                            alt="Custom Metal Enclosures and Cabinets OEM Manufacturer"
                            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] to-transparent h-40"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wide reveal-left">
                                <Shield className="w-4 h-4" />
                                Save 30-60% vs. Local Fabrication
                            </div>

                            <h1 className="font-display text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-6 reveal-left" style={{ transitionDelay: '100ms' }}>
                                CUSTOM METAL <br /> <span className="gradient-text-orange">ENCLOSURES & HOUSINGS</span>
                            </h1>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-lg font-bold text-white reveal-left" style={{ transitionDelay: '150ms' }}>
                                <span className="flex items-center gap-2"><Settings className="w-5 h-5 text-orange-500" /> Complete Customization</span>
                                <span className="hidden sm:inline border-l border-white/20"></span>
                                <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-orange-500" /> NEMA / IP65-IP68 Rated</span>
                                <span className="hidden sm:inline border-l border-white/20"></span>
                                <span className="flex items-center gap-2"><Factory className="w-5 h-5 text-orange-500" /> Automated Production</span>
                            </div>

                            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed reveal-left" style={{ transitionDelay: '200ms' }}>
                                We provide comprehensive enclosure solutions from design to assembly for various industries. Protect your most critical electrical and mechanical components with premium-grade enclosures fabricated from Aluminum, Stainless Steel, and Sheet Metal.
                            </p>

                            <div className="flex flex-wrap gap-6 reveal-left" style={{ transitionDelay: '300ms' }}>
                                <Link to="/quote" className="btn-premium px-10 py-5 rounded-md flex items-center gap-2 text-xl">
                                    Request Custom Quote <ChevronRight className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>



                {/* BY APPLICATIONS */}
                <div id="applications">
                    <ImageGridSection
                        title="Specialized Application Housings"
                        subtitle="Industry Segments"
                        columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                        items={[
                            { title: "Electrical Cabinet", description: "Robust cabinets for industrial control panels, switchgear, and automation.", image: "/enclosures/imgi_24_Electrical-Cabinet.jpg" },
                            { title: "Battery Enclosure", description: "Durable and ventilated enclosures for batteries, focused on thermal management.", image: "/enclosures/imgi_25_Battery-Enclosure.jpg" },
                            { title: "Metal Junction Box", description: "Securely houses sensitive electrical connections from environmental factors.", image: "/enclosures/imgi_21_Metal-Junction-Box.jpg" },
                            { title: "Generators Enclosure", description: "Heavy-duty outdoor housings that reduce noise and protect backup generators.", image: "/enclosures/imgi_20_Metal-Generator-Enclosure.jpg" },
                            { title: "Busbar Panel Box", description: "Specialized enclosures specifically fabricated for housing busbar distribution systems.", image: "/enclosures/imgi_22_Busbar-Panel-Box.jpg" },
                            { title: "MCB Metal Box", description: "Protective enclosures for Miniature Circuit Breakers in complex distribution boards.", image: "/enclosures/imgi_23_MCB-Metal-Box.jpg" },
                            { title: "Metal Adaptable Box", description: "Versatile enclosures suited for various custom electrical connections.", image: "/enclosures/imgi_19_Metal-Adaptable-Box.jpg" },
                            { title: "Metal Socket Box", description: "Ultra-durable metal boxes intended for industrial power outlets and switch housings.", image: "/enclosures/imgi_18_Metal-Socket-Box.jpg" }
                        ]}
                    />
                </div>

                {/* BY INSTALLATION METHODS */}
                <div id="installations" className="bg-[#080c14]">
                    <ImageGridSection
                        title="Form Factors & Deployments"
                        subtitle="Installation Methods"
                        columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                        items={[
                            { title: "Free Standing Enclosure", description: "Large, standalone units tailored for complex structural control systems.", image: "/enclosures/imgi_14_Free-Standing-Enclosure.jpg" },
                            { title: "Wall Mount Enclosure", description: "Space-saving designed to be securely mounted directly on walls or poles.", image: "/enclosures/imgi_15_Wall-Mount-Enclosure.jpg" },
                            { title: "Flush Mount Enclosure", description: "Recessed seamlessly into walls for a clean, low-profile safety appearance.", image: "/enclosures/imgi_16_Flush-Mount-Enclosure.jpg" },
                            { title: "Rack Mount Enclosure", description: "Standardized enclosures structured to fit into standard 19-inch IT racks.", image: "/enclosures/imgi_17_Rack-Mount-Enclosure.jpg" }
                        ]}
                    />
                </div>

                {/* BY MATERIAL OVERVIEW */}
                <section id="materials" className="py-24 border-t border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="reveal-left">
                                <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                    <span className="w-8 h-px bg-orange-500"></span> Substrates Library <span className="w-8 h-px bg-orange-500"></span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-8">Material Flexibility</h2>
                                <p className="text-xl text-slate-400 mb-8">We engineer with precision using diverse metals tailored to resist harsh chemicals, coastal climates, hygienic operations, and extreme mechanical stress.</p>

                                <div className="space-y-4">
                                    {[
                                        { title: "Aluminum Enclosure", desc: "Lightweight, highly conductive, natively corrosion-resistant. Ideal for heatsinks.", image: "/enclosures/imgi_8_Aluminum-Enclosure.jpg" },
                                        { title: "304 & 316 Stainless Steel", desc: "Food-grade, marine-grade defense against relentless salt and caustic chemicals.", image: "/enclosures/imgi_9_304-Stainless-Steel-Enclosure.jpg" },
                                        { title: "Mild & Carbon Steel", desc: "Unmatched mechanical strength and structural integrity for heavy payloads.", image: "/enclosures/imgi_11_Mild-Steel-Enclosure.jpg" },
                                        { title: "Galvanized Steel", desc: "Cost-effective shielding utilizing heavy zinc-coating for outdoor longevity.", image: "/enclosures/imgi_12_Galvanized-Steel-Enclosure.jpg" }
                                    ].map((mat, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/30 hover:border-orange-500/30 transition-colors">
                                            <CheckCircle className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-display font-bold text-xl uppercase text-slate-200">{mat.title}</h4>
                                                <p className="text-slate-400 text-sm mt-1">{mat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 reveal-right">
                                <img src="/enclosures/imgi_9_304-Stainless-Steel-Enclosure.jpg" className="rounded-xl w-full h-48 md:h-64 object-cover border border-white/10" alt="Stainless Steel" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/enclosures/imgi_11_Mild-Steel-Enclosure.jpg" className="rounded-xl w-full h-48 md:h-64 object-cover border border-white/10 mt-8" alt="Mild Steel" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/enclosures/imgi_12_Galvanized-Steel-Enclosure.jpg" className="rounded-xl w-full h-48 md:h-64 object-cover border border-white/10 -mt-8" alt="Galvanized" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/enclosures/imgi_8_Aluminum-Enclosure.jpg" className="rounded-xl w-full h-48 md:h-64 object-cover border border-white/10" alt="Aluminum" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* BY IP RATING */}
                <div id="ip-rating" className="bg-[#080c14]">
                    <ImageGridSection
                        title="Defying The Elements"
                        subtitle="IP Shielding Grades"
                        columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                        items={[
                            { title: "IP65 Rating", description: "Dust-tight construction perfectly protected against forceful low-pressure water jets.", image: "/enclosures/imgi_26_IP65-Metal-Enclosure.jpg" },
                            { title: "IP66 Rating", description: "Heavy-duty dust-tight seals built to withstand heavy seas and powerful water streams.", image: "/enclosures/imgi_27_IP66-Metal-Enclosure.jpg" },
                            { title: "IP67 Rating", description: "Engineered to protect critical internals against the effects of temporary water immersion.", image: "/enclosures/imgi_28_IP67-Metal-Enclosure.jpg" },
                            { title: "IP68 Rating", description: "Submersible grade, hermetically sealed against continuous heavy water pressure.", image: "/enclosures/imgi_29_IP68-Metal-Enclosure.jpg" }
                        ]}
                    />
                </div>

                {/* BY MANUFACTURING PROCESS */}
                <section id="processes" className="py-24 border-t border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent skew-x-12 translate-x-32 hidden lg:block"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Fabrication Methodologies <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">How We Build It</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Sheet Metal Fabricated", desc: "Precision CNC laser cutting, turret punching, and robotic bending. Ideal for low-to-high volume custom geometry.", image: "/enclosures/imgi_30_Sheet-Metal-Enclosure.jpg", icon: LayoutGrid },
                                { title: "Extruded Enclosures", desc: "Solid aluminum forced through custom dies forming continuous rugged profiles. The ultimate choice for customized PCB housings.", image: "/enclosures/imgi_31_Extruded-Aluminium-Enclosure.jpg", icon: Box },
                                { title: "Die Casted Enclosures", desc: "High-pressure molten aluminum or zinc molded into highly complex, repeatable watertight cases.", image: "/enclosures/imgi_32_Die-Cast-Enclosure.jpg", icon: Cog }
                            ].map((mat, idx) => (
                                <div key={idx} className="glass-card p-8 reveal-scale" style={{ transitionDelay: `${idx * 150}ms` }}>
                                    <h3 className="text-2xl font-display font-bold uppercase mb-4 text-orange-400">{mat.title}</h3>
                                    <p className="text-slate-300 mb-6">{mat.desc}</p>
                                    <div className="aspect-video relative rounded-lg overflow-hidden border border-white/10">
                                        <img src={mat.image} className="w-full h-full object-cover" alt={mat.title} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA & PROCESS */}
                <section className="py-32 relative overflow-hidden bg-[#0a0f1a] border-t border-white/5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_70%)] opacity-50 z-0"></div>
                    <div className="container mx-auto px-4 text-center relative z-10 reveal">
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">
                            <span>1. Engineering CAD</span>
                            <ChevronRight className="w-4 h-4 text-orange-500" />
                            <span>2. Prototype / NPI</span>
                            <ChevronRight className="w-4 h-4 text-orange-500" />
                            <span>3. Mass Fabrication</span>
                            <ChevronRight className="w-4 h-4 text-orange-500" />
                            <span>4. Global Logistics</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-display font-black uppercase mb-8 leading-none">
                            SECURE YOUR <span className="gradient-text-orange">HARDWARE</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Take control of your supply chain. We manufacture precision housing with superior protective capabilities at industry-leading cost efficiency.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/quote" className="btn-premium px-12 py-5 rounded-md text-xl font-bold shrink-0">Get Your Direct Quote</Link>
                            <Link to="/contact" className="px-12 py-5 rounded-md text-xl font-display font-bold uppercase border border-white/20 hover:bg-white/5 transition-colors shrink-0 backdrop-blur-sm">Contact Us</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MetalEnclosuresLanding;
