import { useNavigate } from "react-router-dom";
import NetworkSection from "@/components/NetworkSection";
import { ArrowLeft } from "lucide-react";

const Network = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 w-full h-20 z-50 px-6 md:px-12 flex items-center border-b border-gray-800/20 bg-background">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-rift text-sm">Back</span>
        </button>
      </header>

      {/* Main content */}
      <main>
        <NetworkSection />
      </main>
    </div>
  );
};

export default Network;
