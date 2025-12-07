import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OurTeamSection from "@/components/OurTeamSection";
import NetworkSection from "@/components/NetworkSection";

const More = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") || "our-team";
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button and tabs */}
      <header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-gray-800/20">
        <div className="h-20 px-6 md:px-12 flex items-center justify-between">
          {/* Back button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-rift text-sm">Back</span>
          </button>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex justify-center">
            <TabsList className="bg-transparent gap-4">
              <TabsTrigger 
                value="our-team" 
                className="font-rift text-base md:text-lg font-bold data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-4 py-2 text-muted-foreground"
              >
                OUR TEAM
              </TabsTrigger>
              <TabsTrigger 
                value="network" 
                className="font-rift text-base md:text-lg font-bold data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-4 py-2 text-muted-foreground"
              >
                NETWORK
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Spacer for balance */}
          <div className="w-[80px]" />
        </div>
      </header>

      {/* Main content */}
      <main className="pt-20">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="our-team" className="mt-0">
            <OurTeamSection />
          </TabsContent>
          <TabsContent value="network" className="mt-0">
            <NetworkSection />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default More;
