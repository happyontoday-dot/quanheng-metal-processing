import React, { useEffect } from 'react';
import { ChevronRight, Shield, Settings, CheckCircle, Star, Package, Wrench, Truck, Zap, Award, Users, Layers, Lock, Grid3x3, Fence } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const MetalFenceLanding: React.FC = () => {
    useSEO({
        title: "Custom Metal Fence - OEM Security & Decorative Fencing Manufacturer | QUMETAL",
        description: "Premium OEM metal fence manufacturer. Custom chain-link fencing, welded mesh panels, palisade fencing, decorative wrought iron fences. Hot-dip galvanised, powder coated. Factory direct pricing, global delivery."
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
        const elements = document.querySelectorAll('.mf-reveal, .mf-reveal-left, .mf-reveal-right, .mf-reveal-scale');
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const productCategories = [
        {
            title: "Chain-Link Fencing",
            description: "Classic diamond-pattern woven wire fencing in galvanised or PVC-coated steel. Available in various gauges, aperture sizes, and heights. Ideal for industrial perimeters, sports facilities, and construction sites.",
            image: "/metal-fence/chain-link.png",
            tags: ["Galvanised", "PVC Coated", "50mm – 75mm Aperture"],
        },
        {
            title: "Welded Mesh Panels",
            description: "Rigid welded wire mesh fence panels with rectangular openings. Anti-climb design with close-spaced horizontal wires. Powder-coated for long-lasting colour and corrosion resistance.",
            image: "/metal-fence/welded-mesh.png",
            tags: ["Anti-Climb", "Powder Coated", "358 Mesh Available"],
        },
        {
            title: "Palisade Fencing",
            description: "High-security steel palisade fencing with W or D section pales and pointed tops. Excellent deterrent for critical infrastructure, warehouses, and utilities. Hot-dip galvanised or powder coated.",
            image: "/metal-fence/palisade.png",
            tags: ["High Security", "W/D Section Pales", "2.0m – 3.0m Height"],
        },
        {
            title: "Decorative Metal Fencing",
            description: "Ornamental wrought-iron style fencing with elegant scroll designs and spear-top finials. Precision laser-cut and forge-welded. Perfect for residential estates, parks, and heritage properties.",
            image: "/metal-fence/decorative.png",
            tags: ["Ornamental", "Laser Cut", "Custom Designs"],
        },
    ];

    const variants = [
        {
            title: "Temporary Fence Panels",
            description: "Portable site fencing for construction and events. Quick-connect clamp system with concrete or rubber feet. Hot-dip galvanised for reuse.",
            image: "/metal-fence/chain-link.png",
            icon: <Grid3x3 className="w-5 h-5" />,
        },
        {
            title: "Double Wire Fence",
            description: "Twin horizontal wire panels welded to vertical wires for extra rigidity. Low-maintenance and vandal-resistant. Ideal for schools, parks, and commercial boundaries.",
            image: "/metal-fence/welded-mesh.png",
            icon: <Layers className="w-5 h-5" />,
        },
        {
            title: "Anti-Climb 358 Mesh",
            description: "High-security 358 prison mesh with 76.2 × 12.7mm aperture. Finger- and toe-proof design. Used in prisons, military, data centres, and airports.",
            image: "/metal-fence/palisade.png",
            icon: <Lock className="w-5 h-5" />,
        },
        {
            title: "Fence Posts & Accessories",
            description: "Square, round, and H-section steel posts with base plates, clamps, post caps, and tension bars. Complete system components for every fence type.",
            image: "/metal-fence/hero.png",
            icon: <Settings className="w-5 h-5" />,
        },
        {
            title: "Gate Systems",
            description: "Single and double swing gates, sliding gates, and automated gate frames. Matching style and finish to your fence panels. Hardware and hinges included.",
            image: "/metal-fence/decorative.png",
            icon: <Package className="w-5 h-5" />,
        },
        {
            title: "Custom OEM Projects",
            description: "Full design-to-delivery service. Custom specs, private label packaging, colour matching, and volume pricing from our factory floor.",
            image: "/metal-fence/hero.png",
            icon: <Wrench className="w-5 h-5" />,
        },
    ];

    const materials = [
        { title: "Hot-Dip Galvanised Steel", desc: "Industry-standard corrosion protection. 80μm+ zinc coating per AS/NZS 4680 for 25+ year outdoor life." },
        { title: "PVC / Polyester Coated", desc: "Colour-bonded wire and panels in green, black, or RAL custom colours over galvanised substrate." },
        { title: "Mild Steel (Q235 / S235)", desc: "Cost-effective structural steel for fence posts, rails, and pales. Weldable and formable." },
        { title: "Stainless Steel 304/316", desc: "Premium corrosion-resistant option for coastal, marine, and food-processing environments." },
        { title: "Aluminium Alloy", desc: "Lightweight, rust-free option for decorative residential and architectural fencing applications." },
        { title: "Powder Coating", desc: "Durable thermosetting finish in any RAL colour. UV-stable, scratch-resistant, and environmentally friendly." },
    ];

    const processSteps = [
        { step: "01", title: "Design & Engineering", desc: "Custom CAD drawings based on your site survey, security requirements, and aesthetic preferences.", icon: <Settings className="w-7 h-7" /> },
        { step: "02", title: "Wire Drawing & Cutting", desc: "CNC wire drawing, straightening, and precision cutting to exact gauge and length specifications.", icon: <Zap className="w-7 h-7" /> },
        { step: "03", title: "Welding & Forming", desc: "Automated resistance welding for mesh panels. CNC bending and forming for posts and rails.", icon: <Package className="w-7 h-7" /> },
        { step: "04", title: "Surface Treatment", desc: "Hot-dip galvanising, electro-galvanising, or shot-blasting prior to powder coating.", icon: <Wrench className="w-7 h-7" /> },
        { step: "05", title: "Powder Coating", desc: "Electrostatic spray application and oven curing at 200°C for durable, consistent colour finish.", icon: <Star className="w-7 h-7" /> },
        { step: "06", title: "QC & Packing", desc: "Full dimensional and coating thickness inspection. Pallet or bundle packaging for safe global shipping.", icon: <Truck className="w-7 h-7" /> },
    ];

    const oemFeatures = [
        { icon: <Settings className="w-8 h-8 text-blue-400" />, title: "Custom Specifications", desc: "Any height, width, gauge, and aperture size. Engineered to your exact site and security requirements." },
        { icon: <Award className="w-8 h-8 text-blue-400" />, title: "Logo & Branding", desc: "Laser engraving, embossing, or sticker branding on posts and panels for your corporate identity." },
        { icon: <Package className="w-8 h-8 text-blue-400" />, title: "Private Label OEM", desc: "Full private label service — your brand, your packaging. Retail or project-ready from our factory." },
        { icon: <Users className="w-8 h-8 text-blue-400" />, title: "Low MOQ", desc: "Prototype runs available. Volume pricing from 200 linear metres. Samples shipped within 7 days." },
    ];

    return (
        <div className="bg-[#080e1a] text-slate-50 min-h-screen font-sans selection:bg-blue-500/30">
            <style>{`
        .mf-page {
          background-color: #080e1a;
          color: #f8fafc;
          --mf-bg: #080e1a;
          --mf-surface: #0d1525;
          --mf-surface-2: #1a2540;
          --mf-blue: #3b82f6;
          --mf-border: rgba(255,255,255,0.08);
          font-family: 'DM Sans', 'Inter', sans-serif;
        }
        .mf-page h1, .mf-page h2, .mf-page h3, .mf-page .font-display {
          font-family: 'Barlow Condensed', sans-serif !important;
        }
        .mf-gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .mf-glass-card {
          background: linear-gradient(135deg, #0d1525 0%, #1a2540 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .mf-glass-card:hover {
          transform: translateY(-6px);
          border-color: rgba(59,130,246,0.4);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(59,130,246,0.1);
        }
        .mf-btn-primary {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          font-family: 'Barlow Condensed', sans-serif !important;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(59,130,246,0.3);
        }
        .mf-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(59,130,246,0.5);
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
        }
        .mf-reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .mf-reveal.visible { opacity: 1; transform: translateY(0); }
        .mf-reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .mf-reveal-left.visible { opacity: 1; transform: translateX(0); }
        .mf-reveal-right { opacity: 0; transform: translateX(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .mf-reveal-right.visible { opacity: 1; transform: translateX(0); }
        .mf-reveal-scale { opacity: 0; transform: scale(0.95); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .mf-reveal-scale.visible { opacity: 1; transform: scale(1); }
        .mf-divider { height: 1px; background: linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent); }
        .mf-step-number {
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

            <div className="mf-page">

                {/* ── HERO ─────────────────────────────────────────────────── */}
                <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 z-0 bg-[#080e1a]">
                        <img
                            src="/metal-fence/hero.png"
                            alt="Metal Fence Manufacturing"
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide mf-reveal-left">
                                <Shield className="w-4 h-4" />
                                OEM & Custom Factory — Direct Pricing
                            </div>

                            <h1 className="font-display text-6xl md:text-8xl font-black uppercase leading-[0.88] tracking-tighter mb-6 mf-reveal-left" style={{ transitionDelay: '100ms' }}>
                                METAL<br />
                                <span className="mf-gradient-text">FENCE</span>
                            </h1>

                            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-base font-bold text-white mf-reveal-left" style={{ transitionDelay: '150ms' }}>
                                <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Security & Decorative</span>
                                <span className="hidden sm:inline border-l border-white/20" />
                                <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Full OEM / Private Label</span>
                                <span className="hidden sm:inline border-l border-white/20" />
                                <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Hot-Dip Galvanised & Powder Coated</span>
                            </div>

                            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed mf-reveal-left" style={{ transitionDelay: '200ms' }}>
                                From heavy-duty security perimeters to elegant decorative boundaries — we engineer, fabricate, and finish every panel and post. One factory, complete traceability, global delivery.
                            </p>

                            <div className="flex flex-wrap gap-4 mf-reveal-left" style={{ transitionDelay: '300ms' }}>
                                <Link to="/quote" className="mf-btn-primary px-10 py-5 rounded-md flex items-center gap-2 text-xl">
                                    Request Custom Quote <ChevronRight className="w-6 h-6" />
                                </Link>
                                <Link to="/contact" className="px-10 py-5 rounded-md flex items-center gap-2 text-xl font-display font-bold uppercase border border-white/20 hover:bg-white/5 transition-colors backdrop-blur-sm">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mf-divider" />

                {/* ── STATS BAR ────────────────────────────────────────────── */}
                <section className="py-12 bg-[#060b14]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mf-reveal">
                            {[
                                { value: "15+", label: "Years Manufacturing" },
                                { value: "50+", label: "Countries Exported" },
                                { value: "500K+", label: "Linear Metres / Year" },
                                { value: "ISO 9001", label: "Quality Certified" },
                            ].map((stat, i) => (
                                <div key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                                    <div className="text-4xl md:text-5xl font-display font-black mf-gradient-text mb-1">{stat.value}</div>
                                    <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="mf-divider" />

                {/* ── PRODUCT CATEGORIES ───────────────────────────────────── */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 mf-reveal">
                            <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-blue-400" /> Product Range <span className="w-8 h-px bg-blue-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Fence Categories</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Heavy-duty commercial and industrial fencing built to your specifications — from raw steel to finished, coated panels.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {productCategories.map((product, idx) => (
                                <div
                                    key={idx}
                                    className="mf-glass-card mf-reveal group overflow-hidden"
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

                <div className="mf-divider" />

                {/* ── VARIANTS & ACCESSORIES ───────────────────────────────── */}
                <section className="py-24 bg-[#060b14]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 mf-reveal">
                            <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-blue-400" /> Complete Range <span className="w-8 h-px bg-blue-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Fence Variants & Solutions</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Every panel style, height, and coating option — all manufactured in-house with full customisation.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {variants.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="mf-glass-card mf-reveal-scale overflow-hidden group"
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

                <div className="mf-divider" />

                {/* ── MATERIALS ────────────────────────────────────────────── */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                            <div className="mf-reveal-left">
                                <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                                    <span className="w-8 h-px bg-blue-400" /> Materials Library <span className="w-8 h-px bg-blue-400" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">Built From Premium Metals</h2>
                                <p className="text-xl text-slate-400 mb-8">We source and process premium-grade metals optimised for structural strength, weather resistance, and long outdoor life.</p>
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

                            <div className="grid grid-cols-2 gap-4 mf-reveal-right">
                                <img src="/metal-fence/chain-link.png" className="rounded-xl w-full h-52 object-cover border border-white/10" alt="Chain-Link Fence" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/metal-fence/welded-mesh.png" className="rounded-xl w-full h-52 object-cover border border-white/10 mt-8" alt="Welded Mesh Fence" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/metal-fence/palisade.png" className="rounded-xl w-full h-52 object-cover border border-white/10 -mt-8" alt="Palisade Fence" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/metal-fence/decorative.png" className="rounded-xl w-full h-52 object-cover border border-white/10" alt="Decorative Fence" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mf-divider" />

                {/* ── OEM / CUSTOMISATION ──────────────────────────────────── */}
                <section className="py-24 bg-[#060b14]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 mf-reveal">
                            <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-blue-400" /> OEM & Private Label <span className="w-8 h-px bg-blue-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Your Brand, Our Factory</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Full-service OEM fencing manufacturing for contractors, distributors, and property developers worldwide.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {oemFeatures.map((feat, idx) => (
                                <div
                                    key={idx}
                                    className="mf-glass-card p-7 mf-reveal-scale"
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

                <div className="mf-divider" />

                {/* ── MANUFACTURING PROCESS ─────────────────────────────────── */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 mf-reveal">
                            <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-blue-400" /> How We Build It <span className="w-8 h-px bg-blue-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Manufacturing Process</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {processSteps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className="mf-glass-card p-7 relative mf-reveal"
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <span className="mf-step-number">{step.step}</span>
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

                <div className="mf-divider" />

                {/* ── FINAL CTA ─────────────────────────────────────────────── */}
                <section className="py-32 relative overflow-hidden bg-[#080e1a]">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] z-0" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-blue-600/10 blur-[80px] rounded-full" />
                    <div className="container mx-auto px-4 text-center relative z-10 mf-reveal">
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">
                            <span>1. Site Survey</span>
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                            <span>2. Sample Panel</span>
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                            <span>3. Mass Production</span>
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                            <span>4. Global Delivery</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-display font-black uppercase mb-6 leading-none">
                            SECURE YOUR <span className="mf-gradient-text">PERIMETER</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Partner with a factory that masters every weld, every coat, every post. Competitive pricing and reliable delivery on custom metal fencing of any scale.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/quote" className="mf-btn-primary px-12 py-5 rounded-md text-xl font-bold">
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

export default MetalFenceLanding;
