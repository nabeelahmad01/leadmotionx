import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
    return (
        <div>
            <Navbar />
            <div className="page-header">
                <div className="container">
                    <h1>Privacy <span className="text-gradient">Policy</span></h1>
                    <p>Last updated: March 28, 2026</p>
                </div>
            </div>

            <div className="legal-content">
                <p>
                    LeadMotionX ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>

                <h2>Information We Collect</h2>
                <p>We may collect information about you in a variety of ways:</p>
                <ul>
                    <li><strong>Personal Data:</strong> Name, email address, phone number, and business information that you voluntarily provide when contacting us or using our services.</li>
                    <li><strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type, pages visited, and time spent on our site.</li>
                    <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience on our website.</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Provide, operate, and maintain our services</li>
                    <li>Respond to your inquiries and fulfill your requests</li>
                    <li>Send you marketing and promotional communications (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                </ul>

                <h2>Information Sharing</h2>
                <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, subject to confidentiality agreements.
                </p>

                <h2>Data Security</h2>
                <p>
                    We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>

                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications at any time</li>
                </ul>

                <h2>Contact Us</h2>
                <p>
                    If you have questions about this Privacy Policy, please contact us at{' '}
                    <a href="mailto:contact@leadmotionx.com" style={{ color: 'var(--primary)' }}>contact@leadmotionx.com</a> or call us at{' '}
                    <a href="tel:2097642829" style={{ color: 'var(--primary)' }}>(209) 764-2829</a>.
                </p>
            </div>

            <Footer />
        </div>
    );
};

export default Privacy;
