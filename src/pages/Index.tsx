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
import NewsSection from "@/components/NewsSection";
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
    <div className="w-full h-dvh flex flex-col bg-background">
      {/* Header with logo and language selector */}
      <header className="shrink-0 w-full h-20 px-6 md:px-12 flex justify-between items-center border-b border-gray-800/20 bg-background">
        <Logo />

        <DropdownMenu>
          <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors">
            <Globe className="h-5 w-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-background border-border"
          >
            <DropdownMenuItem className="cursor-pointer">
              English
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              한국어
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* Main content - scrollable area */}
      <main className="flex-1 overflow-y-auto snap-container">
        <section className="snap-section">
          <HeroSection />
        </section>
        <section className="snap-section">
          <AboutSection />
        </section>
        <section className="snap-section">
          <WhoWeAreSection />
        </section>
        <section className="snap-section">
          <SubsidiariesSection />
        </section>
        <section className="snap-section">
          <SubsidiaryDetailsSection />
        </section>
        <section className="snap-section">
          <NewsSection />
        </section>
        <section className="snap-section">
          <GlobalNetworkSection />
        </section>
        <section className="snap-section">
          <BrandMessageSection />
        </section>
        <section className="snap-section">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Index;
