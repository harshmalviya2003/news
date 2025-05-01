import SingleNews from './newscard';
import { fetchNewsFromBackend } from '@/lib/fetchData';
import { NewsArticle } from '@/lib/types';

export default async function News({
  category = "",
  searchQuery = "",
}: {
  category?: string;
  searchQuery?: string;
}) {
  let newsData: NewsArticle[];

  try {
    newsData = await fetchNewsFromBackend(category, searchQuery);

    // Optional: Handle empty data with a custom fallback
    if (!newsData || newsData.length === 0) {
      throw new Error("No news articles found.");
    }

  } catch (error) {
    // This will trigger the global error page (app/error.tsx)
    throw new Error("Failed to fetch news from backend.");
  }

  return (
    <div className="flex flex-col items-center bg-[#18191A] min-h-screen px-4 sm:px-0">
      {newsData.map((news: NewsArticle, index: number) => (
        <div key={news.id} className="w-full max-w-5xl">
          <SingleNews news={news} isFirst={index === 0} />
        </div>
      ))}
    </div>
  );
}
