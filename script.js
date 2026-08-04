/* ==========================================================================
   1. ELEMENT DATASET WITH MELTING & BOILING POINTS (Kelvin)
   ========================================================================== */
const rawElements = [
  { num: 1, sym: "H", name: "Hydrogen", mass: "1.008", cat: "nonmetal", period: 1, col: 1, config: "1s¹", mp: "13.99", bp: "20.27", fact: "Most abundant chemical substance in the Universe." },
  { num: 2, sym: "He", name: "Helium", mass: "4.0026", cat: "noble", period: 1, col: 18, config: "1s²", mp: "0.95", bp: "4.22", fact: "Second lightest and second most abundant element." },
  { num: 3, sym: "Li", name: "Lithium", mass: "6.94", cat: "alkali", period: 2, col: 1, config: "[He] 2s¹", mp: "453.65", bp: "1603", fact: "Lightest metal and least dense solid element." },
  { num: 4, sym: "Be", name: "Beryllium", mass: "9.0122", cat: "alkaline", period: 2, col: 2, config: "[He] 2s²", mp: "1560", bp: "2742", fact: "Forms emeralds when present with chromium in beryl." },
  { num: 5, sym: "B", name: "Boron", mass: "10.81", cat: "metalloid", period: 2, col: 13, config: "[He] 2s² 2p¹", mp: "2349", bp: "4200", fact: "Used extensively in fiberglass and ceramics." },
  { num: 6, sym: "C", name: "Carbon", mass: "12.011", cat: "nonmetal", period: 2, col: 14, config: "[He] 2s² 2p²", mp: "3823", bp: "4098", fact: "Basis for all known organic life." },
  { num: 7, sym: "N", name: "Nitrogen", mass: "14.007", cat: "nonmetal", period: 2, col: 15, config: "[He] 2s² 2p³", mp: "63.15", bp: "77.36", fact: "Makes up ~78% of Earth's atmosphere." },
  { num: 8, sym: "O", name: "Oxygen", mass: "15.999", cat: "nonmetal", period: 2, col: 16, config: "[He] 2s² 2p⁴", mp: "54.36", bp: "90.18", fact: "Essential for respiration of most living organisms." },
  { num: 9, sym: "F", name: "Fluorine", mass: "18.998", cat: "nonmetal", period: 2, col: 17, config: "[He] 2s² 2p⁵", mp: "53.48", bp: "85.03", fact: "Most chemically reactive and electronegative element." },
  { num: 10, sym: "Ne", name: "Neon", mass: "20.180", cat: "noble", period: 2, col: 18, config: "[He] 2s² 2p⁶", mp: "24.56", bp: "27.10", fact: "Glows reddish-orange in high-voltage discharge tubes." },
  { num: 11, sym: "Na", name: "Sodium", mass: "22.990", cat: "alkali", period: 3, col: 1, config: "[Ne] 3s¹", mp: "370.94", bp: "1156", fact: "Highly reactive metal stored under oil." },
  { num: 12, sym: "Mg", name: "Magnesium", mass: "24.305", cat: "alkaline", period: 3, col: 2, config: "[Ne] 3s²", mp: "923", bp: "1363", fact: "Burns with a brilliant white light." },
  { num: 13, sym: "Al", name: "Aluminium", mass: "26.982", cat: "post-transition", period: 3, col: 13, config: "[Ne] 3s² 3p¹", mp: "933.47", bp: "2743", fact: "Most abundant metal in Earth's crust." },
  { num: 14, sym: "Si", name: "Silicon", mass: "28.085", cat: "metalloid", period: 3, col: 14, config: "[Ne] 3s² 3p²", mp: "1687", bp: "3538", fact: "Crucial semiconductor used in computer microchips." },
  { num: 15, sym: "P", name: "Phosphorus", mass: "30.974", cat: "nonmetal", period: 3, col: 15, config: "[Ne] 3s² 3p³", mp: "317.3", bp: "553.7", fact: "Essential component of DNA, RNA, and ATP." },
  { num: 16, sym: "S", name: "Sulfur", mass: "32.06", cat: "nonmetal", period: 3, col: 16, config: "[Ne] 3s² 3p⁴", mp: "388.36", bp: "717.8", fact: "Known in ancient times as brimstone." },
  { num: 17, sym: "Cl", name: "Chlorine", mass: "35.45", cat: "nonmetal", period: 3, col: 17, config: "[Ne] 3s² 3p⁵", mp: "171.6", bp: "239.11", fact: "Used widely for water purification and sanitation." },
  { num: 18, sym: "Ar", name: "Argon", mass: "39.948", cat: "noble", period: 3, col: 18, config: "[Ne] 3s² 3p⁶", mp: "83.81", bp: "87.30", fact: "Third-most abundant gas in Earth's atmosphere." },
  { num: 19, sym: "K", name: "Potassium", mass: "39.098", cat: "alkali", period: 4, col: 1, config: "[Ar] 4s¹", mp: "336.7", bp: "1032", fact: "Essential electrolyte for biological neuron firing." },
  { num: 20, sym: "Ca", name: "Calcium", mass: "40.078", cat: "alkaline", period: 4, col: 2, config: "[Ar] 4s²", mp: "1115", bp: "1757", fact: "Vital for cellular function and bone structure." },
  { num: 21, sym: "Sc", name: "Scandium", mass: "44.956", cat: "transition", period: 4, col: 3, config: "[Ar] 3d¹ 4s²", mp: "1814", bp: "3109", fact: "Used in aerospace aluminum alloys." },
  { num: 22, sym: "Ti", name: "Titanium", mass: "47.867", cat: "transition", period: 4, col: 4, config: "[Ar] 3d² 4s²", mp: "1941", bp: "3560", fact: "Strong as steel but 45% lighter." },
  { num: 23, sym: "V", name: "Vanadium", mass: "50.942", cat: "transition", period: 4, col: 5, config: "[Ar] 3d³ 4s²", mp: "2183", bp: "3680", fact: "Named after Vanadis, the Norse goddess of beauty." },
  { num: 24, sym: "Cr", name: "Chromium", mass: "51.996", cat: "transition", period: 4, col: 6, config: "[Ar] 3d⁵ 4s¹", mp: "2180", bp: "2944", fact: "Gives rubies their deep red color." },
  { num: 25, sym: "Mn", name: "Manganese", mass: "54.938", cat: "transition", period: 4, col: 7, config: "[Ar] 3d⁵ 4s²", mp: "1519", bp: "2334", fact: "Essential in stainless steel production." },
  { num: 26, sym: "Fe", name: "Iron", mass: "55.845", cat: "transition", period: 4, col: 8, config: "[Ar] 3d⁶ 4s²", mp: "1811", bp: "3134", fact: "Most common element on Earth by mass." },
  { num: 27, sym: "Co", name: "Cobalt", mass: "58.933", cat: "transition", period: 4, col: 9, config: "[Ar] 3d⁷ 4s²", mp: "1768", bp: "3200", fact: "Produces vibrant blue glass and ceramics." },
  { num: 28, sym: "Ni", name: "Nickel", mass: "58.693", cat: "transition", period: 4, col: 10, config: "[Ar] 3d⁸ 4s²", mp: "1728", bp: "3003", fact: "Resists corrosion and is used in coinage." },
  { num: 29, sym: "Cu", name: "Copper", mass: "63.546", cat: "transition", period: 4, col: 11, config: "[Ar] 3d¹⁰ 4s¹", mp: "1357.77", bp: "2835", fact: "One of the few metals occurring naturally as native metal." },
  { num: 30, sym: "Zn", name: "Zinc", mass: "65.38", cat: "transition", period: 4, col: 12, config: "[Ar] 3d¹⁰ 4s²", mp: "692.68", bp: "1180", fact: "Used in galvanizing steel against rust." },
  { num: 31, sym: "Ga", name: "Gallium", mass: "69.723", cat: "post-transition", period: 4, col: 13, config: "[Ar] 3d¹⁰ 4s² 4p¹", mp: "302.91", bp: "2477", fact: "Melts in your hand at temperatures above 29.76°C." },
  { num: 32, sym: "Ge", name: "Germanium", mass: "72.630", cat: "metalloid", period: 4, col: 14, config: "[Ar] 3d¹⁰ 4s² 4p²", mp: "1211.4", bp: "3106", fact: "Used in fiber optics and infrared optics." },
  { num: 33, sym: "As", name: "Arsenic", mass: "74.922", cat: "metalloid", period: 4, col: 15, config: "[Ar] 3d¹⁰ 4s² 4p³", mp: "1090", bp: "887", fact: "Historically famous as a potent poison." },
  { num: 34, sym: "Se", name: "Selenium", mass: "78.971", cat: "nonmetal", period: 4, col: 16, config: "[Ar] 3d¹⁰ 4s² 4p⁴", mp: "494", bp: "958", fact: "Conducts electricity better in light than darkness." },
  { num: 35, sym: "Br", name: "Bromine", mass: "79.904", cat: "nonmetal", period: 4, col: 17, config: "[Ar] 3d¹⁰ 4s² 4p⁵", mp: "265.8", bp: "332.0", fact: "Only nonmetallic liquid element at room temp." },
  { num: 36, sym: "Kr", name: "Krypton", mass: "83.798", cat: "noble", period: 4, col: 18, config: "[Ar] 3d¹⁰ 4s² 4p⁶", mp: "115.79", bp: "119.93", fact: "Used in high-speed photography flash bulbs." },
  { num: 37, sym: "Rb", name: "Rubidium", mass: "85.468", cat: "alkali", period: 5, col: 1, config: "[Kr] 5s¹", mp: "312.46", bp: "961", fact: "Ignites spontaneously in air." },
  { num: 38, sym: "Sr", name: "Strontium", mass: "87.62", cat: "alkaline", period: 5, col: 2, config: "[Kr] 5s²", mp: "1050", bp: "1655", fact: "Gives fireworks a bright crimson color." },
  { num: 39, sym: "Y", name: "Yttrium", mass: "88.906", cat: "transition", period: 5, col: 3, config: "[Kr] 4d¹ 5s²", mp: "1799", bp: "3609", fact: "Named after Ytterby, a village in Sweden." },
  { num: 40, sym: "Zr", name: "Zirconium", mass: "91.224", cat: "transition", period: 5, col: 4, config: "[Kr] 4d² 5s²", mp: "2128", bp: "4682", fact: "Highly resistant to corrosion by acids and water." },
  { num: 41, sym: "Nb", name: "Niobium", mass: "92.906", cat: "transition", period: 5, col: 5, config: "[Kr] 4d⁴ 5s¹", mp: "2750", bp: "5017", fact: "Used in superconducting magnets." },
  { num: 42, sym: "Mo", name: "Molybdenum", mass: "95.95", cat: "transition", period: 5, col: 6, config: "[Kr] 4d⁵ 5s¹", mp: "2896", bp: "4912", fact: "Has one of the highest melting points of pure elements." },
  { num: 43, sym: "Tc", name: "Technetium", mass: "(98)", cat: "transition", period: 5, col: 7, config: "[Kr] 4d⁵ 5s²", mp: "2430", bp: "4538", fact: "First artificially produced chemical element." },
  { num: 44, sym: "Ru", name: "Ruthenium", mass: "101.07", cat: "transition", period: 5, col: 8, config: "[Kr] 4d⁷ 5s¹", mp: "2607", bp: "4423", fact: "Rare transition metal of the platinum group." },
  { num: 45, sym: "Rh", name: "Rhodium", mass: "102.91", cat: "transition", period: 5, col: 9, config: "[Kr] 4d⁸ 5s¹", mp: "2237", bp: "3968", fact: "Extremely rare and highly valuable precious metal." },
  { num: 46, sym: "Pd", name: "Palladium", mass: "106.42", cat: "transition", period: 5, col: 10, config: "[Kr] 4d¹⁰", mp: "1828.05", bp: "3236", fact: "Absorbs up to 900 times its volume in hydrogen." },
  { num: 47, sym: "Ag", name: "Silver", mass: "107.87", cat: "transition", period: 5, col: 11, config: "[Kr] 4d¹⁰ 5s¹", mp: "1234.93", bp: "2435", fact: "Highest electrical conductivity of any metal." },
  { num: 48, sym: "Cd", name: "Cadmium", mass: "112.41", cat: "transition", period: 5, col: 12, config: "[Kr] 4d¹⁰ 5s²", mp: "594.22", bp: "1040", fact: "Used in control rods for nuclear reactors." },
  { num: 49, sym: "In", name: "Indium", mass: "114.82", cat: "post-transition", period: 5, col: 13, config: "[Kr] 4d¹⁰ 5s² 5p¹", mp: "429.75", bp: "2345", fact: "Emits a high-pitched 'cry' sound when bent." },
  { num: 50, sym: "Sn", name: "Tin", mass: "118.71", cat: "post-transition", period: 5, col: 14, config: "[Kr] 4d¹⁰ 5s² 5p²", mp: "505.08", bp: "2875", fact: "Used since ancient antiquity in bronze alloys." },
  { num: 51, sym: "Sb", name: "Antimony", mass: "121.76", cat: "metalloid", period: 5, col: 15, config: "[Kr] 4d¹⁰ 5s² 5p³", mp: "903.78", bp: "1908", fact: "Expands as it cools and freezes." },
  { num: 52, sym: "Te", name: "Tellurium", mass: "127.60", cat: "metalloid", period: 5, col: 16, config: "[Kr] 4d¹⁰ 5s² 5p⁴", mp: "722.66", bp: "1261", fact: "Extremely rare in Earth's crust." },
  { num: 53, sym: "I", name: "Iodine", mass: "126.90", cat: "nonmetal", period: 5, col: 17, config: "[Kr] 4d¹⁰ 5s² 5p⁵", mp: "386.85", bp: "457.4", fact: "Sublimes directly into a vivid violet gas." },
  { num: 54, sym: "Xe", name: "Xenon", mass: "131.29", cat: "noble", period: 5, col: 18, config: "[Kr] 4d¹⁰ 5s² 5p⁶", mp: "161.4", bp: "165.03", fact: "Used in ion thrusters for deep space probes." },
  { num: 55, sym: "Cs", name: "Caesium", mass: "132.91", cat: "alkali", period: 6, col: 1, config: "[Xe] 6s¹", mp: "301.6", bp: "944", fact: "Used to define the standard scientific second." },
  { num: 56, sym: "Ba", name: "Barium", mass: "137.33", cat: "alkaline", period: 6, col: 2, config: "[Xe] 6s²", mp: "1000", bp: "2170", fact: "Used as radiocontrast agent for gastrointestinal X-rays." },

  /* Lanthanides Row */
  { num: 57, sym: "La", name: "Lanthanum", mass: "138.91", cat: "lanthanide", period: 9, col: 3, config: "[Xe] 5d¹ 6s²", mp: "1193", bp: "3737", fact: "Gives its name to the lanthanide series." },
  { num: 58, sym: "Ce", name: "Cerium", mass: "140.12", cat: "lanthanide", period: 9, col: 4, config: "[Xe] 4f¹ 5d¹ 6s²", mp: "1068", bp: "3716", fact: "Most abundant of the rare-earth metals." },
  { num: 59, sym: "Pr", name: "Praseodymium", mass: "140.91", cat: "lanthanide", period: 9, col: 5, config: "[Xe] 4f³ 6s²", mp: "1204", bp: "3793", fact: "Used to create strong permanent magnets." },
  { num: 60, sym: "Nd", name: "Neodymium", mass: "144.24", cat: "lanthanide", period: 9, col: 6, config: "[Xe] 4f⁴ 6s²", mp: "1297", bp: "3347", fact: "Makes the strongest known permanent magnets." },
  { num: 61, sym: "Pm", name: "Promethium", mass: "(145)", cat: "lanthanide", period: 9, col: 7, config: "[Xe] 4f⁵ 6s²", mp: "1315", bp: "3273", fact: "Only radioactive lanthanide metal." },
  { num: 62, sym: "Sm", name: "Samarium", mass: "150.36", cat: "lanthanide", period: 9, col: 8, config: "[Xe] 4f⁶ 6s²", mp: "1345", bp: "2067", fact: "Used in cancer radiation therapy treatments." },
  { num: 63, sym: "Eu", name: "Europium", mass: "151.96", cat: "lanthanide", period: 9, col: 9, config: "[Xe] 4f⁷ 6s²", mp: "1099", bp: "1802", fact: "Used in red phosphors for TV screens." },
  { num: 64, sym: "Gd", name: "Gadolinium", mass: "157.25", cat: "lanthanide", period: 9, col: 10, config: "[Xe] 4f⁷ 5d¹ 6s²", mp: "1585", bp: "3523", fact: "Used as an MRI contrast agent." },
  { num: 65, sym: "Tb", name: "Terbium", mass: "158.93", cat: "lanthanide", period: 9, col: 11, config: "[Xe] 4f⁹ 6s²", mp: "1629", bp: "3503", fact: "Used in green phosphors and sonar transducers." },
  { num: 66, sym: "Dy", name: "Dysprosium", mass: "162.50", cat: "lanthanide", period: 9, col: 12, config: "[Xe] 4f¹⁰ 6s²", mp: "1680", bp: "2840", fact: "Has a very high thermal neutron absorption cross-section." },
  { num: 67, sym: "Ho", name: "Holmium", mass: "164.93", cat: "lanthanide", period: 9, col: 13, config: "[Xe] 4f¹¹ 6s²", mp: "1734", bp: "2993", fact: "Has highest magnetic moment of any natural element." },
  { num: 68, sym: "Er", name: "Erbium", mass: "167.26", cat: "lanthanide", period: 9, col: 14, config: "[Xe] 4f¹² 6s²", mp: "1802", bp: "3141", fact: "Used in fiber optic telecommunication amplifiers." },
  { num: 69, sym: "Tm", name: "Thulium", mass: "168.93", cat: "lanthanide", period: 9, col: 15, config: "[Xe] 4f¹³ 6s²", mp: "1818", bp: "2223", fact: "Least abundant natural lanthanide metal." },
  { num: 70, sym: "Yb", name: "Ytterbium", mass: "173.05", cat: "lanthanide", period: 9, col: 16, config: "[Xe] 4f¹⁴ 6s²", mp: "1097", bp: "1469", fact: "Used in ultra-precise atomic clocks." },
  { num: 71, sym: "Lu", name: "Lutetium", mass: "174.97", cat: "lanthanide", period: 9, col: 17, config: "[Xe] 4f¹⁴ 5d¹ 6s²", mp: "1925", bp: "3675", fact: "Hardest and densest lanthanide element." },

  /* Remaining Period 6 */
  { num: 72, sym: "Hf", name: "Hafnium", mass: "178.49", cat: "transition", period: 6, col: 4, config: "[Xe] 4f¹⁴ 5d² 6s²", mp: "2506", bp: "4876", fact: "Used in nuclear submarine control rods." },
  { num: 73, sym: "Ta", name: "Tantalum", mass: "180.95", cat: "transition", period: 6, col: 5, config: "[Xe] 4f¹⁴ 5d³ 6s²", mp: "3290", bp: "5731", fact: "Critical component in smartphone capacitors." },
  { num: 74, sym: "W", name: "Tungsten", mass: "183.84", cat: "transition", period: 6, col: 6, config: "[Xe] 4f¹⁴ 5d⁴ 6s²", mp: "3695", bp: "5828", fact: "Highest melting point of all metals (3,422°C)." },
  { num: 75, sym: "Re", name: "Rhenium", mass: "186.21", cat: "transition", period: 6, col: 7, config: "[Xe] 4f¹⁴ 5d⁵ 6s²", mp: "3459", bp: "5869", fact: "One of the rarest elements in Earth's crust." },
  { num: 76, sym: "Os", name: "Osmium", mass: "190.23", cat: "transition", period: 6, col: 8, config: "[Xe] 4f¹⁴ 5d⁶ 6s²", mp: "3306", bp: "5285", fact: "Densest naturally occurring element." },
  { num: 77, sym: "Ir", name: "Iridium", mass: "192.22", cat: "transition", period: 6, col: 9, config: "[Xe] 4f¹⁴ 5d⁷ 6s²", mp: "2719", bp: "4701", fact: "Most corrosion-resistant metal known." },
  { num: 78, sym: "Pt", name: "Platinum", mass: "195.08", cat: "transition", period: 6, col: 10, config: "[Xe] 4f¹⁴ 5d⁹ 6s¹", mp: "2041.4", bp: "4098", fact: "Widely used as catalytic converter in cars." },
  { num: 79, sym: "Au", name: "Gold", mass: "196.97", cat: "transition", period: 6, col: 11, config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", mp: "1337.33", bp: "3129", fact: "Extremely malleable; 1g can be beaten into 1m² sheet." },
  { num: 80, sym: "Hg", name: "Mercury", mass: "200.59", cat: "transition", period: 6, col: 12, config: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", mp: "234.32", bp: "629.88", fact: "Only metallic element liquid at room temperature." },
  { num: 81, sym: "Tl", name: "Thallium", mass: "204.38", cat: "post-transition", period: 6, col: 13, config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", mp: "577", bp: "1746", fact: "Historically called 'The Poisoner's Poison'." },
  { num: 82, sym: "Pb", name: "Lead", mass: "207.2", cat: "post-transition", period: 6, col: 14, config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", mp: "600.61", bp: "2022", fact: "Dense, soft metal used for radiation shielding." },
  { num: 83, sym: "Bi", name: "Bismuth", mass: "208.98", cat: "post-transition", period: 6, col: 15, config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", mp: "544.7", bp: "1837", fact: "Forms colorful, iridescent hopper crystals." },
  { num: 84, sym: "Po", name: "Polonium", mass: "(209)", cat: "post-transition", period: 6, col: 16, config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", mp: "527", bp: "1235", fact: "Discovered by Marie and Pierre Curie." },
  { num: 85, sym: "At", name: "Astatine", mass: "(210)", cat: "metalloid", period: 6, col: 17, config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", mp: "575", bp: "610", fact: "Rarest naturally occurring element in Earth's crust." },
  { num: 86, sym: "Rn", name: "Radon", mass: "(222)", cat: "noble", period: 6, col: 18, config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", mp: "202", bp: "211.5", fact: "Radioactive noble gas accumulating in basements." },
  { num: 87, sym: "Fr", name: "Francium", mass: "(223)", cat: "alkali", period: 7, col: 1, config: "[Rn] 7s¹", mp: "300", bp: "950", fact: "Extremely unstable and highly radioactive metal." },
  { num: 88, sym: "Ra", name: "Radium", mass: "(226)", cat: "alkaline", period: 7, col: 2, config: "[Rn] 7s²", mp: "973", bp: "2013", fact: "Used historically in self-luminous watch hands." },

  /* Actinides Row */
  { num: 89, sym: "Ac", name: "Actinium", mass: "(227)", cat: "actinide", period: 10, col: 3, config: "[Rn] 6d¹ 7s²", mp: "1323", bp: "3471", fact: "Gives its name to the actinide series." },
  { num: 90, sym: "Th", name: "Thorium", mass: "232.04", cat: "actinide", period: 10, col: 4, config: "[Rn] 6d² 7s²", mp: "2023", bp: "5061", fact: "Potential clean alternative nuclear fuel source." },
  { num: 91, sym: "Pa", name: "Protactinium", mass: "231.04", cat: "actinide", period: 10, col: 5, config: "[Rn] 5f² 6d¹ 7s²", mp: "1841", bp: "4300", fact: "Dense, toxic, highly radioactive metal." },
  { num: 92, sym: "U", name: "Uranium", mass: "238.03", cat: "actinide", period: 10, col: 6, config: "[Rn] 5f³ 6d¹ 7s²", mp: "1405.3", bp: "4404", fact: "Primary fuel for nuclear power plants." },
  { num: 93, sym: "Np", name: "Neptunium", mass: "(237)", cat: "actinide", period: 10, col: 7, config: "[Rn] 5f⁴ 6d¹ 7s²", mp: "912", bp: "4273", fact: "First transuranium element synthesized." },
  { num: 94, sym: "Pu", name: "Plutonium", mass: "(244)", cat: "actinide", period: 10, col: 8, config: "[Rn] 5f⁶ 7s²", mp: "912.5", bp: "3505", fact: "Used in space probes like Voyager 1 for power." },
  { num: 95, sym: "Am", name: "Americium", mass: "(243)", cat: "actinide", period: 10, col: 9, config: "[Rn] 5f⁷ 7s²", mp: "1449", bp: "2880", fact: "Used inside household ionization smoke detectors." },
  { num: 96, sym: "Cm", name: "Curium", mass: "(247)", cat: "actinide", period: 10, col: 10, config: "[Rn] 5f⁷ 6d¹ 7s²", mp: "1613", bp: "3383", fact: "Named in honor of Marie and Pierre Curie." },
  { num: 97, sym: "Bk", name: "Berkelium", mass: "(247)", cat: "actinide", period: 10, col: 11, config: "[Rn] 5f⁹ 7s²", mp: "1259", bp: "2900", fact: "Synthesized at UC Berkeley in 1949." },
  { num: 98, sym: "Cf", name: "Californium", mass: "(251)", cat: "actinide", period: 10, col: 12, config: "[Rn] 5f¹⁰ 7s²", mp: "1173", bp: "1743", fact: "Strong neutron emitter used to start nuclear reactors." },
  { num: 99, sym: "Es", name: "Einsteinium", mass: "(252)", cat: "actinide", period: 10, col: 13, config: "[Rn] 5f¹¹ 7s²", mp: "1133", bp: "1269", fact: "Discovered in debris of first hydrogen bomb explosion." },
  { num: 100, sym: "Fm", name: "Fermium", mass: "(257)", cat: "actinide", period: 10, col: 14, config: "[Rn] 5f¹² 7s²", mp: "1800", bp: "N/A", fact: "Named after nuclear physics pioneer Enrico Fermi." },
  { num: 101, sym: "Md", name: "Mendelevium", mass: "(258)", cat: "actinide", period: 10, col: 15, config: "[Rn] 5f¹³ 7s²", mp: "1100", bp: "N/A", fact: "Named after Dmitri Mendeleev, creator of Periodic Table." },
  { num: 102, sym: "No", name: "Nobelium", mass: "(259)", cat: "actinide", period: 10, col: 16, config: "[Rn] 5f¹⁴ 7s²", mp: "1100", bp: "N/A", fact: "Named after Alfred Nobel, founder of Nobel Prize." },
  { num: 103, sym: "Lr", name: "Lawrencium", mass: "(266)", cat: "actinide", period: 10, col: 17, config: "[Rn] 5f¹⁴ 6d¹ 7s²", mp: "1900", bp: "N/A", fact: "Named after Ernest Lawrence, inventor of cyclotron." },

  /* Remaining Period 7 */
  { num: 104, sym: "Rf", name: "Rutherfordium", mass: "(267)", cat: "transition", period: 7, col: 4, config: "[Rn] 5f¹⁴ 6d² 7s²", mp: "2400", bp: "5800", fact: "Synthetic element named after Ernest Rutherford." },
  { num: 105, sym: "Db", name: "Dubnium", mass: "(268)", cat: "transition", period: 7, col: 5, config: "[Rn] 5f¹⁴ 6d³ 7s²", mp: "N/A", bp: "N/A", fact: "Named after Dubna research town in Russia." },
  { num: 106, sym: "Sg", name: "Seaborgium", mass: "(269)", cat: "transition", period: 7, col: 6, config: "[Rn] 5f¹⁴ 6d⁴ 7s²", mp: "N/A", bp: "N/A", fact: "Named after nuclear chemist Glenn T. Seaborg." },
  { num: 107, sym: "Bh", name: "Bohrium", mass: "(270)", cat: "transition", period: 7, col: 7, config: "[Rn] 5f¹⁴ 6d⁵ 7s²", mp: "N/A", bp: "N/A", fact: "Named after Danish physicist Niels Bohr." },
  { num: 108, sym: "Hs", name: "Hassium", mass: "(269)", cat: "transition", period: 7, col: 8, config: "[Rn] 5f¹⁴ 6d⁶ 7s²", mp: "N/A", bp: "N/A", fact: "Named after German state of Hesse." },
  { num: 109, sym: "Mt", name: "Meitnerium", mass: "(278)", cat: "unknown", period: 7, col: 9, config: "[Rn] 5f¹⁴ 6d⁷ 7s²", mp: "N/A", bp: "N/A", fact: "Named after Austrian physicist Lise Meitner." },
  { num: 110, sym: "Ds", name: "Darmstadtium", mass: "(281)", cat: "unknown", period: 7, col: 10, config: "[Rn] 5f¹⁴ 6d⁸ 7s²", mp: "N/A", bp: "N/A", fact: "First created in Darmstadt, Germany." },
  { num: 111, sym: "Rg", name: "Roentgenium", mass: "(282)", cat: "unknown", period: 7, col: 11, config: "[Rn] 5f¹⁴ 6d⁹ 7s²", mp: "N/A", bp: "N/A", fact: "Named after X-ray discoverer Wilhelm Röntgen." },
  { num: 112, sym: "Cn", name: "Copernicium", mass: "(285)", cat: "transition", period: 7, col: 12, config: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", mp: "N/A", bp: "357", fact: "Named after astronomer Nicolaus Copernicus." },
  { num: 113, sym: "Nh", name: "Nihonium", mass: "(286)", cat: "unknown", period: 7, col: 13, config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", mp: "700", bp: "1400", fact: "First element discovered in an Asian nation (Japan)." },
  { num: 114, sym: "Fl", name: "Flerovium", mass: "(289)", cat: "post-transition", period: 7, col: 14, config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", mp: "340", bp: "420", fact: "Superheavy artificial radioelement." },
  { num: 115, sym: "Mc", name: "Moscovium", mass: "(290)", cat: "unknown", period: 7, col: 15, config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", mp: "670", bp: "1400", fact: "Named after Moscow Oblast." },
  { num: 116, sym: "Lv", name: "Livermorium", mass: "(293)", cat: "unknown", period: 7, col: 16, config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", mp: "709", bp: "1085", fact: "Named after Lawrence Livermore National Lab." },
  { num: 117, sym: "Ts", name: "Tennessine", mass: "(294)", cat: "unknown", period: 7, col: 17, config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", mp: "723", bp: "883", fact: "Named after US state of Tennessee." },
  { num: 118, sym: "Og", name: "Oganesson", mass: "(294)", cat: "noble", period: 7, col: 18, config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", mp: "325", bp: "350", fact: "Heaviest element on the periodic table." }
];

/* ==========================================================================
   2. EXPANDED ELECTRON CONFIGURATION GENERATOR
   ========================================================================== */
function getExpandedConfig(config) {
  const coreMap = {
    '[He]': '1s²',
    '[Ne]': '1s² 2s² 2p⁶',
    '[Ar]': '1s² 2s² 2p⁶ 3s² 3p⁶',
    '[Kr]': '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶',
    '[Xe]': '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶',
    '[Rn]': '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶'
  };

  for (const [core, expansion] of Object.entries(coreMap)) {
    if (config.startsWith(core)) {
      return config.replace(core, expansion);
    }
  }
  return config;
}

/* ==========================================================================
   3. INITIALIZATION & GRID RENDER
   ========================================================================== */
const gridContainer = document.getElementById('periodicGrid');
let selectedForCompare = [];
let currentInspectedElement = null;

function initTable() {
  gridContainer.innerHTML = '';

  rawElements.forEach(el => {
    const card = document.createElement('div');
    card.className = `element-card cat-${el.cat}`;
    card.style.gridRow = el.period;
    card.style.gridColumn = el.col;
    card.setAttribute('data-num', el.num);
    card.setAttribute('data-cat', el.cat);

    card.innerHTML = `
      <div class="card-top">
        <span>${el.num}</span>
      </div>
      <div class="symbol">${el.sym}</div>
      <div class="name">${el.name}</div>
      <div class="category-indicator"></div>
    `;

    setupCardEvents(card, el);
    gridContainer.appendChild(card);
  });

  // Placeholder cards
  const lanPlaceholder = document.createElement('div');
  lanPlaceholder.className = 'element-card placeholder-card';
  lanPlaceholder.style.gridRow = 6;
  lanPlaceholder.style.gridColumn = 3;
  lanPlaceholder.innerHTML = `<div class="placeholder-range">57 - 71</div><div class="placeholder-label">Lanthanides</div>`;
  gridContainer.appendChild(lanPlaceholder);

  const actPlaceholder = document.createElement('div');
  actPlaceholder.className = 'element-card placeholder-card';
  actPlaceholder.style.gridRow = 7;
  actPlaceholder.style.gridColumn = 3;
  actPlaceholder.innerHTML = `<div class="placeholder-range">89 - 103</div><div class="placeholder-label">Actinides</div>`;
  gridContainer.appendChild(actPlaceholder);

  const gapRow = document.createElement('div');
  gapRow.className = 'grid-gap-row';
  gridContainer.appendChild(gapRow);
}

function setupCardEvents(card, element) {
  const startHold = () => card.classList.add('holding');
  const endHold = () => card.classList.remove('holding');

  card.addEventListener('mousedown', startHold);
  card.addEventListener('mouseup', endHold);
  card.addEventListener('mouseleave', endHold);
  card.addEventListener('touchstart', startHold, { passive: true });
  card.addEventListener('touchend', endHold);

  // Updated: Only update sidebar when clicked (hovering will NOT trigger changes)
  card.addEventListener('click', () => updateInfoSidebar(element));
}

/* ==========================================================================
   4. DEDICATED SIDEBAR PANEL & LIVE CANVAS ATOM ANIMATION
   ========================================================================== */
let atomAnimFrameId = null;

function updateInfoSidebar(el) {
  currentInspectedElement = el;

  document.getElementById('sidebarPlaceholder').style.display = 'none';
  const content = document.getElementById('sidebarContent');
  content.style.display = 'block';

  document.getElementById('infoNum').innerText = `#${el.num}`;
  document.getElementById('infoSymbol').innerText = el.sym;
  document.getElementById('infoName').innerText = el.name;
  document.getElementById('infoCategory').innerText = el.cat;
  
  document.getElementById('infoSymbolBox').className = `info-symbol-box cat-${el.cat}`;
  document.getElementById('infoCategory').className = `info-category cat-${el.cat}`;

  document.getElementById('valNum').innerText = el.num;
  document.getElementById('valMass').innerText = `${el.mass} u`;
  document.getElementById('valMelting').innerText = el.mp === 'N/A' ? 'N/A' : `${el.mp} K`;
  document.getElementById('valBoiling').innerText = el.bp === 'N/A' ? 'N/A' : `${el.bp} K`;
  
  if (document.getElementById('valConfig')) {
    document.getElementById('valConfig').innerText = el.config;
  }
  if (document.getElementById('valFullConfig')) {
    document.getElementById('valFullConfig').innerText = getExpandedConfig(el.config);
  }

  document.getElementById('valFact').innerText = el.fact;

  updateCompareButtonState();
  startLiveAtomSimulation(el.num, el.sym);
}

/* LIVE ATOM MODEL ANIMATION ENGINE (HTML5 Canvas with Dynamic Mobile Resizing) */
function startLiveAtomSimulation(num, symbol) {
  const container = document.getElementById('atomSvgContainer');
  if (!container) return;

  if (atomAnimFrameId) {
    cancelAnimationFrame(atomAnimFrameId);
  }

  // Calculate dynamic canvas diameter based on container width
  const containerWidth = container.clientWidth || 220;
  const canvasSize = Math.min(containerWidth, 220);

  container.innerHTML = `<canvas id="atomCanvas" width="${canvasSize}" height="${canvasSize}"></canvas>`;
  const canvas = document.getElementById('atomCanvas');
  const ctx = canvas.getContext('2d');

  const shellCapacities = [2, 8, 18, 32, 32, 18, 8];
  let remaining = num;
  const shells = [];
  for (let cap of shellCapacities) {
    if (remaining <= 0) break;
    const count = Math.min(remaining, cap);
    shells.push(count);
    remaining -= count;
  }

  const shellColors = [
    '#ff2a85',
    '#00f3ff',
    '#ffbe0b',
    '#3a86ff',
    '#8338ec',
    '#fb5607',
    '#00f5d4'
  ];

  let rotationAngle = 0;

  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Scale radii proportionally to canvas dimensions
    const baseScale = canvas.width / 220;
    const nucleusRadius = 18 * baseScale;

    // Glowing Radial Gradient Nucleus
    const nucleusGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, nucleusRadius);
    nucleusGrad.addColorStop(0, '#0284c7');
    nucleusGrad.addColorStop(0.7, '#0369a1');
    nucleusGrad.addColorStop(1, '#0f172a');

    ctx.beginPath();
    ctx.arc(cx, cy, nucleusRadius, 0, Math.PI * 2);
    ctx.fillStyle = nucleusGrad;
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 5 * baseScale;
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.beginPath();
    ctx.arc(cx, cy, nucleusRadius, 0, Math.PI * 2);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Nucleus Symbol
    ctx.fillStyle = '#ffffff';
    ctx.font = `bold ${Math.round(12 * baseScale)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
    ctx.shadowBlur = 3;
    ctx.fillText(symbol, cx, cy);
    ctx.shadowBlur = 0;

    // Orbits and Electrons
    const minRadius = 30 * baseScale;
    const maxRadius = 90 * baseScale;
    const step = shells.length > 1 ? (maxRadius - minRadius) / (shells.length - 1) : 0;

    shells.forEach((electronCount, sIdx) => {
      const radius = shells.length === 1 ? 55 * baseScale : minRadius + (sIdx * step);
      const color = shellColors[sIdx % shellColors.length];

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.35;
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1.0;

      const speed = (sIdx % 2 === 0 ? 1 : -1) * (0.015 + (0.003 * (sIdx + 1)));
      const currentAngle = rotationAngle * speed;

      for (let i = 0; i < electronCount; i++) {
        const angle = currentAngle + (2 * Math.PI / electronCount) * i;
        const ex = cx + radius * Math.cos(angle);
        const ey = cy + radius * Math.sin(angle);

        ctx.beginPath();
        ctx.arc(ex, ey, 4 * baseScale, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 6 * baseScale;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(ex, ey, 1.5 * baseScale, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      }
    });

    rotationAngle += 1;
    atomAnimFrameId = requestAnimationFrame(drawFrame);
  }

  drawFrame();
}

function updateCompareButtonState() {
  const btn = document.getElementById('btnAddToCompare');
  if (!btn || !currentInspectedElement) return;

  const isAlreadyIn = selectedForCompare.some(item => item.num === currentInspectedElement.num);
  if (isAlreadyIn) {
    btn.innerText = "➖ Remove from Compare";
    btn.classList.add('in-compare');
  } else {
    btn.innerText = "➕ Add to Compare";
    btn.classList.remove('in-compare');
  }
}

function toggleCurrentElementCompare() {
  if (!currentInspectedElement) return;

  const existingIdx = selectedForCompare.findIndex(item => item.num === currentInspectedElement.num);
  const cardEl = document.querySelector(`.element-card[data-num="${currentInspectedElement.num}"]`);

  if (existingIdx >= 0) {
    selectedForCompare.splice(existingIdx, 1);
    if (cardEl) cardEl.classList.remove('selected-compare');
  } else {
    selectedForCompare.push(currentInspectedElement);
    if (cardEl) cardEl.classList.add('selected-compare');
  }

  document.getElementById('compareCount').innerText = selectedForCompare.length;
  updateCompareButtonState();
  updateCompareUI();
}

/* ==========================================================================
   5. CUSTOM DROPDOWNS & CATEGORY FILTER
   ========================================================================== */
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const isOpen = dropdown.classList.contains('open');

  document.querySelectorAll('.custom-dropdown').forEach(d => d.classList.remove('open'));

  if (!isOpen) {
    dropdown.classList.add('open');
  }
}

window.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-dropdown')) {
    document.querySelectorAll('.custom-dropdown').forEach(d => d.classList.remove('open'));
  }
});

function selectTheme(themeName, labelText) {
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('periodic_table_theme', themeName);
  document.getElementById('currentThemeLabel').innerText = labelText;
  document.getElementById('themeDropdown').classList.remove('open');
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem('periodic_table_theme') || 'dark';
  const labels = {
    'dark': 'Dark Theme',
    'light': 'Light Theme',
    'high-contrast': 'High-Contrast',
    'vibrant': 'Vibrant Theme',
    'glass': 'Glass-Morphed',
    'clay': 'Clay-Morphed',
    'neon': 'Neon Cyberpunk'
  };
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.getElementById('currentThemeLabel').innerText = labels[savedTheme] || 'Dark Theme';
}

function filterCategory(cat, labelText) {
  document.getElementById('currentCategoryLabel').innerText = labelText;
  document.getElementById('categoryDropdown').classList.remove('open');

  const cards = document.querySelectorAll('.element-card:not(.placeholder-card)');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-cat');
    if (cat === 'all' || cardCat === cat) {
      card.classList.remove('dimmed');
    } else {
      card.classList.add('dimmed');
    }
  });
}

/* ==========================================================================
   6. VIEW SWITCHER
   ========================================================================== */
function switchView(view) {
  document.getElementById('tableView').style.display = view === 'table' ? 'flex' : 'none';
  document.getElementById('quizPanel').classList.toggle('active-panel', view === 'quiz');
  document.getElementById('comparePanel').classList.toggle('active-panel', view === 'compare');

  document.getElementById('btnTable').classList.toggle('active', view === 'table');
  document.getElementById('btnQuiz').classList.toggle('active', view === 'quiz');
  document.getElementById('btnCompare').classList.toggle('active', view === 'compare');

  if (view === 'quiz') startQuizQuestion();
}

/* ==========================================================================
   7. MULTI-ELEMENT COMPARISON FEATURE
   ========================================================================== */
function updateCompareUI() {
  const grid = document.getElementById('compareGrid');
  grid.innerHTML = '';

  if (selectedForCompare.length === 0) {
    grid.innerHTML = `<p style="text-align:center; grid-column: 1 / -1; color:var(--text-muted); padding: 40px 0;">No elements selected for comparison. Click "➕ Add to Compare" in the sidebar.</p>`;
    return;
  }

  selectedForCompare.forEach(el => {
    const fullConfig = getExpandedConfig(el.config);
    const card = document.createElement('div');
    card.className = `compare-card cat-${el.cat}`;
    card.innerHTML = `
      <button class="remove-compare-btn" onclick="removeFromCompare(${el.num})">✕</button>
      <h3>
        <span>${el.name} (${el.sym})</span>
        <span>#${el.num}</span>
      </h3>
      <div class="compare-row"><span>Atomic Mass:</span><strong>${el.mass} u</strong></div>
      <div class="compare-row"><span>Category:</span><strong style="text-transform:capitalize">${el.cat}</strong></div>
      <div class="compare-row"><span>Melting Point:</span><strong>${el.mp} K</strong></div>
      <div class="compare-row"><span>Boiling Point:</span><strong>${el.bp} K</strong></div>
      <div class="compare-row"><span>Short Config:</span><strong>${el.config}</strong></div>
      <div class="compare-row"><span>Expanded Config:</span><strong>${fullConfig}</strong></div>
      <div class="compare-fact">💡 <strong>Fact:</strong> ${el.fact}</div>
    `;
    grid.appendChild(card);
  });
}

function removeFromCompare(num) {
  const idx = selectedForCompare.findIndex(item => item.num === num);
  if (idx >= 0) {
    selectedForCompare.splice(idx, 1);
    const cardEl = document.querySelector(`.element-card[data-num="${num}"]`);
    if (cardEl) cardEl.classList.remove('selected-compare');
  }

  document.getElementById('compareCount').innerText = selectedForCompare.length;
  updateCompareButtonState();
  updateCompareUI();
}

function clearComparison() {
  selectedForCompare = [];
  document.querySelectorAll('.element-card.selected-compare').forEach(c => c.classList.remove('selected-compare'));
  document.getElementById('compareCount').innerText = '0';
  updateCompareButtonState();
  updateCompareUI();
}

/* ==========================================================================
   8. QUIZ MODE MODULE
   ========================================================================== */
let quizScore = 0;
let quizTotal = 0;

function startQuizQuestion() {
  const targetElement = rawElements[Math.floor(Math.random() * rawElements.length)];
  const questionTypes = ['symbol', 'number', 'category'];
  const qType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

  let questionText = "";
  let correctAnswer = "";
  let options = [];

  if (qType === 'symbol') {
    questionText = `What is the chemical symbol for <strong>${targetElement.name}</strong>?`;
    correctAnswer = targetElement.sym;
    options = generateOptions('sym', correctAnswer);
  } else if (qType === 'number') {
    questionText = `What is the atomic number of <strong>${targetElement.name} (${targetElement.sym})</strong>?`;
    correctAnswer = targetElement.num.toString();
    options = generateOptions('num', targetElement.num).map(String);
  } else {
    questionText = `Which category does <strong>${targetElement.name} (${targetElement.sym})</strong> belong to?`;
    correctAnswer = targetElement.cat;
    options = ['alkali', 'alkaline', 'transition', 'post-transition', 'metalloid', 'nonmetal', 'noble', 'lanthanide', 'actinide'];
    options = shuffleArray(options).slice(0, 4);
    if (!options.includes(correctAnswer)) options[0] = correctAnswer;
    options = shuffleArray(options);
  }

  document.getElementById('quizQuestion').innerHTML = questionText;
  const optsContainer = document.getElementById('quizOptions');
  optsContainer.innerHTML = '';

  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-btn';
    btn.style.textTransform = qType === 'category' ? 'capitalize' : 'none';
    btn.innerText = opt;
    btn.onclick = () => handleQuizAnswer(btn, opt, correctAnswer);
    optsContainer.appendChild(btn);
  });
}

function generateOptions(key, correctVal) {
  const set = new Set([correctVal]);
  while (set.size < 4) {
    const randEl = rawElements[Math.floor(Math.random() * rawElements.length)];
    set.add(randEl[key]);
  }
  return shuffleArray(Array.from(set));
}

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function handleQuizAnswer(selectedBtn, chosen, correct) {
  const allBtns = document.querySelectorAll('.quiz-btn');
  allBtns.forEach(b => b.disabled = true);

  quizTotal++;
  if (chosen.toString() === correct.toString()) {
    quizScore++;
    selectedBtn.classList.add('correct');
  } else {
    selectedBtn.classList.add('incorrect');
    allBtns.forEach(b => {
      if (b.innerText.toLowerCase() === correct.toString().toLowerCase()) {
        b.classList.add('correct');
      }
    });
  }

  document.getElementById('quizScore').innerText = quizScore;
  document.getElementById('quizTotal').innerText = quizTotal;

  setTimeout(() => startQuizQuestion(), 1500);
}

/* Initialize Application */
window.addEventListener('DOMContentLoaded', () => {
  loadSavedTheme();
  initTable();
});