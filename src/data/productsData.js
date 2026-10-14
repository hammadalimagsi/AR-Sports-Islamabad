/**
 * AR SPORTS - Central Product & Sports Catalog
 * 
 * CRITICAL BUSINESS RULE:
 * Prices are intentionally omitted everywhere across this catalog.
 * Every order receives custom confirmation and quoting via WhatsApp.
 */

export const SPORTS_CATEGORIES = [
  {
    id: "cricket",
    name: "Cricket",
    slug: "cricket",
    description: "Custom sublimation cricket jerseys, test whites, match trousers, grade-1 English willow bats, and protective gear.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
    badge: "Most Popular",
    equipmentCount: "18+ Products"
  },
  {
    id: "football",
    name: "Football",
    slug: "football",
    description: "Pro breathable football kits, goalie uniforms, training bibs, FIFA-grade match footballs, and shin pads.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
    badge: "Trending",
    equipmentCount: "14+ Products"
  },
  {
    id: "badminton",
    name: "Badminton",
    slug: "badminton",
    description: "Ultra-lightweight moisture-wicking shirts, graphite carbon rackets, feather shuttlecocks, and tournament court nets.",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
    badge: "High Performance",
    equipmentCount: "10+ Products"
  },
  {
    id: "basketball",
    name: "Basketball",
    slug: "basketball",
    description: "Custom reversible basketball jerseys, wide-cut mesh shorts, indoor/outdoor composite leather basketballs.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
    badge: "Pro Mesh",
    equipmentCount: "8+ Products"
  },
  {
    id: "volleyball",
    name: "Volleyball",
    slug: "volleyball",
    description: "Sleeveless and short-sleeve athletic volleyball tops, team kits, official size volleyballs, and heavy-duty nets.",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80",
    badge: "Durable",
    equipmentCount: "8+ Products"
  },
  {
    id: "tennis",
    name: "Tennis",
    slug: "tennis",
    description: "Engineered polo shirts, tennis skirts, tour-grade tennis balls, vibration dampeners, and racket bags.",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80",
    badge: "Classic",
    equipmentCount: "6+ Products"
  },
  {
    id: "gym-fitness",
    name: "Gym & Fitness",
    slug: "gym-fitness",
    description: "Compression wear, drop-arm tank tops, dry-fit training tracksuits, gym lifting belts, and resistance straps.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    badge: "Everyday Core",
    equipmentCount: "12+ Products"
  },
  {
    id: "school-teamwear",
    name: "School & Teamwear",
    slug: "school-teamwear",
    description: "Bulk custom academy uniforms, inter-school sports kits, tracksuits, house t-shirts, and blazer crests.",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80",
    badge: "Bulk Specialist",
    equipmentCount: "Customized"
  },
  {
    id: "other-sports",
    name: "Other Sports",
    slug: "other-sports",
    description: "Field hockey kits, table tennis apparel, track & field singlets, and multi-sport agility training gear.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    badge: "Custom Orders",
    equipmentCount: "Available"
  }
];

export const PRODUCTS_DATA = [
  // CRICKET
  {
    id: "cricket-sublimation-jersey",
    name: "AR Pro Custom Sublimation Cricket Jersey",
    sport: "Cricket",
    sportSlug: "cricket",
    category: "Sportswear",
    type: "shirt",
    isCustomizable: true,
    isFeatured: true,
    badge: "Best Seller",
    shortDescription: "Ultra-breathable micro-interlock fabric with 100% full digital sublimation for vivid colors that never fade.",
    description: "Engineered specifically for long innings under hot sun. Made from lightweight anti-bacterial polyester with laser-cut side ventilation eyelets. Fully customizable with your sponsor logos, team crest, individual player name and numbers in high-definition sublimation.",
    images: [
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Navy / Electric Blue", "Forest Green / Gold", "Royal Blue / Red", "Custom Combination"],
    features: ["Quick-dry CoolMax moisture wicking", "Full sublimation digital printing", "Anti-chafing flatlock stitching", "UV 30+ sun protection"]
  },
  {
    id: "cricket-complete-match-kit",
    name: "AR Elite Complete Cricket Match Kit",
    sport: "Cricket",
    sportSlug: "cricket",
    category: "Sportswear",
    type: "complete kit",
    isCustomizable: true,
    isFeatured: true,
    badge: "Team Favorite",
    shortDescription: "Complete customized set including sublimated jersey, heavy-duty stretch trousers, and matching padded socks.",
    description: "The complete tournament-ready uniform package for clubs and schools. Comes with a personalized jersey featuring customized team graphics, matching flexible athletic trousers with zippered side pockets, and breathable calf socks.",
    images: [
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Custom Team Colors", "White / Green", "Navy / Yellow", "Black / Neon Cyan"],
    features: ["Includes Jersey, Trouser & Cushioned Socks", "Reinforced knee panelling on trousers", "Customized name & number for each squad player"]
  },
  {
    id: "cricket-match-trousers",
    name: "AR Pro Performance Cricket Trousers",
    sport: "Cricket",
    sportSlug: "cricket",
    category: "Sportswear",
    type: "pants",
    isCustomizable: true,
    isFeatured: false,
    shortDescription: "Heavy-stretch athletic polyester trousers with elasticated drawstring waistband.",
    description: "Designed for intense diving and agility in the field. Features stretch gusset, deep pockets for ball carrying, and moisture-resistant cuffs.",
    images: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["White", "Off-White Cream", "Navy Blue", "Black"],
    features: ["Reinforced knee sections", "Breathable crotch ventilation", "Dual secure side pockets"]
  },
  {
    id: "cricket-english-willow-bat",
    name: "AR Master English Willow Cricket Bat",
    sport: "Cricket",
    sportSlug: "cricket",
    category: "Equipment",
    type: "equipment",
    isCustomizable: false,
    isFeatured: true,
    badge: "Grade 1 Willow",
    shortDescription: "Hand-crafted Grade 1 air-dried English willow with huge profile, massive edges, and supreme balance.",
    description: "Engineered for power hitters. Features a mid-to-low sweet spot, 38-40mm edges, semi-oval Sarawak cane handle with chevron grip for ultimate shock absorption.",
    images: [
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Short Handle (SH)", "Long Handle (LH)", "Size 6", "Size 5"],
    variants: ["Light (2.7 - 2.8 lbs)", "Medium (2.8 - 2.9 lbs)", "Heavy (2.10+ lbs)"],
    features: ["Hand-crafted Grade 1 English Willow", "Multi-piece cane handle", "Embossed AR chrome decals", "Comes with padded bat cover"]
  },
  {
    id: "cricket-leather-balls-box",
    name: "AR Crown Tournament 4-Piece Leather Balls (Box of 6)",
    sport: "Cricket",
    sportSlug: "cricket",
    category: "Equipment",
    type: "equipment",
    isCustomizable: false,
    isFeatured: false,
    shortDescription: "Alum-tanned steer hide 4-piece leather balls for league, club, and school multi-day matches.",
    description: "Hand-stitched with 80+ stitches, cork-rubber laminated core, lacquered finish for maximum seam retention and swing longevity through 50+ overs.",
    images: [
      "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Standard Men 156g", "Youth 135g"],
    colors: ["Traditional Red", "Day-Night White", "High-Visibility Pink"],
    features: ["Top-grade alum-tanned leather", "Laminated Portuguese cork center", "Box of 6 match balls"]
  },
  {
    id: "cricket-batting-gloves-pads",
    name: "AR Pro Shield Batting Gloves & Leg Guard Combo",
    sport: "Cricket",
    sportSlug: "cricket",
    category: "Equipment",
    type: "equipment",
    isCustomizable: false,
    isFeatured: false,
    shortDescription: "High-density molded foam protection with pittards leather palm and reinforced fiber inserts.",
    description: "Test-standard impact protection. Multi-split finger design for unmatched flexibility, combined with ultra-light cane and HDF composite batting pads.",
    images: [
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Adult Regular", "Adult Large", "Youth / Boys"],
    variants: ["Right Handed (RH)", "Left Handed (LH)"],
    features: ["Pittards sheep leather palm", "3-piece side bolster impact bars", "Soft-touch moisture-wicking towelled lining"]
  },

  // FOOTBALL
  {
    id: "football-pro-custom-jersey",
    name: "AR Striker Custom Football Jersey",
    sport: "Football",
    sportSlug: "football",
    category: "Sportswear",
    type: "jersey",
    isCustomizable: true,
    isFeatured: true,
    badge: "Match Day",
    shortDescription: "Aero-mesh aerodynamic cut jersey with moisture transport and customizable club badge.",
    description: "Crafted from high-tensile lightweight jacquard fabric with ribbed crew neck or V-neck collars. Designed for optimal speed and temperature regulation during 90 minutes of high intensity.",
    images: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Sky Blue / White", "Royal / Crimson", "Black / Gold", "Custom Club Colorway"],
    features: ["Hydrophobic quick-dry yarn", "3D silicone or woven patch ready", "Engineered ventilation side stripes"]
  },
  {
    id: "football-full-team-kit",
    name: "AR Velocity Complete Football Team Kit",
    sport: "Football",
    sportSlug: "football",
    category: "Sportswear",
    type: "complete kit",
    isCustomizable: true,
    isFeatured: true,
    badge: "Full Team Ready",
    shortDescription: "Complete set: Sublimated match jersey, athletic shorts with drawstring, and rib-support knee socks.",
    description: "Equip your entire squad with unified tournament aesthetics. Available in customized designs with your club crest, front jersey sponsor, back player numbers, and matching shorts.",
    images: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Custom Club Scheme", "Navy / Volt Yellow", "Red / White", "Emerald / Black"],
    features: ["Jersey + Shorts + Match Socks", "Elasticized non-slip waistband", "High abrasion resistance"]
  },
  {
    id: "football-match-ball-fifa",
    name: "AR Apex Thermobonded Match Football",
    sport: "Football",
    sportSlug: "football",
    category: "Equipment",
    type: "equipment",
    isCustomizable: false,
    isFeatured: true,
    badge: "Pro Match",
    shortDescription: "Seamless thermal-bonded 32-panel FIFA-spec match ball with textured PU micro-groove casing.",
    description: "Zero water absorption and true aerodynamic trajectory. Engineered with a multi-layered foam backing and high-air-retention butyl bladder for tournament consistency.",
    images: [
      "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Size 5 (Official Adult)", "Size 4 (Youth / Academy)"],
    features: ["Thermally bonded seamless surface", "Textured micro-dimple grip", "Reinforced cross-linked backing"]
  },
  {
    id: "football-training-accessories-pack",
    name: "AR Tactical Football Training Pack (Cones & Agility)",
    sport: "Football",
    sportSlug: "football",
    category: "Equipment",
    type: "equipment",
    isCustomizable: false,
    isFeatured: false,
    shortDescription: "Complete training package including 50 disc cones, agility ladder, and mesh equipment carry bag.",
    description: "Indispensable kit for football coaches and academy drills. UV-resistant shatterproof flexible plastic cones in vibrant high-visibility colors.",
    images: [
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800&q=80"
    ],
    features: ["50 flexible disc cones with carry stand", "6-meter agility training ladder", "Durable breathable mesh bag"]
  },

  // BADMINTON
  {
    id: "badminton-aero-shirt",
    name: "AR Aero-Flight Badminton Tournament Shirt",
    sport: "Badminton",
    sportSlug: "badminton",
    category: "Sportswear",
    type: "shirt",
    isCustomizable: true,
    isFeatured: false,
    shortDescription: "Ultra-light breathable sportswear top with ergonomic raglan sleeves for swift overhead smashes.",
    description: "Built for speed and sharp lateral movements. The lightweight hexagonal weave allows rapid air circulation, keeping players cool during tense rallies.",
    images: [
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Electric Cyan", "Fiery Red", "Obsidian Black", "Pure White"],
    features: ["Raglan sleeves for free arm swing", "Static-free anti-cling weave", "Customizable back name print"]
  },
  {
    id: "badminton-carbon-racket-pro",
    name: "AR Thunder Carbon Graphite Badminton Racket",
    sport: "Badminton",
    sportSlug: "badminton",
    category: "Equipment",
    type: "equipment",
    isCustomizable: false,
    isFeatured: true,
    badge: "Tour Grade",
    shortDescription: "High-modulus carbon graphite frame with head-heavy balance for devastating smash power.",
    description: "Strung with AR high-repulsion tournament string at 28-30 lbs. Features isometric head shape for an expanded sweet spot and slim aero dynamic shaft.",
    images: [
      "https://images.unsplash.com/photo-1613918108466-292b78a8ef95?auto=format&fit=crop&w=800&q=80"
    ],
    variants: ["3U (85-89g) Head Heavy", "4U (80-84g) Even Balance"],
    features: ["High Modulus 30T Carbon Fiber", "Pre-strung at 28 lbs tension", "Includes full thermal padded racket cover"]
  },
  {
    id: "badminton-feather-shuttlecocks-tube",
    name: "AR Tour Feather Shuttlecocks (Tube of 12)",
    sport: "Badminton",
    sportSlug: "badminton",
    category: "Equipment",
    type: "equipment",
    isCustomizable: false,
    isFeatured: false,
    shortDescription: "Premium goose feather tournament-grade shuttles with double-layer composite cork.",
    description: "Consistent flight speed, stable trajectory, and excellent durability even during high-impact smash practice. Flight tested for accuracy.",
    images: [
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"
    ],
    variants: ["Speed 77 (Medium)", "Speed 78 (Fast)"],
    features: ["Selected grade goose feathers", "Natural cork head", "Standard 12-shuttle protective tube"]
  },

  // BASKETBALL
  {
    id: "basketball-custom-reversible-jersey",
    name: "AR Slam Reversible Basketball Jersey",
    sport: "Basketball",
    sportSlug: "basketball",
    category: "Sportswear",
    type: "jersey",
    isCustomizable: true,
    isFeatured: true,
    badge: "2-in-1 Design",
    shortDescription: "Dual-layer reversible mesh jersey allowing instant Home and Away team switching.",
    description: "Two distinct sublimated designs in a single jersey. Open-hole poly mesh maximizes ventilation, while the loose cut guarantees freedom of movement on court.",
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Navy/White Reversible", "Black/Gold Reversible", "Red/Charcoal Reversible"],
    features: ["Dual-layer breathable mesh", "Wide armholes for smooth shooting", "Front & back customized numbering"]
  },
  {
    id: "basketball-composite-leather-ball",
    name: "AR Court Master Indoor/Outdoor Basketball",
    sport: "Basketball",
    sportSlug: "basketball",
    category: "Equipment",
    type: "equipment",
    isCustomizable: false,
    isFeatured: false,
    shortDescription: "Deep pebble composite microfiber basketball with recessed pebbling channels for superior fingertip control.",
    description: "Designed for hard wood gym floors or outdoor asphalt courts. Maintains grip even when moist with sweat, with nylon-wound carcass for shape retention.",
    images: [
      "https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Official Size 7 (Men)", "Size 6 (Women/Youth)"],
    features: ["Moisture-absorbing composite cover", "Deep-channel design for shot control", "Butyl bladder for maximum air retention"]
  },

  // VOLLEYBALL
  {
    id: "volleyball-custom-team-uniform",
    name: "AR Spike Custom Volleyball Uniform",
    sport: "Volleyball",
    sportSlug: "volleyball",
    category: "Sportswear",
    type: "complete kit",
    isCustomizable: true,
    isFeatured: false,
    shortDescription: "Form-fitting sleeveless / short-sleeve athletic jersey with moisture-wicking stretch shorts.",
    description: "Engineered specifically for quick vertical jumping and floor dives. Sublimated with high-definition colors and custom team logos.",
    images: [
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy & Electric Cyan", "Crimson & White", "Black & Neon", "Custom Team Colorway"],
    features: ["4-way stretch poly-spandex", "Reinforced flat seam construction", "Includes custom jersey & athletic shorts"]
  },
  {
    id: "volleyball-soft-touch-match-ball",
    name: "AR Gold Touch Pro Match Volleyball",
    sport: "Volleyball",
    sportSlug: "volleyball",
    category: "Equipment",
    type: "equipment",
    isCustomizable: false,
    isFeatured: false,
    shortDescription: "18-panel spiral composite leather volleyball with cushioned soft-touch feel to minimize sting.",
    description: "Official weight and dimensions. Offers predictable trajectory, supreme control on sets, and durable flight dynamics.",
    images: [
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Official Size 5"],
    features: ["18-panel laminated composite construction", "Double cushioned interior layer", "High visibility color blocks"]
  },

  // GYM & FITNESS
  {
    id: "gym-dryfit-training-tracksuit",
    name: "AR Stealth Performance Gym Tracksuit",
    sport: "Gym & Fitness",
    sportSlug: "gym-fitness",
    category: "Sportswear",
    type: "tracksuit",
    isCustomizable: true,
    isFeatured: true,
    badge: "Top Seller",
    shortDescription: "Modern tapered zip jacket and athletic training joggers in breathable double-knit interlock.",
    description: "A staple warm-up and training tracksuit. Features ergonomic thumbholes, zippered ankle tapers, and zipped pockets. Customizable with school crest or gym branding.",
    images: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Dark Navy / Charcoal", "Triple Black", "Heather Grey / Black", "Deep Olive"],
    features: ["Full front zip jacket with collar", "Tapered joggers with zip hems", "Zip pockets on jacket and pants"]
  },
  {
    id: "gym-compression-training-shirt",
    name: "AR Armor Base Layer Compression Shirt",
    sport: "Gym & Fitness",
    sportSlug: "gym-fitness",
    category: "Sportswear",
    type: "shirt",
    isCustomizable: true,
    isFeatured: false,
    shortDescription: "High-compression muscle support top for accelerated blood flow and reduced recovery fatigue.",
    description: "Second-skin snug fit engineered for intense gym workouts, cross-training, and under-jersey game day layering.",
    images: [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Matte Black", "Navy Blue", "Pure White"],
    features: ["Graduated muscle compression", "Anti-odor treatment", "Chafe-free ergonomic seams"]
  },

  // SCHOOL & TEAMWEAR
  {
    id: "school-custom-house-sports-kit",
    name: "AR Academy Inter-School House Uniform Kit",
    sport: "School & Teamwear",
    sportSlug: "school-teamwear",
    category: "School & Teamwear",
    type: "complete kit",
    isCustomizable: true,
    isFeatured: true,
    badge: "Bulk Order Specialist",
    shortDescription: "Complete school sports day uniforms available in 4-6 house colors with school logo crest embroidery/print.",
    description: "Tailored specifically for colleges, grammar schools, and sports academies. Sturdy anti-pilling fabric capable of withstanding rough playground use and frequent washing. Full customization for student rosters.",
    images: [
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Ages 6-8", "Ages 9-11", "Ages 12-14", "S", "M", "L", "XL"],
    colors: ["Red House", "Blue House", "Green House", "Yellow House", "Custom Colors"],
    features: ["Includes polo/jersey + track shorts", "Durable color-fast dyes", "School crest screen printed or embroidered", "Bulk roster numbering available"]
  },
  {
    id: "school-custom-varsity-tracksuit",
    name: "AR Varsity Academy Team Tracksuit",
    sport: "School & Teamwear",
    sportSlug: "school-teamwear",
    category: "School & Teamwear",
    type: "tracksuit",
    isCustomizable: true,
    isFeatured: true,
    badge: "School Official",
    shortDescription: "Official academy travel and sports tour tracksuit with tailored contrast panel piping.",
    description: "Deliver a unified, prestigious appearance for school delegations traveling to tournaments. High-durability micro-poly shell with soft cotton/mesh lining.",
    images: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Youth S", "Youth M", "Youth L", "Adult S", "Adult M", "Adult L", "Adult XL"],
    colors: ["Navy / White Piping", "Bottle Green / Gold", "Maroon / Silver", "Royal Blue / White"],
    features: ["Wind & water-resistant outer", "Soft internal comfort lining", "Chest crest & back academy lettering"]
  }
];

export const GARMENT_TYPES = [
  { id: "shirt", name: "Shirt / T-Shirt" },
  { id: "jersey", name: "Sport Jersey" },
  { id: "pants", name: "Trousers / Pants" },
  { id: "shorts", name: "Athletic Shorts" },
  { id: "socks", name: "Team Socks" },
  { id: "tracksuit", name: "Tracksuit (Jacket + Pants)" },
  { id: "complete kit", name: "Complete Kit (Jersey + Pants/Shorts + Socks)" }
];

export const DESIGN_PATTERNS = [
  { id: "modern-geometric", name: "Modern Geometric Camo", previewGradient: "linear-gradient(135deg, #101d42 25%, #0284c7 100%)" },
  { id: "classic-stripes", name: "Classic Dual Stripes", previewGradient: "repeating-linear-gradient(90deg, #101d42, #101d42 20px, #0284c7 20px, #0284c7 40px)" },
  { id: "dynamic-slash", name: "Dynamic Lightning Slash", previewGradient: "linear-gradient(45deg, #0a1128 50%, #38bdf8 50%)" },
  { id: "clean-solid-panel", name: "Clean Minimalist Contrast", previewGradient: "linear-gradient(to bottom, #101d42 65%, #0284c7 65%)" },
  { id: "hex-gradient", name: "Cyber Hex Texture", previewGradient: "radial-gradient(circle, #0284c7 0%, #0a1128 90%)" }
];

export const PRESET_COLORS = [
  { name: "Navy Blue", hex: "#0a1128" },
  { name: "Electric Blue", hex: "#0284c7" },
  { name: "Sky Cyan", hex: "#38bdf8" },
  { name: "Pure White", hex: "#ffffff" },
  { name: "Matte Black", hex: "#111827" },
  { name: "Forest Green", hex: "#15803d" },
  { name: "Crimson Red", hex: "#dc2626" },
  { name: "Royal Gold", hex: "#eab308" },
  { name: "Sun Orange", hex: "#ea580c" },
  { name: "Deep Maroon", hex: "#831843" }
];
