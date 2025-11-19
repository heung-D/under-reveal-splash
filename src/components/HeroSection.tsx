import { useEffect, useState } from "react";

const HeroSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setStartAnimation(true);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left side - Logo with line */}
          <div className="flex flex-col items-start">
            {/* Horizontal line */}
            <div className="w-full max-w-[500px] overflow-hidden mb-[14px]">
              <div
                className={`h-[2px] bg-foreground origin-left ${
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
              <h1 className="text-[50px] font-bold text-foreground font-rift">
                UNDERTHELINE
              </h1>
            </div>
          </div>

          {/* Right side - Description text */}
          <div
            className={`opacity-0 ${
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
