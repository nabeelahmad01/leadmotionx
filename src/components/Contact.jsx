import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const inputStyles = {
        width: '100%',
        padding: '16px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--glass-border)',
        borderRadius: '12px',
        color: 'var(--text-main)',
        fontFamily: 'var(--font-body)',
        fontSize: '1rem',
        marginBottom: '1.5rem',
        outline: 'none',
        transition: 'border-color 0.3s'
    };

    return (
        <section id="contact" style={{ background: 'var(--bg-light)', position: 'relative' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>

                    {/* Left Side: Info */}
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                            Ready to <span className="text-gradient">Scale?</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                            We're offering a FREE Custom Website Mockup to the first 5 contractors who reach out this month. Let us show you what your brand COULD look like.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'var(--glass-bg)', padding: '12px', borderRadius: '50%' }}>
                                    <Phone color="var(--primary)" size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Phone</h4>
                                    <a href="tel:2097642829" style={{ color: 'var(--text-muted)' }}>(209) 764-2829</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'var(--glass-bg)', padding: '12px', borderRadius: '50%' }}>
                                    <Mail color="var(--primary)" size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Email</h4>
                                    <a href="mailto:contact@leadmotionx.com" style={{ color: 'var(--text-muted)' }}>contact@leadmotionx.com</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="glass-panel" style={{ position: 'relative' }}>
                        {/* Glow effect */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', height: '200px', background: 'var(--secondary-glow)', filter: 'blur(80px)', zIndex: -1 }}></div>

                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Claim Your Free Mockup</h3>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                style={inputStyles}
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                style={inputStyles}
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                style={inputStyles}
                                required
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            />

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', gap: '8px', justifyContent: 'center' }}>
                                {submitted ? 'Message Sent!' : <>Get Started <Send size={18} /></>}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
