import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import blogsData from "@/data/blogData.json"

type Blog = {
  id: number;
  slug: string;
  title: string;
  category: string;
  thumbnail: { url: string; type: string };
  shortDescription: string;
};

export default function Blog() {
  const blogs: Blog[] = blogsData;

  return (
    <div className="flex flex-col items-center py-12 bg-[#18191A] min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-8">Our Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
        {blogs.map((blog: Blog) => (
          <Link key={blog.id} href={`/blog/${encodeURIComponent(blog.slug)}`} className="block">
            <div className="w-full bg-[#18191A]  hover:bg-[#2d2e30]  rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-96">
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
                  <p className="text-xs font-medium text-[#FF8400]  mb-2 uppercase tracking-wide">{blog.category}</p>
                  <h2 className="font-bold text-white text-xl line-clamp-2 tracking-tight">{blog.title}</h2>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-2">{blog.shortDescription}</p>
                </div>
                <div className="flex space-x-4 mt-4">
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-600 transition-colors" />
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 transition-colors" />
                  <LinkIcon className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                </div>
              </div>
              {/* View More Button */}
              <div className="p-4">
                <span className="text-sm font-medium text-white bg-[#FF8400]  px-4 py-2 rounded-full hover:bg-[#ff8400de] transition-colors">
                  Read More
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}