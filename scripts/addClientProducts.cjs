const fs = require('fs');
const path = require('path');

// 1. Read existing productsData.js
const productsDataPath = path.join(__dirname, '..', 'src', 'data', 'productsData.js');
let fileContent = fs.readFileSync(productsDataPath, 'utf8');

// Parse out the components or load them via import/eval
// Since productsData.js uses ES modules exports, let's load it cleanly:
const esmLoader = async () => {
  const { SPORTS_CATEGORIES, PRODUCTS_DATA, GARMENT_TYPES, DESIGN_PATTERNS, PRESET_COLORS } = await import('file:///' + productsDataPath.replace(/\\/g, '/'));

  // 2. Add 'trophies-awards' to SPORTS_CATEGORIES if not already present
  let updatedCategories = [...SPORTS_CATEGORIES];
  if (!updatedCategories.some(c => c.slug === 'trophies-awards')) {
    updatedCategories.push({
      id: "trophies-awards",
      name: "Trophies & Awards",
      slug: "trophies-awards",
      description: "Custom engraved sports trophies, championship shields, gold & silver cups, plastic trophies, and competition medals.",
      image: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=800&q=80",
      badge: "Awards & Cups",
      equipmentCount: "5+ Products"
    });
  }

  // 3. Mark existing items with imageStatus = 'verified' if not present
  let existingProducts = PRODUCTS_DATA.map(p => ({
    ...p,
    imageStatus: p.imageStatus || 'verified'
  }));

  // 4. Define the specific new / updated client-requested products
  const clientNewProducts = [
    // --- CRICKET: SPECIALIZED BATS & BALLS ---
    {
      id: "cricket-sri-lankan-tape-ball-bat",
      name: "Sri Lankan Profile Tape-Ball Cricket Bat",
      sport: "Cricket",
      sportSlug: "cricket",
      category: "Playing Equipment",
      type: "equipment",
      isCustomizable: false,
      isFeatured: true,
      badge: "Sri Lankan Profile",
      imageStatus: "needs_client_photo",
      photoNotice: "Actual shop photograph can be requested via WhatsApp",
      shortDescription: "Ultralight feather pickup with high sweet spot and massive 45mm+ blade edges for six-hitting.",
      description: "Renowned across Pakistani tape-ball leagues for extreme power pickup and lightning hand speed against 140+ kph tape-ball bowling. Lightweight aerodynamic profile allows explosive wrist snap through the line of the ball.",
      images: [
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80"
      ],
      sizes: ["34.5 Inch", "35 Inch Long Blade"],
      variants: ["Ultralight (780g - 820g)", "Medium Power (830g - 860g)"],
      features: [
        "Sri Lankan high-spine power pickup",
        "45mm+ monster contour edges",
        "Triple-rubber shock dampening cane handle",
        "Laser-burn engraved profile"
      ],
      customizationOptions: ["Custom toe guard & grip installation", "Weight hand-selection"]
    },
    {
      id: "cricket-rawala-kohati-bat",
      name: "Rawala Kohati Power Curve Tape-Ball Bat",
      sport: "Cricket",
      sportSlug: "cricket",
      category: "Playing Equipment",
      type: "equipment",
      isCustomizable: false,
      isFeatured: true,
      badge: "Kohati Curve",
      imageStatus: "needs_client_photo",
      photoNotice: "Actual shop photograph can be requested via WhatsApp",
      shortDescription: "Traditional Kohati curved scoop profile engineered for heavy tape-ball six-hitting tournaments.",
      description: "The weapon of choice for Pakistan's premier tape-ball tournament strikers. Hand-carved with the classic Kohati bottom scoop curve, delivering immense leverage for clearing boundary fences on full tosses and yorkers.",
      images: [
        "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&w=800&q=80"
      ],
      sizes: ["35 Inch Long Blade", "35.5 Inch Extended"],
      variants: ["Light Pickup (800g)", "Tournament Heavy (850g)"],
      features: [
        "Authentic Kohati bottom scoop contour",
        "Reinforced toe with protective guard",
        "Full round thick Singapore cane handle",
        "Engineered exclusively for heavy tape balls"
      ],
      customizationOptions: ["Selected weight matching", "Choice of octopus or spiral grip"]
    },
    {
      id: "cricket-tape-ball-power-bat",
      name: "Power Blade Tournament Tape-Ball Cricket Bat",
      sport: "Cricket",
      sportSlug: "cricket",
      category: "Playing Equipment",
      type: "equipment",
      isCustomizable: false,
      isFeatured: true,
      badge: "45mm Edges",
      imageStatus: "verified",
      shortDescription: "Specialized 35-inch long blade with 45mm+ thick contoured edges and triple-cushion rubber handle.",
      description: "Designed for competitive tape-ball day/night tournaments. Crafted from carefully selected air-seasoned wood with deep concave sculpting for maximum sweet spot elevation and power transfer.",
      images: [
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80"
      ],
      sizes: ["34.5 Inch", "35 Inch", "35.5 Inch"],
      variants: ["Super Light (790g)", "Medium (830g)"],
      features: [
        "Extended 35-inch blade length",
        "Huge 45mm-48mm power edges",
        "Triple-layer rubber cushioned handle",
        "Pre-fitted toe protector"
      ],
      customizationOptions: ["Grip color preference"]
    },
    {
      id: "cricket-hard-wood-local-bat",
      name: "Local Hard-Wood Heavy Tape-Ball Cricket Bat",
      sport: "Cricket",
      sportSlug: "cricket",
      category: "Playing Equipment",
      type: "equipment",
      isCustomizable: false,
      isFeatured: false,
      badge: "Street Tough",
      imageStatus: "needs_client_photo",
      photoNotice: "Actual shop photograph can be requested via WhatsApp",
      shortDescription: "Heavyweight solid local hardwood construction built to withstand rough street play and gravel pitches.",
      description: "Robust local hardwood cricket bat made to resist cracking on rough tarmac, hard gravel grounds, and concrete street wickets. Highly durable wood density provides long lifespan even with heavy hitting.",
      images: [
        "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&w=800&q=80"
      ],
      sizes: ["Short Handle (Standard)", "Long Blade (35 Inch)"],
      variants: ["Solid Heavy (900g+)", "Standard (850g)"],
      features: [
        "High-density local hardwood timber",
        "Extra thick toe prevents ground chipping",
        "Reinforced handle binding with nylon string",
        "Resilient against rough surfaces"
      ],
      customizationOptions: []
    },
    {
      id: "cricket-gassi-balls-pack",
      name: "Gassi Heavy-Rubber Cricket Balls (Pack of 6)",
      sport: "Cricket",
      sportSlug: "cricket",
      category: "Playing Equipment",
      type: "equipment",
      isCustomizable: false,
      isFeatured: true,
      badge: "Heavy Rubber Core",
      imageStatus: "needs_client_photo",
      photoNotice: "Actual shop photograph can be requested via WhatsApp",
      shortDescription: "High-density solid rubber-core Gassi balls widely used for hard tape-ball matches across Rawalpindi and Islamabad.",
      description: "The standard for serious tape-ball cricket in Pakistan. Features a solid, heavy rubber core that delivers true bounce, sharp pace off the pitch, and maintains shape through 10+ overs of power hitting once taped.",
      images: [
        "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80"
      ],
      sizes: ["Pack of 6 Heavy Gassi Balls", "Dozen Pack (12 Balls)"],
      colors: ["High-Vis Yellow", "Optic Green"],
      features: [
        "Solid heavy rubber core formulation",
        "High abrasion-resistant felt surface",
        "Holds tape wrapping firmly without slipping",
        "Pack of 6 tournament balls"
      ],
      customizationOptions: ["Bulk team carton orders available on WhatsApp"]
    },
    {
      id: "cricket-ar-sports-branded-balls",
      name: "AR Sports Tournament Leather Match Cricket Ball",
      sport: "Cricket",
      sportSlug: "cricket",
      category: "Playing Equipment",
      type: "equipment",
      isCustomizable: false,
      isFeatured: true,
      badge: "AR Sports Official",
      imageStatus: "needs_client_photo",
      photoNotice: "Verified Store Branded Ball - Actual Shop Photo on Request",
      shortDescription: "Verified store-branded match leather ball with Portuguese cork core and gold-embossed AR Sports emblem.",
      description: "Official store-branded match leather cricket ball crafted exclusively for AR Sports Islamabad. Alum-tanned steer hide with Portuguese cork-rubber core, hand-stitched 80+ seams, and embossed AR Sports gold crest.",
      images: [
        "https://images.unsplash.com/photo-1628891890467-b79f2c8ba9dc?auto=format&fit=crop&w=800&q=80"
      ],
      sizes: ["Regulation 156g (Men)", "Youth 135g"],
      colors: ["Traditional Red", "Day-Night White", "High-Vis Pink"],
      features: [
        "Official AR Sports stamped gold emblem",
        "Top-grade alum-tanned 4-piece leather",
        "Laminated Portuguese cork-rubber core",
        "Seam retention tested for 50+ overs"
      ],
      customizationOptions: ["Custom tournament batch orders on WhatsApp"]
    },
    {
      id: "cricket-tape-balls-pack",
      name: "Tournament Grade Tennis Tape Balls (Pack of 6)",
      sport: "Cricket",
      sportSlug: "cricket",
      category: "Playing Equipment",
      type: "equipment",
      isCustomizable: false,
      isFeatured: false,
      shortDescription: "Selected pressurized tennis balls with high-density rubber cores specifically designed for wrapping with cricket PVC tape.",
      description: "Specially selected tennis balls featuring tight synthetic felt that provides optimal adhesion for electrical and PVC cricket tapes. Delivers reliable bounce and true aerodynamic flight on local pitches.",
      images: [
        "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80"
      ],
      sizes: ["Pack of 6 Balls", "Pack of 12 Balls"],
      colors: ["High-Vis Neon Yellow"],
      features: [
        "Pressurized durable rubber core",
        "Dense felt holds vinyl tape tightly",
        "Predictable bounce on concrete & clay wickets"
      ],
      customizationOptions: []
    },
    {
      id: "cricket-pvc-tape-rolls-box",
      name: "Pro PVC Cricket Ball Tapes & Grip Tapes (Box of 12)",
      sport: "Cricket",
      sportSlug: "cricket",
      category: "Accessories",
      type: "equipment",
      isCustomizable: false,
      isFeatured: false,
      badge: "High-Adhesion PVC",
      imageStatus: "needs_client_photo",
      photoNotice: "Actual shop photograph can be requested via WhatsApp",
      shortDescription: "High-tack stretch vinyl PVC tape rolls for tape-ball preparation and handle finishing.",
      description: "Premium vinyl electrical/cricket PVC tape rolls with ultra-strong adhesive backing. Stretches smoothly over tennis balls without peeling or wrinkling, creating the perfect shiny and rough side for reverse swing.",
      images: [
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80"
      ],
      sizes: ["Box of 12 Rolls (18mm x 10m each)"],
      colors: ["Solid White", "Red", "Electric Blue", "Onyx Black"],
      features: [
        "High-tack pressure-sensitive adhesive",
        "Stretchable PVC vinyl conforms to ball curve",
        "Abrasion resistant for long innings",
        "Box of 12 rolls"
      ],
      customizationOptions: []
    },
    {
      id: "cricket-complete-hardball-kit-package",
      name: "AR Elite Complete Hard-Ball Cricket Kit & Team Gear Package",
      sport: "Cricket",
      sportSlug: "cricket",
      category: "Clothing & Team Kits",
      type: "complete kit",
      isCustomizable: true,
      isFeatured: true,
      badge: "All-In-One Match Kit",
      imageStatus: "verified",
      shortDescription: "Comprehensive tournament-ready hard-ball cricket package equipping individual players or entire clubs.",
      description: "The complete tournament-ready hard-ball cricket package. Equips players with professional gear: Grade English/Kashmir willow bat, 4-piece leather match ball, test-standard batting pads, batting gloves, titanium grille helmet, thigh guard, inner thigh guard, arm guard, chest protector, abdominal box, cricket spike shoes, regulation stumps & bails, wicket-keeping gloves & pads, customized sublimated team jersey, match trousers, padded socks, and large wheelie tournament kitbag.",
      images: [
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80"
      ],
      sizes: ["Junior / Youth Package", "Adult Regular Package", "Adult Large Package"],
      colors: ["Custom Club Team Colors"],
      features: [
        "Includes Bat, 4-Piece Ball, Pads & Batting Gloves",
        "CE-Certified Titanium Grille Helmet",
        "Full Protective Guard Suite (Thigh, Arm, Chest, Abdominal)",
        "Spike Shoes, Stumps, Bails & WK Gloves/Pads",
        "Full Sublimated Uniform (Jersey + Trousers + Socks)",
        "Heavy-Duty Giant Wheelie Kitbag with Bat Sleeves"
      ],
      customizationOptions: [
        "Full sublimation team uniform design",
        "Player name, roster number & club crest",
        "Bat weight & handle selection"
      ]
    },

    // --- BADMINTON: RACKET COVERS & BAGS ---
    {
      id: "badminton-racket-covers-bags",
      name: "AR Padded Thermal Badminton Racket Cover & Carry Bag",
      sport: "Badminton",
      sportSlug: "badminton",
      category: "Accessories",
      type: "equipment",
      isCustomizable: true,
      isFeatured: false,
      badge: "Padded Foam",
      imageStatus: "verified",
      shortDescription: "Full-length padded thermal racket cover with adjustable shoulder strap and accessory zip pocket.",
      description: "Protects high-tension racket strings and carbon graphite frames from impacts, scratches, and temperature variations during transit to the court. Fits 1 to 2 rackets securely.",
      images: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
      ],
      sizes: ["Full Length (Single/Double Racket)"],
      colors: ["Black / Volt", "Navy / Silver", "Red / Black"],
      features: [
        "High-density foam protective padding",
        "Thermal foil lining guards string tension",
        "Adjustable shoulder carry strap",
        "Zipped grip/shuttle accessory pouch"
      ],
      customizationOptions: ["Custom printed player name or academy logo"]
    },

    // --- TROPHIES & AWARDS (NEW CATEGORY) ---
    {
      id: "trophies-championship-metal-cup",
      name: "AR Champion Gold & Silver Plated Metal Trophy Cup",
      sport: "Trophies & Awards",
      sportSlug: "trophies-awards",
      category: "Playing Equipment",
      type: "equipment",
      isCustomizable: true,
      isFeatured: true,
      badge: "Metal Championship Cup",
      imageStatus: "verified",
      shortDescription: "Cast metal tournament cup with gold/silver electroplating on mahogany-finish wooden pedestal base.",
      description: "Prestigious championship trophy cup designed for tournament winners, player of the match awards, and annual sports galas. Comes mounted on a solid wooden base with custom laser-engraved metal plaque.",
      images: [
        "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=800&q=80"
      ],
      sizes: ["Large (24 Inch)", "Medium (18 Inch)", "Small (14 Inch)"],
      colors: ["High-Lustre Gold Plated", "Silver Plated", "Two-Tone Gold/Silver"],
      features: [
        "Heavy-gauge die-cast metal cup with handles",
        "Polished hardwood mahogany-finish base",
        "Custom laser-engraved brass/metal inscription plaque",
        "Tarnish-resistant clear protective lacquer"
      ],
      customizationOptions: [
        "Laser-engraved tournament title & year",
        "Custom club crest or corporate logo",
        "Winner / Runner-up inscription"
      ]
    },
    {
      id: "trophies-plastic-tournament-cup",
      name: "High-Gloss Molded Plastic Sports Tournament Trophy",
      sport: "Trophies & Awards",
      sportSlug: "trophies-awards",
      category: "Playing Equipment",
      type: "equipment",
      isCustomizable: true,
      isFeatured: true,
      badge: "School & Club Favorite",
      imageStatus: "verified",
      shortDescription: "Durable high-gloss electroplated plastic sports trophy on heavy weighted composite base.",
      description: "Cost-effective, elegant sports trophies ideal for school sports days, inter-house events, cricket tournaments, football leagues, and participation awards. Features a brilliant gold finish that looks prestigious on the podium.",
      images: [
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
      ],
      sizes: ["10 Inch", "12 Inch", "15 Inch", "Set of 3 (1st, 2nd, 3rd)"],
      colors: ["Brilliant Gold", "Silver Finish"],
      features: [
        "High-density shatter-resistant molded plastic",
        "Heavy weighted square base for podium stability",
        "Custom engraved metal plaque included",
        "Sport-specific top figurines available (Cricket, Football, Badminton)"
      ],
      customizationOptions: [
        "Custom engraved event title & winner name",
        "Choice of sport figurine (Cricket batsman/bowler, Footballer, etc.)"
      ]
    },
    {
      id: "trophies-sports-competition-shield",
      name: "Classic Wooden & Metal Sports Competition Shield",
      sport: "Trophies & Awards",
      sportSlug: "trophies-awards",
      category: "Playing Equipment",
      type: "equipment",
      isCustomizable: true,
      isFeatured: false,
      badge: "Perpetual Shield",
      imageStatus: "verified",
      shortDescription: "Traditional polished teak-finish hardwood presentation shield with central embossed metal plaque.",
      description: "The classic presentation shield for perpetual championships, collegiate leagues, and distinguished achievement honors. Includes central title plate and surrounding date/winner tabs for multi-year tracking.",
      images: [
        "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=800&q=80"
      ],
      sizes: ["10 Inch Table Shield", "14 Inch Perpetual Shield", "18 Inch Grand Shield"],
      colors: ["Dark Teak Wood / Gold Accents", "Rosewood / Silver Accents"],
      features: [
        "Solid beveled hardwood shield plaque",
        "Embossed central metal tournament plate",
        "Pre-drilled wall hanging mount and rear desktop strut",
        "Surrounding winner year tabs"
      ],
      customizationOptions: [
        "Custom school / club crest engraving",
        "Perpetual winner name records"
      ]
    },
    {
      id: "trophies-team-medals-pack",
      name: "Cast Metal Tournament Winners Medals (Gold, Silver, Bronze Pack)",
      sport: "Trophies & Awards",
      sportSlug: "trophies-awards",
      category: "Accessories",
      type: "equipment",
      isCustomizable: true,
      isFeatured: true,
      badge: "Heavy Cast Metal",
      imageStatus: "verified",
      shortDescription: "Heavyweight 65mm die-cast metal sports medals with satin neck ribbons for 1st, 2nd, and 3rd place.",
      description: "High-quality cast medals delivering true weight and prestige around athletes' necks. Comes complete with red-white-blue or custom national green satin neck ribbons. Back is flat for custom engraving or label printing.",
      images: [
        "https://images.unsplash.com/photo-1569517282132-25d22f4573e6?auto=format&fit=crop&w=800&q=80"
      ],
      sizes: ["65mm Diameter (Standard Tournament)", "75mm (Grand Finals)"],
      colors: ["Gold (1st Place)", "Silver (2nd Place)", "Bronze (3rd Place)", "Mixed Set"],
      features: [
        "Heavy zinc-alloy die-cast construction (3mm thickness)",
        "Includes 80cm stitched satin neck ribbon with metal clasp",
        "Embossed 3D laurel wreath border",
        "Back engraving surface"
      ],
      customizationOptions: [
        "Custom printed back sticker or laser engraving",
        "Ribbon color customization for bulk orders"
      ]
    },
    {
      id: "trophies-player-of-match-crystal",
      name: "Player of the Match Acrylic & Crystal Sports Award",
      sport: "Trophies & Awards",
      sportSlug: "trophies-awards",
      category: "Playing Equipment",
      type: "equipment",
      isCustomizable: true,
      isFeatured: false,
      badge: "Man of the Match",
      imageStatus: "verified",
      shortDescription: "Beveled optical crystal / acrylic presentation award for Man of the Match, Best Batsman, and Best Bowler.",
      description: "Modern, stylish desktop trophy for individual tournament distinctions: Man of the Match, Best Batsman, Best Bowler, Best Fielder, and Player of the Tournament. Clean laser-engraved typography with high optical clarity.",
      images: [
        "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=800&q=80"
      ],
      sizes: ["8 Inch", "10 Inch", "12 Inch"],
      colors: ["Clear Optical Crystal / Blue Base Accent"],
      features: [
        "Beveled optical clarity crystal/acrylic",
        "Substantial weighted crystal base",
        "Laser-etched 3D internal or surface typography",
        "Includes silk-lined presentation gift box"
      ],
      customizationOptions: [
        "Player name, performance stats (e.g. '56 Runs / 3 Wickets')",
        "Tournament crest & match date"
      ]
    }
  ];

  // 5. Merge products cleanly without duplicates
  const finalProductMap = new Map();

  // Add existing products
  existingProducts.forEach(p => finalProductMap.set(p.id, p));

  // Add / overwrite with client requested products
  clientNewProducts.forEach(p => finalProductMap.set(p.id, p));

  const finalProducts = Array.from(finalProductMap.values());

  // 6. Write back to productsData.js
  const outputCode = `/**
 * AR SPORTS - Central Product & Sports Catalog
 * 
 * CRITICAL BUSINESS RULE:
 * Prices are intentionally omitted everywhere across this catalog.
 * Every order receives custom confirmation and quoting via WhatsApp.
 */

export const SPORTS_CATEGORIES = ${JSON.stringify(updatedCategories, null, 2)};

export const PRODUCTS_DATA = ${JSON.stringify(finalProducts, null, 2)};

export const GARMENT_TYPES = ${JSON.stringify(GARMENT_TYPES, null, 2)};

export const DESIGN_PATTERNS = ${JSON.stringify(DESIGN_PATTERNS, null, 2)};

export const PRESET_COLORS = ${JSON.stringify(PRESET_COLORS, null, 2)};
`;

  fs.writeFileSync(productsDataPath, outputCode, 'utf8');

  console.log("Successfully updated productsData.js!");
  console.log("Total Categories:", updatedCategories.length);
  console.log("Total Products:", finalProducts.length);

  const sportCounts = {};
  const statusCounts = { verified: 0, needs_client_photo: 0 };
  finalProducts.forEach(p => {
    sportCounts[p.sportSlug] = (sportCounts[p.sportSlug] || 0) + 1;
    if (p.imageStatus === 'needs_client_photo') {
      statusCounts.needs_client_photo++;
    } else {
      statusCounts.verified++;
    }
  });

  console.log("Counts per sport:", JSON.stringify(sportCounts, null, 2));
  console.log("Image status breakdown:", JSON.stringify(statusCounts, null, 2));
};

esmLoader().catch(err => {
  console.error("Error executing script:", err);
  process.exit(1);
});
