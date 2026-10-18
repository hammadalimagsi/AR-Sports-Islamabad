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
    equipmentCount: "9+ Products"
  },
  {
    id: "football",
    name: "Football",
    slug: "football",
    description: "Pro breathable football kits, goalie uniforms, training bibs, FIFA-grade match footballs, and shin pads.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
    badge: "Trending",
    equipmentCount: "6+ Products"
  },
  {
    id: "basketball",
    name: "Basketball",
    slug: "basketball",
    description: "Custom reversible basketball jerseys, wide-cut mesh shorts, indoor/outdoor composite leather basketballs.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
    badge: "Pro Mesh",
    equipmentCount: "4+ Products"
  },
  {
    id: "volleyball",
    name: "Volleyball",
    slug: "volleyball",
    description: "Sleeveless and short-sleeve athletic volleyball tops, team kits, official size volleyballs, and heavy-duty nets.",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80",
    badge: "Athletic Cut",
    equipmentCount: "4+ Products"
  },
  {
    id: "badminton",
    name: "Badminton",
    slug: "badminton",
    description: "Ultra-lightweight moisture-wicking shirts, graphite carbon rackets, feather shuttlecocks, and tournament court gear.",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
    badge: "Lightweight",
    equipmentCount: "4+ Products"
  },
  {
    id: "tennis",
    name: "Tennis",
    slug: "tennis",
    description: "Engineered polo shirts, court stretch shorts, tour-grade tennis balls, vibration dampeners, and racket bags.",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80",
    badge: "Classic Tour",
    equipmentCount: "4+ Products"
  },
  {
    id: "rugby",
    name: "Rugby",
    slug: "rugby",
    description: "Tackle-resistant reinforced match jerseys, heavy-duty rugby shorts, grip-textured match balls, and scrum warmup gear.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    badge: "Heavy Duty",
    equipmentCount: "4+ Products"
  },
  {
    id: "hockey",
    name: "Hockey",
    slug: "hockey",
    description: "Field hockey custom team shirts, turf match shorts, carbon composite sticks, dimple balls, and shin protection.",
    image: "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=800&q=80",
    badge: "Turf Pro",
    equipmentCount: "5+ Products"
  },
  {
    id: "gym-fitness",
    name: "Gym & Fitness Wear",
    slug: "gym-fitness",
    description: "Compression wear, drop-arm tank tops, dry-fit training tracksuits, workout hoodies, and athletic training shorts.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    badge: "Everyday Core",
    equipmentCount: "5+ Products"
  },
  {
    id: "general-sportswear",
    name: "General Sportswear",
    slug: "general-sportswear",
    description: "Custom sports t-shirts, polo shirts, fleece hoodies, athletic caps, floppy hats, team socks, and equipment duffles.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    badge: "All-Round",
    equipmentCount: "8+ Products"
  }
];

export const PRODUCTS_DATA = [
  // ==========================================
  // CRICKET
  // ==========================================
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
    id: "cricket-t20-colored-tournament-kit",
    name: "AR Champions T20 Coloured Tournament Kit",
    sport: "Cricket",
    sportSlug: "cricket",
    category: "Sportswear",
    type: "complete kit",
    isCustomizable: true,
    isFeatured: true,
    badge: "T20 Edition",
    shortDescription: "Dynamic colored tournament uniform with high-impact geometric gradients and full squad personalization.",
    description: "Built for competitive night and day tournament play. High GSM micro-mesh fabric engineered for rapid moisture evaporation. Complete kit includes sublimation shirt and matching performance trousers with custom club numbering and logos.",
    images: [
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Royal Blue / Neon Green", "Black / Crimson Red", "Teal / Gold", "Custom Club Colors"],
    features: ["Full digital dye sublimation printing", "Anti-sweat quick dry yarn", "Individual names & squad numbers on back", "Side-mesh body ventilation"]
  },
  {
    id: "cricket-test-whites-uniform",
    name: "AR Classic Test Whites Cricket Uniform",
    sport: "Cricket",
    sportSlug: "cricket",
    category: "Sportswear",
    type: "complete kit",
    isCustomizable: true,
    isFeatured: false,
    badge: "Traditional",
    shortDescription: "Prestigious cream and white match uniform with club crest embroidery and flexible tournament cut.",
    description: "For traditional two-day, three-day, and school championship cricket. Features an off-white breathable pique knit jersey with ribbed athletic collar, combined with stain-resistant heavy stretch trousers.",
    images: [
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Off-White Cream", "Pure Optical White"],
    features: ["Classic ribbed collar with contrast tipping", "Subtle crest embroidery on left chest", "Stretch flex trousers with deep ball pockets"]
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
    id: "cricket-tournament-floppy-hat",
    name: "AR Tournament Wide-Brim Sun Floppy Hat",
    sport: "Cricket",
    sportSlug: "cricket",
    category: "Accessories",
    type: "cap",
    isCustomizable: true,
    isFeatured: false,
    badge: "Sun Protection",
    shortDescription: "Wide-brim UPF 50+ sun hat with sweat-absorbent inner band and customized embroidered crest.",
    description: "The classic cricket field hat engineered for extreme summer heat. Heavy-duty cotton twill with reinforced brim stitching that never sags, internal towelling sweatband, and adjustable chin strap.",
    images: [
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Small (54-56cm)", "Medium (57-59cm)", "Large (60-62cm)"],
    colors: ["Pure White", "Cream", "Navy Blue", "Bottle Green"],
    features: ["UPF 50+ UV radiation shield", "3D embroidered club crest option", "Terry cotton moisture sweatband", "Brass eyelets for airflow"]
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

  // ==========================================
  // FOOTBALL
  // ==========================================
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
    id: "football-pro-goalkeeper-kit",
    name: "AR Guardian Padded Goalkeeper Kit",
    sport: "Football",
    sportSlug: "football",
    category: "Sportswear",
    type: "complete kit",
    isCustomizable: true,
    isFeatured: false,
    badge: "Padded Protection",
    shortDescription: "Heavy-duty impact padded goalkeeper set with neon visibility patterns and customized GK numbering.",
    description: "Designed to shield keepers on firm grass and turf grounds. Features ergonomic EVA foam padding on elbows and hip bones. Breathable anti-sweat mesh on back and underarms.",
    images: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Neon Volt / Black", "Fluorescent Orange / Charcoal", "Cyber Pink / Violet"],
    features: ["EVA foam padded elbows and thighs", "Anti-tear reinforced textile", "Custom goalkeeper name & number 1"]
  },
  {
    id: "football-match-ball-fifa",
    name: "AR Apex Thermobonded Match Football",
    sport: "Football",
    sportSlug: "football",
    category: "Equipment",
    type: "equipment",
    isCustomizable: false,
    isFeatured: false,
    badge: "Match Grade",
    shortDescription: "Thermobonded seamless 32-panel match ball with textured PU outer for predictable aerodynamic trajectory.",
    description: "Zero water absorption construction. Retains exact weight and pressure even on waterlogged fields. Features a reinforced butyl bladder for maximum air retention over weeks.",
    images: [
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Official Size 5 (Adult)", "Size 4 (Youth)"],
    features: ["Seamless thermal bonding", "Micro-textured trajectory dimples", "Zero water uptake guarantee"]
  },
  {
    id: "pro-football-long-socks",
    name: "AR Match Elite Knee-High Football Socks",
    sport: "Football",
    sportSlug: "football",
    category: "Accessories",
    type: "socks",
    isCustomizable: true,
    isFeatured: false,
    badge: "Match Wear",
    shortDescription: "Knee-high compression ribbed football socks with arch support and cushioned impact sole.",
    description: "Engineered to keep shin pads securely in place while preventing blisters during hard stops and sprints. Breathable mesh ventilation along the calf prevents heat build-up.",
    images: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Adult (Fits 8-12)", "Youth (Fits 4-7)"],
    colors: ["Black", "White", "Royal Blue", "Crimson Red", "Navy", "Yellow"],
    features: ["Anatomical left/right footbed", "Ribbed compression calf support", "Padded sole and heel cushion"]
  },
  {
    id: "captain-armband-wristbands",
    name: "AR Tournament Captain Armband & Wristbands Set",
    sport: "Football",
    sportSlug: "football",
    category: "Accessories",
    type: "equipment",
    isCustomizable: false,
    isFeatured: false,
    shortDescription: "High-visibility elastic captain armband with anti-slip velcro closure and absorbent wrist sweatbands.",
    description: "Essential for team leaders and captains. Stretch elastic band fits easily over match jerseys with a firm velcro lock that won't slip during gameplay. Comes with two matching absorbent wristbands.",
    images: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Standard Adjustable Adult", "Youth"],
    colors: ["Neon Green", "High-Vis Orange", "Bright Yellow", "Black / White"],
    features: ["Heavy-duty elastic with velcro lock", "Bold 'C' captain insignia", "Includes pair of matching wrist sweatbands"]
  },

  // ==========================================
  // BASKETBALL
  // ==========================================
  {
    id: "basketball-custom-reversible-jersey",
    name: "AR Slam Reversible Basketball Jersey",
    sport: "Basketball",
    sportSlug: "basketball",
    category: "Sportswear",
    type: "jersey",
    isCustomizable: true,
    isFeatured: true,
    badge: "2-in-1 Reversible",
    shortDescription: "Double-layered open hole mesh reversible jersey with home and away color schemes on one uniform.",
    description: "The ultimate solution for club leagues and tournaments. Flip the jersey inside out to switch between light and dark team colors instantly. Deep armholes designed for shooting fluidity.",
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Black / White Reversible", "Navy / Gold Reversible", "Royal / Red Reversible"],
    features: ["True 2-in-1 reversible double layer", "Reinforced rib collar and armholes", "Custom team name & numbers on both sides"]
  },
  {
    id: "basketball-pro-mesh-shorts",
    name: "AR Slam Wide-Cut Basketball Shorts",
    sport: "Basketball",
    sportSlug: "basketball",
    category: "Sportswear",
    type: "shorts",
    isCustomizable: true,
    isFeatured: false,
    badge: "Pro Mesh",
    shortDescription: "Wide-cut heavyweight pro mesh basketball shorts with striped rib waistband and extended inseam.",
    description: "Built for explosive court movement and crossover handles. Features 100% breathable dazzle and mesh panels, wide ribbed drawstring waistband, and custom side panel sublimation.",
    images: [
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Jet Black", "Navy Blue", "Crimson Red", "White", "Custom Colors"],
    features: ["Heavyweight moisture-wicking mesh", "Extended athletic tournament length", "Reinforced side taping and side vents"]
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
    shortDescription: "Deep pebble composite leather basketball with soft-touch grip for indoor hardwood and outdoor concrete.",
    description: "Official Size 7 basketball with deep channel grooves for supreme ball control, finger spin, and dependable rebound consistency.",
    images: [
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Official Size 7 (Men)", "Size 6 (Women/Youth)"],
    features: ["Micro-fiber composite leather casing", "Deep channel rubberized grooves", "Cushioned core technology"]
  },
  {
    id: "basketball-warmup-shooting-shirt",
    name: "AR Baseline Warmup Shooting Shirt",
    sport: "Basketball",
    sportSlug: "basketball",
    category: "Sportswear",
    type: "shirt",
    isCustomizable: true,
    isFeatured: false,
    badge: "Pre-Game",
    shortDescription: "Loose-fit short-sleeve warmup shooting shirt with moisture transport and team lettering.",
    description: "Designed for pre-game shootarounds and bench travel. Engineered fabric holds muscle warmth while releasing sweat vapour quickly.",
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Black / White", "Navy / Gold", "Custom Sublimation"],
    features: ["Lightweight dry-fit micro-poly", "Comfortable relaxed shooting cut", "Sublimated club sponsor graphics"]
  },

  // ==========================================
  // VOLLEYBALL
  // ==========================================
  {
    id: "volleyball-custom-team-uniform",
    name: "AR Spike Custom Volleyball Uniform Kit",
    sport: "Volleyball",
    sportSlug: "volleyball",
    category: "Sportswear",
    type: "complete kit",
    isCustomizable: true,
    isFeatured: true,
    badge: "Athletic Cut",
    shortDescription: "Athletic cut jersey paired with stretch volleyball shorts engineered for rapid jumping and diving.",
    description: "Engineered for rapid lateral dives and vertical spikes. High-stretch spandex-poly blend provides maximum flexibility without riding up during blocks and serves.",
    images: [
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy / Cyber Orange", "Red / White", "Teal / Black", "Custom Colors"],
    features: ["Includes top & stretch shorts", "Zero friction flatlock seam construction", "Custom front and back numbers"]
  },
  {
    id: "volleyball-pro-sleeveless-jersey",
    name: "AR Spike Sleeveless Pro Volleyball Jersey",
    sport: "Volleyball",
    sportSlug: "volleyball",
    category: "Sportswear",
    type: "jersey",
    isCustomizable: true,
    isFeatured: false,
    badge: "Sublimated",
    shortDescription: "Ultra-breathable sleeveless tournament jersey with deep armholes and sublimation team graphics.",
    description: "Allows unhindered shoulder extension for hard spikes and overhead blocks. Moisture-wicking micro-knit keeps athletes dry in humid indoor court conditions.",
    images: [
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Royal Blue / White", "Black / Neon Lime", "Custom Colorway"],
    features: ["100% digital dye sublimation", "Chafe-free bound armholes", "Custom roster numbers & logos"]
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
  {
    id: "volleyball-court-defense-knee-pads",
    name: "AR Court Defense Pro Volleyball Knee Pads (Pair)",
    sport: "Volleyball",
    sportSlug: "volleyball",
    category: "Accessories",
    type: "equipment",
    isCustomizable: false,
    isFeatured: false,
    shortDescription: "High-density molded EVA foam knee pads with breathable rear mesh and low-profile ergonomics.",
    description: "Protect athletes against floor burns and hard impact during floor dives and digs. Non-slip elastic sleeve holds firmly in place throughout intense matches.",
    images: [
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Small/Medium", "Large/X-Large"],
    colors: ["Matte Black", "Pure White"],
    features: ["Contoured high-density foam padding", "Rear ventilation cutout", "Anti-odor moisture-wicking sleeve"]
  },

  // ==========================================
  // BADMINTON
  // ==========================================
  {
    id: "badminton-aero-shirt",
    name: "AR Aero-Flight Badminton Tournament Shirt",
    sport: "Badminton",
    sportSlug: "badminton",
    category: "Sportswear",
    type: "shirt",
    isCustomizable: true,
    isFeatured: true,
    badge: "Ultra Light",
    shortDescription: "Ultra-lightweight micro-mesh court shirt designed for rapid racket swings and instant sweat dissipation.",
    description: "Weighing only 120 grams, this badminton shirt gives players unrestricted range of overhead motion. Antimicrobial yarn prevents odor build-up through long match sessions.",
    images: [
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Electric Lime / Navy", "Cherry Red / White", "Pure White / Cyan"],
    features: ["Featherweight 120 GSM fabric", "Underarm gussets for zero-drag swings", "Sublimated team and sponsor prints"]
  },
  {
    id: "badminton-court-pro-shorts",
    name: "AR Swift Court Badminton Shorts",
    sport: "Badminton",
    sportSlug: "badminton",
    category: "Sportswear",
    type: "shorts",
    isCustomizable: true,
    isFeatured: false,
    badge: "Lightweight",
    shortDescription: "Lightweight 4-way stretch shorts with split side hems for lightning-quick lunge recovery.",
    description: "Tailored for fast-paced court sports. Dual deep pockets securely accommodate replacement shuttles or match accessories without bouncing.",
    images: [
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Black", "Navy", "White"],
    features: ["4-way micro-stretch woven fabric", "Side lunge splits for freedom of movement", "Internal drawstring waistband"]
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
    badge: "Pro Carbon",
    shortDescription: "High-modulus carbon graphite frame strung to 28-30 lbs for explosive smashes and pinpoint shuttle control.",
    description: "Engineered with an isometric head shape to enlarge the sweet spot by 32%. Slim aero-dynamic shaft cuts through air resistance for lightning-fast net play.",
    images: [
      "https://images.unsplash.com/photo-1613918431703-085718501252?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["3U (85-89g)", "4U (80-84g)"],
    features: ["High modulus Japanese graphite", "Pre-strung at 28 lbs tournament tension", "Comes with full padded thermal racket cover"]
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
    shortDescription: "Grade-A natural goose feather shuttles with solid cork base for consistent flight and high durability.",
    description: "Strictly tested for rotation, flight trajectory, and smash recovery. Favored across sports clubs and inter-collegiate tournaments.",
    images: [
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Speed 77 (Medium)", "Speed 78 (Fast)"],
    features: ["Hand-selected natural goose feathers", "Dual-density laminated cork base", "Tube of 12 shuttlecocks"]
  },

  // ==========================================
  // TENNIS
  // ==========================================
  {
    id: "tennis-polo-shirt",
    name: "AR Tour Elite Sublimated Tennis Polo Shirt",
    sport: "Tennis",
    sportSlug: "tennis",
    category: "Sportswear",
    type: "polo",
    isCustomizable: true,
    isFeatured: true,
    badge: "Tour Pro",
    shortDescription: "Engineered 3-button performance polo shirt with ribbed collar, underarm eyelets, and UV sun protection.",
    description: "Designed for competitive singles and doubles play on clay, grass, and hard courts. Lightweight pique micro-poly fabric delivers premium crisp appearance with high breathability.",
    images: [
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Classic White / Navy", "Navy / Sky Blue", "Forest Green / White", "Custom Sublimation"],
    features: ["Moisture transport dry-fit fabric", "UPF 40+ solar UV protection", "Full club crest and sponsor printing"]
  },
  {
    id: "tennis-court-shorts",
    name: "AR Court Master Stretch Tennis Shorts",
    sport: "Tennis",
    sportSlug: "tennis",
    category: "Sportswear",
    type: "shorts",
    isCustomizable: true,
    isFeatured: false,
    badge: "Deep Pockets",
    shortDescription: "4-way mechanical stretch athletic shorts with specialized dual tennis ball pockets and ventilated waistband.",
    description: "Engineered specifically to hold two tennis balls per pocket securely during full-speed serves and court sprints. Non-restrictive side slits.",
    images: [
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Crisp White", "Dark Navy", "Charcoal Black"],
    features: ["Deep ball-holding stretch pockets", "4-way stretch quick-dry polyester", "Comfort elastic waist with drawstring"]
  },
  {
    id: "tennis-carbon-racket",
    name: "AR Championship Tour Carbon Tennis Racket",
    sport: "Tennis",
    sportSlug: "tennis",
    category: "Equipment",
    type: "equipment",
    isCustomizable: false,
    isFeatured: true,
    badge: "100 sq.in",
    shortDescription: "Graphite composite tour frame with 100 sq.in head size offering explosive power and arm-friendly dampening.",
    description: "Balanced 300g unstrung weight provides solid plow-through against heavy topspin baseline rallies. Strung with synthetic gut at 55 lbs tension.",
    images: [
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Grip Size 2 (4 1/4)", "Grip Size 3 (4 3/8)", "Grip Size 4 (4 1/2)"],
    features: ["100% graphite matrix frame", "Vibration dampening handle core", "Includes full zip thermal cover"]
  },
  {
    id: "tennis-match-balls-can",
    name: "AR Tour Extra-Duty Tennis Balls (Can of 3)",
    sport: "Tennis",
    sportSlug: "tennis",
    category: "Equipment",
    type: "equipment",
    isCustomizable: false,
    isFeatured: false,
    shortDescription: "Pressurized championship tennis balls with premium woven felt for hard and clay court durability.",
    description: "Engineered for consistent bounce and felt longevity through demanding multi-set matches. High-grade rubber core retains optimum internal pressure.",
    images: [
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Pressurized Can of 3 Balls"],
    features: ["Premium interlocked woven wool felt", "Extra-duty rubber core", "ITF tournament compliant specifications"]
  },

  // ==========================================
  // RUGBY
  // ==========================================
  {
    id: "rugby-match-jersey",
    name: "AR Titan Reinforced Sublimation Rugby Jersey",
    sport: "Rugby",
    sportSlug: "rugby",
    category: "Sportswear",
    type: "jersey",
    isCustomizable: true,
    isFeatured: true,
    badge: "Heavy Duty",
    shortDescription: "Tackle-resistant 280 GSM heavyweight stretch polyester jersey with reinforced bar-tack stitching.",
    description: "Built to withstand intense mauls, scrums, and full-contact tackles. Features an ergonomic Mandarin collar that prevents opponents from grabbing, combined with full digital sublimation for club colors.",
    images: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colors: ["Black / Red Hoops", "Navy / White Bands", "Emerald / Gold", "Custom Club Scheme"],
    features: ["280 GSM tear-resistant poly-spandex", "Reinforced triple-stitched stress seams", "Full digital dye sublimation customization"]
  },
  {
    id: "rugby-tackle-shorts",
    name: "AR Scrum Force Heavyweight Rugby Shorts",
    sport: "Rugby",
    sportSlug: "rugby",
    category: "Sportswear",
    type: "shorts",
    isCustomizable: true,
    isFeatured: false,
    badge: "Tough Cotton/Poly",
    shortDescription: "Rugged drill cotton-poly shorts with stretch spandex crotch gusset and internal non-slip grip waistband.",
    description: "Engineered specifically for props, hookers, and backline runners. Heavyweight fabric resists ripping during tackles, while the elastic gusset ensures unrestricted kicking and sprinting.",
    images: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S (30\")", "M (32\")", "L (34\")", "XL (36\")", "2XL (38\")", "3XL (40\")"],
    colors: ["Solid White", "Jet Black", "Dark Navy"],
    features: ["Heavy-duty tear-proof twill weave", "Lycra inner leg stretch gusset", "Internal gripper waistband and drawcord"]
  },
  {
    id: "rugby-match-ball",
    name: "AR Vortex Grain Grip Official Match Rugby Ball",
    sport: "Rugby",
    sportSlug: "rugby",
    category: "Equipment",
    type: "equipment",
    isCustomizable: false,
    isFeatured: true,
    badge: "Match Grade",
    shortDescription: "4-ply laminated match rugby ball with multi-matrix grain pimple grip for all-weather handling.",
    description: "Official Size 5 rugby ball. Hand-stitched with high-tensile polyester thread and balanced bladder for true flight accuracy on penalty and conversion kicks.",
    images: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Official Size 5 (Senior)", "Size 4 (Junior)"],
    features: ["4-ply poly-cotton laminated casing", "Multi-matrix 3D rubber pimple grip", "Tru-flight balanced valve in seam"]
  },
  {
    id: "rugby-warmup-track-top",
    name: "AR Contact Squad Warmup Quarter-Zip Top",
    sport: "Rugby",
    sportSlug: "rugby",
    category: "Sportswear",
    type: "tracksuit",
    isCustomizable: true,
    isFeatured: false,
    badge: "Water Resistant",
    shortDescription: "Wind and water-resistant ripstop warmup top with fleece lining for cold training nights.",
    description: "Protects players during pitch warmups and team travel. Features reinforced shoulder panels and custom chest club embroidery.",
    images: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Navy / Grey", "Black / Red", "Forest Green / Gold"],
    features: ["Ripstop water-shedding exterior", "Thermal brushed interior", "Custom club crest printing"]
  },

  // ==========================================
  // HOCKEY
  // ==========================================
  {
    id: "hockey-match-shirt",
    name: "AR Turf Master Custom Field Hockey Shirt",
    sport: "Hockey",
    sportSlug: "hockey",
    category: "Sportswear",
    type: "shirt",
    isCustomizable: true,
    isFeatured: true,
    badge: "Turf Pro",
    shortDescription: "Lightweight moisture-wicking match shirt engineered for rapid turf movement and continuous airflow.",
    description: "Designed for international and domestic field hockey. Highly breathable jacquard knit wicks moisture instantly during aggressive sprints and low-posture dribbling.",
    images: [
      "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Kelly Green / White", "Navy / Volt", "Maroon / Gold", "Custom Sublimation"],
    features: ["100% full dye sublimation", "Anti-odor antimicrobial treatment", "V-neck athletic collar with taped neckline"]
  },
  {
    id: "hockey-match-shorts",
    name: "AR Turf Elite Field Hockey Shorts / Skort",
    sport: "Hockey",
    sportSlug: "hockey",
    category: "Sportswear",
    type: "shorts",
    isCustomizable: true,
    isFeatured: false,
    badge: "Match Cut",
    shortDescription: "Quick-drying athletic shorts with wide elastic waistband and curved side vents for stick handling mobility.",
    description: "Optimized for players who need total freedom around the hip flexors while staying low over the ball. Chafe-free inner seams.",
    images: [
      "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "White", "Forest Green"],
    features: ["Lightweight micro-poly fabric", "Curved side vents for low stance agility", "Custom team crest heat-seal option"]
  },
  {
    id: "hockey-carbon-stick",
    name: "AR Phantom 90% Carbon Field Hockey Stick",
    sport: "Hockey",
    sportSlug: "hockey",
    category: "Equipment",
    type: "equipment",
    isCustomizable: false,
    isFeatured: true,
    badge: "90% Carbon",
    shortDescription: "Pro-bow 90% Japanese Toray carbon stick delivering explosive slap-shots and 3D aerial drag-flick control.",
    description: "Engineered for elite midfielders and strikers. 24.75mm low bow curve positioned 200mm from the head allows quick 3D skills, aerial distribution, and pinpoint drag-flicks.",
    images: [
      "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["36.5 Inch (Light)", "37.5 Inch (Medium)"],
    features: ["90% Japanese Toray Carbon Fiber", "Silica coated face for ball traction", "Dual-density anti-shock grip"]
  },
  {
    id: "hockey-match-ball",
    name: "AR Dimple Turf Official Match Field Hockey Ball",
    sport: "Hockey",
    sportSlug: "hockey",
    category: "Equipment",
    type: "equipment",
    isCustomizable: false,
    isFeatured: false,
    shortDescription: "Molded dimpled PVC field hockey ball with hollow cork center for true roll on wet and dry synthetic turf.",
    description: "Dimpled pattern disrupts surface tension on water-based pitches to eliminate bouncing and erratic skips. Consistent roll and regulation weight.",
    images: [
      "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Regulation Match Ball (Box of 1 or 6)"],
    colors: ["Classic White", "High-Vis Fluorescent Pink", "Fluorescent Yellow"],
    features: ["Seamless molded dimple outer", "Solid cork-composite center core", "FIH tournament compliant specifications"]
  },
  {
    id: "hockey-shin-guards",
    name: "AR Shield Pro Field Hockey Shin & Ankle Guards",
    sport: "Hockey",
    sportSlug: "hockey",
    category: "Accessories",
    type: "equipment",
    isCustomizable: false,
    isFeatured: false,
    badge: "Ankle Protection",
    shortDescription: "Anatomically shaped hard plastic shell with thick foam backing and integrated ankle padding.",
    description: "Protects shins and delicate ankle malleolus bones against hard stick impacts and high-velocity turf balls. Ventilated front slits keep legs cool.",
    images: [
      "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Small (Youth)", "Medium (Adult)", "Large (Adult)"],
    features: ["Shock-dispersing hard TPU outer shell", "Removable washable EVA foam liner", "Under-foot stirrup strap for secure fit"]
  },

  // ==========================================
  // GYM & FITNESS WEAR
  // ==========================================
  {
    id: "sports-performance-dryfit-tshirt",
    name: "AR Velocity Athletic Dry-Fit Gym T-Shirt",
    sport: "Gym & Fitness Wear",
    sportSlug: "gym-fitness",
    category: "Sportswear",
    type: "shirt",
    isCustomizable: true,
    isFeatured: true,
    badge: "Core Essential",
    shortDescription: "Ultra-breathable micro-interlock athletic training t-shirt suitable for gyms, clubs, and high-intensity workouts.",
    description: "The ideal everyday workout top. Made from 150 GSM lightweight dry-fit polyester that channels sweat away from the body. Fully printable with custom sublimation graphics, team logos, and chest insignia.",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Jet Black", "Heather Grey", "Navy Blue", "Pure White", "Crimson Red", "Custom Sublimation"],
    features: ["Quick-dry CoolMax moisture wicking", "Chafe-resistant overlock flatlock seams", "Full sublimation or screen print options", "Shape retention after 50+ washes"]
  },
  {
    id: "gym-dryfit-training-tracksuit",
    name: "AR Stealth Performance Gym Tracksuit",
    sport: "Gym & Fitness Wear",
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
    id: "athletic-training-squad-shorts",
    name: "AR Flex Performance Athletic Training Shorts",
    sport: "Gym & Fitness Wear",
    sportSlug: "gym-fitness",
    category: "Sportswear",
    type: "shorts",
    isCustomizable: true,
    isFeatured: false,
    badge: "Lightweight",
    shortDescription: "4-way mechanical stretch athletic shorts with dual zipped pockets and anti-sweat elastic waistband.",
    description: "Engineered for maximum mobility across gym workouts, squats, sprints, and training drills. Lightweight quick-drying polyester with reinforced split-leg side hems for unrestrained stride.",
    images: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Matte Black", "Deep Navy", "Steel Grey"],
    features: ["4-way stretch micro-poly fabric", "Dual secure zipped side pockets", "Wide elasticated waistband with internal drawcord", "Quick-drying moisture management"]
  },
  {
    id: "gym-compression-recovery-tights",
    name: "AR Armor Base-Layer Compression Tights",
    sport: "Gym & Fitness Wear",
    sportSlug: "gym-fitness",
    category: "Sportswear",
    type: "pants",
    isCustomizable: true,
    isFeatured: false,
    badge: "Graduated Fit",
    shortDescription: "Targeted compression leggings designed to reduce muscle vibration and accelerate post-workout recovery.",
    description: "Spandex-polyester interlock supports quadriceps, hamstrings, and calves during heavy lifts and high-mileage runs. Breathable crotch gusset prevents overheating.",
    images: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Onyx Black", "Charcoal Melange"],
    features: ["Graduated athletic compression support", "Flatlock non-abrasive stitching", "Moisture-wicking dry-fit knit"]
  },
  {
    id: "gym-droparm-athletic-tank",
    name: "AR Muscle-Cut Drop-Arm Gym Tank Top",
    sport: "Gym & Fitness Wear",
    sportSlug: "gym-fitness",
    category: "Sportswear",
    type: "shirt",
    isCustomizable: true,
    isFeatured: false,
    badge: "Drop-Arm",
    shortDescription: "Deep armhole cut athletic tank top engineered for complete upper-body shoulder range during lifting.",
    description: "Featherweight cotton-poly blend offers supreme ventilation for hot workout days. Customizable with personal gym logo or academy lettering.",
    images: [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Jet Black", "Heather Grey", "Army Olive", "Pure White"],
    features: ["Deep drop-armhole styling", "Reinforced crew neck seam", "Custom chest & back print ready"]
  },

  // ==========================================
  // GENERAL SPORTSWEAR
  // ==========================================
  {
    id: "custom-club-polo-shirt",
    name: "AR Elite Custom Team Polo Shirt",
    sport: "General Sportswear",
    sportSlug: "general-sportswear",
    category: "Sportswear",
    type: "polo",
    isCustomizable: true,
    isFeatured: true,
    badge: "Premium Finish",
    shortDescription: "Classic honeycomb cotton-poly pique polo with ribbed collar, 3-button placket, and custom embroidery.",
    description: "Designed for school faculty, coaching staff, corporate tournament delegations, and club travel. Offers a sharp, distinguished appearance with breathable all-day comfort.",
    images: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Deep Navy", "Pure White", "Charcoal Grey", "Forest Green", "Burgundy"],
    features: ["220 GSM heavyweight pique cotton-poly", "High-density precision logo embroidery", "Reinforced side vents and collar bands", "Anti-shrink pre-washed fabric"]
  },
  {
    id: "squad-fleece-team-hoodie",
    name: "AR Pro Squad Warmup Fleece Team Hoodie",
    sport: "General Sportswear",
    sportSlug: "general-sportswear",
    category: "Sportswear",
    type: "hoodie",
    isCustomizable: true,
    isFeatured: true,
    badge: "Winter Warmup",
    shortDescription: "Heavyweight 320 GSM brushed fleece pullover hoodie with double-layer hood and custom team printing.",
    description: "Essential for winter training sessions, early morning matches, and team travel. Soft brushed fleece interior provides supreme warmth, while the anti-pilling outer shell carries custom team crests and sponsor prints crisply.",
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Onyx Black", "Heather Grey", "Navy Blue", "Deep Maroon"],
    features: ["320 GSM heavyweight cotton-poly fleece", "Spacious kangaroo front pocket", "Metal grommets with braided drawstrings", "Ribbed spandex cuffs and hem"]
  },
  {
    id: "custom-sports-snapback-cap",
    name: "AR Athletic Structured Team Sports Cap",
    sport: "General Sportswear",
    sportSlug: "general-sportswear",
    category: "Accessories",
    type: "cap",
    isCustomizable: true,
    isFeatured: false,
    badge: "Custom Crest",
    shortDescription: "6-panel structured athletic cap with 3D raised embroidery, moisture sweatband, and adjustable snapback.",
    description: "Complete your squad's uniform with customized matching caps. High-grade twill front panels maintain their crown shape, while laser-cut side perforations provide cooling airflow during sunny matches.",
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["One Size Fits Most (Adjustable)"],
    colors: ["Black / White", "Navy Blue", "Charcoal", "Red / Black", "Custom Colorway"],
    features: ["3D raised embroidery for club letters/crest", "Internal moisture-wicking sweatband", "Laser-cut ventilation eyelets", "Durable pre-curved visor"]
  },
  {
    id: "general-floppy-sun-hat",
    name: "AR Wide-Brim UV Protection Floppy Sun Hat",
    sport: "General Sportswear",
    sportSlug: "general-sportswear",
    category: "Accessories",
    type: "cap",
    isCustomizable: true,
    isFeatured: false,
    badge: "UV Shield",
    shortDescription: "Full 360-degree brim cotton sun hat with custom embroidered crest and adjustable chin cord.",
    description: "Protects umpires, coaching staff, spectators, and players across day-long outdoor events. Lightweight breathable cotton twill with brass mesh ventilation grommets.",
    images: [
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Small (54-56cm)", "Medium (57-59cm)", "Large (60-62cm)"],
    colors: ["Natural Cream", "Pure White", "Navy Blue", "Dark Olive"],
    features: ["360-degree wide protective brim", "UPF 50+ sun radiation shield", "Adjustable chin drawstring with toggle lock"]
  },
  {
    id: "custom-sublimation-studio-package",
    name: "AR Bespoke Full-Sublimation Squad Print Package",
    sport: "General Sportswear",
    sportSlug: "general-sportswear",
    category: "Sportswear",
    type: "complete kit",
    isCustomizable: true,
    isFeatured: true,
    badge: "Full Customization",
    shortDescription: "Zero-limitation digital dye sublimation package. Any colors, unlimited sponsor logos, names & squad numbers.",
    description: "Our signature manufacturing capability. High-definition Japanese industrial sublimation printers infuse colors directly into the textile fibers at 200°C. Colors never peel, crack, or fade, no matter how many times uniforms are washed or subjected to tough match slide tackles.",
    images: [
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Youth & Adult Sizes (XS to 3XL)"],
    colors: ["100% Custom Any Color Combination / Pantone"],
    features: ["All-over permanent digital dye sublimation", "Unlimited chest, back, and sleeve sponsor prints", "Individual roster names & numbers included at no extra charge", "Digital 3D vector proof before printing"]
  },
  {
    id: "cushioned-crew-sports-socks",
    name: "AR MaxGrip Cushioned Athletic Crew Sports Socks",
    sport: "General Sportswear",
    sportSlug: "general-sportswear",
    category: "Accessories",
    type: "socks",
    isCustomizable: true,
    isFeatured: false,
    badge: "Comfort Fit",
    shortDescription: "Thick terry-cushioned sports socks with anti-blister arch compression and breathable instep.",
    description: "Engineered for intense multidirectional sports. Padded heel and forefoot sections absorb ground impact forces, while the midfoot elastic compression band prevents sock slippage inside sports shoes.",
    images: [
      "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Medium (Fits 6-9)", "Large (Fits 10-13)"],
    colors: ["White / Black Accents", "Triple Black", "Navy / White"],
    features: ["High-density terry sole cushioning", "Midfoot compression arch support", "Seamless toe closure prevents friction blisters", "Custom jacquard team logo option for bulk orders"]
  },
  {
    id: "teamwear-kit-duffle-bag",
    name: "AR Tour Pro Large Squad Equipment Duffle Bag",
    sport: "General Sportswear",
    sportSlug: "general-sportswear",
    category: "Accessories",
    type: "equipment",
    isCustomizable: true,
    isFeatured: false,
    badge: "Heavy Duty",
    shortDescription: "Water-resistant 600D Cordura team duffle bag with ventilated shoe compartment and padded shoulder straps.",
    description: "Built to carry entire tournament kits, helmets, pads, cricket bats, footballs, and tracksuits. Features reinforced nylon webbing, heavy-duty self-repairing zippers, and customizable school or club screen printing.",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Large (85 Liters)", "Extra Large (110 Liters)"],
    colors: ["Matte Black / Neon", "Navy / Royal Blue", "Red / Black"],
    features: ["600D waterproof PU-coated Cordura", "Ventilated separate boot compartment", "Dual heavy-duty carry handles and padded shoulder strap", "Custom team name & crest printing"]
  },
  {
    id: "school-custom-house-sports-kit",
    name: "AR Academy Inter-School House Uniform Kit",
    sport: "General Sportswear",
    sportSlug: "general-sportswear",
    category: "Sportswear",
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
    sport: "General Sportswear",
    sportSlug: "general-sportswear",
    category: "Sportswear",
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
  { id: "shirt", name: "Shirt / Sports T-Shirt" },
  { id: "polo", name: "Custom Polo Shirt" },
  { id: "jersey", name: "Match Jersey" },
  { id: "pants", name: "Trousers / Match Pants" },
  { id: "shorts", name: "Athletic Shorts" },
  { id: "hoodie", name: "Team Fleece Hoodie" },
  { id: "tracksuit", name: "Tracksuit (Jacket + Pants)" },
  { id: "socks", name: "Team Match Socks" },
  { id: "cap", name: "Sports Cap / Floppy Hat" },
  { id: "complete kit", name: "Complete Squad Kit (Jersey + Pants/Shorts + Socks)" }
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
