require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to 'Outlook', 'Yahoo', etc.
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify connection
transporter.verify((error, success) => {
    if (error) {
        console.log("Error connecting to email service:", error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

// API Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Validate Input
    if (!name || !email || !phone || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.RECEIVER_EMAIL, // Your email address where you want to receive leads
            subject: `🔥 New Lead from LeadMotionX: ${name}`,
            html: `
                <h3>New Lead Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Lead sent successfully!' });

    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: 'Failed to send lead.' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`LeadMotionX Server running on port ${PORT}`);
});
