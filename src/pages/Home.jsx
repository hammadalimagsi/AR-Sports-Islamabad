import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, ShieldCheck, Zap, 
  Truck, CheckCircle2, Palette, MessageSquare, 
  Users, Trophy, Flame, ChevronRight, MapPin, Phone, ExternalLink 
} from 'lucide-react';
import { SPORTS_CATEGORIES, PRODUCTS_DATA } from '../data/productsData';
import { BUSINESS_CONFIG, openWhatsAppChat } from '../config/businessConfig';
import ProductCard from '../components/ProductCard';
import FAQSection from '../components/FAQSection';

export default function Home() {
  const [activeSportFilter, setActiveSportFilter] = useState('all');
  const navigate = useNavigate();

  // Scroll to section when URL contains hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 120);
      }
    }
  }, []);

  const featuredSportswear = PRODUCTS_DATA.filter(p => p.category === "Sportswear" && p.isFeatured).slice(0, 8);
  const featuredEquipment = PRODUCTS_DATA.filter(p => p.category === "Equipment").slice(0, 4);

  // Products dynamically filtered by the functional sport category tab
  const sportProducts = activeSportFilter === 'all'
    ? PRODUCTS_DATA.filter(p => p.isFeatured).slice(0, 8)
    : PRODUCTS_DATA.filter(p => p.sportSlug === activeSportFilter).slice(0, 8);

  const sportTabs = [
    { slug: 'all', name: 'All Sports' },
    { slug: 'cricket', name: 'Cricket' },
    { slug: 'football', name: 'Football' },
    { slug: 'volleyball', name: 'Volleyball' },
    { slug: 'badminton', name: 'Badminton & Hockey' },
    { slug: 'gym-fitness', name: 'Shirts & Training' },
    { slug: 'other-sports', name: 'Accessories & Socks' },
  ];

  // 5 Verified Sports Categories corresponding directly to the AR Sports Islamabad banner
  const primaryCategories = [
    {
      id: "sublimation",
      number: "01",
      name: "Sublimation Sports Kits",
      desc: "All-over permanent digital dye sublimation on dry-fit micro-mesh. Zero peeling or cracking.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
      sportSlug: "all",
      badge: "Core Specialty"
    },
    {
      id: "cricket",
      number: "02",
      name: "Cricket Kits & Jerseys",
      desc: "Coloured tournament kits, test whites, trousers, and custom player numbers.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
      sportSlug: "cricket",
      badge: "Popular"
    },
    {
      id: "football",
      number: "03",
      name: "Football Kits & Jerseys",
      desc: "Aerodynamic match jerseys, squad shorts, team socks & goalkeeper kits.",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
      sportSlug: "football",
      badge: "Match Wear"
    },
    {
      id: "volleyball",
      number: "04",
      name: "Volleyball Kits & Jerseys",
      desc: "Sleeveless and athletic-cut breathable team tops, shorts & pro balls.",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80",
      sportSlug: "volleyball",
      badge: "Athletic"
    },
    {
      id: "badminton",
      number: "05",
      name: "Badminton & Hockey Kits",
      desc: "Ultra-lightweight moisture-wicking shirts, turf apparel & carbon gear.",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
      sportSlug: "badminton",
      badge: "Lightweight"
    }
  ];

  const hubSpecialties = [
    { number: "01", name: "Sublimation Sports Kits Hub", desc: "100% digital permanent sublimation on micro-mesh and dry-fit performance fabric.", slug: "cricket" },
    { number: "02", name: "Cricket Kits & Jerseys", desc: "Custom colored tournament kits, test whites, trousers, English willow bats & pads.", slug: "cricket" },
    { number: "03", name: "Football Kits & Jerseys", desc: "Aerodynamic match jerseys, shorts, team socks, goalkeeper sets & FIFA balls.", slug: "football" },
    { number: "04", name: "Basketball & Volleyball Kits", desc: "Reversible pro mesh jerseys, stretch shorts, club crests & tournament balls.", slug: "volleyball" },
    { number: "05", name: "Badminton & Hockey Kits", desc: "Ultra-lightweight moisture-wicking jerseys, carbon graphite rackets, sticks & bags.", slug: "badminton" },
  ];

  const handleHubWhatsApp = (catName) => {
    openWhatsAppChat(`Assalam-o-Alaikum AR Sports Islamabad! I want to inquire about: ${catName}. Please provide available designs, turnaround time, and pricing.`);
  };

  const handleScrollToCategories = () => {
    const el = document.getElementById('sports-categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryCardClick = (cat) => {
    if (cat.sportSlug !== 'all') {
      setActiveSportFilter(cat.sportSlug);
    }
    const el = document.getElementById('category-products-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-brand-text">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-20 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headline, Value Proposition & CTAs */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-alt text-brand-text border border-brand-border">
                  <Flame className="w-3.5 h-3.5 text-red-500 fill-current" />
                  <span>AR Sports Islamabad</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-brand-green border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  <span>Sublimation Sports Kits Hub</span>
                </span>
              </div>

              {/* Bold Clean Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text leading-[1.15]">
                Custom Sportswear. <br className="hidden sm:inline" />
                Your Team. <br />
                <span className="text-brand-green">
                  Your Identity.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base lg:text-lg text-brand-muted max-w-xl mt-4 sm:mt-5 leading-relaxed font-normal">
                Rawalpindi & Islamabad's custom sportswear manufacturer. We engineer tournament-grade sublimated match jerseys, complete squad kits, school uniforms, and sports equipment built to endure.
              </p>

              {/* Physical Store Pill */}
              <div className="mt-6 p-3 sm:p-3.5 rounded-xl bg-brand-alt border border-brand-border flex items-center justify-between gap-3 text-xs text-brand-muted max-w-lg shadow-xs w-full">
                <div className="flex items-start gap-2.5 min-w-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="text-left min-w-0">
                    <span className="text-brand-text font-bold block truncate">Visit Store in Rawalpindi / Islamabad:</span>
                    <span className="text-brand-muted truncate block text-[11px] sm:text-xs">Jmal Plaza, Shop# 3, High Court Road</span>
                  </div>
                </div>
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-white text-brand-green hover:bg-brand-green hover:text-white font-bold flex items-center gap-1 transition-colors border border-brand-border shrink-0 text-xs shadow-2xs"
                >
                  <span>Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Two CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleScrollToCategories}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-brand-green hover:bg-brand-hover text-white shadow-md shadow-brand-green/20 flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Explore Sportswear</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/custom-design"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-brand-alt text-brand-text border border-brand-border flex items-center justify-center gap-2 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-brand-green" />
                  <span>Customize Your Kit</span>
                </Link>
              </div>

            </div>

            {/* Right Column: AR Sports Banner Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg rounded-2xl bg-white border border-brand-border p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-xl aspect-square w-full bg-brand-alt flex items-center justify-center">
                  <img
                    src="/brand/banner.png"
                    alt="AR Sports Islamabad - Sublimation Sports Kits Hub"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Subtle caption overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-between text-[11px] text-white">
                    <span className="font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                      Official Store Banner
                    </span>
                    <span className="text-slate-200 font-semibold">Rawalpindi / Islamabad</span>
                  </div>
                </div>

                {/* Direct Calling & WhatsApp Strip below Banner */}
                <div className="w-full mt-3 pt-3 border-t border-brand-border grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-lg bg-brand-alt border border-brand-border">
                    <span className="text-[10px] text-brand-muted block font-medium">Direct Inquiries</span>
                    <span className="text-xs font-bold text-brand-text block truncate">{BUSINESS_CONFIG.callingPhone}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-brand-alt border border-brand-border">
                    <span className="text-[10px] text-brand-green block font-semibold">WhatsApp Line</span>
                    <span className="text-xs font-bold text-brand-text block truncate">{BUSINESS_CONFIG.whatsappPhoneDisplay}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. VALUE PILLARS STRIP */}
      <section className="bg-brand-alt border-b border-brand-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-green shadow-xs shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-text uppercase tracking-wider">100% Sublimation</h4>
                <p className="text-[12px] text-brand-muted">Zero peeling or cracking</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-green shadow-xs shrink-0">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-text uppercase tracking-wider">Custom Rosters</h4>
                <p className="text-[12px] text-brand-muted">Any name, number & crest</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-green shadow-xs shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-text uppercase tracking-wider">Factory Direct</h4>
                <p className="text-[12px] text-brand-muted">Club & school bulk rates</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-green shadow-xs shrink-0">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-text uppercase tracking-wider">WhatsApp Proofing</h4>
                <p className="text-[12px] text-brand-muted">Direct review before print</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SPORTS CATEGORIES */}
      <section id="sports-categories" className="py-20 bg-white border-b border-brand-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                  Featured Sportswear Categories
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight mt-1.5">
                Sports Categories
              </h2>
              <p className="text-sm text-brand-muted mt-1.5 max-w-2xl leading-relaxed">
                Discover our specialized sportswear manufacturing categories. Each category features custom-tailored match kits, squad uniforms, and technical training wear.
              </p>
            </div>

            <Link
              to="/shop"
              className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-brand-alt hover:bg-emerald-50 text-brand-text hover:text-brand-green border border-brand-border flex items-center gap-1.5 transition-colors"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 5 CATEGORY CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">
            {primaryCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-brand-border hover:border-brand-green rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-green/5"
              >
                {/* Image container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-alt">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category Number Pill */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-brand-border text-brand-text text-xs font-extrabold flex items-center gap-1 shadow-xs">
                    <span className="text-brand-green">{cat.number}</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-brand-muted border border-brand-border uppercase shadow-xs">
                    {cat.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-green transition-colors leading-snug">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1.5 leading-relaxed line-clamp-2">
                      {cat.desc}
                    </p>
                  </div>

                  {/* Actions: Explore Products & Customize */}
                  <div className="mt-4 pt-3 border-t border-brand-border space-y-2">
                    <button
                      type="button"
                      onClick={() => handleCategoryCardClick(cat)}
                      className="w-full py-2.5 px-3 rounded-lg text-xs font-bold bg-brand-green hover:bg-brand-hover text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                    >
                      <span>Explore Products</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <Link
                      to={cat.id === 'sublimation' ? '/custom-design' : `/custom-design?sport=${cat.id}`}
                      className="w-full py-2 px-3 rounded-lg text-[11px] font-semibold text-brand-muted hover:text-brand-green hover:bg-brand-alt flex items-center justify-center gap-1 transition-colors"
                    >
                      <Sparkles className="w-3 h-3 text-brand-green" />
                      <span>Customize This Sport</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DYNAMIC ON-PAGE FILTER TABS AND PRODUCTS GRID */}
          <div id="category-products-grid" className="pt-8 border-t border-brand-border scroll-mt-24">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-brand-text">
                  Browse Products by Sport
                </h3>
                <p className="text-xs text-brand-muted mt-0.5">
                  Select any sport to filter featured sportswear inventory. All pricing is custom-quoted on WhatsApp.
                </p>
              </div>

              {/* Interactive Sport Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full sm:w-auto scrollbar-none">
                {sportTabs.map((tab) => {
                  const isActive = activeSportFilter === tab.slug;
                  return (
                    <button
                      key={tab.slug}
                      onClick={() => setActiveSportFilter(tab.slug)}
                      className={`px-4 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-brand-green text-white shadow-sm'
                          : 'bg-brand-alt text-brand-muted hover:text-brand-text hover:bg-emerald-50 border border-brand-border'
                      }`}
                    >
                      {tab.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamically Filtered Products Grid (No Fixed Prices) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sportProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. DEDICATED "SUBLIMATION SPORTS KITS HUB" SPECIALTY TILES */}
      <section className="py-20 bg-brand-alt border-b border-brand-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                  Sublimation Specialties • Full Customization
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight mt-1.5">
                AR Sports Islamabad — Kits Hub
              </h2>
              <p className="text-sm text-brand-muted max-w-xl mt-1.5">
                Every kit is custom made in your club colors with player names, numbers, school logos & sponsor prints.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-brand-alt text-brand-text border border-brand-border flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Visit Store</span>
              </a>
            </div>
          </div>

          {/* 5 Specialty Category Banners */}
          <div className="space-y-3.5">
            {hubSpecialties.map((item) => (
              <div
                key={item.number}
                className="bg-white border border-brand-border hover:border-brand-green rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300 group hover:shadow-md"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                  {/* Number Badge */}
                  <div className="w-12 h-12 rounded-xl bg-brand-alt border border-brand-border flex items-center justify-center text-lg font-extrabold text-brand-green shadow-xs shrink-0">
                    {item.number}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-brand-text group-hover:text-brand-green transition-colors">
                        {item.name}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-brand-green border border-emerald-200 uppercase tracking-wider">
                        Available
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-muted mt-1 max-w-2xl leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2.5 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-0 border-brand-border">
                  <Link
                    to={`/custom-design?sport=${item.slug}`}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-brand-alt hover:bg-emerald-50 text-brand-text border border-brand-border flex items-center gap-1.5 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-brand-green" />
                    <span>Customize</span>
                  </Link>

                  <button
                    onClick={() => handleHubWhatsApp(item.name)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-brand-green hover:bg-brand-hover text-white flex items-center gap-1.5 shadow-sm transition-all"
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
      <section className="py-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                Top Rated Gear
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight mt-1.5">
                Featured Sportswear
              </h2>
            </div>
            <Link
              to="/shop?category=Sportswear"
              className="text-xs font-bold text-brand-green hover:text-brand-hover flex items-center gap-1 transition-colors"
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

      {/* 6. CUSTOM TEAM KITS SECTION */}
      <section className="py-20 bg-brand-alt border-b border-brand-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-brand-border rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-lg">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-brand-green border border-emerald-200">
                  <Palette className="w-3.5 h-3.5" /> Complete Match Kit Packages
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text tracking-tight leading-tight">
                  Custom Team Kits & Squad Uniforms
                </h2>
                <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                  Outfit your full squad in unified colors with player names, squad numbers, team crests, and sponsor prints. Packages include custom sublimated match jerseys, athletic shorts/trousers, and matching socks.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-brand-text">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Free digital mockup proof before printing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Custom collar styles & athletic cuts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Youth & adult roster sizes (XS to 3XL)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Direct WhatsApp quotation & fast delivery</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    to="/custom-design"
                    className="px-7 py-3.5 rounded-xl font-bold text-sm bg-brand-green hover:bg-brand-hover text-white shadow-md shadow-brand-green/20 flex items-center gap-2 transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Customize Your Kit</span>
                  </Link>
                  <Link
                    to="/school-teamwear"
                    className="px-6 py-3.5 rounded-xl font-bold text-sm bg-brand-alt hover:bg-emerald-50 text-brand-text border border-brand-border transition-colors"
                  >
                    <span>Bulk School & Team Orders</span>
                  </Link>
                </div>
              </div>

              {/* Garment Preview graphic card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm rounded-2xl bg-brand-alt border border-brand-border p-6 shadow-sm flex flex-col items-center">
                  <div className="w-full flex items-center justify-between text-xs text-brand-muted pb-3 border-b border-brand-border">
                    <span className="font-semibold text-brand-text">Complete Squad Kit</span>
                    <span className="text-brand-green font-bold">100% Sublimation</span>
                  </div>
                  
                  <img
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80"
                    alt="Custom Sportswear Preview"
                    className="w-full h-56 object-cover rounded-xl my-4 border border-brand-border"
                  />

                  <div className="w-full text-center">
                    <p className="text-lg font-bold text-brand-text tracking-tight">
                      Jersey + Shorts + Socks
                    </p>
                    <p className="text-xs text-brand-muted mt-1">
                      Technical dry-fit mesh engineered for hot tournament conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SPORTS EQUIPMENT SECTION */}
      <section className="py-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                Tournament Grade Equipment
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight mt-1.5">
                Sports Equipment & Match Gear
              </h2>
            </div>
            <Link
              to="/shop?category=Equipment"
              className="text-xs font-bold text-brand-green hover:text-brand-hover flex items-center gap-1 transition-colors"
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

      {/* 8. WHY CHOOSE US */}
      <section className="py-20 bg-brand-alt border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              The AR Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight mt-1.5">
              Why Athletes & Teams Choose AR Sports
            </h2>
            <p className="text-sm text-brand-muted mt-2">
              Combining technical moisture-wicking textiles, high-precision digital sublimation, and tailored squad numbering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-brand-border rounded-2xl p-8 hover:border-brand-green transition-colors shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-brand-green flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-2">
                100% Permanent Sublimation
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Colors and designs are heat-infused directly into the textile fibers. No fading, peeling numbers, or rubbery crackling after rigorous matches and washing.
              </p>
            </div>

            <div className="bg-white border border-brand-border rounded-2xl p-8 hover:border-brand-green transition-colors shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-brand-green flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-2">
                Factory Direct Value
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Direct manufacturing eliminates middleman markups. Inquire through WhatsApp to obtain genuine factory pricing tailored to your squad size and fabric weight.
              </p>
            </div>

            <div className="bg-white border border-brand-border rounded-2xl p-8 hover:border-brand-green transition-colors shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-brand-green flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-2">
                Individual Squad Rosters
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Every member gets their precise fit. Enter your roster of names, numbers, and sizes effortlessly, and receive personalized uniforms designed for champions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONTACT INFORMATION & SHOWROOM */}
      <section className="py-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-alt border border-brand-border rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-brand-text border border-brand-border">
                  <MapPin className="w-3.5 h-3.5 text-red-500" /> Physical Store & Showroom
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight">
                  Visit AR Sports Islamabad Showroom
                </h2>

                <p className="text-sm text-brand-muted leading-relaxed">
                  Located conveniently on High Court Road near Car Chowk, Rawalpindi. Inspect fabric samples in person, try on jersey fits, review sublimation swatches, and consult directly on bulk school and club orders.
                </p>

                <div className="space-y-2 text-xs text-brand-muted pt-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong className="text-brand-text">Address:</strong> {BUSINESS_CONFIG.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-green shrink-0" />
                    <span><strong className="text-brand-text">Call:</strong> {BUSINESS_CONFIG.callingPhone} | <strong className="text-brand-text">WhatsApp:</strong> {BUSINESS_CONFIG.whatsappPhoneDisplay}</span>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap gap-3">
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-white hover:bg-brand-alt text-brand-text flex items-center gap-2 border border-brand-border transition-colors shadow-xs"
                  >
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => openWhatsAppChat("Assalam-o-Alaikum! I want to visit the AR SPORTS Islamabad showroom on High Court Road. Please confirm store timings.")}
                    className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-brand-green hover:bg-brand-hover text-white flex items-center gap-2 shadow-sm transition-all"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Confirm Timing on WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Map Illustration card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-brand-border bg-white shadow-sm aspect-[4/3] w-full">
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
                  <div className="absolute bottom-3 right-3">
                    <a
                      href={BUSINESS_CONFIG.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md text-brand-green hover:bg-brand-green hover:text-white border border-brand-border text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-red-500" />
                      <span>Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
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
