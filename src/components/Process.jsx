import React from 'react';
import { Target, Lightbulb, Rocket, TrendingUp } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: <Target size={32} color="white" />,
            title: '1. Discovery & Strategy',
            desc: 'We analyze your local market, competitors, and current online presence to find the lowest-hanging fruit for immediate growth.'
        },
        {
            icon: <Lightbulb size={32} color="white" />,
            title: '2. Free Custom Mockup',
            desc: 'We build a high-converting, custom-tailored homepage mockup completely FREE of charge. No upfront fees.'
        },
        {
            icon: <Rocket size={32} color="white" />,
            title: '3. Launch & Optimize',
            desc: 'If you love the design, we launch the site. We implement our local SEO framework to get you ranking on Google Maps.'
        },
        {
            icon: <TrendingUp size={32} color="white" />,
            title: '4. Lead Generation Asset',
            desc: 'You pay a small monthly maintenance fee, and we ensure the site continues to generate high-ticket exclusive leads.'
        }
    ];

    return (
        <section id="process">
            <div className="container">

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--secondary)',
                        borderRadius: '50px',
                        color: 'var(--secondary)',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '1rem'
                    }}>
                        Zero Risk Approach
                    </div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How We Build <span className="text-gradient">Your Asset</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        We removed the friction. No massive upfront costs. We prove our worth before you commit to anything.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    position: 'relative'
                }}>
                    {steps.map((step, index) => (
                        <div key={index} className="glass-panel" style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{
                                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                boxShadow: '0 4px 20px var(--primary-glow)'
                            }}>
                                {step.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
