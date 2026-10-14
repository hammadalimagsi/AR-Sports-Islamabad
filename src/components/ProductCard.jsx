import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Sparkles, Eye, ArrowUpRight } from 'lucide-react';
import { buildProductInquiryMessage } from '../utils/whatsappMessages';
import { openWhatsAppChat } from '../config/businessConfig';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleQuickWhatsAppInquiry = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const msg = buildProductInquiryMessage({
      product,
      selectedSize: product.sizes?.[0] || null,
      selectedVariant: product.variants?.[0] || product.colors?.[0] || null,
      quantity: 1
    });
    openWhatsAppChat(msg);
  };

  const handleQuickAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, {
      quantity: 1,
      selectedSize: product.sizes?.[0] || null,
      selectedVariant: product.variants?.[0] || product.colors?.[0] || null
    });
  };

  return (
    <div className="bg-navy-900 border border-navy-800 rounded-2xl overflow-hidden hover:border-electric-500/50 hover:shadow-xl hover:shadow-electric-950/20 transition-all duration-300 flex flex-col group">
      
      {/* IMAGE CONTAINER */}
      <Link to={`/product/${product.id}`} className="relative block aspect-[4/3] bg-navy-950 overflow-hidden">
        <img
          src={product.images?.[0] || 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80'}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80';
          }}
        />

        {/* SPORT & BADGES */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-navy-950/90 text-electric-400 backdrop-blur-md border border-navy-700">
            {product.sport}
          </span>
          {product.badge && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-electric-500 text-white shadow">
              {product.badge}
            </span>
          )}
        </div>

        {/* CUSTOMIZABLE INDICATOR */}
        {product.isCustomizable && (
          <div className="absolute bottom-3 left-3 bg-navy-900/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-electric-500/30 flex items-center gap-1.5 text-[11px] text-white font-medium">
            <Sparkles className="w-3.5 h-3.5 text-electric-400" />
            <span>Custom Name & Number</span>
          </div>
        )}

        {/* HOVER QUICK VIEW ICON */}
        <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none">
          <span className="bg-navy-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-navy-700 flex items-center gap-1.5 backdrop-blur-sm">
            <Eye className="w-3.5 h-3.5 text-electric-400" /> View Details
          </span>
        </div>
      </Link>

      {/* CONTENT INFO */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="uppercase tracking-wider font-semibold text-slate-400">{product.category}</span>
            <span className="text-electric-400 font-medium">Price on WhatsApp</span>
          </div>

          <Link to={`/product/${product.id}`} className="block">
            <h3 className="text-base font-bold text-white group-hover:text-electric-400 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
            {product.shortDescription || product.description}
          </p>

          {/* SIZES / VARIANTS PILLS */}
          {product.sizes && (
            <div className="flex flex-wrap gap-1 mt-3">
              {product.sizes.slice(0, 5).map(sz => (
                <span key={sz} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-navy-950 text-slate-300 border border-navy-800">
                  {sz}
                </span>
              ))}
              {product.sizes.length > 5 && (
                <span className="text-[10px] text-slate-400 self-center">+{product.sizes.length - 5}</span>
              )}
            </div>
          )}
        </div>

        {/* BOTTOM ACTION BUTTONS */}
        <div className="pt-4 mt-4 border-t border-navy-800 grid grid-cols-2 gap-2">
          {product.isCustomizable ? (
            <Link
              to={`/custom-design?sport=${product.sportSlug}&product=${product.id}`}
              className="col-span-1 px-3 py-2 rounded-xl text-xs font-bold bg-navy-800 hover:bg-navy-700 text-slate-200 border border-navy-700 flex items-center justify-center gap-1 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-electric-400" />
              <span>Customize</span>
            </Link>
          ) : (
            <button
              onClick={handleQuickAddToCart}
              className="col-span-1 px-3 py-2 rounded-xl text-xs font-bold bg-navy-800 hover:bg-navy-700 text-slate-200 border border-navy-700 flex items-center justify-center gap-1 transition-colors"
            >
              <span>+ Add to Cart</span>
            </button>
          )}

          <button
            onClick={handleQuickWhatsAppInquiry}
            className="col-span-1 px-3 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-1 shadow-md shadow-emerald-950 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </button>
        </div>

      </div>

    </div>
  );
}
