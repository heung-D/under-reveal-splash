import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight, List } from "lucide-react";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import { newsData } from "./News";

const NewsDetail = () => {
  const { id } = useParams();
  const currentIndex = newsData.findIndex((item) => item.id === Number(id));
  const news = newsData[currentIndex];
  const prevNews = currentIndex > 0 ? newsData[currentIndex - 1] : null;
  const nextNews = currentIndex < newsData.length - 1 ? newsData[currentIndex + 1] : null;
  const relatedNews = newsData.filter((item) => item.id !== Number(id)).slice(0, 3);
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
      <main className="flex-1 px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div ref={sectionRef} className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/news" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-16 font-rift text-xs tracking-wider"
          >
            <ArrowLeft size={14} />
            <span>BACK TO NEWS</span>
          </Link>

          {/* Category & Date */}
          <div
            className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-xs font-bold text-primary font-rift tracking-wider">
              {news.category.toUpperCase()}
            </span>
            <span className="text-xs text-muted-foreground">{news.date}</span>
          </div>

          {/* Title */}
          <h1 
            className={`text-xl md:text-2xl lg:text-3xl leading-[1.3] font-bold text-foreground mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            {news.title}
          </h1>

          {/* Featured Image */}
          <div 
            className={`mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
          >
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-12">
              {news.summary}
            </p>
            
            <div className="text-muted-foreground space-y-8 text-sm leading-[1.8]">
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

          {/* Navigation Buttons */}
          <div 
            className={`mt-16 pt-8 border-t border-border transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
          >
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-4">
              {/* Previous Article */}
              {prevNews ? (
                <Link 
                  to={`/news/${prevNews.id}`}
                  className="flex-1 group flex items-center gap-4 p-4 border border-border hover:border-foreground transition-colors"
                >
                  <ArrowLeft size={20} className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                  <div className="min-w-0">
                    <span className="text-xs text-muted-foreground font-rift tracking-wider block mb-1">PREV</span>
                    <p className="text-sm font-bold text-foreground truncate group-hover:underline">{prevNews.title}</p>
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              
              {/* List Button */}
              <Link 
                to="/news"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all font-rift text-sm tracking-wider"
              >
                <List size={18} />
                <span>LIST</span>
              </Link>
              
              {/* Next Article */}
              {nextNews ? (
                <Link 
                  to={`/news/${nextNews.id}`}
                  className="flex-1 group flex items-center justify-end gap-4 p-4 border border-border hover:border-foreground transition-colors text-right"
                >
                  <div className="min-w-0">
                    <span className="text-xs text-muted-foreground font-rift tracking-wider block mb-1">NEXT</span>
                    <p className="text-sm font-bold text-foreground truncate group-hover:underline">{nextNews.title}</p>
                  </div>
                  <ArrowRight size={20} className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>

          {/* Related News Section */}
          <div 
            className={`mt-16 pt-16 border-t border-border transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
          >
            <h2 className="text-lg font-bold text-foreground font-rift mb-10">
              RELATED NEWS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((item) => (
                <Link 
                  key={item.id} 
                  to={`/news/${item.id}`}
                  className="group block"
                >
                  <div className="aspect-[4/3] overflow-hidden mb-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-xs font-bold text-primary font-rift tracking-wider mb-2 block">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="text-sm font-bold text-foreground mb-2 group-hover:underline line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.date}
                  </p>
                </Link>
              ))}
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
