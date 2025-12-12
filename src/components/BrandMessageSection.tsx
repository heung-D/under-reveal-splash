import { useEffect, useState } from "react";

const BrandMessageSection = () => {
  const [showText, setShowText] = useState(false);
  const [shootingStar, setShootingStar] = useState(false);

  useEffect(() => {
    // Start shooting star animation
    const starTimer = setTimeout(() => {
      setShootingStar(true);
    }, 500);

    // Show text after shooting star passes
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 2000);

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
      {/* Background stars */}
      <div className="absolute inset-0 pointer-events-none">
        {/* More stars scattered */}
        <div
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{ top: "10%", left: "15%" }}
        />
        <div
          className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
          style={{ top: "12%", left: "25%" }}
        />
        <div
          className="absolute w-1 h-1 bg-white/35 rounded-full"
          style={{ top: "15%", left: "70%" }}
        />
        <div
          className="absolute w-0.5 h-0.5 bg-white/25 rounded-full"
          style={{ top: "18%", left: "82%" }}
        />
        <div
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{ top: "22%", left: "45%" }}
        />
        <div
          className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
          style={{ top: "25%", left: "88%" }}
        />
        <div
          className="absolute w-1 h-1 bg-white/35 rounded-full"
          style={{ top: "28%", left: "8%" }}
        />
        <div
          className="absolute w-0.5 h-0.5 bg-white/25 rounded-full"
          style={{ top: "32%", left: "65%" }}
        />
        <div
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{ top: "55%", left: "20%" }}
        />
        <div
          className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
          style={{ top: "60%", left: "75%" }}
        />
        <div
          className="absolute w-1 h-1 bg-white/35 rounded-full"
          style={{ top: "65%", left: "40%" }}
        />
        <div
          className="absolute w-0.5 h-0.5 bg-white/25 rounded-full"
          style={{ top: "70%", left: "85%" }}
        />
        <div
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{ top: "75%", left: "12%" }}
        />
        <div
          className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
          style={{ top: "80%", left: "55%" }}
        />
      </div>

      {/* Shooting star */}
      {shootingStar && (
        <div
          className="absolute top-[35%] left-0 w-full h-[2px] pointer-events-none"
          style={{
            animation:
              "shootingStar 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
          }}
        >
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
      )}

      {/* Brand Message */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-[200px] relative z-10 mt-[120px]">
        {/* Neon arc above text */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-[600px] h-[100px]">
          <svg viewBox="0 0 600 100" className="w-full h-full">
            <defs>
              <linearGradient
                id="neonGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "white", stopOpacity: 0 }}
                />
                <stop
                  offset="15%"
                  style={{ stopColor: "white", stopOpacity: 0.3 }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "white", stopOpacity: 1 }}
                />
                <stop
                  offset="85%"
                  style={{ stopColor: "white", stopOpacity: 0.3 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "white", stopOpacity: 0 }}
                />
              </linearGradient>
              <filter id="neonGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="starGlow">
                <stop
                  offset="0%"
                  style={{ stopColor: "white", stopOpacity: 1 }}
                />
                <stop
                  offset="30%"
                  style={{ stopColor: "white", stopOpacity: 0.8 }}
                />
                <stop
                  offset="70%"
                  style={{ stopColor: "white", stopOpacity: 0.3 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "white", stopOpacity: 0 }}
                />
              </radialGradient>
            </defs>
            {/* Outer glow */}
            <path
              d="M 50 90 Q 300 10, 550 90"
              fill="none"
              stroke="white"
              strokeWidth="3"
              opacity="0.15"
              style={{
                filter: "blur(10px)",
              }}
            />
            {/* Middle glow */}
            <path
              d="M 50 90 Q 300 10, 550 90"
              fill="none"
              stroke="white"
              strokeWidth="2"
              opacity="0.3"
              style={{
                filter: "blur(6px)",
              }}
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
              style={{
                animation: "starGlow 2s ease-in-out infinite",
              }}
            />
            <circle cx="300" cy="50" r="2" fill="white" />
          </svg>
        </div>

        <div
          className="text-center text-[20px] font-rift transition-opacity duration-[2000ms]"
          style={{
            lineHeight: "120%",
            opacity: showText ? 0.8 : 0,
          }}
        >
          <h2 className="font-bold text-white">
            Beyond the Line, Behind the Shine
          </h2>
          <p className="text-white/80">Invisible. Essential.</p>
        </div>
      </div>

      <style>{`
        @keyframes shootingStar {
          0% {
            transform: translateX(-100%) translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(0);
            opacity: 0;
          }
        }
        
        @keyframes starGlow {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandMessageSection;
