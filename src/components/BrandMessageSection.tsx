import { useEffect, useState } from "react";
import Logo from "./Logo";

const BrandMessageSection = () => {
  const [showText, setShowText] = useState(false);
  const [shootingStar, setShootingStar] = useState(false);

  useEffect(() => {
    // Start shooting star animation
    const starTimer = setTimeout(() => {
      setShootingStar(true);
    }, 500);

    // Show text after shooting star passes
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => {
      clearTimeout(starTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <section className="pt-32 pb-12 bg-background relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-1 h-1 bg-foreground/30 rounded-full" style={{ top: '15%', left: '20%' }} />
        <div className="absolute w-1 h-1 bg-foreground/20 rounded-full" style={{ top: '25%', left: '70%' }} />
        <div className="absolute w-1 h-1 bg-foreground/25 rounded-full" style={{ top: '40%', left: '15%' }} />
        <div className="absolute w-0.5 h-0.5 bg-foreground/20 rounded-full" style={{ top: '60%', left: '80%' }} />
        <div className="absolute w-0.5 h-0.5 bg-foreground/15 rounded-full" style={{ top: '70%', left: '30%' }} />
      </div>

      {/* Shooting star */}
      {shootingStar && (
        <div 
          className="absolute top-[35%] left-0 w-full h-[2px] pointer-events-none"
          style={{
            animation: 'shootingStar 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards'
          }}
        >
          <div 
            className="h-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 10%, rgba(147,197,253,0.8) 50%, rgba(59,130,246,1) 70%, transparent 100%)',
              boxShadow: '0 0 20px rgba(59,130,246,0.8), 0 0 40px rgba(59,130,246,0.5)',
            }}
          />
        </div>
      )}

      {/* Brand Message */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-[300px] relative z-10">
        <div 
          className="text-center text-[34px] font-rift transition-opacity duration-[2000ms]" 
          style={{ 
            lineHeight: '120%',
            opacity: showText ? 0.8 : 0
          }}
        >
          <h2 className="font-bold text-foreground">
            Beyond the Line, Behind the Shine
          </h2>
          <p className="text-foreground/80">
            Invisible. Essential.
          </p>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-foreground/20 pt-12 pb-[100px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_auto_auto] gap-8 md:gap-12 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Logo />
              <p className="text-[14px] text-foreground/70 leading-relaxed">
                Beyond the Line, Behind the Shine
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground font-rift">Contact</h3>
              <div className="space-y-2 text-[14px] text-foreground/70">
                <p>Email: info@undertheline.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p className="leading-relaxed">
                  Address: 123 Entertainment Blvd<br />
                  Los Angeles, CA 90001<br />
                  United States
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground font-rift">Family Site</h3>
              <div className="space-y-2 text-[14px] text-foreground/70">
                <p className="hover:text-foreground cursor-pointer transition-colors">Urbanlink 360</p>
                <p className="hover:text-foreground cursor-pointer transition-colors">Urbanlink xyz(400)</p>
                <p className="hover:text-foreground cursor-pointer transition-colors">Panorama</p>
                <p className="hover:text-foreground cursor-pointer transition-colors">Aradnas</p>
                <p className="hover:text-foreground cursor-pointer transition-colors">Mar/s</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-foreground/10">
            <p className="text-center text-[14px] text-foreground/60">
              © {new Date().getFullYear()} Undertheline Holdings. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shootingStar {
          0% {
            transform: translateX(-100%) translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(0);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandMessageSection;
