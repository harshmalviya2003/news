import Link from 'next/link';
import { Flame, MapPin, Landmark, Trophy, DollarSign, Video, Globe, Film, Heart, Atom, Medal, Lightbulb, GraduationCap } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { name: 'Top News', href: '/?q=', icon: <Flame className="h-6 w-6 text-orange-500 flex-shrink-0" /> },
    { name: 'Local', href: '/?q=Local', icon: <MapPin className="h-6 w-6 text-blue-500 flex-shrink-0" /> },
    { name: 'National', href: '/?q=National', icon: <Landmark className="h-6 w-6 text-purple-500 flex-shrink-0" /> },
    { name: 'IPL 2025', href: '/?q=IPL', icon: <Trophy className="h-6 w-6 text-blue-500 flex-shrink-0" />, new: true },
    { name: 'Business', href: '/?q=Business', icon: <DollarSign className="h-6 w-6 text-green-500 flex-shrink-0" /> },
    { name: 'Originals', href: '/?q=Originals', icon: <Video className="h-6 w-6 text-red-500 flex-shrink-0" /> },
    { name: 'International', href: '/?q=International', icon: <Globe className="h-6 w-6 text-blue-500 flex-shrink-0" /> },
    { name: 'Entertainment', href: '/?q=Entertainment', icon: <Film className="h-6 w-6 text-pink-500 flex-shrink-0" /> },
    { name: 'Lifestyle', href: '/?q=Lifestyle', icon: <Heart className="h-6 w-6 text-red-500 flex-shrink-0" /> },
    { name: 'Tech & Science', href: '/?q=Tech', icon: <Atom className="h-6 w-6 text-indigo-500 flex-shrink-0" /> },
    { name: 'Sports', href: '/?q=Sports', icon: <Medal className="h-6 w-6 text-blue-500 flex-shrink-0" /> },
    { name: 'Utility', href: '/?q=Utility', icon: <Lightbulb className="h-6 w-6 text-yellow-500 flex-shrink-0" /> },
    { name: 'Career', href: '/?q=Career', icon: <GraduationCap className="h-6 w-6 text-green-500 flex-shrink-0" /> },
  ];

  return (
    <aside className="bg-gray-900 text-white shadow-xl z-40">
      <nav className="fixed top-16 left-0 h-[calc(100vh-64px)] w-56 overflow-y-auto scrollbar-hide p-6 pl-8 hidden md:block">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center space-x-4 py-3 px-4 mb-2 hover:bg-gray-800 rounded-xl transition-colors duration-200 group"
          >
            {item.icon}
            <span className="text-base font-semibold group-hover:text-orange-300 transition-colors">{item.name}</span>
            {item.new && (
              <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;