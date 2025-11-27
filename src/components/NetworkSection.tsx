import { useEffect, useState, useRef } from "react";

const networkData = [
  {
    number: "01",
    title: "Global Record Distribution Network",
    description: "Panorama leverages its partnerships with global record distribution companies and major labels to effectively promote K-pop artists on an international stage while ensuring that most of the value remains with the artists.",
    position: "top-left",
    logos: ["ADA", "AWAL", "Atlantic", "Def Jam", "The Orchard", "Virgin Music", "Republic", "Epic", "Warner Music", "JIVE"]
  },
  {
    number: "02",
    title: "Global Publishing Network",
    description: "Panorama leverages its global publishing partnerships to maximize publishing income and set up songwriting and production sessions with leading songwriters and producers of the world for K-pop artists",
    position: "top-right",
    logos: ["Concord", "Universal", "BMG", "Sony", "Warner Chappell", "Downtown", "Kobalt", "peermusic"]
  },
  {
    number: "03",
    title: "Global Touring Network",
    description: "Panorama leverages its relationships with global talent booking agencies and live event promoters to secure maximum value from tours while sharing in the success with K-pop artists",
    position: "right",
    logos: ["CAA", "WME", "DYNAMIC", "Live Nation", "AEG", "UTA"]
  },
  {
    number: "04",
    title: "Dual Market Expertise",
    description: "The Panorama team brings deep expertise in both K-pop and the global music market, with a particular focus on breaking into the United States, the world's largest music market",
    position: "bottom-right"
  },
  {
    number: "05",
    title: "Global OTT Network",
    description: "Panorama leverages its partnerships with global record distribution companies and major labels to effectively promote K-pop artists on an international stage while ensuring that most of the value remains with the artists",
    position: "bottom-left",
    logos: ["Netflix", "Disney+", "Apple TV+", "Prime Video", "HBO Max"]
  }
];

const NetworkSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getPositionClasses = (position: string) => {
    switch (position) {
      case "top-left":
        return "absolute top-[5%] left-[5%] max-w-[400px]";
      case "top-right":
        return "absolute top-[5%] left-[5%] max-w-[600px]";
      case "right":
        return "absolute top-[45%] right-[5%] -translate-y-1/2 max-w-[400px]";
      case "bottom-right":
        return "absolute bottom-[5%] right-[15%] max-w-[400px]";
      case "bottom-left":
        return "absolute bottom-[5%] left-[5%] max-w-[400px]";
      default:
        return "";
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-white pt-[100px] pb-20 px-6 relative"
    >
      {/* Title */}
      <div className="px-6 md:px-12 mb-16 text-center">
        <h2 
          className={`text-[36px] lg:text-[50px] font-bold text-foreground font-rift transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Infra & Network
        </h2>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block max-w-[1600px] mx-auto relative" style={{ minHeight: "800px" }}>
        {/* Center Circle with UNDERTHELINE */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          {/* Outer dotted circles - spacing increases progressively */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] h-[270px] rounded-full border-2 border-dashed border-gray-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border-2 border-dashed border-gray-200" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border-2 border-dashed border-gray-50" />
          
          {/* Center circle */}
          <div className="relative w-[180px] h-[180px] rounded-full bg-white border-2 border-black flex items-center justify-center z-10">
            <h1 className="text-3xl font-bold font-rift">UNDERTHELINE</h1>
          </div>
        </div>

        {/* Network Sections */}
        {networkData.map((network, index) => (
          <div
            key={network.number}
            className={`${getPositionClasses(network.position)} transition-all duration-700 z-20 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="space-y-3 bg-white p-4">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-foreground">{network.number}</span>
                <h3 className="text-lg font-bold text-foreground">{network.title}</h3>
              </div>
              
              <p className="text-sm text-foreground/70 leading-relaxed">
                {network.description}
              </p>

              {/* Logos */}
              {network.logos && (
                <div className={network.number === "02" ? "grid grid-cols-2 gap-2 mt-4" : "flex flex-wrap gap-4 mt-4"}>
                  {network.logos.map((logo) => (
                    <div
                      key={logo}
                      className="px-3 py-1.5 bg-white border border-gray-300 text-xs font-semibold text-foreground"
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden max-w-[800px] mx-auto">
        {/* Center Circle with UNDERTHELINE */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            {/* Outer dotted circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border-2 border-dashed border-gray-300" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border-2 border-dashed border-gray-100" />
            
            {/* Center circle */}
            <div className="relative w-[140px] h-[140px] rounded-full bg-white border-2 border-black flex items-center justify-center z-10">
              <h1 className="text-xl font-bold font-rift text-center px-2">UNDERTHELINE</h1>
            </div>
          </div>
        </div>

        {/* Network Sections - Vertical List */}
        <div className="space-y-8">
          {networkData.map((network, index) => (
            <div
              key={network.number}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="space-y-3 bg-white p-6 border border-gray-200">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-foreground">{network.number}</span>
                  <h3 className="text-lg font-bold text-foreground">{network.title}</h3>
                </div>
                
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {network.description}
                </p>

                {/* Logos */}
                {network.logos && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {network.logos.map((logo) => (
                      <div
                        key={logo}
                        className="px-3 py-1.5 bg-white border border-gray-300 text-xs font-semibold text-foreground"
                      >
                        {logo}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
