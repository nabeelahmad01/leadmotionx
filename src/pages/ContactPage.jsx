import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            }).then((res) => res.json());

            if (res.success) {
                setStatus('Message Sent Successfully!');
                setFormData({ name: '', email: '', phone: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('Something went wrong.');
                setTimeout(() => setStatus(''), 5000);
            }
        } catch {
            setStatus('Something went wrong.');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    const inputStyles = {
        width: '100%',
        padding: '14px 16px',
        background: 'var(--bg-light)',
        border: '1px solid var(--glass-border)',
        borderRadius: '12px',
        color: 'var(--text-main)',
        fontFamily: 'var(--font-body)',
        fontSize: '1rem',
        marginBottom: '1.25rem',
        outline: 'none',
        transition: 'border-color 0.3s'
    };

    const contactInfo = [
        { icon: <Phone size={22} color="var(--primary)" />, title: 'Phone', value: '(209) 764-2829', href: 'tel:2097642829' },
        { icon: <Mail size={22} color="var(--primary)" />, title: 'Email', value: 'contact@leadmotionx.com', href: 'mailto:contact@leadmotionx.com' },
        { icon: <Clock size={22} color="var(--primary)" />, title: 'Business Hours', value: 'Mon - Fri, 9AM - 6PM EST', href: null },
        { icon: <MapPin size={22} color="var(--primary)" />, title: 'Location', value: 'Serving clients across the USA', href: null }
    ];

    return (
        <div>
            <Navbar />
            <div className="page-header">
                <div className="container">
                    <h1>Get in <span className="text-gradient">Touch</span></h1>
                    <p>Ready to grow your business? Reach out and let's build something amazing together.</p>
                </div>
            </div>

            <section>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem'
                    }}>
                        {/* Left - Contact Info */}
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's Start a <span className="text-gradient">Conversation</span></h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '3rem' }}>
                                Whether you need a new website, lead generation, or a complete digital marketing overhaul, we're here to help. Reach out and we'll respond within 24 hours.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {contactInfo.map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ background: 'rgba(59,130,246,0.08)', padding: '12px', borderRadius: '12px', flexShrink: 0 }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '0.95rem', marginBottom: '2px' }}>{item.title}</h4>
                                            {item.href ? (
                                                <a href={item.href} style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.value}</a>
                                            ) : (
                                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Form */}
                        <div className="glass-panel">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send Us a Message</h3>
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
                                <textarea
                                    placeholder="Tell us about your project..."
                                    style={{ ...inputStyles, minHeight: '120px', resize: 'vertical' }}
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                />
                                <button type="submit" disabled={status === 'Sending...'} className="btn btn-primary" style={{ width: '100%', display: 'flex', gap: '8px', justifyContent: 'center' }}>
                                    {status ? status : <>Send Message <Send size={18} /></>}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
