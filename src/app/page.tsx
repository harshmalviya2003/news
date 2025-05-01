import News from '@/compoenets/News/news';
import { SearchParams } from '@/lib/types';

interface PageProps {
  searchParams: SearchParams;
}

export default function Home({ searchParams }: PageProps) {
  const category = searchParams.category || "";
  const searchQuery = searchParams.q || "";

  return (
    <div>
      <News category={category} searchQuery={searchQuery} />
    </div>
  );
}
