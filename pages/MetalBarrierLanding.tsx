import React, { useEffect } from 'react';
import { ChevronRight, Shield, Settings, CheckCircle, Star, Package, Wrench, Truck, Zap, Award, Users, Layers, AlertTriangle, Construction, Milestone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const MetalBarrierLanding: React.FC = () => {
    useSEO({
        title: "Custom Metal Barriers - OEM Crowd Control & Safety Barrier Manufacturer | QUMETAL",
        description: "Premium OEM metal barrier manufacturer. Custom crowd control barriers, road safety guardrails, pedestrian barriers, bollards, and isolation barriers. Hot-dip galvanised, powder coated. Factory direct pricing."
    });

    useEffect(() => {
        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };
        const observerOptions = { threshold: 0.08, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elements = document.querySelectorAll('.mb-reveal, .mb-reveal-left, .mb-reveal-right, .mb-reveal-scale');
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const productCategories = [
        {
            title: "Crowd Control Barriers",
            description: "Portable interlocking steel barriers for events, concerts, and public gatherings. Flat-foot or bridge-foot design with hot-dip galvanised finish. Easy to transport and stack.",
            image: "/metal-barrier/crowd-control.png",
            tags: ["Interlocking", "Galvanised", "1.1m × 2.2m Standard"],
        },
        {
            title: "Road Safety Barriers",
            description: "W-beam and Thrie-beam highway guardrails with posts and spacer blocks. Crash-tested to international standards. Galvanised for extreme weather endurance.",
            image: "/metal-barrier/road-safety.png",
            tags: ["W-Beam", "Crash Tested", "AASHTO / EN 1317"],
        },
        {
            title: "Pedestrian Guardrails",
            description: "Tubular steel handrail and infill bar guardrails for sidewalks, bridges, car parks, and pedestrian zones. Powder coated in safety yellow, black, or custom RAL colours.",
            image: "/metal-barrier/pedestrian-guardrail.png",
            tags: ["Tubular Steel", "Powder Coated", "Custom Heights"],
        },
        {
            title: "Security Bollards",
            description: "Fixed, removable, and retractable stainless steel bollards for vehicle access control. Anti-ram rated options available for high-security applications. Brushed or mirror finish.",
            image: "/metal-barrier/bollard.png",
            tags: ["Stainless Steel", "Anti-Ram", "Removable Option"],
        },
    ];

    const variants = [
        {
            title: "Water-Filled Barriers",
            description: "Steel-framed barriers with integral water-fill compartments for added weight and stability. Ideal for temporary road works and construction zones.",
            image: "/metal-barrier/road-safety.png",
            icon: <Construction className="w-5 h-5" />,
        },
        {
            title: "Jersey Barriers (Steel)",
            description: "Steel Jersey / New Jersey profile barriers for highway median separation and work zone protection. Stackable and reusable.",
            image: "/metal-barrier/road-safety.png",
            icon: <Milestone className="w-5 h-5" />,
        },
        {
            title: "Isolation Barriers",
            description: "Industrial isolation barriers for warehouse aisles, machinery zones, and hazardous areas. High-visibility powder coated finish with reflective strips.",
            image: "/metal-barrier/pedestrian-guardrail.png",
            icon: <AlertTriangle className="w-5 h-5" />,
        },
        {
            title: "Queue Barriers",
            description: "Retractable belt stanchions and fixed-rail queue management barriers for banks, airports, and retail. Stainless steel or powder coated.",
            image: "/metal-barrier/crowd-control.png",
            icon: <Layers className="w-5 h-5" />,
        },
        {
            title: "Parking Barriers",
            description: "Manual and automatic parking bollards, boom gates, and wheel stops. Galvanised or stainless steel construction for long outdoor service life.",
            image: "/metal-barrier/bollard.png",
            icon: <Shield className="w-5 h-5" />,
        },
        {
            title: "Custom OEM Projects",
            description: "Full design-to-delivery service for barrier manufacturers and distributors. Custom specs, private label, and volume pricing.",
            image: "/metal-barrier/hero.png",
            icon: <Wrench className="w-5 h-5" />,
        },
    ];

    const materials = [
        { title: "Hot-Dip Galvanised Steel", desc: "Industry-standard anti-corrosion treatment. 80μm+ zinc coating for 25+ year outdoor durability in harsh environments." },
        { title: "304 Stainless Steel", desc: "Premium corrosion-resistant grade for bollards and high-end barriers. Brushed, mirror, or satin finish." },
        { title: "316 Marine-Grade SS", desc: "Superior salt-spray resistance for coastal, marine, and chemical environments. Ideal for waterfront bollards." },
        { title: "Mild Steel Q235/S275", desc: "Cost-effective structural steel for barrier frames, posts, and guardrail beams. Weldable and formable." },
        { title: "Powder Coating", desc: "Durable thermosetting finish in safety yellow, red, black, or any RAL colour. UV-stable and impact-resistant." },
        { title: "Reflective Elements", desc: "3M-grade reflective tape and delineators integrated into barriers for enhanced night-time visibility and safety compliance." },
    ];

    const processSteps = [
        { step: "01", title: "Design & Engineering", desc: "Custom CAD modelling to meet your site layout, safety standards, and crash-test requirements.", icon: <Settings className="w-7 h-7" /> },
        { step: "02", title: "Material Preparation", desc: "CNC plasma/laser cutting and tube profiling for accurate steel blanks and profiles.", icon: <Zap className="w-7 h-7" /> },
        { step: "03", title: "Forming & Bending", desc: "CNC press brake bending for guardrail beams, tube bending for handrails and bollard frames.", icon: <Package className="w-7 h-7" /> },
        { step: "04", title: "Welding & Assembly", desc: "Robotic and manual MIG/TIG welding for structural integrity. Jig-assembly for repeatable accuracy.", icon: <Wrench className="w-7 h-7" /> },
        { step: "05", title: "Surface Treatment", desc: "Hot-dip galvanising, shot-blasting, and/or electrostatic powder coating to specification.", icon: <Star className="w-7 h-7" /> },
        { step: "06", title: "QC & Logistics", desc: "Full inspection, crash-test documentation, pallet packaging, and containerised global shipping.", icon: <Truck className="w-7 h-7" /> },
    ];

    const oemFeatures = [
        { icon: <Settings className="w-8 h-8 text-blue-400" />, title: "Custom Specifications", desc: "Any height, length, profile, and weight class. Engineered to meet local safety standards and regulations." },
        { icon: <Award className="w-8 h-8 text-blue-400" />, title: "Standards Compliance", desc: "Manufactured to AASHTO, EN 1317, AS/NZS, and other international crash-test and safety standards." },
        { icon: <Package className="w-8 h-8 text-blue-400" />, title: "Private Label OEM", desc: "Full private label service — your brand, your specifications. Project-ready or retail-packed." },
        { icon: <Users className="w-8 h-8 text-blue-400" />, title: "Low MOQ", desc: "Prototype runs available. Volume pricing from 100 units. Samples and test reports within 10 days." },
    ];

    return (
        <div className="bg-[#080e1a] text-slate-50 min-h-screen font-sans selection:bg-blue-500/30">
            <style>{`
        .br-page {
          background-color: #080e1a;
          color: #f8fafc;
          --br-bg: #080e1a;
          --br-surface: #0d1525;
          --br-surface-2: #1a2540;
          --br-blue: #3b82f6;
          --br-border: rgba(255,255,255,0.08);
          font-family: 'DM Sans', 'Inter', sans-serif;
        }
        .br-page h1, .br-page h2, .br-page h3, .br-page .font-display {
          font-family: 'Barlow Condensed', sans-serif !important;
        }
        .br-gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .br-glass-card {
          background: linear-gradient(135deg, #0d1525 0%, #1a2540 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .br-glass-card:hover {
          transform: translateY(-6px);
          border-color: rgba(59,130,246,0.4);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(59,130,246,0.1);
        }
        .br-btn-primary {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          font-family: 'Barlow Condensed', sans-serif !important;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(59,130,246,0.3);
        }
        .br-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(59,130,246,0.5);
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
        }
        .mb-reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .mb-reveal.visible { opacity: 1; transform: translateY(0); }
        .mb-reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .mb-reveal-left.visible { opacity: 1; transform: translateX(0); }
        .mb-reveal-right { opacity: 0; transform: translateX(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .mb-reveal-right.visible { opacity: 1; transform: translateX(0); }
        .mb-reveal-scale { opacity: 0; transform: scale(0.95); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .mb-reveal-scale.visible { opacity: 1; transform: scale(1); }
        .br-divider { height: 1px; background: linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent); }
        .br-step-number {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 4rem;
          font-weight: 900;
          color: rgba(59,130,246,0.1);
          line-height: 1;
          position: absolute;
          top: -10px;
          left: 16px;
        }
      `}</style>
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div className="br-page">

                {/* ── HERO ─────────────────────────────────────────────────── */}
                <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-[#080e1a]">
                        <img
                            src="/metal-barrier/hero.png"
                            alt="Metal Barriers & Safety Barriers Manufacturing"
                            className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#080e1a] via-[#080e1a]/85 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080e1a] via-transparent to-[#080e1a]/60" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-blue-600/12 blur-[120px] rounded-full" />
                        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-500/8 blur-[100px] rounded-full" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide mb-reveal-left">
                                <AlertTriangle className="w-4 h-4" />
                                OEM & Custom Factory — Direct Pricing
                            </div>

                            <h1 className="font-display text-6xl md:text-8xl font-black uppercase leading-[0.88] tracking-tighter mb-6 mb-reveal-left" style={{ transitionDelay: '100ms' }}>
                                METAL<br />
                                <span className="br-gradient-text">BARRIERS</span>
                            </h1>

                            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-base font-bold text-white mb-reveal-left" style={{ transitionDelay: '150ms' }}>
                                <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Crowd Control & Safety</span>
                                <span className="hidden sm:inline border-l border-white/20" />
                                <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Full OEM / Private Label</span>
                                <span className="hidden sm:inline border-l border-white/20" />
                                <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Standards Compliant</span>
                            </div>

                            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed mb-reveal-left" style={{ transitionDelay: '200ms' }}>
                                From portable event barricades to crash-rated highway guardrails — we engineer, fabricate, and finish complete barrier systems. One factory, full certification, global delivery.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-reveal-left" style={{ transitionDelay: '300ms' }}>
                                <Link to="/quote" className="br-btn-primary px-10 py-5 rounded-md flex items-center gap-2 text-xl">
                                    Request Custom Quote <ChevronRight className="w-6 h-6" />
                                </Link>
                                <Link to="/contact" className="px-10 py-5 rounded-md flex items-center gap-2 text-xl font-display font-bold uppercase border border-white/20 hover:bg-white/5 transition-colors backdrop-blur-sm">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="br-divider" />

                {/* ── STATS BAR ────────────────────────────────────────────── */}
                <section className="py-12 bg-[#060b14]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-reveal">
                            {[
                                { value: "15+", label: "Years Manufacturing" },
                                { value: "200+", label: "OEM Clients Worldwide" },
                                { value: "50K+", label: "Barriers / Month" },
                                { value: "ISO 9001", label: "Quality Certified" },
                            ].map((stat, i) => (
                                <div key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                                    <div className="text-4xl md:text-5xl font-display font-black br-gradient-text mb-1">{stat.value}</div>
                                    <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="br-divider" />

                {/* ── PRODUCT CATEGORIES ───────────────────────────────────── */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 mb-reveal">
                            <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-blue-400" /> Product Range <span className="w-8 h-px bg-blue-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Barrier Categories</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Heavy-duty crowd control, road safety, and security barriers built to international standards — from raw steel to certified product.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {productCategories.map((product, idx) => (
                                <div
                                    key={idx}
                                    className="br-glass-card mb-reveal group overflow-hidden"
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <div className="relative h-64 overflow-hidden bg-slate-800">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1525] via-transparent to-transparent z-10 opacity-70" />
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                            onError={(e) => { e.currentTarget.style.opacity = '0.3'; }}
                                        />
                                        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                                            {product.tags.map((tag, ti) => (
                                                <span key={ti} className="px-2 py-1 text-xs font-bold uppercase tracking-wide bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-7 relative z-20">
                                        <h3 className="text-2xl font-display font-bold uppercase text-white mb-3 group-hover:text-blue-400 transition-colors">{product.title}</h3>
                                        <p className="text-slate-400 leading-relaxed text-sm mb-5">{product.description}</p>
                                        <Link to="/quote" className="inline-flex items-center gap-1 text-blue-400 font-bold text-sm uppercase tracking-wider hover:text-blue-300 transition-colors group/link">
                                            Get Custom Quote <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="br-divider" />

                {/* ── VARIANTS & SOLUTIONS ───────────────────────────────── */}
                <section className="py-24 bg-[#060b14]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 mb-reveal">
                            <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-blue-400" /> Complete Range <span className="w-8 h-px bg-blue-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Barrier Variants & Solutions</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Every barrier type, profile, and safety class — all manufactured in-house with full customisation and certification.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {variants.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="br-glass-card mb-reveal-scale overflow-hidden group"
                                    style={{ transitionDelay: `${idx * 80}ms` }}
                                >
                                    <div className="relative h-44 overflow-hidden bg-slate-800">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1525] via-transparent to-transparent z-10 opacity-60" />
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            onError={(e) => { e.currentTarget.style.opacity = '0.3'; }}
                                        />
                                    </div>
                                    <div className="p-5 relative z-20">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-blue-400">{item.icon}</span>
                                            <h3 className="text-lg font-display font-bold uppercase text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                        </div>
                                        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="br-divider" />

                {/* ── MATERIALS ────────────────────────────────────────────── */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                            <div className="mb-reveal-left">
                                <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                                    <span className="w-8 h-px bg-blue-400" /> Materials Library <span className="w-8 h-px bg-blue-400" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">Built For Safety & Durability</h2>
                                <p className="text-xl text-slate-400 mb-8">We source and process premium-grade metals optimised for impact resistance, weather endurance, and safety compliance.</p>
                                <div className="space-y-3">
                                    {materials.map((mat, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/30 hover:border-blue-500/30 transition-colors" style={{ transitionDelay: `${i * 60}ms` }}>
                                            <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="font-display font-bold text-lg uppercase text-slate-200">{mat.title}</h4>
                                                <p className="text-slate-400 text-sm mt-0.5">{mat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-reveal-right">
                                <img src="/metal-barrier/crowd-control.png" className="rounded-xl w-full h-52 object-cover border border-white/10" alt="Crowd Control Barrier" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/metal-barrier/road-safety.png" className="rounded-xl w-full h-52 object-cover border border-white/10 mt-8" alt="Road Safety Barrier" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/metal-barrier/pedestrian-guardrail.png" className="rounded-xl w-full h-52 object-cover border border-white/10 -mt-8" alt="Pedestrian Guardrail" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/metal-barrier/bollard.png" className="rounded-xl w-full h-52 object-cover border border-white/10" alt="Security Bollard" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="br-divider" />

                {/* ── OEM / CUSTOMISATION ──────────────────────────────────── */}
                <section className="py-24 bg-[#060b14]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 mb-reveal">
                            <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-blue-400" /> OEM & Private Label <span className="w-8 h-px bg-blue-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Your Brand, Our Factory</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Full-service OEM barrier manufacturing for road authorities, event companies, and safety equipment distributors worldwide.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {oemFeatures.map((feat, idx) => (
                                <div
                                    key={idx}
                                    className="br-glass-card p-7 mb-reveal-scale"
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <div className="mb-4">{feat.icon}</div>
                                    <h3 className="text-xl font-display font-bold uppercase text-white mb-2">{feat.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="br-divider" />

                {/* ── MANUFACTURING PROCESS ─────────────────────────────────── */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 mb-reveal">
                            <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-blue-400" /> How We Build It <span className="w-8 h-px bg-blue-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Manufacturing Process</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {processSteps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className="br-glass-card p-7 relative mb-reveal"
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <span className="br-step-number">{step.step}</span>
                                    <div className="relative z-10">
                                        <div className="mb-4 text-blue-400">{step.icon}</div>
                                        <h3 className="text-xl font-display font-bold uppercase text-white mb-2">{step.title}</h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="br-divider" />

                {/* ── FINAL CTA ─────────────────────────────────────────────── */}
                <section className="py-32 relative overflow-hidden bg-[#080e1a]">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] z-0" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-blue-600/10 blur-[80px] rounded-full" />
                    <div className="container mx-auto px-4 text-center relative z-10 mb-reveal">
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">
                            <span>1. Requirements Analysis</span>
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                            <span>2. Sample / Prototype</span>
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                            <span>3. Mass Production</span>
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                            <span>4. Global Delivery</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-display font-black uppercase mb-6 leading-none">
                            PROTECT YOUR <span className="br-gradient-text">PERIMETER</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Partner with a factory that understands every weld, every test, every standard. Competitive pricing and reliable delivery on custom metal barriers of any class.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/quote" className="br-btn-primary px-12 py-5 rounded-md text-xl font-bold">
                                Get Your Direct Quote
                            </Link>
                            <Link to="/contact" className="px-12 py-5 rounded-md text-xl font-display font-bold uppercase border border-white/20 hover:bg-white/5 transition-colors backdrop-blur-sm">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default MetalBarrierLanding;
