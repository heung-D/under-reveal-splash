import { useEffect, useState } from "react";

const HeroSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center px-6 pt-[140px]" style={{ height: 'calc(100vh - 100px)' }}>
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left side - Logo with line */}
          <div className="flex flex-col items-end">
            {/* Horizontal line */}
            <div className="w-full max-w-[470px] overflow-hidden mb-[9px] md:mb-[-6px]">
              <div
                className={`h-[3px] bg-foreground origin-left ${
                  startAnimation ? "animate-draw-line" : "w-0"
                }`}
              />
            </div>
            
            {/* Logo text */}
            <div
              className={`opacity-0 ${
                startAnimation ? "animate-fade-slide-up" : ""
              }`}
              style={{ animationDelay: "var(--delay-logo)" }}
            >
              <h1 className="text-[42px] lg:text-[44px] leading-[100%] font-bold text-foreground font-rift text-right">
                UNDERTHELINE HOLDINGS
              </h1>
            </div>
          </div>

          {/* Right side - Description text */}
          <div
            className={`opacity-0 ${
              startAnimation ? "animate-fade-slide-up-delayed" : ""
            }`}
          >
            <p className="text-sm md:text-base leading-[1.4] text-foreground">
              "Undertheline" comes from a simple promise: we stand under every artist's line, not above it. We are not a company that pulls rights and data upward; instead, we design and operate the structures beneath, so that artists and labels can hold sovereignty over their own catalogs, communities and economics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
