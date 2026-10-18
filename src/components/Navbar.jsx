import React, { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, X, ShoppingBag, ChevronDown, 
  Search, Phone, Sparkles, MapPin, ExternalLink
} from 'lucide-react';
import { BUSINESS_CONFIG, openWhatsAppChat } from '../config/businessConfig';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sportsDropdownOpen, setSportsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);

  const { totalItemsCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavToSection = (sectionId, fallbackPath = '/') => {
    setMobileMenuOpen(false);
    setSportsDropdownOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(`${fallbackPath}#${sectionId}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearchModal(false);
      setSearchQuery('');
    }
  };

  const handleDirectWhatsAppClick = () => {
    const defaultMsg = `Assalam-o-Alaikum AR Sports Islamabad! I want to inquire about custom sportswear and kits.`;
    openWhatsAppChat(defaultMsg);
  };

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT & LOCATION BAR */}
      <div className="bg-brand-alt border-b border-brand-border text-xs py-2 px-4 text-brand-muted">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          
          {/* Tagline & City */}
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            <span>
              <strong className="text-brand-text font-semibold">AR SPORTS ISLAMABAD</strong> — Sublimation Sports Kits Hub (Cricket, Football, Volleyball, Badminton)
            </span>
          </div>

          {/* Direct Address Link + Phones */}
          <div className="flex items-center flex-wrap justify-center gap-3 text-brand-muted">
            <a 
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-brand-green transition-colors"
              title="Open Google Maps location"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-green" />
              <span className="hidden md:inline">{BUSINESS_CONFIG.locationDisplay}</span>
              <span className="md:hidden">Store Location</span>
              <ExternalLink className="w-2.5 h-2.5 text-brand-muted" />
            </a>

            <span className="text-brand-border hidden sm:inline">|</span>

            <button 
              onClick={handleDirectWhatsAppClick}
              className="text-brand-green hover:text-brand-hover transition-colors flex items-center gap-1 font-semibold cursor-pointer"
            >
              <Phone className="w-3 h-3 fill-current" /> WA: {BUSINESS_CONFIG.whatsappPhoneDisplay}
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-brand-border transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* BRAND LOGO WITH AR SPORTS ISLAMABAD BADGE */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0 min-w-0">
              <img
                src="/brand/logo.png"
                alt="AR Sports Islamabad"
                className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="text-base sm:text-xl lg:text-2xl font-extrabold tracking-tight text-brand-charcoal group-hover:text-brand-green transition-colors whitespace-nowrap">
                    AR SPORTS
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold px-1 sm:px-1.5 py-0.5 rounded bg-brand-green text-white uppercase tracking-wider shrink-0">
                    ISB
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] tracking-wider text-brand-muted uppercase font-semibold truncate max-w-[140px] sm:max-w-none">
                  Custom Sportswear & Kits
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium">
              <NavLink 
                to="/" 
                className={({ isActive }) => `px-3.5 py-2 rounded-xl transition-all duration-200 ${isActive ? 'text-brand-green bg-brand-50 font-semibold' : 'text-brand-muted hover:text-brand-text hover:bg-brand-alt'}`}
              >
                Home
              </NavLink>

              {/* SPORTS CATEGORIES WITH DROPDOWN */}
              <div 
                className="relative"
                onMouseEnter={() => setSportsDropdownOpen(true)}
                onMouseLeave={() => setSportsDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => handleNavToSection('sports-categories', '/')}
                  className="px-3.5 py-2 rounded-xl transition-all duration-200 flex items-center gap-1.5 text-brand-muted hover:text-brand-text hover:bg-brand-alt font-medium cursor-pointer"
                  aria-expanded={sportsDropdownOpen}
                >
                  <span>Sports Categories</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${sportsDropdownOpen ? 'rotate-180 text-brand-green' : 'text-brand-muted'}`} />
                </button>

                {sportsDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white border border-brand-border rounded-2xl shadow-xl p-3 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-brand-muted uppercase tracking-wider border-b border-brand-border flex items-center justify-between">
                      <span>Browse Categories</span>
                      <button 
                        onClick={() => handleNavToSection('sports-categories', '/')} 
                        className="text-brand-green hover:underline normal-case font-semibold text-xs cursor-pointer"
                      >
                        All Categories &darr;
                      </button>
                    </div>
                    {[
                      { slug: 'sublimation', name: 'Sublimation Sports Kits', badge: 'Hub Focus' },
                      { slug: 'cricket', name: 'Cricket Kits & Jerseys', badge: 'Popular' },
                      { slug: 'football', name: 'Football Kits & Jerseys', badge: 'Match Wear' },
                      { slug: 'volleyball', name: 'Volleyball Kits & Jerseys', badge: 'Athletic' },
                      { slug: 'badminton', name: 'Badminton & Hockey Kits', badge: 'Lightweight' },
                      { slug: 'all', name: 'All Products & Gear', badge: 'Catalog' },
                    ].map((cat) => (
                      <Link
                        key={cat.slug}
                        to={cat.slug === 'sublimation' ? '/custom-design' : cat.slug === 'all' ? '/shop' : `/shop?sport=${cat.slug}`}
                        onClick={() => setSportsDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-brand-text hover:bg-brand-alt hover:text-brand-green transition-colors text-sm group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform font-medium">{cat.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-alt text-brand-muted group-hover:text-brand-green group-hover:bg-brand-50 border border-brand-border transition-colors">
                          {cat.badge}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink 
                to="/custom-design" 
                className={({ isActive }) => `px-3.5 py-2 rounded-xl transition-all duration-200 flex items-center gap-1.5 ${isActive ? 'text-brand-green bg-brand-50 font-semibold' : 'text-brand-muted hover:text-brand-text hover:bg-brand-alt'}`}
              >
                <Sparkles className="w-4 h-4 text-brand-green" />
                <span>Customize Your Kit</span>
              </NavLink>

              <NavLink 
                to="/about" 
                className={({ isActive }) => `px-3.5 py-2 rounded-xl transition-all duration-200 ${isActive ? 'text-brand-green bg-brand-50 font-semibold' : 'text-brand-muted hover:text-brand-text hover:bg-brand-alt'}`}
              >
                About Us
              </NavLink>

              <NavLink 
                to="/contact" 
                className={({ isActive }) => `px-3.5 py-2 rounded-xl transition-all duration-200 ${isActive ? 'text-brand-green bg-brand-50 font-semibold' : 'text-brand-muted hover:text-brand-text hover:bg-brand-alt'}`}
              >
                Contact
              </NavLink>
            </nav>

            {/* RIGHT ACTIONS: SEARCH, CART, WHATSAPP ORDER BUTTON */}
            <div className="flex items-center space-x-1 sm:space-x-3 shrink-0">
              {/* Search Toggle */}
              <button 
                onClick={() => setShowSearchModal(true)}
                className="p-2 sm:p-2.5 rounded-xl text-brand-muted hover:text-brand-text hover:bg-brand-alt transition-colors cursor-pointer"
                title="Search Products"
                aria-label="Search Products"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart Drawer Toggle */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 sm:p-2.5 rounded-xl text-brand-muted hover:text-brand-text hover:bg-brand-alt transition-colors cursor-pointer"
                title="View Inquiry Cart"
                aria-label="Inquiry Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-green text-white font-extrabold text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                    {totalItemsCount}
                  </span>
                )}
              </button>

              {/* PROMINENT WHATSAPP ACTION BUTTON */}
              <button
                onClick={handleDirectWhatsAppClick}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-brand-green hover:bg-brand-hover text-white shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp</span>
              </button>

              {/* MOBILE HAMBURGER BUTTON */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 sm:p-2.5 rounded-xl text-brand-text hover:bg-brand-alt transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU ACCORDION */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-brand-border px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto shadow-xl animate-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-1.5">
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-semibold ${isActive ? 'bg-brand-50 text-brand-green' : 'text-brand-text hover:bg-brand-alt'}`}
              >
                Home
              </NavLink>

              {/* Sports Categories Mobile Accordion */}
              <div className="border border-brand-border rounded-xl p-3 bg-brand-alt">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-brand-border">
                  <button 
                    onClick={() => handleNavToSection('sports-categories', '/')}
                    className="text-xs font-bold text-brand-green uppercase tracking-wider hover:underline text-left cursor-pointer"
                  >
                    Sports Categories &darr;
                  </button>
                  <Link 
                    to="/shop?sport=all" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs text-brand-muted hover:text-brand-text"
                  >
                    View All &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { slug: 'sublimation', name: 'Sublimation Kits', path: '/custom-design' },
                    { slug: 'cricket', name: 'Cricket Kits', path: '/shop?sport=cricket' },
                    { slug: 'football', name: 'Football Kits', path: '/shop?sport=football' },
                    { slug: 'volleyball', name: 'Volleyball Kits', path: '/shop?sport=volleyball' },
                    { slug: 'badminton', name: 'Badminton & Hockey', path: '/shop?sport=badminton' },
                    { slug: 'all', name: 'All Products', path: '/shop' },
                  ].map(cat => (
                    <Link
                      key={cat.slug}
                      to={cat.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 rounded-lg text-xs font-medium text-brand-text hover:bg-white hover:text-brand-green border border-transparent hover:border-brand-border transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink
                to="/custom-design"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 ${isActive ? 'bg-brand-50 text-brand-green' : 'text-brand-text hover:bg-brand-alt'}`}
              >
                <Sparkles className="w-4 h-4 text-brand-green" />
                <span>Customize Your Kit</span>
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-semibold ${isActive ? 'bg-brand-50 text-brand-green' : 'text-brand-text hover:bg-brand-alt'}`}
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-semibold ${isActive ? 'bg-brand-50 text-brand-green' : 'text-brand-text hover:bg-brand-alt'}`}
              >
                Contact
              </NavLink>

              {/* Mobile Store Google Map & WhatsApp */}
              <div className="pt-3 space-y-2">
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-center bg-brand-alt hover:bg-brand-border text-brand-text border border-brand-border flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-brand-green" />
                  <span>View Store on Google Maps</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleDirectWhatsAppClick();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-center bg-brand-green hover:bg-brand-hover text-white flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>Place Order on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* SEARCH MODAL */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-brand-charcoal/40 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white border border-brand-border w-full max-w-2xl rounded-2xl shadow-2xl p-6 relative">
            <button 
              onClick={() => setShowSearchModal(false)}
              className="absolute top-4 right-4 p-2 text-brand-muted hover:text-brand-text rounded-lg hover:bg-brand-alt cursor-pointer"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-brand-text mb-4">Search Products & Custom Kits</h3>
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                autoFocus
                placeholder="Search cricket kits, football jersey, volleyball, badminton, hockey..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-brand-alt border border-brand-border rounded-xl py-3.5 pl-11 pr-24 text-brand-text placeholder-brand-muted focus:outline-none focus:border-brand-green text-sm sm:text-base"
              />
              <Search className="w-5 h-5 text-brand-muted absolute left-3.5 top-4" />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-4 bg-brand-green hover:bg-brand-hover text-white rounded-lg font-bold text-sm transition-colors cursor-pointer"
              >
                Search
              </button>
            </form>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-brand-muted">
              <span className="font-semibold text-brand-text">Quick Searches:</span>
              <button onClick={() => { setSearchQuery('Cricket'); }} className="hover:text-brand-green underline cursor-pointer">Cricket Kits</button>
              <button onClick={() => { setSearchQuery('Football'); }} className="hover:text-brand-green underline cursor-pointer">Football Jersey</button>
              <button onClick={() => { setSearchQuery('Volleyball'); }} className="hover:text-brand-green underline cursor-pointer">Volleyball Kits</button>
              <button onClick={() => { setSearchQuery('Hockey'); }} className="hover:text-brand-green underline cursor-pointer">Hockey Kits</button>
              <button onClick={() => { setSearchQuery('Badminton'); }} className="hover:text-brand-green underline cursor-pointer">Badminton</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
