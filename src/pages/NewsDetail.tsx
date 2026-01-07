import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import { newsData } from "./News";

const NewsDetail = () => {
  const { id } = useParams();
  const news = newsData.find((item) => item.id === Number(id));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
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

  if (!news) {
    return (
      <div className="w-full min-h-screen flex flex-col bg-background">
        <header className="shrink-0 w-full h-20 px-6 md:px-12 flex justify-between items-center border-b border-border bg-background">
          <Logo />
        </header>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-[39px] lg:text-[44px] font-bold font-rift text-foreground mb-4">
              NEWS NOT FOUND
            </h1>
            <Link 
              to="/news" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-rift"
            >
              <ArrowLeft size={20} />
              <span>BACK TO NEWS</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="shrink-0 w-full h-20 px-6 md:px-12 flex justify-between items-center border-b border-border bg-background">
        <Logo />
      </header>

      {/* Main content */}
      <main className="flex-1 px-6 md:px-12 py-12">
        <div ref={sectionRef} className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/news" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 font-rift text-sm"
          >
            <ArrowLeft size={16} />
            <span>BACK TO NEWS</span>
          </Link>

          {/* Title Section with Line */}
          <div className="flex flex-col items-start mb-8">
            {/* Horizontal line */}
            <div className="w-full max-w-[150px] overflow-hidden mb-[6px]">
              <div
                className={`h-[3px] bg-foreground origin-left transition-all duration-1000 ${
                  isVisible ? "animate-draw-line" : "w-0"
                }`}
              />
            </div>

            {/* Category & Date */}
            <div
              className={`flex items-center gap-4 mb-4 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
            >
              <span className="text-sm font-bold text-foreground font-rift border border-foreground px-4 py-1">
                {news.category.toUpperCase()}
              </span>
              <span className="text-sm text-muted-foreground">{news.date}</span>
            </div>

            {/* Title */}
            <h1 
              className={`text-2xl md:text-4xl lg:text-[44px] leading-[1.1] font-bold text-foreground transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
            >
              {news.title}
            </h1>
          </div>

          {/* Featured Image */}
          <div 
            className={`aspect-video overflow-hidden mb-10 border border-border transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
          >
            <img 
              src={news.image} 
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "900ms" : "0ms" }}
          >
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              {news.summary}
            </p>
            
            <div className="text-muted-foreground space-y-6 text-sm md:text-base leading-[1.6]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewsDetail;
