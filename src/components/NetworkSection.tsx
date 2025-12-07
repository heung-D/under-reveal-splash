import { useEffect, useState, useRef } from "react";
import network01 from "@/assets/network-01.png";
import network02 from "@/assets/network-02.png";
import network03 from "@/assets/network-03.png";
import network05 from "@/assets/network-05.png";

const networkImages: Record<string, string> = {
  "01": network01,
  "02": network02,
  "03": network03,
  "05": network05,
};

const networkData = [
  {
    number: "01",
    title: "Global Record Distribution Network",
    description: "Panorama leverages its partnerships with global record distribution companies and major labels to effectively promote K-pop artists on an international stage while ensuring that most of the value remains with the artists.",
    position: "top-left",
  },
  {
    number: "02",
    title: "Global Publishing Network",
    description: "Panorama leverages its global publishing partnerships to maximize publishing income and set up songwriting and production sessions with leading songwriters and producers of the world for K-pop artists",
    position: "top-right",
  },
  {
    number: "03",
    title: "Global Touring Network",
    description: "Panorama leverages its relationships with global talent booking agencies and live event promoters to secure maximum value from tours while sharing in the success with K-pop artists",
    position: "bottom-left",
  },
  {
    number: "04",
    title: "Dual Market Expertise",
    description: "The Panorama team brings deep expertise in both K-pop and the global music market, with a particular focus on breaking into the United States, the world's largest music market",
    position: "right-middle"
  },
  {
    number: "05",
    title: "Global OTT Network",
    description: "Panorama leverages its partnerships with global record distribution companies and major labels to effectively promote K-pop artists on an international stage while ensuring that most of the value remains with the artists",
    position: "bottom-right-lower",
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
        return "absolute top-[5%] right-[5%] max-w-[400px]";
      case "right":
        return "absolute top-[45%] right-[5%] -translate-y-1/2 max-w-[400px]";
      case "right-middle":
        return "absolute top-[45%] right-[5%] max-w-[400px]";
      case "bottom-right":
        return "absolute bottom-[5%] right-[15%] max-w-[400px]";
      case "bottom-left":
        return "absolute top-[45%] left-[5%] max-w-[400px]";
      case "bottom-right-lower":
        return "absolute top-[65%] right-[5%] max-w-[400px]";
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
          className={`text-[31px] lg:text-[50px] leading-[100%] font-bold text-foreground font-rift transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Infra & Network
        </h2>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block max-w-[1600px] mx-auto relative" style={{ minHeight: "800px" }}>
        {/* Center Circle with UNDERTHELINE - 점선 원형 라인 삭제 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
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
              
              <p className="text-[15px] text-foreground/70 leading-relaxed tracking-wide">
                {network.description}
              </p>

              {/* Network Image */}
              {networkImages[network.number] && (
                <div className="mt-4">
                  <img 
                    src={networkImages[network.number]} 
                    alt={`${network.title} partners`}
                    className="w-full max-w-[380px] h-auto object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden max-w-[800px] mx-auto">
        {/* Center Circle with UNDERTHELINE - 맨 위에 배치, 점선 원형 라인 삭제 */}
        <div className="flex justify-center mb-12">
          <div className="relative w-[140px] h-[140px] rounded-full bg-white border-2 border-black flex items-center justify-center">
            <h1 className="text-xl font-bold font-rift text-center px-2">UNDERTHELINE</h1>
          </div>
        </div>

        {/* Network Sections - 번호순 세로 리스트 */}
        <div className="space-y-6">
          {[...networkData].sort((a, b) => parseInt(a.number) - parseInt(b.number)).map((network, index) => (
            <div
              key={network.number}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="space-y-3 bg-white p-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-foreground">{network.number}</span>
                  <h3 className="text-base font-bold text-foreground">{network.title}</h3>
                </div>
                
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {network.description}
                </p>

                {/* Network Image */}
                {networkImages[network.number] && (
                  <div className="mt-3">
                    <img 
                      src={networkImages[network.number]} 
                      alt={`${network.title} partners`}
                      className="w-full max-w-[350px] h-auto object-contain"
                    />
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