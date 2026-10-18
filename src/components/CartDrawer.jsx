import React from 'react';
import { 
  X, Trash2, Plus, Minus, MessageCircle, 
  ArrowRight, Sparkles, ShieldCheck 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { buildCartInquiryMessage } from '../utils/whatsappMessages';
import { openWhatsAppChat } from '../config/businessConfig';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    totalItemsCount 
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckoutWhatsApp = () => {
    if (cartItems.length === 0) return;
    const inquiryMessage = buildCartInquiryMessage(cartItems);
    openWhatsAppChat(inquiryMessage);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-2 sm:pl-10">
        <div className="w-screen max-w-md bg-white border-l border-brand-border shadow-2xl flex flex-col">
          
          {/* HEADER */}
          <div className="p-6 border-b border-brand-border flex items-center justify-between bg-brand-alt">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-brand-text tracking-tight">
                Order Inquiry Cart
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-green text-white">
                {totalItemsCount} {totalItemsCount === 1 ? 'Item' : 'Items'}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-brand-muted hover:text-brand-text rounded-lg hover:bg-white transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* PRICING NOTICE BANNER */}
          <div className="bg-brand-50 px-6 py-2.5 border-b border-brand-border text-xs text-brand-green font-medium flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
            <span>Prices are customized per order and finalized via WhatsApp.</span>
          </div>

          {/* CART ITEMS LIST */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-brand-alt border border-brand-border flex items-center justify-center text-brand-muted">
                  <Sparkles className="w-8 h-8 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-text">Your Inquiry Cart is Empty</h3>
                  <p className="text-xs text-brand-muted mt-1 max-w-xs">
                    Browse our sportswear, customized team kits, or equipment and add items to request a custom quote.
                  </p>
                </div>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-sm font-bold bg-brand-green hover:bg-brand-hover text-white transition-colors"
                >
                  Explore Products
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.cartItemId} 
                  className="bg-brand-alt border border-brand-border rounded-2xl p-4 flex gap-4 relative group"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.image || 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=300&q=80'}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover bg-white border border-brand-border flex-shrink-0"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=300&q=80';
                    }}
                  />

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-brand-text truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-brand-muted hover:text-red-500 transition-colors p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Customization Details or Specs */}
                      <div className="mt-1 space-y-0.5 text-[11px] text-brand-muted">
                        {item.selectedSize && (
                          <p>Size: <strong className="text-brand-text">{item.selectedSize}</strong></p>
                        )}
                        {item.selectedVariant && (
                          <p>Variant: <strong className="text-brand-text">{item.selectedVariant}</strong></p>
                        )}
                        {item.customDetails?.playerName && (
                          <p>Player Name: <strong className="text-brand-text">{item.customDetails.playerName}</strong></p>
                        )}
                        {item.customDetails?.playerNumber && (
                          <p>Number: <strong className="text-brand-text">{item.customDetails.playerNumber}</strong></p>
                        )}
                        {item.customDetails?.teamName && (
                          <p>Team: <strong className="text-brand-text">{item.customDetails.teamName}</strong></p>
                        )}
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-brand-border/60">
                      <div className="flex items-center gap-1 bg-white border border-brand-border rounded-lg p-0.5">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1 text-brand-muted hover:text-brand-text rounded hover:bg-brand-alt transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-brand-text">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1 text-brand-muted hover:text-brand-text rounded hover:bg-brand-alt transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-[11px] font-bold text-brand-green">
                        Custom Quote
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* FOOTER ACTIONS */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-brand-border bg-brand-alt space-y-3">
              <div className="flex items-center justify-between text-xs text-brand-muted pb-1">
                <span>Total Items:</span>
                <span className="font-bold text-brand-text">{totalItemsCount} pieces</span>
              </div>

              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-brand-green hover:bg-brand-hover text-white flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Send Order on WhatsApp</span>
              </button>

              <div className="flex items-center justify-between pt-1 text-xs">
                <button
                  onClick={clearCart}
                  className="text-brand-muted hover:text-red-600 transition-colors cursor-pointer"
                >
                  Clear Inquiry Cart
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-brand-muted hover:text-brand-text font-medium cursor-pointer"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
