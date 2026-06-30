// ─── Category Items Data ───
// 6 categories × 20 items = 120 items
// These are for the Browse by Room category pages
// No prices — only Enquire button

function makeItems(category, slug, items) {
  return items.map((item, i) => ({
    id: `${slug}-${String(i + 1).padStart(2, "0")}`,
    name: item.name,
    category,
    categorySlug: slug,
    description: item.description,
    image: item.image,
    material: item.material,
  }));
}

export const categoryItems = {
  "living-room": makeItems("Living Room", "living-room", [
    { name: "Velvet 3-Seater Sofa", description: "Plush velvet sofa with deep cushioning and wooden legs. Perfect centerpiece for any living room.", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600", material: "Velvet · Teak Wood" },
    { name: "L-Shape Corner Sofa", description: "Spacious L-shaped sofa in premium fabric with reversible chaise. Ideal for family gatherings.", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=600", material: "Linen Blend · Pine Frame" },
    { name: "Leather Recliner Chair", description: "Single-seater leather recliner with 3-position recline mechanism. Built-in cup holder.", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=600", material: "Bonded Leather · Steel Frame" },
    { name: "Marble Coffee Table", description: "Italian marble-top coffee table with brushed gold legs. A statement piece for modern homes.", image: "https://images.unsplash.com/photo-1565191999001-bae7a87b3bfb?auto=format&fit=crop&q=80&w=600", material: "Marble · Brass" },
    { name: "Wooden TV Unit", description: "Wall-mounted TV unit with open shelving and concealed storage. Fits TVs up to 65 inches.", image: "https://images.unsplash.com/photo-1585412727339-54e4bae3cdd0?auto=format&fit=crop&q=80&w=600", material: "Engineered Wood · Walnut" },
    { name: "Accent Armchair", description: "Scandinavian-style accent chair in bouclé fabric. Compact design for reading nooks.", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=600", material: "Bouclé Fabric · Oak" },
    { name: "Glass Side Table", description: "Tempered glass side table with chrome legs. Minimalist design that complements any sofa.", image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&q=80&w=600", material: "Tempered Glass · Chrome" },
    { name: "Console Table", description: "Sleek console table with drawer storage. Perfect for entryways and narrow hallways.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600", material: "Rosewood · Marble" },
    { name: "Floor Lamp with Shelf", description: "Contemporary floor lamp with integrated wooden shelf. Warm ambient lighting for cozy evenings.", image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?auto=format&fit=crop&q=80&w=600", material: "Metal · Walnut Shelf" },
    { name: "Ottoman Pouf", description: "Round knitted ottoman pouf — doubles as extra seating or a footrest. Filled with EPS beans.", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600", material: "Cotton Knit · EPS Fill" },
    { name: "Bookshelf Room Divider", description: "Open bookshelf that works as a room divider. 5 tiers with staggered shelves.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "Sheesham Wood · Iron" },
    { name: "Nesting Tables Set", description: "Set of 3 nesting tables in graduated sizes. Stackable design saves space when not in use.", image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&q=80&w=600", material: "MDF · Gold Frame" },
    { name: "Window Bench", description: "Cushioned window bench with under-seat storage. Built with solid wood frame.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600", material: "Pine Wood · Linen" },
    { name: "Wall-Mounted Shelf Unit", description: "Floating wall shelves in a geometric pattern. Perfect for displaying decor and books.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "MDF · Metal Brackets" },
    { name: "Modular Sofa Set", description: "Configurable modular sofa — arrange sections to fit your space. Washable fabric covers.", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=600", material: "Polyester · Foam Fill" },
    { name: "Magazine Rack", description: "Minimalist magazine rack in powder-coated metal. Wall-mountable or freestanding.", image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?auto=format&fit=crop&q=80&w=600", material: "Powder-Coated Steel" },
    { name: "Rustic Coffee Table", description: "Reclaimed wood coffee table with raw edge and metal hairpin legs. Each piece is unique.", image: "https://images.unsplash.com/photo-1565191999001-bae7a87b3bfb?auto=format&fit=crop&q=80&w=600", material: "Reclaimed Wood · Iron" },
    { name: "Chaise Lounge", description: "Luxurious chaise lounge in tufted fabric. Ideal for bedrooms, living rooms, or reading areas.", image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=600", material: "Velvet · Teak Frame" },
    { name: "Corner Shelf Unit", description: "5-tier corner shelf unit that maximizes unused corner space. Easy assembly.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "Bamboo · Steel" },
    { name: "Lounge Chair with Footrest", description: "Mid-century modern lounge chair with matching footrest. Premium PU leather upholstery.", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=600", material: "PU Leather · Plywood" },
  ]),

  "bedroom": makeItems("Bedroom", "bedroom", [
    { name: "Platform King Bed", description: "Low-profile platform bed in solid teak with slatted headboard. No box spring needed.", image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=600", material: "Solid Teak · Linen" },
    { name: "Upholstered Queen Bed", description: "Queen bed with a tall, padded headboard in premium fabric. Channel-tufted design.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=600", material: "Velvet · Pine Frame" },
    { name: "Sliding Door Wardrobe", description: "Space-saving wardrobe with smooth sliding doors and full-length mirror. Modular interior.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600", material: "Engineered Wood · Glass" },
    { name: "Bedside Table Pair", description: "Set of 2 matching bedside tables with two drawers each. Soft-close mechanism.", image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80&w=600", material: "Mango Wood · Brass" },
    { name: "Dressing Table with Mirror", description: "Elegant dressing table with tri-fold mirror and velvet-lined drawers. LED light strip.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600", material: "MDF · Glass Mirror" },
    { name: "Storage Ottoman Bench", description: "Bedroom ottoman with hidden storage. Doubles as an end-of-bed bench.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600", material: "Linen · Pine Wood" },
    { name: "Wall-Mounted Bedside Shelf", description: "Floating bedside shelf with small drawer. Space-saving alternative to a nightstand.", image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80&w=600", material: "Walnut Veneer · MDF" },
    { name: "Kids Bunk Bed", description: "Sturdy bunk bed with ladder and guardrails. Detaches into two single beds.", image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=600", material: "Solid Pine · Non-Toxic Paint" },
    { name: "Chest of Drawers", description: "5-drawer chest in walnut finish. Anti-tip wall anchor included for safety.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600", material: "Engineered Wood · Metal Handles" },
    { name: "Canopy Bed Frame", description: "Romantic canopy bed frame in matte black metal. Fits standard king-size mattress.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=600", material: "Wrought Iron" },
    { name: "Wardrobe with Loft", description: "Full-height wardrobe with loft storage compartment. Adjustable interior layout.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600", material: "Laminated MDF · Metal Hinges" },
    { name: "Bedroom Armchair", description: "Compact armchair for the bedroom corner. Upholstered in soft cotton-linen blend.", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=600", material: "Cotton-Linen · Beech Wood" },
    { name: "Blanket Ladder", description: "Decorative blanket ladder in solid oak. Display your throws and quilts in style.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "Solid Oak" },
    { name: "Shoe Rack for Bedroom", description: "Slim 5-tier shoe rack that fits behind the door. Holds 15 pairs.", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600", material: "Bamboo · Steel" },
    { name: "Full-Length Mirror", description: "Arched full-length floor mirror with gold metal frame. Leans against the wall.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600", material: "Metal Frame · Glass" },
    { name: "Floating Headboard", description: "Wall-mounted upholstered headboard in charcoal grey. Easy to install.", image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=600", material: "Foam · Linen Cover" },
    { name: "Daybed with Trundle", description: "Multi-functional daybed with a pull-out trundle bed. Great for guest rooms.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=600", material: "Pine Wood · Steel Slats" },
    { name: "Jewelry Armoire", description: "Standing jewelry armoire with lock. Velvet-lined compartments and built-in mirror.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600", material: "MDF · Velvet Lining" },
    { name: "Reading Nook Chair", description: "Cozy wingback reading chair in herringbone fabric. High back for privacy and comfort.", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=600", material: "Herringbone Fabric · Teak" },
    { name: "Bed Bench", description: "Tufted bench in neutral linen. Sits perfectly at the foot of a queen or king bed.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600", material: "Linen · Rubber Wood" },
  ]),

  "dining": makeItems("Dining", "dining", [
    { name: "6-Seater Dining Table", description: "Classic rectangular dining table in solid mango wood. Seats 6 comfortably.", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=600", material: "Mango Wood" },
    { name: "Round Dining Table", description: "4-seater round dining table with pedestal base. Space-efficient for small dining areas.", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=600", material: "Marble Top · Metal Base" },
    { name: "Dining Chairs Set of 6", description: "Set of 6 upholstered dining chairs. Comfortable padding with stain-resistant fabric.", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&q=80&w=600", material: "Fabric · Solid Wood" },
    { name: "Extendable Dining Table", description: "Butterfly-leaf extension table — seats 4 to 8. Perfect for hosting dinner parties.", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=600", material: "Oak Veneer · Steel" },
    { name: "Bar Cabinet", description: "Art deco bar cabinet with wine rack, glass holder, and mirrored interior. Showpiece.", image: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&q=80&w=600", material: "Rosewood · Mirror" },
    { name: "Sideboard Buffet", description: "Large sideboard with 3 drawers and 2 cabinets. Ideal for storing crockery and linen.", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600", material: "Acacia Wood · Cane" },
    { name: "Bar Stools Set of 2", description: "Counter-height bar stools with footrest. Swivel seats in PU leather.", image: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&q=80&w=600", material: "PU Leather · Chrome" },
    { name: "Bench Dining Seat", description: "Wooden dining bench for one side of the table. Seats 3 people.", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&q=80&w=600", material: "Sheesham Wood" },
    { name: "Crockery Unit", description: "Display-cum-storage crockery unit with glass doors. LED spotlight for showcasing china.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "MDF · Tempered Glass" },
    { name: "Dining Table Runner Set", description: "Handwoven dining table runner with matching placemats. Set of 6+1.", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=600", material: "Jute · Cotton" },
    { name: "Folding Dining Table", description: "Wall-mounted folding table — opens when needed, folds flat. Space-saving genius.", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=600", material: "Engineered Wood · Steel" },
    { name: "Dining Arm Chairs (Pair)", description: "Captain's dining chairs with armrests. Cushioned seats in premium upholstery.", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&q=80&w=600", material: "Teak · Velvet" },
    { name: "Wine Rack Tower", description: "Floor-standing wine rack. Holds 24 bottles with a serving tray on top.", image: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&q=80&w=600", material: "Wrought Iron · Pine" },
    { name: "8-Seater Grand Table", description: "Extra-large dining table for big families. Turned wood legs with carved detailing.", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=600", material: "Solid Teak" },
    { name: "Glass Top Dining Set", description: "Modern glass-top dining table with 4 chairs. Tempered glass and chrome frame.", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=600", material: "Tempered Glass · Chrome" },
    { name: "Kitchen Island Cart", description: "Mobile kitchen island with butcher block top, towel bar, and cabinet storage.", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=600", material: "Rubberwood · Steel" },
    { name: "Breakfast Nook Set", description: "Corner bench seating with a small table. Perfect for kitchens and compact dining areas.", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&q=80&w=600", material: "Pine · Linen Cushions" },
    { name: "Serving Trolley", description: "2-tier serving trolley on wheels. Gold-finish metal frame with wooden trays.", image: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&q=80&w=600", material: "Mango Wood · Gold Metal" },
    { name: "Dining Table Lazy Susan", description: "Rotating lazy susan for the center of your dining table. Smooth 360° swivel.", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=600", material: "Marble · Ball Bearings" },
    { name: "Compact 2-Seater Table", description: "Small dining table for couples or studio apartments. Drop-leaf design.", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=600", material: "Rubber Wood · MDF" },
  ]),

  "office": makeItems("Office", "office", [
    { name: "Executive Desk", description: "Large executive desk with 5 drawers and cable pass-through. Power-coated steel legs.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600", material: "Walnut Veneer · Steel" },
    { name: "Ergonomic Mesh Chair", description: "Full-mesh ergonomic chair with adjustable lumbar, headrest, and 4D armrests.", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600", material: "Mesh · Nylon Base" },
    { name: "Standing Desk Converter", description: "Sit-stand desk converter that sits on your existing desk. Smooth pneumatic lift.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600", material: "MDF · Steel Frame" },
    { name: "Filing Cabinet", description: "3-drawer metal filing cabinet with lock. Fits A4 and legal-size folders.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "Powder-Coated Steel" },
    { name: "Bookshelf with Glass Doors", description: "Office bookshelf with tempered glass doors. 5 adjustable shelves.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "Engineered Wood · Glass" },
    { name: "L-Shape Computer Desk", description: "Corner computer desk with monitor riser and keyboard tray. Maximizes workspace.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600", material: "MDF · Metal Frame" },
    { name: "Meeting Table", description: "Conference table that seats 8. Built-in cable management with power outlet hub.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600", material: "Solid Wood · Steel Legs" },
    { name: "Desk Organizer Set", description: "Wooden desk organizer with compartments for stationery, phone, and tablet.", image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?auto=format&fit=crop&q=80&w=600", material: "Bamboo" },
    { name: "Mobile Pedestal Unit", description: "Under-desk mobile pedestal with 3 drawers and castors. Key lock on top drawer.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "Steel · Laminate Top" },
    { name: "Reception Counter", description: "Curved reception counter with storage shelves behind. Professional front-desk look.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600", material: "Laminated Wood · Acrylic" },
    { name: "Office Visitor Chair", description: "Cantilever visitor chair with cushioned seat. Stackable when not in use.", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600", material: "Fabric · Chrome Frame" },
    { name: "Whiteboard Cabinet", description: "Magnetic whiteboard enclosed in a wooden cabinet. Closes to look like wall art.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "MDF · Magnetic Surface" },
    { name: "Cable Management Tray", description: "Under-desk cable management tray. Keeps wires tidy and off the floor.", image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?auto=format&fit=crop&q=80&w=600", material: "Steel · Mesh" },
    { name: "Monitor Riser Stand", description: "Elevated monitor stand with storage drawer underneath. Improves posture.", image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?auto=format&fit=crop&q=80&w=600", material: "Bamboo · MDF" },
    { name: "Task Lamp", description: "LED task lamp with adjustable arm and color temperature control. USB charging port.", image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?auto=format&fit=crop&q=80&w=600", material: "Aluminium · ABS" },
    { name: "Server Rack Cabinet", description: "Lockable server rack for home office or small business. Ventilated design.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "Cold-Rolled Steel" },
    { name: "Office Partition Screen", description: "Freestanding fabric partition. Reduces noise and creates private workspaces.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600", material: "Fabric · Aluminium Frame" },
    { name: "Printer Stand", description: "2-tier printer stand with wheels. Lower shelf for paper storage.", image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?auto=format&fit=crop&q=80&w=600", material: "MDF · Steel" },
    { name: "Ergonomic Footrest", description: "Adjustable footrest for under-desk comfort. Reduces back strain during long work days.", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600", material: "ABS · Rubber Grip" },
    { name: "Executive Leather Chair", description: "High-back executive chair in genuine leather. Solid wood armrests.", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600", material: "Genuine Leather · Wood" },
  ]),

  "outdoor": makeItems("Outdoor", "outdoor", [
    { name: "Garden Lounge Set", description: "4-piece outdoor lounge set with cushions. Weather-resistant rattan weave.", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=600", material: "PE Rattan · All-Weather" },
    { name: "Patio Dining Set", description: "6-seater patio dining table with chairs. Folds flat for easy storage.", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=600", material: "Teak Wood · Steel" },
    { name: "Hanging Swing Chair", description: "Egg-shaped hanging swing chair with stand. Includes weather-proof cushion.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600", material: "Rattan · Steel Stand" },
    { name: "Garden Bench", description: "Classic park-style garden bench. Seats 3 comfortably. Cast-iron armrests.", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=600", material: "Teak Slats · Cast Iron" },
    { name: "Outdoor Bar Cart", description: "Mobile bar cart for outdoor entertaining. Weather-resistant powder-coated frame.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600", material: "Steel · Acacia Wood" },
    { name: "Sun Lounger Pair", description: "Set of 2 reclining sun loungers with adjustable back. Stackable design.", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=600", material: "Aluminium · Textilene" },
    { name: "Planter Box Bench", description: "Wooden bench with built-in planter boxes on both sides. Grow herbs while you sit.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600", material: "Cedar Wood" },
    { name: "Outdoor Umbrella 9ft", description: "Large patio umbrella with tilt and crank mechanism. UV-protective canopy.", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=600", material: "Polyester · Steel Pole" },
    { name: "Fire Pit Table", description: "Gas fire pit table for outdoor evenings. Includes lava rocks and cover.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600", material: "Steel · Tempered Glass" },
    { name: "Balcony Bistro Set", description: "Compact bistro set — table and 2 chairs. Perfect for small balconies.", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=600", material: "Powder-Coated Metal" },
    { name: "Hammock with Stand", description: "Double hammock with steel frame stand. Supports up to 200 kg.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600", material: "Cotton Canvas · Steel" },
    { name: "Outdoor Storage Box", description: "Lockable outdoor storage box for cushions and tools. Waterproof lid.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600", material: "Resin · Steel Hinges" },
    { name: "Gazebo Frame", description: "Hardtop gazebo with aluminium frame. Includes mosquito netting and curtains.", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=600", material: "Aluminium · Polycarbonate" },
    { name: "Rocking Chair", description: "Classic outdoor rocking chair in solid acacia. Weather-treated and UV-protected.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600", material: "Acacia Wood" },
    { name: "Outdoor Rug 8x10", description: "Flat-weave outdoor rug. Resistant to moisture, stains, and UV fading.", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=600", material: "Polypropylene" },
    { name: "Garden Arbour", description: "Wooden garden arbour with bench seat. Ideal as a garden focal point or entrance.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600", material: "Pine Wood · Steel Bolts" },
    { name: "Outdoor Folding Chairs Set", description: "Set of 4 folding chairs for outdoor events. Lightweight and portable.", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=600", material: "Aluminium · Fabric" },
    { name: "Deck Tiles Pack of 10", description: "Interlocking deck tiles for balconies and patios. Easy DIY installation.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600", material: "Acacia Wood · Plastic Base" },
    { name: "Outdoor Console Table", description: "Narrow outdoor console table for drinks and decor. Rust-proof finish.", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=600", material: "Wrought Iron · Mosaic" },
    { name: "Daybed Canopy Lounge", description: "Luxurious outdoor daybed with retractable canopy. Premium all-weather cushions.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600", material: "Aluminium · Sunbrella" },
  ]),

  "storage": makeItems("Storage", "storage", [
    { name: "Open Bookshelf 5-Tier", description: "Industrial-style 5-tier bookshelf with solid wood shelves and iron frame.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "Sheesham · Iron" },
    { name: "Shoe Cabinet 3-Door", description: "Slim shoe cabinet with 3 flip-down compartments. Holds 18 pairs.", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600", material: "Engineered Wood · Bamboo" },
    { name: "Modular Cube Storage", description: "Stackable cube storage units — arrange them your way. Sold in sets of 4.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "MDF · Fabric Bins" },
    { name: "Tall Wardrobe Cabinet", description: "Freestanding wardrobe with 2 doors and 3 drawers. Full-length mirror inside.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600", material: "Laminated MDF · Mirror" },
    { name: "Kitchen Pantry Cabinet", description: "Tall pantry cabinet with adjustable shelves. Fits between countertop and ceiling.", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=600", material: "MDF · Soft-Close Hinges" },
    { name: "Entryway Hall Tree", description: "Hall tree with coat hooks, mirror, shoe shelf, and bench. All-in-one entryway solution.", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600", material: "Pine Wood · Metal Hooks" },
    { name: "Under-Bed Storage Drawers", description: "Set of 2 rolling under-bed storage drawers. Makes use of dead space.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "MDF · Castors" },
    { name: "Floating Wall Shelves Set", description: "Set of 3 floating shelves in graduated sizes. Invisible mounting hardware.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "Solid Oak" },
    { name: "Media Storage Tower", description: "Tall media tower for CDs, DVDs, games, and books. 12 adjustable shelves.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "Engineered Wood · Glass Door" },
    { name: "Toy Storage Organizer", description: "Kids' toy organizer with fabric bins. Low height for easy child access.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "MDF · Canvas Bins" },
    { name: "Bathroom Storage Cabinet", description: "Wall-mounted bathroom cabinet with mirror door. Moisture-resistant finish.", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600", material: "Waterproof MDF · Mirror" },
    { name: "Closet Organizer System", description: "Modular closet organizer with shelves, drawers, and hanging rods. Customizable.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600", material: "Laminated Wood · Metal" },
    { name: "Garage Storage Rack", description: "Heavy-duty 5-tier garage storage rack. Holds up to 250 kg per shelf.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "Galvanized Steel · MDF" },
    { name: "Spice Rack Pull-Out", description: "Pull-out spice rack for kitchen cabinets. Organizes up to 30 spice jars.", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=600", material: "Chrome Steel" },
    { name: "Corner Cabinet", description: "L-shaped corner cabinet that utilizes dead corner space. Lazy Susan interior.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "MDF · Melamine" },
    { name: "Key Cabinet with Hooks", description: "Wall-mounted key cabinet with 12 hooks and a small mail slot. Rustic charm.", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600", material: "Reclaimed Wood · Iron" },
    { name: "Dresser 6-Drawer", description: "Wide 6-drawer dresser with soft-close runners. Timeless design.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600", material: "Solid Pine · Brass Pulls" },
    { name: "Rolling Storage Cart", description: "3-tier rolling cart for kitchen, bathroom, or home office. Slim profile.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "Powder-Coated Steel" },
    { name: "Ottoman with Storage", description: "Upholstered storage ottoman — lift the lid to reveal spacious interior.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600", material: "Linen · Plywood" },
    { name: "Wall-Mounted Pegboard", description: "Modular pegboard system for tools, accessories, or kitchen utensils.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", material: "Birch Plywood · Steel Pegs" },
  ]),
};

// Get all items as a flat array
export const allCategoryItems = Object.values(categoryItems).flat();

// Get items by slug
export const getItemsByCategory = (slug) => categoryItems[slug] || [];

// Get single item by id
export const getItemById = (id) => allCategoryItems.find((item) => item.id === id);

export default categoryItems;
