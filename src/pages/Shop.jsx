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

  // Sync state when URL search params change
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
      // 2. Category filter
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
    ...SPORTS_CATEGORIES.map(c => ({ slug: c.slug, name: c.name }))
  ];

  return (
    <div className="py-12 bg-white min-h-screen text-brand-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SHOP HEADER */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-brand-green border border-emerald-200 mb-2">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span>AR Sports Islamabad Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-text tracking-tight mt-1.5">
            All Sports & Custom Gear
          </h1>
          <p className="text-sm text-brand-muted max-w-2xl mt-2 leading-relaxed">
            Browse our full lineup of custom sublimated match jerseys, team uniforms, tracksuits, and professional sports equipment. Every item is quoted directly on WhatsApp based on your team requirements.
          </p>
        </div>

        {/* SEARCH & FILTER CONTROLS BAR */}
        <div className="bg-brand-alt border border-brand-border rounded-3xl p-5 sm:p-6 mb-8 shadow-xs">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by title, sport (Cricket, Football, Basketball, Badminton)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-brand-border rounded-xl py-3 pl-11 pr-10 text-brand-text placeholder-brand-muted text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green transition-colors"
              />
              <Search className="w-4 h-4 text-brand-muted absolute left-4 top-3.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3.5 text-brand-muted hover:text-brand-text"
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
                  className="w-full bg-white border border-brand-border rounded-xl py-3 px-4 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green cursor-pointer shadow-xs"
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
                  className="w-full bg-white border border-brand-border rounded-xl py-3 px-4 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green cursor-pointer shadow-xs"
                >
                  <option value="all">All Product Categories</option>
                  <option value="Clothing & Team Kits">Clothing & Team Kits</option>
                  <option value="Playing Equipment">Playing Equipment</option>
                  <option value="Shoes & Footwear">Shoes & Footwear</option>
                  <option value="Safety & Protection">Safety & Protection</option>
                  <option value="Training Equipment">Training Equipment</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              {/* Customizable Checkbox */}
              <label className="flex items-center gap-2 text-xs font-semibold text-brand-text cursor-pointer select-none px-3.5 py-3 bg-white border border-brand-border rounded-xl hover:border-brand-muted transition-colors shadow-xs">
                <input
                  type="checkbox"
                  checked={onlyCustomizable}
                  onChange={(e) => setOnlyCustomizable(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-green border-brand-border focus:ring-brand-green"
                />
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-green" /> Customizable
                </span>
              </label>

              {/* Reset button */}
              {(selectedSport !== 'all' || selectedCategory !== 'all' || searchQuery || onlyCustomizable) && (
                <button
                  onClick={handleResetFilters}
                  className="p-3 rounded-xl bg-white border border-brand-border text-brand-muted hover:text-brand-text hover:border-brand-muted transition-colors shadow-xs cursor-pointer"
                  title="Reset filters"
                  aria-label="Reset filters"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Quick Sport Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-brand-border pb-1 scrollbar-none text-xs">
            <span className="text-brand-muted font-bold flex-shrink-0 mr-1 text-[11px] uppercase tracking-wider">
              Filter by Sport:
            </span>
            {primarySportsList.map(sport => {
              const isActive = selectedSport === sport.slug;
              return (
                <button
                  key={sport.slug}
                  onClick={() => handleSelectSport(sport.slug)}
                  className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all duration-200 font-bold cursor-pointer ${
                    isActive 
                      ? 'bg-brand-green text-white shadow-xs' 
                      : 'bg-white text-brand-text hover:text-brand-green hover:bg-emerald-50 border border-brand-border'
                  }`}
                >
                  {sport.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* RESULTS COUNT & STATUS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 text-xs text-brand-muted">
          <div>
            Showing <strong className="text-brand-text font-bold">{filteredProducts.length}</strong> products
            {selectedSport !== 'all' && <span> in <strong className="text-brand-green">{selectedSport.toUpperCase()}</strong></span>}
            {selectedCategory !== 'all' && <span> ({selectedCategory})</span>}
          </div>
          <div className="text-brand-green font-medium flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
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
          <div className="bg-brand-alt border border-brand-border rounded-3xl p-12 text-center max-w-lg mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center text-brand-muted mx-auto mb-4 shadow-xs">
              <PackageSearch className="w-8 h-8 text-brand-green" />
            </div>
            <h3 className="text-lg font-bold text-brand-text mb-2">No Matching Products Found</h3>
            <p className="text-xs text-brand-muted mb-6 leading-relaxed">
              We couldn't find any products matching your current search or filter criteria. Try selecting another sport or reset your filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-3 rounded-xl text-xs font-bold bg-brand-green hover:bg-brand-hover text-white transition-colors shadow-md shadow-brand-green/20 cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
