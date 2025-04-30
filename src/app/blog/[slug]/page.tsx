import Image from 'next/image';
import { notFound } from 'next/navigation';
import blogsData from '@/data/blogData.json';
import { Facebook, Twitter, Link as LinkIcon } from 'lucide-react';

type Blog = {
  id: number;
  slug: string;
  title: string;
  category: string;
  thumbnail: { url: string; type: string };
  shortDescription: string;
  content: { heading: string; description: string }[];
};

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const blog: Blog | undefined = blogsData.find((b: Blog) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center py-12 bg-black min-h-screen">
      <div className="w-full max-w-4xl px-4">
        {/* Thumbnail */}
        <div className="relative w-full h-96 mb-8">
          <Image
            src={blog.thumbnail.url}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        {/* Title and Category */}
        <p className="text-xs font-medium text-blue-600 mb-2 uppercase tracking-wide">{blog.category}</p>
        <h1 className="text-4xl font-bold text-white mb-4">{blog.title}</h1>
        <p className="text-lg text-gray-400 mb-8">{blog.shortDescription}</p>
        {/* Social Icons */}
        <div className="flex space-x-4 mb-8">
          <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-600 transition-colors" />
          <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 transition-colors" />
          <LinkIcon className="h-6 w-6 text-gray-400 hover:text-gray-600 transition-colors" />
        </div>
        {/* Content Sections */}
        <div className="space-y-8">
          {blog.content.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-white mb-2">{section.heading}</h2>
              <p className="text-gray-300">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}