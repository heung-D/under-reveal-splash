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
      // 먼저 탭 변경 이벤트 발생
      const event = new CustomEvent('changeSubsidiaryTab', { detail: { tab } });
      window.dispatchEvent(event);
      
      // 섹션 페이드 효과
      detailsSection.style.opacity = '0';
      detailsSection.style.transition = 'opacity 0.3s ease-out';
      
      // 모바일에서는 헤더 높이를 고려해서 스크롤
      const isMobile = window.innerWidth < 768;
      const headerOffset = isMobile ? 100 : 0;
      const elementPosition = detailsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      // 자연스러운 스크롤 애니메이션
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 800;
      let startTime: number | null = null;
      
      // easeOutQuart - 자연스럽게 감속
      const easeOutQuart = (t: number) => {
        return 1 - Math.pow(1 - t, 4);
      };
      
      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        
        window.scrollTo(0, startPosition + distance * easedProgress);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          // 스크롤 완료 후 페이드인
          detailsSection.style.opacity = '1';
        }
      };
      
      requestAnimationFrame(animation);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="flex items-start md:items-center justify-center px-6 md:px-[160px] relative pt-[60px] md:pt-[140px] pb-20 md:pb-20 min-h-screen md:min-h-0"
      style={{ height: 'auto' }}
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
