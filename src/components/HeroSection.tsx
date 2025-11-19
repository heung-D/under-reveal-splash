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
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo text */}
          <div
            className={`opacity-0 ${
              startAnimation ? "animate-fade-slide-up" : ""
            }`}
            style={{ animationDelay: "var(--delay-logo)" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-rift tracking-wider leading-tight">
              UNDERTHELINE<br />HOLDINGS
            </h1>
          </div>

          {/* Horizontal line aligned right */}
          <div className="w-full overflow-hidden flex justify-end">
            <div
              className={`h-[2px] bg-foreground origin-right ${
                startAnimation ? "animate-draw-line" : "w-0"
              }`}
            />
          </div>
          
          {/* Description text */}
          <div
            className={`opacity-0 max-w-2xl ${
              startAnimation ? "animate-fade-slide-up-delayed" : ""
            }`}
          >
            <p className="text-lg md:text-xl font-light leading-[1.4] text-foreground">
              As the hidden engine of the entertainment industry, we deliver strategic business solutions that enable our labels and partners to achieve their brightest success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
