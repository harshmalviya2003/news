import News from '@/compoenets/News/news';
import { SearchParams } from '@/lib/types';

// Define the PageProps interface with searchParams as a Promise
interface PageProps {
  searchParams: Promise<SearchParams>;
}

export default async function Home({ searchParams }: PageProps) {
  // Resolve the searchParams Promise
  const resolvedSearchParams = await searchParams;
  
  // Safely access properties with fallback
  const category = resolvedSearchParams.category || "";
  const searchQuery = resolvedSearchParams.q || "";

  return (
    <div>
      <News category={category} searchQuery={searchQuery} />
    </div>
  );
}