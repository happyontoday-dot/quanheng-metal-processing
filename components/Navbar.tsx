import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `relative block px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-300 font-display group ${isActive
        ? 'text-accent'
        : 'text-slate-300 hover:text-white'
      }`
    }
  >
    {({ isActive }) => (
      <>
        {children}
        <span
          className={`absolute left-0 -bottom-1 h-[2px] bg-accent transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
        ></span>
      </>
    )}
  </NavLink>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-lg py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 shadow-md overflow-hidden group-hover:border-accent/50 transition-all duration-500">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <svg viewBox="0 0 100 100" className="w-8 h-8 relative z-10 transform group-hover:scale-105 transition-transform duration-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Top Container (n-shape) */}
                  <path d="M15 85 L15 15 L65 15 L65 65" stroke="currentColor" className="text-white group-hover:opacity-90 transition-opacity duration-300" strokeWidth="8" strokeLinecap="square" strokeLinejoin="miter" />
                  {/* Bottom Container (U-shape) */}
                  <path d="M35 35 L35 85 L85 85 L85 15" stroke="currentColor" className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300" strokeWidth="8" strokeLinecap="square" strokeLinejoin="miter" />
                  {/* Tangent Tail of Q */}
                  <path d="M55 52 L82 95" stroke="currentColor" className="text-accent group-hover:text-orange-400 transition-colors duration-300" strokeWidth="8" strokeLinecap="square" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-black text-white tracking-tight font-display flex items-baseline leading-none">
                  QU<span className="text-accent">METAL</span><span className="w-1.5 h-1.5 rounded-full bg-accent ml-0.5 mb-0.5 animate-glow"></span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                  Quality & Rapid Metal Processing
                </span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <NavItem to="/">HOME</NavItem>
            <NavItem to="/about">ABOUT</NavItem>

            {/* Services Dropdown */}
            <div className="relative group px-3 py-2">
              <span
                className={`relative inline-flex items-center text-sm font-semibold tracking-wide uppercase transition-colors duration-300 font-display cursor-default text-slate-300 hover:text-white`}
              >
                SERVICES <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                <span className="absolute left-0 -bottom-1 h-[2px] bg-accent w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
              </span>

              {/* Mega Menu Dropdown */}
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="w-[850px] bg-slate-900 border border-slate-800 shadow-2xl rounded-2xl p-8 flex gap-12">

                  {/* Column 1: Sheet Metal Fabrication */}
                  <div className="flex-1">
                    <Link to="/sheet-metal-fabrication" className="inline-flex items-center text-accent font-display font-bold text-lg mb-4 hover:text-orange-400 transition-colors group/link">
                      SHEET METAL FABRICATION
                    </Link>
                    <ul className="space-y-3">
                      <li><Link to="/services/custom-stamping" className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transform duration-200">Metal Stamping</Link></li>
                      <li><Link to="/services/metal-punching" className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transform duration-200">Metal Punching</Link></li>
                      <li><Link to="/services/metal-cutting" className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transform duration-200">Metal Cutting</Link></li>
                      <li><Link to="/services/metal-bending" className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transform duration-200">Metal Bending</Link></li>
                    </ul>
                  </div>

                  {/* Column 2: CNC Machining */}
                  <div className="flex-1">
                    <Link to="/cnc-machining" className="inline-flex items-center text-accent font-display font-bold text-lg mb-4 hover:text-orange-400 transition-colors group/link">
                      CNC MACHINING
                    </Link>
                    <ul className="space-y-3">
                      <li><Link to="/services/cnc-turning" className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transform duration-200">CNC Turning</Link></li>
                      <li><Link to="/services/cnc-milling" className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transform duration-200">CNC Milling</Link></li>
                    </ul>
                  </div>

                  {/* Column 3: Other Services */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <ul className="space-y-3">
                        <li><Link to="/3d-printing-service" className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transform duration-200">Metal 3D Printing</Link></li>
                        <li><Link to="/services/surface-finishing" className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transform duration-200">Surface Finishing</Link></li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group px-3 py-2">
              <span
                className={`relative inline-flex items-center text-sm font-semibold tracking-wide uppercase transition-colors duration-300 font-display cursor-default text-slate-300 hover:text-white`}
              >
                PRODUCTS <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                <span className="absolute left-0 -bottom-1 h-[2px] bg-accent w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
              </span>

              {/* Products Dropdown Menu */}
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="w-[300px] bg-slate-900 border border-slate-800 shadow-2xl rounded-2xl p-4">
                  <ul className="space-y-2">
                    <li>
                      <Link to="/products/metal-enclosures" className="block p-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all font-medium border border-transparent hover:border-slate-700/50">
                        Metal Enclosures &amp; Cabinets
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/bbq-grills" className="block p-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all font-medium border border-transparent hover:border-slate-700/50">
                        BBQ Grills &amp; Accessories
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/laser-cut-wall-art" className="block p-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all font-medium border border-transparent hover:border-slate-700/50">
                        Custom Laser Cut Metal Wall Art
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <NavItem to="/blog">BLOG</NavItem>
            <NavItem to="/contact">CONTACT US</NavItem>

            <NavLink
              to="/quote"
              className="ml-6 relative inline-flex items-center justify-center px-6 py-2.5 font-display font-bold text-white transition-all duration-300 bg-accent rounded-full hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:-translate-y-0.5 overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative">Get Quote</span>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 shadow-2xl h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <NavItem to="/" onClick={() => setIsOpen(false)}>HOME</NavItem>
            <NavItem to="/about" onClick={() => setIsOpen(false)}>ABOUT</NavItem>

            {/* Mobile Services Accordion */}
            <div className="px-4 py-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-left text-sm font-semibold tracking-wide uppercase font-display text-slate-300 hover:text-white transition-colors"
              >
                SERVICES
              </button>

              {/* Mobile sub-menu wrapper */}
              <div className={`mt-4 pl-4 border-l border-slate-700/50 space-y-6 overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>

                {/* Sheet Metal */}
                <div>
                  <Link to="/sheet-metal-fabrication" onClick={() => setIsOpen(false)} className="block text-accent font-semibold mb-3 tracking-wide">SHEET METAL FABRICATION</Link>
                  <ul className="pl-4 space-y-3">
                    <li><Link to="/services/custom-stamping" onClick={() => setIsOpen(false)} className="text-slate-400 text-sm hover:text-white transition-colors">Metal Stamping</Link></li>
                    <li><Link to="/services/metal-punching" onClick={() => setIsOpen(false)} className="text-slate-400 text-sm hover:text-white transition-colors">Metal Punching</Link></li>
                    <li><Link to="/services/metal-cutting" onClick={() => setIsOpen(false)} className="text-slate-400 text-sm hover:text-white transition-colors">Metal Cutting</Link></li>
                    <li><Link to="/services/metal-bending" onClick={() => setIsOpen(false)} className="text-slate-400 text-sm hover:text-white transition-colors">Metal Bending</Link></li>
                  </ul>
                </div>

                {/* CNC */}
                <div>
                  <Link to="/cnc-machining" onClick={() => setIsOpen(false)} className="block text-accent font-semibold mb-3 tracking-wide">CNC MACHINING</Link>
                  <ul className="pl-4 space-y-3">
                    <li><Link to="/services/cnc-turning" onClick={() => setIsOpen(false)} className="text-slate-400 text-sm hover:text-white transition-colors">CNC Turning</Link></li>
                    <li><Link to="/services/cnc-milling" onClick={() => setIsOpen(false)} className="text-slate-400 text-sm hover:text-white transition-colors">CNC Milling</Link></li>
                  </ul>
                </div>

                {/* Others */}
                <div>
                  <ul className="pl-4 space-y-3">
                    <li><Link to="/3d-printing-service" onClick={() => setIsOpen(false)} className="text-slate-400 text-sm hover:text-white transition-colors">Metal 3D Printing</Link></li>
                    <li><Link to="/services/surface-finishing" onClick={() => setIsOpen(false)} className="text-slate-400 text-sm hover:text-white transition-colors">Surface Finishing</Link></li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Mobile Products Accordion */}
            <div className="px-4 py-2">
              <button
                onClick={() => {
                  const el = document.getElementById('mobile-products-menu');
                  if (el) {
                    if (el.style.maxHeight) {
                      el.style.maxHeight = null;
                      el.style.opacity = '0';
                    } else {
                      el.style.maxHeight = el.scrollHeight + "px";
                      el.style.opacity = '1';
                    }
                  }
                }}
                className="flex items-center justify-between w-full text-left text-sm font-semibold tracking-wide uppercase font-display text-slate-300 hover:text-white transition-colors"
              >
                PRODUCTS
              </button>

              {/* Mobile Products sub-menu */}
              <div id="mobile-products-menu" className={`mt-2 pl-4 border-l border-slate-700/50 space-y-4 overflow-hidden transition-all duration-300`} style={{ maxHeight: 0, opacity: 0 }}>
                <div>
                  <ul className="pl-2 space-y-3 pt-2">
                    <li><Link to="/products/metal-enclosures" onClick={() => setIsOpen(false)} className="text-slate-400 text-sm hover:text-white transition-colors">Metal Enclosures &amp; Cabinets</Link></li>
                    <li><Link to="/products/bbq-grills" onClick={() => setIsOpen(false)} className="text-slate-400 text-sm hover:text-white transition-colors">BBQ Grills &amp; Accessories</Link></li>
                    <li><Link to="/products/laser-cut-wall-art" onClick={() => setIsOpen(false)} className="text-slate-400 text-sm hover:text-white transition-colors">Custom Metal Wall Art</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <NavItem to="/blog" onClick={() => setIsOpen(false)}>BLOG</NavItem>
            <NavItem to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</NavItem>

            <div className="pt-6 px-4">
              <NavLink
                to="/quote"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-6 py-4 font-display font-bold text-white bg-accent rounded-xl hover:bg-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.3)] transition-all"
              >
                Get Instant Quote
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
