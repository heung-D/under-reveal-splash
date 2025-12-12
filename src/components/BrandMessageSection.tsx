import { useEffect, useState } from "react";
import { stars, starSizeClasses } from "@/data/brandMessageData";

// ============================================
// Layer 1: Starfield Background
// ============================================
const StarfieldLayer = () => (
  <div className="absolute inset-0 pointer-events-none">
    {stars.map((star) => (
      <div
        key={star.id}
        className={`absolute ${
          starSizeClasses[star.size]
        } bg-white rounded-full`}
        style={{
          top: star.top,
          left: star.left,
          opacity: star.opacity,
        }}
      />
    ))}
  </div>
);

// ============================================
// Layer 2: Shooting Star Animation
// ============================================
const ShootingStarLayer = ({ active }: { active: boolean }) => {
  if (!active) return null;

  return (
    <div className="absolute top-[35%] left-0 w-full h-[2px] pointer-events-none animate-shooting-star">
      <div
        className="h-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 10%, rgba(147,197,253,0.9) 50%, rgba(96,165,250,1) 70%, transparent 100%)",
          boxShadow:
            "0 0 30px rgba(96,165,250,1), 0 0 60px rgba(59,130,246,0.8), 0 0 90px rgba(59,130,246,0.5)",
        }}
      />
    </div>
  );
};

// ============================================
// Layer 3: Neon Arc SVG
// ============================================
const NeonArcLayer = () => (
  <div className="w-[90vw] aspect-[6/1]">
    <svg viewBox="0 0 600 100" className="w-full h-full">
      <defs>
        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "white", stopOpacity: 0 }} />
          <stop offset="15%" style={{ stopColor: "white", stopOpacity: 0.3 }} />
          <stop offset="50%" style={{ stopColor: "white", stopOpacity: 1 }} />
          <stop offset="85%" style={{ stopColor: "white", stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: "white", stopOpacity: 0 }} />
        </linearGradient>
        <filter id="neonGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="starGlow">
          <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
          <stop offset="30%" style={{ stopColor: "white", stopOpacity: 0.8 }} />
          <stop offset="70%" style={{ stopColor: "white", stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: "white", stopOpacity: 0 }} />
        </radialGradient>
      </defs>
      {/* Outer glow */}
      <path
        d="M 50 90 Q 300 10, 550 90"
        fill="none"
        stroke="white"
        strokeWidth="3"
        opacity="0.15"
        style={{ filter: "blur(10px)" }}
      />
      {/* Middle glow */}
      <path
        d="M 50 90 Q 300 10, 550 90"
        fill="none"
        stroke="white"
        strokeWidth="2"
        opacity="0.3"
        style={{ filter: "blur(6px)" }}
      />
      {/* Main line */}
      <path
        d="M 50 90 Q 300 10, 550 90"
        fill="none"
        stroke="url(#neonGradient)"
        strokeWidth="1.5"
        filter="url(#neonGlow)"
      />
      {/* Shining star at center */}
      <circle
        cx="300"
        cy="50"
        r="12"
        fill="url(#starGlow)"
        className="animate-star-glow"
      />
      <circle cx="300" cy="50" r="2" fill="white" />
    </svg>
  </div>
);

// ============================================
// Layer 4: Brand Text Content
// ============================================
const BrandTextLayer = ({ visible }: { visible: boolean }) => (
  <div
    className="text-center text-[40px] font-rift transition-opacity duration-[2000ms] -mt-[3vw]"
    style={{
      lineHeight: "120%",
      opacity: visible ? 0.8 : 0,
    }}
  >
    <h2 className="font-bold text-white">Beyond the Line, Behind the Shine</h2>
    <p className="text-white/80">Invisible. Essential.</p>
  </div>
);

// ============================================
// Main Component: Orchestrates layers
// ============================================
const BrandMessageSection = () => {
  const [showText, setShowText] = useState(false);
  const [shootingStar, setShootingStar] = useState(false);

  useEffect(() => {
    const starTimer = setTimeout(() => setShootingStar(true), 500);
    const textTimer = setTimeout(() => setShowText(true), 2000);

    return () => {
      clearTimeout(starTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <section
      className="h-full relative overflow-hidden flex items-center justify-center"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)",
      }}
    >
      {/* Layer 1: Background stars */}
      <StarfieldLayer />

      {/* Layer 2: Shooting star */}
      <ShootingStarLayer active={shootingStar} />

      {/* Layer 3 & 4: Content with neon arc */}
      <div className="flex flex-col items-center z-10 mb-[7vh]">
        <NeonArcLayer />
        <BrandTextLayer visible={showText} />
      </div>
    </section>
  );
};

export default BrandMessageSection;
