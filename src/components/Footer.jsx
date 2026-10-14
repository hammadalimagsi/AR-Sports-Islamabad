import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, 
  Sparkles, ArrowRight, Instagram, Facebook, Youtube, ExternalLink, MessageCircle 
} from 'lucide-react';
import { BUSINESS_CONFIG, openWhatsAppChat } from '../config/businessConfig';
import { SPORTS_CATEGORIES } from '../data/productsData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppHelp = () => {
    openWhatsAppChat("Assalam-o-Alaikum AR Sports Islamabad! I have a question about your custom sports kits and products.");
  };

  return (
    <footer className="bg-dark-950 border-t border-dark-800 text-slate-300">
      
      {/* 1. PRE-FOOTER WHATSAPP CONTACT CTA BANNER */}
      <div className="border-b border-dark-800 bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-dark-700/80 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-neon-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-xl text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-dark-950 text-neon-400 border border-neon-500/30 mb-3">
                <Sparkles className="w-3.5 h-3.5" /> AR SPORTS ISLAMABAD
              </span>
              <h3 className="font-teko text-3xl sm:text-4xl font-black text-white tracking-wide leading-tight">
                SUBLIMATION SPORTS KITS HUB — READY TO GEAR UP YOUR SQUAD?
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Connect directly with our team on WhatsApp for custom quotes, or visit our physical showroom at Jmal Plaza, High Court Road, Rawalpindi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-dark-800 hover:bg-dark-750 text-white text-center border border-dark-700 flex items-center justify-center gap-1.5 transition-colors"
              >
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Store Location</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <button
                onClick={handleWhatsAppHelp}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider bg-neon-500 hover:bg-neon-400 text-black flex items-center justify-center gap-2 shadow-lg shadow-neon-500/20 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp ({BUSINESS_CONFIG.whatsappPhoneDisplay})</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT COLUMNS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img
                src="/brand/logo.png"
                alt="AR Sports Islamabad"
                className="h-12 w-auto object-contain drop-shadow"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="font-teko text-3xl font-black tracking-wider text-white">
                  AR SPORTS <span className="text-red-500">ISLAMABAD</span>
                </span>
                <span className="text-[10px] tracking-widest text-neon-400 uppercase font-bold">
                  Sublimation Sports Kits Hub
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Your identity in motion. AR SPORTS manufactures custom team kits, school sports uniforms, and high-performance equipment tailored to your exact specifications.
            </p>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200">{BUSINESS_CONFIG.address}</span>
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-neon-400 hover:underline mt-0.5 font-medium"
                  >
                    View on Google Maps &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-neon-400 flex-shrink-0" />
                <div>
                  <span className="text-slate-400">WhatsApp: </span>
                  <button onClick={handleWhatsAppHelp} className="hover:text-neon-400 transition-colors font-bold text-white">
                    {BUSINESS_CONFIG.whatsappPhoneDisplay}
                  </button>
                  <span className="mx-2 text-dark-700">|</span>
                  <span className="text-slate-400">Call: </span>
                  <a href={`tel:${BUSINESS_CONFIG.callingPhone}`} className="text-white hover:text-neon-300 font-semibold">
                    {BUSINESS_CONFIG.callingPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-neon-400 flex-shrink-0" />
                <span>{BUSINESS_CONFIG.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>{BUSINESS_CONFIG.businessHours}</span>
              </div>
            </div>

            {/* Verified Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a 
                href={BUSINESS_CONFIG.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-dark-900 border border-dark-800 flex items-center justify-center text-slate-400 hover:text-neon-400 hover:border-neon-500/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={BUSINESS_CONFIG.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-dark-900 border border-dark-800 flex items-center justify-center text-slate-400 hover:text-neon-400 hover:border-neon-500/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={BUSINESS_CONFIG.socials.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-dark-900 border border-dark-800 flex items-center justify-center text-slate-400 hover:text-neon-400 hover:border-neon-500/50 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-neon-500 pl-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">Shop by Sport</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/custom-design" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-neon-400" />
                  <span>Custom Jerseys</span>
                </Link>
              </li>
              <li>
                <Link to="/school-teamwear" className="hover:text-white transition-colors">School & Teamwear</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* SPORTS CATEGORIES */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-neon-500 pl-2">
              Sports Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {SPORTS_CATEGORIES.slice(0, 6).map(sport => (
                <li key={sport.id}>
                  <Link 
                    to={`/shop?sport=${sport.slug}`}
                    className="hover:text-white hover:translate-x-1 inline-block transition-transform"
                  >
                    {sport.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/shop" className="text-neon-400 hover:underline flex items-center gap-1 font-semibold pt-1">
                  <span>View All Sports</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* SHOWROOM & ASSISTANCE */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2">
              Showroom & Help
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Store Directions
                </Link>
              </li>
              <li>
                <a 
                  href={BUSINESS_CONFIG.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Google Maps Pin</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About AR Sports Islamabad
                </Link>
              </li>
              <li>
                <button onClick={handleWhatsAppHelp} className="text-neon-400 hover:underline text-left font-semibold">
                  WhatsApp Support
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & NOTICE */}
        <div className="mt-12 pt-8 border-t border-dark-800 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            &copy; {currentYear} <strong className="text-slate-200">AR SPORTS ISLAMABAD</strong>. All rights reserved. 
            Jmal Plaza, Shop# 3, High Court Road, Near Car Chowk, Rawalpindi.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Direct WhatsApp Quotation</span>
            <span>•</span>
            <span>100% Permanent Sublimation</span>
            <span>•</span>
            <span>Nationwide Courier</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
