import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <section id="pricing" style={{ background: 'var(--bg-light)' }}>
            <div className="container">

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Performance-Based <span className="text-gradient">Partnership</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        Traditional agencies charge $5,000+ upfront and disappear. We act as your growth partners.
                    </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>

                    {/* Plan 1 */}
                    <div className="glass-panel" style={{ flex: '1', minWidth: '300px', maxWidth: '400px', borderTop: '4px solid var(--text-muted)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Website Guarantee</h3>
                        <div style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>$0 <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '400' }}>upfront</span></div>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>We build your custom React website mockup completely free.</p>

                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check color="var(--primary)" size={18} /> Custom Design</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check color="var(--primary)" size={18} /> Mobile Optimized</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check color="var(--primary)" size={18} /> Lead Capture Form</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check color="var(--primary)" size={18} /> No Commitments</li>
                        </ul>

                        <a href="#contact" className="btn btn-outline" style={{ width: '100%' }}>Claim Free Mockup</a>
                    </div>

                    {/* Plan 2 */}
                    <div className="glass-panel" style={{ flex: '1', minWidth: '300px', maxWidth: '400px', borderTop: '4px solid var(--primary)', transform: 'scale(1.05)', zIndex: 10 }}>
                        <div style={{
                            position: 'absolute',
                            top: '-15px',
                            right: '20px',
                            background: 'var(--primary)',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold'
                        }}>
                            MOST POPULAR
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Growth & Hosting</h3>
                        <div style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>$199<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '400' }}>/mo</span></div>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Unlimited maintenance, blazing fast hosting, and SEO optimization.</p>

                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check color="var(--primary)" size={18} /> Premium Managed Hosting</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check color="var(--primary)" size={18} /> Google Maps Optimization</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check color="var(--primary)" size={18} /> Unlimited Content Updates</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check color="var(--primary)" size={18} /> 24/7 Priority Support</li>
                        </ul>

                        <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Lock In This Price</a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;
