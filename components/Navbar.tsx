import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';

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
      `block px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActive
        ? 'text-accent border-b-2 border-accent'
        : 'text-slate-600 hover:text-primary hover:bg-slate-50'
      }`
    }
  >
    {children}
  </NavLink>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-primary rounded-lg group-hover:bg-accent transition-colors">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary tracking-tight">QUANHENG</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">Metal Processing</span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavItem to="/">HOME</NavItem>
            <NavItem to="/about">ABOUT US</NavItem>
            <NavItem to="/services">PRODUCTS & SERVICES</NavItem>
            <NavItem to="/blog">BLOG</NavItem>
            <NavItem to="/contact">CONTACT</NavItem>

            <NavLink
              to="/quote"
              className="ml-4 px-5 py-2.5 bg-accent hover:bg-sky-700 text-white text-sm font-semibold rounded-full transition-all shadow-md hover:shadow-lg"
            >
              Get Quote
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavItem to="/" onClick={() => setIsOpen(false)}>HOME</NavItem>
            <NavItem to="/about" onClick={() => setIsOpen(false)}>ABOUT US</NavItem>
            <NavItem to="/services" onClick={() => setIsOpen(false)}>PRODUCTS</NavItem>
            <NavItem to="/blog" onClick={() => setIsOpen(false)}>BLOG</NavItem>
            <NavItem to="/contact" onClick={() => setIsOpen(false)}>CONTACT</NavItem>
          </div>
        </div>
      )}
    </nav>
  );
};