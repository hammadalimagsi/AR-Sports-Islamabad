import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, 
  Sparkles, ArrowRight, ExternalLink, MessageCircle 
} from 'lucide-react';
import { BUSINESS_CONFIG, openWhatsAppChat } from '../config/businessConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppHelp = () => {
    openWhatsAppChat("Assalam-o-Alaikum AR Sports Islamabad! I have a question about your custom sports kits and products.");
  };

  return (
    <footer className="bg-brand-alt border-t border-brand-border text-brand-muted">
      
      {/* 1. PRE-FOOTER WHATSAPP CONTACT CTA BANNER */}
      <div className="border-b border-brand-border bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-alt border border-brand-border rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs relative overflow-hidden">
            
            <div className="max-w-xl text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-white text-brand-green border border-brand-green/20 mb-3 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" /> AR SPORTS ISLAMABAD
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight leading-snug">
                Sublimation Sports Kits Hub — Ready to Gear Up Your Squad?
              </h3>
              <p className="text-brand-muted text-sm mt-2 leading-relaxed">
                Connect directly with our manufacturing team on WhatsApp for custom quotes, or visit our physical showroom at Jmal Plaza, High Court Road, Rawalpindi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-white hover:bg-brand-alt text-brand-text text-center border border-brand-border flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-brand-green" />
                <span>Store Location</span>
                <ExternalLink className="w-3 h-3 text-brand-muted" />
              </a>
              <button
                onClick={handleWhatsAppHelp}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-brand-green hover:bg-brand-hover text-white flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-105 cursor-pointer"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* BRAND & CONTACT COLUMN (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/brand/logo.png"
                alt="AR Sports Islamabad"
                className="h-11 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold tracking-tight text-brand-charcoal">
                    AR SPORTS
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-brand-green text-white uppercase tracking-wider">
                    ISLAMABAD
                  </span>
                </div>
                <span className="text-[10px] tracking-wider text-brand-muted uppercase font-semibold">
                  Sublimation Sports Kits Hub
                </span>
              </div>
            </Link>

            <p className="text-brand-muted text-xs sm:text-sm leading-relaxed max-w-sm">
              Rawalpindi & Islamabad's custom sportswear manufacturer. We engineer tournament-grade sublimated match jerseys, complete squad kits, school uniforms, and athletic gear built to perform.
            </p>
            
            <div className="space-y-2.5 text-xs text-brand-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-brand-text font-medium block">{BUSINESS_CONFIG.address}</span>
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-green hover:underline inline-flex items-center gap-1 mt-0.5 font-medium"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-green flex-shrink-0" />
                <div>
                  <span>WhatsApp: </span>
                  <button onClick={handleWhatsAppHelp} className="hover:text-brand-green transition-colors font-bold text-brand-text cursor-pointer">
                    {BUSINESS_CONFIG.whatsappPhoneDisplay}
                  </button>
                  <span className="mx-2 text-brand-border">|</span>
                  <span>Call: </span>
                  <a href={`tel:${BUSINESS_CONFIG.callingPhone}`} className="text-brand-text hover:text-brand-green font-semibold">
                    {BUSINESS_CONFIG.callingPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span className="text-brand-text">{BUSINESS_CONFIG.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-muted flex-shrink-0" />
                <span>{BUSINESS_CONFIG.businessHours}</span>
              </div>
            </div>

            {/* OFFICIAL SOCIAL MEDIA PROFILES */}
            <div className="pt-2">
              <span className="text-xs font-bold text-brand-text uppercase tracking-wider block mb-2.5">
                Official Social Profiles
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                
                {/* 1. LinkedIn */}
                <a 
                  href={BUSINESS_CONFIG.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-muted hover:text-blue-700 hover:border-blue-400 hover:bg-blue-50 transition-all hover:scale-105"
                  aria-label="Connect with AR Sports Islamabad on LinkedIn"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* 2. Instagram */}
                <a 
                  href={BUSINESS_CONFIG.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-muted hover:text-pink-600 hover:border-pink-300 hover:bg-pink-50 transition-all hover:scale-105"
                  aria-label="Follow AR Sports Islamabad on Instagram"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* 3. X (Twitter) */}
                <a 
                  href={BUSINESS_CONFIG.socials.x} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-muted hover:text-black hover:border-black/30 hover:bg-neutral-50 transition-all hover:scale-105"
                  aria-label="Follow AR Sports Islamabad on X"
                  title="X (Twitter)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* 4. Threads */}
                <a 
                  href={BUSINESS_CONFIG.socials.threads} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-muted hover:text-black hover:border-black/30 hover:bg-neutral-50 transition-all hover:scale-105"
                  aria-label="Follow AR Sports Islamabad on Threads"
                  title="Threads"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.186 24C5.46 24 0 18.675 0 12.107 0 5.42 5.44 0 12.129 0c6.549 0 11.871 5.253 11.871 11.733 0 .74-.069 1.48-.204 2.201h-3.923c.08-.49.123-.99.123-1.494 0-4.318-3.528-7.83-7.867-7.83-4.373 0-7.928 3.535-7.928 7.897 0 4.36 3.555 7.897 7.928 7.897 2.457 0 4.678-1.127 6.136-2.903l2.977 2.39C19.26 22.378 15.932 24 12.186 24zm2.842-8.683c-.85.502-1.872.784-2.964.784-2.428 0-4.397-1.968-4.397-4.396 0-2.428 1.969-4.396 4.397-4.396 2.428 0 4.396 1.968 4.396 4.396v1.077c0 .883-.717 1.6-1.6 1.6s-1.6-.717-1.6-1.6v-2.077c0-.552-.448-1-1-1s-1 .448-1 1c0 1.657 1.343 3 3 3 .738 0 1.417-.267 1.947-.71.554.846 1.503 1.403 2.585 1.403 1.709 0 3.1-1.391 3.1-3.1v-1.077C22.506 6.36 17.848 1.7 12.129 1.7 6.377 1.7 1.7 6.377 1.7 12.107c0 5.708 4.654 10.36 10.429 10.36 3.42 0 6.467-1.637 8.375-4.177l-1.343-1.082c-1.579 2.083-4.088 3.427-6.904 3.427-4.747 0-8.597-3.83-8.597-8.528 0-4.72 3.872-8.565 8.625-8.565 4.708 0 8.536 3.805 8.536 8.49v1.077c0 2.647-2.153 4.8-4.8 4.8-1.074 0-2.072-.353-2.883-.951l-.226.155z"/>
                  </svg>
                </a>

                {/* 5. TikTok */}
                <a 
                  href={BUSINESS_CONFIG.socials.tiktok} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-muted hover:text-black hover:border-black/30 hover:bg-neutral-50 transition-all hover:scale-105"
                  aria-label="Follow AR Sports Islamabad on TikTok"
                  title="TikTok"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.54c0 1.52-.39 3.04-1.22 4.31-1.34 2.04-3.69 3.32-6.14 3.34-2.83.03-5.5-1.53-6.85-4.01-1.35-2.49-1.23-5.61.31-7.98 1.54-2.38 4.25-3.76 7.1-3.48v4.14c-1.55-.26-3.19.46-3.95 1.83-.76 1.37-.52 3.12.59 4.24 1.11 1.12 2.87 1.34 4.22.52.84-.51 1.37-1.44 1.4-2.43V.02h-.88z"/>
                  </svg>
                </a>

                {/* 6. Facebook */}
                <a 
                  href={BUSINESS_CONFIG.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-muted hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all hover:scale-105"
                  aria-label="Follow AR Sports Islamabad on Facebook"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* QUICK LINKS & SPORTS CATEGORIES (lg:col-span-4) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            {/* NAVIGATION LINKS */}
            <div>
              <h4 className="text-brand-charcoal font-bold text-sm tracking-tight mb-3 border-l-2 border-brand-green pl-2">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-brand-muted">
                <li>
                  <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
                </li>
                <li>
                  <a href="/#sports-categories" className="hover:text-brand-green transition-colors">Sports Categories</a>
                </li>
                <li>
                  <Link to="/custom-design" className="hover:text-brand-green transition-colors flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-green" />
                    <span>Customize Your Kit</span>
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-brand-green transition-colors">Products Catalog</Link>
                </li>
                <li>
                  <Link to="/school-teamwear" className="hover:text-brand-green transition-colors">School & Teamwear</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-brand-green transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-brand-green transition-colors">Contact</Link>
                </li>
              </ul>
            </div>

            {/* SPORTS CATEGORIES */}
            <div>
              <h4 className="text-brand-charcoal font-bold text-sm tracking-tight mb-3 border-l-2 border-brand-green pl-2">
                Sports Categories
              </h4>
              <ul className="space-y-1.5 text-xs text-brand-muted">
                {[
                  { name: "Cricket Kits", slug: "cricket" },
                  { name: "Football Kits", slug: "football" },
                  { name: "Basketball Gear", slug: "basketball" },
                  { name: "Volleyball Kits", slug: "volleyball" },
                  { name: "Badminton Gear", slug: "badminton" },
                  { name: "Tennis Apparel", slug: "tennis" },
                  { name: "Rugby Match Wear", slug: "rugby" },
                  { name: "Field Hockey", slug: "hockey" },
                  { name: "Gym & Fitness", slug: "gym-fitness" },
                  { name: "General Sportswear", slug: "general-sportswear" },
                  { name: "Trophies & Awards", slug: "trophies-awards" },
                ].map(sport => (
                  <li key={sport.slug}>
                    <Link 
                      to={`/sports/${sport.slug}`}
                      className="hover:text-brand-green hover:translate-x-0.5 inline-block transition-transform"
                    >
                      {sport.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link to="/shop" className="text-brand-green hover:underline flex items-center gap-1 font-semibold">
                    <span>Full Catalog</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. BUSINESS LOCATION & RESPONSIVE GOOGLE MAP (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-brand-charcoal font-bold text-sm tracking-tight border-l-2 border-brand-green pl-2">
                Store Location & Map
              </h4>
              <span className="text-[11px] text-brand-green font-semibold">Rawalpindi / Islamabad</span>
            </div>

            <p className="text-xs text-brand-muted leading-relaxed">
              {BUSINESS_CONFIG.address}
            </p>

            {/* RESPONSIVE EMBEDDED GOOGLE MAP */}
            <div className="relative rounded-2xl overflow-hidden border border-brand-border bg-white w-full h-44 shadow-xs">
              {BUSINESS_CONFIG.googleMapsEmbedUrl ? (
                <iframe
                  src={BUSINESS_CONFIG.googleMapsEmbedUrl}
                  title="AR Sports Islamabad Google Map Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-brand-alt">
                  <MapPin className="w-8 h-8 text-brand-green mb-2" />
                  <p className="text-xs text-brand-text font-semibold">{BUSINESS_CONFIG.locationDisplay}</p>
                </div>
              )}
            </div>

            {/* "GET DIRECTIONS" & INQUIRE BUTTONS */}
            <div className="pt-1 flex flex-col sm:flex-row items-center gap-2">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-white hover:bg-brand-alt text-brand-text border border-brand-border flex items-center justify-center gap-2 transition-all hover:border-brand-green/40 cursor-pointer shadow-2xs"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-green" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 text-brand-muted" />
              </a>

              <button
                onClick={handleWhatsAppHelp}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-brand-green hover:bg-brand-hover text-white flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Inquire Location</span>
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & NOTICE */}
        <div className="mt-12 pt-8 border-t border-brand-border text-xs text-brand-muted flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p>
            &copy; {currentYear} <strong className="text-brand-text">AR SPORTS ISLAMABAD</strong>. All rights reserved. 
            Main Car Chowk,Near Allied Bank Rawalpindi,Pakistan.
          </p>
          <div className="flex items-center justify-center gap-4 text-brand-muted">
            <span>Direct WhatsApp Quotation</span>
            <span>•</span>
            <span>100% Permanent Sublimation</span>
            <span>•</span>
            <span>Nationwide Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
