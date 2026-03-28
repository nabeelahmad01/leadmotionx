import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            q: 'How does the free website mockup work?',
            a: 'We design a custom, fully-functional homepage mockup for your business at absolutely no cost. If you love it, we move forward with the full build. If not, no hard feelings — you keep the mockup. There\'s zero risk and zero obligation.'
        },
        {
            q: 'What does the $199/month plan include?',
            a: 'The Growth & Hosting plan includes premium managed hosting, unlimited content updates, Google Maps optimization, local SEO, 24/7 priority support, and ongoing website maintenance. Think of it as having a full-time web team for less than the cost of a gym membership.'
        },
        {
            q: 'How long does it take to build my website?',
            a: 'Typically 2-4 weeks from approval to launch. We work fast because we know speed matters. Your free mockup is usually ready within 5-7 business days after our initial strategy call.'
        },
        {
            q: 'Do I own my website?',
            a: 'Yes, 100%. You own all the content, design, and code. If you ever decide to leave (though we\'re confident you won\'t!), we\'ll transfer everything to you with no strings attached.'
        },
        {
            q: 'What industries do you work with?',
            a: 'We specialize in US-based contractors — primarily roofing, moving, and HVAC companies. Our strategies are specifically designed for local service businesses that rely on high-ticket jobs and steady lead flow.'
        },
        {
            q: 'How do you generate leads for my business?',
            a: 'We use a combination of local SEO (Google Maps ranking), paid advertising (Google & Facebook), and conversion-optimized websites. Every lead is exclusive to your business — never shared with competitors.'
        },
        {
            q: 'What makes you different from other agencies?',
            a: 'Three things: 1) We build your mockup for FREE before you spend a dime. 2) Our pricing is performance-based — we succeed when you succeed. 3) We specialize exclusively in contractor lead generation, so we know exactly what works.'
        },
        {
            q: 'Can I cancel anytime?',
            a: 'Yes! There are no long-term contracts. We work on a month-to-month basis because we believe our results should keep you, not a contract. Most clients stay for years because the ROI speaks for itself.'
        },
        {
            q: 'Do you offer Google Ads or Facebook Ads management?',
            a: 'Yes, we offer paid advertising management as part of our lead generation services. We create, manage, and optimize campaigns on Google and Facebook to drive targeted traffic to your website and landing pages.'
        },
        {
            q: 'What kind of results can I expect?',
            a: 'While results vary by market and competition, our average client sees 15-80 exclusive leads per month within the first 60-90 days. Many clients report a 200-500% increase in revenue after working with us.'
        }
    ];

    return (
        <div>
            <Navbar />
            <div className="page-header">
                <div className="container">
                    <h1>Frequently Asked <span className="text-gradient">Questions</span></h1>
                    <p>Got questions? We've got straightforward answers. No BS, just facts.</p>
                </div>
            </div>

            <section>
                <div className="container" style={{ maxWidth: '800px' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <button
                                className="faq-question"
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                {faq.q}
                                {activeIndex === index
                                    ? <ChevronUp size={20} color="var(--primary)" />
                                    : <ChevronDown size={20} color="var(--text-muted)" />
                                }
                            </button>
                            {activeIndex === index && (
                                <div className="faq-answer">{faq.a}</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: 'var(--bg-light)', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Still Have <span className="text-gradient">Questions?</span></h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        No problem. Reach out to us directly and we'll get back to you within 24 hours.
                    </p>
                    <a href="/#contact" className="btn btn-primary">Contact Us</a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FAQ;
