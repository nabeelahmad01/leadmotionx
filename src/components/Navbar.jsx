import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      padding: '1rem 0',
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
      boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/images/logo.png" alt="LeadMotionX" style={{ height: '40px', width: 'auto', borderRadius: '8px' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>
            Lead<span className="text-gradient">MotionX</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'none' }} className="desktop-menu">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', alignItems: 'center' }}>
            <li><Link to="/about" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>About</Link></li>
            <li><Link to="/services" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Services</Link></li>
            <li><Link to="/portfolio" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Portfolio</Link></li>
            <li><Link to="/blog" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Blog</Link></li>
            <li><a href="/#pricing" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Pricing</a></li>
          </ul>
        </div>

        {/* CTA */}
        <div style={{ display: 'none' }} className="desktop-menu">
          <Link to="/contact" className="btn btn-primary">Get Free Strategy</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-toggle" style={{ cursor: 'pointer', zIndex: 101 }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} color="var(--text-main)" /> : <Menu size={28} color="var(--text-main)" />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--glass-border)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
        }}>
          <Link to="/about" style={{ color: 'var(--text-main)', fontWeight: 500 }} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/services" style={{ color: 'var(--text-main)', fontWeight: 500 }} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link to="/portfolio" style={{ color: 'var(--text-main)', fontWeight: 500 }} onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
          <Link to="/blog" style={{ color: 'var(--text-main)', fontWeight: 500 }} onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          <a href="/#pricing" style={{ color: 'var(--text-main)', fontWeight: 500 }} onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          <Link to="/contact" className="btn btn-primary" style={{ textAlign: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>Get Free Strategy</Link>
        </div>
      )}

      {/* Inject Media Query for Desktop/Mobile display */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        nav a:hover {
          color: var(--primary) !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
