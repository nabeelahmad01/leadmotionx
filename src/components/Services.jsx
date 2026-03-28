import React from 'react';
import { LayoutDashboard, Users, Zap, Search } from 'lucide-react';

const Services = () => {
    const features = [
        {
            icon: <Users size={28} color="var(--primary)" />,
            title: 'High-Ticket Lead Generation',
            desc: 'We fill your calendar with exclusive, ready-to-buy homeowners who need roofs, moving, or HVAC services right now.'
        },
        {
            icon: <LayoutDashboard size={28} color="var(--secondary)" />,
            title: 'High-Converting Websites',
            desc: 'Our modern, lightning-fast React websites are engineered to convert cold traffic into hot leads.'
        },
        {
            icon: <Search size={28} color="var(--primary)" />,
            title: 'Local SEO Dominance',
            desc: 'Rank #1 on Google Maps in your service area. Be the first company customers call when they have an emergency.'
        },
        {
            icon: <Zap size={28} color="var(--secondary)" />,
            title: 'Marketing Automation',
            desc: 'Automated SMS & Email follow-ups instantly engage your leads, preventing them from going to your competitors.'
        }
    ];

    return (
        <section id="services" style={{ background: 'var(--bg-light)' }}>
            <div className="container">

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>We Build <span className="text-gradient">Growth Engines</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        Stop buying shared leads from HomeAdvisor. We build an asset that generates exclusive leads for your business.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((feature, index) => (
                        <div key={index} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{
                                background: index % 2 === 0 ? 'rgba(59,130,246,0.08)' : 'rgba(139,92,246,0.08)',
                                width: '56px',
                                height: '56px',
                                borderRadius: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
