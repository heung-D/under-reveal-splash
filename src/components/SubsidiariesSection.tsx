import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import undertheline from "@/assets/undertheline-text.png";
import aradnas from "@/assets/aradnas.png";
import mars from "@/assets/mars.png";
import panorama from "@/assets/panorama.png";
import urbanlink from "@/assets/urbanlink.png";

gsap.registerPlugin(ScrollTrigger);

const SubsidiariesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: contentRef.current,
        },
      });

      tl.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.2 }
      ).to(contentRef.current, { 
        opacity: 0, 
        y: -30,
        duration: 0.5 
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const subsidiaries = [
    { name: "PANORAMA", logo: panorama, position: "top-left" },
    { name: "URBANLINK", logo: urbanlink, position: "middle-left" },
    { name: "ARADNAS", logo: aradnas, position: "top-right" },
    { name: "MAR/S", logo: mars, position: "middle-right" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh]"
    >
      <div 
        ref={contentRef}
        className="sticky top-0 h-screen flex items-center justify-center px-6 md:px-12"
      >
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Center - Undertheline Logo */}
          <div className="flex justify-center mb-20">
            <img
              src={undertheline}
              alt="UNDERTHELINE"
              className="h-12 md:h-16"
            />
          </div>

          {/* Subsidiaries Grid */}
          <div className="relative">
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full" />

            {/* Lines and Logos */}
            <div className="grid grid-cols-2 gap-x-32 gap-y-20 max-w-4xl mx-auto relative">
              {subsidiaries.map((subsidiary) => (
                <div
                  key={subsidiary.name}
                  className={`relative ${
                    subsidiary.position === "top-left" ||
                    subsidiary.position === "middle-left"
                      ? "text-right pr-8"
                      : "text-left pl-8"
                  }`}
                >
                  {/* Line from center */}
                  <svg
                    className="absolute"
                    style={{
                      top: "50%",
                      [subsidiary.position.includes("left") ? "right" : "left"]:
                        "100%",
                      width: subsidiary.position.includes("left")
                        ? "calc(50vw - 50%)"
                        : "calc(50vw - 50%)",
                      height: "2px",
                    }}
                  >
                    <line
                      x1={subsidiary.position.includes("left") ? "100%" : "0"}
                      y1="1"
                      x2={subsidiary.position.includes("left") ? "0" : "100%"}
                      y2="1"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </svg>

                  {/* Logo */}
                  <button className="transition-transform duration-200 hover:scale-105">
                    <img
                      src={subsidiary.logo}
                      alt={subsidiary.name}
                      className="h-8 md:h-10 inline-block"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsidiariesSection;
