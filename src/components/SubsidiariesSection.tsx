import { useEffect, useState, useRef } from "react";
import panoramaLogo from "@/assets/panorama.png";
import urbanlinkLogo from "@/assets/urbanlink.png";
import aradnasLogo from "@/assets/aradnas.png";
import marsLogo from "@/assets/mars.png";
import underthelineText from "@/assets/undertheline-text.png";

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
      className="min-h-screen flex items-center justify-center px-6 md:px-12 relative py-20"
    >
      {/* Desktop Layout */}
      <div className="hidden md:block relative w-full max-w-[1400px] mx-auto h-[600px]">
        {/* URBANLINK */}
        <div
          className={`absolute top-[12%] left-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <button className="group hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out relative block text-left cursor-pointer hover:brightness-110">
            <img 
              src={urbanlinkLogo} 
              alt="URBANLINK" 
              className="h-8 object-contain"
            />
          </button>
        </div>

        {/* PANORAMA */}
        <div
          className={`absolute top-[30%] left-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <button className="group hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out relative block text-left cursor-pointer hover:brightness-110">
            <img 
              src={panoramaLogo} 
              alt="PANORAMA" 
              className="h-8 object-contain"
            />
          </button>
        </div>

        {/* ARADNAS */}
        <div
          className={`absolute top-[48%] left-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <button className="group hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out relative block text-left cursor-pointer hover:brightness-110">
            <img 
              src={aradnasLogo} 
              alt="ARADNAS" 
              className="h-8 object-contain"
            />
          </button>
        </div>

        {/* MAR/S */}
        <div
          className={`absolute top-[66%] left-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <button className="group hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out relative block text-left cursor-pointer hover:brightness-110">
            <img 
              src={marsLogo} 
              alt="MAR/S" 
              className="h-8 object-contain"
            />
          </button>
        </div>

        {/* UNDERTHELINE - Center between PANORAMA and ARADNAS */}
        <div
          className={`absolute top-[39%] right-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <button className="group hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out relative block text-left cursor-pointer hover:brightness-110">
            <img 
              src={underthelineText} 
              alt="UNDERTHELINE" 
              className="h-10 object-contain"
            />
          </button>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-start justify-center space-y-12 w-full max-w-[400px] mx-auto px-6">
        {/* URBANLINK */}
        <div
          className={`transition-all duration-1000 w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <button className="group hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out relative block w-full cursor-pointer hover:brightness-110">
            <img 
              src={urbanlinkLogo} 
              alt="URBANLINK" 
              className="h-6 object-contain"
            />
          </button>
        </div>

        {/* PANORAMA */}
        <div
          className={`transition-all duration-1000 w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <button className="group hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out relative block w-full cursor-pointer hover:brightness-110">
            <img 
              src={panoramaLogo} 
              alt="PANORAMA" 
              className="h-6 object-contain"
            />
          </button>
        </div>

        {/* UNDERTHELINE */}
        <div
          className={`transition-all duration-1000 w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <button className="group hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out relative block w-full cursor-pointer hover:brightness-110">
            <img 
              src={underthelineText} 
              alt="UNDERTHELINE" 
              className="h-10 object-contain"
            />
          </button>
        </div>

        {/* ARADNAS */}
        <div
          className={`transition-all duration-1000 w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <button className="group hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out relative block w-full cursor-pointer hover:brightness-110">
            <img 
              src={aradnasLogo} 
              alt="ARADNAS" 
              className="h-6 object-contain"
            />
          </button>
        </div>

        {/* MAR/S */}
        <div
          className={`transition-all duration-1000 w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <button className="group hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out relative block w-full cursor-pointer hover:brightness-110">
            <img 
              src={marsLogo} 
              alt="MAR/S" 
              className="h-6 object-contain"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubsidiariesSection;
