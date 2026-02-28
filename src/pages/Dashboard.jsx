import React, { useState, useEffect, useRef } from 'react';
import { Users, Mail, Settings, RefreshCw, Trash2, Send, Upload } from 'lucide-react';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('leads');
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    const [newLead, setNewLead] = useState({ CompanyName: '', ContactName: '', Email: '' });
    const [campaign, setCampaign] = useState({ subject: 'Quick question about {CompanyName}', body: 'Hi {ContactName},\\n\\nI noticed Your website...' });
    const fileInputRef = useRef(null);

    const fetchLeads = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:5000/api/leads');
            const data = await res.json();
            setLeads(data);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    const handleAddLead = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:5000/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newLead)
            });
            setNewLead({ CompanyName: '', ContactName: '', Email: '' });
            fetchLeads();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteLead = async (email) => {
        try {
            await fetch(`http://localhost:5000/api/leads/${email}`, { method: 'DELETE' });
            fetchLeads();
        } catch (error) {
            console.error(error);
        }
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            setLoading(true);
            const res = await fetch('http://localhost:5000/api/leads/import', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            
            if (data.success) {
                alert(`Import Successful!\\n\\nImported ${data.importedCount} new leads.\\nSkipped ${data.duplicatesSkipped} duplicates.`);
                fetchLeads();
            } else {
                alert('Error importing file: ' + data.error);
                setLoading(false);
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert('Failed to import file.');
            setLoading(false);
        }
        
        // Reset file input
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleSendCampaign = async () => {
        if (!confirm('Are you sure you want to send this campaign to all Pending leads?')) return;
        
        try {
            alert('Campaign Started! Emails are sending in the background (3 sec delay between each). Check server console for progress.');
            await fetch('http://localhost:5000/api/campaign/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(campaign)
            });
            alert('Campaign Sent Successfully!');
            fetchLeads();
        } catch (error) {
            console.error(error);
            alert('Error sending campaign');
        }
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#0f172a', color: '#f8fafc', fontFamily: 'Inter, sans-serif' }}>
            {/* Sidebar */}
            <div style={{ width: '250px', background: '#1e293b', padding: '20px', borderRight: '1px solid #334155' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '30px', color: '#60a5fa' }}>LeadMotionX CRM</h2>
                
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <button 
                        onClick={() => setActiveTab('leads')}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: activeTab === 'leads' ? '#3b82f6' : 'transparent', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', fontSize: '1rem', transition: '0.2s' }}>
                        <Users size={20} /> Lead Manager
                    </button>
                    <button 
                        onClick={() => setActiveTab('campaigns')}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: activeTab === 'campaigns' ? '#3b82f6' : 'transparent', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', fontSize: '1rem', transition: '0.2s' }}>
                        <Mail size={20} /> Outreach Campaigns
                    </button>
                    <button 
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: 'transparent', color: '#94a3b8', border: 'none', borderRadius: '8px', cursor: 'not-allowed', textAlign: 'left', fontSize: '1rem', marginTop: 'auto' }}>
                        <Settings size={20} /> Settings
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
                
                {activeTab === 'leads' && (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Lead Manager</h1>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                {/* Hidden File Input */}
                                <input 
                                    type="file" 
                                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" 
                                    ref={fileInputRef} 
                                    style={{ display: 'none' }} 
                                    onChange={handleFileUpload}
                                />
                                <button onClick={() => fileInputRef.current?.click()} style={{ background: '#10b981', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
                                    <Upload size={16} /> Import Leads (CSV/Excel)
                                </button>
                                <button onClick={fetchLeads} style={{ background: '#334155', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <RefreshCw size={16} /> Refresh
                                </button>
                            </div>
                        </div>

                        {/* Add Lead Form */}
                        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', marginBottom: '30px', border: '1px solid #334155' }}>
                            <h3 style={{ marginBottom: '15px' }}>Add New Lead</h3>
                            <form onSubmit={handleAddLead} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: '15px' }}>
                                <input type="text" placeholder="Company Name" required value={newLead.CompanyName} onChange={e => setNewLead({...newLead, CompanyName: e.target.value})} style={{ padding: '10px', borderRadius: '6px', background: '#0f172a', border: '1px solid #334155', color: 'white', outline: 'none' }} />
                                <input type="text" placeholder="Contact Name" required value={newLead.ContactName} onChange={e => setNewLead({...newLead, ContactName: e.target.value})} style={{ padding: '10px', borderRadius: '6px', background: '#0f172a', border: '1px solid #334155', color: 'white', outline: 'none' }} />
                                <input type="email" placeholder="Email Address" required value={newLead.Email} onChange={e => setNewLead({...newLead, Email: e.target.value})} style={{ padding: '10px', borderRadius: '6px', background: '#0f172a', border: '1px solid #334155', color: 'white', outline: 'none' }} />
                                <button type="submit" style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Add Lead</button>
                            </form>
                        </div>

                        {/* Leads Table */}
                        <div style={{ background: '#1e293b', borderRadius: '12px', border: '1px solid #334155', overflow: 'hidden' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead style={{ background: '#0f172a' }}>
                                    <tr>
                                        <th style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #334155' }}>Company</th>
                                        <th style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #334155' }}>Contact</th>
                                        <th style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #334155' }}>Email</th>
                                        <th style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #334155' }}>Status</th>
                                        <th style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #334155' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr><td colSpan="5" style={{ padding: '20px', textAlign: 'center' }}>Loading leads...</td></tr>
                                    ) : leads.length === 0 ? (
                                        <tr><td colSpan="5" style={{ padding: '20px', textAlign: 'center' }}>No leads found. Add one above!</td></tr>
                                    ) : (
                                        leads.map((lead, idx) => (
                                            <tr key={idx} style={{ borderBottom: '1px solid #334155' }}>
                                                <td style={{ padding: '15px' }}>{lead.CompanyName}</td>
                                                <td style={{ padding: '15px' }}>{lead.ContactName}</td>
                                                <td style={{ padding: '15px' }}>{lead.Email}</td>
                                                <td style={{ padding: '15px', textAlign: 'center' }}>
                                                    <span style={{ padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem', background: lead.Status === 'Sent' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(234, 179, 8, 0.2)', color: lead.Status === 'Sent' ? '#4ade80' : '#facc15' }}>
                                                        {lead.Status || 'Pending'}
                                                    </span>
                                                </td>
                                                <td style={{ padding: '15px', textAlign: 'center' }}>
                                                    <button onClick={() => handleDeleteLead(lead.Email)} style={{ background: 'transparent', color: '#ef4444', border: 'none', cursor: 'pointer', padding: '5px' }}>
                                                        <Trash2 size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'campaigns' && (
                    <div style={{ maxWidth: '800px' }}>
                        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Outreach Campaigns</h1>
                        <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Write your cold email script here. It will automatically be sent to all <strong>"Pending"</strong> leads.</p>
                        
                        <div style={{ background: '#1e293b', padding: '30px', borderRadius: '12px', border: '1px solid #334155' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#cbd5e1' }}>Subject Line</label>
                                <input type="text" value={campaign.subject} onChange={e => setCampaign({...campaign, subject: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#0f172a', border: '1px solid #334155', color: 'white', outline: 'none', fontSize: '1rem' }} />
                                <small style={{ color: '#64748b', marginTop: '5px', display: 'block' }}>Use variables: {`{CompanyName}`}, {`{ContactName}`}</small>
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#cbd5e1' }}>Email Body (HTML Supported)</label>
                                <textarea rows="12" value={campaign.body} onChange={e => setCampaign({...campaign, body: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#0f172a', border: '1px solid #334155', color: 'white', outline: 'none', fontSize: '1rem', fontFamily: 'monospace' }}></textarea>
                            </div>

                            <button onClick={handleSendCampaign} style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '10px', width: '100%', justifyContent: 'center', transition: '0.2s' }}>
                                <Send size={20} /> Launch Campaign
                            </button>
                            <p style={{ textAlign: 'center', color: '#64748b', marginTop: '15px', fontSize: '0.9rem' }}>Campaigns send with a 3-second delay per email to prevent spam folder placement.</p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Dashboard;
