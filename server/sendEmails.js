require('dotenv').config();
const fs = require('fs');
const csv = require('csv-parser');
const nodemailer = require('nodemailer');

// 1. Setup Email Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Delay helper to prevent spam filters (e.g. wait 10 seconds between emails)
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const sendColdEmails = async () => {
    const leads = [];

    // 2. Read the CSV File
    fs.createReadStream('leads.csv')
        .pipe(csv())
        .on('data', (row) => {
            leads.push(row);
        })
        .on('end', async () => {
            console.log(`Loaded ${leads.length} leads. Starting outbound sequence...`);

            // 3. Loop through leads and send personalized emails
            for (let i = 0; i < leads.length; i++) {
                const lead = leads[i];

                // The Pitch Script (Personalized)
                const subjectLine = `Quick question regarding ${lead.CompanyName}'s website`;
                const emailBody = `
                    <div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #333;">
                        <p>Hi ${lead.ContactName},</p>
                        <p>I hope you're having a great week.</p>
                        <p>I came across <strong>${lead.CompanyName}</strong> while searching for local contractors and noticed your website might be losing you leads to competitors.</p>
                        <p>I run LeadMotionX, and as a promotion, I am willing to build you a brand new, high-converting website completely for FREE. No strings attached.</p>
                        <p>If you like the result, we can talk about hosting. Can I send you a quick preview?</p>
                        <br>
                        <p>Best regards,</p>
                        <p><strong>Nabeel</strong><br>Founder, LeadMotionX</p>
                    </div>
                `;

                const mailOptions = {
                    from: `"LeadMotionX" <${process.env.EMAIL_USER}>`,
                    to: lead.Email,
                    subject: subjectLine,
                    html: emailBody
                };

                try {
                    console.log(`[${i + 1}/${leads.length}] Sending email to ${lead.Email}...`);
                    await transporter.sendMail(mailOptions);
                    console.log(`✅ Success: Email sent to ${lead.CompanyName}`);

                    // Wait 5 seconds between each email so Gmail doesn't block you
                    if (i < leads.length - 1) {
                        console.log(`Waiting 5 seconds before next email...`);
                        await delay(5000);
                    }
                } catch (error) {
                    console.error(`❌ Failed: Could not send to ${lead.Email}. Error:`, error.message);
                }
            }

            console.log("\nOutbound sequence complete! 🎉");
            process.exit(0);
        });
};

// Start Sequence
console.log("Verifying connection to email server...");
transporter.verify((error, success) => {
    if (error) {
        console.error("Connection error. Check your .env EMAIL_USER and EMAIL_PASS", error);
        process.exit(1);
    } else {
        console.log("Connection successful. Initiating sequence...");
        sendColdEmails();
    }
});
