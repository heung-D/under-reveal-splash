import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "@/assets/logo.png";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Initial fade in
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2 }
      );

      // Scroll-based fade out
      gsap.to(contentRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: contentRef.current,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <div
        ref={contentRef}
        className="sticky top-0 flex items-center justify-center h-screen px-6"
      >
        <div className="max-w-7xl w-full">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Left side - Logo with line */}
            <div className="flex flex-col items-start space-y-8">
              {/* Horizontal line */}
              <div className="w-full h-[2px] bg-foreground" />

              {/* Logo image */}
              <img
                src={logo}
                alt="Undertheline Holdings"
                className="w-full max-w-md"
              />
            </div>

            {/* Right side - Description text */}
            <div>
              <p className="text-lg md:text-xl font-light leading-[1.4] text-foreground">
                As the hidden engine of the entertainment industry, we deliver
                strategic business solutions that enable our labels and partners
                to achieve their brightest success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
