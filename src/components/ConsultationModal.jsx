import React, { useState } from 'react';
import { X, Send, ShieldCheck, CheckCircle2, Sparkles, Building, Mail, User, Phone, MessageSquare } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, initialData = null }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    interest: 'AI-Driven Operations',
    scale: 'Enterprise Scale',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [prevInitialData, setPrevInitialData] = useState(initialData);

  if (initialData !== prevInitialData) {
    setPrevInitialData(initialData);
    if (initialData) {
      if (typeof initialData === 'string') {
        setFormData(prev => ({ ...prev, interest: initialData }));
      } else if (typeof initialData === 'object') {
        setFormData(prev => ({
          ...prev,
          interest: initialData.serviceFocus || prev.interest,
          message: initialData.summary ? `Estimate from calculator: ${initialData.summary}` : prev.message
        }));
      }
    }
  }

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedTicket = 'ORA-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedTicket);
    setSubmitted(true);
  };

  const handleSendToEmail = () => {
    const subject = encodeURIComponent('Inquiry: Technology Consultation Request');
    const body = encodeURIComponent(
      `Hello OraRose Tech Team,\n\n` +
      `I would like to discuss technology/automation needs for our business:\n` +
      `• Name: ${formData.fullName || '-'}\n` +
      `• Company: ${formData.companyName || '-'}\n` +
      `• Email: ${formData.workEmail || '-'}\n` +
      `• Category: ${formData.interest}\n` +
      `• Needs/Notes: ${formData.message || 'System & Automation Discussion'}\n\n` +
      `Thank you!`
    );
    window.location.href = `mailto:business@orarose.id?subject=${subject}&body=${body}`;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container glass-modal card-modern">
        <button 
          onClick={onClose} 
          className="modal-close-btn"
          aria-label="Close consultation window"
        >
          <X size={22} />
        </button>

        {!submitted ? (
          <div>
            <div className="modal-header">
              <span className="section-header-badge">
                <Sparkles size={14} />
                DISCOVERY &amp; TECHNOLOGY CONSULTATION
              </span>
              <h3 className="modal-title">Discuss Your Technology Needs</h3>
              <p className="modal-subtitle">
                Consult your system challenges, software modernization, or AI automation needs directly with <strong>OraRose Tech's</strong> engineering team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="fullName">
                    <User size={15} />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="E.g. John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="companyName">
                    <Building size={15} />
                    <span>Company / Startup Name *</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    placeholder="E.g. Acme Corporation"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="workEmail">
                    <Mail size={15} />
                    <span>Corporate / Business Email *</span>
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    required
                    placeholder="name@company.com"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">
                    <Phone size={15} />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    placeholder="+1 234 567 890"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="interest">Primary Area of Interest:</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="AI-Driven Operations">AI-Driven Operations (Private Models & Agentic Workflows)</option>
                  <option value="Legacy System Modernization">Legacy System Modernization (Replatforming & Microservices)</option>
                  <option value="Enterprise Web & Mobile Architecture">Enterprise Web & Mobile Architecture (Custom Build)</option>
                  <option value="Full Digital Overhaul">Full Digital Overhaul (Comprehensive Systems)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <MessageSquare size={15} />
                  <span>Specific Needs / Current System Challenges:</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Describe your current system landscape, user base, or the specific friction you want to resolve..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                ></textarea>
              </div>

              <div className="form-actions-split">
                <button type="submit" className="btn btn-primary btn-submit-main">
                  <span>Submit Request &amp; Schedule Session</span>
                  <Send size={16} />
                </button>

                <button 
                  type="button" 
                  onClick={handleSendToEmail}
                  className="btn btn-secondary btn-submit-wa"
                >
                  <Mail size={16} className="text-orange" />
                  <span>Contact Business Desk via Email</span>
                </button>
              </div>

              <div className="modal-trust-footnote">
                <ShieldCheck size={14} className="text-green" />
                <span>Your privacy is secure. We sign an official NDA before reviewing any internal company data.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="modal-success-state">
            <div className="success-icon-wrap">
              <CheckCircle2 size={56} color="#FF823A" />
            </div>
            <h3 className="success-title">Consultation Request Received!</h3>
            <p className="success-desc">
              Thank you, <strong>{formData.fullName}</strong>. Your request has been queued with OraRose Tech's Solutions Architect team.
            </p>

            <div className="success-ticket-box">
              <span className="ticket-label">DISCOVERY TICKET ID:</span>
              <span className="ticket-number">{ticketId}</span>
            </div>

            <p className="success-next-step">
              Our architects will contact you via email at <strong>{formData.workEmail}</strong> within 2 business hours to confirm your discovery call schedule.
            </p>

            <div className="success-actions">
              <button onClick={handleSendToEmail} className="btn btn-primary">
                <Mail size={18} />
                <span>Email Architect Directly</span>
              </button>
              <button onClick={onClose} className="btn btn-secondary">
                Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
