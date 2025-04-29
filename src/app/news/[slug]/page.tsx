import { fetchNewsById } from '@/lib/fetchData';
import { NewsArticle } from '@/lib/types';

export default async function NewsDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const news: NewsArticle = await fetchNewsById(slug);

  if (!news) {
    return <p className="text-center text-gray-400 py-8">News not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <img src={news.detail.image} alt={news.detail.heading} className="w-full h-96 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold text-white mb-4">{news.detail.heading}</h1>
      <p className="text-lg text-gray-300 mb-4">{news.detail.leadingParagraph}</p>
      {news.detail.paragraphs.map((para: string, index: number) => (
        <p key={index} className="text-gray-400 mb-3">{para}</p>
      ))}
    </div>
  );
}