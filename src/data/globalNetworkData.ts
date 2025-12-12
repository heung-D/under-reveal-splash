export interface Location {
  id: string;
  name: string;
  x: number; // percentage position on map (0-100)
  y: number; // percentage position on map (0-100)
}

export interface Connection {
  from: string;
  to: string;
}

// Location coordinates are percentages based on the world map image
// x: 0% = left edge (~-170° longitude), 100% = right edge (~170° longitude)
// y: 0% = top edge (~80°N latitude), 100% = bottom edge (~60°S latitude)
export const locations: Location[] = [
  // Americas
  { id: "usa", name: "USA", x: 17, y: 33 },
  { id: "south-america", name: "South America", x: 30, y: 68 },

  // Europe
  { id: "europe", name: "Europe", x: 49, y: 25 },
  { id: "france", name: "France", x: 47, y: 28 },
  { id: "italy", name: "Italy", x: 51, y: 31 },

  // Middle East
  { id: "gcc", name: "GCC", x: 57, y: 38 },

  // Asia
  { id: "india", name: "India", x: 64, y: 42 },
  { id: "thailand", name: "Thailand", x: 71, y: 47 },
  { id: "vietnam", name: "Vietnam", x: 73, y: 44 },
  { id: "cambodia", name: "Cambodia", x: 72, y: 49 },
  { id: "malaysia", name: "Malaysia", x: 72, y: 54 },
  { id: "singapore", name: "Singapore", x: 72, y: 56 },
  { id: "indonesia", name: "Indonesia", x: 74, y: 60 },
  { id: "philippines", name: "Philippines", x: 77, y: 46 },
  { id: "hong-kong", name: "Hong Kong", x: 75, y: 40 },
  { id: "japan", name: "Japan", x: 81, y: 32 },
];

// Network connections between locations
export const connections: Connection[] = [
  // Americas connection
  { from: "usa", to: "south-america" },

  // Europe internal connections
  { from: "europe", to: "france" },
  { from: "france", to: "italy" },

  // Europe to Middle East/Asia
  { from: "italy", to: "gcc" },
  { from: "gcc", to: "india" },

  // Southeast Asia connections
  { from: "india", to: "thailand" },
  { from: "thailand", to: "cambodia" },
  { from: "thailand", to: "vietnam" },
  { from: "thailand", to: "malaysia" },
  { from: "malaysia", to: "singapore" },
  { from: "malaysia", to: "indonesia" },
  { from: "vietnam", to: "philippines" },
  { from: "vietnam", to: "hong-kong" },
  { from: "hong-kong", to: "japan" },

  // Trans-continental connections
  { from: "usa", to: "europe" },
  { from: "usa", to: "japan" },
];

// Helper function to get location by id
export const getLocationById = (id: string): Location | undefined =>
  locations.find((loc) => loc.id === id);
