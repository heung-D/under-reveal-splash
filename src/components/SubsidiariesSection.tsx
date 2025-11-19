import { useEffect, useState, useRef } from "react";
import undertheline from "@/assets/undertheline-text.png";
import aradnas from "@/assets/aradnas.png";
import mars from "@/assets/mars.png";
import panorama from "@/assets/panorama.png";
import urbanlink from "@/assets/urbanlink.png";

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
    { name: "PANORAMA", logo: panorama, position: "top-left" },
    { name: "URBANLINK", logo: urbanlink, position: "bottom-left" },
    { name: "ARADNAS", logo: aradnas, position: "top-right" },
    { name: "MAR/S", logo: mars, position: "bottom-right" },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 md:px-12 relative"
    >
      <div className="relative w-full max-w-[1400px] mx-auto h-[500px]">
        {/* Center dot */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-foreground rounded-full transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        />

        {/* Lines from center to each subsidiary */}
        {subsidiaries.map((subsidiary, index) => {
          const isLeft = subsidiary.position.includes("left");
          const isTop = subsidiary.position.includes("top");
          
          return (
            <svg
              key={`line-${subsidiary.name}`}
              className={`absolute transition-opacity duration-1000 pointer-events-none ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${700 + index * 150}ms`,
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <line
                x1="50%"
                y1="50%"
                x2={isLeft ? "8%" : "92%"}
                y2={isTop ? "15%" : "85%"}
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-foreground/30"
              />
            </svg>
          );
        })}

        {/* Top Left - PANORAMA */}
        <div
          className={`absolute top-[10%] left-[2%] transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <button className="hover:scale-105 transition-transform text-left">
            <img
              src={panorama}
              alt="PANORAMA"
              className="h-10 md:h-12"
            />
          </button>
        </div>

        {/* Bottom Left - URBANLINK */}
        <div
          className={`absolute bottom-[10%] left-[2%] transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1250ms" }}
        >
          <button className="hover:scale-105 transition-transform text-left">
            <img
              src={urbanlink}
              alt="URBANLINK"
              className="h-10 md:h-12"
            />
          </button>
        </div>

        {/* Top Right - ARADNAS */}
        <div
          className={`absolute top-[10%] right-[2%] transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1400ms" }}
        >
          <button className="hover:scale-105 transition-transform text-right">
            <img
              src={aradnas}
              alt="ARADNAS"
              className="h-10 md:h-12"
            />
          </button>
        </div>

        {/* Bottom Right - MAR/S */}
        <div
          className={`absolute bottom-[10%] right-[2%] transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1550ms" }}
        >
          <button className="hover:scale-105 transition-transform text-right">
            <img
              src={mars}
              alt="MAR/S"
              className="h-10 md:h-12"
            />
          </button>
        </div>

        {/* Center Bottom - UNDERTHELINE Logo */}
        <div
          className={`absolute bottom-[45%] left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <img
            src={undertheline}
            alt="UNDERTHELINE"
            className="h-12 md:h-14"
          />
        </div>
      </div>
    </section>
  );
};

export default SubsidiariesSection;
