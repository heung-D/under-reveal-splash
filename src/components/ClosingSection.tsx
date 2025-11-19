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
      const scrollProgress = -rect.top / (sectionHeight - window.innerHeight);

      // Line drawing progress (0-0.15) - slower
      if (scrollProgress >= 0 && scrollProgress <= 0.15) {
        const lineProgress = (scrollProgress / 0.15) * 100;
        setLineWidth(lineProgress);
      } else if (scrollProgress > 0.15) {
        setLineWidth(100);
      } else {
        setLineWidth(0);
      }

      // Gradient opacity - gradually appears as you scroll
      if (scrollProgress >= 0 && scrollProgress <= 0.5) {
        setGradientOpacity(scrollProgress * 0.6); // Max 0.3 opacity
      } else if (scrollProgress > 0.5) {
        setGradientOpacity(Math.min(0.3, (scrollProgress - 0.5) * 0.4 + 0.3));
      } else {
        setGradientOpacity(0);
      }

      // Text phases - much slower transitions
      if (scrollProgress < 0.25) {
        setTextPhase(0); // No text
      } else if (scrollProgress < 0.45) {
        setTextPhase(1); // First text appears
      } else if (scrollProgress < 0.6) {
        setTextPhase(2); // First text fades out
      } else if (scrollProgress < 0.85) {
        setTextPhase(3); // Second text appears
      } else {
        setTextPhase(3); // Second text stays
      }

      // Fade out entire content when approaching the end - slower and later
      if (scrollProgress >= 0.9) {
        const fadeProgress = (scrollProgress - 0.9) / 0.1; // 0.9 to 1.0
        setContentOpacity(Math.max(0, 1 - fadeProgress));
      } else {
        setContentOpacity(1);
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
      className="min-h-[250vh] bg-background flex items-start justify-center pt-40 relative overflow-hidden"
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
            className="absolute font-bold text-foreground font-rift text-center transition-opacity duration-1000"
            style={{
              opacity: textPhase === 1 ? 1 : textPhase === 2 ? 0 : 0,
              fontSize: '40px',
            }}
          >
            BEYOND THE LINE, BEHIND THE SHINE
          </h2>

          {/* Second Text: "UNDERTHELINE" */}
          <h2
            className="absolute font-bold text-foreground font-rift transition-opacity duration-1000"
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
