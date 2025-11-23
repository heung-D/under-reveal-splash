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
    <section className="pt-32 pb-12 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)'
    }}>
      {/* Background constellation */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0 }}>
          {/* Constellation lines */}
          <line x1="20%" y1="15%" x2="15%" y2="40%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="15%" y1="40%" x2="30%" y2="70%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="70%" y1="25%" x2="80%" y2="60%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="20%" y1="15%" x2="70%" y2="25%" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        </svg>
        
        {/* Stars */}
        <div className="absolute w-1.5 h-1.5 bg-white/50 rounded-full" style={{ top: '15%', left: '20%' }} />
        <div className="absolute w-1.5 h-1.5 bg-white/40 rounded-full" style={{ top: '25%', left: '70%' }} />
        <div className="absolute w-1.5 h-1.5 bg-white/45 rounded-full" style={{ top: '40%', left: '15%' }} />
        <div className="absolute w-1 h-1 bg-white/35 rounded-full" style={{ top: '60%', left: '80%' }} />
        <div className="absolute w-1.5 h-1.5 bg-white/35 rounded-full" style={{ top: '70%', left: '30%' }} />
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
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 10%, rgba(147,197,253,0.9) 50%, rgba(96,165,250,1) 70%, transparent 100%)',
              boxShadow: '0 0 30px rgba(96,165,250,1), 0 0 60px rgba(59,130,246,0.8), 0 0 90px rgba(59,130,246,0.5)',
            }}
          />
        </div>
      )}

      {/* Brand Message */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-[200px] relative z-10 mt-[120px]">
        <div 
          className="text-center text-[20px] font-rift transition-opacity duration-[2000ms]" 
          style={{ 
            lineHeight: '120%',
            opacity: showText ? 0.8 : 0
          }}
        >
          <h2 className="font-bold text-white">
            Beyond the Line, Behind the Shine
          </h2>
          <p className="text-white/80">
            Invisible. Essential.
          </p>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-white/20 pt-12 pb-[100px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_auto_auto] gap-8 md:gap-12 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Logo />
              <p className="text-[14px] text-white/70 leading-relaxed">
                Beyond the Line, Behind the Shine
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white font-rift">Contact</h3>
              <div className="space-y-2 text-[14px] text-white/70">
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
              <h3 className="text-lg font-bold text-white font-rift">Family Site</h3>
              <div className="space-y-2 text-[14px] text-white/70">
                <p className="hover:text-white cursor-pointer transition-colors">Urbanlink 360</p>
                <p className="hover:text-white cursor-pointer transition-colors">Urbanlink xyz(400)</p>
                <p className="hover:text-white cursor-pointer transition-colors">Panorama</p>
                <p className="hover:text-white cursor-pointer transition-colors">Aradnas</p>
                <p className="hover:text-white cursor-pointer transition-colors">Mar/s</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-center text-[14px] text-white/60">
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
