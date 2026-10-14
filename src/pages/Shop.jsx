import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Filter, Search, X, Sparkles, SlidersHorizontal, 
  RotateCcw, PackageSearch, ShieldCheck 
} from 'lucide-react';
import { PRODUCTS_DATA, SPORTS_CATEGORIES } from '../data/productsData';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialSport = searchParams.get('sport') || 'all';
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [selectedSport, setSelectedSport] = useState(initialSport);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [onlyCustomizable, setOnlyCustomizable] = useState(false);

  // Sync state when URL search params change (e.g., from Navbar links)
  useEffect(() => {
    const paramSport = searchParams.get('sport') || 'all';
    const paramCategory = searchParams.get('category') || 'all';
    const paramSearch = searchParams.get('search') || '';
    
    setSelectedSport(paramSport);
    setSelectedCategory(paramCategory);
    setSearchQuery(paramSearch);
  }, [searchParams]);

  // Update sport and URL query param
  const handleSelectSport = (sportSlug) => {
    setSelectedSport(sportSlug);
    const newParams = new URLSearchParams(searchParams);
    if (sportSlug === 'all') {
      newParams.delete('sport');
    } else {
      newParams.set('sport', sportSlug);
    }
    setSearchParams(newParams);
  };

  // Filter products based on active criteria
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // 1. Sport filter
      if (selectedSport !== 'all' && product.sportSlug !== selectedSport) {
        return false;
      }
      // 2. Category filter (Sportswear vs Equipment vs School & Teamwear)
      if (selectedCategory !== 'all' && product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }
      // 3. Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesSport = product.sport.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        if (!matchesName && !matchesSport && !matchesDesc) {
          return false;
        }
      }
      // 4. Customizable flag
      if (onlyCustomizable && !product.isCustomizable) {
        return false;
      }

      return true;
    });
  }, [selectedSport, selectedCategory, searchQuery, onlyCustomizable]);

  const handleResetFilters = () => {
    setSelectedSport('all');
    setSelectedCategory('all');
    setSearchQuery('');
    setOnlyCustomizable(false);
    setSearchParams({});
  };

  const primarySportsList = [
    { slug: 'all', name: 'All Sports' },
    { slug: 'cricket', name: 'Cricket' },
    { slug: 'football', name: 'Football' },
    { slug: 'basketball', name: 'Basketball' },
    { slug: 'badminton', name: 'Badminton' },
    { slug: 'volleyball', name: 'Volleyball' },
    { slug: 'school-teamwear', name: 'School & Teamwear' },
    { slug: 'gym-fitness', name: 'Gym & Fitness' },
  ];

  return (
    <div className="py-12 bg-dark-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SHOP HEADER */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-dark-850 text-neon-400 border border-dark-700 mb-2">
            <span className="w-2 h-2 rounded-full bg-neon-accent animate-pulse" />
            <span>AR SPORTS ISLAMABAD CATALOG</span>
          </div>
          <h1 className="font-teko text-4xl sm:text-6xl font-bold text-white tracking-wide mt-1">
            ALL SPORTS & CUSTOM GEAR
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl mt-1 leading-relaxed">
            Browse our full lineup of custom sublimated match jerseys, team uniforms, tracksuits, and professional sports equipment. Every item is quoted directly on WhatsApp based on your team requirements.
          </p>
        </div>

        {/* SEARCH & FILTER CONTROLS BAR */}
        <div className="bg-dark-900 border border-dark-800 rounded-3xl p-5 sm:p-6 mb-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by title, sport (Cricket, Football, Basketball, Badminton)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark-950 border border-dark-700 rounded-xl py-3.5 pl-11 pr-10 text-white placeholder-slate-500 text-sm focus:border-neon-500 focus:outline-none transition-colors"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-white"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sport Filter Dropdown */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
              <div className="w-full sm:w-auto">
                <select
                  value={selectedSport}
                  onChange={(e) => handleSelectSport(e.target.value)}
                  className="w-full bg-dark-950 border border-dark-700 rounded-xl py-3 px-4 text-white text-sm focus:border-neon-500 focus:outline-none cursor-pointer"
                >
                  <option value="all">All Sports</option>
                  {SPORTS_CATEGORIES.map(sport => (
                    <option key={sport.id} value={sport.slug}>{sport.name}</option>
                  ))}
                </select>
              </div>

              {/* Product Category Dropdown */}
              <div className="w-full sm:w-auto">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-dark-950 border border-dark-700 rounded-xl py-3 px-4 text-white text-sm focus:border-neon-500 focus:outline-none cursor-pointer"
                >
                  <option value="all">All Product Types</option>
                  <option value="Sportswear">Sportswear (Jerseys & Kits)</option>
                  <option value="Equipment">Sports Equipment</option>
                  <option value="School & Teamwear">School & Teamwear</option>
                </select>
              </div>

              {/* Customizable Checkbox */}
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 cursor-pointer select-none px-3.5 py-3 bg-dark-950 border border-dark-700 rounded-xl hover:border-slate-500 transition-colors">
                <input
                  type="checkbox"
                  checked={onlyCustomizable}
                  onChange={(e) => setOnlyCustomizable(e.target.checked)}
                  className="w-4 h-4 rounded text-neon-500 bg-dark-900 border-dark-700 focus:ring-0 accent-neon-500"
                />
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-neon-400" /> Customizable
                </span>
              </label>

              {/* Reset button */}
              {(selectedSport !== 'all' || selectedCategory !== 'all' || searchQuery || onlyCustomizable) && (
                <button
                  onClick={handleResetFilters}
                  className="p-3 rounded-xl bg-dark-950 border border-dark-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
                  title="Reset filters"
                  aria-label="Reset filters"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Functional Quick Sport Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-dark-800 pb-1 scrollbar-none text-xs">
            <span className="text-slate-400 font-bold flex-shrink-0 mr-1 text-[11px] uppercase tracking-wider">
              Filter by Sport:
            </span>
            {primarySportsList.map(sport => {
              const isActive = selectedSport === sport.slug;
              return (
                <button
                  key={sport.slug}
                  onClick={() => handleSelectSport(sport.slug)}
                  className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all duration-200 font-bold ${
                    isActive 
                      ? 'bg-neon-500 text-black shadow-md shadow-neon-500/20' 
                      : 'bg-dark-950 text-slate-300 hover:text-white hover:bg-dark-800 border border-dark-750'
                  }`}
                >
                  {sport.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* RESULTS COUNT & STATUS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 text-xs text-slate-400">
          <div>
            Showing <strong className="text-white font-bold">{filteredProducts.length}</strong> products
            {selectedSport !== 'all' && <span> in <strong className="text-neon-400">{selectedSport.toUpperCase()}</strong></span>}
            {selectedCategory !== 'all' && <span> ({selectedCategory})</span>}
          </div>
          <div className="text-neon-400 font-medium flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-neon-400" />
            <span>Custom quotes confirmed directly on WhatsApp — No hidden fees</span>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="bg-dark-900 border border-dark-800 rounded-3xl p-12 text-center max-w-lg mx-auto shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-dark-950 border border-dark-800 flex items-center justify-center text-slate-400 mx-auto mb-4">
              <PackageSearch className="w-8 h-8 text-neon-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">No Matching Products Found</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              We couldn't find any products matching your current search or filter criteria. Try selecting another sport or reset your filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-3 rounded-xl text-xs font-bold bg-neon-500 hover:bg-neon-400 text-black transition-colors shadow-lg shadow-neon-500/20"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
