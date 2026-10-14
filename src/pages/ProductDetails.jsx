import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, MessageCircle, ShoppingBag, Sparkles, 
  ShieldCheck, Truck, RefreshCw, Layers, CheckCircle2, 
  Share2, Plus 
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';
import { buildProductInquiryMessage } from '../utils/whatsappMessages';
import { openWhatsAppChat } from '../config/businessConfig';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = PRODUCTS_DATA.find(p => p.id === productId);

  // States
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || product?.colors?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [customNotes, setCustomNotes] = useState("");

  if (!product) {
    return (
      <div className="py-24 bg-dark-950 min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-2">Product Not Found</h2>
        <p className="text-slate-400 text-sm mb-6">The requested sports product or kit design does not exist.</p>
        <Link
          to="/shop"
          className="px-6 py-3 rounded-xl bg-neon-500 text-black font-extrabold text-sm hover:bg-neon-400 transition-colors"
        >
          Back to Shop All
        </Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS_DATA.filter(
    p => p.sportSlug === product.sportSlug && p.id !== product.id
  ).slice(0, 4);

  const handleWhatsAppInquiry = (e) => {
    e.preventDefault();
    const msg = buildProductInquiryMessage({
      product,
      selectedVariant,
      selectedSize,
      quantity,
      notes: customNotes
    });
    openWhatsAppChat(msg);
  };

  const handleAddToCart = () => {
    addToCart(product, {
      quantity: Number(quantity) || 1,
      selectedSize,
      selectedVariant,
    });
  };

  return (
    <div className="py-12 bg-dark-950 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB NAVIGATION */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
          <span>/</span>
          <Link to={`/shop?sport=${product.sportSlug}`} className="hover:text-neon-400 transition-colors">{product.sport}</Link>
          <span>/</span>
          <span className="text-slate-200 truncate max-w-xs">{product.name}</span>
        </div>

        {/* MAIN PRODUCT DETAIL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: GALLERY */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-dark-900 border border-dark-800 relative shadow-2xl">
              <img
                src={product.images?.[activeImageIndex] || product.images?.[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-dark-950/90 text-white border border-dark-700">
                  {product.sport}
                </span>
                {product.badge && (
                  <span className="px-3 py-1 rounded-lg text-xs font-extrabold uppercase tracking-wider bg-neon-500 text-black shadow">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail selector */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${activeImageIndex === idx ? 'border-neon-500 ring-2 ring-neon-500/30' : 'border-dark-800 hover:border-slate-600'}`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Credibility highlights */}
            <div className="grid grid-cols-3 gap-3 pt-4 text-center">
              <div className="bg-dark-900 border border-dark-800 rounded-2xl p-4">
                <ShieldCheck className="w-5 h-5 text-neon-400 mx-auto mb-2" />
                <p className="text-xs font-bold text-white">Genuine Materials</p>
                <p className="text-[10px] text-slate-400 mt-0.5">High GSM Fabric</p>
              </div>
              <div className="bg-dark-900 border border-dark-800 rounded-2xl p-4">
                <Truck className="w-5 h-5 text-neon-400 mx-auto mb-2" />
                <p className="text-xs font-bold text-white">Direct Dispatch</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Nationwide Courier</p>
              </div>
              <div className="bg-dark-900 border border-dark-800 rounded-2xl p-4">
                <Sparkles className="w-5 h-5 text-neon-400 mx-auto mb-2" />
                <p className="text-xs font-bold text-white">Customization</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Rosters & Names</p>
              </div>
            </div>
          </div>

          {/* RIGHT: PRODUCT INFO & ORDER FORM */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="uppercase tracking-wider font-semibold text-slate-400">{product.category}</span>
                <span className="text-neon-400 font-bold bg-dark-900 border border-neon-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-400" />
                  Price on WhatsApp
                </span>
              </div>
              
              <h1 className="font-teko text-3xl sm:text-5xl font-bold text-white tracking-wide leading-tight">
                {product.name}
              </h1>

              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* KEY FEATURES LIST */}
            {product.features && (
              <div className="bg-dark-900 border border-dark-800 rounded-2xl p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  Specifications & Highlights:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neon-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* PRODUCT OPTIONS SELECTION */}
            <form onSubmit={handleWhatsAppInquiry} className="space-y-5 pt-2">
              
              {/* SIZES */}
              {product.sizes && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Available Sizes: <span className="text-neon-400">{selectedSize}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${selectedSize === size ? 'bg-neon-500 text-black shadow-md shadow-neon-500/20' : 'bg-dark-900 text-slate-300 border border-dark-800 hover:border-slate-600'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* VARIANTS OR COLORS */}
              {(product.variants || product.colors) && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Select Option / Variant: <span className="text-white">{selectedVariant}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(product.variants || product.colors).map(variant => (
                      <button
                        key={variant}
                        type="button"
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${selectedVariant === variant ? 'bg-dark-800 text-white border-2 border-neon-500' : 'bg-dark-900 text-slate-400 border border-dark-800 hover:text-white'}`}
                      >
                        {variant}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* QUANTITY */}
              <div className="w-36">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Order Quantity:
                </label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-dark-900 border border-dark-700 rounded-xl py-2 px-3 text-white text-sm focus:border-neon-500 focus:outline-none"
                />
              </div>

              {/* SPECIAL NOTES */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Inquiry Notes / Custom Requirements (Optional):
                </label>
                <textarea
                  rows={2}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Need custom sponsor logos, specific numbers, or bulk team pricing?"
                  className="w-full bg-dark-900 border border-dark-700 rounded-xl p-3 text-white text-xs focus:border-neon-500 focus:outline-none"
                />
              </div>

              {/* CRITICAL ZERO-PRICE RULE REMINDER */}
              <div className="p-3.5 rounded-xl bg-dark-900 border border-dark-800 text-xs text-slate-400 leading-relaxed">
                <strong className="text-white">Custom Pricing on Inquiry: </strong>
                Because every custom sportswear piece has unique printing specifications, fabric GSM, and quantity requirements, our admin confirms the final quotation and delivery timetable personally on WhatsApp.
              </div>

              {/* PRIMARY ACTION BUTTONS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-extrabold text-sm bg-neon-500 hover:bg-neon-400 text-black flex items-center justify-center gap-2 shadow-xl shadow-neon-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Order on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-dark-800 hover:bg-dark-750 text-white border border-dark-700 flex items-center justify-center gap-2 transition-colors"
                >
                  <Plus className="w-5 h-5 text-neon-400" />
                  <span>Add to Inquiry Cart</span>
                </button>
              </div>

              {/* CUSTOMIZER LINK IF CUSTOMIZABLE */}
              {product.isCustomizable && (
                <div className="pt-2">
                  <Link
                    to={`/custom-design?sport=${product.sportSlug}&product=${product.id}`}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-dark-900 hover:bg-dark-850 text-neon-400 border border-neon-500/30 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-neon-400" />
                    <span>Open in 3D Garment Customizer</span>
                  </Link>
                </div>
              )}

            </form>
          </div>

        </div>

        {/* RELATED PRODUCTS SECTION */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-dark-800">
            <h3 className="font-teko text-3xl font-bold text-white tracking-wide mb-6">
              RELATED {product.sport.toUpperCase()} GEAR
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(rel => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
