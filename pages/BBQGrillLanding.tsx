import React, { useEffect } from 'react';
import { ChevronRight, Flame, Shield, Settings, CheckCircle, Star, Package, Wrench, Truck, Zap, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const BBQGrillLanding: React.FC = () => {
    useSEO({
        title: "BBQ Grills & Accessories - OEM Custom Metal BBQ Manufacturer | QUMETAL",
        description: "Premium OEM BBQ grills and accessories manufacturer. Custom charcoal grills, gas grills, smokers, and accessories made from stainless steel, cast iron, and carbon steel. Factory direct pricing."
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
        const elements = document.querySelectorAll('.bbq-reveal, .bbq-reveal-left, .bbq-reveal-right, .bbq-reveal-scale');
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const productCategories = [
        {
            title: "Charcoal Grills",
            description: "Traditional charcoal grills crafted from heavy-gauge steel with porcelain-enameled cooking grates. Adjustable air vents, hinged lid with thermometer, and easy ash removal system.",
            image: "/bbq/charcoal-grill.png",
            tags: ["Heavy-gauge Steel", "Porcelain Enamel", "Adjustable Vents"],
        },
        {
            title: "Gas Grills",
            description: "Multi-burner stainless steel gas grills with side burners, warming racks, and electronic ignition. Precision temperature control for consistent cooking results.",
            image: "/bbq/gas-grill.png",
            tags: ["304 Stainless Steel", "Electronic Ignition", "Side Burner"],
        },
        {
            title: "Portable Grills",
            description: "Compact foldable grills for outdoor adventures. Lightweight yet durable stainless steel construction with carrying case, perfect for camping, picnics, and tailgating.",
            image: "/bbq/portable-grill.png",
            tags: ["Foldable Design", "Lightweight", "Carry Case Compatible"],
        },
        {
            title: "Offset Smokers",
            description: "Heavy-duty offset smokers with large cooking chambers, side fireboxes, and adjustable dampers. Engineered for low-and-slow smoking with precise airflow control.",
            image: "/bbq/smoker-grill.png",
            tags: ["Carbon Steel", "Large Capacity", "Precise Airflow"],
        },
    ];

    const accessories = [
        {
            title: "Grill Grates & Racks",
            description: "Cast iron and stainless steel grates in custom sizes. Superior heat retention and non-stick performance.",
            image: "/bbq/grill-grates.png",
            icon: <Flame className="w-5 h-5" />,
        },
        {
            title: "Rotisserie Kits",
            description: "Complete motorized rotisserie kits with heavy-duty spit rods and adjustable forks for even roasting.",
            image: "/bbq/rotisserie-kit.png",
            icon: <Settings className="w-5 h-5" />,
        },
        {
            title: "BBQ Tool Sets",
            description: "Professional 5-piece stainless steel tool sets: spatula, tongs, fork, brush, and hanging rack.",
            image: "/bbq/tool-set.png",
            icon: <Wrench className="w-5 h-5" />,
        },
        {
            title: "Warming Racks",
            description: "Chrome-plated or stainless warming racks to keep food warm while you cook the main course.",
            image: "/bbq/grill-grates.png",
            icon: <Zap className="w-5 h-5" />,
        },
        {
            title: "Ash Collectors",
            description: "Precision-formed steel ash catchers and pans designed to fit standard and custom grill sizes.",
            image: "/bbq/charcoal-grill.png",
            icon: <Package className="w-5 h-5" />,
        },
        {
            title: "Custom Covers & Parts",
            description: "Heavy-duty weather-resistant covers and OEM replacement parts fabricated to custom specifications.",
            image: "/bbq/smoker-grill.png",
            icon: <Shield className="w-5 h-5" />,
        },
    ];

    const materials = [
        { title: "304 Stainless Steel", desc: "Corrosion-resistant, food-safe grade for longevity. Ideal for gas and portable grills." },
        { title: "Carbon Steel", desc: "Superior heat retention and durability for heavy-duty smokers and charcoal grills." },
        { title: "Cast Iron", desc: "Unmatched heat distribution for grill grates and cooking surfaces. Seasoned finish." },
        { title: "Porcelain Enamel", desc: "Rust-resistant, easy-to-clean coating applied over steel for lid and firebox protection." },
        { title: "Galvanized Steel", desc: "Cost-effective corrosion protection for structural components and supporting frames." },
        { title: "Chrome Plating", desc: "Decorative and protective finish for handles, knobs, and warming rack accessories." },
    ];

    const processSteps = [
        { step: "01", title: "Design & Engineering", desc: "Custom CAD design and engineering review to meet your specifications and certifications.", icon: <Settings className="w-7 h-7" /> },
        { step: "02", title: "Material Cutting", desc: "CNC laser cutting and plasma cutting for precise sheet metal components.", icon: <Zap className="w-7 h-7" /> },
        { step: "03", title: "Forming & Bending", desc: "CNC press brake bending and rolling to shape grill bodies, lids, and frames.", icon: <Package className="w-7 h-7" /> },
        { step: "04", title: "Welding & Assembly", desc: "MIG/TIG welding for structural integrity with robotic and manual assembly.", icon: <Flame className="w-7 h-7" /> },
        { step: "05", title: "Surface Finishing", desc: "Powder coating, porcelain enameling, chrome or nickel plating to spec.", icon: <Star className="w-7 h-7" /> },
        { step: "06", title: "QC & Delivery", desc: "Full quality inspection, packing, and global door-to-door logistics.", icon: <Truck className="w-7 h-7" /> },
    ];

    const oemFeatures = [
        { icon: <Settings className="w-8 h-8 text-orange-500" />, title: "Custom Dimensions", desc: "Any size from compact tabletop grills to commercial-grade party grills. Engineered to your exact spec." },
        { icon: <Award className="w-8 h-8 text-orange-500" />, title: "Logo & Branding", desc: "Laser engraving or embossing of your brand logo on handles, lids, and packaging." },
        { icon: <Package className="w-8 h-8 text-orange-500" />, title: "Private Label OEM", desc: "Full private label service – your brand on our factory-quality products. Custom packaging available." },
        { icon: <Users className="w-8 h-8 text-orange-500" />, title: "MOQ Flexibility", desc: "Start from small prototype runs. Volume pricing available for orders of 100+ units." },
    ];

    return (
        <div className="bg-[#0a0f1a] text-slate-50 min-h-screen font-sans selection:bg-orange-500/30">
            <style>{`
        .bbq-page {
          background-color: #0a0f1a;
          color: #f8fafc;
          --bbq-bg: #0a0f1a;
          --bbq-surface: #0f172a;
          --bbq-surface-2: #1e293b;
          --bbq-orange: #f97316;
          --bbq-border: rgba(255,255,255,0.08);
          font-family: 'DM Sans', 'Inter', sans-serif;
        }
        .bbq-page h1, .bbq-page h2, .bbq-page h3, .bbq-page .font-display {
          font-family: 'Barlow Condensed', sans-serif !important;
        }
        .bbq-gradient-text {
          background: linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .bbq-glass-card {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .bbq-glass-card:hover {
          transform: translateY(-6px);
          border-color: rgba(249,115,22,0.4);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(249,115,22,0.1);
        }
        .bbq-btn-primary {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-family: 'Barlow Condensed', sans-serif !important;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(249,115,22,0.3);
        }
        .bbq-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(249,115,22,0.5);
          background: linear-gradient(135deg, #fb923c, #f97316);
        }
        .bbq-reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .bbq-reveal.visible { opacity: 1; transform: translateY(0); }
        .bbq-reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .bbq-reveal-left.visible { opacity: 1; transform: translateX(0); }
        .bbq-reveal-right { opacity: 0; transform: translateX(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .bbq-reveal-right.visible { opacity: 1; transform: translateX(0); }
        .bbq-reveal-scale { opacity: 0; transform: scale(0.95); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .bbq-reveal-scale.visible { opacity: 1; transform: scale(1); }
        .bbq-divider { height: 1px; background: linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent); }
        .bbq-step-number {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 4rem;
          font-weight: 900;
          color: rgba(249,115,22,0.12);
          line-height: 1;
          position: absolute;
          top: -10px;
          left: 16px;
        }
      `}</style>
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div className="bbq-page">

                {/* ── HERO ─────────────────────────────────────────────────── */}
                <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 z-0 bg-[#0a0f1a]">
                        <img
                            src="/bbq/hero.png"
                            alt="Premium BBQ Grills Manufacturing"
                            className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/85 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-[#0a0f1a]/60" />
                        {/* Orange ember glow */}
                        <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-orange-600/15 blur-[120px] rounded-full" />
                        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-orange-500/8 blur-[100px] rounded-full" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wide bbq-reveal-left">
                                <Flame className="w-4 h-4" />
                                OEM & Custom Factory — Direct Pricing
                            </div>

                            <h1 className="font-display text-6xl md:text-8xl font-black uppercase leading-[0.88] tracking-tighter mb-6 bbq-reveal-left" style={{ transitionDelay: '100ms' }}>
                                PREMIUM BBQ <br />
                                <span className="bbq-gradient-text">GRILLS & ACCESSORIES</span>
                            </h1>

                            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-base font-bold text-white bbq-reveal-left" style={{ transitionDelay: '150ms' }}>
                                <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-500" /> 304 Stainless Steel</span>
                                <span className="hidden sm:inline border-l border-white/20" />
                                <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-500" /> Full OEM / Private Label</span>
                                <span className="hidden sm:inline border-l border-white/20" />
                                <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-500" /> Low MOQ Available</span>
                            </div>

                            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed bbq-reveal-left" style={{ transitionDelay: '200ms' }}>
                                From backyard charcoal grills to professional smokers — we manufacture and customize every component. One factory, complete traceability, global delivery.
                            </p>

                            <div className="flex flex-wrap gap-4 bbq-reveal-left" style={{ transitionDelay: '300ms' }}>
                                <Link to="/quote" className="bbq-btn-primary px-10 py-5 rounded-md flex items-center gap-2 text-xl">
                                    Request Custom Quote <ChevronRight className="w-6 h-6" />
                                </Link>
                                <Link to="/contact" className="px-10 py-5 rounded-md flex items-center gap-2 text-xl font-display font-bold uppercase border border-white/20 hover:bg-white/5 transition-colors backdrop-blur-sm">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bbq-divider" />

                {/* ── STATS BAR ────────────────────────────────────────────── */}
                <section className="py-12 bg-[#080c14]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bbq-reveal">
                            {[
                                { value: "15+", label: "Years Manufacturing" },
                                { value: "200+", label: "OEM Clients Worldwide" },
                                { value: "50+", label: "Grill Models Available" },
                                { value: "ISO 9001", label: "Quality Certified" },
                            ].map((stat, i) => (
                                <div key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                                    <div className="text-4xl md:text-5xl font-display font-black bbq-gradient-text mb-1">{stat.value}</div>
                                    <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="bbq-divider" />

                {/* ── PRODUCT CATEGORIES ───────────────────────────────────── */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 bbq-reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500" /> Product Range <span className="w-8 h-px bg-orange-500" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">BBQ Grill Categories</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Heavy-duty commercial and consumer grills built to your specifications from raw metal to finished product.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {productCategories.map((product, idx) => (
                                <div
                                    key={idx}
                                    className="bbq-glass-card bbq-reveal group overflow-hidden"
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <div className="relative h-64 overflow-hidden bg-slate-800">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-10 opacity-70" />
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                            onError={(e) => { e.currentTarget.style.opacity = '0.3'; }}
                                        />
                                        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                                            {product.tags.map((tag, ti) => (
                                                <span key={ti} className="px-2 py-1 text-xs font-bold uppercase tracking-wide bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-7 relative z-20">
                                        <h3 className="text-2xl font-display font-bold uppercase text-white mb-3 group-hover:text-orange-400 transition-colors">{product.title}</h3>
                                        <p className="text-slate-400 leading-relaxed text-sm mb-5">{product.description}</p>
                                        <Link to="/quote" className="inline-flex items-center gap-1 text-orange-500 font-bold text-sm uppercase tracking-wider hover:text-orange-400 transition-colors group/link">
                                            Get Custom Quote <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="bbq-divider" />

                {/* ── ACCESSORIES ──────────────────────────────────────────── */}
                <section className="py-24 bg-[#080c14]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 bbq-reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500" /> Complete Ecosystem <span className="w-8 h-px bg-orange-500" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">BBQ Accessories</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Every component crafted with precision — from cooking grates to tool sets, all manufactured in-house.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {accessories.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bbq-glass-card bbq-reveal-scale overflow-hidden group"
                                    style={{ transitionDelay: `${idx * 80}ms` }}
                                >
                                    <div className="relative h-44 overflow-hidden bg-slate-800">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-10 opacity-60" />
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            onError={(e) => { e.currentTarget.style.opacity = '0.3'; }}
                                        />
                                    </div>
                                    <div className="p-5 relative z-20">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-orange-500">{item.icon}</span>
                                            <h3 className="text-lg font-display font-bold uppercase text-white group-hover:text-orange-400 transition-colors">{item.title}</h3>
                                        </div>
                                        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="bbq-divider" />

                {/* ── MATERIALS ────────────────────────────────────────────── */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                            <div className="bbq-reveal-left">
                                <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                    <span className="w-8 h-px bg-orange-500" /> Materials Library <span className="w-8 h-px bg-orange-500" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">Built From The Best Metals</h2>
                                <p className="text-xl text-slate-400 mb-8">We source and process premium-grade metals optimized for high-heat cooking environments, outdoor durability, and food safety compliance.</p>
                                <div className="space-y-3">
                                    {materials.map((mat, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/30 hover:border-orange-500/30 transition-colors" style={{ transitionDelay: `${i * 60}ms` }}>
                                            <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="font-display font-bold text-lg uppercase text-slate-200">{mat.title}</h4>
                                                <p className="text-slate-400 text-sm mt-0.5">{mat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 bbq-reveal-right">
                                <img src="/bbq/charcoal-grill.png" className="rounded-xl w-full h-52 object-cover border border-white/10" alt="Charcoal Grill" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/bbq/gas-grill.png" className="rounded-xl w-full h-52 object-cover border border-white/10 mt-8" alt="Gas Grill" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/bbq/smoker-grill.png" className="rounded-xl w-full h-52 object-cover border border-white/10 -mt-8" alt="Smoker Grill" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/bbq/portable-grill.png" className="rounded-xl w-full h-52 object-cover border border-white/10" alt="Portable Grill" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bbq-divider" />

                {/* ── OEM / CUSTOMIZATION ──────────────────────────────────── */}
                <section className="py-24 bg-[#080c14]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 bbq-reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500" /> OEM & Private Label <span className="w-8 h-px bg-orange-500" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Your Brand, Our Factory</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Full-service OEM manufacturing for retailers, distributors, and brands worldwide. Confidentiality guaranteed.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {oemFeatures.map((feat, idx) => (
                                <div
                                    key={idx}
                                    className="bbq-glass-card p-7 bbq-reveal-scale"
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

                <div className="bbq-divider" />

                {/* ── MANUFACTURING PROCESS ─────────────────────────────────── */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 bbq-reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500" /> How We Build It <span className="w-8 h-px bg-orange-500" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Manufacturing Process</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {processSteps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className="bbq-glass-card p-7 relative bbq-reveal"
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <span className="bbq-step-number">{step.step}</span>
                                    <div className="relative z-10">
                                        <div className="mb-4 text-orange-500">{step.icon}</div>
                                        <h3 className="text-xl font-display font-bold uppercase text-white mb-2">{step.title}</h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="bbq-divider" />

                {/* ── FINAL CTA ─────────────────────────────────────────────── */}
                <section className="py-32 relative overflow-hidden bg-[#0a0f1a]">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.12),transparent_70%)] z-0" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-orange-600/10 blur-[80px] rounded-full" />
                    <div className="container mx-auto px-4 text-center relative z-10 bbq-reveal">
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">
                            <span>1. Design Consultation</span>
                            <ChevronRight className="w-4 h-4 text-orange-500" />
                            <span>2. Sample / Prototype</span>
                            <ChevronRight className="w-4 h-4 text-orange-500" />
                            <span>3. Mass Production</span>
                            <ChevronRight className="w-4 h-4 text-orange-500" />
                            <span>4. Global Delivery</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-display font-black uppercase mb-6 leading-none">
                            FIRE UP YOUR <span className="bbq-gradient-text">BUSINESS</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Partner with a factory that understands every weld, every gauge, every finish. Get competitive pricing and reliable delivery on custom BBQ grills and accessories.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/quote" className="bbq-btn-primary px-12 py-5 rounded-md text-xl font-bold">
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

export default BBQGrillLanding;
