"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Home, PlayCircle, Search, Menu, X, Sun, Moon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SearchParams } from '@/lib/types';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      router.push(`/?q=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/');
    }
  };

  const navItems = [
    { name: 'Home', href: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'Video', href: '/video', icon: <PlayCircle className="h-5 w-5" /> },
    { name: 'Search', href: '/search', icon: <Search className="h-5 w-5" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-md h-16">
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-6 w-6">
            <div className="absolute inset-0 bg-orange-500 rounded-full" />
            <div className="absolute inset-0.5 bg-orange-400 rounded-full" />
          </div>
          <span className="text-xl font-bold">Bhaskar English</span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-1 text-gray-200 hover:text-orange-500 transition-colors"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search news..."
              className="bg-gray-800 text-white px-3 py-1 rounded-lg focus:outline-none"
            />
            <button type="submit">
              <Search className="h-5 w-5 text-gray-200 hover:text-orange-500" />
            </button>
          </form>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-700"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
        </nav>
        <div className="lg:hidden flex items-center space-x-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-700"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-700 rounded-full"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="lg:hidden mt-16 absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-700">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 py-3 px-4 text-gray-200 hover:text-orange-500 hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <form onSubmit={handleSearch} className="flex items-center space-x-2 p-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news..."
                className="bg-gray-800 text-white px-3 py-1 rounded-lg focus:outline-none w-full"
              />
              <button type="submit">
                <Search className="h-5 w-5 text-gray-200 hover:text-orange-500" />
              </button>
            </form>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;