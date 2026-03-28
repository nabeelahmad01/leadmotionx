import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ExternalLink, TrendingUp, ArrowRight } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            title: 'Texas Premium Roofing',
            category: 'Roofing Contractor',
            desc: 'Complete website redesign and lead generation system for a roofing company in Dallas, TX. Resulted in 300% increase in monthly leads.',
            stats: { leads: '60/mo', revenue: '+320%', timeline: '4 weeks' },
            gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
        },
        {
            title: 'Swift Moves LLC',
            category: 'Moving Company',
            desc: 'Built a high-converting website with automated booking system. Reduced admin time by 10 hours/week and doubled online bookings.',
            stats: { leads: '45/mo', revenue: '+210%', timeline: '3 weeks' },
            gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)'
        },
        {
            title: 'CoolBreeze HVAC',
            category: 'HVAC Contractor',
            desc: 'Local SEO dominance campaign combined with a new React website. Achieved #1 Google Maps ranking in 3 service areas.',
            stats: { leads: '80/mo', revenue: '+450%', timeline: '6 weeks' },
            gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
        },
        {
            title: 'Guardian Roofing Co.',
            category: 'Roofing Contractor',
            desc: 'Full-service implementation including website, Google Ads, and SMS automation. Generated $120K in new revenue in first quarter.',
            stats: { leads: '100/mo', revenue: '+500%', timeline: '8 weeks' },
            gradient: 'linear-gradient(135deg, #1d4ed8, #3b82f6)'
        },
        {
            title: 'Metro Moving Solutions',
            category: 'Moving Company',
            desc: 'Custom landing pages for different service areas resulting in localized lead generation across 5 cities.',
            stats: { leads: '55/mo', revenue: '+280%', timeline: '5 weeks' },
            gradient: 'linear-gradient(135deg, #6d28d9, #8b5cf6)'
        },
        {
            title: 'AirFlow Pro HVAC',
            category: 'HVAC Contractor',
            desc: 'Emergency service-focused website with 24/7 lead capture. Automated follow-ups convert 40% of inquiries into booked jobs.',
            stats: { leads: '70/mo', revenue: '+380%', timeline: '4 weeks' },
            gradient: 'linear-gradient(135deg, #8b5cf6, #3b82f6)'
        }
    ];

    return (
        <div>
            <Navbar />
            <div className="page-header">
                <div className="container">
                    <h1>Our <span className="text-gradient">Portfolio</span></h1>
                    <p>Real results for real contractors. See how we've helped businesses like yours grow.</p>
                </div>
            </div>

            {/* Stats Bar */}
            <section style={{ padding: '40px 0', background: 'var(--bg-light)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="text-gradient">250+</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Projects Delivered</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="text-gradient">98%</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Client Satisfaction</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="text-gradient">$5M+</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Revenue Generated</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2rem'
                    }}>
                        {projects.map((project, index) => (
                            <div key={index} className="glass-panel" style={{ overflow: 'hidden', padding: 0 }}>
                                {/* Project Header */}
                                <div style={{
                                    background: project.gradient,
                                    padding: '2.5rem 2rem',
                                    color: 'white',
                                    position: 'relative'
                                }}>
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '4px 12px',
                                        background: 'rgba(255,255,255,0.2)',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        marginBottom: '1rem'
                                    }}>
                                        {project.category}
                                    </span>
                                    <h3 style={{ fontSize: '1.5rem', color: 'white' }}>{project.title}</h3>
                                </div>

                                {/* Project Body */}
                                <div style={{ padding: '2rem' }}>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{project.desc}</p>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                                        <div style={{ textAlign: 'center', padding: '0.75rem', background: 'var(--bg-light)', borderRadius: '12px' }}>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)' }}>{project.stats.leads}</p>
                                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Leads</p>
                                        </div>
                                        <div style={{ textAlign: 'center', padding: '0.75rem', background: 'var(--bg-light)', borderRadius: '12px' }}>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)' }}>{project.stats.revenue}</p>
                                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Revenue</p>
                                        </div>
                                        <div style={{ textAlign: 'center', padding: '0.75rem', background: 'var(--bg-light)', borderRadius: '12px' }}>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)' }}>{project.stats.timeline}</p>
                                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Timeline</p>
                                        </div>
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
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Want Results Like These?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
                        Let us build you a free custom website mockup and show you what's possible.
                    </p>
                    <a href="/#contact" className="btn" style={{ background: 'white', color: 'var(--primary)', fontWeight: 700, padding: '14px 32px' }}>
                        Start Your Project <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Portfolio;
