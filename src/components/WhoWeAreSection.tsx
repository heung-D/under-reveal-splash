import { useEffect, useState } from "react";
import whoWeAre from "@/assets/who-we-are.png";

const WhoWeAreSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left side - Logo with line */}
          <div className="flex flex-col items-start space-y-8">
            {/* Horizontal line */}
            <div className="w-full overflow-hidden">
              <div
                className={`h-[2px] bg-foreground origin-left ${
                  startAnimation ? "animate-draw-line" : "w-0"
                }`}
              />
            </div>
            
            {/* WHO WE ARE image */}
            <div
              className={`opacity-0 ${
                startAnimation ? "animate-fade-slide-up" : ""
              }`}
              style={{ animationDelay: "var(--delay-logo)" }}
            >
              <img src={whoWeAre} alt="Who We Are" className="w-full max-w-md" />
            </div>
          </div>

          {/* Right side - Description text */}
          <div
            className={`opacity-0 ${
              startAnimation ? "animate-fade-slide-up-delayed" : ""
            }`}
          >
            <p className="text-lg md:text-xl font-light leading-[1.4] text-foreground">
              UNDERTHELINE is shaping the future of entertainment by breaking down the boundaries between reality and the virtual world, building a next-generation infrastructure for the global entertainment industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
