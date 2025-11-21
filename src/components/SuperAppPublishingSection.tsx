import { useEffect, useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import doceOsLineImage from "@/assets/doce-os-line.png";
import entLogosImage from "@/assets/ent-logos.png";

const SuperAppPublishingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
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

  return (
    <div 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #E6E6E6 100%)'
      }}
    >

      <div className="w-full relative z-10 flex flex-col items-center">
        <Tabs defaultValue="tab1" className="w-full" onValueChange={setActiveTab}>
          {/* Tab Title Images */}
          <div
            className={`transition-all duration-1000 mb-12 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            <TabsList className="bg-transparent p-0 h-auto gap-8 mb-16 flex justify-center items-center border-b border-border w-full rounded-none">
              <TabsTrigger 
                value="tab1" 
                className="relative bg-transparent p-0 pb-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-none cursor-pointer font-rift text-base md:text-lg transition-colors data-[state=inactive]:text-muted-foreground data-[state=active]:font-bold data-[state=active]:text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300"
              >
                SUPER APP PUBLISHING
              </TabsTrigger>
              <TabsTrigger 
                value="tab2"
                className="relative bg-transparent p-0 pb-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-none cursor-pointer font-rift text-base md:text-lg transition-colors data-[state=inactive]:text-muted-foreground data-[state=active]:font-bold data-[state=active]:text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300"
              >
                ENT. INFRA & MANAGEMENT
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content */}
          <TabsContent value="tab1" className="mt-0 w-full max-w-[856px] mx-auto min-h-[600px]">
            {/* Title */}
            <div
              className={`mb-8 flex justify-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-rift">
                SUPER APP PUBLISHING
              </h2>
            </div>
            
            <div
              className={`text-center space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
            >
              <p className="text-sm md:text-base leading-[1.4] text-foreground w-full mx-auto">
                UNDERTHELINE holds the exclusive DOCE OS licensing rights for the U.S. region, enabling artists and creators to own, design, and operate their own independent platforms through DOCE-powered publishing. Each app becomes a personal community and ecosystem where the artist is the true owner -operating fandom, commerce, and content directly under their own control. → An "Entertainment OS" that bridges real-world entertainment infrastructure with digital platforms.
              </p>
            </div>

            {/* DOCE OS Line Image */}
            <div
              className={`mt-[40px] flex justify-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "900ms" : "0ms" }}
            >
              <img src={doceOsLineImage} alt="DOCE OS" className="w-full max-w-[856px]" />
            </div>
          </TabsContent>

          <TabsContent value="tab2" className="mt-0 w-full max-w-[856px] mx-auto min-h-[600px]">
            {/* Title */}
            <div
              className={`mb-8 flex justify-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-rift text-center">
                GLOBAL ENTERTAINMENT INFRASTRUCTURE
              </h2>
            </div>
            
            <div
              className={`text-center space-y-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
            >
              <p className="text-sm md:text-base leading-[1.4] text-foreground w-full mx-auto">
                UNDERTHELINE collaborates with global record labels, management companies, publishing networks, and touring agencies based in Los Angeles and New York, building a global entertainment infrastructure. Record Distribution: Collaborates with major global labels including Columbia, Warner, Universal, and Sony. Publishing Network: Connected with global publishers such as Warner Chappell, BMG, and Kobalt. Touring Network: Partners with Live Nation, AEG, and CAA to operate global touring and live performance networks.
              </p>
            </div>

            {/* Logos Image */}
            <div
              className={`mt-12 flex justify-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
            >
              <img src={entLogosImage} alt="Entertainment Infrastructure Logos" className="w-full max-w-[600px]" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SuperAppPublishingSection;
