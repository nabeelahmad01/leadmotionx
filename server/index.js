require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs');
const csv = require('csv-parser');
const multer = require('multer');
const xlsx = require('xlsx');

// Setup Multer for memory storage
const upload = multer({ storage: multer.memoryStorage() });

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

// Helper for CSV writes
const writeCSV = (leads) => {
    const header = "CompanyName,ContactName,Email,Status\n";
    const rows = leads.map(l => `"${l.CompanyName || ''}","${l.ContactName || ''}","${l.Email || ''}","${l.Status || 'Pending'}"`).join("\n");
    fs.writeFileSync('leads.csv', header + rows);
};

// API: Get Leads
app.get('/api/leads', (req, res) => {
    const leads = [];
    if (!fs.existsSync('leads.csv')) {
        return res.json([]);
    }
    fs.createReadStream('leads.csv')
        .pipe(csv())
        .on('data', (row) => leads.push(row))
        .on('end', () => res.json(leads))
        .on('error', (err) => res.status(500).json({ error: err.message }));
});

// API: Add Lead
app.post('/api/leads', (req, res) => {
    const { CompanyName, ContactName, Email } = req.body;
    if (!CompanyName || !ContactName || !Email) {
        return res.status(400).json({ error: 'All fields required' });
    }
    
    // Read current, append, save
    const leads = [];
    if (fs.existsSync('leads.csv')) {
        fs.createReadStream('leads.csv')
            .pipe(csv())
            .on('data', (row) => leads.push(row))
            .on('end', () => {
                leads.push({ CompanyName, ContactName, Email, Status: 'Pending' });
                writeCSV(leads);
                res.json({ success: true });
            });
    } else {
        leads.push({ CompanyName, ContactName, Email, Status: 'Pending' });
        writeCSV(leads);
        res.json({ success: true });
    }
});

// API: Delete Lead
app.delete('/api/leads/:email', (req, res) => {
    const emailToDelete = req.params.email;
    const leads = [];
    if (!fs.existsSync('leads.csv')) {
        return res.status(404).json({ error: 'No leads found' });
    }
    
    fs.createReadStream('leads.csv')
        .pipe(csv())
        .on('data', (row) => leads.push(row))
        .on('end', () => {
            const filteredLeads = leads.filter(l => l.Email !== emailToDelete);
            writeCSV(filteredLeads);
            res.json({ success: true });
        });
});

// API: Send Campaign
app.post('/api/campaign/send', async (req, res) => {
    const { subject, body } = req.body;
    if (!subject || !body) {
        return res.status(400).json({ error: 'Subject and Body required' });
    }

    const leads = [];
    if (!fs.existsSync('leads.csv')) {
        return res.status(404).json({ error: 'No leads found' });
    }

    fs.createReadStream('leads.csv')
        .pipe(csv())
        .on('data', (row) => leads.push(row))
        .on('end', async () => {
            let sentCount = 0;
            const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

            for (let i = 0; i < leads.length; i++) {
                const lead = leads[i];
                if (lead.Status && lead.Status.trim().toLowerCase() === 'sent') continue;

                // Replace Variables
                let personalizedSubject = subject.replace(/{CompanyName}/g, lead.CompanyName).replace(/{ContactName}/g, lead.ContactName);
                let personalizedBody = body.replace(/{CompanyName}/g, lead.CompanyName).replace(/{ContactName}/g, lead.ContactName);

                const mailOptions = {
                    from: `"LeadMotionX Campaign" <${process.env.EMAIL_USER}>`,
                    to: lead.Email,
                    subject: personalizedSubject,
                    html: personalizedBody
                };

                try {
                    await transporter.sendMail(mailOptions);
                    lead.Status = 'Sent';
                    writeCSV(leads); // save immediately
                    sentCount++;
                    if (i < leads.length - 1) await delay(3000); // 3 second delay
                } catch (err) {
                    console.error("Failed to send to", lead.Email, err);
                }
            }
            res.json({ success: true, sentCount });
        });
});

// API: Import Leads from CSV/Excel
app.post('/api/leads/import', upload.single('file'), (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    try {
        let importedData = [];

        // Parse file buffer depending on exact format using XLSX (handles both CSV and Excel)
        const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const rawData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: "" });

        // Normalization logic: Match user's chaotic spreadsheet columns to our clean system
        rawData.forEach(row => {
            // Find "Company Name" or "Company" or "CompanyName"
            const compKey = Object.keys(row).find(k => k.toLowerCase().replace(/\\s/g, '') === 'companyname' || k.toLowerCase().replace(/\\s/g, '') === 'company');
            const companyName = compKey ? row[compKey] : 'Unknown Company';

            // Find "Email" or "Company Email"
            const emailKey = Object.keys(row).find(k => k.toLowerCase().includes('email'));
            const email = emailKey ? row[emailKey] : null;

            // Find "Contact Name" or just fallback
            const contactKey = Object.keys(row).find(k => k.toLowerCase().replace(/\\s/g, '') === 'contactname' || k.toLowerCase().replace(/\\s/g, '') === 'contact' || k.toLowerCase() === 'name');
            const contactName = contactKey ? row[contactKey] : 'Business Owner';

            if (email && email.includes('@')) {
                importedData.push({
                    CompanyName: companyName,
                    ContactName: contactName,
                    Email: email,
                    Status: 'Pending'
                });
            }
        });

        // Current Leads
        const existingLeads = [];
        if (fs.existsSync('leads.csv')) {
            fs.createReadStream('leads.csv')
                .pipe(csv())
                .on('data', row => existingLeads.push(row))
                .on('end', () => {
                    // Filter duplicates
                    const existingEmails = new Set(existingLeads.map(l => l.Email.toLowerCase()));
                    const newLeads = importedData.filter(l => !existingEmails.has(l.Email.toLowerCase()));
                    
                    if (newLeads.length > 0) {
                        const mergedLeads = [...existingLeads, ...newLeads];
                        writeCSV(mergedLeads);
                    }
                    res.json({ success: true, importedCount: newLeads.length, duplicatesSkipped: importedData.length - newLeads.length });
                });
        } else {
            writeCSV(importedData);
            res.json({ success: true, importedCount: importedData.length, duplicatesSkipped: 0 });
        }

    } catch (error) {
        console.error('Import error:', error);
        res.status(500).json({ error: 'Failed to process file. Make sure it is a valid CSV or Excel.' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`LeadMotionX Server running on port ${PORT}`);
});
