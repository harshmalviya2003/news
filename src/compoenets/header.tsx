"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home,  Search, Menu, X, FileText } from 'lucide-react';
import ThemeHandler from './ThemeHandler';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      router.push(`/?q=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/');
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'Blog', href: '/blog', icon: <FileText className="h-5 w-5" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#222325] text-gray-900 dark:text-white shadow-lg h-16 transition-colors duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative h-8 w-8 transform group-hover:scale-110 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            <div className="absolute inset-0.5 bg-white dark:bg-black rounded-full flex items-center justify-center">
              <span className="text-orange-500 font-bold text-xs">RV</span>
            </div>
          </div>
          <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
            The Republic Voice
          </span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors duration-300 transform hover:scale-105"
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search news..."
              className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300"
            />
            <button type="submit" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <Search className="h-5 w-5 text-gray-600 dark:text-gray-200 hover:text-orange-500" />
            </button>
          </form>
          <ThemeHandler />
        </nav>
        <div className="lg:hidden flex items-center space-x-4">
          <ThemeHandler />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transform hover:scale-110 transition-transform duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 shadow-lg animate-slide-down">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 py-4 px-6 text-gray-900 dark:text-gray-200 hover:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            <form onSubmit={handleSearch} className="flex items-center space-x-2 p-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news..."
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 w-full transition-colors duration-300"
              />
              <button type="submit" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Search className="h-5 w-5 text-gray-600 dark:text-gray-200 hover:text-orange-500" />
              </button>
            </form>
          </nav>
        )}
      </div>
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;