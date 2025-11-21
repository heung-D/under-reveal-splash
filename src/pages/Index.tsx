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
import { Globe } from "lucide-react";
import { useBrakeScroll } from "@/hooks/useBrakeScroll";

const Index = () => {
  const { registerSection } = useBrakeScroll();

  return (
    <div className="min-h-screen bg-background">
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
        <section ref={registerSection}>
          <HeroSection />
        </section>
        <section ref={registerSection}>
          <SubsidiariesSection />
        </section>
        <section ref={registerSection}>
          <WhoWeAreSection />
        </section>
        <section ref={registerSection}>
          <SubsidiaryDetailsSection />
        </section>
        <section ref={registerSection}>
          <SuperAppPublishingSection />
        </section>
        <section ref={registerSection}>
          <OurTeamSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
