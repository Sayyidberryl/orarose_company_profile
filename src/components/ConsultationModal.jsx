import React, { useState } from 'react';
import { X, Send, PhoneCall, ShieldCheck, CheckCircle2, Sparkles, Building, Mail, User, Phone, MessageSquare } from 'lucide-react';

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
          message: initialData.summary ? `Estimasi dari kalkulator: ${initialData.summary}` : prev.message
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

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Tim OraRose Tech,\n\n` +
      `Saya ingin mendiskusikan kebutuhan teknologi/otomasi untuk bisnis kami:\n` +
      `• Nama: ${formData.fullName || 'Rekan Bisnis'}\n` +
      `• Perusahaan: ${formData.companyName || '-'}\n` +
      `• Email: ${formData.workEmail || '-'}\n` +
      `• Kategori: ${formData.interest}\n` +
      `• Kebutuhan/Catatan: ${formData.message || 'Diskusi Kebutuhan Sistem & Otomasi'}\n\n` +
      `Terima kasih!`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container glass-modal card-modern">
        <button 
          onClick={onClose} 
          className="modal-close-btn"
          aria-label="Tutup jendela konsultasi"
        >
          <X size={22} />
        </button>

        {!submitted ? (
          <div>
            <div className="modal-header">
              <span className="section-header-badge">
                <Sparkles size={14} />
                DISCOVERY &amp; KONSULTASI TEKNOLOGI
              </span>
              <h3 className="modal-title">Diskusikan Kebutuhan Teknologi Anda</h3>
              <p className="modal-subtitle">
                Konsultasikan tantangan sistem, modernisasi perangkat lunak, atau kebutuhan otomatisasi AI bisnis Anda bersama tim engineering <strong>OraRose Tech</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="fullName">
                    <User size={15} />
                    <span>Nama Lengkap *</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Contoh: Budi Pratama"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="companyName">
                    <Building size={15} />
                    <span>Nama Perusahaan / Startup *</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    placeholder="Contoh: PT Mega Inovasi Nusantara"
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
                    <span>Email Korporat / Bisnis *</span>
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    required
                    placeholder="nama@perusahaan.com"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">
                    <Phone size={15} />
                    <span>Nomor WhatsApp / Telepon *</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    placeholder="0812-xxxx-xxxx"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="interest">Fokus Kebutuhan Utama:</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="AI-Driven Operations">AI-Driven Operations (Model Privat & Agentic Workflows)</option>
                  <option value="Legacy System Modernization">Legacy System Modernization (Replatforming & Microservices)</option>
                  <option value="Enterprise Web & Mobile Architecture">Enterprise Web & Mobile Architecture (Custom Build)</option>
                  <option value="Full Digital Overhaul">Full Digital Overhaul (Sistem Menyeluruh)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <MessageSquare size={15} />
                  <span>Kebutuhan Spesifik / Tantangan Sistem Saat Ini:</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Ceritakan gambaran sistem Anda saat ini, jumlah pengguna, atau kendala yang ingin diatasi..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                ></textarea>
              </div>

              <div className="form-actions-split">
                <button type="submit" className="btn btn-primary btn-submit-main">
                  <span>Kirim Permintaan & Jadwalkan Sesi</span>
                  <Send size={16} />
                </button>

                <button 
                  type="button" 
                  onClick={handleSendToWhatsApp}
                  className="btn btn-secondary btn-submit-wa"
                >
                  <PhoneCall size={16} className="text-orange" />
                  <span>Hubungi Cepat via WhatsApp</span>
                </button>
              </div>

              <div className="modal-trust-footnote">
                <ShieldCheck size={14} className="text-green" />
                <span>Privasi aman. Kami menandatangani NDA resmi sebelum meninjau data internal perusahaan Anda.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="modal-success-state">
            <div className="success-icon-wrap">
              <CheckCircle2 size={56} color="#FF823A" />
            </div>
            <h3 className="success-title">Permintaan Audit Berhasil Diterima!</h3>
            <p className="success-desc">
              Terima kasih, <strong>{formData.fullName}</strong>. Data Anda telah masuk ke antrean prioritas tim Solutions Architect <strong>OraRose Tech</strong>.
            </p>

            <div className="success-ticket-box">
              <span className="ticket-label">NOMOR TIKET DISCOVERY:</span>
              <span className="ticket-number">{ticketId}</span>
            </div>

            <p className="success-next-step">
              Arsitek kami akan menghubungi Anda melalui email <strong>{formData.workEmail}</strong> atau WhatsApp dalam kurun waktu kurang dari 2 jam kerja untuk konfirmasi jadwal discovery call.
            </p>

            <div className="success-actions">
              <button onClick={handleSendToWhatsApp} className="btn btn-primary">
                <PhoneCall size={18} />
                <span>Langsung Chat Arsitek Sekarang</span>
              </button>
              <button onClick={onClose} className="btn btn-secondary">
                Kembali ke Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
