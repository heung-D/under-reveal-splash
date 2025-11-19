import { useEffect, useRef, useState } from "react";

const ClosingSection = () => {
  const [lineWidth, setLineWidth] = useState(0);
  const [textPhase, setTextPhase] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start line animation
          setTimeout(() => {
            setLineWidth(100);
          }, 300);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollProgress = -rect.top / (sectionHeight - window.innerHeight);

      if (scrollProgress < 0.2) {
        setTextPhase(0); // No text
      } else if (scrollProgress < 0.4) {
        setTextPhase(1); // First text appears
      } else if (scrollProgress < 0.6) {
        setTextPhase(2); // First text fades out
      } else if (scrollProgress < 0.8) {
        setTextPhase(3); // Second text appears
      } else {
        setTextPhase(3); // Second text stays
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTextOpacity = (phase: number) => {
    if (textPhase === phase) return 1;
    if (textPhase === phase - 1 || textPhase === phase + 1) return 0.3;
    return 0;
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-[300vh] bg-background flex items-start justify-center pt-40"
    >
      <div className="sticky top-1/2 -translate-y-1/2 w-full max-w-4xl px-6">
        {/* Line Animation */}
        <div className="mb-12 flex justify-center">
          <div
            className="h-1 bg-foreground transition-all duration-1000 ease-out"
            style={{
              width: `${lineWidth}%`,
            }}
          />
        </div>

        {/* Text Content */}
        <div className="relative min-h-[100px] flex items-center justify-center">
          {/* First Text: "BEYOND THE LINE, BEHIND THE SHINE" */}
          <h2
            className="absolute text-3xl md:text-5xl font-bold text-foreground text-center transition-opacity duration-700"
            style={{
              opacity: textPhase === 1 ? 1 : textPhase === 2 ? 0 : 0,
            }}
          >
            BEYOND THE LINE, BEHIND THE SHINE
          </h2>

          {/* Second Text: "UNDERTHELINE" */}
          <h2
            className="absolute text-4xl md:text-6xl font-bold text-foreground text-center transition-opacity duration-700"
            style={{
              opacity: textPhase === 3 ? 1 : 0,
            }}
          >
            UNDERTHELINE
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
