import { useEffect, useState, useRef } from "react";

const WhoWeAreSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left side - Logo with line */}
          <div className="flex flex-col items-start space-y-8">
            {/* Horizontal line */}
            <div className="w-full overflow-hidden">
              <div
                className={`h-[2px] bg-foreground origin-left transition-all duration-1000 ${
                  isVisible ? "animate-draw-line" : "w-0"
                }`}
              />
            </div>
            
            {/* WHO WE ARE text */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0 animate-fade-slide-up" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground font-rift">
                WHO WE ARE
              </h2>
            </div>
          </div>

          {/* Right side - Description text */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
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
