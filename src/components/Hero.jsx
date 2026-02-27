import React from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            paddingTop: '120px'
        }}>
            {/* Background Graphic */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                backgroundImage: 'url("/images/hero_bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.4
            }}></div>

            {/* Gradient Overlay for dark fade at bottom */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: 'linear-gradient(to bottom, rgba(5,5,5,0.2) 0%, rgba(5,5,5,1) 100%)'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }} className="animate-fade-in">

                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'var(--glass-bg)',
                        padding: '8px 16px',
                        borderRadius: '50px',
                        border: '1px solid var(--primary-glow)',
                        marginBottom: '2rem'
                    }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }}></span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Top Rated US B2B Growth Agency</span>
                    </div>

                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                        Dominate Your Local Market with <br />
                        <span className="text-gradient">High-Converting Machinery</span>
                    </h1>

                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        We build stunning websites and aggressive lead generation systems for Roofing, Moving, and HVAC contractors across the USA. Zero BS. Just ROI.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#contact" className="btn btn-primary" style={{ display: 'inline-flex', gap: '8px' }}>
                            Claim Your Free Website Mockup <ArrowRight size={20} />
                        </a>
                        <a href="#services" className="btn btn-outline" style={{ display: 'inline-flex', gap: '8px' }}>
                            View Our Process
                        </a>
                    </div>

                    <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', opacity: 0.7 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>250+</h3>
                            <span style={{ fontSize: '0.9rem' }}>Websites Built</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>10k+</h3>
                            <span style={{ fontSize: '0.9rem' }}>Leads Generated</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>$5M+</h3>
                            <span style={{ fontSize: '0.9rem' }}>Client Revenue</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
