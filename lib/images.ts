/**
 * Verified Unsplash photos actually showing media walls, TV walls, fireplace
 * walls, or slatted wood panelling (checked visually before use). Hotlinked
 * per the Unsplash License. Replace with real Media Walls North project photos
 * via the admin gallery uploader as they become available.
 */

function unsplash(id: string, w = 1600, q = 75) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;
}

export const STOCK = {
  heroWoodPanelMediaWall: unsplash("1738168259543-d0c58e2b91ed"),
  fireplaceSlattedInset: unsplash("1701422522371-d2cc964a708e"),
  fireplaceMarbleBuiltIn: unsplash("1598928506311-c55ded91a20c"),
  fireplaceGreyWallTv: unsplash("1616137466211-f939a420be84"),
  slattedWoodTvFloatingShelf: unsplash("1696774277032-5ada7eea439c"),
  slattedWoodLedCove: unsplash("1782457696919-08e1aa4f7427"),
  slattedWoodTexture: unsplash("1675528030748-d463ab87e8d5"),
  tvMountWoodConsole: unsplash("1521607630287-ee2e81ad3ced"),
  tvMountWhiteConsole: unsplash("1586023492125-27b2c045efd7"),
  openPlanWoodFeatureWall: unsplash("1600607687939-ce8a6c25118c"),
} as const;

export type StockImageKey = keyof typeof STOCK;

// NOTE: no verified real photo exists yet for a fabric/acoustic panel media
// wall install or a dedicated commercial fit-out. Those gallery/service
// entries intentionally use the CSS "coming soon" placeholder (see
// components/shared/portfolio-placeholder.tsx) rather than a mismatched
// stock photo, per the site's image policy.
