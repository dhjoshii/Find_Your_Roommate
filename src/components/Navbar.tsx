import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Users, Building, UserPlus, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-800">RoomMate</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="flex items-center text-gray-700 hover:text-blue-800 transition-colors">
              <Home className="w-4 h-4 mr-1" />
              <span>Home</span>
            </a>
            <a href="#roommates" className="flex items-center text-gray-700 hover:text-blue-800 transition-colors">
              <Users className="w-4 h-4 mr-1" />
              <span>Find Roommate</span>
            </a>
            <a href="#pgs" className="flex items-center text-gray-700 hover:text-blue-800 transition-colors">
              <Building className="w-4 h-4 mr-1" />
              <span>PG/Flats</span>
            </a>
            <a href="#flatmates" className="flex items-center text-gray-700 hover:text-blue-800 transition-colors">
              <UserPlus className="w-4 h-4 mr-1" />
              <span>Find Flatmate</span>
            </a>
            <button 
              className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-900 transition-colors shadow-md flex items-center"
            >
              <Search className="w-4 h-4 mr-1" />
              <span>Search</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 hover:text-blue-800 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-md shadow-lg mt-2">
              <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50">
                <div className="flex items-center">
                  <Home className="w-4 h-4 mr-2" />
                  <span>Home</span>
                </div>
              </a>
              <a href="#roommates" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Find Roommate</span>
                </div>
              </a>
              <a href="#pgs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  <span>PG/Flats</span>
                </div>
              </a>
              <a href="#flatmates" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50">
                <div className="flex items-center">
                  <UserPlus className="w-4 h-4 mr-2" />
                  <span>Find Flatmate</span>
                </div>
              </a>
              <button className="w-full mt-2 bg-blue-800 text-white px-3 py-2 rounded-md hover:bg-blue-900 transition-colors shadow-md flex items-center justify-center">
                <Search className="w-4 h-4 mr-2" />
                <span>Search</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;