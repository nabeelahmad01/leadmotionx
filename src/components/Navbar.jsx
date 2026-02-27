import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1.5rem 0',
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/images/logo.png" alt="LeadMotionX" style={{ height: '40px', width: 'auto', borderRadius: '8px' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
            Lead<span className="text-gradient">MotionX</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'none' }} className="desktop-menu">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', alignItems: 'center' }}>
            <li><a href="#services" style={{ fontWeight: 500 }}>Services</a></li>
            <li><a href="#testimonials" style={{ fontWeight: 500 }}>Results</a></li>
            <li><a href="#about" style={{ fontWeight: 500 }}>About Us</a></li>
          </ul>
        </div>

        {/* CTA */}
        <div style={{ display: 'none' }} className="desktop-menu">
          <a href="#contact" className="btn btn-primary">Get Free Strategy</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-toggle" style={{ cursor: 'pointer', zIndex: 101 }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(17, 17, 17, 0.98)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--glass-border)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)}>Results</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          <a href="#contact" className="btn btn-primary" style={{ textAlign: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>Get Free Strategy</a>
        </div>
      )}

      {/* Inject Media Query for Desktop/Mobile display */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
