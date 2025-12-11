import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "@/components/Logo";
import HeroSection from "@/components/HeroSection";
import SubsidiariesSection from "@/components/SubsidiariesSection";
import AboutSection from "@/components/AboutSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import SubsidiaryDetailsSection from "@/components/SubsidiaryDetailsSection";
import BrandMessageSection from "@/components/BrandMessageSection";
import GlobalNetworkSection from "@/components/GlobalNetworkSection";
import Footer from "@/components/Footer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [location]);

  return (
    <div 
      className="min-h-screen bg-background overflow-y-auto"
      style={{
        scrollPaddingTop: '140px'
      }}
    >
      {/* Header with logo and language selector */}
      <header className="fixed top-0 left-0 w-full h-20 z-50 px-6 md:px-12 flex justify-between items-center border-b border-gray-800/20 bg-background">
        <Logo />
        
        <DropdownMenu>
          <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors">
            <Globe className="h-5 w-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-background border-border">
            <DropdownMenuItem className="cursor-pointer">
              English
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              한국어
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <WhoWeAreSection />
        <SubsidiariesSection />
        <SubsidiaryDetailsSection />
        <GlobalNetworkSection />
        <BrandMessageSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
