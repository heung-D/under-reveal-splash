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
        {/* PANORAMA */}
        <div
          className={`absolute top-[12%] left-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <button className="group hover:scale-[1.02] transition-all duration-200 ease-out relative block text-left">
            <img 
              src={panoramaLogo} 
              alt="PANORAMA" 
              className="h-8 object-contain"
            />
            {/* Line below logo */}
            <div
              className={`mt-[8px] h-[3px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[300px]" : "w-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            />
          </button>
        </div>

        {/* URBANLINK */}
        <div
          className={`absolute top-[30%] left-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <button className="group hover:scale-[1.02] transition-all duration-200 ease-out relative block text-left">
            <img 
              src={urbanlinkLogo} 
              alt="URBANLINK" 
              className="h-8 object-contain"
            />
            {/* Line below logo */}
            <div
              className={`mt-[8px] h-[3px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[300px]" : "w-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            />
          </button>
        </div>

        {/* ARADNAS */}
        <div
          className={`absolute top-[48%] left-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <button className="group hover:scale-[1.02] transition-all duration-200 ease-out relative block text-left">
            <img 
              src={aradnasLogo} 
              alt="ARADNAS" 
              className="h-8 object-contain"
            />
            {/* Line below logo */}
            <div
              className={`mt-[8px] h-[3px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[300px]" : "w-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            />
          </button>
        </div>

        {/* MAR/S */}
        <div
          className={`absolute top-[66%] left-[5%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <button className="group hover:scale-[1.02] transition-all duration-200 ease-out relative block text-left">
            <img 
              src={marsLogo} 
              alt="MAR/S" 
              className="h-8 object-contain"
            />
            {/* Line below logo */}
            <div
              className={`mt-[8px] h-[3px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[300px]" : "w-0"
              }`}
              style={{ transitionDelay: "1000ms" }}
            />
          </button>
        </div>

        {/* UNDERTHELINE - Bottom right */}
        <div
          className={`absolute bottom-[5%] right-[5%] transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <div className="group relative cursor-pointer hover:scale-[1.02] transition-all duration-200 ease-out flex flex-col items-end">
            {/* Line above logo - right aligned */}
            <div
              className={`mb-[8px] h-[3px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[300px]" : "w-0"
              }`}
              style={{ transitionDelay: "1200ms" }}
            />
            <img 
              src={underthelineText} 
              alt="UNDERTHELINE" 
              className="h-10 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-start justify-center space-y-12 w-full max-w-[400px] mx-auto px-6">
        {/* PANORAMA */}
        <div
          className={`transition-all duration-1000 w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <button className="group hover:scale-[1.02] transition-all duration-200 ease-out relative block w-full">
            <img 
              src={panoramaLogo} 
              alt="PANORAMA" 
              className="h-6 object-contain"
            />
            <div
              className={`mt-2 h-[2px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[200px]" : "w-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            />
          </button>
        </div>

        {/* URBANLINK */}
        <div
          className={`transition-all duration-1000 w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <button className="group hover:scale-[1.02] transition-all duration-200 ease-out relative block w-full">
            <img 
              src={urbanlinkLogo} 
              alt="URBANLINK" 
              className="h-6 object-contain"
            />
            <div
              className={`mt-2 h-[2px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[200px]" : "w-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            />
          </button>
        </div>

        {/* ARADNAS */}
        <div
          className={`transition-all duration-1000 w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <button className="group hover:scale-[1.02] transition-all duration-200 ease-out relative block w-full">
            <img 
              src={aradnasLogo} 
              alt="ARADNAS" 
              className="h-6 object-contain"
            />
            <div
              className={`mt-2 h-[2px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[200px]" : "w-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            />
          </button>
        </div>

        {/* MAR/S */}
        <div
          className={`transition-all duration-1000 w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <button className="group hover:scale-[1.02] transition-all duration-200 ease-out relative block w-full">
            <img 
              src={marsLogo} 
              alt="MAR/S" 
              className="h-6 object-contain"
            />
            <div
              className={`mt-2 h-[2px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[200px]" : "w-0"
              }`}
              style={{ transitionDelay: "1000ms" }}
            />
          </button>
        </div>

        {/* UNDERTHELINE */}
        <div
          className={`transition-all duration-1000 w-full pt-8 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <div className="group relative cursor-pointer hover:scale-[1.02] transition-all duration-200 ease-out flex flex-col items-end w-full">
            <div
              className={`mb-2 h-[2px] bg-foreground transition-all duration-700 group-hover:bg-primary ${
                isVisible ? "w-[200px]" : "w-0"
              }`}
              style={{ transitionDelay: "1200ms" }}
            />
            <img 
              src={underthelineText} 
              alt="UNDERTHELINE" 
              className="h-8 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsidiariesSection;
