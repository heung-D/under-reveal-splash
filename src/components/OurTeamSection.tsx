import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import teamRobert from "@/assets/team-robert.png";
import teamHan from "@/assets/team-han.png";
import teamMaurizio from "@/assets/team-maurizio.png";
import teamStavros from "@/assets/team-stavros.png";

import teamMark from "@/assets/team-mark.png";
import teamSanghyun from "@/assets/team-sanghyun-new.png";
import teamCharles from "@/assets/team-charles.png";

const teamMembers = [
  // 1
  {
    name: "Sanghyun Shin",
    role: "Founder",
    title: "Visionary Founder & Innovator",
    description: "As the Founder & CEO of Undertheline Holdings, he lead the global expansion of a next-generation entertainment ecosystem. Powered by proprietary DOCE technology, he unify networks across industries and nations, designing infrastructure where artists, fans, and brands can thrive together.",
    image: teamSanghyun
  },
  // 2
  {
    name: "Robert W. Lewis III",
    role: "CEO, URBANLINK 360\nCEO, URBANLINK 400",
    title: "Highly sought-after producer",
    description: "Robert Lewis is a veteran of the U.S. music industry with over 30 years of experience. He has collaborated with world-renowned artists including Brandy & Monica, Whitney Houston, Destiny's Child, Jennifer Lopez, Beyoncé, Akon, Snoop Dogg, Michael Jackson, Justin Bieber, Lady Gaga, Ariana Grande, The Weeknd, Cardi B, Doja Cat, and many more. He contributes to the expansion of super-app strategies and supports the production and development of artists across all labels under Undertheline.",
    image: teamRobert
  },
  // 3
  {
    name: "Han Kim",
    role: "CEO, Panorama",
    title: "International entertainment law and management leader",
    description: "Han Kim is an international expert with over 15 years in the K-pop and global music industries. A U.S.-licensed attorney recognized among Billboard's Top Music Lawyers, he has worked with SM Entertainment, JYP Entertainment, Kakao, and THEBLACKLABEL. With a Master's degree in Music Business from NYU, he now leads Panorama, connecting K-pop with the global music market through platforms and infrastructure.",
    image: teamHan
  },
  // 5
  {
    name: "Charles Stanton",
    role: "Advisor",
    title: "Industry Expert",
    description: "Bringing valuable expertise and insights to guide strategic initiatives and business development.",
    image: teamCharles
  },
  // 6
  {
    name: "Mark Friedman",
    role: "Strategic Investment Advisor",
    title: "Institutional investor & growth strategist",
    description: "Mark Friedman is a veteran operator and investor with deep experience in consumer brands, e-commerce, and capital markets. He co-founded and led Perfect Fitness to rank #1 in Consumer Products on the INC 500 list, and later founded MF Consulting to advise founders and funds. He previously served on the International Board of YPO, chairing more than 45 global programs, and holds a High-Tech Venture MBA from USC. At Undertheline, he supports U.S. IR, capital structure, and valuation strategy, translating the DOCE ecosystem into a language that institutional investors can underwrite.",
    image: teamMark
  },
  // 7
  {
    name: "Maurizio Romiti",
    role: "Senior Advisor",
    title: "Industry Veteran",
    description: "Providing strategic guidance with decades of experience in international business and entertainment industries.",
    image: teamMaurizio
  },
  // 8
  {
    name: "Stavros Pirounis",
    role: "Strategic Advisor",
    title: "Global Strategy Expert",
    description: "Advising on global market strategies and international expansion opportunities.",
    image: teamStavros
  }
];

const OurTeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const targetScroll = container.clientWidth * index;
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < teamMembers.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

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

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const container = scrollContainerRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const progress = maxScrollLeft > 0 ? (container.scrollLeft / maxScrollLeft) * 100 : 0;
      setScrollProgress(progress);
      
      // Update currentIndex based on scroll position
      const newIndex = Math.round(container.scrollLeft / container.clientWidth);
      setCurrentIndex(newIndex);
    };

    let isScrolling = false;
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    const handleWheel = (e: WheelEvent) => {
      if (!scrollContainerRef.current || isScrolling) return;
      
      // Ignore small scroll movements
      if (Math.abs(e.deltaY) < 30) return;
      
      const container = scrollContainerRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      
      // Check if we're at the boundaries
      const atStart = container.scrollLeft <= 1;
      const atEnd = container.scrollLeft >= maxScrollLeft - 1;
      
      // Only hijack vertical scroll if not at boundaries
      if (e.deltaY !== 0) {
        const currentIdx = Math.round(container.scrollLeft / container.clientWidth);
        
        // If scrolling down and not at end, snap to next
        if (e.deltaY > 0 && !atEnd) {
          e.preventDefault();
          isScrolling = true;
          const newIndex = Math.min(currentIdx + 1, teamMembers.length - 1);
          scrollToIndex(newIndex);
          if (scrollTimeout) clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => { isScrolling = false; }, 800);
        }
        // If scrolling up and not at start, snap to previous
        else if (e.deltaY < 0 && !atStart) {
          e.preventDefault();
          isScrolling = true;
          const newIndex = Math.max(currentIdx - 1, 0);
          scrollToIndex(newIndex);
          if (scrollTimeout) clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => { isScrolling = false; }, 800);
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      container.addEventListener('wheel', handleWheel, { passive: false });
      handleScroll(); // Initial calculation
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <section
      id="our-team"
      ref={sectionRef}
      className="pt-[20px] md:pt-[100px] pb-8 bg-background"
      style={{ minHeight: 'calc(100vh - 100px)' }}
    >
      {/* Title - Hidden on mobile */}
      <div className="hidden md:block px-6 md:px-12 mb-8 text-center">
        <h2 
          className={`text-[31px] lg:text-[50px] leading-[100%] font-bold text-foreground font-rift transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          OUR TEAM
        </h2>
      </div>

      {/* Horizontal Scrollable Team Members */}
      <div className="relative">
        {/* Navigation Buttons - Mobile Only */}
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="md:hidden absolute left-4 top-[140px] z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-background transition-all"
          aria-label="Previous team member"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        
        <button
          onClick={handleNext}
          disabled={currentIndex === teamMembers.length - 1}
          className="md:hidden absolute right-4 top-[140px] z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-background transition-all"
          aria-label="Next team member"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide w-full snap-x snap-mandatory"
        >
          <div className="flex gap-0 min-w-max">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`flex-shrink-0 w-screen min-h-[400px] flex items-start md:items-center justify-center transition-all duration-700 delay-${index * 100} snap-center`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(50px)",
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-start">
                {/* Image Section - Smaller Rectangle */}
                <div className="w-full h-[280px] mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info Section - Two Columns */}
                <div className="w-full flex flex-col md:flex-row justify-between gap-6 md:gap-[100px]">
                  {/* Left Column - Name and Role */}
                  <div className="flex-shrink-0">
                    <h3 className="text-[24px] lg:text-[28px] leading-[100%] font-bold text-foreground mb-1 font-sans">
                      {member.name}
                    </h3>
                    <p className="text-[14px] text-foreground/70 whitespace-pre-line">{member.role}</p>
                  </div>

                  {/* Right Column - Title and Description */}
                  <div className="flex-1 text-left">
                    <h4 className="text-[18px] font-semibold text-foreground mb-2">
                      {member.title}
                    </h4>
                    <p className="text-[15px] text-foreground/80 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Custom Scrollbar */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mt-8">
        <div className="relative w-full h-[2px] bg-border/30">
          <div 
            className="absolute left-0 top-0 h-full bg-foreground transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
