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
                {/* Interactive Embedded Google Map */}
                <div className="rounded-xl overflow-hidden border border-brand-border bg-white w-full h-48 shadow-2xs">
                  <iframe
                    src={BUSINESS_CONFIG.googleMapsEmbedUrl}
                    title="AR Sports Islamabad Map Location"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* SOCIAL MEDIA PROFILES */}
              <div className="pt-2 border-t border-brand-border">
                <span className="text-xs font-bold text-brand-text uppercase tracking-wider block mb-2">
                  Official Social Channels
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  {/* LinkedIn */}
                  <a 
                    href={BUSINESS_CONFIG.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-muted hover:text-blue-700 hover:border-blue-400 hover:bg-blue-50 transition-all hover:scale-105"
                    aria-label="Connect with AR Sports on LinkedIn"
                    title="LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a 
                    href={BUSINESS_CONFIG.socials.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-muted hover:text-pink-600 hover:border-pink-300 hover:bg-pink-50 transition-all hover:scale-105"
                    aria-label="Follow AR Sports on Instagram"
                    title="Instagram"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a 
                    href={BUSINESS_CONFIG.socials.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-muted hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all hover:scale-105"
                    aria-label="Follow AR Sports on Facebook"
                    title="Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a 
                    href={BUSINESS_CONFIG.socials.x} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-muted hover:text-black hover:border-black/30 hover:bg-neutral-50 transition-all hover:scale-105"
                    aria-label="Follow AR Sports on X"
                    title="X (Twitter)"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>

                  {/* Threads */}
                  <a 
                    href={BUSINESS_CONFIG.socials.threads} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-muted hover:text-black hover:border-black/30 hover:bg-neutral-50 transition-all hover:scale-105"
                    aria-label="Follow AR Sports on Threads"
                    title="Threads"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.186 24C5.46 24 0 18.675 0 12.107 0 5.42 5.44 0 12.129 0c6.549 0 11.871 5.253 11.871 11.733 0 .74-.069 1.48-.204 2.201h-3.923c.08-.49.123-.99.123-1.494 0-4.318-3.528-7.83-7.867-7.83-4.373 0-7.928 3.535-7.928 7.897 0 4.36 3.555 7.897 7.928 7.897 2.457 0 4.678-1.127 6.136-2.903l2.977 2.39C19.26 22.378 15.932 24 12.186 24zm2.842-8.683c-.85.502-1.872.784-2.964.784-2.428 0-4.397-1.968-4.397-4.396 0-2.428 1.969-4.396 4.397-4.396 2.428 0 4.396 1.968 4.396 4.396v1.077c0 .883-.717 1.6-1.6 1.6s-1.6-.717-1.6-1.6v-2.077c0-.552-.448-1-1-1s-1 .448-1 1c0 1.657 1.343 3 3 3 .738 0 1.417-.267 1.947-.71.554.846 1.503 1.403 2.585 1.403 1.709 0 3.1-1.391 3.1-3.1v-1.077C22.506 6.36 17.848 1.7 12.129 1.7 6.377 1.7 1.7 6.377 1.7 12.107c0 5.708 4.654 10.36 10.429 10.36 3.42 0 6.467-1.637 8.375-4.177l-1.343-1.082c-1.579 2.083-4.088 3.427-6.904 3.427-4.747 0-8.597-3.83-8.597-8.528 0-4.72 3.872-8.565 8.625-8.565 4.708 0 8.536 3.805 8.536 8.49v1.077c0 2.647-2.153 4.8-4.8 4.8-1.074 0-2.072-.353-2.883-.951l-.226.155z"/>
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a 
                    href={BUSINESS_CONFIG.socials.tiktok} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-muted hover:text-black hover:border-black/30 hover:bg-neutral-50 transition-all hover:scale-105"
                    aria-label="Follow AR Sports on TikTok"
                    title="TikTok"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.54c0 1.52-.39 3.04-1.22 4.31-1.34 2.04-3.69 3.32-6.14 3.34-2.83.03-5.5-1.53-6.85-4.01-1.35-2.49-1.23-5.61.31-7.98 1.54-2.38 4.25-3.76 7.1-3.48v4.14c-1.55-.26-3.19.46-3.95 1.83-.76 1.37-.52 3.12.59 4.24 1.11 1.12 2.87 1.34 4.22.52.84-.51 1.37-1.44 1.4-2.43V.02h-.88z"/>
                    </svg>
                  </a>
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
