import React, { useEffect } from 'react';
import { ChevronRight, Settings, ShieldCheck, CheckCircle2, Package, Image as ImageIcon, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const LaserCutWallArtLanding: React.FC = () => {
    useSEO({
        title: "Custom Metal Wall Art, Signs & Decor | QUMETAL",
        description: "Enhance your space with custom laser-cut metal wall art, architectural privacy screens, and professional business signs. Premium CNC fabrication for indoor and outdoor decor."
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
        <div className="bg-[#0a0f1a] text-slate-50 min-h-screen font-sans selection:bg-orange-500/30">
            <style>{`
        .sheet-metal-page {
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
        
        .sheet-metal-page h1, .sheet-metal-page h2, .sheet-metal-page h3, .sheet-metal-page .font-display { 
          font-family: 'Barlow Condensed', sans-serif !important; 
        }
        .sheet-metal-page p, .sheet-metal-page li, .sheet-metal-page div:not(.font-display) {
          font-family: 'DM Sans', 'Inter', sans-serif;
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
        .steel-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent);
        }
        .steel-card:hover {
          transform: translateY(-4px);
          border-color: rgba(249,115,22,0.3);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(249,115,22,0.08);
        }

        .btn-cta {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-family: 'Barlow Condensed', sans-serif !important;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(249,115,22,0.3);
          border: none;
        }
        .btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(249,115,22,0.5);
          background: linear-gradient(135deg, #fb923c, #f97316);
          color: white;
        }

        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-left.visible { opacity: 1; transform: translateX(0); }
        .reveal-right { opacity: 0; transform: translateX(30px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-right.visible { opacity: 1; transform: translateX(0); }
      `}</style>

            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div className="sheet-metal-page">
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 md:pt-36 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/wall-art/hero.png"
                            alt="Laser Cut Metal Wall Art Hero"
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/90 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="max-w-3xl">
                                <div className="flex flex-wrap items-center gap-3 mb-6 reveal-left">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wide">
                                        <ShieldCheck className="w-4 h-4" />
                                        PREMIUM CRAFTSMANSHIP
                                    </div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-semibold tracking-wide">
                                        <ChevronRight className="w-4 h-4" />
                                        FREE DESIGN SERVICE
                                    </div>
                                </div>

                                <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6 reveal-left" style={{ transitionDelay: '100ms' }}>
                                    PREMIUM LASER CUT<br />
                                    <span className="gradient-text-orange">METAL WALL ART</span>
                                </h1>

                                <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed reveal-left" style={{ transitionDelay: '200ms' }}>
                                    Bring your walls to life with precision-cut architectural decor. From <strong className="text-white">Nature-inspired silhouettes</strong> to <strong className="text-white">Custom City Maps</strong>, we turn industrial-grade metal into timeless art. <span className="text-orange-400 font-semibold block mt-2">Free Design Services & Global Shipping Included.</span>
                                </p>

                                <div className="flex flex-wrap gap-4 reveal-left" style={{ transitionDelay: '300ms' }}>
                                    <Link to="/quote" className="btn-cta px-10 py-5 rounded-md flex items-center gap-2 text-xl">
                                        Start Your Custom Project <ChevronRight className="w-6 h-6" />
                                    </Link>
                                </div>
                            </div>

                            <div className="hidden lg:grid grid-cols-2 gap-4 reveal" style={{ transitionDelay: '400ms' }}>
                                <div className="space-y-4 pt-12">
                                    <img src="/wall-art/triptych.png" alt="Black Powder Coated Metal Triptych" className="rounded-lg object-cover h-64 w-full border border-white/10" />
                                    <img src="/wall-art/detail.png" alt="Brushed Stainless Steel Wall Art Detail" className="rounded-lg object-cover h-48 w-full border border-white/10" />
                                </div>
                                <div className="space-y-4">
                                    <img src="/wall-art/outdoor.png" alt="Corten Steel Outdoor Privacy Screen" className="rounded-lg object-cover h-[22rem] w-full border border-white/10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* UNIFIED FEATURES BAR */}
                <section className="border-y border-white/10 bg-[#0f172a]/80 backdrop-blur-lg relative z-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 py-10">
                            {/* Precision */}
                            <div className="flex items-center gap-4 reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                                    <Settings className="w-6 h-6 text-orange-500" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-display font-bold text-white leading-none mb-1">0.1<span className="text-orange-500">mm</span></div>
                                    <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Laser Precision</p>
                                </div>
                            </div>

                            {/* Customization */}
                            <div className="flex items-center gap-4 reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center shrink-0 border border-sky-500/20">
                                    <CheckCircle2 className="w-6 h-6 text-sky-400" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-display font-bold text-white leading-none mb-1">100<span className="text-sky-400">%</span></div>
                                    <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Custom Designs</p>
                                </div>
                            </div>

                            {/* Lead Time */}
                            <div className="flex items-center gap-4 reveal" style={{ transitionDelay: '300ms' }}>
                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                                    <Package className="w-6 h-6 text-orange-500" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-display font-bold text-white leading-none mb-1">5-7 <span className="text-orange-500">Days</span></div>
                                    <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Fast Production</p>
                                </div>
                            </div>

                            {/* Global Delivery */}
                            <div className="flex items-center gap-4 reveal" style={{ transitionDelay: '400ms' }}>
                                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center shrink-0 border border-sky-500/20">
                                    <ShieldCheck className="w-6 h-6 text-sky-400" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-display font-bold text-white leading-none mb-1">Global</div>
                                    <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Doorstep Delivery</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* UNIFIED ART & DECOR COLLECTIONS SECTION */}
                <section className="py-24 bg-[#080c14]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Discover Our Capabilities <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6 text-white">Art, Signs & Architectural Decor</h2>
                            <p className="text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed">
                                From intricate nature-inspired wall art to professional commercial signage and architectural privacy screens, our precision laser cutting capabilities turn your vision into industrial-grade reality.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Nature & Wildlife */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="h-80 overflow-hidden relative">
                                    <img src="/wall-art/nature_wall_art.png" alt="Nature and Wildlife Metal Wall Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-3xl font-display font-bold uppercase text-white leading-tight">Nature &<br />Wildlife</h3>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-slate-400 mb-6 leading-relaxed">Pine forests, mountain silhouettes, and animal motifs precision-cut with stunning detail. Perfect for modern rustic interiors.</p>
                                    <Link to="/quote" className="text-orange-500 font-display font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">Explore Designs <ChevronRight className="w-5 h-5" /></Link>
                                </div>
                            </div>

                            {/* Geometric & Abstract */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="h-80 overflow-hidden relative">
                                    <img src="/wall-art/geometric_wall_art_new.png" alt="Minimalist Geometric Metal Wall Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-3xl font-display font-bold uppercase text-white leading-tight">Minimalist &<br />Geometric</h3>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-slate-400 mb-6 leading-relaxed">Clean, minimalist patterns and 3D-effect textures that play with light and shadow. Ideal for high-end corporate or modern minimalist spaces.</p>
                                    <Link to="/quote" className="text-orange-500 font-display font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">Explore Designs <ChevronRight className="w-5 h-5" /></Link>
                                </div>
                            </div>

                            {/* Business Signs */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '300ms' }}>
                                <div className="h-80 overflow-hidden relative">
                                    <img src="/wall-art/sign_business.png" alt="Custom Laser Cut Metal Business Sign" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-3xl font-display font-bold uppercase text-white leading-tight">Business<br />Signage</h3>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-slate-400 mb-6 leading-relaxed">Elevate your brand with striking, precision-cut backlit metal logo signs. Perfect for corporate lobbies and architectural branding.</p>
                                    <Link to="/quote" className="text-orange-500 font-display font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">Request Quote <ChevronRight className="w-5 h-5" /></Link>
                                </div>
                            </div>

                            {/* Room Dividers */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '400ms' }}>
                                <div className="h-80 overflow-hidden relative">
                                    <img src="/wall-art/decor_divider.png" alt="Laser Cut Metal Room Divider Screen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-3xl font-display font-bold uppercase text-white leading-tight">Privacy<br />Screens</h3>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-slate-400 mb-6 leading-relaxed">Define interior spaces or create stunning outdoor patios with custom geometric and botanical laser-cut room dividers.</p>
                                    <Link to="/quote" className="text-orange-500 font-display font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">Explore Privacy <ChevronRight className="w-5 h-5" /></Link>
                                </div>
                            </div>

                            {/* Custom Maps & Signage */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '500ms' }}>
                                <div className="h-80 overflow-hidden relative">
                                    <img src="/wall-art/custom_map_art.png" alt="Custom City Map Metal Wall Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-3xl font-display font-bold uppercase text-white leading-tight">Custom Maps &<br />Wayfinding</h3>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-slate-400 mb-6 leading-relaxed">Personalized city grids, world maps, or architectural wayfinding in premium finishes. A unique statement for home offices.</p>
                                    <Link to="/quote" className="text-orange-500 font-display font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">Request Custom <ChevronRight className="w-5 h-5" /></Link>
                                </div>
                            </div>

                            {/* Home Decor */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '600ms' }}>
                                <div className="h-80 overflow-hidden relative">
                                    <img src="/wall-art/decor_lamp.png" alt="Custom Laser Cut Metal Home Decor" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-3xl font-display font-bold uppercase text-white leading-tight">Modern Home<br />Decor</h3>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-slate-400 mb-6 leading-relaxed">From sculptural table lamps and geometric shelving to modern minimalist clocks, we bring sophisticated home accents to life.</p>
                                    <Link to="/quote" className="text-orange-500 font-display font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">View Highlights <ChevronRight className="w-5 h-5" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                {/* MOUNTING OPTIONS SECTION */}
                <section className="py-24 bg-[#080c14] border-t border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-sky-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-sky-400"></span> Installation Ready <span className="w-8 h-px bg-sky-400"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white mb-6">Professional Mounting Options</h2>
                            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                We offer a variety of integrated mounting solutions to ensure your metal art and privacy screens are easy to install and structurally secure.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="steel-card p-0 overflow-hidden reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="h-64 overflow-hidden">
                                    <img src="/wall-art/mounting_standoffs.png" alt="Stainless Steel Standoff Mounts" className="w-full h-full object-cover" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-display font-bold uppercase text-white mb-3">Stainless Standoffs</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">Create a sophisticated "floating" effect. These polished or brushed cylindrical mounts offset the piece 1" from the wall, allowing for beautiful shadow play and LED backlit possibilities.</p>
                                </div>
                            </div>

                            <div className="steel-card p-0 overflow-hidden reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="h-64 overflow-hidden">
                                    <img src="/wall-art/mounting_tabs.png" alt="Side Mounting Tabs" className="w-full h-full object-cover" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-display font-bold uppercase text-white mb-3">Side-Mount Tabs</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">90-degree bent tabs on the edges of the panel with pre-drilled holes. Ideal for mounting privacy screens between existing timber posts or within architectural frames.</p>
                                </div>
                            </div>

                            <div className="steel-card p-0 overflow-hidden reveal" style={{ transitionDelay: '300ms' }}>
                                <div className="h-64 overflow-hidden">
                                    <img src="/wall-art/mounting_posts.png" alt="Deck and Garden Posts" className="w-full h-full object-cover" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-display font-bold uppercase text-white mb-3">Structural Posts</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">Heavy-duty square posts available for deck mounting (with welded plates) or concrete insertion. The ultimate solution for permanent outdoor privacy and fencing.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-[#0f172a] p-8 rounded-xl border border-white/5 reveal">
                            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                                <div className="flex-1">
                                    <h4 className="text-xl font-display font-bold text-white uppercase mb-2">Need a Custom Mounting Solution?</h4>
                                    <p className="text-slate-400">From welded sub-frames to countersunk flush-mount holes, our engineers can customize the mounting interface to suit your specific site requirements.</p>
                                </div>
                                <Link to="/contact" className="px-8 py-3 rounded border border-orange-500/50 text-orange-400 font-display font-bold uppercase hover:bg-orange-500/10 transition-colors shrink-0">Talk to an Engineer</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MATERIALS AND FINISHES SECTION */}
                <section className="py-24 bg-[#0f172a] border-y border-white/5 relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="reveal-left">
                                <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                    <span className="w-8 h-px bg-orange-500"></span> Customization <span className="w-8 h-px bg-orange-500"></span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white mb-8">Materials & Finishes</h2>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-display font-bold uppercase text-orange-400 mb-3 flex items-center gap-2">
                                            <Package className="w-5 h-5" /> Base Materials
                                        </h3>
                                        <ul className="space-y-3 text-slate-400 ml-7">
                                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" /> <strong>Carbon Steel:</strong> Heavy, magnetic, highly durable. Great for powder coating or natural rusted (Corten-style) finishes.</li>
                                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" /> <strong>Aluminum:</strong> Lightweight, rust-proof, ideal for large pieces or humid environments.</li>
                                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" /> <strong>Stainless Steel:</strong> Premium look with extreme corrosion resistance. Perfect for brushed or mirrored finishes.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-display font-bold uppercase text-orange-400 mb-3 flex items-center gap-2">
                                            <Settings className="w-5 h-5" /> Premium Finishes
                                        </h3>
                                        <ul className="space-y-3 text-slate-400 ml-7">
                                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" /> <strong>Powder Coating:</strong> Available in matte, gloss, or textured finishes. Any RAL color.</li>
                                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" /> <strong>Brushed Polish:</strong> A directional grain finish that catches the light beautifully, usually on stainless steel.</li>
                                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" /> <strong>Raw / Rusted Patina:</strong> A popular organic industrial aesthetic, sealed with clear coat to prevent staining.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 reveal-right">
                                <div className="space-y-4">
                                    <div className="bg-[#1e293b] p-2 rounded-lg border border-white/10 h-64">
                                        <img src="/wall-art/triptych.png" className="w-full h-full object-cover rounded" alt="Matte Black Powder Coat Interior Wall Art" />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-12">
                                    <div className="bg-[#1e293b] p-2 rounded-lg border border-white/10 h-64">
                                        <img src="/wall-art/outdoor.png" className="w-full h-full object-cover rounded" alt="Rusted Corten Steel Outdoor Wall Art" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS SECTION */}
                <section className="py-24 bg-[#0a0f1a] border-t border-white/5 relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> The Process <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white mb-6">How It Works</h2>
                            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                From initial concept to final finishing, our streamlined production process ensures your custom metal project is delivered with absolute precision.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="text-6xl font-display font-black text-orange-500/20 leading-none mb-6">01</div>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-4">Design & Concept</h3>
                                <p className="text-slate-400 leading-relaxed">Send us your idea, sketch, or a photo you like. Our engineering team provides <strong className="text-white">free vector conversion and CAD design</strong> to ensure the piece is production-ready.</p>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="text-6xl font-display font-black text-orange-500/20 leading-none mb-6">02</div>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-4">Precision Cutting</h3>
                                <p className="text-slate-400 leading-relaxed">We utilize industrial-grade fiber lasers with 0.1mm precision to cut your design into Aluminum, Stainless Steel, or Carbon Steel with absolute accuracy.</p>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '300ms' }}>
                                <div className="text-6xl font-display font-black text-orange-500/20 leading-none mb-6">03</div>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-4">Finishing & Delivery</h3>
                                <p className="text-slate-400 leading-relaxed">Each piece is professionally deburred and finished with your choice of powder coating or patinas, then securely crated for flat-rate global shipping.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GALLERY CTA SECTION */}
                <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0f1a] to-[#0f172a]">
                    <div className="container mx-auto px-4 text-center z-10 relative">
                        <div className="max-w-3xl mx-auto reveal">
                            <h2 className="text-5xl md:text-6xl font-display font-black uppercase mb-6 leading-none">
                                Bring your <span className="gradient-text-orange">Wall Art</span> to life
                            </h2>
                            <p className="text-xl text-slate-400 mb-10">
                                Send us your concept, hand sketches, or reference images. Our team provides <strong className="text-white">free design evaluations and vector conversions</strong> to get your project ready for production.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/quote" className="btn-cta px-10 py-5 rounded-md text-xl">Get Your Free Design</Link>
                                <Link to="/contact" className="px-10 py-5 rounded-md text-xl font-display font-bold uppercase border border-white/20 hover:bg-white/5 transition-colors">Talk to an Engineer</Link>
                            </div>
                            <p className="mt-8 text-xs text-slate-500 italic flex items-center justify-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-orange-500/50" />
                                All custom designs remain strictly confidential.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default LaserCutWallArtLanding;
