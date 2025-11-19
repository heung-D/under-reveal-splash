import { useEffect, useState, useRef } from "react";

const SubsidiariesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
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
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 md:px-12 relative py-20"
    >
      {/* Desktop Layout */}
      <div className="hidden md:block relative w-full max-w-[1400px] mx-auto h-[600px]">
        {/* CSS for line drawing animation */}
        <style>{`
          @keyframes drawLine {
            to {
              stroke-dashoffset: 0;
            }
          }
          .line-animated {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            animation: drawLine 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          }
        `}</style>

        {/* Center dot - appears first with bounce */}
        <div
          className={`absolute top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-700 z-10 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          } ${hoveredItem ? "bg-primary scale-125" : "bg-foreground"}`}
          style={{ 
            transitionDelay: "200ms",
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }}
        />

        {/* Diagonal lines from each text line end to center dot */}
        {/* PANORAMA line to center */}
        <svg
          className="absolute pointer-events-none"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <line
            x1="calc(5% + 300px)"
            y1="calc(12% + 45px)"
            x2="50%"
            y2="48%"
            stroke="currentColor"
            strokeWidth="1"
            className={`transition-colors duration-300 ${
              hoveredItem === "PANORAMA" ? "text-primary/60" : "text-foreground/30"
            } ${isVisible ? "line-animated" : "opacity-0"}`}
            style={{ animationDelay: "500ms" }}
          />
        </svg>

        {/* URBANLINK line to center */}
        <svg
          className="absolute pointer-events-none"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <line
            x1="calc(5% + 300px)"
            y1="calc(42% + 45px)"
            x2="50%"
            y2="48%"
            stroke="currentColor"
            strokeWidth="1"
            className={`transition-colors duration-300 ${
              hoveredItem === "URBANLINK" ? "text-primary/60" : "text-foreground/30"
            } ${isVisible ? "line-animated" : "opacity-0"}`}
            style={{ animationDelay: "600ms" }}
          />
        </svg>

        {/* ARADNAS line to center */}
        <svg
          className="absolute pointer-events-none"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <line
            x1="calc(95% - 300px)"
            y1="calc(12% + 45px)"
            x2="50%"
            y2="48%"
            stroke="currentColor"
            strokeWidth="1"
            className={`transition-colors duration-300 ${
              hoveredItem === "ARADNAS" ? "text-primary/60" : "text-foreground/30"
            } ${isVisible ? "line-animated" : "opacity-0"}`}
            style={{ animationDelay: "700ms" }}
          />
        </svg>

        {/* MAR/S line to center */}
        <svg
          className="absolute pointer-events-none"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <line
            x1="calc(95% - 300px)"
            y1="calc(42% + 45px)"
            x2="50%"
            y2="48%"
            stroke="currentColor"
            strokeWidth="1"
            className={`transition-colors duration-300 ${
              hoveredItem === "MAR/S" ? "text-primary/60" : "text-foreground/30"
            } ${isVisible ? "line-animated" : "opacity-0"}`}
            style={{ animationDelay: "800ms" }}
          />
        </svg>

        {/* Vertical line from center dot to UNDERTHELINE */}
        <svg
          className="absolute pointer-events-none"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <line
            x1="50%"
            y1="48%"
            x2="50%"
            y2="calc(95% - 60px)"
            stroke="currentColor"
            strokeWidth="1"
            className={`transition-colors duration-300 ${
              hoveredItem === "UNDERTHELINE" ? "text-primary/60" : "text-foreground/30"
            } ${isVisible ? "line-animated" : "opacity-0"}`}
            style={{ animationDelay: "900ms" }}
          />
        </svg>

        {/* Top Left - PANORAMA */}
        <div
          className={`absolute top-[12%] left-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ 
            transitionDelay: "1000ms",
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }}
          onMouseEnter={() => setHoveredItem("PANORAMA")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button className="group hover:scale-110 transition-all duration-500 ease-out relative block text-left">
            <span className="text-3xl font-bold text-foreground font-rift transition-all duration-500 group-hover:text-primary block">
              PANORAMA
            </span>
            {/* Line below text */}
            <div className="mt-[8px] h-[3px] bg-foreground overflow-hidden">
              <div
                className={`h-full bg-foreground transition-all duration-1000 group-hover:bg-primary ${
                  isVisible ? "w-[300px]" : "w-0"
                }`}
                style={{ 
                  transitionDelay: "1100ms",
                  transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)"
                }}
              />
            </div>
          </button>
        </div>

        {/* Bottom Left - URBANLINK */}
        <div
          className={`absolute top-[42%] left-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ 
            transitionDelay: "1100ms",
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }}
          onMouseEnter={() => setHoveredItem("URBANLINK")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button className="group hover:scale-110 transition-all duration-500 ease-out relative block text-left">
            <span className="text-3xl font-bold text-foreground font-rift transition-all duration-500 group-hover:text-primary block">
              URBANLINK
            </span>
            <div className="mt-[8px] h-[3px] bg-foreground overflow-hidden">
              <div
                className={`h-full bg-foreground transition-all duration-1000 group-hover:bg-primary ${
                  isVisible ? "w-[300px]" : "w-0"
                }`}
                style={{ 
                  transitionDelay: "1200ms",
                  transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)"
                }}
              />
            </div>
          </button>
        </div>

        {/* Top Right - ARADNAS */}
        <div
          className={`absolute top-[12%] right-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ 
            transitionDelay: "1200ms",
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }}
          onMouseEnter={() => setHoveredItem("ARADNAS")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button className="group hover:scale-110 transition-all duration-500 ease-out relative block text-left">
            <span className="text-3xl font-bold text-foreground font-rift transition-all duration-500 group-hover:text-primary block">
              ARADNAS
            </span>
            <div className="mt-[8px] h-[3px] bg-foreground overflow-hidden">
              <div
                className={`h-full bg-foreground transition-all duration-1000 group-hover:bg-primary ${
                  isVisible ? "w-[300px]" : "w-0"
                }`}
                style={{ 
                  transitionDelay: "1300ms",
                  transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)"
                }}
              />
            </div>
          </button>
        </div>

        {/* Bottom Right - MAR/S */}
        <div
          className={`absolute top-[42%] right-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ 
            transitionDelay: "1300ms",
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }}
          onMouseEnter={() => setHoveredItem("MAR/S")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button className="group hover:scale-110 transition-all duration-500 ease-out relative block text-left">
            <span className="text-3xl font-bold text-foreground font-rift transition-all duration-500 group-hover:text-primary block">
              MAR/S
            </span>
            <div className="mt-[8px] h-[3px] bg-foreground overflow-hidden">
              <div
                className={`h-full bg-foreground transition-all duration-1000 group-hover:bg-primary ${
                  isVisible ? "w-[300px]" : "w-0"
                }`}
                style={{ 
                  transitionDelay: "1400ms",
                  transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)"
                }}
              />
            </div>
          </button>
        </div>

        {/* Bottom Center - UNDERTHELINE */}
        <div
          className={`absolute bottom-[5%] left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ 
            transitionDelay: "1400ms",
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }}
          onMouseEnter={() => setHoveredItem("UNDERTHELINE")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="group relative inline-block cursor-pointer hover:scale-110 transition-all duration-500 ease-out">
            <div className="mb-[8px] h-[3px] bg-foreground overflow-hidden mx-auto">
              <div
                className={`h-full bg-foreground transition-all duration-1000 group-hover:bg-primary ${
                  isVisible ? "w-[300px]" : "w-0"
                }`}
                style={{ 
                  transitionDelay: "1500ms",
                  transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)"
                }}
              />
            </div>
            <span className="text-4xl font-bold text-foreground font-rift transition-all duration-500 group-hover:text-primary">
              UNDERTHELINE
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center justify-center space-y-12 w-full max-w-[400px] mx-auto">
        {/* PANORAMA */}
        <div
          className={`transition-all duration-1000 w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <button className="group hover:scale-105 transition-all duration-300 relative block w-full text-center">
            <span className="text-2xl font-bold text-foreground font-rift transition-colors duration-300 group-hover:text-primary block">
              PANORAMA
            </span>
            <div
              className={`mt-2 h-[2px] bg-foreground transition-all duration-700 group-hover:bg-primary mx-auto ${
                isVisible ? "w-[200px]" : "w-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            />
          </button>
        </div>

        {/* URBANLINK */}
        <div
          className={`transition-all duration-1000 w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <button className="group hover:scale-105 transition-all duration-300 relative block w-full text-center">
            <span className="text-2xl font-bold text-foreground font-rift transition-colors duration-300 group-hover:text-primary block">
              URBANLINK
            </span>
            <div
              className={`mt-2 h-[2px] bg-foreground transition-all duration-700 group-hover:bg-primary mx-auto ${
                isVisible ? "w-[200px]" : "w-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            />
          </button>
        </div>

        {/* ARADNAS */}
        <div
          className={`transition-all duration-1000 w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <button className="group hover:scale-105 transition-all duration-300 relative block w-full text-center">
            <span className="text-2xl font-bold text-foreground font-rift transition-colors duration-300 group-hover:text-primary block">
              ARADNAS
            </span>
            <div
              className={`mt-2 h-[2px] bg-foreground transition-all duration-700 group-hover:bg-primary mx-auto ${
                isVisible ? "w-[200px]" : "w-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            />
          </button>
        </div>

        {/* MAR/S */}
        <div
          className={`transition-all duration-1000 w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <button className="group hover:scale-105 transition-all duration-300 relative block w-full text-center">
            <span className="text-2xl font-bold text-foreground font-rift transition-colors duration-300 group-hover:text-primary block">
              MAR/S
            </span>
            <div
              className={`mt-2 h-[2px] bg-foreground transition-all duration-700 group-hover:bg-primary mx-auto ${
                isVisible ? "w-[200px]" : "w-0"
              }`}
              style={{ transitionDelay: "1000ms" }}
            />
          </button>
        </div>

        {/* UNDERTHELINE */}
        <div
          className={`transition-all duration-1000 w-full pt-8 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <div className="group relative inline-block cursor-pointer hover:scale-105 transition-all duration-300 w-full text-center">
            <div
              className={`mb-2 h-[2px] bg-foreground transition-all duration-700 group-hover:bg-primary mx-auto ${
                isVisible ? "w-[200px]" : "w-0"
              }`}
              style={{ transitionDelay: "1200ms" }}
            />
            <span className="text-3xl font-bold text-foreground font-rift transition-colors duration-300 group-hover:text-primary">
              UNDERTHELINE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsidiariesSection;
