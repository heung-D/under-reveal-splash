// Star configuration data for BrandMessageSection background
export interface Star {
  id: string;
  top: string;
  left: string;
  size: "small" | "large";
  opacity: number;
}

export const stars: Star[] = [
  { id: "star-1", top: "10%", left: "15%", size: "large", opacity: 0.4 },
  { id: "star-2", top: "12%", left: "25%", size: "small", opacity: 0.3 },
  { id: "star-3", top: "15%", left: "70%", size: "large", opacity: 0.35 },
  { id: "star-4", top: "18%", left: "82%", size: "small", opacity: 0.25 },
  { id: "star-5", top: "22%", left: "45%", size: "large", opacity: 0.4 },
  { id: "star-6", top: "25%", left: "88%", size: "small", opacity: 0.3 },
  { id: "star-7", top: "28%", left: "8%", size: "large", opacity: 0.35 },
  { id: "star-8", top: "32%", left: "65%", size: "small", opacity: 0.25 },
  { id: "star-9", top: "55%", left: "20%", size: "large", opacity: 0.4 },
  { id: "star-10", top: "60%", left: "75%", size: "small", opacity: 0.3 },
  { id: "star-11", top: "65%", left: "40%", size: "large", opacity: 0.35 },
  { id: "star-12", top: "70%", left: "85%", size: "small", opacity: 0.25 },
  { id: "star-13", top: "75%", left: "12%", size: "large", opacity: 0.4 },
  { id: "star-14", top: "80%", left: "55%", size: "small", opacity: 0.3 },
];

// Star size mapping
export const starSizeClasses = {
  small: "w-0.5 h-0.5",
  large: "w-1 h-1",
} as const;
