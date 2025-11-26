import { useEffect } from "react";
import Logo from "@/components/Logo";
import HeroSection from "@/components/HeroSection";
import SubsidiariesSection from "@/components/SubsidiariesSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import SubsidiaryDetailsSection from "@/components/SubsidiaryDetailsSection";
import BrandMessageSection from "@/components/BrandMessageSection";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-background overflow-y-auto snap-container"
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
        <section className="snap-section">
          <HeroSection />
        </section>
        <section className="snap-section">
          <SubsidiariesSection />
        </section>
        <section className="snap-section">
          <WhoWeAreSection />
        </section>
        <section className="snap-section">
          <SubsidiaryDetailsSection />
        </section>
        <section className="snap-section">
          <BrandMessageSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
