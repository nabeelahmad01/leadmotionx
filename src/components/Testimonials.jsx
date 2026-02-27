import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Miller',
            role: 'Owner, Texas Premium Roofing',
            image: '/images/testimonial_1.png',
            quote: "Before LeadMotionX, we were wasting thousands on paid ads with zero return. They built us a custom site and a lead funnel that currently brings in 15-20 exclusive roofing leads a week. Absolute game changer.",
            rating: 5
        },
        {
            name: 'Sarah Jenkins',
            role: 'CEO, Swift Moves LLC',
            image: '/images/testimonial_2.png',
            quote: "Our old website looked like it was from 2005. The new design is stunning, and the automated booking system saves my team 10 hours a week. Nabeel and his team know exactly what they are doing.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials">
            <div className="container">

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Client <span className="text-gradient">Results</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        Don't just take our word for it. Here's what US contractors are saying about our performance.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {testimonials.map((t, index) => (
                        <div key={index} className="glass-panel" style={{ position: 'relative', overflow: 'hidden' }}>
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="var(--primary)" color="var(--primary)" />
                                ))}
                            </div>

                            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.6 }}>
                                "{t.quote}"
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <img src={t.image} alt={t.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary-glow)' }} />
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{t.name}</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{t.role}</p>
                                </div>
                            </div>

                            {/* Decorative Accent */}
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-20px',
                                width: '100px',
                                height: '100px',
                                background: 'var(--primary-glow)',
                                filter: 'blur(50px)',
                                borderRadius: '50%',
                                zIndex: -1
                            }}></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
