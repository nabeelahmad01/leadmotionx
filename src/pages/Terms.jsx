import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
    return (
        <div>
            <Navbar />
            <div className="page-header">
                <div className="container">
                    <h1>Terms of <span className="text-gradient">Service</span></h1>
                    <p>Last updated: March 28, 2026</p>
                </div>
            </div>

            <div className="legal-content">
                <p>
                    These Terms of Service ("Terms") govern your use of the LeadMotionX website and services. By accessing or using our services, you agree to be bound by these Terms.
                </p>

                <h2>Services</h2>
                <p>
                    LeadMotionX provides web design, development, lead generation, SEO, and digital marketing services for contractors. Specific deliverables, timelines, and pricing will be outlined in individual service agreements.
                </p>

                <h2>Free Mockup Offer</h2>
                <p>
                    Our free website mockup offer includes one custom homepage design. This design is provided at no cost and no obligation. You are free to use or decline the mockup. The mockup remains the intellectual property of LeadMotionX until a service agreement is signed.
                </p>

                <h2>Payment Terms</h2>
                <ul>
                    <li>Monthly subscription fees are billed on the same date each month</li>
                    <li>Payment is due upon receipt of invoice</li>
                    <li>We accept major credit cards and bank transfers</li>
                    <li>Late payments may result in temporary suspension of services</li>
                </ul>

                <h2>Cancellation Policy</h2>
                <p>
                    You may cancel your subscription at any time with 30 days written notice. Upon cancellation, you will retain ownership of all website content and code. We will assist with the transition and transfer of all assets.
                </p>

                <h2>Intellectual Property</h2>
                <p>
                    Upon full payment, you own all custom content, designs, and code created specifically for your project. LeadMotionX retains the right to showcase the work in our portfolio unless otherwise agreed.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                    LeadMotionX shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with our services. Our total liability shall not exceed the amount paid for the services in the preceding 12 months.
                </p>

                <h2>Modifications</h2>
                <p>
                    We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of our services constitutes acceptance of modified Terms.
                </p>

                <h2>Contact Us</h2>
                <p>
                    For questions about these Terms, contact us at{' '}
                    <a href="mailto:contact@leadmotionx.com" style={{ color: 'var(--primary)' }}>contact@leadmotionx.com</a> or call us at{' '}
                    <a href="tel:2097642829" style={{ color: 'var(--primary)' }}>(209) 764-2829</a>.
                </p>
            </div>

            <Footer />
        </div>
    );
};

export default Terms;
