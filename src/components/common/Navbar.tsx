import React, { useState, useEffect } from 'react';
import { Film, Tv, Search, User, Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, navigate to search results page with the query
    console.log('Search for:', searchQuery);
    setSearchQuery('');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Film className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold tracking-tight">MovieDB</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="/movies" className="nav-link flex items-center">
              <Film className="mr-1 h-4 w-4" />
              <span>Movies</span>
            </a>
            <a href="/tv" className="nav-link flex items-center">
              <Tv className="mr-1 h-4 w-4" />
              <span>TV Shows</span>
            </a>
            <form onSubmit={handleSearchSubmit} className="relative mx-4">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-1.5 pr-10 text-sm rounded-md bg-gray-800 border-gray-700 text-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 w-48"
              />
              <button 
                type="submit" 
                className="absolute right-0 top-0 h-full flex items-center pr-3 text-gray-400"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="/movies" className="nav-link flex items-center">
                <Film className="mr-2 h-5 w-5" />
                <span>Movies</span>
              </a>
              <a href="/tv" className="nav-link flex items-center">
                <Tv className="mr-2 h-5 w-5" />
                <span>TV Shows</span>
              </a>
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 text-sm rounded-md bg-gray-800 border-gray-700 text-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <button 
                  type="submit" 
                  className="absolute right-0 top-0 h-full flex items-center pr-3 text-gray-400"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>
              <div className="flex space-x-3 pt-2">
                <Button variant="outline" fullWidth>
                  Sign In
                </Button>
                <Button variant="primary" fullWidth>
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;