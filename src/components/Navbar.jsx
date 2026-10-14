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
      <div className="bg-navy-950 border-b border-navy-800 text-xs py-2 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          
          {/* Tagline & City */}
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>
              <strong>AR SPORTS ISLAMABAD</strong> — Sublimation Sports Kits Hub (Cricket, Football, Volleyball, Hockey & Badminton)
            </span>
          </div>

          {/* Direct Address Link + Phones */}
          <div className="flex items-center flex-wrap justify-center gap-3 text-slate-300">
            <a 
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-electric-400 transition-colors"
              title="Open Google Maps location"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-red" />
              <span className="hidden md:inline">Jmal Plaza, High Court Rd, Rawalpindi</span>
              <span className="md:hidden">Store Location</span>
              <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
            </a>

            <span className="text-slate-600 hidden sm:inline">|</span>

            <button 
              onClick={handleDirectWhatsAppClick}
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3 fill-current" /> WA: {BUSINESS_CONFIG.whatsappPhoneDisplay}
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <header className="sticky top-0 z-40 bg-navy-900/95 backdrop-blur-md border-b border-navy-800 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* BRAND LOGO WITH AR SPORTS ISLAMABAD 3D BADGE */}
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
                  <span className="font-teko text-3xl font-black tracking-wider text-white leading-none group-hover:text-electric-400 transition-colors">
                    AR SPORTS
                  </span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-brand-red text-white uppercase tracking-wider">
                    ISLAMABAD
                  </span>
                </div>
                <span className="text-[10px] tracking-widest text-emerald-400 uppercase font-bold">
                  Sublimation Sports Kits Hub
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium">
              <NavLink 
                to="/" 
                className={({ isActive }) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'text-white bg-navy-800 font-semibold' : 'text-slate-300 hover:text-white hover:bg-navy-800/60'}`}
              >
                Home
              </NavLink>

              <NavLink 
                to="/shop" 
                className={({ isActive }) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'text-white bg-navy-800 font-semibold' : 'text-slate-300 hover:text-white hover:bg-navy-800/60'}`}
              >
                Shop All
              </NavLink>

              {/* SPORTS DROPDOWN */}
              <div 
                className="relative"
                onMouseEnter={() => setSportsDropdownOpen(true)}
                onMouseLeave={() => setSportsDropdownOpen(false)}
              >
                <button 
                  className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800/60 transition-colors flex items-center gap-1.5"
                  aria-expanded={sportsDropdownOpen}
                >
                  <span>Sports</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${sportsDropdownOpen ? 'rotate-180 text-electric-400' : ''}`} />
                </button>

                {sportsDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-navy-900 border border-navy-700/80 rounded-2xl shadow-2xl p-3 grid gap-1 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-navy-800 mb-1">
                      Choose Your Sport
                    </div>
                    {SPORTS_CATEGORIES.map((sport) => (
                      <Link
                        key={sport.id}
                        to={`/shop?sport=${sport.slug}`}
                        onClick={() => setSportsDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition-colors text-sm group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">{sport.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-navy-950 text-slate-400 group-hover:text-electric-400 group-hover:border-electric-500/30 border border-transparent transition-colors">
                          {sport.badge || 'Available'}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink 
                to="/custom-design" 
                className={({ isActive }) => `px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${isActive ? 'text-white bg-navy-800 font-semibold' : 'text-slate-300 hover:text-white hover:bg-navy-800/60'}`}
              >
                <Sparkles className="w-4 h-4 text-electric-400" />
                <span>Custom Design</span>
              </NavLink>

              <NavLink 
                to="/school-teamwear" 
                className={({ isActive }) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'text-white bg-navy-800 font-semibold' : 'text-slate-300 hover:text-white hover:bg-navy-800/60'}`}
              >
                School & Teamwear
              </NavLink>

              <NavLink 
                to="/about" 
                className={({ isActive }) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'text-white bg-navy-800 font-semibold' : 'text-slate-300 hover:text-white hover:bg-navy-800/60'}`}
              >
                About Us
              </NavLink>

              <NavLink 
                to="/contact" 
                className={({ isActive }) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'text-white bg-navy-800 font-semibold' : 'text-slate-300 hover:text-white hover:bg-navy-800/60'}`}
              >
                Contact & Store
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
                className="relative p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
                title="View Inquiry Cart"
                aria-label="Inquiry Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-electric-500 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center border-2 border-navy-900 shadow">
                    {totalItemsCount}
                  </span>
                )}
              </button>

              {/* PROMINENT WHATSAPP ACTION BUTTON */}
              <button
                onClick={handleDirectWhatsAppClick}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp</span>
              </button>

              {/* MOBILE HAMBURGER BUTTON */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
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
                className={({ isActive }) => `px-4 py-3 rounded-xl text-base font-medium ${isActive ? 'bg-navy-800 text-white' : 'text-slate-300 hover:bg-navy-900'}`}
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-xl text-base font-medium ${isActive ? 'bg-navy-800 text-white' : 'text-slate-300 hover:bg-navy-900'}`}
              >
                Shop All Products
              </NavLink>

              {/* Sports Mobile Accordion */}
              <div className="border border-navy-800 rounded-xl p-2 bg-navy-900/50">
                <div className="px-3 py-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Sports Categories
                </div>
                <div className="grid grid-cols-2 gap-1.5 mt-1">
                  {SPORTS_CATEGORIES.map(sport => (
                    <Link
                      key={sport.id}
                      to={`/shop?sport=${sport.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-navy-800"
                    >
                      {sport.name}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink
                to="/custom-design"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-xl text-base font-medium flex items-center gap-2 ${isActive ? 'bg-navy-800 text-white' : 'text-slate-300 hover:bg-navy-900'}`}
              >
                <Sparkles className="w-4 h-4 text-electric-400" />
                <span>Custom Design Studio</span>
              </NavLink>

              <NavLink
                to="/school-teamwear"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-xl text-base font-medium ${isActive ? 'bg-navy-800 text-white' : 'text-slate-300 hover:bg-navy-900'}`}
              >
                School & Teamwear (Bulk)
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-xl text-base font-medium ${isActive ? 'bg-navy-800 text-white' : 'text-slate-300 hover:bg-navy-900'}`}
              >
                About AR Sports Islamabad
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-xl text-base font-medium ${isActive ? 'bg-navy-800 text-white' : 'text-slate-300 hover:bg-navy-900'}`}
              >
                Store Location & Inquiries
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
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-navy-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-navy-900 border border-navy-700 w-full max-w-2xl rounded-2xl shadow-2xl p-6 relative">
            <button 
              onClick={() => setShowSearchModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-navy-800"
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
                className="w-full bg-navy-950 border border-navy-700 rounded-xl py-3.5 pl-11 pr-24 text-white placeholder-slate-500 focus:outline-none focus:border-electric-500 text-base"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-4" />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-4 bg-electric-500 hover:bg-electric-600 text-white rounded-lg font-semibold text-sm transition-colors"
              >
                Search
              </button>
            </form>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Quick Searches:</span>
              <button onClick={() => { setSearchQuery('Cricket'); }} className="hover:text-electric-400 underline">Cricket Kits</button>
              <button onClick={() => { setSearchQuery('Football'); }} className="hover:text-electric-400 underline">Football Jersey</button>
              <button onClick={() => { setSearchQuery('Volleyball'); }} className="hover:text-electric-400 underline">Volleyball Kits</button>
              <button onClick={() => { setSearchQuery('Hockey'); }} className="hover:text-electric-400 underline">Hockey Kits</button>
              <button onClick={() => { setSearchQuery('Badminton'); }} className="hover:text-electric-400 underline">Badminton</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
