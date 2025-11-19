import { useEffect, useState, useRef } from "react";

const SubsidiariesSection = () => {
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
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 md:px-12 relative"
    >
      <div className="relative w-full max-w-[1400px] mx-auto h-[600px]">
        {/* Center dot */}
        <div
          className={`absolute top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full transition-opacity duration-500 delay-300 z-10 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Diagonal lines from each text line end to center dot */}
        {/* PANORAMA line to center */}
        <svg
          className={`absolute transition-all duration-1000 pointer-events-none ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDelay: "800ms",
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
            className="text-foreground/30"
          />
        </svg>

        {/* URBANLINK line to center */}
        <svg
          className={`absolute transition-all duration-1000 pointer-events-none ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDelay: "1000ms",
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
            className="text-foreground/30"
          />
        </svg>

        {/* ARADNAS line to center */}
        <svg
          className={`absolute transition-all duration-1000 pointer-events-none ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDelay: "1200ms",
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
            className="text-foreground/30"
          />
        </svg>

        {/* MAR/S line to center */}
        <svg
          className={`absolute transition-all duration-1000 pointer-events-none ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDelay: "1400ms",
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
            className="text-foreground/30"
          />
        </svg>

        {/* Vertical line from center dot to UNDERTHELINE */}
        <svg
          className={`absolute transition-all duration-1000 pointer-events-none ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDelay: "1600ms",
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
            y2="calc(88% - 15px)"
            stroke="currentColor"
            strokeWidth="1"
            className="text-foreground/30"
          />
        </svg>

        {/* Top Left - PANORAMA */}
        <div
          className={`absolute top-[12%] left-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <button className="group hover:scale-110 transition-all duration-300 relative block text-left">
            <span className="text-2xl md:text-3xl font-bold text-foreground font-rift transition-colors duration-300 group-hover:text-primary block">
              PANORAMA
            </span>
            {/* Line below text */}
            <div
              className={`mt-[8px] h-[3px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[300px]" : "w-0"
              }`}
              style={{ transitionDelay: "700ms" }}
            />
          </button>
        </div>

        {/* Bottom Left - URBANLINK */}
        <div
          className={`absolute top-[42%] left-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <button className="group hover:scale-110 transition-all duration-300 relative block text-left">
            <span className="text-2xl md:text-3xl font-bold text-foreground font-rift transition-colors duration-300 group-hover:text-primary block">
              URBANLINK
            </span>
            {/* Line below text */}
            <div
              className={`mt-[8px] h-[3px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[300px]" : "w-0"
              }`}
              style={{ transitionDelay: "900ms" }}
            />
          </button>
        </div>

        {/* Top Right - ARADNAS */}
        <div
          className={`absolute top-[12%] right-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <button className="group hover:scale-110 transition-all duration-300 relative block text-left">
            <span className="text-2xl md:text-3xl font-bold text-foreground font-rift transition-colors duration-300 group-hover:text-primary block">
              ARADNAS
            </span>
            {/* Line below text */}
            <div
              className={`mt-[8px] h-[3px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[300px]" : "w-0"
              }`}
              style={{ transitionDelay: "1100ms" }}
            />
          </button>
        </div>

        {/* Bottom Right - MAR/S */}
        <div
          className={`absolute top-[42%] right-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <button className="group hover:scale-110 transition-all duration-300 relative block text-left">
            <span className="text-2xl md:text-3xl font-bold text-foreground font-rift transition-colors duration-300 group-hover:text-primary block">
              MAR/S
            </span>
            {/* Line below text */}
            <div
              className={`mt-[8px] h-[3px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[300px]" : "w-0"
              }`}
              style={{ transitionDelay: "1300ms" }}
            />
          </button>
        </div>

        {/* Bottom Center - UNDERTHELINE */}
        <div
          className={`absolute bottom-[12%] left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="group relative inline-block cursor-pointer hover:scale-110 transition-all duration-300">
            {/* Line above text */}
            <div
              className={`mb-[8px] h-[3px] bg-foreground transition-all duration-700 group-hover:bg-primary mx-auto ${
                isVisible ? "w-[300px]" : "w-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            />
            <span className="text-3xl md:text-4xl font-bold text-foreground font-rift transition-colors duration-300 group-hover:text-primary">
              UNDERTHELINE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsidiariesSection;
