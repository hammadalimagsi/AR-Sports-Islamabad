import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, 
  Send, ShieldCheck, CheckCircle2, AlertCircle, ExternalLink 
} from 'lucide-react';
import { BUSINESS_CONFIG, openWhatsAppChat } from '../config/businessConfig';
import { buildGeneralContactInquiryMessage } from '../utils/whatsappMessages';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: 'Custom Teamwear & Uniforms Inquiry',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.message.trim()) {
      setErrorMsg('Please enter your Name and Inquiry Message.');
      return;
    }

    setErrorMsg('');
    setFormSubmitted(true);

    const whatsAppMessage = buildGeneralContactInquiryMessage({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    });

    openWhatsAppChat(whatsAppMessage);
  };

  const handleQuickWhatsApp = () => {
    openWhatsAppChat("Assalam-o-Alaikum AR Sports Islamabad! I want to contact your sales and custom design team.");
  };

  return (
    <div className="py-12 bg-white min-h-screen text-brand-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-alt text-brand-text border border-brand-border mb-3">
            <MapPin className="w-3.5 h-3.5 text-red-500" /> AR Sports Islamabad Showroom
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-text tracking-tight">
            Store Location & Inquiries
          </h1>
          <p className="text-sm text-brand-muted mt-2 leading-relaxed">
            Visit our physical store on High Court Road, Rawalpindi / Islamabad or connect directly through our official WhatsApp lines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: BUSINESS DETAILS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-alt border border-brand-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div>
                <h2 className="text-2xl font-bold text-brand-text tracking-tight">
                  Store Contact & Address
                </h2>
                <p className="text-xs text-brand-muted mt-1">
                  Located near Car Chowk on High Court Road. Walk-ins welcome for kit consultations.
                </p>
              </div>

              <div className="space-y-4 text-sm text-brand-text">
                {/* Store Physical Address */}
                <div className="p-4 rounded-xl bg-white border border-brand-border space-y-2 shadow-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-brand-muted block font-semibold">Store Address</span>
                      <span className="text-brand-text font-medium block">{BUSINESS_CONFIG.address}</span>
                    </div>
                  </div>
                  
                  {/* Google Maps link button */}
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-alt text-brand-green hover:bg-emerald-50 text-xs font-bold transition-colors border border-brand-border"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Primary WhatsApp Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-brand-border shadow-xs">
                  <Phone className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-brand-muted block font-semibold">Official WhatsApp Number</span>
                    <button onClick={handleQuickWhatsApp} className="text-brand-text font-bold hover:text-brand-green text-base cursor-pointer">
                      {BUSINESS_CONFIG.whatsappPhoneDisplay}
                    </button>
                    <span className="text-[11px] text-brand-green block mt-0.5 font-medium">Instant WhatsApp Quoting</span>
                  </div>
                </div>

                {/* Calling Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-brand-border shadow-xs">
                  <Phone className="w-5 h-5 text-brand-muted shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-brand-muted block font-semibold">Voice Call & Store Line</span>
                    <a href={`tel:${BUSINESS_CONFIG.callingPhone}`} className="text-brand-text font-bold hover:text-brand-green text-base">
                      {BUSINESS_CONFIG.callingPhone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-brand-border shadow-xs">
                  <Mail className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-brand-muted block font-semibold">Email</span>
                    <span className="text-brand-text font-medium">{BUSINESS_CONFIG.email}</span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-brand-border shadow-xs">
                  <Clock className="w-5 h-5 text-brand-muted shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-brand-muted block font-semibold">Store Operational Hours</span>
                    <span className="text-brand-text font-medium">{BUSINESS_CONFIG.businessHours}</span>
                  </div>
                </div>
              </div>

              {/* DIRECT WHATSAPP ACTION */}
              <button
                type="button"
                onClick={handleQuickWhatsApp}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-brand-green hover:bg-brand-hover text-white flex items-center justify-center gap-2 shadow-md shadow-brand-green/20 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Open Instant WhatsApp Chat</span>
              </button>
            </div>
          </div>

          {/* RIGHT: INQUIRY FORM */}
          <div className="lg:col-span-7">
            <div className="bg-brand-alt border border-brand-border rounded-3xl p-6 sm:p-8 shadow-xs">
              <h2 className="text-2xl font-bold text-brand-text tracking-tight mb-1">
                Send an Inquiry
              </h2>
              <p className="text-xs text-brand-muted mb-6">
                Fill in your requirements below. Submitting will prepare your message in WhatsApp addressed to <strong>{BUSINESS_CONFIG.whatsappPhoneDisplay}</strong>.
              </p>

              {errorMsg && (
                <div className="mb-4 p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-text mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Asad Farooq"
                      className="w-full bg-white border border-brand-border rounded-xl py-2.5 px-3.5 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-text mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +92 318 0000000"
                      className="w-full bg-white border border-brand-border rounded-xl py-2.5 px-3.5 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-text mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. team@example.com"
                      className="w-full bg-white border border-brand-border rounded-xl py-2.5 px-3.5 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-text mb-1">
                      Inquiry Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white border border-brand-border rounded-xl py-2.5 px-3.5 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                    >
                      <option value="Sublimation Sports Kits Hub Inquiry">Sublimation Sports Kits Hub</option>
                      <option value="Cricket Kits & Jerseys">Cricket Kits & Jerseys</option>
                      <option value="Football Kits & Jerseys">Football Kits & Jerseys</option>
                      <option value="Basketball Kits & Jerseys">Basketball Kits & Jerseys</option>
                      <option value="Badminton & Hockey Kits">Badminton & Hockey Kits</option>
                      <option value="School & Academy Bulk Order">School & Academy Bulk Order</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-text mb-1">
                    Your Requirements / Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your team requirements: quantities needed, sport, preferred colors, delivery date, custom sponsor logos..."
                    className="w-full bg-white border border-brand-border rounded-xl p-3 text-brand-text text-xs focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                  />
                </div>

                {/* HOW THIS WORKS INSTRUCTION */}
                <div className="p-3.5 bg-white rounded-xl border border-brand-border text-xs text-brand-muted space-y-1">
                  <div className="flex items-center gap-1.5 text-brand-text font-semibold">
                    <ShieldCheck className="w-4 h-4 text-brand-green" />
                    <span>How WhatsApp Inquiry Works:</span>
                  </div>
                  <p>
                    Submitting this form prepares your message directly into WhatsApp with our official line ({BUSINESS_CONFIG.whatsappPhoneDisplay}). You only need to tap "Send" in WhatsApp.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-brand-green hover:bg-brand-hover text-white flex items-center justify-center gap-2 shadow-md shadow-brand-green/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry on WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
