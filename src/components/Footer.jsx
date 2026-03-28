import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            background: '#1a1a2e',
            padding: '4rem 0 2rem',
            color: '#e2e8f0'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>

                    {/* Brand */}
                    <div>
                        <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#fff' }}>
                            Lead<span style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MotionX</span>
                        </span>
                        <p style={{ color: '#94a3b8', marginTop: '0.75rem', lineHeight: 1.7 }}>
                            Performance-Based Web & Lead Gen Solutions for US Contractors.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#fff' }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <Link to="/about" style={{ color: '#94a3b8', fontSize: '0.95rem' }}>About Us</Link>
                            <Link to="/services" style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Services</Link>
                            <Link to="/portfolio" style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Portfolio</Link>
                            <Link to="/blog" style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Blog</Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#fff' }}>Services</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Lead Generation</span>
                            <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Web Design</span>
                            <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Local SEO</span>
                            <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Marketing Automation</span>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#fff' }}>Legal</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <Link to="/privacy" style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Privacy Policy</Link>
                            <Link to="/terms" style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Terms of Service</Link>
                            <Link to="/faq" style={{ color: '#94a3b8', fontSize: '0.95rem' }}>FAQ</Link>
                            <Link to="/contact" style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Contact</Link>
                        </div>
                    </div>

                </div>

                <div style={{
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    textAlign: 'center',
                    color: '#64748b',
                    fontSize: '0.9rem'
                }}>
                    &copy; {new Date().getFullYear()} LeadMotionX. All rights reserved. | <a href="mailto:contact@leadmotionx.com" style={{ color: '#94a3b8' }}>contact@leadmotionx.com</a>
                </div>
            </div>

            <style>{`
                footer a:hover {
                    color: var(--primary) !important;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
