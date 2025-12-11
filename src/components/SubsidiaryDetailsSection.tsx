import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const SubsidiaryDetailsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("urbanlink");
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleTabChange = (event: CustomEvent) => {
      setActiveTab(event.detail.tab);
    };

    window.addEventListener('changeSubsidiaryTab' as any, handleTabChange);
    
    return () => {
      window.removeEventListener('changeSubsidiaryTab' as any, handleTabChange);
    };
  }, []);

  return (
    <section
      id="subsidiary-details"
      ref={sectionRef}
      className="flex flex-col items-center justify-start px-6 md:px-[160px] pt-0 md:pt-[50px] pb-[80px] md:pb-20 bg-background -mt-[50px] md:-mt-[30px]"
    >
      <div className="w-full max-w-7xl mx-auto">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          {/* Tab Navigation */}
          <TabsList className="w-full bg-transparent border-b border-border rounded-none h-auto p-0 mb-12 md:mb-16 flex items-end justify-center md:gap-8 gap-4 overflow-x-auto scrollbar-hide">
            <TabsTrigger
              value="urbanlink"
              className="relative bg-transparent text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:font-bold data-[state=active]:bg-transparent rounded-none h-[44px] px-2 md:px-4 text-sm md:text-lg font-rift transition-colors data-[state=active]:shadow-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300 whitespace-nowrap flex items-center justify-center"
            >
              URBANLINK
            </TabsTrigger>
            <TabsTrigger
              value="panorama"
              className="relative bg-transparent text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:font-bold data-[state=active]:bg-transparent rounded-none h-[44px] px-2 md:px-4 text-sm md:text-lg font-rift transition-colors data-[state=active]:shadow-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300 whitespace-nowrap flex items-center justify-center"
            >
              PANORAMA
            </TabsTrigger>
            <TabsTrigger
              value="aradnas"
              className="relative bg-transparent text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:font-bold data-[state=active]:bg-transparent rounded-none h-[44px] px-2 md:px-4 text-sm md:text-lg font-rift transition-colors data-[state=active]:shadow-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300 whitespace-nowrap flex items-center justify-center"
            >
              ARADNAS
            </TabsTrigger>
            <TabsTrigger
              value="mars"
              className="relative bg-transparent text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:font-bold data-[state=active]:bg-transparent rounded-none h-[44px] px-2 md:px-4 text-sm md:text-lg font-rift transition-colors data-[state=active]:shadow-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300 whitespace-nowrap flex items-center justify-center"
            >
              MAR/S
            </TabsTrigger>
          </TabsList>

          {/* PANORAMA Tab */}
          <TabsContent value="panorama" className="mt-0">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-20 items-start md:items-center min-h-[400px]">
              <div className="transition-all duration-1000 opacity-100 translate-x-0 text-left w-full md:w-auto">
                <div className="w-[200px] md:w-[300px]">
                  <h2 className="text-[31px] lg:text-[50px] leading-[100%] font-bold text-foreground mb-[4px] font-rift text-left">
                    PANORAMA
                  </h2>
                  <div className="h-1 w-full bg-foreground mb-6"></div>
                  <Button 
                    variant="outline" 
                    className="group"
                    onClick={() => window.open('https://www.panoramamgmt.com', '_blank')}
                  >
                    WEBSITE
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              <div
                className={`space-y-[30px] transition-all duration-1000 delay-200 ${
                  isVisible && activeTab === "panorama"
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-rift">
                    Record Distribution Network
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Partnering with leading record labels worldwide to support the global distribution and promotion of K-POP artists.
                  </p>
                </div>

                <div className="h-px bg-border"></div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-rift">
                    Publishing Network
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Leveraging an extensive global publishing network to maximize copyright income and provide opportunities to collaborate with world-renowned composers and producers.
                  </p>
                </div>

                <div className="h-px bg-border"></div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-rift">
                    Touring Network
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Working closely with global concert agencies and promoters to maximize tour revenue and ensure successful K-POP world tours.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* URBANLINK Tab */}
          <TabsContent value="urbanlink" className="mt-0">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-20 items-start md:items-center min-h-[400px]">
              <div className="transition-all duration-1000 opacity-100 translate-x-0 text-left w-full md:w-auto">
                <div className="w-[200px] md:w-[300px]">
                  <h2 className="text-[31px] lg:text-[50px] leading-[100%] font-bold text-foreground mb-[4px] font-rift text-left">
                    URBANLINK
                  </h2>
                  <div className="h-1 w-full bg-foreground mb-6 md:mb-0"></div>
                </div>
              </div>

              <div
                className={`space-y-[30px] transition-all duration-1000 delay-200 ${
                  isVisible && activeTab === "urbanlink"
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-rift">
                    URBANLINK 400
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                    Driving business expansion through producing projects for global artists and sports icons, supported by Super App publishing.
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    With the participation of Republic Records, URBANLINK 400 strengthens its position as a global entertainment partner—building a large-scale ecosystem that connects music, sports, and digital fandom worldwide.
                  </p>
                </div>

                <div className="h-px bg-border"></div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-rift">
                    URBANLINK 360
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                    Operating Super App platforms for global icons NBA YoungBoy and Nora Fatehi, URBANLINK 360 focuses on building artist-owned ecosystems that merge music, content, and community.
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    As part of the URBANLINK network, the company specializes in developing and operating fandom-based platforms that embody each artist's brand identity and creative vision.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* ARADNAS Tab */}
          <TabsContent value="aradnas" className="mt-0">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-20 items-start md:items-center min-h-[400px]">
              <div className="transition-all duration-1000 opacity-100 translate-x-0 text-left w-full md:w-auto">
                <div className="w-[200px] md:w-[300px]">
                  <h2 className="text-[31px] lg:text-[50px] leading-[100%] font-bold text-foreground mb-[4px] font-rift text-left">
                    ARADNAS
                  </h2>
                  <div className="h-1 w-full bg-foreground mb-6 md:mb-0"></div>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-200 ${
                  isVisible && activeTab === "aradnas"
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-rift">
                    ARADNAS
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                    ARADNAS is a management and creative label dedicated to maximizing artists' visions and creative values.
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Starting with its first artist, Sandara Park, the label is creating new forms of content and brand experiences while expanding its presence in the global market.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* MAR/S Tab */}
          <TabsContent value="mars" className="mt-0">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-20 items-start md:items-center min-h-[400px]">
              <div className="transition-all duration-1000 opacity-100 translate-x-0 text-left w-full md:w-auto">
                <div className="w-[200px] md:w-[300px]">
                  <h2 className="text-[31px] lg:text-[50px] leading-[100%] font-bold text-foreground mb-[4px] font-rift text-left">
                    MAR/S
                  </h2>
                  <div className="h-1 w-full bg-foreground mb-6 md:mb-0"></div>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-200 ${
                  isVisible && activeTab === "mars"
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-rift">
                    MAR/S
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    MAR/S aims to establish a single integrated platform centered on virtual artists, combining content, commerce, and fandom within a unified ecosystem where each artist's IP can independently evolve and expand.
                  </p>
                </div>
              </div>
            </div>
        </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SubsidiaryDetailsSection;
