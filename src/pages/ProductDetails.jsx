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
      <div className="py-24 bg-white min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-brand-text mb-2">Product Not Found</h2>
        <p className="text-brand-muted text-sm mb-6">The requested sports product or kit design does not exist.</p>
        <Link
          to="/shop"
          className="px-6 py-3 rounded-xl bg-brand-green text-white font-bold text-sm hover:bg-brand-hover transition-colors shadow-sm"
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
    let msg = buildProductInquiryMessage({
      product,
      selectedVariant,
      selectedSize,
      quantity,
      notes: customNotes
    });
    if (product.imageStatus === 'needs_client_photo') {
      msg += "\n\n_Note: Please also share live actual photographs and video of this item from your shop floor._";
    }
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
    <div className="py-12 bg-white min-h-screen text-brand-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB NAVIGATION */}
        <div className="flex items-center gap-2 text-xs text-brand-muted mb-8">
          <Link to="/" className="hover:text-brand-text transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-brand-text transition-colors">Shop</Link>
          <span>/</span>
          <Link to={`/shop?sport=${product.sportSlug}`} className="hover:text-brand-green transition-colors">{product.sport}</Link>
          <span>/</span>
          <span className="text-brand-text font-medium truncate max-w-xs">{product.name}</span>
        </div>

        {/* MAIN PRODUCT DETAIL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: GALLERY */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-brand-alt border border-brand-border relative shadow-sm">
              <img
                src={product.images?.[activeImageIndex] || product.images?.[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-brand-text border border-brand-border shadow-xs">
                  {product.sport}
                </span>
                {product.badge && (
                  <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-brand-green text-white shadow-xs">
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
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${activeImageIndex === idx ? 'border-brand-green ring-2 ring-brand-green/30' : 'border-brand-border hover:border-brand-muted'}`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Credibility highlights */}
            <div className="grid grid-cols-3 gap-3 pt-4 text-center">
              <div className="bg-brand-alt border border-brand-border rounded-2xl p-4 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-brand-green mx-auto mb-2" />
                <p className="text-xs font-bold text-brand-text">Genuine Materials</p>
                <p className="text-[11px] text-brand-muted mt-0.5">High GSM Fabric</p>
              </div>
              <div className="bg-brand-alt border border-brand-border rounded-2xl p-4 shadow-xs">
                <Truck className="w-5 h-5 text-brand-green mx-auto mb-2" />
                <p className="text-xs font-bold text-brand-text">Direct Dispatch</p>
                <p className="text-[11px] text-brand-muted mt-0.5">Nationwide Courier</p>
              </div>
              <div className="bg-brand-alt border border-brand-border rounded-2xl p-4 shadow-xs">
                <Sparkles className="w-5 h-5 text-brand-green mx-auto mb-2" />
                <p className="text-xs font-bold text-brand-text">Customization</p>
                <p className="text-[11px] text-brand-muted mt-0.5">Rosters & Names</p>
              </div>
            </div>
          </div>

          {/* RIGHT: PRODUCT INFO & ORDER FORM */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-brand-muted mb-2">
                <span className="uppercase tracking-wider font-semibold text-brand-muted">{product.category}</span>
                <span className="text-brand-green font-bold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                  Price on WhatsApp
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-4xl font-extrabold text-brand-text tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-sm text-brand-muted mt-3 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* PHOTO VERIFICATION NOTICE IF PENDING CLIENT PHOTOS */}
            {product.imageStatus === 'needs_client_photo' && (
              <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-950 text-xs">
                <div className="flex items-center gap-2 font-bold text-amber-900 mb-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>Actual Shop Photograph Available on Request</span>
                </div>
                <p className="leading-relaxed text-amber-800">
                  {product.photoNotice || "This is a specialized local product handcrafted or stocked at our Rawalpindi / Islamabad workshop. In keeping with our genuine product policy, contact our team directly on WhatsApp to receive real-time photos and videos of current stock."}
                </p>
              </div>
            )}

            {/* KEY FEATURES LIST */}
            {product.features && (
              <div className="bg-brand-alt border border-brand-border rounded-2xl p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text mb-2.5">
                  Specifications & Highlights:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-muted">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                      <span className="text-brand-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CUSTOMIZATION OPTIONS IF APPLICABLE */}
            {product.customizationOptions && product.customizationOptions.length > 0 && (
              <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-brand-green" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text">
                    Available Customization Options:
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {product.customizationOptions.map((opt, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white border border-emerald-200 text-xs font-semibold text-brand-text shadow-2xs"
                    >
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* PRODUCT OPTIONS SELECTION */}
            <form onSubmit={handleWhatsAppInquiry} className="space-y-5 pt-2">
              
              {/* SIZES */}
              {product.sizes && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-2">
                    Available Sizes: <span className="text-brand-green">{selectedSize}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${selectedSize === size ? 'bg-brand-green text-white shadow-xs' : 'bg-brand-alt text-brand-text border border-brand-border hover:bg-emerald-50'}`}
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-2">
                    Select Option / Variant: <span className="text-brand-text font-bold">{selectedVariant}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(product.variants || product.colors).map(variant => (
                      <button
                        key={variant}
                        type="button"
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${selectedVariant === variant ? 'bg-white text-brand-text border-2 border-brand-green font-bold shadow-xs' : 'bg-brand-alt text-brand-muted border border-brand-border hover:text-brand-text'}`}
                      >
                        {variant}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* QUANTITY */}
              <div className="w-36">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1.5">
                  Order Quantity:
                </label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-white border border-brand-border rounded-xl py-2 px-3 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                />
              </div>

              {/* SPECIAL NOTES */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1.5">
                  Inquiry Notes / Custom Requirements (Optional):
                </label>
                <textarea
                  rows={2}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Need custom sponsor logos, specific numbers, or bulk team pricing?"
                  className="w-full bg-white border border-brand-border rounded-xl p-3 text-brand-text text-xs focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                />
              </div>

              {/* ZERO-PRICE RULE REMINDER */}
              <div className="p-3.5 rounded-xl bg-brand-alt border border-brand-border text-xs text-brand-muted leading-relaxed">
                <strong className="text-brand-text">Custom Pricing on Inquiry: </strong>
                Because every custom sportswear piece has unique printing specifications, fabric GSM, and quantity requirements, our admin confirms the final quotation and delivery timetable personally on WhatsApp.
              </div>

              {/* PRIMARY ACTION BUTTONS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-brand-green hover:bg-brand-hover text-white flex items-center justify-center gap-2 shadow-md shadow-brand-green/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Order on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-white hover:bg-brand-alt text-brand-text border border-brand-border flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4 text-brand-green" />
                  <span>Add to Inquiry Cart</span>
                </button>
              </div>

              {/* CUSTOMIZER LINK IF CUSTOMIZABLE */}
              {product.isCustomizable && (
                <div className="pt-2">
                  <Link
                    to={`/custom-design?sport=${product.sportSlug}&product=${product.id}`}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-brand-alt hover:bg-emerald-50 text-brand-green border border-emerald-200 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-brand-green" />
                    <span>Open in 3D Garment Customizer</span>
                  </Link>
                </div>
              )}

            </form>
          </div>

        </div>

        {/* RELATED PRODUCTS SECTION */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-brand-border">
            <h3 className="text-2xl font-bold text-brand-text tracking-tight mb-6">
              Related {product.sport} Gear
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
