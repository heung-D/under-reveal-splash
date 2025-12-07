import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SuperAppPublishingSection from "@/components/SuperAppPublishingSection";

const WhatWeDo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-gray-800/20">
        <div className="h-20 px-6 md:px-12 flex items-center justify-between">
          {/* Back button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden md:inline font-rift text-sm">Back</span>
          </button>

          {/* Title */}
          <h1 className="font-rift text-xl md:text-2xl font-bold text-foreground">
            WHAT WE DO
          </h1>

          {/* Spacer for balance */}
          <div className="w-[80px]" />
        </div>
      </header>

      {/* Main content */}
      <main className="pt-20">
        <SuperAppPublishingSection />
      </main>
    </div>
  );
};

export default WhatWeDo;