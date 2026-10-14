import React, { useState } from 'react';
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
  // Functional Sport Category State on Homepage
  const [activeSportFilter, setActiveSportFilter] = useState('all');

  const featuredSportswear = PRODUCTS_DATA.filter(p => p.category === "Sportswear" && p.isFeatured).slice(0, 4);
  const featuredEquipment = PRODUCTS_DATA.filter(p => p.category === "Equipment").slice(0, 4);
  const teamKitsProducts = PRODUCTS_DATA.filter(p => p.type === "complete kit" || p.name.toLowerCase().includes("kit")).slice(0, 4);

  // Products dynamically filtered by the functional sport category tab
  const sportProducts = activeSportFilter === 'all'
    ? PRODUCTS_DATA.filter(p => p.isFeatured).slice(0, 4)
    : PRODUCTS_DATA.filter(p => p.sportSlug === activeSportFilter).slice(0, 4);

  const sportTabs = [
    { slug: 'all', name: 'All Sports' },
    { slug: 'cricket', name: 'Cricket' },
    { slug: 'football', name: 'Football' },
    { slug: 'basketball', name: 'Basketball' },
    { slug: 'badminton', name: 'Badminton' },
  ];

  const hubSpecialties = [
    { number: "01", name: "SUBLIMATION SPORTS KITS HUB", desc: "100% Digital permanent sublimation on micro-mesh and dry-fit performance fabric.", color: "from-emerald-500 to-teal-600", dot: "bg-neon-accent", badge: "Primary Hub", slug: "cricket" },
    { number: "02", name: "CRICKET KITS & JERSEYS", desc: "Custom colored tournament kits, test whites, trousers, English willow bats & pads.", color: "from-dark-800 to-dark-700", dot: "bg-slate-400", badge: "Trending", slug: "cricket" },
    { number: "03", name: "FOOTBALL KITS & JERSEYS", desc: "Aerodynamic match jerseys, shorts, team socks, goalkeeper sets & FIFA balls.", color: "from-blue-600 to-sky-600", dot: "bg-purple-500", badge: "Match Day", slug: "football" },
    { number: "04", name: "BASKETBALL & VOLLEYBALL KITS", desc: "Reversible pro mesh jerseys, stretch shorts, club crests & tournament balls.", color: "from-cyan-600 to-teal-700", dot: "bg-amber-500", badge: "Pro Cuts", slug: "basketball" },
    { number: "05", name: "BADMINTON & HOCKEY KITS", desc: "Ultra-lightweight moisture-wicking jerseys, carbon graphite rackets, sticks & bags.", color: "from-dark-750 to-dark-700", dot: "bg-yellow-400", badge: "Tour Grade", slug: "badminton" },
  ];

  const handleHubWhatsApp = (catName) => {
    openWhatsAppChat(`Assalam-o-Alaikum AR Sports Islamabad! I want to inquire about: ${catName}. Please provide available designs, turnaround time, and pricing.`);
  };

  return (
    <div className="space-y-0 bg-dark-950 text-slate-100">
      
      {/* 1. HERO SECTION WITH AR SPORTS ISLAMABAD BRANDING */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-dark-950 py-16 lg:py-24">
        {/* Background sports photography with deep charcoal/black gradient overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=2000&q=80"
            alt="Sportswear Athletes in Motion"
            className="w-full h-full object-cover object-center opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/85 to-dark-950/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 text-center sm:text-left flex flex-col items-center sm:items-start justify-center">
              
              {/* City & Sublimation Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-dark-850 text-white border border-dark-700">
                  <Flame className="w-3.5 h-3.5 text-red-500 fill-current" />
                  <span>AR SPORTS ISLAMABAD</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-dark-900 text-neon-400 border border-neon-500/30">
                  <span className="w-2 h-2 rounded-full bg-neon-accent animate-pulse" />
                  <span>Sublimation Sports Kits Hub</span>
                </span>
              </div>

              <h1 className="font-teko text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-wider leading-[0.92] max-w-3xl uppercase">
                YOUR TEAM. <br className="hidden sm:inline" />
                YOUR DESIGN. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-neon-400">
                  YOUR IDENTITY.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mt-5 leading-relaxed font-normal">
                Rawalpindi & Islamabad's custom sportswear manufacturer. We engineer tournament-grade sublimated match jerseys, complete squad kits, school uniforms, and sports equipment built to endure.
              </p>

              {/* Physical Store Location Quick Pill */}
              <div className="mt-5 p-3 rounded-2xl bg-dark-900/90 border border-dark-800 flex items-center gap-3 text-xs text-slate-300 max-w-lg shadow-lg">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                <div className="flex-1 text-left">
                  <span className="text-white font-bold block">Visit Our Store in Rawalpindi / Islamabad:</span>
                  <span className="text-slate-400">Jmal Plaza, Shop# 3, High Court Road, Near Car Chowk</span>
                </div>
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-dark-800 text-neon-400 hover:bg-neon-500 hover:text-black font-bold flex items-center gap-1 transition-colors border border-dark-700"
                >
                  <span>Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* REQUIRED CTAS: Explore Products & Customize Your Jersey */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 w-full sm:w-auto">
                <Link
                  to="/shop"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-sm bg-neon-500 hover:bg-neon-400 text-black shadow-xl shadow-neon-500/20 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/custom-design"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-dark-900 hover:bg-dark-800 text-white border border-dark-700 flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Sparkles className="w-4 h-4 text-neon-400" />
                  <span>Customize Your Jersey</span>
                </Link>
              </div>

            </div>

            {/* Right: AR Sports Islamabad 3D Brand Emblem Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-gradient-to-br from-dark-900 via-dark-850 to-dark-900 border border-dark-700 rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center">
                
                {/* 3D Brand Logo */}
                <div className="relative p-5 rounded-2xl bg-dark-950/80 border border-dark-700/80 mb-6 backdrop-blur-sm shadow-inner">
                  <img
                    src="/brand/logo.png"
                    alt="AR Sports Islamabad Logo"
                    className="w-52 h-auto object-contain mx-auto drop-shadow-2xl hover:scale-105 transition-transform"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-teko text-3xl font-black text-white tracking-wider">
                    AR SPORTS ISLAMABAD
                  </h3>
                  <p className="text-xs text-neon-400 font-bold uppercase tracking-widest">
                    Sublimation Sports Kits Hub
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    Official custom sportswear supplier for clubs, colleges, school tournaments & sports leagues.
                  </p>
                </div>

                {/* Direct Store Numbers */}
                <div className="w-full mt-6 pt-5 border-t border-dark-800 grid grid-cols-2 gap-2 text-left">
                  <div className="p-3 rounded-xl bg-dark-950 border border-dark-800">
                    <span className="text-[10px] text-slate-400 block font-semibold">Call & Inquiries</span>
                    <span className="text-xs font-bold text-white block truncate">{BUSINESS_CONFIG.callingPhone}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-dark-950 border border-dark-800">
                    <span className="text-[10px] text-neon-400 block font-semibold">WhatsApp Orders</span>
                    <span className="text-xs font-bold text-white block truncate">{BUSINESS_CONFIG.whatsappPhoneDisplay}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. VALUE PILLARS STRIP */}
      <section className="bg-dark-900 border-y border-dark-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-dark-950 border border-dark-750 flex items-center justify-center text-neon-400 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">100% Sublimation</h4>
                <p className="text-[11px] text-slate-400">Zero peeling or cracking</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-dark-950 border border-dark-750 flex items-center justify-center text-neon-400 flex-shrink-0">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Custom Rosters</h4>
                <p className="text-[11px] text-slate-400">Any name, number & crest</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-dark-950 border border-dark-750 flex items-center justify-center text-neon-400 flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Factory Direct</h4>
                <p className="text-[11px] text-slate-400">Club & school bulk rates</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-dark-950 border border-dark-750 flex items-center justify-center text-neon-400 flex-shrink-0">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">WhatsApp Proofing</h4>
                <p className="text-[11px] text-slate-400">3D review before print</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FUNCTIONAL SPORT CATEGORIES SHOWCASE (Requirement 3) */}
      <section className="py-20 bg-dark-950 border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neon-400">
                Select Your Sport
              </span>
              <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white tracking-wide mt-1">
                SHOP BY SPORT CATEGORIES
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Choose a sport below to view dedicated performance sportswear, custom match uniforms, and professional gear.
              </p>
            </div>

            <Link
              to={`/shop?sport=${activeSportFilter}`}
              className="text-xs font-bold text-neon-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>View Full {activeSportFilter === 'all' ? 'Sports' : activeSportFilter.toUpperCase()} Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Interactive Sport Tabs: Cricket, Football, Basketball, Badminton, All Sports */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {sportTabs.map((tab) => {
              const isActive = activeSportFilter === tab.slug;
              return (
                <button
                  key={tab.slug}
                  onClick={() => setActiveSportFilter(tab.slug)}
                  className={`px-5 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-neon-500 text-black shadow-lg shadow-neon-500/20 scale-105'
                      : 'bg-dark-900 text-slate-300 hover:text-white hover:bg-dark-850 border border-dark-800'
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Dynamically Filtered Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. DEDICATED "SUBLIMATION SPORTS KITS HUB" SPECIALTY TILES */}
      <section className="py-20 bg-dark-900 border-b border-dark-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-neon-accent animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-neon-400">
                  Sublimation Specialties • Full Customization
                </span>
              </div>
              <h2 className="font-teko text-4xl sm:text-5xl font-black text-white tracking-wide mt-1">
                AR SPORTS ISLAMABAD — KITS HUB
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
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-dark-800 hover:bg-dark-750 text-slate-200 border border-dark-700 flex items-center gap-1.5 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Visit Store</span>
              </a>
            </div>
          </div>

          {/* 5 Specialty Category Banners */}
          <div className="space-y-4">
            {hubSpecialties.map((item) => (
              <div
                key={item.number}
                className="bg-dark-950 border border-dark-800 hover:border-dark-700 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300 group hover:shadow-xl"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                  {/* Number Badge */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center font-teko text-2xl font-bold text-white shadow-lg flex-shrink-0 relative`}>
                    <span className={`w-3 h-3 rounded-full ${item.dot} absolute -top-1 -right-1 border-2 border-dark-950`} />
                    {item.number}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-teko text-2xl sm:text-3xl font-bold text-white group-hover:text-neon-400 transition-colors">
                        {item.name}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-dark-850 text-neon-400 border border-neon-500/30 uppercase tracking-wider">
                        Available
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2.5 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-0 border-dark-800">
                  <Link
                    to={`/custom-design?sport=${item.slug}`}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-dark-900 hover:bg-dark-800 text-slate-300 border border-dark-700 flex items-center gap-1.5 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-neon-400" />
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

      {/* 5. FEATURED PRODUCTS (FEATURED SPORTSWEAR) */}
      <section className="py-20 bg-dark-950 border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neon-400">
                Top Rated Gear
              </span>
              <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white tracking-wide mt-1">
                FEATURED PRODUCTS
              </h2>
            </div>
            <Link
              to="/shop?category=Sportswear"
              className="text-xs font-bold text-neon-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Explore All Products</span>
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

      {/* 6. CUSTOM TEAM KITS SECTION (Requirement 7) */}
      <section className="py-20 bg-dark-900 border-b border-dark-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-dark-950 via-dark-850 to-dark-950 border border-dark-700 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-neon-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-dark-900 text-neon-400 border border-neon-500/30">
                  <Palette className="w-3.5 h-3.5" /> Complete Match Kit Packages
                </span>
                <h2 className="font-teko text-4xl sm:text-6xl font-black text-white tracking-wide leading-none">
                  CUSTOM TEAM KITS & SQUAD UNIFORMS
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Outfit your full squad in unified colors with player names, squad numbers, team crests, and sponsor prints. Packages include custom sublimated match jerseys, athletic shorts/trousers, and matching socks.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-neon-400" />
                    <span>Free digital 3D proof before printing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-neon-400" />
                    <span>Custom collar styles & athletic cuts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-neon-400" />
                    <span>Youth & adult roster sizes (XS to 3XL)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-neon-400" />
                    <span>Direct WhatsApp quotation & fast delivery</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    to="/custom-design"
                    className="px-8 py-3.5 rounded-xl font-extrabold text-sm bg-neon-500 hover:bg-neon-400 text-black shadow-lg shadow-neon-500/20 flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Customize Your Kit</span>
                  </Link>
                  <Link
                    to="/school-teamwear"
                    className="px-6 py-3.5 rounded-xl font-bold text-sm bg-dark-850 hover:bg-dark-800 text-slate-200 border border-dark-700 transition-colors"
                  >
                    <span>Bulk School & Team Orders</span>
                  </Link>
                </div>
              </div>

              {/* Garment Preview graphic card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm rounded-2xl bg-dark-950 border border-dark-750 p-6 shadow-2xl flex flex-col items-center">
                  <div className="w-full flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-dark-800">
                    <span>COMPLETE SQUAD KIT</span>
                    <span className="text-neon-400 font-bold">100% SUBLIMATION</span>
                  </div>
                  
                  <img
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80"
                    alt="Custom Sportswear Preview"
                    className="w-full h-56 object-cover rounded-xl my-4 border border-dark-800"
                  />

                  <div className="w-full text-center">
                    <p className="font-teko text-2xl font-bold text-white tracking-wide">
                      JERSEY + SHORTS + SOCKS
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Technical dry-fit mesh engineered for hot tournament conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SPORTS EQUIPMENT SECTION (Requirement 7) */}
      <section className="py-20 bg-dark-950 border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neon-400">
                Tournament Grade Equipment
              </span>
              <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white tracking-wide mt-1">
                SPORTS EQUIPMENT & MATCH GEAR
              </h2>
            </div>
            <Link
              to="/shop?category=Equipment"
              className="text-xs font-bold text-neon-400 hover:text-white flex items-center gap-1 transition-colors"
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

      {/* 8. WHY CHOOSE US (Requirement 7) */}
      <section className="py-20 bg-dark-900 border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-neon-400">
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
            <div className="bg-dark-950 border border-dark-800 rounded-2xl p-8 hover:border-neon-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-750 text-neon-400 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-teko text-2xl font-bold text-white tracking-wide mb-2">
                100% PERMANENT SUBLIMATION
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Colors and designs are heat-infused directly into the textile fibers. No fading, peeling numbers, or rubbery crackling after rigorous matches and washing.
              </p>
            </div>

            <div className="bg-dark-950 border border-dark-800 rounded-2xl p-8 hover:border-neon-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-750 text-neon-400 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-teko text-2xl font-bold text-white tracking-wide mb-2">
                FACTORY DIRECT VALUE
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct manufacturing eliminates middleman markups. Inquire through WhatsApp to obtain genuine factory pricing tailored to your squad size and fabric weight.
              </p>
            </div>

            <div className="bg-dark-950 border border-dark-800 rounded-2xl p-8 hover:border-neon-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-750 text-neon-400 flex items-center justify-center mb-6">
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

      {/* 9. CONTACT INFORMATION & SHOWROOM (Requirement 7 & 8) */}
      <section className="py-20 bg-dark-950 border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-dark-700/80 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-dark-950 text-white border border-dark-700">
                  <MapPin className="w-3.5 h-3.5 text-red-500" /> Physical Store & Showroom
                </span>
                
                <h2 className="font-teko text-3xl sm:text-5xl font-black text-white tracking-wide">
                  VISIT AR SPORTS ISLAMABAD SHOWROOM
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Located conveniently on High Court Road near Car Chowk, Rawalpindi. Inspect fabric samples in person, try on jersey fits, review sublimation swatches, and consult directly on bulk school and club orders.
                </p>

                <div className="space-y-2 text-xs text-slate-300 pt-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Address:</strong> {BUSINESS_CONFIG.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-neon-400 flex-shrink-0" />
                    <span><strong>Calling Phone:</strong> {BUSINESS_CONFIG.callingPhone} | <strong>WhatsApp:</strong> {BUSINESS_CONFIG.whatsappPhoneDisplay}</span>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap gap-3">
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-dark-800 hover:bg-dark-750 text-white flex items-center gap-2 border border-dark-700 transition-transform hover:scale-105"
                  >
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
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
                  className="block relative rounded-2xl overflow-hidden border border-dark-700 bg-dark-950 group shadow-2xl aspect-[4/3]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                    alt="AR Sports Location Map"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-2xl mb-3 group-hover:scale-110 transition-transform">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <span className="font-teko text-2xl font-bold text-white tracking-wide">
                      VIEW STORE ON GOOGLE MAPS
                    </span>
                    <span className="text-xs text-neon-400 font-semibold mt-1 flex items-center gap-1">
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

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <FAQSection />

    </div>
  );
}
