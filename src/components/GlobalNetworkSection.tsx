import { useEffect, useState, useRef } from "react";
import { MapPin } from "lucide-react";
import worldMap from "@/assets/world-map.png";

const GlobalNetworkSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
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

  // 위치 데이터 (x, y는 퍼센트 기준)
  const locations = [
    // 미주
    { name: "USA", x: 20, y: 35 },
    { name: "South America", x: 28, y: 70 },
    // 유럽
    { name: "Europe", x: 48, y: 28 },
    { name: "France", x: 46, y: 32 },
    { name: "Italy", x: 50, y: 35 },
    // 중동
    { name: "GCC", x: 58, y: 45 },
    // 아시아
    { name: "India", x: 68, y: 48 },
    { name: "Thailand", x: 74, y: 52 },
    { name: "Cambodia", x: 76, y: 54 },
    { name: "Vietnam", x: 77, y: 50 },
    { name: "Malaysia", x: 75, y: 60 },
    { name: "Singapore", x: 75, y: 63 },
    { name: "Indonesia", x: 78, y: 65 },
    { name: "Philippines", x: 82, y: 52 },
    { name: "Hong Kong", x: 80, y: 42 },
    { name: "Japan", x: 86, y: 35 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden bg-white"
    >
      {/* Title */}
      <div 
        className={`absolute top-8 md:top-12 left-0 right-0 z-20 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <h2 className="text-2xl md:text-4xl font-bold font-rift text-foreground">
          GLOBAL MAP
        </h2>
      </div>

      {/* World Map Image Background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <img
          src={worldMap}
          alt="World Map"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Location Pins */}
      <div className="absolute inset-0">
        {locations.map((location) => (
          <div
            key={location.name}
            className="absolute flex flex-col items-center"
            style={{
              left: `${location.x}%`,
              top: `${location.y}%`,
            }}
          >
            <div className="relative group cursor-pointer">
              {/* Pin icon */}
              <MapPin 
                className="w-4 h-4 md:w-6 md:h-6 text-primary drop-shadow-lg -translate-x-1/2 -translate-y-1/2" 
                fill="currentColor"
              />
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-[10px] md:text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {location.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalNetworkSection;
