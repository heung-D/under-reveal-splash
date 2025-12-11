import { useEffect, useState, useRef } from "react";
import { MapPin } from "lucide-react";

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
      className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #E8E8E8 30%, #1a1a2e 70%, #000000 100%)',
      }}
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

      {/* World Map SVG Background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full opacity-20"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Simplified world map paths */}
          <g fill="currentColor" className="text-foreground">
            {/* North America */}
            <path d="M150,100 Q200,80 250,90 L280,120 Q300,150 280,180 L250,200 Q200,220 150,200 L120,170 Q100,140 120,110 Z" opacity="0.4" />
            {/* South America */}
            <path d="M220,250 Q250,240 270,260 L290,320 Q300,380 280,420 L250,440 Q220,450 200,430 L180,380 Q170,320 190,270 Z" opacity="0.4" />
            {/* Europe */}
            <path d="M420,80 Q480,70 520,90 L550,120 Q560,150 540,170 L500,190 Q450,200 420,180 L400,150 Q390,110 410,90 Z" opacity="0.4" />
            {/* Africa */}
            <path d="M450,200 Q500,190 540,220 L560,280 Q570,350 550,400 L500,430 Q450,440 420,410 L400,350 Q390,280 420,220 Z" opacity="0.4" />
            {/* Asia */}
            <path d="M550,80 Q650,60 750,80 L820,120 Q850,170 830,220 L780,260 Q700,290 620,270 L570,230 Q540,180 550,130 Z" opacity="0.4" />
            {/* Southeast Asia */}
            <path d="M700,280 Q750,270 800,290 L830,330 Q850,370 830,400 L780,420 Q720,430 680,400 L660,360 Q650,310 680,280 Z" opacity="0.4" />
            {/* Australia */}
            <path d="M780,380 Q830,370 870,390 L900,420 Q910,460 890,480 L840,490 Q790,495 760,470 L750,430 Q745,390 770,380 Z" opacity="0.4" />
          </g>
        </svg>
      </div>

      {/* Location Pins */}
      <div className="absolute inset-0">
        {locations.map((location, index) => (
          <div
            key={location.name}
            className={`absolute flex flex-col items-center transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{
              left: `${location.x}%`,
              top: `${location.y}%`,
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <div className="relative group cursor-pointer">
              {/* Pulse effect */}
              <div className="absolute inset-0 w-6 h-6 md:w-8 md:h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 animate-ping" />
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

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default GlobalNetworkSection;
