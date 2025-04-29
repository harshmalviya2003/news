import News from '@/compoenets/News/news';
import { SearchParams } from '@/lib/types';

export default async function Home({ searchParams }: { searchParams: SearchParams | Promise<SearchParams> }) {
  // Ensure searchParams is resolved if it's a Promise
  const resolvedSearchParams = await Promise.resolve(searchParams);
  
  // Safely access properties with fallback
  const category = resolvedSearchParams.category || "";
  const searchQuery = resolvedSearchParams.q || "";

  return (
    <div>
      <News category={category} searchQuery={searchQuery} />
    </div>
  );
}