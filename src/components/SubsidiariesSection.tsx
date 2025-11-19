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
    { name: "URBANLINK", logo: urbanlink, position: "middle-left" },
    { name: "ARADNAS", logo: aradnas, position: "top-right" },
    { name: "MAR/S", logo: mars, position: "middle-right" },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 md:px-12 relative"
    >
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Center - Undertheline Logo */}
        <div className="flex justify-center mb-20">
          <div
            className={`transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={undertheline}
              alt="UNDERTHELINE"
              className="h-12 md:h-16"
            />
          </div>
        </div>

        {/* Subsidiaries Grid */}
        <div className="relative">
          {/* Center dot */}
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full transition-opacity duration-500 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Lines and Logos */}
          <div className="grid grid-cols-2 gap-x-32 gap-y-20 max-w-4xl mx-auto relative">
            {subsidiaries.map((subsidiary, index) => (
              <div
                key={subsidiary.name}
                className={`relative ${
                  subsidiary.position === "top-left" ||
                  subsidiary.position === "middle-left"
                    ? "text-right pr-8"
                    : "text-left pl-8"
                }`}
              >
                {/* Line from center */}
                <svg
                  className={`absolute transition-all duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${500 + index * 200}ms`,
                    top: "50%",
                    [subsidiary.position.includes("left") ? "right" : "left"]:
                      "100%",
                    width: subsidiary.position.includes("left")
                      ? "calc(50vw - 50%)"
                      : "calc(50vw - 50%)",
                    height: "2px",
                  }}
                >
                  <line
                    x1={subsidiary.position.includes("left") ? "100%" : "0"}
                    y1="1"
                    x2={subsidiary.position.includes("left") ? "0" : "100%"}
                    y2="1"
                    stroke="currentColor"
                    strokeWidth="1"
                    className={`transition-all duration-1000 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${500 + index * 200}ms`,
                    }}
                  />
                </svg>

                {/* Logo */}
                <button
                  className={`transition-all duration-1000 hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: `${800 + index * 200}ms`,
                  }}
                >
                  <img
                    src={subsidiary.logo}
                    alt={subsidiary.name}
                    className="h-8 md:h-10 inline-block"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsidiariesSection;
