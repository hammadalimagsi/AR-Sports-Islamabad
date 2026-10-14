import React, { useState } from 'react';
import { 
  Sparkles, Layers, Palette, User, Hash, 
  Upload, CheckCircle2, ShieldAlert, ArrowRight, 
  MessageCircle, RotateCcw, Plus, AlertCircle 
} from 'lucide-react';
import { 
  SPORTS_CATEGORIES, 
  GARMENT_TYPES, 
  DESIGN_PATTERNS, 
  PRESET_COLORS 
} from '../data/productsData';
import { buildCustomDesignInquiryMessage } from '../utils/whatsappMessages';
import { openWhatsAppChat } from '../config/businessConfig';
import { useCart } from '../context/CartContext';

export default function GarmentCustomizer({ initialSport = "Cricket", initialProductType = "shirt" }) {
  const { addToCart } = useCart();

  // Customization Form State
  const [sport, setSport] = useState(initialSport);
  const [productType, setProductType] = useState(initialProductType);
  const [designPattern, setDesignPattern] = useState(DESIGN_PATTERNS[0].name);
  const [primaryColor, setPrimaryColor] = useState(PRESET_COLORS[0].hex);
  const [secondaryColor, setSecondaryColor] = useState(PRESET_COLORS[1].hex);
  const [playerName, setPlayerName] = useState("HAMMAD");
  const [playerNumber, setPlayerNumber] = useState("34");
  const [teamName, setTeamName] = useState("AR WARRIORS");
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(15);
  const [includePantsAndSocks, setIncludePantsAndSocks] = useState(true);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [formError, setFormError] = useState("");

  // Logo file state
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreviewUrl, setLogoPreviewUrl] = useState(null);

  // Garment View Toggle (Front vs Back)
  const [viewAngle, setViewAngle] = useState('front'); // 'front' | 'back'

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const preview = URL.createObjectURL(file);
      setLogoPreviewUrl(preview);
    }
  };

  const handleRemoveLogo = () => {
    setLogoFile(null);
    if (logoPreviewUrl) {
      URL.revokeObjectURL(logoPreviewUrl);
      setLogoPreviewUrl(null);
    }
  };

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();

    // Validate required fields before opening WhatsApp
    if (!playerName.trim()) {
      setFormError("Please provide Customer / Player Name.");
      return;
    }
    if (!quantity || Number(quantity) < 1) {
      setFormError("Please specify a valid kit quantity (minimum 1).");
      return;
    }
    if (!size) {
      setFormError("Please select a garment size.");
      return;
    }

    setFormError("");

    const message = buildCustomDesignInquiryMessage({
      sport,
      productType,
      designPattern,
      primaryColor,
      secondaryColor,
      playerName: playerName.trim(),
      playerNumber: playerNumber.trim(),
      size,
      quantity: Number(quantity) || 1,
      teamName: teamName.trim(),
      hasLogo: Boolean(logoFile),
      includePantsAndSocks,
      additionalNotes: additionalNotes.trim()
    });

    openWhatsAppChat(message);
  };

  const handleAddToCart = () => {
    const customItem = {
      id: `custom-${sport.toLowerCase()}-${productType.toLowerCase().replace(/\s+/g, '-')}`,
      name: `Custom ${sport} ${productType.toUpperCase()}`,
      sport: sport,
      category: "Custom Sportswear",
      images: [
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80"
      ]
    };

    addToCart(customItem, {
      quantity: Number(quantity) || 1,
      selectedSize: size,
      customDetails: {
        sport,
        productType,
        pattern: designPattern,
        primaryColor,
        secondaryColor,
        teamName,
        playerName,
        playerNumber,
        size,
        hasLogo: Boolean(logoFile),
        includePantsAndSocks
      }
    });
  };

  return (
    <div className="bg-white border border-brand-border rounded-3xl p-6 lg:p-8 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT: INTERACTIVE GARMENT PREVIEW */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full bg-brand-alt border border-brand-border rounded-2xl p-6 flex flex-col items-center relative overflow-hidden">
            
            {/* View angle toggle */}
            <div className="flex items-center gap-1.5 mb-4 bg-white p-1 rounded-xl border border-brand-border z-10 shadow-xs">
              <button
                type="button"
                onClick={() => setViewAngle('front')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${viewAngle === 'front' ? 'bg-brand-green text-white' : 'text-brand-muted hover:text-brand-text'}`}
              >
                Front View
              </button>
              <button
                type="button"
                onClick={() => setViewAngle('back')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${viewAngle === 'back' ? 'bg-brand-green text-white' : 'text-brand-muted hover:text-brand-text'}`}
              >
                Back View
              </button>
            </div>

            {/* SVG GARMENT VISUALIZER */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 flex items-center justify-center transition-transform">
              <svg 
                viewBox="0 0 300 360" 
                className="w-full h-full drop-shadow-md"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="garmentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={primaryColor} />
                    <stop offset="100%" stopColor={secondaryColor} />
                  </linearGradient>
                  
                  <pattern id="meshPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#ffffff" fillOpacity="0.08" />
                  </pattern>
                </defs>

                {/* Jersey Body Path */}
                <path
                  d="M 90 40 Q 150 70 210 40 L 270 90 L 230 145 L 205 125 L 205 320 Q 150 330 95 320 L 95 125 L 70 145 L 30 90 Z"
                  fill={primaryColor}
                  stroke="#1c2d5a"
                  strokeWidth="2.5"
                />

                {/* Mesh pattern overlay */}
                <path
                  d="M 90 40 Q 150 70 210 40 L 270 90 L 230 145 L 205 125 L 205 320 Q 150 330 95 320 L 95 125 L 70 145 L 30 90 Z"
                  fill="url(#meshPattern)"
                />

                {/* Accent Side Panels & Stripes */}
                <path
                  d="M 95 130 L 70 145 L 85 110 L 95 130 Z"
                  fill={secondaryColor}
                />
                <path
                  d="M 205 130 L 230 145 L 215 110 L 205 130 Z"
                  fill={secondaryColor}
                />

                {/* Side Racing Stripes */}
                <path
                  d="M 95 140 L 105 315 L 95 320 Z"
                  fill={secondaryColor}
                />
                <path
                  d="M 205 140 L 195 315 L 205 320 Z"
                  fill={secondaryColor}
                />

                {/* Collar design */}
                <path
                  d="M 110 40 Q 150 75 190 40 Q 150 55 110 40 Z"
                  fill={secondaryColor}
                />

                {/* FRONT VIEW ELEMENTS */}
                {viewAngle === 'front' && (
                  <g>
                    {/* AR Sports Chest Badge */}
                    <rect x="180" y="90" width="22" height="14" rx="3" fill="#000000" fillOpacity="0.4" />
                    <text x="191" y="101" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                      AR
                    </text>

                    {/* Team Crest or Uploaded Logo */}
                    {logoPreviewUrl ? (
                      <image
                        href={logoPreviewUrl}
                        x="98"
                        y="88"
                        width="24"
                        height="24"
                        preserveAspectRatio="xMidYMid meet"
                      />
                    ) : (
                      <g>
                        <circle cx="110" cy="98" r="10" fill={secondaryColor} stroke="#ffffff" strokeWidth="1" />
                        <text x="110" y="101" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">
                          LOGO
                        </text>
                      </g>
                    )}

                    {/* Center Team Sponsor Name */}
                    {teamName && (
                      <text
                        x="150"
                        y="170"
                        fill="#ffffff"
                        fontSize="17"
                        fontWeight="900"
                        fontFamily="Arial, sans-serif"
                        textAnchor="middle"
                        letterSpacing="2"
                        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.7))"
                      >
                        {teamName.toUpperCase().slice(0, 16)}
                      </text>
                    )}

                    {/* Small Front Number */}
                    {playerNumber && (
                      <text
                        x="150"
                        y="235"
                        fill="#ffffff"
                        fontSize="32"
                        fontWeight="900"
                        fontFamily="sans-serif"
                        textAnchor="middle"
                        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
                      >
                        {playerNumber}
                      </text>
                    )}
                  </g>
                )}

                {/* BACK VIEW ELEMENTS */}
                {viewAngle === 'back' && (
                  <g>
                    {/* Upper Back Player Name */}
                    {playerName && (
                      <text
                        x="150"
                        y="110"
                        fill="#ffffff"
                        fontSize="18"
                        fontWeight="900"
                        fontFamily="sans-serif"
                        textAnchor="middle"
                        letterSpacing="3"
                        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
                      >
                        {playerName.toUpperCase().slice(0, 14)}
                      </text>
                    )}

                    {/* Large Back Squad Number */}
                    {playerNumber && (
                      <text
                        x="150"
                        y="200"
                        fill="#ffffff"
                        fontSize="75"
                        fontWeight="900"
                        fontFamily="sans-serif"
                        textAnchor="middle"
                        letterSpacing="1"
                        filter="drop-shadow(0 3px 6px rgba(0,0,0,0.9))"
                      >
                        {playerNumber}
                      </text>
                    )}

                    {/* Lower Back Sponsor/AR */}
                    <text
                      x="150"
                      y="285"
                      fill="#ffffff"
                      fillOpacity="0.8"
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="sans-serif"
                      textAnchor="middle"
                      letterSpacing="2"
                    >
                      AR SPORTS
                    </text>
                  </g>
                )}
              </svg>
            </div>

            {/* Preview Spec Summary Badge */}
            <div className="w-full mt-4 pt-3 border-t border-brand-border text-xs text-brand-muted flex items-center justify-between">
              <span>Pattern: <strong className="text-brand-text">{designPattern}</strong></span>
              <span className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full border border-brand-border shadow-xs" style={{ backgroundColor: primaryColor }} />
                <span className="w-3.5 h-3.5 rounded-full border border-brand-border shadow-xs" style={{ backgroundColor: secondaryColor }} />
              </span>
            </div>
          </div>

          {/* Kit Pants / Socks add-on info */}
          {includePantsAndSocks && (
            <div className="w-full mt-3 p-3 bg-brand-alt border border-brand-border rounded-xl text-xs text-brand-text flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
              <span>Full kit selected: Matching custom trousers/shorts and athletic socks will be tailored.</span>
            </div>
          )}
        </div>

        {/* RIGHT: CUSTOMIZATION FORM CONTROLS */}
        <form onSubmit={handleWhatsAppOrder} className="lg:col-span-7 space-y-6">
          
          {/* STEP 1: SPORT & PRODUCT TYPE */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-green mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" /> 1. Select Sport & Garment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-brand-text mb-1">Sport</label>
                <select
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                  className="w-full bg-white border border-brand-border rounded-xl py-2.5 px-3 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                >
                  {SPORTS_CATEGORIES.map(s => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-text mb-1">Garment Type</label>
                <select
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  className="w-full bg-white border border-brand-border rounded-xl py-2.5 px-3 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                >
                  {GARMENT_TYPES.map(g => (
                    <option key={g.id} value={g.name}>{g.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Checkbox for full kit pants and socks */}
            <div className="mt-3">
              <label className="flex items-center gap-2.5 text-xs text-brand-text cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includePantsAndSocks}
                  onChange={(e) => setIncludePantsAndSocks(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-green border-brand-border focus:ring-brand-green"
                />
                <span>Include matching stretch pants/shorts and team socks in package</span>
              </label>
            </div>
          </div>

          {/* STEP 2: DESIGN PATTERN & COLORS */}
          <div className="border-t border-brand-border pt-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-green mb-3 flex items-center gap-2">
              <Palette className="w-4 h-4" /> 2. Choose Pattern & Colors
            </h3>
            
            {/* Pattern options */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
              {DESIGN_PATTERNS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setDesignPattern(p.name)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${designPattern === p.name ? 'border-brand-green bg-emerald-50/50 text-brand-text ring-1 ring-brand-green' : 'border-brand-border bg-white hover:border-brand-muted'}`}
                >
                  <div className="h-6 rounded-md mb-1.5" style={{ background: p.previewGradient }} />
                  <span className="text-xs font-semibold text-brand-text block truncate">{p.name}</span>
                </button>
              ))}
            </div>

            {/* Primary & Secondary Color Pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-brand-text mb-1.5">
                  Primary Base Color: <span className="text-brand-green uppercase font-bold">{primaryColor}</span>
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_COLORS.map(c => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setPrimaryColor(c.hex)}
                      className={`w-7 h-7 rounded-lg border transition-transform ${primaryColor === c.hex ? 'scale-110 border-brand-green ring-2 ring-brand-green' : 'border-brand-border hover:scale-105'}`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-7 h-7 rounded-lg cursor-pointer bg-transparent border-0"
                    title="Custom Color"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-text mb-1.5">
                  Secondary Accent Color: <span className="text-brand-green uppercase font-bold">{secondaryColor}</span>
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_COLORS.map(c => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSecondaryColor(c.hex)}
                      className={`w-7 h-7 rounded-lg border transition-transform ${secondaryColor === c.hex ? 'scale-110 border-brand-green ring-2 ring-brand-green' : 'border-brand-border hover:scale-105'}`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="w-7 h-7 rounded-lg cursor-pointer bg-transparent border-0"
                    title="Custom Color"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3: NAMES, NUMBERS & LOGO */}
          <div className="border-t border-brand-border pt-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-green mb-3 flex items-center gap-2">
              <User className="w-4 h-4" /> 3. Customer & Jersey Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-brand-text mb-1">
                  Customer / Player Name <span className="text-brand-green">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="e.g. Hammad Magsi"
                  className="w-full bg-white border border-brand-border rounded-xl py-2.5 px-3 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-text mb-1">
                  Jersey Number <span className="text-brand-green">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={playerNumber}
                  onChange={(e) => setPlayerNumber(e.target.value)}
                  placeholder="e.g. 10"
                  maxLength={3}
                  className="w-full bg-white border border-brand-border rounded-xl py-2.5 px-3 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-text mb-1">
                  Team / Club Name (Optional)
                </label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="e.g. AR WARRIORS"
                  className="w-full bg-white border border-brand-border rounded-xl py-2.5 px-3 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                />
              </div>
            </div>

            {/* LOGO UPLOAD & NOTICE */}
            <div className="mt-4 p-4 rounded-xl bg-brand-alt border border-brand-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <label className="block text-xs font-bold text-brand-text mb-0.5">
                    Team Crest / Sponsor Logo Upload
                  </label>
                  <p className="text-[11px] text-brand-muted">
                    Upload PNG, JPG or SVG for instant jersey preview. (Original high-resolution file will also be attached on WhatsApp)
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <label className="cursor-pointer px-4 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-emerald-50 text-brand-text border border-brand-border flex items-center gap-1.5 transition-colors shadow-xs">
                    <Upload className="w-3.5 h-3.5 text-brand-green" />
                    <span>{logoFile ? 'Change Logo' : 'Upload Logo'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                  </label>

                  {logoFile && (
                    <button
                      type="button"
                      onClick={handleRemoveLogo}
                      className="text-xs text-red-500 hover:underline px-2 py-1 font-semibold"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>

              {logoFile && (
                <div className="mt-2.5 text-xs text-brand-green flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Preview active: <strong>{logoFile.name}</strong></span>
                </div>
              )}
            </div>
          </div>

          {/* STEP 4: SIZES, QUANTITY & INSTRUCTIONS */}
          <div className="border-t border-brand-border pt-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-green mb-3 flex items-center gap-2">
              <Hash className="w-4 h-4" /> 4. Size, Quantity & Instructions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-brand-text mb-1.5">Select Size</label>
                <div className="grid grid-cols-7 gap-1">
                  {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSize(sz)}
                      className={`py-2 rounded-lg text-xs font-bold transition-all ${size === sz ? 'bg-brand-green text-white shadow-xs' : 'bg-brand-alt text-brand-text border border-brand-border hover:bg-emerald-50'}`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-text mb-1.5">
                  Order Quantity (Minimum 1 kit)
                </label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-white border border-brand-border rounded-xl py-2.5 px-3 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                />
              </div>
            </div>

            <div className="mt-3.5">
              <label className="block text-xs font-semibold text-brand-text mb-1">
                Additional Instructions
              </label>
              <textarea
                rows={2}
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                placeholder="Mention collar type (Chinese collar, V-neck, Polo), sleeve cuffs, fabric preference, tournament deadline..."
                className="w-full bg-white border border-brand-border rounded-xl p-3 text-brand-text text-xs focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
              />
            </div>
          </div>

          {/* ERROR ALERT IF VALIDATION FAILS */}
          {formError && (
            <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          {/* PRICING & CONFIRMATION NOTICE */}
          <div className="bg-brand-alt border border-brand-border rounded-2xl p-4 text-xs text-brand-muted space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-brand-text">
              <ShieldAlert className="w-4 h-4 text-brand-green" />
              <span>Personalized Pricing & 3D Proof Approval</span>
            </div>
            <p className="leading-relaxed">
              Clicking <strong>Place Order on WhatsApp</strong> opens our verified WhatsApp line with all your kit specifications pre-formatted. We will confirm bulk pricing, fabric swatches, and send a 3D vector proof for your approval before printing.
            </p>
          </div>

          {/* ACTIONS: PLACE ORDER ON WHATSAPP & ADD TO CART */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-brand-green hover:bg-brand-hover text-white flex items-center justify-center gap-2 shadow-md shadow-brand-green/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Place Order on WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-white hover:bg-brand-alt text-brand-text border border-brand-border flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <Plus className="w-4 h-4 text-brand-green" />
              <span>Save & Add to Inquiry Cart</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
