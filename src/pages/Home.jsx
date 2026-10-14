import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, ShieldCheck, Zap, 
  Truck, CheckCircle, Palette, MessageSquare, 
  Users, Trophy, Flame, ChevronRight, MapPin, Phone, ExternalLink 
} from 'lucide-react';
import { SPORTS_CATEGORIES, PRODUCTS_DATA } from '../data/productsData';
import { BUSINESS_CONFIG, openWhatsAppChat } from '../config/businessConfig';
import ProductCard from '../components/ProductCard';
import FAQSection from '../components/FAQSection';

export default function Home() {
  const featuredSportswear = PRODUCTS_DATA.filter(p => p.category === "Sportswear" && p.isFeatured).slice(0, 4);
  const featuredEquipment = PRODUCTS_DATA.filter(p => p.category === "Equipment").slice(0, 4);
  const schoolTeamwearProducts = PRODUCTS_DATA.filter(p => p.category === "School & Teamwear" || p.sportSlug === "school-teamwear");

  const hubCategories = [
    { number: "01", name: "SUBLIMATION SPORTS KITS HUB", desc: "100% Digital permanent sublimation on micro-mesh and dry-fit performance fabric.", color: "from-emerald-500 to-teal-600", dot: "bg-brand-red", badge: "Primary Hub", slug: "cricket" },
    { number: "02", name: "CRICKET KITS & JERSEYS", desc: "Custom colored tournament kits, test whites, trousers, English willow bats & pads.", color: "from-slate-700 to-slate-800", dot: "bg-slate-400", badge: "Trending", slug: "cricket" },
    { number: "03", name: "FOOTBALL KITS & JERSEYS", desc: "Aerodynamic match jerseys, shorts, team socks, goalkeeper sets & FIFA balls.", color: "from-blue-600 to-sky-600", dot: "bg-purple-500", badge: "Match Day", slug: "football" },
    { number: "04", name: "VOLLEYBALL KITS & JERSEYS", desc: "Sleeveless athletic tops, stretch shorts, club crests & tournament volleyballs.", color: "from-cyan-600 to-teal-700", dot: "bg-amber-500", badge: "Custom Cuts", slug: "volleyball" },
    { number: "05", name: "BADMINTON & HOCKEY KITS", desc: "Lightweight moisture-wicking jerseys, carbon graphite rackets, sticks & bags.", color: "from-slate-600 to-slate-700", dot: "bg-yellow-400", badge: "Tour Grade", slug: "badminton" },
  ];

  const handleHubWhatsApp = (catName) => {
    openWhatsAppChat(`Assalam-o-Alaikum AR Sports Islamabad! I want to inquire about: ${catName}. Please provide available designs and pricing.`);
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION WITH AR SPORTS ISLAMABAD BRANDING */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy-950 py-20">
        {/* Background sports photography with gradient overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=2000&q=80"
            alt="Athletes in motion"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 text-center sm:text-left flex flex-col items-center sm:items-start justify-center">
              
              {/* City & Sublimation Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-red/20 text-brand-red border border-brand-red/30">
                  <Flame className="w-4 h-4 text-brand-red fill-current" />
                  <span>AR SPORTS ISLAMABAD</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <Sparkles className="w-3.5 h-3.5" /> Sublimation Sports Kits Hub
                </span>
              </div>

              <h1 className="font-teko text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-wider leading-[0.95] max-w-3xl uppercase">
                YOUR TEAM. <br className="hidden sm:inline" />
                YOUR DESIGN. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-electric-400">
                  YOUR IDENTITY.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mt-6 leading-relaxed">
                Custom sportswear, team kits, school uniforms and tournament sports equipment. Engineered with breathable technical fabrics and vivid permanent digital sublimation.
              </p>

              {/* Physical Store Location Quick Pill */}
              <div className="mt-5 p-3 rounded-2xl bg-navy-900/80 border border-navy-700/80 flex items-center gap-3 text-xs text-slate-300 max-w-lg">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0" />
                <div className="flex-1 text-left">
                  <span className="text-white font-bold block">Visit Our Store in Rawalpindi/Islamabad:</span>
                  <span className="text-slate-400">Jmal Plaza, Shop# 3, High Court Road, Near Car Chowk</span>
                </div>
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-electric-500/20 text-electric-400 hover:bg-electric-500 hover:text-white font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 w-full sm:w-auto">
                <Link
                  to="/shop"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-400 hover:to-electric-500 text-white shadow-xl shadow-electric-950/40 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Explore Sports</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/custom-design"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-navy-800/90 hover:bg-navy-700 text-white border border-slate-700 flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Sparkles className="w-4 h-4 text-electric-400" />
                  <span>Create Your Kit</span>
                </Link>
              </div>

            </div>

            {/* Right: AR Sports Islamabad 3D Brand Emblem Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-gradient-to-br from-navy-900/90 via-navy-850 to-navy-950 border border-navy-700/80 rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center">
                
                {/* 3D Brand Logo */}
                <div className="relative p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                  <img
                    src="/brand/logo.png"
                    alt="AR Sports Islamabad 3D Logo"
                    className="w-56 h-auto object-contain mx-auto drop-shadow-2xl hover:scale-105 transition-transform"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-teko text-3xl font-black text-white tracking-wider">
                    AR SPORTS ISLAMABAD
                  </h3>
                  <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest">
                    Sublimation Sports Kits Hub
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    Official custom sportswear supplier for clubs, colleges, school tournaments & sports leagues.
                  </p>
                </div>

                {/* Direct Store Numbers */}
                <div className="w-full mt-6 pt-5 border-t border-navy-800 grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl bg-navy-950/80 border border-navy-800">
                    <span className="text-[10px] text-slate-400 block font-semibold">Call & Inquiries</span>
                    <span className="text-xs font-bold text-white block">{BUSINESS_CONFIG.callingPhone}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-navy-950/80 border border-navy-800">
                    <span className="text-[10px] text-emerald-400 block font-semibold">WhatsApp Orders</span>
                    <span className="text-xs font-bold text-white block">{BUSINESS_CONFIG.whatsappPhoneDisplay}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DEDICATED "SUBLIMATION SPORTS KITS HUB" SECTION (From user banner) */}
      <section className="py-20 bg-navy-900 border-t border-navy-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Featured Specialties • Available Now
                </span>
              </div>
              <h2 className="font-teko text-4xl sm:text-5xl font-black text-white tracking-wide mt-1">
                AR SPORTS ISLAMABAD — SPORTS KITS HUB
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl mt-1">
                Every kit is custom made in your club colors with player names, numbers, school logos & sponsor prints.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-navy-800 hover:bg-navy-700 text-slate-200 border border-navy-700 flex items-center gap-1.5 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-red" />
                <span>Visit Store</span>
              </a>
            </div>
          </div>

          {/* 5 Specialty Category Banners matching user uploaded flyer */}
          <div className="space-y-4">
            {hubCategories.map((item) => (
              <div
                key={item.number}
                className="bg-navy-950 border border-navy-800 hover:border-navy-700 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300 group hover:shadow-xl"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                  {/* Number Badge */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center font-teko text-2xl font-bold text-white shadow-lg flex-shrink-0 relative`}>
                    <span className={`w-3 h-3 rounded-full ${item.dot} absolute -top-1 -right-1 border-2 border-navy-950`} />
                    {item.number}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-teko text-2xl sm:text-3xl font-bold text-white group-hover:text-electric-400 transition-colors">
                        {item.name}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                        Available
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2.5 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-0 border-navy-800/80">
                  <Link
                    to={`/custom-design?sport=${item.slug}`}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-navy-900 hover:bg-navy-800 text-slate-300 border border-navy-700 flex items-center gap-1.5 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-electric-400" />
                    <span>Customize</span>
                  </Link>

                  <button
                    onClick={() => handleHubWhatsApp(item.name)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 shadow-md shadow-emerald-950 transition-all hover:scale-105"
                  >
                    <Phone className="w-3.5 h-3.5 fill-current" />
                    <span>Inquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SHOP BY SPORT SECTION */}
      <section className="py-20 bg-navy-950 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-electric-400">
                Browse By Discipline
              </span>
              <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white tracking-wide mt-1">
                SHOP BY SPORT
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-xs font-bold text-electric-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>View All Categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPORTS_CATEGORIES.slice(0, 8).map((sport) => (
              <Link
                key={sport.id}
                to={`/shop?sport=${sport.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-navy-900 border border-navy-800 hover:border-electric-500/50 shadow-xl transition-all duration-300 flex flex-col justify-end p-6"
              >
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
                
                <div className="relative z-10">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-electric-500/30 text-electric-300 border border-electric-500/40 mb-2">
                    {sport.equipmentCount}
                  </span>
                  <h3 className="font-teko text-3xl font-bold text-white group-hover:text-electric-400 transition-colors">
                    {sport.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                    {sport.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:text-electric-400 transition-colors">
                    <span>Explore gear</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CUSTOM DESIGN PROMOTIONAL SECTION */}
      <section className="py-20 bg-navy-900 border-t border-navy-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy-950 via-navy-850 to-navy-950 border border-navy-700 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-electric-500/20 text-electric-400 border border-electric-500/30">
                  <Palette className="w-3.5 h-3.5" /> Interactive Design Experience
                </span>
                <h2 className="font-teko text-4xl sm:text-6xl font-bold text-white tracking-wide leading-none">
                  CUSTOMIZE YOUR TEAM’S APPAREL IN MINUTES
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Choose your team colors, digital patterns, collar styles, and add your sponsor crest. Real-time garment visualizer allows you to preview front and back before inquiring for direct factory quotes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Free digital 3D proof before printing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Any name, squad number & sponsor logo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Adult & youth squad size rosters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Direct WhatsApp quotation</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    to="/custom-design"
                    className="px-8 py-3.5 rounded-xl font-bold text-sm bg-electric-500 hover:bg-electric-600 text-white shadow-lg shadow-electric-900/40 flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Open Custom Designer</span>
                  </Link>
                  <Link
                    to="/school-teamwear"
                    className="px-6 py-3.5 rounded-xl font-bold text-sm bg-navy-950 hover:bg-navy-900 text-slate-200 border border-navy-700 transition-colors"
                  >
                    <span>Bulk School & Team Orders</span>
                  </Link>
                </div>
              </div>

              {/* Garment Preview graphic card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm rounded-2xl bg-navy-950 border border-navy-700 p-6 shadow-2xl flex flex-col items-center">
                  <div className="w-full flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-navy-800">
                    <span>LIVE DIGITAL MOCKUP</span>
                    <span className="text-emerald-400 font-bold">100% SUBLIMATION</span>
                  </div>
                  
                  <img
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80"
                    alt="Custom Sportswear Preview"
                    className="w-full h-56 object-cover rounded-xl my-4 border border-navy-800"
                  />

                  <div className="w-full text-center">
                    <p className="font-teko text-2xl font-bold text-white tracking-wide">
                      SUB-ZERO PRO CRICKET & FOOTBALL KITS
                    </p>
                    <p className="text-[11px] text-slate-400">
                      High-stretch, breathable mesh fabric engineered for peak athletic comfort.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FEATURED SPORTSWEAR SECTION */}
      <section className="py-20 bg-navy-950 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-electric-400">
                Premium Performance Apparel
              </span>
              <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white tracking-wide mt-1">
                FEATURED SPORTSWEAR
              </h2>
            </div>
            <Link
              to="/shop?category=Sportswear"
              className="text-xs font-bold text-electric-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Explore All Sportswear</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSportswear.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. SPORTS EQUIPMENT SECTION */}
      <section className="py-20 bg-navy-900 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Tournament Grade Equipment
              </span>
              <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white tracking-wide mt-1">
                SPORTS GEAR & MATCH EQUIPMENT
              </h2>
            </div>
            <Link
              to="/shop?category=Equipment"
              className="text-xs font-bold text-electric-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>View All Equipment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEquipment.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. SCHOOL & TEAMWEAR SECTION */}
      <section className="py-20 bg-navy-950 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-electric-400">
                Bulk School & Academy Specialists
              </span>
              <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white tracking-wide mt-1">
                SCHOOL & SQUAD TEAMWEAR
              </h2>
            </div>
            <Link
              to="/school-teamwear"
              className="text-xs font-bold text-electric-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Build Bulk Roster</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {schoolTeamwearProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. PHYSICAL STORE LOCATION & GOOGLE MAPS SHOWCASE */}
      <section className="py-20 bg-navy-900 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy-950 via-navy-850 to-navy-950 border border-navy-700/80 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-red/20 text-brand-red border border-brand-red/30">
                  <MapPin className="w-3.5 h-3.5" /> Physical Store & Showroom
                </span>
                
                <h2 className="font-teko text-3xl sm:text-5xl font-black text-white tracking-wide">
                  VISIT AR SPORTS ISLAMABAD SHOWROOM
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Located conveniently on High Court Road near Car Chowk, Rawalpindi. Inspect fabric samples in person, try on jersey fits, review sublimation swatches, and consult directly on bulk school and club orders.
                </p>

                <div className="space-y-2 text-xs text-slate-300 pt-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                    <span><strong>Address:</strong> {BUSINESS_CONFIG.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>Calling Phone:</strong> {BUSINESS_CONFIG.callingPhone} | <strong>WhatsApp:</strong> {BUSINESS_CONFIG.whatsappPhoneDisplay}</span>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap gap-3">
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-electric-500 hover:bg-electric-600 text-white flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => openWhatsAppChat("Assalam-o-Alaikum! I want to visit the AR SPORTS Islamabad showroom on High Court Road. Please confirm store timings.")}
                    className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Confirm Timing on WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Map Illustration card */}
              <div className="lg:col-span-5">
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-2xl overflow-hidden border border-navy-700 bg-navy-950 group shadow-2xl aspect-[4/3]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                    alt="Map view placeholder"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-brand-red text-white flex items-center justify-center shadow-2xl mb-3 group-hover:scale-110 transition-transform">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <span className="font-teko text-2xl font-bold text-white tracking-wide">
                      VIEW STORE ON GOOGLE MAPS
                    </span>
                    <span className="text-xs text-electric-400 font-semibold mt-1 flex items-center gap-1">
                      <span>Jmal Plaza, Shop# 3, Rawalpindi</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 9. WHY CHOOSE AR SPORTS */}
      <section className="py-20 bg-navy-950 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-electric-400">
              The AR Standard
            </span>
            <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white tracking-wide mt-1">
              WHY ATHLETES & TEAMS CHOOSE AR SPORTS
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Combining technical moisture-wicking textiles, high-precision digital sublimation, and tailored squad numbering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-navy-900 border border-navy-800 rounded-2xl p-8 hover:border-electric-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-electric-500/20 text-electric-400 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-teko text-2xl font-bold text-white tracking-wide mb-2">
                100% PERMANENT SUBLIMATION
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Colors and designs are heat-infused directly into the textile fibers. No fading, peeling numbers, or rubbery crackling after rigorous matches and washing.
              </p>
            </div>

            <div className="bg-navy-900 border border-navy-800 rounded-2xl p-8 hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-teko text-2xl font-bold text-white tracking-wide mb-2">
                FACTORY DIRECT VALUE
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct manufacturing eliminates middleman markups. Inquire through WhatsApp to obtain genuine factory pricing tailored to your squad size and fabric weight.
              </p>
            </div>

            <div className="bg-navy-900 border border-navy-800 rounded-2xl p-8 hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-teko text-2xl font-bold text-white tracking-wide mb-2">
                INDIVIDUAL SQUAD ROSTERS
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every member gets their precise fit. Enter your roster of names, numbers, and sizes effortlessly, and receive personalized uniforms designed for champions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. HOW ORDERING WORKS */}
      <section className="py-20 bg-navy-900 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-electric-400">
              Simple 3-Step Process
            </span>
            <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white tracking-wide mt-1">
              HOW ORDERING WORKS
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              From choosing your gear to on-field delivery, our direct WhatsApp consultation ensures 100% accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="bg-navy-950 border border-navy-800 rounded-2xl p-8 relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-electric-500 text-white font-teko text-2xl font-bold flex items-center justify-center mb-6 shadow-lg shadow-electric-500/30">
                1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Select or Customize</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Browse our sports equipment catalog or enter the Custom Design Studio to personalize colors, patterns, and roster details.
              </p>
            </div>

            <div className="bg-navy-950 border border-navy-800 rounded-2xl p-8 relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white font-teko text-2xl font-bold flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Connect on WhatsApp</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Click "Place Order on WhatsApp". Your selections are automatically converted into a structured message with our official number <strong>{BUSINESS_CONFIG.whatsappPhoneDisplay}</strong>.
              </p>
            </div>

            <div className="bg-navy-950 border border-navy-800 rounded-2xl p-8 relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-brand-red text-white font-teko text-2xl font-bold flex items-center justify-center mb-6 shadow-lg shadow-red-500/30">
                3
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Quote & Fast Delivery</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We review your order, share digital mockup proofs, finalize the transparent pricing and delivery timeframe, and initiate swift manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FREQUENTLY ASKED QUESTIONS */}
      <FAQSection />

    </div>
  );
}
