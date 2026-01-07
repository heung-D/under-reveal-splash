import { Link } from "react-router-dom";

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
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">News</h1>
        <p className="text-lg text-gray-400 mb-12">Latest updates from Undertheline</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <Link 
              key={news.id} 
              to={`/news/${news.id}`}
              className="group block bg-zinc-900 rounded-xl overflow-hidden hover:bg-zinc-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-white/80 bg-white/10 px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                  <span className="text-xs text-gray-500">{news.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {news.title}
                </h2>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {news.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export { newsData };
export default News;
