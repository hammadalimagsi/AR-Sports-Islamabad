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
        className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-dark-900 border-l border-dark-800 shadow-2xl flex flex-col">
          
          {/* HEADER */}
          <div className="p-6 border-b border-dark-800 flex items-center justify-between bg-dark-950/70">
            <div className="flex items-center gap-2">
              <h2 className="font-teko text-2xl font-bold text-white tracking-wide">
                ORDER INQUIRY CART
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-dark-850 text-neon-400 border border-neon-500/30">
                {totalItemsCount} {totalItemsCount === 1 ? 'Item' : 'Items'}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-dark-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* CRITICAL PRICING NOTICE BANNER */}
          <div className="bg-dark-950/80 px-6 py-2.5 border-b border-dark-800 text-xs text-slate-300 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-neon-400 flex-shrink-0" />
            <span>Prices are customized per order and finalized via WhatsApp.</span>
          </div>

          {/* CART ITEMS LIST */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-dark-950 border border-dark-800 flex items-center justify-center text-slate-400">
                  <Sparkles className="w-8 h-8 text-neon-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Your Inquiry Cart is Empty</h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">
                    Browse our sportswear, customized team kits, or equipment and add items to request a custom quote.
                  </p>
                </div>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-sm font-bold bg-neon-500 hover:bg-neon-400 text-black transition-colors"
                >
                  Explore Products
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.cartItemId} 
                  className="bg-dark-950 border border-dark-800 rounded-2xl p-4 flex gap-4 relative group"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.image || 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=300&q=80'}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover bg-dark-900 border border-dark-800 flex-shrink-0"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=300&q=80';
                    }}
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-white truncate">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-slate-400 hover:text-red-400 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-xs text-slate-400 mt-1 space-y-0.5">
                      <p><span className="text-slate-400">Sport:</span> {item.sport}</p>
                      
                      {item.customDetails ? (
                        <div className="bg-dark-900 rounded-xl p-2 mt-1 border border-dark-800 text-[11px] space-y-0.5">
                          <p><strong className="text-neon-400">Custom Kit:</strong> {item.customDetails.productType}</p>
                          <p>Colors: {item.customDetails.primaryColor} / {item.customDetails.secondaryColor}</p>
                          {item.customDetails.playerName && (
                            <p>Player: {item.customDetails.playerName} (#{item.customDetails.playerNumber})</p>
                          )}
                          {item.customDetails.teamName && (
                            <p>Team: {item.customDetails.teamName}</p>
                          )}
                          <p>Size: {item.customDetails.size}</p>
                        </div>
                      ) : (
                        <>
                          {item.selectedSize && <p><span className="text-slate-400">Size:</span> {item.selectedSize}</p>}
                          {item.selectedVariant && <p><span className="text-slate-400">Variant:</span> {item.selectedVariant}</p>}
                        </>
                      )}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-dark-800">
                      <span className="text-xs text-slate-400 font-medium">Quantity</span>
                      <div className="flex items-center border border-dark-700 rounded-lg overflow-hidden bg-dark-900">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1 text-slate-400 hover:text-white hover:bg-dark-800 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1 text-slate-400 hover:text-white hover:bg-dark-800 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* FOOTER ACTIONS */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-dark-800 bg-dark-950/80 space-y-3">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>Total Pieces:</span>
                <span className="font-bold text-white">{totalItemsCount} pieces</span>
              </div>
              
              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm bg-neon-500 hover:bg-neon-400 text-black flex items-center justify-center gap-2 shadow-xl shadow-neon-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Send Order on WhatsApp</span>
              </button>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={clearCart}
                  className="text-xs text-slate-400 hover:text-red-400 transition-colors"
                >
                  Clear Cart
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-xs text-slate-400 hover:text-white transition-colors"
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
