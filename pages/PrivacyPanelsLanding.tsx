import React, { useEffect } from 'react';
import {
    ChevronRight, Shield, Settings, CheckCircle, Star, Package,
    Wrench, Truck, Zap, Award, Users, Layers, Scissors, Maximize2,
    Home, DoorOpen, Fence, ScanLine, Hammer, Ruler, Anchor,
    TreePine, Bird
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const PrivacyPanelsLanding: React.FC = () => {
    useSEO({
        title: "Decorative Privacy Metal Panels, Screens & Fence Gate Inserts | Laser Cut | QUMETAL",
        description: "Custom laser-cut decorative privacy metal panels and screens for decks, fences, railings and gate inserts. Geometric, floral, oriental & modern styles. OEM factory direct — powder coated steel, aluminium, corten. Global delivery."
    });

    useEffect(() => {
        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };
        const observerOptions = { threshold: 0.07, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elements = document.querySelectorAll('.pp-reveal, .pp-reveal-left, .pp-reveal-right, .pp-reveal-scale');
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const productStyles = [
        {
            title: "Geometric Lattice",
            subtitle: "Hexagon & Diamond Pattern",
            description: "Precision laser-cut hexagonal and diamond grid panels delivering a contemporary architectural statement. The close-tolerance geometry creates striking shadow play while maintaining structural rigidity. Ideal for modern residences, commercial exteriors, and urban rooftop decks.",
            image: "/privacy-panels/geometric-collection.png",
            tags: ["Modern", "Architectural", "High Contrast"],
            accent: "#3b82f6",
        },
        {
            title: "Botanical Scroll",
            subtitle: "Floral & Leaf Pattern",
            description: "Flowing organic curves and delicate leaf motifs laser-cut with 0.1 mm precision. The botanical silhouette softens perimeter boundaries while filtering light beautifully. Perfect for garden screens, pool surrounds, and hospitality venues seeking a natural luxury aesthetic.",
            image: "/privacy-panels/floral.png",
            tags: ["Organic", "Garden", "Lifestyle"],
            accent: "#10b981",
        },


        {
            title: "Tree of Life",
            subtitle: "Decorative Outdoor Garden Panel",
            description: "An intricate laser-cut tree motif symbolising growth and interconnectedness. This decorative outdoor garden panel creates a stunning focal point in landscapes, offering beautiful dappled shade while adding privacy. Manufactured in weather-resistant corten steel or durable powder coat.",
            image: "/privacy-panels/garden-tree.png",
            tags: ["Nature", "Decorative", "Focal Point"],
            accent: "#10b981",
        },
        {
            title: "Abstract Wave",
            subtitle: "Decorative Outdoor Garden Panel",
            description: "Flowing organic lines imitate water ripples in this modern decorative outdoor garden panel. Perfect for creating zen zones, screening pool equipment, or acting as an artistic divider in contemporary garden layouts.",
            image: "/privacy-panels/garden-wave.png",
            tags: ["Contemporary", "Organic", "Flow"],
            accent: "#0ea5e9",
        },
        {
            title: "Heritage Damask",
            subtitle: "Decorative Outdoor Garden Panel",
            description: "A luxurious repeating damask floral design cut with flawless precision. This decorative outdoor garden panel introduces a touch of classical elegance to alfresco dining areas, bringing high-end luxury to your exterior styling.",
            image: "/privacy-panels/garden-damask.png",
            tags: ["Classic", "Luxury", "Elegant"],
            accent: "#ec4899",
        },

        {
            title: "Birch Tree Design",
            subtitle: "Decorative Outdoor Garden Panel",
            description: "A serene natural motif featuring vertical birch tree silhouettes. Perfect for bringing an organic, woodland feel to your outdoor spaces, this decorative garden panel creates beautiful shifting shadows as the sun moves across your patio.",
            image: "/privacy-panels/birch-tree.png",
            tags: ["Nature", "Woodland", "Calming"],
            accent: "#84cc16",
        },
        {
            title: "Dog Paw Design",
            subtitle: "Decorative Outdoor Garden Panel",
            description: "A playful, pet-friendly decorative garden panel featuring scattered dog paws. An excellent choice for dog daycares, residential pet zones, or simply showing off your love for animals on your boundary fence.",
            image: "/privacy-panels/dog-paw.png",
            tags: ["Playful", "Pets", "Fun"],
            accent: "#f97316",
        },
    ];

    const allProducts = [
        ...productStyles,
        {
            title: "Deer Forest Panorama",
            subtitle: "Metal Panel Insert",
            description: "A majestic woodland scene featuring deer silhouettes framed by towering pine trees and rolling mountain ridges. Laser-cut with 0.1 mm precision from sheet steel, every antler tine and tree branch is captured in stunning detail. Creates breathtaking dappled light effects at sunrise and sunset.",
            image: "/privacy-panels/wildlife-deer-forest-v2.png",
            tags: ["Wildlife", "Forest", "Majestic"],
            accent: "#d97706",
        },
        {
            title: "Wolf Moonlight",
            subtitle: "Metal Panel Insert",
            description: "A lone wolf howling beneath a luminous full moon, silhouetted against a dense pine forest. The circular moon aperture becomes a natural light portal, casting a perfect disc of light that moves across surfaces throughout the day. A hauntingly beautiful panel for evening entertaining spaces.",
            image: "/privacy-panels/wildlife-wolf-moon-v2.png",
            tags: ["Nocturnal", "Atmospheric", "Iconic"],
            accent: "#8b5cf6",
        },
    ];

    const scenes = [
        {
            title: "Deck & Patio Screens",
            description: "Transform an exposed deck into a private outdoor retreat. Our panels install directly onto existing balustrade frames or timber posts, providing wind protection and visual privacy without blocking natural light. Available in full-height, half-height, or modular insert formats that adapt to any deck configuration.",
            highlights: ["Wind & Privacy Shield", "Balustrade Frame Compatible", "Full / Half Height Options", "Sun-Safe Powder Coat"],
            image: "/privacy-panels/scene-deck.png",
            icon: <Home className="w-6 h-6" />,
        },
        {
            title: "Privacy Fence Panels",
            description: "Replace or upgrade solid timber fence panels with decorative laser-cut steel for a design-forward boundary solution. Our fence panel range installs between standard 40×40 mm SHS steel posts and includes pre-punched fixing holes. Available in heights from 900 mm to 2400 mm, widths from 600 mm to 1800 mm.",
            highlights: ["40×40 SHS Post Compatible", "900 – 2400 mm Heights", "Rust-Proof Galv. + Powder Coat", "10 Year Surface Warranty"],
            image: "/privacy-panels/scene-fence.png",
            icon: <Fence className="w-6 h-6" />,
        },
        {
            title: "Railing Infill Panels",
            description: "Elevate balustrade and railing systems with decorative panel infills. Drop-in dimensions are custom-manufactured to fit your exact frame opening, with no field-cutting required. Compliant with AS 1170 and IBC balustrade load requirements when paired with correct structural framing. Perfect for staircases, mezzanines, and balconies.",
            highlights: ["Custom Drop-In Sizes", "AS 1170 / IBC Compliant Frame", "Interior & Exterior", "Stainless 316 Option"],
            image: "/privacy-panels/scene-railing.png",
            icon: <Layers className="w-6 h-6" />,
        },
        {
            title: "Gate Insert Panels",
            description: "Add decorative identity to driveway and pedestrian gates without compromising security. Laser-cut inserts are welded or mechanically fixed within standard RHS gate frames, converting a plain steel gate into a signature entry feature. All inserts are engineered to maintain gate structural integrity and are available in matching finish to gate frame.",
            highlights: ["RHS Frame Integration", "Welded or Mechanical Fix", "Matching Frame Finish", "Motorised Gate Compatible"],
            image: "/privacy-panels/scene-gate.png",
            icon: <DoorOpen className="w-6 h-6" />,
        },
        {
            title: "Balcony Railing Insert",
            description: "Transform your balcony into a private wilderness retreat. Wildlife scenery panels install as railing infills or privacy screens, filtering sunlight to cast stunning animal and forest shadow patterns across your balcony floor. The intricate laser-cut designs provide privacy from neighbouring buildings while maintaining airflow and natural light. Available in full-height privacy screens or half-height railing inserts to suit any balcony configuration.",
            highlights: ["Privacy from Neighbouring Views", "Beautiful Shadow Patterns", "Wind-Permeable Design", "Balustrade Frame Compatible"],
            image: "/privacy-panels/scene-balcony-wildlife.png",
            icon: <Home className="w-6 h-6" />,
        },
        {
            title: "Staircase Balustrade Infill",
            description: "Elevate interior staircases with wildlife narrative panels running the full length of your balustrade. Each panel can feature a continuous scene — deer transitioning to forest, eagles soaring above mountain ridges — creating a visual story that unfolds as you ascend. The laser-cut metal infills replace standard balusters or glass panels, adding warmth and character to modern and traditional interiors alike.",
            highlights: ["Continuous Narrative Design", "Custom Stair-Angle Cuts", "Interior & Exterior Rated", "AS 1170 / IBC Compliant Frame"],
            image: "/privacy-panels/scene-staircase-wildlife.png",
            icon: <Layers className="w-6 h-6" />,
        },
    ];

    const processSteps = [
        { step: "01", title: "DXF Design", desc: "Customer artwork converted to precision DXF/DWG files. Our CAD engineers optimise cut paths for structural integrity and maximum design fidelity.", icon: <Ruler className="w-7 h-7" /> },
        { step: "02", title: "Material Prep", desc: "Flat sheet steel, aluminium, or corten cut to panel blanks. Shot-blasted to Sa 2.5 or grain-sanded for optimal surface adhesion prior to cutting.", icon: <Layers className="w-7 h-7" /> },
        { step: "03", title: "Fiber Laser Cutting", desc: "6 kW fibre laser cuts with ±0.1 mm accuracy. Nitrogen-assist cutting on aluminium and stainless ensures oxide-free, bright edges ready for finishing.", icon: <Scissors className="w-7 h-7" /> },
        { step: "04", title: "Deburring & QC", desc: "Vibratory or manual deburring removes any micro-burrs. Full-panel flatness and aperture dimension inspection against approved drawings.", icon: <ScanLine className="w-7 h-7" /> },
        { step: "05", title: "Surface Finishing", desc: "Powder coating (any RAL), galvanising, corten weathering, or anodising applied according to specification. UV-stable primer undercoat for outdoor longevity.", icon: <Star className="w-7 h-7" /> },
        { step: "06", title: "Pack & Ship", desc: "Panels individually wrapped in PE foam, palletised or crated for air or sea freight. Customs documentation and HS code declaration included.", icon: <Truck className="w-7 h-7" /> },
    ];

    const materials = [
        { title: "Mild Steel (Q235 / S235)", desc: "Most cost-effective option. Ideal with powder coat or galvanised finish for outdoor use. 1.2 mm – 6 mm thickness." },
        { title: "Corten / Weathering Steel", desc: "Develops a natural rust-patina outer layer that self-protects. Stunning visual character for architectural and garden applications. No paint required." },
        { title: "Aluminium 5052 / 6061", desc: "Lightweight and inherently rust-free. Anodised or powder-coated. Preferred for coastal environments and interior railings where weight matters." },
        { title: "Stainless Steel 304/316", desc: "Premium marine-grade option for pool surrounds, coastal locations, and luxury residential projects. Mirror, satin, or bead-blast finishes available." },
        { title: "Powder Coat Finish", desc: "Electrostatic spray and 200°C oven cure. Any RAL colour. Approx. 60–80 μm DFT. UV-stable with 10-year surface warranty." },
        { title: "Hot-Dip Galvanised", desc: "80 μm+ zinc coating for maximum corrosion resistance in aggressive environments. Can be powder-coated over for colour and additional protection." },
    ];

    const accessories = [
        {
            icon: <Settings className="w-6 h-6 text-orange-400" />,
            title: "Steel SHS Posts",
            desc: "40×40 / 50×50 / 65×65 mm square hollow section posts in galvanised or powder-coated mild steel. Pre-drilled for panel fixing. Available in 1.8 m, 2.1 m, 2.4 m lengths with base plate or concrete-in options."
        },
        {
            icon: <Wrench className="w-6 h-6 text-orange-400" />,
            title: "Panel Mounting Clips",
            desc: "Stainless steel spring clips and channel extrusions for tool-free panel insertion into post rails. Allows panel removal without surface damage. Corrosion-proof 304 stainless."
        },
        {
            icon: <Package className="w-6 h-6 text-orange-400" />,
            title: "Fastener Kits",
            desc: "Matched rivet sets, M6 colour-matched hex bolts, neoprene washers, and anti-vandal security screws. Full fixing kits supplied per panel count. Grade 316 stainless or zinc-plated."
        },
        {
            icon: <Layers className="w-6 h-6 text-orange-400" />,
            title: "Top & Bottom Rails",
            desc: "40×20 mm rectangular hollow section rails in matching finish. Accepts panel flanged edges for captive, rattle-free installation. Mitre-cut corner joins supplied for wrapped corner assemblies."
        },
        {
            icon: <Maximize2 className="w-6 h-6 text-orange-400" />,
            title: "Spacer Standoffs",
            desc: "10 mm – 50 mm aluminium or SS standoffs for feature-wall shadow-gap installations. Creates a floating 3D panel effect. Available in round and square barrel."
        },
        {
            icon: <Shield className="w-6 h-6 text-orange-400" />,
            title: "Post Caps & Finials",
            desc: "Pressed steel domed or flat post caps. Optional decorative spear or ball finials for traditional applications. Powder-coated to match panel finish."
        },

    ];

    const installSteps = [
        {
            step: "01",
            icon: <Ruler className="w-8 h-8 text-orange-400" />,
            title: "Measure & Plan",
            desc: "Measure the opening width and height. For fence runs, mark post centres at 1800 mm maximum intervals. Confirm ground level and check for underground services before drilling. Download our DXF template for post layout."
        },
        {
            step: "02",
            icon: <Hammer className="w-8 h-8 text-orange-400" />,
            title: "Set Posts",
            desc: "Concrete-in posts to 600 mm depth minimum (1200 mm for panels over 1800 mm tall). Allow 48 hrs cure. Alternatively, bolt surface-mount base plates to existing concrete slab or timber decking. Use a spirit level to ensure posts are plumb."
        },
        {
            step: "03",
            icon: <Settings className="w-8 h-8 text-orange-400" />,
            title: "Fit Rails & Clips",
            desc: "Slide top and bottom rails into post channel receivers or weld/bolt to post face. Snap mounting clips into rails at 400 mm centres. For direct bolt-fix, mark and drill panel through-holes to match pre-punched post fixings."
        },
        {
            step: "04",
            icon: <CheckCircle className="w-8 h-8 text-orange-400" />,
            title: "Drop In Panels",
            desc: "Lower each panel into the bottom rail channel, push top edge into top rail and snap clips to lock. Tighten all fasteners to 12 Nm. Apply clear silicone sealant to bottom rail edge for water exclusion. Your installation is complete."
        },
    ];



    const installMethodRailing = [
        {
            step: "01",
            icon: <Ruler className="w-8 h-8 text-orange-400" />,
            title: "Measure Balustrade",
            desc: "Measure the exact internal dimensions of your existing timber or metal railing frames. Leave a 5 mm gap on all sides for tolerance and hardware clearance."
        },
        {
            step: "02",
            icon: <Hammer className="w-8 h-8 text-orange-400" />,
            title: "Pre-drilling",
            desc: "Hold the panel against the existing railing. If retrofitting to timber, mark hole positions through the panel's pre-punched mounting holes and drill pilot holes."
        },
        {
            step: "03",
            icon: <Settings className="w-8 h-8 text-orange-400" />,
            title: "Fix to Frame",
            desc: "Attach the panel directly to the frame using stainless steel screws or standoffs. For metal railings, use self-tapping screws or bolts with neoprene washers to prevent galvanic corrosion."
        },
        {
            step: "04",
            icon: <CheckCircle className="w-8 h-8 text-orange-400" />,
            title: "Secure & Inspect",
            desc: "Tighten all fasteners to ensure the panel does not rattle against the existing frame. Check load ratings if the panel is acting as a primary safety barrier."
        },
    ];

    const businessFeatures = [
        { icon: <Settings className="w-8 h-8 text-orange-400" />, title: "One-Off or Bulk", desc: "No project is too small. From a single decorative panel for your patio to high-volume OEM orders for fencing brands — we deliver professional factory quality to everyone." },
        { icon: <Award className="w-8 h-8 text-orange-400" />, title: "Custom Design Service", desc: "Whether you're a DIYer or an architect, our CAD team helps refine your vision. Send us a sketch or a DXF file; we'll provide detailed 3D mockups for approval." },
        { icon: <Package className="w-8 h-8 text-orange-400" />, title: "Flexible MOQ", desc: "Order exactly what you need. Low minimum order quantities for custom residential projects, with significant tiered discounts for trade professionals and bulk purchasers." },
        { icon: <Users className="w-8 h-8 text-orange-400" />, title: "Factory Direct to Door", desc: "We handle the complexity of global logistics. Secure shipping with DDP options available — your panels arrive at your site or doorstep, with all customs and duties cleared." },
    ];

    return (
        <div className="bg-[#080e1a] text-slate-50 min-h-screen font-sans selection:bg-orange-500/30">
            <style>{`
        .pp-page {
          background-color: #080e1a;
          color: #f8fafc;
          --pp-bg: #080e1a;
          --pp-surface: #0d1525;
          --pp-surface-2: #1a2540;
          --pp-orange: #f97316;
          --pp-border: rgba(255,255,255,0.08);
          font-family: 'DM Sans', 'Inter', sans-serif;
        }
        .pp-page h1, .pp-page h2, .pp-page h3, .pp-page h4, .pp-page .font-display {
          font-family: 'Barlow Condensed', sans-serif !important;
        }
        .pp-gradient-text {
          background: linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pp-glass-card {
          background: linear-gradient(135deg, #0d1525 0%, #1a2540 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .pp-glass-card:hover {
          transform: translateY(-6px);
          border-color: rgba(249,115,22,0.4);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(249,115,22,0.1);
        }
        .pp-btn-primary {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-family: 'Barlow Condensed', sans-serif !important;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(249,115,22,0.3);
        }
        .pp-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(249,115,22,0.5);
          background: linear-gradient(135deg, #fb923c, #f97316);
        }
        .pp-reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .pp-reveal.visible { opacity: 1; transform: translateY(0); }
        .pp-reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .pp-reveal-left.visible { opacity: 1; transform: translateX(0); }
        .pp-reveal-right { opacity: 0; transform: translateX(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .pp-reveal-right.visible { opacity: 1; transform: translateX(0); }
        .pp-reveal-scale { opacity: 0; transform: scale(0.95); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .pp-reveal-scale.visible { opacity: 1; transform: scale(1); }
        .pp-divider { height: 1px; background: linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent); }
        .pp-step-number {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 4rem;
          font-weight: 900;
          color: rgba(249,115,22,0.1);
          line-height: 1;
          position: absolute;
          top: -10px;
          left: 16px;
        }
        .pp-scene-card {
          display: grid;
          gap: 0;
        }
        @media (min-width: 1024px) {
          .pp-scene-card-even { grid-template-columns: 1fr 1fr; }
          .pp-scene-card-odd { grid-template-columns: 1fr 1fr; }
          .pp-scene-card-odd .pp-scene-img { order: 2; }
          .pp-scene-card-odd .pp-scene-text { order: 1; }
        }
      `}</style>
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div className="pp-page">

                {/* ── HERO ─────────────────────────────────────────────────── */}
                <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-[#080e1a]">
                        <img
                            src="/privacy-panels/hero.png"
                            alt="Decorative Laser Cut Privacy Metal Panels"
                            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#080e1a] via-[#080e1a]/85 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080e1a] via-transparent to-[#080e1a]/60" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-orange-600/12 blur-[120px] rounded-full" />
                        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-orange-500/8 blur-[100px] rounded-full" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div className="max-w-4xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wide pp-reveal-left">
                                    <Scissors className="w-4 h-4" />
                                    Laser Cut · OEM Factory Direct · Custom Patterns
                                </div>

                                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.88] tracking-tighter mb-6 pp-reveal-left" style={{ transitionDelay: '100ms' }}>
                                    DECORATIVE<br />
                                    PRIVACY<br />
                                    <span className="pp-gradient-text">METAL PANELS</span>
                                </h1>

                                <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-base font-bold text-white pp-reveal-left" style={{ transitionDelay: '180ms' }}>
                                    <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-400" />Decks & Patios</span>
                                    <span className="hidden sm:inline border-l border-white/20" />
                                    <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-400" />Fences & Railings</span>
                                    <span className="hidden sm:inline border-l border-white/20" />
                                    <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-400" />Gate Inserts</span>
                                    <span className="hidden sm:inline border-l border-white/20" />
                                    <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-400" />Privacy Screens</span>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-10 pp-reveal-left" style={{ transitionDelay: '200ms' }}>
                                    <span className="px-3 py-1 rounded bg-slate-800/80 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                                        <Truck className="w-3.5 h-3.5 text-orange-400" /> Global Shipping
                                    </span>
                                    <span className="px-3 py-1 rounded bg-slate-800/80 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                                        <Package className="w-3.5 h-3.5 text-orange-400" /> 1 Piece Minimum
                                    </span>
                                    <span className="px-3 py-1 rounded bg-slate-800/80 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                                        <ScanLine className="w-3.5 h-3.5 text-orange-400" /> Free Design Proof
                                    </span>
                                </div>

                                <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed pp-reveal-left" style={{ transitionDelay: '220ms' }}>
                                    Laser-cut decorative metal panels that transform ordinary boundaries into architectural statements. Manufactured to any size, any finish, directly from our factory.
                                </p>

                                <div className="flex flex-wrap gap-4 pp-reveal-left" style={{ transitionDelay: '320ms' }}>
                                    <Link to="/quote" className="pp-btn-primary px-10 py-5 rounded-md flex items-center gap-2 text-xl">
                                        Request Custom Quote <ChevronRight className="w-6 h-6" />
                                    </Link>
                                    <Link to="/contact" className="px-10 py-5 rounded-md flex items-center gap-2 text-xl font-display font-bold uppercase border border-white/20 hover:bg-white/5 transition-colors backdrop-blur-sm">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>

                            {/* Visual Grid (Desktop Only) */}
                            <div className="hidden lg:grid grid-cols-2 gap-4 pp-reveal" style={{ transitionDelay: '400ms' }}>
                                <div className="space-y-4 pt-12">
                                    <img src="/privacy-panels/geometric-collection.png" alt="Geometric Privacy Panel" className="rounded-lg object-cover h-64 w-full border border-white/10" />
                                    <img src="/privacy-panels/garden-tree.png" alt="Tree of Life Garden Panel" className="rounded-lg object-cover h-48 w-full border border-white/10" />
                                </div>
                                <div className="space-y-4">
                                    <img src="/privacy-panels/wildlife-deer-forest-v2.png" alt="Wildlife Metal Panel Insert" className="rounded-lg object-cover h-56 w-full border border-white/10" />
                                    <img src="/privacy-panels/birch-tree.png" alt="Birch Tree Design Panel" className="rounded-lg object-cover h-56 w-full border border-white/10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="pp-divider" />

                {/* ── STATS BAR ────────────────────────────────────────────── */}
                <section className="py-12 bg-[#060b14]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pp-reveal">
                            {[
                                { value: "200+", label: "Pattern Designs" },
                                { value: "±0.1mm", label: "Laser Accuracy" },
                                { value: "50+", label: "Countries Shipped" },
                                { value: "ISO 9001", label: "Quality Certified" },
                            ].map((stat, i) => (
                                <div key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                                    <div className="text-4xl md:text-5xl font-display font-black pp-gradient-text mb-1">{stat.value}</div>
                                    <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="pp-divider" />

                {/* ── PRODUCT SHOWCASE ───────────────────────────────────────── */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 pp-reveal">
                            <div className="inline-flex items-center gap-2 text-orange-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-400" /> Custom Patterns · Metal Panel Inserts <span className="w-8 h-px bg-orange-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white leading-tight">
                                Fully Customized Styles<br />
                                <span className="text-lg md:text-xl text-orange-400 bg-orange-400/10 border border-orange-400/20 px-4 py-1 rounded-full inline-block mt-4">No Minimum Order · Start from 1 Piece</span>
                            </h2>
                            <p className="text-slate-400 mt-6 max-w-3xl mx-auto">Whether you need a single custom gate insert or 1,000 architectural screens — our factory is open for everyone. Choose from our 200+ designs or collaborate with our team to create a completely bespoke artwork starting from just one piece.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {allProducts.map((style, idx) => (
                                <div
                                    key={idx}
                                    className="pp-glass-card pp-reveal group overflow-hidden"
                                    style={{ transitionDelay: `${idx * 80}ms` }}
                                >
                                    <div className="relative overflow-hidden bg-slate-800">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1525] via-transparent to-transparent z-10 opacity-60 pointer-events-none" />
                                        <img
                                            src={style.image}
                                            alt={style.title}
                                            className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                            onError={(e) => { e.currentTarget.style.opacity = '0.3'; }}
                                        />
                                        <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-1.5">
                                            {style.tags.map((tag, ti) => (
                                                <span key={ti} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-orange-500/20 border border-orange-500/30 text-orange-300 rounded">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-5 relative z-20">
                                        <p className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-1">{style.subtitle}</p>
                                        <h3 className="text-lg font-display font-bold uppercase text-white mb-2 group-hover:text-orange-400 transition-colors">{style.title}</h3>
                                        <p className="text-slate-400 leading-relaxed text-xs mb-4">{style.description}</p>
                                        <Link to="/quote" className="inline-flex items-center gap-1 text-orange-400 font-bold text-xs uppercase tracking-wider hover:text-orange-300 transition-colors group/link">
                                            Order Custom <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="pp-divider" />

                {/* ── APPLICATION SCENES ───────────────────────────────────── */}
                <section className="py-24 bg-[#060b14]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 pp-reveal">
                            <div className="inline-flex items-center gap-2 text-orange-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-400" /> Where To Use Them <span className="w-8 h-px bg-orange-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Application Scenes</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">From decks and fences to balconies and staircases — every installation context has specific size ranges, fixing methods, and material recommendations.</p>
                        </div>

                        <div className="space-y-6 max-w-6xl mx-auto">
                            {scenes.map((scene, idx) => (
                                <div
                                    key={idx}
                                    className={`pp-glass-card overflow-hidden grid lg:grid-cols-2 pp-reveal`}
                                    style={{ transitionDelay: `${idx * 80}ms` }}
                                >
                                    {/* Image — alternates side on desktop */}
                                    <div className={`relative h-72 lg:h-auto overflow-hidden bg-slate-800 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1525]/60 via-transparent to-transparent z-10" />
                                        <img
                                            src={scene.image}
                                            alt={scene.title}
                                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                            onError={(e) => { e.currentTarget.style.opacity = '0.3'; }}
                                        />
                                        <div className="absolute top-4 left-4 z-20">
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-bold">
                                                {scene.icon}
                                                {scene.title}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className={`p-8 lg:p-10 flex flex-col justify-center ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                        <h3 className="text-3xl font-display font-bold uppercase text-white mb-4">{scene.title}</h3>
                                        <p className="text-slate-400 leading-relaxed mb-6">{scene.description}</p>
                                        <ul className="space-y-2">
                                            {scene.highlights.map((h, hi) => (
                                                <li key={hi} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                                                    <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-6">
                                            <Link to="/quote" className="inline-flex items-center gap-1 text-orange-400 font-bold text-sm uppercase tracking-wider hover:text-orange-300 transition-colors group/link">
                                                Get Quote for This Application <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="pp-divider" />

                {/* ── LASER CUTTING PROCESS ────────────────────────────────── */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 pp-reveal">
                            <div className="inline-flex items-center gap-2 text-orange-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-400" /> Manufacturing <span className="w-8 h-px bg-orange-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Laser Cutting Process</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">From your design file to a finished, coated panel — every step controlled in our factory for consistent quality.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {processSteps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className="pp-glass-card p-7 relative pp-reveal"
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <div className="relative z-10">
                                        <div className="mb-4 text-orange-400">{step.icon}</div>
                                        <h3 className="text-xl font-display font-bold uppercase text-white mb-2">{step.title}</h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="pp-divider" />

                {/* ── MATERIALS & FINISHES ─────────────────────────────────── */}
                <section className="py-24 bg-[#060b14]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="pp-reveal-left">
                                <div className="inline-flex items-center gap-2 text-orange-400 font-bold uppercase tracking-widest text-sm mb-4">
                                    <span className="w-8 h-px bg-orange-400" /> Materials Library <span className="w-8 h-px bg-orange-400" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">Materials & Finishes</h2>
                                <p className="text-xl text-slate-400 mb-8">We laser-cut from flat sheet in any standard metal grade. Choose material and finish combination to suit your environment, load requirements, and aesthetic.</p>
                                <div className="space-y-3">
                                    {materials.map((mat, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/30 hover:border-orange-500/30 transition-colors" style={{ transitionDelay: `${i * 60}ms` }}>
                                            <CheckCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="font-display font-bold text-lg uppercase text-slate-200">{mat.title}</h4>
                                                <p className="text-slate-400 text-sm mt-0.5">{mat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="pp-divider" />

                {/* ── ACCESSORIES ──────────────────────────────────────────── */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 pp-reveal">
                            <div className="inline-flex items-center gap-2 text-orange-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-400" /> Optional Add-ons <span className="w-8 h-px bg-orange-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Accessories & Hardware</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Enhance your project with matched components. All hardware is optional — purchase only what you need to suit your specific installation site.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {accessories.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="pp-glass-card p-6 pp-reveal-scale"
                                    style={{ transitionDelay: `${idx * 80}ms` }}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        {item.icon}
                                        <h3 className="text-lg font-display font-bold uppercase text-white">{item.title}</h3>
                                    </div>
                                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="pp-divider" />

                {/* ── INSTALLATION GUIDE ───────────────────────────────────── */}
                <section className="py-24 bg-[#060b14]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 pp-reveal">
                            <div className="inline-flex items-center gap-2 text-orange-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-400" /> DIY & Trade <span className="w-8 h-px bg-orange-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Installation Guide</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Choose the installation method that suits your site. Both approaches deliver a professional-finish result — no specialist tools required. Full manuals and layout templates supplied with every order.</p>
                        </div>

                        {/* ── Method A: Railing / Balustrade Mount ── */}
                        <div className="max-w-6xl mx-auto mb-16 pp-reveal">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30">
                                    <Layers className="w-6 h-6 text-orange-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold uppercase text-white">Method A — Railing Mount</h3>
                                    <p className="text-slate-400 text-sm">Retrofit panels directly onto existing timber decks, metal balustrades, or staircases</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {installMethodRailing.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className="pp-glass-card p-7 relative pp-reveal-scale"
                                        style={{ transitionDelay: `${idx * 100}ms` }}
                                    >
                                        <span className="pp-step-number">{step.step}</span>
                                        <div className="relative z-10">
                                            <div className="mb-4">{step.icon}</div>
                                            <h3 className="text-xl font-display font-bold uppercase text-white mb-3">{step.title}</h3>
                                            <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                                        </div>
                                        {idx < installMethodRailing.length - 1 && (
                                            <div className="hidden lg:block absolute top-1/2 -right-4 z-30">
                                                <ChevronRight className="w-6 h-6 text-orange-500/40" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Method B: Post Mount ── */}
                        <div className="max-w-6xl mx-auto mb-16 pp-reveal">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30">
                                    <Hammer className="w-6 h-6 text-orange-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold uppercase text-white">Method B — Post Mount</h3>
                                    <p className="text-slate-400 text-sm">Permanent installation with concrete-in or surface-mount steel posts</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {installSteps.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className="pp-glass-card p-7 relative pp-reveal-scale"
                                        style={{ transitionDelay: `${idx * 100}ms` }}
                                    >
                                        <span className="pp-step-number">{step.step}</span>
                                        <div className="relative z-10">
                                            <div className="mb-4">{step.icon}</div>
                                            <h3 className="text-xl font-display font-bold uppercase text-white mb-3">{step.title}</h3>
                                            <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                                        </div>
                                        {idx < installSteps.length - 1 && (
                                            <div className="hidden lg:block absolute top-1/2 -right-4 z-30">
                                                <ChevronRight className="w-6 h-6 text-orange-500/40" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>



                        <div className="mt-12 text-center pp-reveal">
                            <div className="inline-flex flex-wrap justify-center items-center gap-4 md:gap-8 px-8 py-4 rounded-xl border border-white/8 bg-slate-900/40 text-sm text-slate-400">
                                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-400" />Installation Manual Included</span>
                                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-400" />DXF Post Layout Template</span>
                                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-400" />Pre-Punched Fixing Holes</span>
                                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-400" />Full Fastener Kit Supplied</span>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="pp-divider" />

                {/* ── TRADE & RESIDENTIAL SOLUTIONS ───────────────────────────── */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 pp-reveal">
                            <div className="inline-flex items-center gap-2 text-orange-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-400" /> Trade & Residential <span className="w-8 h-px bg-orange-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Direct Factory Solutions</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">We provide professional-grade laser-cut metal panels directly from our factory to homeowners, contractors, and global brands.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {businessFeatures.map((feat, idx) => (
                                <div
                                    key={idx}
                                    className="pp-glass-card p-7 pp-reveal-scale"
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

                <div className="pp-divider" />

                {/* ── TESTIMONIALS ───────────────────────────────────────────── */}
                <section className="py-24 bg-[#0a1120] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 pp-reveal">
                            <h2 className="text-4xl font-display font-bold uppercase text-white mb-4">What Our Clients Say</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">Real feedback from homeowners, contractors, and trade partners worldwide.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[90rem] mx-auto">
                            {/* Testimonial 1: Custom Gate Flexibility */}
                            <div className="pp-glass-card p-7 relative pp-reveal flex flex-col h-full">
                                <div className="absolute top-4 right-6 text-6xl font-display font-black text-orange-500/10 select-none">"</div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                                        ))}
                                    </div>
                                    <blockquote className="text-sm text-slate-300 mb-6 italic flex-grow leading-relaxed">
                                        "If you are looking for a custom gate, this is the place to get it from. The owner spent time upfront ensuring the design met our expectations, sent several design pictures to review and approve, accommodated every request, and responded timely to every inquiry. We have a summer home in an area where there are a lot of deer, quail and mountain views, so the design was just perfect! Shipping was on time, could not have expected the quality and craftsman to be any better once the gate arrived."
                                    </blockquote>
                                    <div className="flex items-center gap-3 mt-auto">
                                        <div className="w-9 h-9 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30 text-[10px] font-bold">RC</div>
                                        <div>
                                            <div className="text-white text-xs font-bold uppercase tracking-wider">Robert C.</div>
                                            <div className="text-slate-500 text-[10px]">Custom Gate Project</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 2: Cost Savings & DIY Setup */}
                            <div className="pp-glass-card p-7 relative pp-reveal flex flex-col h-full" style={{ transitionDelay: '80ms' }}>
                                <div className="absolute top-4 right-6 text-6xl font-display font-black text-orange-500/10 select-none">"</div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                                        ))}
                                    </div>
                                    <blockquote className="text-sm text-slate-300 mb-6 italic flex-grow leading-relaxed">
                                        "Ordered custom railing panels for our deck and was quoted nearly 3x the price by local fabricators. These arrived exactly to spec and I was able to install them myself in just a few hours. High-end architectural look without the astronomical local contractor markup. Truly impressive quality for the price."
                                    </blockquote>
                                    <div className="flex items-center gap-3 mt-auto">
                                        <div className="w-9 h-9 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30 text-[10px] font-bold">ML</div>
                                        <div>
                                            <div className="text-white text-xs font-bold uppercase tracking-wider">Mark L.</div>
                                            <div className="text-slate-500 text-[10px]">Deck Railing Panels</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 3: Rough Sketch to CAD (NEW) */}
                            <div className="pp-glass-card p-7 relative pp-reveal flex flex-col h-full" style={{ transitionDelay: '160ms' }}>
                                <div className="absolute top-4 right-6 text-6xl font-display font-black text-orange-500/10 select-none">"</div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                                        ))}
                                    </div>
                                    <blockquote className="text-sm text-slate-300 mb-6 italic flex-grow leading-relaxed">
                                        "I had a very specific, non-traditional design in mind for our garden accent, and I wasn't sure if it could be done in metal. The seller was incredible—they took my rough sketches and turned them into a professional CAD drawing for my approval. Their flexibility with design tweaks made the whole process stress-free. The final product is a custom masterpiece that perfectly reflects our personal style!"
                                    </blockquote>
                                    <div className="flex items-center gap-3 mt-auto">
                                        <div className="w-9 h-9 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30 text-[10px] font-bold">SK</div>
                                        <div>
                                            <div className="text-white text-xs font-bold uppercase tracking-wider">Sarah K.</div>
                                            <div className="text-slate-500 text-[10px]">Garden Accent Piece</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 4: Trade Partner / Quality */}
                            <div className="pp-glass-card p-7 relative pp-reveal flex flex-col h-full" style={{ transitionDelay: '240ms' }}>
                                <div className="absolute top-4 right-6 text-6xl font-display font-black text-orange-500/10 select-none">"</div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                                        ))}
                                    </div>
                                    <blockquote className="text-sm text-slate-300 mb-6 italic flex-grow leading-relaxed">
                                        "As a landscape contractor, finding a reliable factory is tough. Communication is fast, and the pre-punched holes in the panels make our site installs so much smoother. Our clients love the custom artwork."
                                    </blockquote>
                                    <div className="flex items-center gap-3 mt-auto">
                                        <div className="w-9 h-9 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30 text-[10px] font-bold">JS</div>
                                        <div>
                                            <div className="text-white text-xs font-bold uppercase tracking-wider">Jason S.</div>
                                            <div className="text-slate-500 text-[10px]">Landscape Design Build</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="pp-divider" />

                {/* ── FINAL CTA ─────────────────────────────────────────────── */}
                <section className="py-32 relative overflow-hidden bg-[#080e1a]">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] z-0" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-orange-600/10 blur-[80px] rounded-full" />
                    <div className="container mx-auto px-4 text-center relative z-10 pp-reveal">
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">
                            <span>1. Choose Pattern</span>
                            <ChevronRight className="w-4 h-4 text-orange-400" />
                            <span>2. Send Dimensions</span>
                            <ChevronRight className="w-4 h-4 text-orange-400" />
                            <span>3. Approve Sample</span>
                            <ChevronRight className="w-4 h-4 text-orange-400" />
                            <span>4. Mass Production</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-display font-black uppercase mb-6 leading-none">
                            DEFINE YOUR <span className="pp-gradient-text">SPACE</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            From a single custom gate insert to a full-project supply — our laser-cut privacy panels give every boundary a purpose and personality. Factory pricing, global delivery.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/quote" className="pp-btn-primary px-12 py-5 rounded-md text-xl font-bold">
                                Get Your Direct Quote
                            </Link>
                            <Link to="/contact" className="px-12 py-5 rounded-md text-xl font-display font-bold uppercase border border-white/20 hover:bg-white/5 transition-colors backdrop-blur-sm">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>

            </div >
        </div >
    );
};

export default PrivacyPanelsLanding;
