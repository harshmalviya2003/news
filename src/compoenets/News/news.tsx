import SingleNews from './newscard';
import { fetchNewsFromBackend } from '@/lib/fetchData';
import { NewsArticle } from '@/lib/types';

export default async function News({ category = "", searchQuery = "" }: { category?: string; searchQuery?: string }) { 
  const newsData: NewsArticle[] = await fetchNewsFromBackend(category, searchQuery);

  return (
    <div className="flex flex-col items-center bg-[#18191A] min-h-screen px-4 sm:px-0">
      {newsData.map((news: NewsArticle, index: number) => (
        <div key={news.id} className="w-full max-w-5xl ">
          <SingleNews news={news} isFirst={index === 0} />
        </div>
      ))}
    </div>
  );
}