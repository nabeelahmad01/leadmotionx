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

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to rewrite the CSV file to save the "Sent" status
const updateCSV = (leads) => {
    const header = "CompanyName,ContactName,Email,Status\n";
    const rows = leads.map(l => `"${l.CompanyName}","${l.ContactName}","${l.Email}","${l.Status}"`).join("\n");
    fs.writeFileSync('leads.csv', header + rows);
};

const sendColdEmails = async () => {
    const leads = [];

    // 2. Read the CSV File
    fs.createReadStream('leads.csv')
        .pipe(csv())
        .on('data', (row) => {
            leads.push(row);
        })
        .on('end', async () => {
            let sentCount = 0;
            console.log(`\n📋 Loaded ${leads.length} leads from database.`);

            // 3. Loop through leads and send personalized emails
            for (let i = 0; i < leads.length; i++) {
                const lead = leads[i];

                // Skip if already sent to prevent duplicate emails
                if (lead.Status && lead.Status.trim().toLowerCase() === 'sent') {
                    console.log(`⏩ Skipping ${lead.CompanyName} - Email already sent previously.`);
                    continue;
                }

                // Highly Professional Dynamic Email Template
                const subjectLine = `${lead.ContactName}, quick question about ${lead.CompanyName}'s website`;
                const emailBody = `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 15px; color: #2d3748; line-height: 1.6; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 25px; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        
                        <p style="margin-top: 0;">Hi ${lead.ContactName},</p>
                        
                        <p>I hope you're having a highly productive week.</p>
                        
                        <p>While researching local services, I came across <strong>${lead.CompanyName}</strong>. You clearly have a great reputation, but honestly... your current website isn't doing your business justice and it's likely leaking high-paying leads to your competitors.</p>
                        
                        <p>My name is Nabeel, Founder of <strong>LeadMotionX</strong>. We build premium, high-converting digital assets strictly for US contractors.</p>
                        
                        <div style="background-color: #f7fafc; border-left: 4px solid #3182ce; padding: 15px; margin: 25px 0;">
                            <p style="margin: 0; font-weight: 500;">Here is my offer:</p>
                            <p style="margin: 10px 0 0 0;"><strong>I will design and build a brand new, stunning custom website mockup for ${lead.CompanyName} completely for FREE.</strong> No catch, no credit card required.</p>
                        </div>
                        
                        <p>If you love the design and want to launch it, we can discuss our $199/month hosting and maintenance partnership. If you don't like it, we shake hands and part ways. Zero risk to you.</p>
                        
                        <p style="font-weight: 600;">Are you open to seeing what I can come up with for you?</p>
                        
                        <br/>
                        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 25px 0;">
                        
                        <div style="display: flex; gap: 15px; align-items: center;">
                            <div>
                                <p style="font-size: 14px; margin-bottom: 2px; font-weight: 600;">Nabeel Ahmad</p>
                                <p style="font-size: 13px; color: #718096; margin-top: 0;">Founder, LeadMotionX<br>
                                <a href="https://leadmotionx.com" style="color: #3182ce; text-decoration: none; font-weight: 500;">www.leadmotionx.com</a> | (209) 764-2829</p>
                            </div>
                        </div>
                    </div>
                `;

                const mailOptions = {
                    from: `"Nabeel | LeadMotionX" <${process.env.EMAIL_USER}>`,
                    to: lead.Email,
                    subject: subjectLine,
                    html: emailBody
                };

                try {
                    console.log(`\n⏳ [${i + 1}/${leads.length}] Sending pitch to ${lead.Email}...`);
                    await transporter.sendMail(mailOptions);
                    console.log(`✅ Success: Sent to ${lead.CompanyName}`);

                    // Mark as sent in memory immediately
                    lead.Status = 'Sent';
                    updateCSV(leads); // Save progress to CSV immediately in case of script crash!
                    sentCount++;

                    // Wait 5 seconds between emails to bypass spam filters (except for the last email)
                    if (i < leads.length - 1) {
                        console.log(`⏱️ Waiting 6 seconds before next email...`);
                        await delay(6000);
                    }
                } catch (error) {
                    console.error(`❌ Failed: Could not send to ${lead.Email}. Error:`, error.message);
                }
            }

            console.log(`\n🎉 Outbound Sequence Complete! Successfully sent ${sentCount} new emails.`);
            console.log(`(Duplicate emails were automatically skipped, and leads.csv has been updated).`);
            process.exit(0);
        });
};

// Start Sequence
console.log("Verifying connection to Google SMTP Server...");
transporter.verify((error, success) => {
    if (error) {
        console.error("Connection error. Check your .env EMAIL_USER and EMAIL_PASS", error);
        process.exit(1);
    } else {
        console.log("Connection successful. Initiating warming sequence...");
        sendColdEmails();
    }
});
