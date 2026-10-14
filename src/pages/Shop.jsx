import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Filter, Search, X, Sparkles, SlidersHorizontal, 
  RotateCcw, PackageSearch 
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

  return (
    <div className="py-12 bg-navy-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SHOP HEADER */}
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-electric-400">
            AR SPORTS Complete Catalog
          </span>
          <h1 className="font-teko text-4xl sm:text-6xl font-bold text-white tracking-wide mt-1">
            ALL SPORTS & CUSTOM GEAR
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl mt-1">
            Browse our full lineup of custom sublimated team jerseys, tracksuits, match uniforms, and professional sporting equipment.
          </p>
        </div>

        {/* SEARCH & FILTER CONTROLS BAR */}
        <div className="bg-navy-900 border border-navy-800 rounded-2xl p-4 sm:p-6 mb-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search products by title, sport or equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-navy-950 border border-navy-700/80 rounded-xl py-3 pl-11 pr-10 text-white placeholder-slate-500 text-sm focus:border-electric-500 focus:outline-none"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-white"
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
                  onChange={(e) => setSelectedSport(e.target.value)}
                  className="w-full bg-navy-950 border border-navy-700/80 rounded-xl py-3 px-4 text-white text-sm focus:border-electric-500 focus:outline-none cursor-pointer"
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
                  className="w-full bg-navy-950 border border-navy-700/80 rounded-xl py-3 px-4 text-white text-sm focus:border-electric-500 focus:outline-none cursor-pointer"
                >
                  <option value="all">All Product Types</option>
                  <option value="Sportswear">Sportswear (Jerseys & Kits)</option>
                  <option value="Equipment">Sports Equipment</option>
                  <option value="School & Teamwear">School & Teamwear</option>
                </select>
              </div>

              {/* Customizable Checkbox */}
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 cursor-pointer select-none px-3 py-2 bg-navy-950 border border-navy-800 rounded-xl hover:border-slate-700">
                <input
                  type="checkbox"
                  checked={onlyCustomizable}
                  onChange={(e) => setOnlyCustomizable(e.target.checked)}
                  className="w-4 h-4 rounded text-electric-500 bg-navy-900 border-navy-700 focus:ring-0"
                />
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-electric-400" /> Customizable Only
                </span>
              </label>

              {/* Reset button */}
              {(selectedSport !== 'all' || selectedCategory !== 'all' || searchQuery || onlyCustomizable) && (
                <button
                  onClick={handleResetFilters}
                  className="p-3 rounded-xl bg-navy-950 border border-navy-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  title="Reset filters"
                  aria-label="Reset filters"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Quick Sport Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-navy-800/80 pb-1 scrollbar-none text-xs">
            <span className="text-slate-400 font-semibold flex-shrink-0">Quick Sport:</span>
            <button
              onClick={() => setSelectedSport('all')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${selectedSport === 'all' ? 'bg-electric-500 text-white font-bold' : 'bg-navy-950 text-slate-300 hover:text-white'}`}
            >
              All
            </button>
            {SPORTS_CATEGORIES.map(sport => (
              <button
                key={sport.id}
                onClick={() => setSelectedSport(sport.slug)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${selectedSport === sport.slug ? 'bg-electric-500 text-white font-bold' : 'bg-navy-950 text-slate-300 hover:text-white'}`}
              >
                {sport.name}
              </button>
            ))}
          </div>
        </div>

        {/* RESULTS COUNT & STATUS */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-400">
          <div>
            Showing <strong className="text-white">{filteredProducts.length}</strong> products
            {selectedSport !== 'all' && <span> in <strong className="text-electric-400">{selectedSport.toUpperCase()}</strong></span>}
          </div>
          <div className="text-emerald-400 font-medium">
            Pricing provided on WhatsApp inquiry
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
          <div className="bg-navy-900 border border-navy-800 rounded-3xl p-12 text-center max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-navy-950 border border-navy-800 flex items-center justify-center text-slate-400 mx-auto mb-4">
              <PackageSearch className="w-8 h-8 text-electric-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">No Matching Products Found</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              We couldn't find any products matching your current search or filter criteria. Try selecting another sport or reset your filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-electric-500 hover:bg-electric-600 text-white transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
