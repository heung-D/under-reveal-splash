import { useEffect, useRef, useState } from "react";
import teamRobert from "@/assets/team-robert.png";
import teamHan from "@/assets/team-han.png";
import teamRyan from "@/assets/team-ryan.png";
import teamMaurizio from "@/assets/team-maurizio.png";
import teamStavros from "@/assets/team-stavros.png";

const teamMembers = [
  {
    name: "Robert W. Lewis III",
    role: "Co-Founder",
    title: "Strategic Leader & Innovator",
    description: "As Co-Founder, he brings decades of experience in building global entertainment ecosystems and driving strategic partnerships across industries.",
    image: teamRobert
  },
  {
    name: "Han Kim",
    role: "Chief Technology Officer",
    title: "Technology Pioneer",
    description: "Leading our technology vision and implementing cutting-edge solutions that power our global entertainment infrastructure.",
    image: teamHan
  },
  {
    name: "Ryan Jang",
    role: "Chief Operating Officer",
    title: "Operations Excellence",
    description: "Driving operational excellence and ensuring seamless execution of our global expansion strategy.",
    image: teamRyan
  },
  {
    name: "Maurizio Romiti",
    role: "Senior Advisor",
    title: "Industry Veteran",
    description: "Providing strategic guidance with decades of experience in international business and entertainment industries.",
    image: teamMaurizio
  },
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
      
      // Check if scrolled to the end
      const atEnd = container.scrollLeft >= maxScrollLeft - 5;
      
      if (atEnd && progress > 95) {
        // Auto-scroll to next section after reaching the end
        setTimeout(() => {
          const closingSection = document.getElementById('closing-section');
          if (closingSection) {
            closingSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!scrollContainerRef.current) return;
      
      const container = scrollContainerRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      
      // Check if we're at the boundaries
      const atStart = container.scrollLeft === 0;
      const atEnd = container.scrollLeft >= maxScrollLeft - 1;
      
      // Only hijack horizontal scroll if not at boundaries
      if (e.deltaY !== 0) {
        // If scrolling down and not at end, convert to horizontal scroll
        if (e.deltaY > 0 && !atEnd) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
        // If scrolling up and not at start, convert to horizontal scroll
        else if (e.deltaY < 0 && !atStart) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
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
      className="pt-[140px] pb-12 bg-background"
      style={{ minHeight: 'calc(100vh - 100px)' }}
    >
      {/* Title */}
      <div className="px-6 md:px-12 mb-16 text-center">
        <h2 
          className={`text-[50px] font-bold text-foreground font-rift transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          OUR TEAM
        </h2>
      </div>

      {/* Horizontal Scrollable Team Members */}
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide w-full"
      >
        <div className="flex gap-0 min-w-max">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`flex-shrink-0 w-screen min-h-[400px] flex items-center justify-center transition-all duration-700 delay-${index * 100}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(50px)",
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="max-w-[1880px] mx-auto px-6 md:px-12 flex flex-col items-start">
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
                    <h3 className="text-[32px] font-bold text-foreground mb-0 font-rift">
                      {member.name}
                    </h3>
                    <p className="text-xl text-foreground/70">{member.role}</p>
                  </div>

                  {/* Right Column - Title and Description */}
                  <div className="flex-1 text-left">
                    <h4 className="text-[17px] font-semibold text-foreground mb-0.5">
                      {member.title}
                    </h4>
                    <p className="text-[17px] text-foreground/80 leading-snug tracking-tight">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Scrollbar */}
      <div className="px-6 md:px-12 mt-8">
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
