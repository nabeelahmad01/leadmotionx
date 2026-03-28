import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, LayoutDashboard, Search, Zap, BarChart2, MessageSquare, ArrowRight, Check } from 'lucide-react';

const ServicesPage = () => {
    const services = [
        {
            icon: <Users size={32} color="var(--primary)" />,
            title: 'High-Ticket Lead Generation',
            desc: 'We fill your calendar with exclusive, ready-to-buy homeowners who need your services right now.',
            features: [
                'Exclusive leads — never shared with competitors',
                'Targeted Facebook & Google ad campaigns',
                'Custom landing pages for maximum conversions',
                'Real-time lead notifications via SMS & email',
                'Monthly performance reports & optimization'
            ],
            color: 'rgba(59,130,246,0.08)'
        },
        {
            icon: <LayoutDashboard size={32} color="var(--secondary)" />,
            title: 'High-Converting Websites',
            desc: 'Modern, lightning-fast React websites engineered to convert cold traffic into hot leads.',
            features: [
                'Custom React/Next.js development',
                'Mobile-first responsive design',
                'Built-in lead capture forms & CTA optimization',
                'Blazing fast load times (under 2 seconds)',
                'SSL security & SEO-ready architecture'
            ],
            color: 'rgba(139,92,246,0.08)'
        },
        {
            icon: <Search size={32} color="var(--primary)" />,
            title: 'Local SEO Dominance',
            desc: 'Rank #1 on Google Maps in your service area. Be the first company customers call.',
            features: [
                'Google Business Profile optimization',
                'Local citation building & management',
                'Review generation strategy',
                'Geo-targeted content creation',
                'Monthly ranking reports & tracking'
            ],
            color: 'rgba(59,130,246,0.08)'
        },
        {
            icon: <Zap size={32} color="var(--secondary)" />,
            title: 'Marketing Automation',
            desc: 'Automated follow-ups that engage leads instantly, preventing them from going to competitors.',
            features: [
                'Automated SMS follow-ups within 60 seconds',
                'Email drip campaigns for lead nurturing',
                'CRM integration & pipeline management',
                'Appointment booking automation',
                'Missed call text-back system'
            ],
            color: 'rgba(139,92,246,0.08)'
        }
    ];

    return (
        <div>
            <Navbar />
            <div className="page-header">
                <div className="container">
                    <h1>Our <span className="text-gradient">Services</span></h1>
                    <p>Everything you need to dominate your local market and generate exclusive, high-quality leads.</p>
                </div>
            </div>

            {/* Services Detail */}
            <section>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {services.map((service, index) => (
                            <div key={index} style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '3rem',
                                alignItems: 'center',
                                padding: '3rem',
                                background: index % 2 === 0 ? 'var(--bg-color)' : 'var(--bg-light)',
                                borderRadius: '24px',
                                border: '1px solid var(--glass-border)'
                            }}>
                                <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                                    <div style={{
                                        background: service.color,
                                        width: '64px', height: '64px', borderRadius: '16px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        marginBottom: '1.5rem'
                                    }}>
                                        {service.icon}
                                    </div>
                                    <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{service.title}</h2>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>{service.desc}</p>
                                    <a href="/#contact" className="btn btn-primary" style={{ display: 'inline-flex', gap: '8px' }}>
                                        Get Started <ArrowRight size={18} />
                                    </a>
                                </div>
                                <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                                    <div className="glass-panel">
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>What's Included:</h4>
                                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            {service.features.map((f, i) => (
                                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-muted)' }}>
                                                    <Check size={18} color="var(--primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Not Sure Which Service You Need?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
                        Book a free strategy call and we'll build a custom growth plan for your business.
                    </p>
                    <a href="/#contact" className="btn" style={{ background: 'white', color: 'var(--primary)', fontWeight: 700, padding: '14px 32px' }}>
                        Book Free Strategy Call
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServicesPage;
