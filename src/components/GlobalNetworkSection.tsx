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

  // 연결선 정의 (핀들을 연결)
  const connections = [
    // 미주 연결
    { from: "USA", to: "South America" },
    // 유럽 내부 연결
    { from: "Europe", to: "France" },
    { from: "France", to: "Italy" },
    // 유럽에서 중동/아시아
    { from: "Italy", to: "GCC" },
    { from: "GCC", to: "India" },
    // 동남아 연결
    { from: "India", to: "Thailand" },
    { from: "Thailand", to: "Cambodia" },
    { from: "Thailand", to: "Vietnam" },
    { from: "Thailand", to: "Malaysia" },
    { from: "Malaysia", to: "Singapore" },
    { from: "Malaysia", to: "Indonesia" },
    { from: "Vietnam", to: "Philippines" },
    { from: "Vietnam", to: "Hong Kong" },
    { from: "Hong Kong", to: "Japan" },
    // USA에서 유럽/아시아
    { from: "USA", to: "Europe" },
    { from: "USA", to: "Japan" },
  ];

  const getLocation = (name: string) => locations.find(loc => loc.name === name);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden py-8 md:py-16 pb-16 md:pb-32"
    >
      {/* Title */}
      <div 
        className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <h2 className="text-2xl md:text-4xl font-bold font-rift text-foreground">
          Location
        </h2>
      </div>

      {/* Map Container */}
      <div className="relative w-full" style={{ aspectRatio: '1920 / 900' }}>
        {/* World Map Image */}
        <img
          src={worldMap}
          alt="World Map"
          className="w-full h-full object-contain"
        />

        {/* Connection Lines SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {connections.map((connection, index) => {
            const from = getLocation(connection.from);
            const to = getLocation(connection.to);
            if (!from || !to) return null;

            // 곡선 컨트롤 포인트 계산
            const midX = (from.x + to.x) / 2;
            const midY = (from.y + to.y) / 2 - 5;

            return (
              <path
                key={index}
                d={`M ${from.x}% ${from.y}% Q ${midX}% ${midY}% ${to.x}% ${to.y}%`}
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
            );
          })}
        </svg>

        {/* Location Pins */}
        {locations.map((location) => (
          <div
            key={location.name}
            className="absolute flex flex-col items-center"
            style={{
              left: `${location.x}%`,
              top: `${location.y}%`,
            }}
          >
            <div className="relative flex flex-col items-center -translate-x-1/2 -translate-y-full group hover:z-50">
              {/* Speech bubble - visible on hover */}
              <div className="px-1.5 py-0.5 md:px-2 md:py-1 bg-white border border-gray-300 rounded text-[8px] md:text-[10px] text-gray-700 whitespace-nowrap shadow-md mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {location.name}
              </div>
              {/* Pin icon */}
              <MapPin 
                className="w-4 h-4 md:w-5 md:h-5 text-primary drop-shadow-md cursor-pointer" 
                fill="currentColor"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalNetworkSection;
