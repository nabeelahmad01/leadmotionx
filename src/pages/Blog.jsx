import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: 'Why Roofing Companies Are Losing $50K/Year on Bad Websites',
            excerpt: 'Most roofing contractors have websites that actively repel customers. Here are the 5 critical mistakes costing you leads every single day.',
            category: 'Web Design',
            date: 'Mar 25, 2026',
            readTime: '5 min read',
            color: 'rgba(59,130,246,0.08)'
        },
        {
            title: 'Google Maps SEO: The Complete Guide for Contractors',
            excerpt: 'Ranking #1 on Google Maps is the single best ROI marketing channel for local contractors. Here\'s exactly how to do it in 2026.',
            category: 'SEO',
            date: 'Mar 20, 2026',
            readTime: '8 min read',
            color: 'rgba(139,92,246,0.08)'
        },
        {
            title: 'Lead Generation vs. Lead Buying: Why Exclusive Leads Win',
            excerpt: 'Stop paying $50 per shared lead from HomeAdvisor. Learn why building your own lead generation asset saves you money long-term.',
            category: 'Lead Gen',
            date: 'Mar 15, 2026',
            readTime: '6 min read',
            color: 'rgba(59,130,246,0.08)'
        },
        {
            title: 'The $199/mo Website That Generates 50 Leads Per Month',
            excerpt: 'How we built a performance-based model that costs less than your gym membership but delivers massive results for contractors.',
            category: 'Case Study',
            date: 'Mar 10, 2026',
            readTime: '4 min read',
            color: 'rgba(139,92,246,0.08)'
        },
        {
            title: '5 Automated Follow-Up Sequences That Close More Deals',
            excerpt: 'Speed-to-lead matters. Contractors who follow up within 60 seconds close 3x more deals. Here\'s how to automate it.',
            category: 'Automation',
            date: 'Mar 5, 2026',
            readTime: '7 min read',
            color: 'rgba(59,130,246,0.08)'
        },
        {
            title: 'HVAC Marketing in 2026: What\'s Working Right Now',
            excerpt: 'The marketing landscape is shifting fast. These are the strategies generating the most leads for HVAC companies in 2026.',
            category: 'Marketing',
            date: 'Feb 28, 2026',
            readTime: '6 min read',
            color: 'rgba(139,92,246,0.08)'
        }
    ];

    return (
        <div>
            <Navbar />
            <div className="page-header">
                <div className="container">
                    <h1>Our <span className="text-gradient">Blog</span></h1>
                    <p>Actionable growth strategies for US contractors. No fluff, just proven tactics.</p>
                </div>
            </div>

            <section>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2rem'
                    }}>
                        {posts.map((post, index) => (
                            <article key={index} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                                {/* Category Badge */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '4px 14px',
                                        background: post.color,
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        color: index % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'
                                    }}>
                                        {post.category}
                                    </span>
                                </div>

                                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', lineHeight: 1.4 }}>{post.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', flex: 1 }}>{post.excerpt}</p>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <Calendar size={14} /> {post.date}
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <Clock size={14} /> {post.readTime}
                                        </span>
                                    </div>
                                    <ArrowRight size={18} color="var(--primary)" />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section style={{ background: 'var(--bg-light)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Get Growth Tips <span className="text-gradient">Weekly</span></h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        Join 500+ contractors getting our best lead generation and marketing tips delivered to their inbox every week.
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                padding: '14px 20px',
                                borderRadius: '50px',
                                border: '1px solid var(--glass-border)',
                                background: 'var(--bg-color)',
                                fontSize: '1rem',
                                width: '300px',
                                outline: 'none',
                                color: 'var(--text-main)',
                                fontFamily: 'var(--font-body)'
                            }}
                        />
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
