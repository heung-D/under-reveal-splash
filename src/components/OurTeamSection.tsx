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
    const handleWheel = (e: WheelEvent) => {
      if (!scrollContainerRef.current) return;
      
      const container = scrollContainerRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      
      // Check if we're at the boundaries
      const atStart = container.scrollLeft === 0;
      const atEnd = container.scrollLeft >= maxScrollLeft - 1;
      
      // Only hijack scroll if we're scrolling horizontally or within the section
      if (e.deltaY !== 0) {
        // If scrolling down and not at end, or scrolling up and not at start
        if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <section
      id="our-team"
      ref={sectionRef}
      className="py-20 bg-background"
    >
      {/* Title */}
      <div className="px-6 md:px-12 mb-[40px] text-center">
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
        className="overflow-x-auto overflow-y-hidden"
      >
        <div className="flex gap-0 min-w-max">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`flex-shrink-0 w-screen min-h-[600px] flex items-center justify-center transition-all duration-700 delay-${index * 100}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(50px)",
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="max-w-[1880px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-[40px]">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-[500px] border-b border-foreground/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info Section */}
                <div className="w-full md:w-1/2 space-y-8">
                  <div>
                    <h3 className="text-[36px] font-bold text-foreground mb-1 font-rift">
                      {member.name}
                    </h3>
                    <p className="text-xl text-foreground/70">{member.role}</p>
                  </div>

                  <div>
                    <h4 className="text-[20px] font-semibold text-foreground mb-2">
                      {member.title}
                    </h4>
                    <p className="text-[17px] text-foreground/80 leading-relaxed tracking-tight">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
