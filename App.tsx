import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { ServiceDetail } from './pages/ServiceDetail';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Quote } from './pages/Quote';
import SheetMetalLanding from './pages/SheetMetalLanding';
import CNCLanding from './pages/CNCLanding';
import CNCTurning from './pages/CNCTurning';
import CNCMilling from './pages/CNCMilling';
import ThreeDPrintingLanding from './pages/ThreeDPrintingLanding';
import MetalEnclosuresLanding from './pages/MetalEnclosuresLanding';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Products />} />
            <Route path="/services/cnc-turning" element={<CNCTurning />} />
            <Route path="/services/cnc-milling" element={<CNCMilling />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/sheet-metal-fabrication" element={<SheetMetalLanding />} />
            <Route path="/cnc-machining" element={<CNCLanding />} />
            <Route path="/3d-printing-service" element={<ThreeDPrintingLanding />} />
            <Route path="/products/metal-enclosures" element={<MetalEnclosuresLanding />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
};

export default App;
