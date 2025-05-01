import Link from 'next/link';
import { Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import { NewsArticle } from '@/lib/types';
import Image from 'next/image';

const SingleNews = ({ news, isFirst = false }: { news: NewsArticle; isFirst?: boolean }) => {
  return (
    <Link href={`/news/${encodeURIComponent(news.slug)}`} className="block">
      <div
        className={`w-full bg-[#18191A] hover:bg-[#222325] border border-gray-700 overflow-hidden relative ${
          isFirst ? 'flex flex-col items-center max-w-full' : 'flex flex-col sm:flex-row h-auto sm:h-56'
        }`}
      >
        {/* Text Content (Category and Headline) */}
        <div
          className={`p-4 sm:p-6 ${isFirst ? 'w-full text-center' : 'flex-1 border-b sm:border-b-0 sm:border-r border-gray-700'}`}
        >
          <p className="text-xs font-medium text-[#FF8400] mb-2 uppercase tracking-wide">{news.category}</p>
          <h2
            className={`font-bold text-white line-clamp-3 tracking-tight ${
              isFirst ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
            }`}
          >
            {news.headline}
          </h2>
          {!isFirst && (
            <div className="flex space-x-4 mt-4">
              <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
              <Twitter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors" />
              <LinkIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
            </div>
          )}
        </div>

        {/* Image/Video Thumbnail */}
        <div
          className={`relative ${isFirst ? 'w-full max-w-3xl h-64 sm:h-[28rem]' : 'w-full sm:w-72 h-48 sm:h-full'}`}
        >
          {news.thumbnail.type === 'video' ? (
            <div className="relative w-full h-full">
              <Image src={news.thumbnail.url} alt="thumbnail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-60 p-2 sm:p-3 hover:bg-opacity-80 transition-all">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 text-white text-xs sm:text-sm font-medium bg-black bg-opacity-75 px-2 py-1 rounded">
                {news.thumbnail.duration}
              </span>
            </div>
          ) : (
            <Image src={news.thumbnail.url} alt="thumbnail" className="w-full h-full object-cover rounded-b-xl sm:rounded-b-none sm:rounded-r-xl" />
          )}
        </div>

        {/* Social Icons for First Card */}
        {isFirst && (
          <div className="flex space-x-4 mt-4 sm:mt-6 mb-4 justify-center">
            <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-[#FF8400] dark:hover:text-[#FF8400] transition-colors" />
            <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-[#FF8400] dark:hover:text-blue-300 transition-colors" />
            <LinkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
          </div>
        )}

        {/* View More Button */}
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
          <span className="text-xs sm:text-sm font-medium text-white bg-[#FF8400] px-3 sm:px-4 py-1 sm:py-2 rounded-full hover:bg-[#ff8400b9] transition-colors">
            View More
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SingleNews;