import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Sparkles, Eye, Plus } from 'lucide-react';
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
    <div className="bg-white border border-brand-border rounded-2xl overflow-hidden hover:border-brand-green/60 hover:shadow-xl hover:shadow-brand-green/5 transition-all duration-300 flex flex-col group h-full">
      
      {/* IMAGE CONTAINER WITH CONSISTENT 4:3 RATIO */}
      <Link to={`/product/${product.id}`} className="relative block aspect-[4/3] bg-brand-alt overflow-hidden">
        <img
          src={product.images?.[0] || 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80'}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80';
          }}
        />

        {/* SPORT & BADGES */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none z-10">
          <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-brand-charcoal text-white shadow-xs">
            {product.sport}
          </span>
          {product.badge && (
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-extrabold uppercase tracking-wider bg-brand-green text-white shadow-xs">
              {product.badge}
            </span>
          )}
        </div>

        {/* CUSTOMIZABLE INDICATOR */}
        {product.isCustomizable && (
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-brand-border flex items-center gap-1.5 text-[11px] text-brand-text font-semibold shadow-xs z-10">
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span>Custom Name & No.</span>
          </div>
        )}

        {/* HOVER OVERLAY QUICK VIEW */}
        <div className="absolute inset-0 bg-brand-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="bg-white text-brand-text text-xs font-bold px-3 py-1.5 rounded-lg border border-brand-border flex items-center gap-1.5 shadow-md">
            <Eye className="w-3.5 h-3.5 text-brand-green" /> View Details
          </span>
        </div>
      </Link>

      {/* CONTENT INFO */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-brand-muted mb-1.5">
            <span className="uppercase tracking-wider font-semibold text-brand-muted text-[11px]">
              {product.category}
            </span>
            <span className="text-brand-green font-semibold text-[11px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
              Price on WhatsApp
            </span>
          </div>

          <Link to={`/product/${product.id}`} className="block">
            <h3 className="text-base font-bold text-brand-text group-hover:text-brand-green transition-colors line-clamp-2 min-h-[2.5rem] leading-snug">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-brand-muted mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription || product.description}
          </p>

          {/* SIZES / VARIANTS PILLS */}
          {product.sizes && (
            <div className="flex flex-wrap gap-1 mt-2.5">
              {product.sizes.slice(0, 5).map(sz => (
                <span key={sz} className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-brand-alt text-brand-text border border-brand-border">
                  {sz}
                </span>
              ))}
              {product.sizes.length > 5 && (
                <span className="text-[10px] text-brand-muted self-center font-medium">+{product.sizes.length - 5}</span>
              )}
            </div>
          )}
        </div>

        {/* BOTTOM ACTION BUTTONS */}
        <div className="pt-3.5 mt-3.5 border-t border-brand-border grid grid-cols-2 gap-1.5 sm:gap-2">
          {product.isCustomizable ? (
            <Link
              to={`/custom-design?sport=${product.sportSlug}&product=${product.id}`}
              className="col-span-1 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-semibold bg-brand-alt hover:bg-brand-border/60 text-brand-text border border-brand-border flex items-center justify-center gap-1 transition-colors text-center"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-green shrink-0" />
              <span className="truncate">Customize</span>
            </Link>
          ) : (
            <button
              onClick={handleQuickAddToCart}
              className="col-span-1 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-semibold bg-brand-alt hover:bg-brand-border/60 text-brand-text border border-brand-border flex items-center justify-center gap-1 transition-colors cursor-pointer text-center"
            >
              <Plus className="w-3.5 h-3.5 text-brand-muted shrink-0" />
              <span className="truncate">Add to Cart</span>
            </button>
          )}

          <button
            onClick={handleQuickWhatsAppInquiry}
            className="col-span-1 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-bold bg-brand-green hover:bg-brand-hover text-white flex items-center justify-center gap-1 sm:gap-1.5 shadow-xs transition-colors cursor-pointer text-center"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
            <span className="truncate">Inquire</span>
          </button>
        </div>

      </div>

    </div>
  );
}
