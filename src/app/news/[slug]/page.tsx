import { fetchNewsById } from '@/lib/fetchData';
import { NewsArticle } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import blogsData from "@/data/blogData.json";

type Blog = {
  id: number;
  slug: string;
  title: string;
  category: string;
  thumbnail: { url: string; type: string };
  shortDescription: string;
};

// Define the PageProps interface with params as a Promise
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetail({ params }: PageProps) {
  const { slug } = await params; // Await the params to get the slug
  const news: NewsArticle = await fetchNewsById(slug);
  const blogs: Blog[] = blogsData.slice(0, 4); // Select first 4 blogs

  if (!news) {
    return <p className="text-center text-gray-500 dark:text-gray-400 py-8">News not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 bg-gray-100 dark:bg-black">
      {/* News Detail Content */}
      <div className="max-w-3xl mx-auto">
        <img
          src={news.detail.image}
          alt={news.detail.heading}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {news.detail.heading}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          {news.detail.leadingParagraph}
        </p>
        {news.detail.paragraphs.map((para: string, index: number) => (
          <p key={index} className="text-gray-600 dark:text-gray-400 mb-3">
            {para}
          </p>
        ))}
      </div>

      {/* Blog Cards Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Related Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogs.map((blog: Blog) => (
            <Link
              key={blog.id}
              href={`/blog/${encodeURIComponent(blog.slug)}`}
              className="block"
            >
              <div className="w-full bg-white dark:bg-[#18191A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-96">
                {/* Thumbnail */}
                <div className="relative w-full h-48">
                  <Image
                    src={blog.thumbnail.url}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                </div>
                {/* Text Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium text-blue-600 mb-2 uppercase tracking-wide">
                      {blog.category}
                    </p>
                    <h3 className="font-bold text-gray-900 dark:text-white text-xl line-clamp-2 tracking-tight">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                      {blog.shortDescription}
                    </p>
                  </div>
                  <div className="flex space-x-4 mt-4">
                    <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-600 transition-colors" />
                    <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 transition-colors" />
                    <LinkIcon className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  </div>
                </div>
                {/* Read More Button */}
                <div className="p-4">
                  <span className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}