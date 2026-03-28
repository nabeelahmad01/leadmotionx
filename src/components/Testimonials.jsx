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
                                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                                ))}
                            </div>

                            <p style={{ fontSize: '1.05rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                                "{t.quote}"
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <img src={t.image} alt={t.name} style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--bg-light)' }} />
                                <div>
                                    <h4 style={{ fontSize: '1.05rem', marginBottom: '2px' }}>{t.name}</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
