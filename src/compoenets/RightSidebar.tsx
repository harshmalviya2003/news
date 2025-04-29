import Link from 'next/link';
import { PlayCircle } from 'lucide-react';

const RightSidebar = () => {
  const videoItems = [
    {
      id: 1,
      title: "More global tech giants sign up for Govt's PLI scheme",
      thumbnail: "/path/to/video1.jpg",
      duration: "0:43",
      href: "/video/1",
    },
    {
      id: 2,
      title: "Chaotic 100-day of Trump 2.0, markets crumble",
      thumbnail: "/path/to/video2.jpg",
      duration: "0:43",
      href: "/video/2",
    },
    {
      id: 3,
      title: "Men can consume more sugar than women",
      thumbnail: "/path/to/video3.jpg",
      duration: "1:13",
      href: "/video/3",
    },
  ];

  return (
    <aside className="bg-gray-900 text-white shadow-lg z-40">
      <nav className="fixed top-16 right-30 h-[calc(100vh-64px)] w-56 overflow-y-auto scrollbar-hide p-4 hidden md:block">
        <h3 className="text-sm font-bold text-gray-400 mb-4">Video</h3>
        {videoItems.map((item) => (
          <Link key={item.id} href={item.href} className="flex items-center space-x-3 py-2 hover:bg-gray-800 rounded-lg transition-colors">
            <div className="relative w-20 h-12">
              <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover rounded" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="h-5 w-5 text-white" />
              </div>
              <span className="absolute bottom-0.5 right-0.5 text-xs text-white bg-black bg-opacity-70 px-1 rounded">{item.duration}</span>
            </div>
            <span className="text-sm text-gray-200 line-clamp-2">{item.title}</span>
          </Link>
        ))}
        <Link href="/video" className="text-sm text-orange-500 mt-4 block hover:underline">See more</Link>
      </nav>
    </aside>
  );
};

export default RightSidebar;