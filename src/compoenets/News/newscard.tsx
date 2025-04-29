import Link from 'next/link';
import { Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import { NewsArticle } from '@/lib/types';

const SingleNews = ({ news, isFirst = false }: { news: NewsArticle; isFirst?: boolean }) => {
  return (
    <Link href={`/news/${encodeURIComponent(news.slug)}`}>
      <div
        className={`w-full bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors relative ${
          isFirst ? 'flex flex-col items-center max-w-full h-auto' : 'flex h-[192.76px]'
        }`}
      >
        {/* Text Content (Category and Headline) - Above image for first card */}
        <div
          className={`p-5 ${isFirst ? 'w-full text-center' : 'flex-1 pb-2'}`}
        >
          <p className="text-sm text-gray-400 mb-2">{news.category}</p>
          <h2
            className={`font-semibold text-white line-clamp-3 ${
              isFirst ? 'text-2xl' : 'text-lg'
            }`}
          >
            {news.headline}
          </h2>
          {!isFirst && (
            <div className="flex space-x-3 mt-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
              <LinkIcon className="h-5 w-5 text-gray-400 hover:text-white" />
            </div>
          )}
        </div>

        {/* Image/Video Thumbnail - Below text for first card */}
        <div
          className={`relative ${isFirst ? 'w-full max-w-2xl h-96 mb-4' : 'w-48 h-full'}`}
        >
          {news.thumbnail.type === 'video' ? (
            <div className="relative w-full h-full">
              <img src={news.thumbnail.url} alt="thumbnail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-50 rounded-full p-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-2 right-2 text-white text-xs bg-black bg-opacity-70 px-1 rounded">
                {news.thumbnail.duration}
              </span>
            </div>
          ) : (
            <img src={news.thumbnail.url} alt="thumbnail" className="w-full h-full object-cover" />
          )}
        </div>

        {/* Social Icons for First Card - Below image */}
        {isFirst && (
          <div className="flex space-x-3 mt-4 justify-center">
            <Facebook className="h-5 w-5 text-gray-400 hover:text-white" />
            <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
            <LinkIcon className="h-5 w-5 text-gray-400 hover:text-white" />
          </div>
        )}

        {/* View More Button - Bottom-right for all cards */}
        <div className="absolute bottom-2 left-2">
          <span className="text-sm text-white  hover:bg-blue-500 px-3 py-1 rounded transition-colors">
            View More
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SingleNews;