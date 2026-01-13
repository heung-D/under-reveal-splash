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
    date: "Jan 07, 2025",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    category: "Company"
  },
  {
    id: 2,
    title: "New Partnership with Major Entertainment Labels",
    summary: "Strategic partnerships formed with leading entertainment companies to enhance artist development and distribution capabilities.",
    date: "Jan 05, 2025",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    category: "Partnership"
  },
  {
    id: 3,
    title: "DOCE Super App Reaches 1 Million Users",
    summary: "The DOCE super app platform has achieved a significant milestone with over 1 million active users worldwide.",
    date: "Jan 03, 2025",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    category: "Product"
  },
  {
    id: 4,
    title: "Undertheline Q4 2024 Financial Results",
    summary: "Strong quarterly performance with revenue growth exceeding expectations across all business segments.",
    date: "Dec 28, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "Finance"
  },
  {
    id: 5,
    title: "New Artist Signing Announcement",
    summary: "Undertheline welcomes new talented artists to its growing roster of entertainment professionals.",
    date: "Dec 20, 2024",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    category: "Entertainment"
  },
  {
    id: 6,
    title: "Technology Innovation Award 2024",
    summary: "Undertheline recognized for its innovative approach to entertainment technology and digital infrastructure.",
    date: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    category: "Awards"
  }
];

const ITEMS_PER_PAGE = 6;

const News = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNews = newsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="shrink-0 w-full h-20 px-6 md:px-12 flex justify-between items-center border-b border-border bg-background">
        <Logo />
      </header>

      {/* Main content */}
      <main className="flex-1 px-6 md:px-12 py-16">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          {/* Title Section with Line */}
          <div className="flex items-center gap-6 mb-12">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0 animate-fade-slide-up"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="text-[32px] lg:text-[40px] leading-[100%] font-bold text-foreground font-rift whitespace-nowrap">
                LATEST NEWS
              </h1>
            </div>
            
            {/* Horizontal line */}
            <div className="flex-1 overflow-hidden">
              <div
                className={`h-[2px] bg-foreground origin-left transition-all duration-1000 ${
                  isVisible ? "animate-draw-line" : "w-0"
                }`}
                style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
              />
            </div>
          </div>

          {/* 3x2 Card Grid */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
          >
            {currentNews.map((news) => (
              <Link 
                key={news.id} 
                to={`/news/${news.id}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-xs font-bold text-primary font-rift tracking-wider mb-2 block">
                  {news.category.toUpperCase()}
                </span>
                <h2 className="text-base font-bold text-foreground mb-2 group-hover:underline line-clamp-2">
                  {news.title}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {news.date}
                </p>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div 
              className={`flex justify-center items-center gap-2 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
            >
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-rift text-foreground hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                PREV
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 text-sm font-rift transition-colors ${
                    currentPage === page
                      ? "bg-foreground text-background"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-rift text-foreground hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                NEXT
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export { newsData };
export default News;
