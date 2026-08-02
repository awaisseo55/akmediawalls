import { STOCK } from "@/lib/images";
import type { GalleryItem } from "@/lib/types";

const CITIES = [
  "Manchester",
  "Preston",
  "Bolton",
  "Warrington",
  "Stockport",
  "Wigan",
  "Oldham",
  "Rochdale",
  "Salford",
  "Bury",
  "Tameside",
  "Liverpool",
];

export const GALLERY: GalleryItem[] = [
  { id: "g01", title: "Slatted oak fireplace media wall", style: "fireplace", location: "Manchester", image: STOCK.fireplaceSlattedInset, description: "A vertical oak slat media wall with an inset electric fire, built into a Chorlton semi's front room.", timeline: "3 days" },
  { id: "g02", title: "Marble-effect fireplace wall with built-ins", style: "fireplace", location: "Bramhall", image: STOCK.fireplaceMarbleBuiltIn, description: "Large-format marble-effect panels with flanking display shelving either side of the fire and TV.", timeline: "4 days" },
  { id: "g03", title: "Painted media wall with recessed fire", style: "fireplace", location: "Didsbury", image: STOCK.fireplaceGreyWallTv, description: "A soft grey painted MDF media wall with a low-profile recessed electric fire and floating console.", timeline: "3 days" },
  { id: "g04", title: "Fireplace media wall, open-plan extension", style: "fireplace", location: "Worsley", image: STOCK.fireplaceSlattedInset, description: "Full-height fireplace media wall built as the anchor point of a large open-plan kitchen-diner extension.", timeline: "4 days" },
  { id: "g05", title: "Stone terrace fireplace restoration", style: "fireplace", location: "Bolton", image: STOCK.fireplaceMarbleBuiltIn, description: "Original stone chimney breast rebuilt into a media wall while preserving the recess proportions.", timeline: "3 days" },
  { id: "g06", title: "Slatted walnut media wall with floating shelf", style: "slatted-wood", location: "Manchester", image: STOCK.slattedWoodTvFloatingShelf, description: "Dark walnut slats with a floating oak shelf beneath the TV, cables fully concealed.", timeline: "2 days" },
  { id: "g07", title: "Oak slat wall with LED cove lighting", style: "slatted-wood", location: "Liverpool", image: STOCK.slattedWoodLedCove, description: "Warm oak slatted panelling with a recessed LED cove above the TV for evening ambience.", timeline: "3 days" },
  { id: "g08", title: "Saddleworth cottage slat wall", style: "slatted-wood", location: "Oldham", image: STOCK.slattedWoodTvFloatingShelf, description: "Natural oak slats chosen to complement exposed beams in a Saddleworth stone cottage.", timeline: "3 days" },
  { id: "g09", title: "Slatted wood detail, contract grade", style: "slatted-wood", location: "Manchester", image: STOCK.slattedWoodTexture, description: "Close detail of contract-grade oak slats used in a commercial reception fit-out.", timeline: "2 days" },
  { id: "g10", title: "Open-plan wood feature wall", style: "slatted-wood", location: "Salford", image: STOCK.openPlanWoodFeatureWall, description: "A warm timber feature wall dividing a kitchen and living space in an open-plan extension.", timeline: "3 days" },
  { id: "g11", title: "Flush TV mount, wood console", style: "tv-mount", location: "Wigan", image: STOCK.tvMountWoodConsole, description: "A fixed-bracket TV mount above a mid-century console, fully concealed cabling to the skirting.", timeline: "Half day" },
  { id: "g12", title: "TV mount with hidden soundbar wiring", style: "tv-mount", location: "Stockport", image: STOCK.tvMountWhiteConsole, description: "Wall-mounted TV and soundbar with an in-wall power kit, no visible cables at all.", timeline: "Half day" },
  { id: "g13", title: "Full-motion TV mount, kitchen-diner", style: "tv-mount", location: "Warrington", image: STOCK.tvMountWoodConsole, description: "A full-motion bracket fitted for a kitchen-diner where seating position changes throughout the day.", timeline: "Half day" },
  { id: "g14", title: "Flush TV mount, new-build lounge", style: "tv-mount", location: "Preston", image: STOCK.heroWoodPanelMediaWall, description: "Clean, minimal TV mounting with socket relocation behind the screen in a new-build home.", timeline: "1 day" },
  { id: "g15", title: "Wood panel media wall with floating console", style: "tv-mount", location: "Manchester", image: STOCK.heroWoodPanelMediaWall, description: "A walnut-veneer media wall with an angled TV mount and integrated floating console.", timeline: "3 days" },
  { id: "g16", title: "Acoustic slat and fabric feature wall", style: "acoustic", location: "Manchester", image: null, description: "A mixed acoustic wall combining oak slats and bouclé fabric panels either side of the TV, built to reduce echo in an open-plan lounge.", timeline: "3 days" },
  { id: "g17", title: "Fabric panel acoustic wall, bedroom lounge", style: "acoustic", location: "Bury", image: null, description: "Wool-mix fabric acoustic panels fitted around a wall-mounted TV in a snug conversion.", timeline: "2 days" },
  { id: "g18", title: "Acoustic slat wall with LED lighting", style: "acoustic", location: "Bolton", image: null, description: "Felt-backed oak slats with warm LED lighting, fitted to calm a hard-floored family living room.", timeline: "3 days" },
  { id: "g19", title: "Acoustic media wall, apartment living room", style: "acoustic", location: "Salford", image: null, description: "A compact acoustic slat wall designed for a Salford Quays apartment with high ambient noise.", timeline: "2 days" },
  { id: "g20", title: "Commercial reception feature wall", style: "commercial", location: "Manchester", image: STOCK.slattedWoodLedCove, description: "A branded slatted wood reception wall with backlit logo detail for a Manchester office fit-out.", timeline: "5 days" },
  { id: "g21", title: "Salon feature wall with TV signage", style: "commercial", location: "Stockport", image: STOCK.slattedWoodTvFloatingShelf, description: "A slatted wood feature wall with an integrated screen for promotional signage in a Stockport salon.", timeline: "4 days" },
  { id: "g22", title: "Hospitality media wall, bar backdrop", style: "commercial", location: "Liverpool", image: null, description: "A statement media wall built as a backdrop behind a bar area in a Liverpool hospitality venue.", timeline: "6 days" },
  { id: "g23", title: "Office breakout media wall", style: "commercial", location: "Salford", image: STOCK.tvMountWhiteConsole, description: "A meeting room media wall with a flush-mounted presentation screen and concealed AV wiring.", timeline: "3 days" },
  { id: "g24", title: "Fireplace media wall, Victorian terrace", style: "fireplace", location: "Stockport", image: STOCK.fireplaceGreyWallTv, description: "A painted media wall built into a Heaton Moor Victorian terrace, matched to the existing coving.", timeline: "3 days" },
  { id: "g25", title: "Slatted wood wall, new-build show home", style: "slatted-wood", location: "Warrington", image: STOCK.slattedWoodTvFloatingShelf, description: "A show-home standard slatted wood media wall built for a new-build lounge-diner in Chapelford.", timeline: "3 days" },
  { id: "g26", title: "TV mount, Georgian terrace", style: "tv-mount", location: "Liverpool", image: STOCK.tvMountWoodConsole, description: "A discreet TV mount and chased cable run in a Sefton Park Georgian terrace living room.", timeline: "1 day" },
  { id: "g27", title: "Fireplace media wall with stone cladding", style: "fireplace", location: "Rochdale", image: STOCK.fireplaceMarbleBuiltIn, description: "A split-face stone-clad media wall built around an inset fire in a Bamford detached home.", timeline: "4 days" },
  { id: "g28", title: "Acoustic wall, home cinema room", style: "acoustic", location: "Wigan", image: null, description: "A full acoustic slat wall built for a dedicated home cinema room to reduce reflections.", timeline: "4 days" },
];

export function getGalleryByStyle(style?: string) {
  if (!style || style === "all") return GALLERY;
  return GALLERY.filter((g) => g.style === style);
}

export function getGalleryByLocation(location?: string) {
  if (!location || location === "all") return GALLERY;
  return GALLERY.filter((g) => g.location === location);
}

export const GALLERY_LOCATIONS = CITIES;
