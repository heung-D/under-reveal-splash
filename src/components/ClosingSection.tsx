import { useEffect, useRef, useState } from "react";

const ClosingSection = () => {
  const [lineWidth, setLineWidth] = useState(0);
  const [textPhase, setTextPhase] = useState(0);
  const [contentOpacity, setContentOpacity] = useState(1);
  const [gradientOpacity, setGradientOpacity] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the section
      // Only animate when section is in viewport
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - windowHeight)));

      // Line drawing progress (0.1-0.25) - starts later and slower
      if (scrollProgress >= 0.1 && scrollProgress <= 0.25) {
        const lineProgress = ((scrollProgress - 0.1) / 0.15) * 100;
        setLineWidth(lineProgress);
      } else if (scrollProgress > 0.25) {
        setLineWidth(100);
      } else {
        setLineWidth(0);
      }

      // Gradient opacity - gradually appears as you scroll (0.15-0.5)
      if (scrollProgress >= 0.15 && scrollProgress <= 0.5) {
        setGradientOpacity((scrollProgress - 0.15) * 0.8); // Max 0.28 opacity
      } else if (scrollProgress > 0.5 && scrollProgress < 0.8) {
        setGradientOpacity(0.28);
      } else if (scrollProgress >= 0.8) {
        setGradientOpacity(Math.max(0, 0.28 - (scrollProgress - 0.8) * 1.4));
      } else {
        setGradientOpacity(0);
      }

      // Text phases - much slower transitions with longer hold times
      if (scrollProgress < 0.2) {
        setTextPhase(0); // No text
      } else if (scrollProgress < 0.4) {
        setTextPhase(1); // First text appears and holds
      } else if (scrollProgress < 0.55) {
        setTextPhase(2); // First text fades out
      } else if (scrollProgress < 0.8) {
        setTextPhase(3); // Second text appears and holds longer
      } else {
        setTextPhase(3); // Second text stays
      }

      // Fade out entire content when approaching the end (0.85-1.0)
      if (scrollProgress >= 0.85) {
        const fadeProgress = (scrollProgress - 0.85) / 0.15;
        setContentOpacity(Math.max(0, 1 - fadeProgress));
      } else if (scrollProgress >= 0.1) {
        setContentOpacity(1);
      } else {
        // Fade in at the beginning (0-0.1)
        setContentOpacity(scrollProgress * 10);
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
      className="min-h-[300vh] bg-background flex items-start justify-center relative overflow-hidden"
    >
      {/* Animated gradient backgrounds */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{ opacity: gradientOpacity }}
      >
        {/* Radial gradient from center */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)',
          }}
        />
        {/* Top gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, hsl(var(--primary) / 0.08) 0%, transparent 30%)',
          }}
        />
        {/* Bottom gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(0deg, hsl(var(--primary) / 0.08) 0%, transparent 30%)',
          }}
        />
      </div>

      {/* Fixed content in center of viewport */}
      <div className="sticky top-1/2 -translate-y-1/2 w-full max-w-4xl px-6 transition-opacity duration-1000 relative z-10" style={{ opacity: contentOpacity }}>
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
          <h2
            className="absolute font-bold text-foreground font-rift text-center transition-opacity duration-1500 ease-in-out"
            style={{
              opacity: textPhase === 1 ? 1 : textPhase === 2 ? 0 : 0,
              fontSize: '40px',
            }}
          >
            BEYOND THE LINE, BEHIND THE SHINE
          </h2>

          {/* Second Text: "UNDERTHELINE" */}
          <h2
            className="absolute font-bold text-foreground font-rift transition-opacity duration-1500 ease-in-out"
            style={{
              opacity: textPhase === 3 ? 1 : 0,
              fontSize: '40px',
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
