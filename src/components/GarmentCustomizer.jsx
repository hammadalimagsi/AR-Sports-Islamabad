import React, { useState } from 'react';
import { 
  Sparkles, Layers, Palette, User, Hash, 
  Upload, CheckCircle2, ShieldAlert, ArrowRight, 
  MessageCircle, RotateCcw, Plus 
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
    const message = buildCustomDesignInquiryMessage({
      sport,
      productType,
      designPattern,
      primaryColor,
      secondaryColor,
      playerName,
      playerNumber,
      size,
      quantity,
      teamName,
      hasLogo: Boolean(logoFile),
      includePantsAndSocks,
      additionalNotes
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
    <div className="bg-navy-900 border border-navy-800 rounded-3xl p-6 lg:p-8 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT / CENTER: INTERACTIVE GARMENT PREVIEW (SVG / CANVAS VISUALIZER) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full bg-navy-950 border border-navy-800 rounded-2xl p-6 flex flex-col items-center relative overflow-hidden">
            
            {/* View angle toggle */}
            <div className="flex items-center gap-2 mb-4 bg-navy-900 p-1 rounded-xl border border-navy-800 z-10">
              <button
                type="button"
                onClick={() => setViewAngle('front')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${viewAngle === 'front' ? 'bg-electric-500 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Front View
              </button>
              <button
                type="button"
                onClick={() => setViewAngle('back')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${viewAngle === 'back' ? 'bg-electric-500 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Back View
              </button>
            </div>

            {/* SVG GARMENT VISUALIZER */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 flex items-center justify-center transition-transform">
              <svg 
                viewBox="0 0 300 360" 
                className="w-full h-full drop-shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Collar pattern */}
                  <linearGradient id="garmentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={primaryColor} />
                    <stop offset="100%" stopColor={secondaryColor} />
                  </linearGradient>
                  
                  {/* Subtle jersey texture */}
                  <pattern id="meshPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#ffffff" fillOpacity="0.05" />
                  </pattern>
                </defs>

                {/* Jersey Body Path */}
                <path
                  d="M 90 40 Q 150 70 210 40 L 270 90 L 230 145 L 205 125 L 205 320 Q 150 330 95 320 L 95 125 L 70 145 L 30 90 Z"
                  fill={primaryColor}
                  stroke="#1c2d5a"
                  strokeWidth="3"
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
            <div className="w-full mt-4 pt-3 border-t border-navy-800 text-xs text-slate-300 flex items-center justify-between">
              <span>Selected Pattern: <strong className="text-white">{designPattern}</strong></span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full border border-white/40" style={{ backgroundColor: primaryColor }} />
                <span className="w-3 h-3 rounded-full border border-white/40" style={{ backgroundColor: secondaryColor }} />
              </span>
            </div>
          </div>

          {/* Kit Pants / Socks add-on info */}
          {includePantsAndSocks && (
            <div className="w-full mt-3 p-3 bg-navy-950/60 border border-navy-800 rounded-xl text-xs text-slate-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Full kit selected: Matching custom trousers/shorts and athletic socks will be tailored.</span>
            </div>
          )}
        </div>

        {/* RIGHT: CUSTOMIZATION FORM CONTROLS */}
        <form onSubmit={handleWhatsAppOrder} className="lg:col-span-7 space-y-6">
          
          {/* STEP 1: SPORT & PRODUCT TYPE */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-electric-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" /> 1. Select Sport & Garment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Sport</label>
                <select
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                  className="w-full bg-navy-950 border border-navy-700 rounded-xl py-2.5 px-3 text-white text-sm focus:border-electric-500 focus:outline-none"
                >
                  {SPORTS_CATEGORIES.map(s => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Garment Type</label>
                <select
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  className="w-full bg-navy-950 border border-navy-700 rounded-xl py-2.5 px-3 text-white text-sm focus:border-electric-500 focus:outline-none"
                >
                  {GARMENT_TYPES.map(g => (
                    <option key={g.id} value={g.name}>{g.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Checkbox for full kit pants and socks */}
            <div className="mt-3">
              <label className="flex items-center gap-2.5 text-xs text-slate-300 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includePantsAndSocks}
                  onChange={(e) => setIncludePantsAndSocks(e.target.checked)}
                  className="w-4 h-4 rounded text-electric-500 bg-navy-950 border-navy-700 focus:ring-0"
                />
                <span>Include matching stretch pants/shorts and team socks in package</span>
              </label>
            </div>
          </div>

          {/* STEP 2: DESIGN PATTERN & COLORS */}
          <div className="border-t border-navy-800 pt-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-electric-400 mb-3 flex items-center gap-2">
              <Palette className="w-4 h-4" /> 2. Choose Pattern & Colors
            </h3>
            
            {/* Pattern options */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
              {DESIGN_PATTERNS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setDesignPattern(p.name)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${designPattern === p.name ? 'border-electric-500 bg-navy-800/90 ring-1 ring-electric-500' : 'border-navy-800 bg-navy-950 hover:border-navy-700'}`}
                >
                  <div className="h-6 rounded-md mb-1.5" style={{ background: p.previewGradient }} />
                  <span className="text-xs font-medium text-white block truncate">{p.name}</span>
                </button>
              ))}
            </div>

            {/* Primary & Secondary Color Pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Primary Base Color: <span className="text-white uppercase">{primaryColor}</span>
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_COLORS.map(c => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setPrimaryColor(c.hex)}
                      className={`w-7 h-7 rounded-lg border-2 transition-transform ${primaryColor === c.hex ? 'scale-110 border-white ring-2 ring-electric-500' : 'border-navy-800 hover:scale-105'}`}
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
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Secondary Accent Color: <span className="text-white uppercase">{secondaryColor}</span>
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_COLORS.map(c => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSecondaryColor(c.hex)}
                      className={`w-7 h-7 rounded-lg border-2 transition-transform ${secondaryColor === c.hex ? 'scale-110 border-white ring-2 ring-electric-500' : 'border-navy-800 hover:scale-105'}`}
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
          <div className="border-t border-navy-800 pt-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-electric-400 mb-3 flex items-center gap-2">
              <User className="w-4 h-4" /> 3. Player, Team & Logo Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Team / School Name</label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="e.g. AR WARRIORS"
                  className="w-full bg-navy-950 border border-navy-700 rounded-xl py-2 px-3 text-white text-sm focus:border-electric-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Sample Player Name</label>
                <input
                  type="text"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="e.g. HAMMAD"
                  className="w-full bg-navy-950 border border-navy-700 rounded-xl py-2 px-3 text-white text-sm focus:border-electric-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Player Number</label>
                <input
                  type="text"
                  value={playerNumber}
                  onChange={(e) => setPlayerNumber(e.target.value)}
                  placeholder="e.g. 34"
                  maxLength={3}
                  className="w-full bg-navy-950 border border-navy-700 rounded-xl py-2 px-3 text-white text-sm focus:border-electric-500 focus:outline-none"
                />
              </div>
            </div>

            {/* LOGO UPLOAD & NOTICE */}
            <div className="mt-4 p-4 rounded-xl bg-navy-950 border border-navy-800">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <label className="block text-xs font-bold text-white mb-0.5">
                    Team Crest / Sponsor Logo Preview
                  </label>
                  <p className="text-[11px] text-slate-400">
                    PNG, SVG, or JPG (For garment mockup preview only; original vector file to be sent via WhatsApp)
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <label className="cursor-pointer px-4 py-2 rounded-xl text-xs font-semibold bg-navy-800 hover:bg-navy-700 text-white border border-navy-700 flex items-center gap-1.5 transition-colors">
                    <Upload className="w-3.5 h-3.5 text-electric-400" />
                    <span>{logoFile ? 'Change File' : 'Choose Logo'}</span>
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
                      className="text-xs text-red-400 hover:underline"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>

              {logoFile && (
                <div className="mt-2 text-xs text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Loaded for preview: <strong>{logoFile.name}</strong></span>
                </div>
              )}
            </div>
          </div>

          {/* STEP 4: SIZES, QUANTITY & INSTRUCTIONS */}
          <div className="border-t border-navy-800 pt-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-electric-400 mb-3 flex items-center gap-2">
              <Hash className="w-4 h-4" /> 4. Size & Order Quantity
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Sample Size</label>
                <div className="grid grid-cols-6 gap-1">
                  {["XS", "S", "M", "L", "XL", "2XL"].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSize(sz)}
                      className={`py-2 rounded-lg text-xs font-bold transition-colors ${size === sz ? 'bg-electric-500 text-white' : 'bg-navy-950 text-slate-300 border border-navy-800 hover:border-navy-700'}`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Order Quantity (Minimum 1 kit recommended)
                </label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-navy-950 border border-navy-700 rounded-xl py-2 px-3 text-white text-sm focus:border-electric-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-3">
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Additional Instructions / Collar Style / Collar Neck
              </label>
              <textarea
                rows={2}
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                placeholder="Mention collar type (Chinese collar, V-neck, Polo), sleeve cuffs, sponsor tagline..."
                className="w-full bg-navy-950 border border-navy-700 rounded-xl p-2.5 text-white text-xs focus:border-electric-500 focus:outline-none"
              />
            </div>
          </div>

          {/* CRITICAL PRICING & CONFIRMATION WARNING */}
          <div className="bg-navy-950 border border-navy-800 rounded-xl p-4 text-xs text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-slate-200">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Personalized Pricing & Final Confirmation</span>
            </div>
            <p>
              Submitting this design will launch WhatsApp with your complete kit specifications. Our admin will confirm final pricing, fabric swatches, and turnaround time directly with you.
            </p>
          </div>

          {/* ACTIONS: PLACE ORDER ON WHATSAPP & ADD TO CART */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Place Order on WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-navy-800 hover:bg-navy-700 text-white border border-navy-700 flex items-center justify-center gap-2 transition-colors"
            >
              <Plus className="w-5 h-5 text-electric-400" />
              <span>Save & Add to Inquiry Cart</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
