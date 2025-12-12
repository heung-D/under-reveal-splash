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

  const handleSubsidiaryClick = (tab: string) => {
    const detailsSection = document.getElementById('subsidiary-details');
    if (detailsSection) {
      // Change tab
      const event = new CustomEvent('changeSubsidiaryTab', { detail: { tab } });
      window.dispatchEvent(event);

      // Scroll to the section (works with inner scroll container)
      detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="h-full flex items-center justify-center px-6 md:px-[160px] relative"
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
          <button 
            onClick={() => handleSubsidiaryClick('urbanlink')}
            className="group hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out relative block text-left cursor-pointer hover:brightness-110"
          >
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
          <button 
            onClick={() => handleSubsidiaryClick('panorama')}
            className="group hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out relative block text-left cursor-pointer hover:brightness-110"
          >
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
          <button 
            onClick={() => handleSubsidiaryClick('aradnas')}
            className="group hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out relative block text-left cursor-pointer hover:brightness-110"
          >
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
          <button 
            onClick={() => handleSubsidiaryClick('mars')}
            className="group hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out relative block text-left cursor-pointer hover:brightness-110"
          >
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
          <div className="relative block text-left">
            <img 
              src={underthelineText} 
              alt="UNDERTHELINE" 
              className="h-10 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full flex flex-col items-center justify-center gap-12 px-6">
        <button 
          onClick={() => handleSubsidiaryClick('urbanlink')}
          className={`transition-all duration-700 hover:opacity-70 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <img src={urbanlinkLogo} alt="URBANLINK" className="h-7" />
        </button>

        <button 
          onClick={() => handleSubsidiaryClick('panorama')}
          className={`transition-all duration-700 hover:opacity-70 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <img src={panoramaLogo} alt="PANORAMA" className="h-7" />
        </button>

        <button 
          onClick={() => handleSubsidiaryClick('aradnas')}
          className={`transition-all duration-700 hover:opacity-70 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <img src={aradnasLogo} alt="ARADNAS" className="h-7" />
        </button>

        <button 
          onClick={() => handleSubsidiaryClick('mars')}
          className={`transition-all duration-700 hover:opacity-70 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <img src={marsLogo} alt="MAR/S" className="h-7" />
        </button>

        <div 
          className={`transition-all duration-700 mt-4 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <img src={underthelineText} alt="UNDERTHELINE" className="h-8" />
        </div>
      </div>
    </section>
  );
};

export default SubsidiariesSection;
