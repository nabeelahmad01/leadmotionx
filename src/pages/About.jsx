import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Users, Award, Heart } from 'lucide-react';

const About = () => {
    const values = [
        { icon: <Target size={28} color="var(--primary)" />, title: 'Results-Driven', desc: 'We measure success by the leads and revenue we generate for your business, not vanity metrics.' },
        { icon: <Users size={28} color="var(--secondary)" />, title: 'Client-First', desc: 'Your success is our success. We treat every client like a true growth partner.' },
        { icon: <Award size={28} color="var(--primary)" />, title: 'Excellence', desc: 'Every website we build is hand-crafted with modern technologies and best practices.' },
        { icon: <Heart size={28} color="var(--secondary)" />, title: 'Transparency', desc: 'No hidden fees, no BS. We show you exactly where your money goes and the results it produces.' }
    ];

    const team = [
        { name: 'Nabeel Ahmad', role: 'Founder & Lead Developer', desc: 'Full-stack developer with 5+ years building high-converting websites for US contractors.' },
        { name: 'Marketing Team', role: 'SEO & Lead Gen Specialists', desc: 'A dedicated team focused on local SEO, Google Ads, and conversion rate optimization.' },
        { name: 'Design Team', role: 'UI/UX Designers', desc: 'Creating stunning, modern designs that build trust and convert visitors into customers.' }
    ];

    return (
        <div>
            <Navbar />
            <div className="page-header">
                <div className="container">
                    <h1>About <span className="text-gradient">LeadMotionX</span></h1>
                    <p>We're a performance-based growth agency dedicated to helping US contractors dominate their local markets.</p>
                </div>
            </div>

            {/* Mission Section */}
            <section>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Our <span className="text-gradient">Mission</span></h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                We believe every contractor deserves a world-class online presence — one that actually generates leads and revenue, not just looks pretty.
                            </p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                That's why we eliminated the typical agency risk model. Instead of charging thousands upfront and hoping for the best, we prove our value with a free custom mockup before you invest a single dollar.
                            </p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Our goal is simple: become the last agency you ever hire. We build websites and lead generation systems that work as long-term assets for your business.
                            </p>
                        </div>
                        <div style={{ background: 'var(--bg-light)', borderRadius: '24px', padding: '3rem', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '3.5rem', fontWeight: 800 }} className="text-gradient">250+</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Websites Built</p>
                            <h3 style={{ fontSize: '3.5rem', fontWeight: 800 }} className="text-gradient">10k+</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Leads Generated</p>
                            <h3 style={{ fontSize: '3.5rem', fontWeight: 800 }} className="text-gradient">$5M+</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Client Revenue Generated</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Our <span className="text-gradient">Values</span></h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>The principles that drive everything we do.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {values.map((v, i) => (
                            <div key={i} className="glass-panel" style={{ textAlign: 'center' }}>
                                <div style={{ background: i % 2 === 0 ? 'rgba(59,130,246,0.08)' : 'rgba(139,92,246,0.08)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                                    {v.icon}
                                </div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{v.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Meet the <span className="text-gradient">Team</span></h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>The people behind your growth.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {team.map((m, i) => (
                            <div key={i} className="glass-panel" style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '80px', height: '80px', borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 1.5rem', fontSize: '2rem', color: 'white', fontWeight: 700
                                }}>
                                    {m.name.charAt(0)}
                                </div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>{m.name}</h3>
                                <p style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>{m.role}</p>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Ready to Grow Your Business?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
                        Get your free custom website mockup today. Zero risk, zero obligation.
                    </p>
                    <a href="/#contact" className="btn" style={{ background: 'white', color: 'var(--primary)', fontWeight: 700, padding: '14px 32px' }}>
                        Claim Your Free Mockup
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
