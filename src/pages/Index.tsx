import Logo from "@/components/Logo";
import HeroSection from "@/components/HeroSection";
import SubsidiariesSection from "@/components/SubsidiariesSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import SubsidiaryDetailsSection from "@/components/SubsidiaryDetailsSection";
import SuperAppPublishingSection from "@/components/SuperAppPublishingSection";
import OurTeamSection from "@/components/OurTeamSection";

import Footer from "@/components/Footer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with logo and language selector */}
      <header className="fixed top-0 left-0 w-full h-20 z-50 px-6 md:px-12 flex justify-between items-center border-b border-gray-800/20 bg-background">
        <Logo />
        
        <DropdownMenu>
          <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors">
            <Languages className="h-5 w-5" />
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
        <SubsidiariesSection />
        <WhoWeAreSection />
        <SubsidiaryDetailsSection />
        <SuperAppPublishingSection />
        <OurTeamSection />
        
      </main>

      <Footer />
    </div>
  );
};

export default Index;
