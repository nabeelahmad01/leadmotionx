import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            paddingTop: '120px',
            background: 'linear-gradient(135deg, #f0f4f8 0%, #e0e8f5 50%, #f0f4f8 100%)',
            overflow: 'hidden'
        }}>
            {/* Decorative background elements */}
            <div style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-150px',
                left: '-100px',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }} className="animate-fade-in">

                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(59, 130, 246, 0.08)',
                        padding: '8px 16px',
                        borderRadius: '50px',
                        border: '1px solid rgba(59, 130, 246, 0.15)',
                        marginBottom: '2rem'
                    }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary-glow)' }}></span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>Top Rated US B2B Growth Agency</span>
                    </div>

                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
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

                    <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 800 }}>250+</h3>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Websites Built</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 800 }}>10k+</h3>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Leads Generated</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 800 }}>$5M+</h3>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Client Revenue</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
