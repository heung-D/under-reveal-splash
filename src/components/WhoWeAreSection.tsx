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
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left side - Logo with line */}
          <div className="flex flex-col items-end mt-0">
            {/* Horizontal line */}
            <div className="w-full max-w-[470px] overflow-hidden mb-[6px]">
              <div
                className={`h-[3px] bg-foreground origin-left transition-all duration-1000 ${
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
              <h2 className="text-[44px] font-bold text-foreground font-rift text-right">
                WHO WE ARE
              </h2>
            </div>
          </div>

          {/* Right side - Description text */}
          <div
            className={`transition-all duration-1000 mt-0 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
          >
            <p className="text-sm md:text-base leading-[1.4] text-foreground mb-12">
              UNDERTHELINE is shaping the future of entertainment by breaking down the boundaries between reality and the virtual world, building a next-generation infrastructure for the global entertainment industry.
            </p>
            
            <div className="flex gap-6">
              <button 
                className="px-8 py-3 bg-foreground text-background font-bold font-rift text-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
                onClick={() => {
                  const teamSection = document.getElementById('our-team');
                  if (teamSection) {
                    teamSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                OUR TEAM
              </button>
              <button 
                className="px-8 py-3 bg-foreground text-background font-bold font-rift text-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
                onClick={() => {
                  // Network page navigation will be added
                  console.log('Navigate to Network page');
                }}
              >
                NETWORK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
