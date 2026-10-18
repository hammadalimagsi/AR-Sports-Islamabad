import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, MessageSquare, ArrowLeft, Phone, 
  ShieldCheck, CheckCircle2, ChevronRight, Filter, Layers 
} from 'lucide-react';
import { SPORTS_CATEGORIES, PRODUCTS_DATA } from '../data/productsData';
import { BUSINESS_CONFIG, openWhatsAppChat } from '../config/businessConfig';
import ProductCard from '../components/ProductCard';

export default function SportCategoryPage() {
  const { sportSlug } = useParams();
  const navigate = useNavigate();
  const [activeTypeFilter, setActiveTypeFilter] = useState('all');

  // Find sport category meta
  const currentSport = useMemo(() => {
    return SPORTS_CATEGORIES.find(c => c.slug === sportSlug) || null;
  }, [sportSlug]);

  // Filter products strictly belonging to this sport
  const sportProducts = useMemo(() => {
    if (!currentSport) return [];
    return PRODUCTS_DATA.filter(p => p.sportSlug === currentSport.slug);
  }, [currentSport]);

  // Filtered by subcategory if applicable
  const displayedProducts = useMemo(() => {
    if (activeTypeFilter === 'all') return sportProducts;
    if (activeTypeFilter === 'customizable') return sportProducts.filter(p => p.isCustomizable);
    if (activeTypeFilter === 'equipment') return sportProducts.filter(p => p.category === 'Equipment');
    if (activeTypeFilter === 'sportswear') return sportProducts.filter(p => p.category === 'Sportswear');
    if (activeTypeFilter === 'accessories') return sportProducts.filter(p => p.category === 'Accessories');
    return sportProducts;
  }, [sportProducts, activeTypeFilter]);

  // Other sports for quick cross-navigation
  const otherSports = useMemo(() => {
    return SPORTS_CATEGORIES.filter(c => c.slug !== sportSlug);
  }, [sportSlug]);

  const handleWhatsAppSportInquiry = () => {
    const sportName = currentSport ? currentSport.name : 'Sportswear';
    openWhatsAppChat(
      `Assalam-o-Alaikum AR Sports Islamabad! I would like to inquire about custom ${sportName} kits and gear. Please share available designs and quotation.`
    );
  };

  // If sport slug not recognized
  if (!currentSport) {
    return (
      <div className="min-h-[70vh] bg-white py-16 px-4 flex items-center justify-center text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-brand-alt border border-brand-border flex items-center justify-center text-brand-green mx-auto mb-4">
            <Layers className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-brand-text">Sport Category Not Found</h1>
          <p className="text-sm text-brand-muted mt-2">
            The sport category you requested could not be located. Browse our official sports collections below.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {SPORTS_CATEGORIES.slice(0, 6).map(s => (
              <Link
                key={s.slug}
                to={`/sports/${s.slug}`}
                className="px-3 py-1.5 rounded-lg bg-brand-alt border border-brand-border text-xs font-semibold text-brand-text hover:bg-emerald-50 hover:text-brand-green"
              >
                {s.name}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              to="/#sports-categories"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-green text-white text-xs font-bold uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Categories</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-brand-text">
      
      {/* 1. BREADCRUMBS */}
      <div className="bg-brand-alt border-b border-brand-border py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-brand-muted flex-wrap">
            <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-border shrink-0" />
            <Link to="/#sports-categories" className="hover:text-brand-green transition-colors">Sports Categories</Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-border shrink-0" />
            <span className="text-brand-text font-bold">{currentSport.name}</span>
          </nav>
        </div>
      </div>

      {/* 2. DEDICATED SPORT HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-alt/60 via-white to-white border-b border-brand-border py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-charcoal text-white">
                  <span>{currentSport.name} Department</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-brand-green border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  <span>{currentSport.badge}</span>
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-brand-alt text-brand-muted border border-brand-border">
                  {sportProducts.length} Dedicated Products
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-brand-text leading-[1.15]">
                {currentSport.name} Kits &amp; Sportswear
              </h1>

              <p className="text-sm sm:text-base text-brand-muted max-w-2xl leading-relaxed">
                {currentSport.description} Custom digital sublimation, team crest printing, player roster personalization, and match gear engineered for performance.
              </p>

              {/* CTAs: CUSTOMIZE YOUR KIT & WHATSAPP ORDER */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Link
                  to={`/custom-design?sport=${currentSport.slug}`}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-brand-green hover:bg-brand-hover text-white shadow-md flex items-center justify-center gap-2 transition-all hover:scale-102"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Customize Your Kit</span>
                </Link>

                <button
                  onClick={handleWhatsAppSportInquiry}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-brand-charcoal hover:bg-black text-white flex items-center justify-center gap-2 shadow-xs transition-all hover:scale-102 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current text-brand-green" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>

              {/* Direct Store Hotline Note */}
              <div className="pt-2 text-xs text-brand-muted flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-brand-green" />
                  <span>Direct Hotline: <strong className="text-brand-text">{BUSINESS_CONFIG.callingPhone}</strong></span>
                </span>
                <span className="text-brand-border hidden sm:inline">|</span>
                <span className="text-emerald-700 font-medium">100% Sublimation / No Minimum Quantity</span>
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-brand-border bg-brand-alt shadow-lg group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={currentSport.image}
                    alt={currentSport.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <div className="p-4 bg-white border-t border-brand-border flex items-center justify-between text-xs">
                  <div>
                    <span className="text-brand-text font-bold block">{currentSport.name} Sportswear Lineup</span>
                    <span className="text-[11px] text-brand-muted">Manufactured in Rawalpindi / Islamabad</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-50 text-brand-green font-bold text-[11px] border border-emerald-200">
                    Custom Quoting
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG FILTER & HEADER */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-brand-border">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                  Exclusive {currentSport.name} Lineup
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text mt-1">
                {currentSport.name} Products &amp; Gear
              </h2>
              <p className="text-xs text-brand-muted mt-1">
                Showing all {displayedProducts.length} verified products. Every order receives custom confirmation and quote via WhatsApp.
              </p>
            </div>

            {/* Sub-Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: `All (${sportProducts.length})` },
                { id: 'customizable', label: 'Customizable Kits' },
                { id: 'sportswear', label: 'Apparel' },
                { id: 'equipment', label: 'Equipment' },
                { id: 'accessories', label: 'Accessories' }
              ].map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveTypeFilter(filter.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    activeTypeFilter === filter.id
                      ? 'bg-brand-green text-white shadow-2xs'
                      : 'bg-brand-alt text-brand-muted hover:text-brand-text hover:bg-brand-border/60 border border-brand-border'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* DEDICATED PRODUCTS GRID */}
          {displayedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center bg-brand-alt border border-brand-border rounded-2xl p-8">
              <Layers className="w-10 h-10 text-brand-muted mx-auto mb-3" />
              <h3 className="text-base font-bold text-brand-text">No products in this specific filter</h3>
              <p className="text-xs text-brand-muted mt-1">
                Switch filters to browse all {currentSport.name} items.
              </p>
              <button
                onClick={() => setActiveTypeFilter('all')}
                className="mt-4 px-4 py-2 rounded-lg bg-white border border-brand-border text-xs font-bold text-brand-green hover:bg-emerald-50"
              >
                Reset Filter
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 4. CUSTOM TEAM KIT CALLOUT BANNER */}
      <section className="bg-brand-alt border-y border-brand-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-brand-border rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="max-w-xl text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-brand-green border border-emerald-200 mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Full Squad Customization
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight">
                Outfit Your {currentSport.name} Squad with AR Sports
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                Full digital sublimation printing, club crest embroidery, personalized player names, numbers, and tournament sponsors. Free 3D visual mockups before manufacturing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <Link
                to={`/custom-design?sport=${currentSport.slug}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-brand-green hover:bg-brand-hover text-white text-center shadow-xs transition-all hover:scale-102"
              >
                Start Customizer
              </Link>
              <button
                onClick={handleWhatsAppSportInquiry}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-brand-alt hover:bg-brand-border/60 text-brand-text text-center border border-brand-border flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 fill-current text-brand-green" />
                <span>WhatsApp Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPLORE OTHER SPORTS CAROUSEL / PILLS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-brand-text">Explore Other Sports</h3>
              <p className="text-xs text-brand-muted mt-0.5">Switch between our 10 specialized sportswear collections</p>
            </div>
            <Link to="/#sports-categories" className="text-xs text-brand-green hover:underline font-semibold">
              All 10 Sports &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {otherSports.map(s => (
              <Link
                key={s.slug}
                to={`/sports/${s.slug}`}
                className="p-3 rounded-xl border border-brand-border bg-brand-alt hover:bg-white hover:border-brand-green hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white mb-2">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-text group-hover:text-brand-green transition-colors block truncate">
                    {s.name}
                  </span>
                  <span className="text-[10px] text-brand-muted block mt-0.5">
                    {s.equipmentCount}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
