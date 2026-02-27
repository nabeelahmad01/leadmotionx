import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-color)',
            padding: '4rem 0 2rem',
            borderTop: '1px solid var(--glass-border)'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '2rem',
                    marginBottom: '2rem'
                }}>

                    <div>
                        <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
                            Lead<span className="text-gradient">MotionX</span>
                        </span>
                        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', maxWidth: '300px' }}>
                            Performance-Based Web & Lead Gen Solutions for US Contractors.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#services" style={{ color: 'var(--text-muted)' }}>Services</a>
                        <a href="#testimonials" style={{ color: 'var(--text-muted)' }}>Results</a>
                        <a href="#about" style={{ color: 'var(--text-muted)' }}>About Us</a>
                    </div>

                </div>

                <div style={{
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--glass-border)',
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                }}>
                    &copy; {new Date().getFullYear()} LeadMotionX. All rights reserved. | <a href="mailto:contact@leadmotionx.com">contact@leadmotionx.com</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
