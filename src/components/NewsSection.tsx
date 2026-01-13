import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { newsData } from "@/pages/News";

const NewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const latestNews = newsData.slice(0, 3);

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
    <div
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-20"
    >
      <div className="max-w-6xl w-full">
        {/* Title with line */}
        <div className="flex items-center gap-6 mb-12">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-[32px] lg:text-[40px] leading-[100%] font-bold text-foreground font-rift whitespace-nowrap">
              LATEST NEWS
            </h2>
          </div>

          <div className="flex-1 overflow-hidden">
            <div
              className={`h-[2px] bg-foreground origin-left transition-all duration-1000 ${
                isVisible ? "animate-draw-line" : "w-0"
              }`}
              style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
            />
          </div>
        </div>

        {/* News Cards Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
        >
          {latestNews.map((news) => (
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
              <h3 className="text-base font-bold text-foreground mb-2 group-hover:underline line-clamp-2">
                {news.title}
              </h3>
              <p className="text-xs text-muted-foreground">{news.date}</p>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div
          className={`flex justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
        >
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors font-rift tracking-wider"
          >
            <span>VIEW ALL NEWS</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
