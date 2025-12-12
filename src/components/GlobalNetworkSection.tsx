import { useEffect, useState, useRef } from "react";
import { MapPin, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import worldMap from "@/assets/world-map.png";
import {
  locations,
  connections,
  getLocationById,
} from "@/data/globalNetworkData";

const GlobalNetworkSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);
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

  return (
    <section
      ref={sectionRef}
      className="relative h-full w-full bg-white overflow-hidden flex flex-col justify-center"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Title */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold font-rift text-foreground">
            Global Presence
          </h2>
        </div>

        <p className="mt-6 mt:mb-8 text-sm md:text-base leading-[1.4] text-foreground md:w-[60%] w-[100%] md:p-0 p-[20px] text-center">
          "Undertheline" comes from a simple promise: we stand under every
          artist's line, not above it. We are not a company that pulls rights
          and data upward; instead, we design and operate the structures
          beneath, so that artists and labels can hold sovereignty over their
          own catalogs, communities and economics.
        </p>

        {/* Map Container with Zoom */}
        <div
          className="mt-6 mt:mb-8 relative w-full"
          style={{ aspectRatio: "1920 / 900" }}
        >
          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={4}
            centerOnInit
            wheel={{ disabled: true }}
            pinch={{ step: 5 }}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                {/* Zoom Controls */}
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                  <button
                    onClick={() => zoomIn()}
                    className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-md transition-colors border border-gray-200"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={() => zoomOut()}
                    className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-md transition-colors border border-gray-200"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={() => resetTransform()}
                    className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-md transition-colors border border-gray-200"
                    aria-label="Reset zoom"
                  >
                    <RotateCcw className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                <TransformComponent
                  wrapperStyle={{ width: "100%", height: "100%" }}
                  contentStyle={{ width: "100%", height: "100%" }}
                >
                  <div className="relative w-full h-full">
                    {/* World Map Image */}
                    <img
                      src={worldMap}
                      alt="World Map"
                      className="w-full h-full object-contain"
                      draggable={false}
                    />

                    {/* Connection Lines SVG */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                      {connections.map((connection, index) => {
                        const from = getLocationById(connection.from);
                        const to = getLocationById(connection.to);
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
                        key={location.id}
                        className="absolute flex flex-col items-center"
                        style={{
                          left: `${location.x}%`,
                          top: `${location.y}%`,
                        }}
                      >
                        <div
                          className="relative flex flex-col items-center -translate-x-1/2 -translate-y-full"
                          onMouseEnter={() => setHoveredPin(location.id)}
                          onMouseLeave={() => setHoveredPin(null)}
                        >
                          {/* Speech bubble - only rendered on hover */}
                          {hoveredPin === location.id && (
                            <div className="absolute bottom-full mb-0.5 px-1.5 py-0.5 md:px-2 md:py-1 bg-white border border-gray-300 rounded text-[8px] md:text-[10px] text-gray-700 whitespace-nowrap shadow-md pointer-events-none z-50">
                              {location.name}
                            </div>
                          )}
                          {/* Pin icon */}
                          <MapPin
                            className="w-4 h-4 md:w-5 md:h-5 text-primary drop-shadow-md cursor-pointer"
                            fill="currentColor"
                            stroke="white"
                            strokeWidth={1}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetworkSection;
