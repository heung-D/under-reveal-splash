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

  const subsidiaries = [
    { name: "PANORAMA", position: "top-left" },
    { name: "URBANLINK", position: "bottom-left" },
    { name: "ARADNAS", position: "top-right" },
    { name: "MAR/S", position: "bottom-right" },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 md:px-12 relative"
    >
      <div className="relative w-full max-w-[1200px] mx-auto h-[600px]">
        {/* Center dot */}
        <div
          className={`absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-foreground rounded-full transition-opacity duration-500 delay-300 z-10 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Lines from center to each subsidiary */}
        {subsidiaries.map((subsidiary, index) => {
          const isLeft = subsidiary.position.includes("left");
          const isTop = subsidiary.position.includes("top");
          
          // Calculate line end positions to match text line ends (300px)
          let x2, y2;
          if (subsidiary.name === "PANORAMA") {
            x2 = "5%"; // Start of PANORAMA text
            y2 = "15%";
          } else if (subsidiary.name === "URBANLINK") {
            x2 = "5%"; // Start of URBANLINK text
            y2 = "55%";
          } else if (subsidiary.name === "ARADNAS") {
            x2 = "calc(98% - 40px)"; // Start of ARADNAS text (right aligned)
            y2 = "15%";
          } else if (subsidiary.name === "MAR/S") {
            x2 = "calc(98% - 40px)"; // Start of MAR/S text (right aligned)
            y2 = "55%";
          }
          
          return (
            <svg
              key={`line-${subsidiary.name}`}
              className={`absolute transition-all duration-1000 pointer-events-none ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${500 + index * 200}ms`,
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <line
                x1="50%"
                y1="40%"
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-foreground/30"
              />
            </svg>
          );
        })}

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
            y1="40%"
            x2="50%"
            y2="90%"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-foreground/30"
          />
        </svg>

        {/* Top Left - PANORAMA */}
        <div
          className={`absolute top-[15%] left-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <button className="group hover:scale-110 transition-all duration-300 relative">
            {/* Line above text */}
            <div
              className={`absolute -top-[8px] left-0 h-[3px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[300px]" : "w-0"
              }`}
              style={{ transitionDelay: "900ms" }}
            />
            <span className="text-2xl md:text-3xl font-bold text-foreground font-rift transition-colors duration-300 group-hover:text-primary">
              PANORAMA
            </span>
          </button>
        </div>

        {/* Bottom Left - URBANLINK */}
        <div
          className={`absolute top-[55%] left-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <button className="group hover:scale-110 transition-all duration-300 relative">
            {/* Line above text */}
            <div
              className={`absolute -top-[8px] left-0 h-[3px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[300px]" : "w-0"
              }`}
              style={{ transitionDelay: "1100ms" }}
            />
            <span className="text-2xl md:text-3xl font-bold text-foreground font-rift transition-colors duration-300 group-hover:text-primary">
              URBANLINK
            </span>
          </button>
        </div>

        {/* Top Right - ARADNAS */}
        <div
          className={`absolute top-[15%] right-[calc(2%+40px)] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <button className="group hover:scale-110 transition-all duration-300 relative block text-left">
            {/* Line above text */}
            <div
              className={`absolute -top-[8px] left-0 h-[3px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[300px]" : "w-0"
              }`}
              style={{ transitionDelay: "1300ms" }}
            />
            <span className="text-2xl md:text-3xl font-bold text-foreground font-rift transition-colors duration-300 group-hover:text-primary block">
              ARADNAS
            </span>
          </button>
        </div>

        {/* Bottom Right - MAR/S */}
        <div
          className={`absolute top-[55%] right-[calc(2%+40px)] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1400ms" }}
        >
          <button className="group hover:scale-110 transition-all duration-300 relative block text-left">
            {/* Line above text */}
            <div
              className={`absolute -top-[8px] left-0 h-[3px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[300px]" : "w-0"
              }`}
              style={{ transitionDelay: "1500ms" }}
            />
            <span className="text-2xl md:text-3xl font-bold text-foreground font-rift transition-colors duration-300 group-hover:text-primary block">
              MAR/S
            </span>
          </button>
        </div>

        {/* Bottom Center - UNDERTHELINE */}
        <div
          className={`absolute bottom-[10%] left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="group relative inline-block cursor-pointer hover:scale-110 transition-all duration-300">
            {/* Line above text */}
            <div
              className={`absolute -top-[8px] left-0 h-[3px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
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
