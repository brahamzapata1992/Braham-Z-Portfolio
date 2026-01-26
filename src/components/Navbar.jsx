import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0F0F0F]/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="text-2xl font-bold bg-gradient-to-r from-[#F5A623] to-[#FDB03A] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Portfolio
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate('/')}
              className={`font-medium transition-colors ${
                location.pathname === '/'
                  ? 'text-[#F5A623]'
                  : 'text-gray-800 dark:text-gray-200 hover:text-[#F5A623] dark:hover:text-[#F5A623]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigate('/about')}
              className={`font-medium transition-colors ${
                location.pathname === '/about'
                  ? 'text-[#F5A623]'
                  : 'text-gray-800 dark:text-gray-200 hover:text-[#F5A623] dark:hover:text-[#F5A623]'
              }`}
            >
              About
            </button>
            <button
              onClick={() => navigate('/projects')}
              className={`font-medium transition-colors ${
                location.pathname === '/projects'
                  ? 'text-[#F5A623]'
                  : 'text-gray-800 dark:text-gray-200 hover:text-[#F5A623] dark:hover:text-[#F5A623]'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => navigate('/contact')}
              className={`font-medium transition-colors ${
                location.pathname === '/contact'
                  ? 'text-[#F5A623]'
                  : 'text-gray-800 dark:text-gray-200 hover:text-[#F5A623] dark:hover:text-[#F5A623]'
              }`}
            >
              Contact
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-[#F5A623]" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile - Only Theme Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-[#F5A623]" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;