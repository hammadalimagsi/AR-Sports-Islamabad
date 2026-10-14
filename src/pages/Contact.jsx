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
    <div className="py-12 bg-dark-950 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-dark-900 text-white border border-dark-700 mb-3">
            <MapPin className="w-3.5 h-3.5 text-red-500" /> AR SPORTS ISLAMABAD SHOWROOM
          </span>
          <h1 className="font-teko text-4xl sm:text-6xl font-bold text-white tracking-wide">
            STORE LOCATION & INQUIRIES
          </h1>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Visit our physical store on High Court Road, Rawalpindi / Islamabad or connect directly through our official WhatsApp lines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: BUSINESS DETAILS & GOOGLE MAPS SHOWCASE */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-dark-900 border border-dark-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <div>
                <h2 className="font-teko text-3xl font-bold text-white tracking-wide">
                  STORE CONTACT & ADDRESS
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Located near Car Chowk on High Court Road. Walk-ins welcome for kit consultations.
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                {/* Store Physical Address */}
                <div className="p-4 rounded-xl bg-dark-950 border border-dark-800 space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-slate-400 block font-semibold">Store Address</span>
                      <span className="text-white font-medium block">{BUSINESS_CONFIG.address}</span>
                    </div>
                  </div>
                  
                  {/* Google Maps link button */}
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-dark-850 text-neon-400 hover:bg-neon-500 hover:text-black text-xs font-bold transition-colors border border-dark-700"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Primary WhatsApp Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-dark-950 border border-dark-800">
                  <Phone className="w-5 h-5 text-neon-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Official WhatsApp Number</span>
                    <button onClick={handleQuickWhatsApp} className="text-white font-bold hover:text-neon-400 text-base">
                      {BUSINESS_CONFIG.whatsappPhoneDisplay}
                    </button>
                    <span className="text-[11px] text-neon-400 block mt-0.5">Instant WhatsApp Quoting</span>
                  </div>
                </div>

                {/* Calling Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-dark-950 border border-dark-800">
                  <Phone className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Voice Call & Store Line</span>
                    <a href={`tel:${BUSINESS_CONFIG.callingPhone}`} className="text-white font-bold hover:text-neon-400 text-base">
                      {BUSINESS_CONFIG.callingPhone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-dark-950 border border-dark-800">
                  <Mail className="w-5 h-5 text-neon-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Email</span>
                    <span className="text-white font-medium">{BUSINESS_CONFIG.email}</span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-dark-950 border border-dark-800">
                  <Clock className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Store Operational Hours</span>
                    <span className="text-white font-medium">{BUSINESS_CONFIG.businessHours}</span>
                  </div>
                </div>
              </div>

              {/* DIRECT WHATSAPP ACTION */}
              <button
                type="button"
                onClick={handleQuickWhatsApp}
                className="w-full py-4 px-6 rounded-2xl font-extrabold text-sm bg-neon-500 hover:bg-neon-400 text-black flex items-center justify-center gap-2 shadow-xl shadow-neon-500/20 transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Open Instant WhatsApp Chat</span>
              </button>
            </div>
          </div>

          {/* RIGHT: INQUIRY FORM */}
          <div className="lg:col-span-7">
            <div className="bg-dark-900 border border-dark-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h2 className="font-teko text-3xl font-bold text-white tracking-wide mb-1">
                SEND AN INQUIRY
              </h2>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your requirements below. Submitting will prepare your message in WhatsApp addressed to <strong>{BUSINESS_CONFIG.whatsappPhoneDisplay}</strong>.
              </p>

              {errorMsg && (
                <div className="mb-4 p-3.5 bg-red-950/60 border border-red-800 rounded-xl text-xs text-red-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Asad Farooq"
                      className="w-full bg-dark-950 border border-dark-700 rounded-xl py-2.5 px-3.5 text-white text-sm focus:border-neon-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +92 318 0000000"
                      className="w-full bg-dark-950 border border-dark-700 rounded-xl py-2.5 px-3.5 text-white text-sm focus:border-neon-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. team@example.com"
                      className="w-full bg-dark-950 border border-dark-700 rounded-xl py-2.5 px-3.5 text-white text-sm focus:border-neon-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Inquiry Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-dark-950 border border-dark-700 rounded-xl py-2.5 px-3.5 text-white text-sm focus:border-neon-500 focus:outline-none"
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
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Requirements / Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your team requirements: quantities needed, sport, preferred colors, delivery date, custom sponsor logos..."
                    className="w-full bg-dark-950 border border-dark-700 rounded-xl p-3 text-white text-xs focus:border-neon-500 focus:outline-none"
                  />
                </div>

                {/* HOW THIS WORKS INSTRUCTION */}
                <div className="p-3.5 bg-dark-950 rounded-xl border border-dark-800 text-xs text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-neon-400" />
                    <span>How WhatsApp Inquiry Works:</span>
                  </div>
                  <p>
                    Submitting this form prepares your message directly into WhatsApp with our official line ({BUSINESS_CONFIG.whatsappPhoneDisplay}). You only need to tap "Send" in WhatsApp.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl font-extrabold text-sm bg-neon-500 hover:bg-neon-400 text-black flex items-center justify-center gap-2 shadow-xl shadow-neon-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
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
