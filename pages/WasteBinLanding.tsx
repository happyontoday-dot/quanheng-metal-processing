import React, { useEffect } from 'react';
import { ChevronRight, Trash2, Shield, Settings, CheckCircle, Star, Package, Wrench, Truck, Zap, Award, Users, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const WasteBinLanding: React.FC = () => {
    useSEO({
        title: "Custom Metal Waste Bins & Storage Bins - OEM Manufacturer | QUMETAL",
        description: "Premium OEM metal waste bins and storage bins manufacturer. Custom round bins, rectangular containers, pedal bins, outdoor receptacles, and industrial storage bins. Heavy-gauge steel, stainless steel, powder coated. Factory direct pricing."
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
        const elements = document.querySelectorAll('.wb-reveal, .wb-reveal-left, .wb-reveal-right, .wb-reveal-scale');
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const productCategories = [
        {
            title: "Round Waste Bins",
            description: "Classic cylindrical waste bins in cold-rolled steel or stainless steel. Available with or without lids, swing lids, or pedal-operated lids. Ideal for offices, hotels, and commercial kitchens.",
            image: "/waste-bin/round-bin.png",
            tags: ["Stainless Steel", "Pedal Lid Option", "10L – 120L"],
        },
        {
            title: "Rectangular Storage Bins",
            description: "Heavy-duty rectangular open-top bins with reinforced rolled edges and optional forklift channels. Perfect for workshop floors, recycling stations, and bulk-waste collection.",
            image: "/waste-bin/rectangular-bin.png",
            tags: ["Heavy-Gauge Steel", "Forklift Compatible", "Custom Sizes"],
        },
        {
            title: "Stackable Storage Bins",
            description: "Modular zinc-coated wire mesh or solid steel storage bins designed for space-efficient stacking on industrial shelving. Ideal for warehouse picking systems and parts storage.",
            image: "/waste-bin/stackable-bin.png",
            tags: ["Zinc-Coated Wire", "Stackable", "Warehouse Ready"],
        },
        {
            title: "Outdoor Waste Receptacles",
            description: "Powder-coated weatherproof steel bins for outdoor environments. Swing-lid or open-top design with anchor holes. Suitable for parks, streets, shopping centres, and commercial premises.",
            image: "/waste-bin/outdoor-bin.png",
            tags: ["Powder Coated", "Weatherproof", "Anchor Mount"],
        },
    ];

    const variants = [
        {
            title: "Pedal Bins",
            description: "Hygienic hands-free operation with foot pedal lid. Brushed stainless or powder coated finish. Inner liner bucket included.",
            image: "/waste-bin/pedal-bin.png",
            icon: <Trash2 className="w-5 h-5" />,
        },
        {
            title: "Swing-Lid Bins",
            description: "Self-closing swing lids in steel or ABS for high-traffic areas. Easy liner replacement and quiet close damper option.",
            image: "/waste-bin/rectangular-bin.png",
            icon: <Package className="w-5 h-5" />,
        },
        {
            title: "Recycling Stations",
            description: "Multi-compartment segregated waste bins for paper, plastic, glass, and general waste. Custom colour signage and decals.",
            image: "/waste-bin/round-bin.png",
            icon: <Layers className="w-5 h-5" />,
        },
        {
            title: "Open-Top Skips",
            description: "Large capacity open-top skip bins in heavy plate steel. For construction sites, factories, and industrial waste collection.",
            image: "/waste-bin/rectangular-bin.png",
            icon: <Truck className="w-5 h-5" />,
        },
        {
            title: "Wire Mesh Bins",
            description: "Lightweight galvanised or zinc wire mesh bins for dry waste, paper, and recyclables. Flat packaging available for easy logistics.",
            image: "/waste-bin/stackable-bin.png",
            icon: <Zap className="w-5 h-5" />,
        },
        {
            title: "Custom OEM Projects",
            description: "Full design-to-delivery service. Logo embossing, custom colour, bespoke dimensions, and private label packaging.",
            image: "/waste-bin/hero.png",
            icon: <Settings className="w-5 h-5" />,
        },
    ];

    const materials = [
        { title: "Cold-Rolled Steel", desc: "Cost-effective and excellent for indoor bins. Easily formed, powder coated, or galvanised for corrosion resistance." },
        { title: "304 Stainless Steel", desc: "Hygienic, rust-resistant, and food-grade. Preferred for kitchens, hospitals, and food processing environments." },
        { title: "Galvanised Steel", desc: "Hot-dip galvanised coating for long-lasting outdoor durability. Ideal for bins exposed to the elements." },
        { title: "Powder Coating", desc: "Available in any RAL colour. Durable, scratch-resistant finish that withstands daily use in high-traffic areas." },
        { title: "Electro-Galvanised Wire", desc: "Used for ventilated wire mesh bins. Anti-rust zinc plating with bright finish suitable for office and warehouse." },
        { title: "HDPE Inner Liners", desc: "Optional food-safe HDPE inner liners for easy cleaning and hygienic waste containment." },
    ];

    const processSteps = [
        { step: "01", title: "Design & Engineering", desc: "Custom CAD drawing based on your dimensions, capacity, and functional requirements.", icon: <Settings className="w-7 h-7" /> },
        { step: "02", title: "Material Cutting", desc: "CNC laser cutting and turret punching for precise sheet metal blanks.", icon: <Zap className="w-7 h-7" /> },
        { step: "03", title: "Forming & Bending", desc: "CNC press brake bending and rolling to form bin bodies, lids, and handle brackets.", icon: <Package className="w-7 h-7" /> },
        { step: "04", title: "Welding & Assembly", desc: "MIG/TIG welding for watertight seams and structural frames with pre-treatment washing.", icon: <Wrench className="w-7 h-7" /> },
        { step: "05", title: "Surface Finishing", desc: "Shot blasting, powder coating, galvanising, or electroplating to specification.", icon: <Star className="w-7 h-7" /> },
        { step: "06", title: "QC & Delivery", desc: "Full dimensional and coating inspection, flat-pack or assembled, global delivery.", icon: <Truck className="w-7 h-7" /> },
    ];

    const oemFeatures = [
        { icon: <Settings className="w-8 h-8 text-blue-400" />, title: "Custom Dimensions", desc: "Any size from 5-litre desk bins to 1,100-litre industrial skips. Engineered to your exact specification." },
        { icon: <Award className="w-8 h-8 text-blue-400" />, title: "Logo & Branding", desc: "Laser engraving, embossing, or screen printing of your logo on the bin body and lid." },
        { icon: <Package className="w-8 h-8 text-blue-400" />, title: "Private Label OEM", desc: "Full private label service — your brand, your packaging. Retail-ready from our factory floor." },
        { icon: <Users className="w-8 h-8 text-blue-400" />, title: "Low MOQ", desc: "Start from small prototype runs. Volume pricing from 100 units. Samples available within 7 days." },
    ];

    return (
        <div className="bg-[#080e1a] text-slate-50 min-h-screen font-sans selection:bg-blue-500/30">
            <style>{`
        .wb-page {
          background-color: #080e1a;
          color: #f8fafc;
          --wb-bg: #080e1a;
          --wb-surface: #0d1525;
          --wb-surface-2: #1a2540;
          --wb-blue: #3b82f6;
          --wb-border: rgba(255,255,255,0.08);
          font-family: 'DM Sans', 'Inter', sans-serif;
        }
        .wb-page h1, .wb-page h2, .wb-page h3, .wb-page .font-display {
          font-family: 'Barlow Condensed', sans-serif !important;
        }
        .wb-gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .wb-glass-card {
          background: linear-gradient(135deg, #0d1525 0%, #1a2540 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .wb-glass-card:hover {
          transform: translateY(-6px);
          border-color: rgba(59,130,246,0.4);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(59,130,246,0.1);
        }
        .wb-btn-primary {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          font-family: 'Barlow Condensed', sans-serif !important;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(59,130,246,0.3);
        }
        .wb-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(59,130,246,0.5);
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
        }
        .wb-reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .wb-reveal.visible { opacity: 1; transform: translateY(0); }
        .wb-reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .wb-reveal-left.visible { opacity: 1; transform: translateX(0); }
        .wb-reveal-right { opacity: 0; transform: translateX(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .wb-reveal-right.visible { opacity: 1; transform: translateX(0); }
        .wb-reveal-scale { opacity: 0; transform: scale(0.95); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .wb-reveal-scale.visible { opacity: 1; transform: scale(1); }
        .wb-divider { height: 1px; background: linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent); }
        .wb-step-number {
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

            <div className="wb-page">

                {/* ── HERO ─────────────────────────────────────────────────── */}
                <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 z-0 bg-[#080e1a]">
                        <img
                            src="/waste-bin/hero.png"
                            alt="Metal Waste Bins & Storage Bins Manufacturing"
                            className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#080e1a] via-[#080e1a]/85 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080e1a] via-transparent to-[#080e1a]/60" />
                        {/* Blue accent glow */}
                        <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-blue-600/12 blur-[120px] rounded-full" />
                        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-500/8 blur-[100px] rounded-full" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide wb-reveal-left">
                                <Trash2 className="w-4 h-4" />
                                OEM & Custom Factory — Direct Pricing
                            </div>

                            <h1 className="font-display text-6xl md:text-8xl font-black uppercase leading-[0.88] tracking-tighter mb-6 wb-reveal-left" style={{ transitionDelay: '100ms' }}>
                                METAL WASTE BINS<br />
                                <span className="wb-gradient-text">& STORAGE BINS</span>
                            </h1>

                            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-base font-bold text-white wb-reveal-left" style={{ transitionDelay: '150ms' }}>
                                <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Steel & Stainless Options</span>
                                <span className="hidden sm:inline border-l border-white/20" />
                                <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Full OEM / Private Label</span>
                                <span className="hidden sm:inline border-l border-white/20" />
                                <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Low MOQ — 100 Units Min</span>
                            </div>

                            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed wb-reveal-left" style={{ transitionDelay: '200ms' }}>
                                From office pedal bins to industrial open-top skips — we fabricate and customise every detail. One factory, complete traceability, global delivery.
                            </p>

                            <div className="flex flex-wrap gap-4 wb-reveal-left" style={{ transitionDelay: '300ms' }}>
                                <Link to="/quote" className="wb-btn-primary px-10 py-5 rounded-md flex items-center gap-2 text-xl">
                                    Request Custom Quote <ChevronRight className="w-6 h-6" />
                                </Link>
                                <Link to="/contact" className="px-10 py-5 rounded-md flex items-center gap-2 text-xl font-display font-bold uppercase border border-white/20 hover:bg-white/5 transition-colors backdrop-blur-sm">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="wb-divider" />

                {/* ── STATS BAR ────────────────────────────────────────────── */}
                <section className="py-12 bg-[#060b14]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center wb-reveal">
                            {[
                                { value: "15+", label: "Years Manufacturing" },
                                { value: "200+", label: "OEM Clients Worldwide" },
                                { value: "30+", label: "Bin Models Available" },
                                { value: "ISO 9001", label: "Quality Certified" },
                            ].map((stat, i) => (
                                <div key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                                    <div className="text-4xl md:text-5xl font-display font-black wb-gradient-text mb-1">{stat.value}</div>
                                    <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="wb-divider" />

                {/* ── PRODUCT CATEGORIES ───────────────────────────────────── */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 wb-reveal">
                            <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-blue-400" /> Product Range <span className="w-8 h-px bg-blue-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Bin Categories</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Heavy-duty commercial and industrial bins built to your specifications — from raw metal to finished product.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {productCategories.map((product, idx) => (
                                <div
                                    key={idx}
                                    className="wb-glass-card wb-reveal group overflow-hidden"
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

                <div className="wb-divider" />

                {/* ── VARIANTS & ACCESSORIES ───────────────────────────────── */}
                <section className="py-24 bg-[#060b14]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 wb-reveal">
                            <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-blue-400" /> Complete Range <span className="w-8 h-px bg-blue-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Bin Variants & Solutions</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Every lid style, capacity, and material — all manufactured in-house with full customisation.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {variants.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="wb-glass-card wb-reveal-scale overflow-hidden group"
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

                <div className="wb-divider" />

                {/* ── MATERIALS ────────────────────────────────────────────── */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                            <div className="wb-reveal-left">
                                <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                                    <span className="w-8 h-px bg-blue-400" /> Materials Library <span className="w-8 h-px bg-blue-400" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">Built From Premium Metals</h2>
                                <p className="text-xl text-slate-400 mb-8">We source and process premium-grade metals optimised for durability, hygiene compliance, and long outdoor life.</p>
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

                            <div className="grid grid-cols-2 gap-4 wb-reveal-right">
                                <img src="/waste-bin/round-bin.png" className="rounded-xl w-full h-52 object-cover border border-white/10" alt="Round Waste Bin" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/waste-bin/rectangular-bin.png" className="rounded-xl w-full h-52 object-cover border border-white/10 mt-8" alt="Rectangular Storage Bin" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/waste-bin/stackable-bin.png" className="rounded-xl w-full h-52 object-cover border border-white/10 -mt-8" alt="Stackable Bin" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/waste-bin/outdoor-bin.png" className="rounded-xl w-full h-52 object-cover border border-white/10" alt="Outdoor Waste Bin" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="wb-divider" />

                {/* ── OEM / CUSTOMISATION ──────────────────────────────────── */}
                <section className="py-24 bg-[#060b14]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 wb-reveal">
                            <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-blue-400" /> OEM & Private Label <span className="w-8 h-px bg-blue-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Your Brand, Our Factory</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Full-service OEM manufacturing for retailers, distributors, and facility management brands worldwide.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {oemFeatures.map((feat, idx) => (
                                <div
                                    key={idx}
                                    className="wb-glass-card p-7 wb-reveal-scale"
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

                <div className="wb-divider" />

                {/* ── MANUFACTURING PROCESS ─────────────────────────────────── */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 wb-reveal">
                            <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-blue-400" /> How We Build It <span className="w-8 h-px bg-blue-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Manufacturing Process</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {processSteps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className="wb-glass-card p-7 relative wb-reveal"
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <span className="wb-step-number">{step.step}</span>
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

                <div className="wb-divider" />

                {/* ── FINAL CTA ─────────────────────────────────────────────── */}
                <section className="py-32 relative overflow-hidden bg-[#080e1a]">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] z-0" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-blue-600/10 blur-[80px] rounded-full" />
                    <div className="container mx-auto px-4 text-center relative z-10 wb-reveal">
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">
                            <span>1. Design Consultation</span>
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                            <span>2. Sample / Prototype</span>
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                            <span>3. Mass Production</span>
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                            <span>4. Global Delivery</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-display font-black uppercase mb-6 leading-none">
                            CLEAN UP YOUR <span className="wb-gradient-text">SUPPLY CHAIN</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Partner with a factory that understands every cut, every bend, every coat. Competitive pricing and reliable delivery on custom metal bins of any size.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/quote" className="wb-btn-primary px-12 py-5 rounded-md text-xl font-bold">
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

export default WasteBinLanding;
