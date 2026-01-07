import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  image: string;
  category: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Undertheline Announces Global Expansion",
    summary: "Undertheline is expanding its operations to new markets across Asia and Europe, strengthening its global entertainment infrastructure.",
    date: "2025-01-07",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    category: "Company"
  },
  {
    id: 2,
    title: "New Partnership with Major Entertainment Labels",
    summary: "Strategic partnerships formed with leading entertainment companies to enhance artist development and distribution capabilities.",
    date: "2025-01-05",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    category: "Partnership"
  },
  {
    id: 3,
    title: "DOCE Super App Reaches 1 Million Users",
    summary: "The DOCE super app platform has achieved a significant milestone with over 1 million active users worldwide.",
    date: "2025-01-03",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    category: "Product"
  },
  {
    id: 4,
    title: "Undertheline Q4 2024 Financial Results",
    summary: "Strong quarterly performance with revenue growth exceeding expectations across all business segments.",
    date: "2024-12-28",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "Finance"
  },
  {
    id: 5,
    title: "New Artist Signing Announcement",
    summary: "Undertheline welcomes new talented artists to its growing roster of entertainment professionals.",
    date: "2024-12-20",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    category: "Entertainment"
  },
  {
    id: 6,
    title: "Technology Innovation Award 2024",
    summary: "Undertheline recognized for its innovative approach to entertainment technology and digital infrastructure.",
    date: "2024-12-15",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    category: "Awards"
  }
];

const News = () => {
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

  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="shrink-0 w-full h-20 px-6 md:px-12 flex justify-between items-center border-b border-border bg-background">
        <Logo />
      </header>

      {/* Main content */}
      <main className="flex-1 px-6 md:px-12 py-16">
        <div ref={sectionRef} className="max-w-7xl mx-auto">
          {/* Title Section with Line */}
          <div className="flex flex-col items-start mb-16">
            {/* Horizontal line */}
            <div className="w-full max-w-[200px] overflow-hidden mb-[6px]">
              <div
                className={`h-[3px] bg-foreground origin-left transition-all duration-1000 ${
                  isVisible ? "animate-draw-line" : "w-0"
                }`}
              />
            </div>

            {/* Title */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0 animate-fade-slide-up"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
            >
              <h1 className="text-[39px] lg:text-[44px] leading-[100%] font-bold text-foreground font-rift">
                NEWS
              </h1>
            </div>
          </div>

          {/* News Grid */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
          >
            {newsData.map((news) => (
              <Link 
                key={news.id} 
                to={`/news/${news.id}`}
                className="group block border border-border bg-background hover:border-foreground transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-foreground font-rift border border-foreground px-3 py-1">
                      {news.category.toUpperCase()}
                    </span>
                    <span className="text-xs text-muted-foreground">{news.date}</span>
                  </div>
                  <h2 className="text-lg font-bold mb-2 text-foreground group-hover:underline transition-colors line-clamp-2">
                    {news.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {news.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export { newsData };
export default News;
