import { useEffect, useRef, useState } from "react";
import closingText1 from "@/assets/closing-text-1.png";
import closingText2 from "@/assets/closing-text-2.png";

const ClosingSection = () => {
  const [lineWidth, setLineWidth] = useState(0);
  const [textPhase, setTextPhase] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollProgress = -rect.top / (sectionHeight - window.innerHeight);

      // Line drawing progress (0-0.2)
      if (scrollProgress >= 0 && scrollProgress <= 0.2) {
        const lineProgress = (scrollProgress / 0.2) * 100;
        setLineWidth(lineProgress);
      } else if (scrollProgress > 0.2) {
        setLineWidth(100);
      } else {
        setLineWidth(0);
      }

      // Text phases
      if (scrollProgress < 0.3) {
        setTextPhase(0); // No text
      } else if (scrollProgress < 0.5) {
        setTextPhase(1); // First text appears
      } else if (scrollProgress < 0.7) {
        setTextPhase(2); // First text fades out
      } else if (scrollProgress < 0.9) {
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
      className="min-h-[200vh] bg-background flex items-start justify-center pt-40"
    >
      <div className="sticky top-1/2 -translate-y-1/2 w-full max-w-4xl px-6">
        {/* Line Animation */}
        <div className="mb-[20px] flex justify-center">
          <div
            className="h-1 bg-foreground transition-all duration-1000 ease-out max-w-[50%]"
            style={{
              width: `${lineWidth}%`,
            }}
          />
        </div>

        {/* Text Content */}
        <div className="relative min-h-[100px] flex items-center justify-center">
          {/* First Text: "BEYOND THE LINE, BEHIND THE SHINE" */}
          <img
            src={closingText1}
            alt="BEYOND THE LINE, BEHIND THE SHINE"
            className="absolute max-w-[50%] h-auto transition-opacity duration-700"
            style={{
              opacity: textPhase === 1 ? 1 : textPhase === 2 ? 0 : 0,
            }}
          />

          {/* Second Text: "UNDERTHELINE" */}
          <img
            src={closingText2}
            alt="UNDERTHELINE"
            className="absolute max-w-[50%] h-auto transition-opacity duration-700"
            style={{
              opacity: textPhase === 3 ? 1 : 0,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
