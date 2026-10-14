import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
  Menu, X, ShoppingBag, ChevronDown, 
  Search, ShieldCheck, Phone, Sparkles, MapPin, ExternalLink
} from 'lucide-react';
import { SPORTS_CATEGORIES } from '../data/productsData';
import { BUSINESS_CONFIG, openWhatsAppChat } from '../config/businessConfig';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sportsDropdownOpen, setSportsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);

  const { totalItemsCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();

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
      <div className="bg-dark-950 border-b border-dark-800 text-xs py-2 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          
          {/* Tagline & City */}
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-neon-accent animate-pulse shadow-sm shadow-neon-400"></span>
            <span>
              <strong className="text-white">AR SPORTS ISLAMABAD</strong> — Sublimation Sports Kits Hub (Cricket, Football, Basketball & Badminton)
            </span>
          </div>

          {/* Direct Address Link + Phones */}
          <div className="flex items-center flex-wrap justify-center gap-3 text-slate-300">
            <a 
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-neon-400 transition-colors"
              title="Open Google Maps location"
            >
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span className="hidden md:inline">Jmal Plaza, High Court Rd, Rawalpindi</span>
              <span className="md:hidden">Store Location</span>
              <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
            </a>

            <span className="text-dark-700 hidden sm:inline">|</span>

            <button 
              onClick={handleDirectWhatsAppClick}
              className="text-neon-400 hover:text-neon-300 transition-colors flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3 fill-current" /> WA: {BUSINESS_CONFIG.whatsappPhoneDisplay}
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <header className="sticky top-0 z-40 bg-dark-900/95 backdrop-blur-md border-b border-dark-800 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* BRAND LOGO WITH AR SPORTS ISLAMABAD BADGE */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/brand/logo.png"
                alt="AR Sports Islamabad"
                className="h-12 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-teko text-3xl font-black tracking-wider text-white leading-none group-hover:text-neon-400 transition-colors">
                    AR SPORTS
                  </span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-red-600 text-white uppercase tracking-wider">
                    ISLAMABAD
                  </span>
                </div>
                <span className="text-[10px] tracking-widest text-neon-400 uppercase font-bold">
                  Sublimation Sports Kits Hub
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium">
              <NavLink 
                to="/" 
                className={({ isActive }) => `px-3.5 py-2 rounded-xl transition-all duration-200 ${isActive ? 'text-white bg-dark-800 font-semibold border-b-2 border-neon-500' : 'text-slate-300 hover:text-white hover:bg-dark-800/60'}`}
              >
                Home
              </NavLink>

              {/* SHOP BY SPORT DROPDOWN */}
              <div 
                className="relative"
                onMouseEnter={() => setSportsDropdownOpen(true)}
                onMouseLeave={() => setSportsDropdownOpen(false)}
              >
                <NavLink 
                  to="/shop" 
                  className={({ isActive }) => `px-3.5 py-2 rounded-xl transition-all duration-200 flex items-center gap-1.5 ${isActive && sportsDropdownOpen ? 'text-white bg-dark-800' : 'text-slate-300 hover:text-white hover:bg-dark-800/60'}`}
                  aria-expanded={sportsDropdownOpen}
                >
                  <span>Shop by Sport</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${sportsDropdownOpen ? 'rotate-180 text-neon-400' : 'text-slate-400'}`} />
                </NavLink>

                {sportsDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-dark-900 border border-dark-700 rounded-2xl shadow-2xl p-3 grid gap-1.5 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-dark-800 flex items-center justify-between">
                      <span>Select Sport</span>
                      <Link to="/shop?sport=all" onClick={() => setSportsDropdownOpen(false)} className="text-neon-400 hover:underline normal-case font-semibold">
                        All Sports &rarr;
                      </Link>
                    </div>
                    {[
                      { slug: 'all', name: 'All Sports', badge: 'Full Catalog' },
                      { slug: 'cricket', name: 'Cricket', badge: 'Sublimation Kits' },
                      { slug: 'football', name: 'Football', badge: 'Match Uniforms' },
                      { slug: 'basketball', name: 'Basketball', badge: 'Reversible Jerseys' },
                      { slug: 'badminton', name: 'Badminton', badge: 'Dry-Fit Wear' },
                      { slug: 'volleyball', name: 'Volleyball', badge: 'Sleeveless Tops' },
                      { slug: 'school-teamwear', name: 'School & Teamwear', badge: 'Bulk Orders' },
                    ].map((sport) => (
                      <Link
                        key={sport.slug}
                        to={sport.slug === 'school-teamwear' ? '/school-teamwear' : `/shop?sport=${sport.slug}`}
                        onClick={() => setSportsDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-dark-800 transition-colors text-sm group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform font-medium">{sport.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-dark-950 text-slate-400 group-hover:text-neon-400 group-hover:border-neon-500/30 border border-transparent transition-colors">
                          {sport.badge}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink 
                to="/shop" 
                className={({ isActive }) => `px-3.5 py-2 rounded-xl transition-all duration-200 ${isActive ? 'text-white bg-dark-800 font-semibold border-b-2 border-neon-500' : 'text-slate-300 hover:text-white hover:bg-dark-800/60'}`}
              >
                Products
              </NavLink>

              <NavLink 
                to="/custom-design" 
                className={({ isActive }) => `px-3.5 py-2 rounded-xl transition-all duration-200 flex items-center gap-1.5 ${isActive ? 'text-white bg-dark-800 font-semibold border-b-2 border-neon-500' : 'text-slate-300 hover:text-white hover:bg-dark-800/60'}`}
              >
                <Sparkles className="w-4 h-4 text-neon-400" />
                <span>Custom Jerseys</span>
              </NavLink>

              <NavLink 
                to="/about" 
                className={({ isActive }) => `px-3.5 py-2 rounded-xl transition-all duration-200 ${isActive ? 'text-white bg-dark-800 font-semibold border-b-2 border-neon-500' : 'text-slate-300 hover:text-white hover:bg-dark-800/60'}`}
              >
                About Us
              </NavLink>

              <NavLink 
                to="/contact" 
                className={({ isActive }) => `px-3.5 py-2 rounded-xl transition-all duration-200 ${isActive ? 'text-white bg-dark-800 font-semibold border-b-2 border-neon-500' : 'text-slate-300 hover:text-white hover:bg-dark-800/60'}`}
              >
                Contact
              </NavLink>
            </nav>

            {/* RIGHT ACTIONS: SEARCH, CART, WHATSAPP ORDER BUTTON */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Search Toggle */}
              <button 
                onClick={() => setShowSearchModal(true)}
                className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
                title="Search Products"
                aria-label="Search Products"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart Drawer Toggle */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-dark-800 transition-colors"
                title="View Inquiry Cart"
                aria-label="Inquiry Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-neon-500 text-black font-extrabold text-[11px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-dark-900 shadow">
                    {totalItemsCount}
                  </span>
                )}
              </button>

              {/* PROMINENT WHATSAPP ACTION BUTTON */}
              <button
                onClick={handleDirectWhatsAppClick}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm bg-neon-500 hover:bg-neon-400 text-black shadow-lg shadow-neon-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp</span>
              </button>

              {/* MOBILE HAMBURGER BUTTON */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-dark-800 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU ACCORDION */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950 border-b border-navy-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-xl text-base font-medium ${isActive ? 'bg-dark-800 text-neon-400 font-semibold' : 'text-slate-300 hover:bg-dark-900'}`}
              >
                Home
              </NavLink>

              {/* Shop by Sport Mobile Accordion */}
              <div className="border border-dark-800 rounded-xl p-3 bg-dark-900/60">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-dark-800">
                  <span className="text-xs font-bold text-neon-400 uppercase tracking-wider">Shop by Sport</span>
                  <Link 
                    to="/shop?sport=all" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    View All &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { slug: 'cricket', name: 'Cricket' },
                    { slug: 'football', name: 'Football' },
                    { slug: 'basketball', name: 'Basketball' },
                    { slug: 'badminton', name: 'Badminton' },
                    { slug: 'volleyball', name: 'Volleyball' },
                    { slug: 'all', name: 'All Sports' },
                  ].map(sport => (
                    <Link
                      key={sport.slug}
                      to={`/shop?sport=${sport.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-dark-800 font-medium"
                    >
                      {sport.name}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink
                to="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-xl text-base font-medium ${isActive ? 'bg-dark-800 text-neon-400 font-semibold' : 'text-slate-300 hover:bg-dark-900'}`}
              >
                Products
              </NavLink>

              <NavLink
                to="/custom-design"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-xl text-base font-medium flex items-center gap-2 ${isActive ? 'bg-dark-800 text-neon-400 font-semibold' : 'text-slate-300 hover:bg-dark-900'}`}
              >
                <Sparkles className="w-4 h-4 text-neon-400" />
                <span>Custom Jerseys</span>
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-xl text-base font-medium ${isActive ? 'bg-dark-800 text-neon-400 font-semibold' : 'text-slate-300 hover:bg-dark-900'}`}
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-xl text-base font-medium ${isActive ? 'bg-dark-800 text-neon-400 font-semibold' : 'text-slate-300 hover:bg-dark-900'}`}
              >
                Contact
              </NavLink>

              {/* Mobile Store Google Map & WhatsApp */}
              <div className="pt-2 space-y-2">
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs text-center bg-navy-800 hover:bg-navy-700 text-slate-200 border border-navy-700 flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-brand-red" />
                  <span>View Store on Google Maps</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleDirectWhatsAppClick();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-center bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg"
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
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-dark-900 border border-dark-700 w-full max-w-2xl rounded-2xl shadow-2xl p-6 relative">
            <button 
              onClick={() => setShowSearchModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-dark-800"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-white mb-4">Search Products & Custom Kits</h3>
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                autoFocus
                placeholder="Search cricket kits, football jersey, volleyball, badminton, hockey..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark-950 border border-dark-700 rounded-xl py-3.5 pl-11 pr-24 text-white placeholder-slate-500 focus:outline-none focus:border-neon-500 text-base"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-4" />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-4 bg-neon-500 hover:bg-neon-400 text-black rounded-lg font-bold text-sm transition-colors"
              >
                Search
              </button>
            </form>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Quick Searches:</span>
              <button onClick={() => { setSearchQuery('Cricket'); }} className="hover:text-neon-400 underline">Cricket Kits</button>
              <button onClick={() => { setSearchQuery('Football'); }} className="hover:text-neon-400 underline">Football Jersey</button>
              <button onClick={() => { setSearchQuery('Volleyball'); }} className="hover:text-neon-400 underline">Volleyball Kits</button>
              <button onClick={() => { setSearchQuery('Hockey'); }} className="hover:text-neon-400 underline">Hockey Kits</button>
              <button onClick={() => { setSearchQuery('Badminton'); }} className="hover:text-neon-400 underline">Badminton</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
