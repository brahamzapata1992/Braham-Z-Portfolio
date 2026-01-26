import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Mail } from 'lucide-react';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/projects', icon: Briefcase, label: 'Projects' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-[#0F0F0F] border-t border-gray-200 dark:border-gray-800 z-50">
      <div className="flex justify-around items-center h-20 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center space-y-1 transition-all ${
                isActive ? 'scale-110' : 'scale-100'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  isActive
                    ? 'bg-[#F5A623] shadow-lg shadow-[#F5A623]/30'
                    : 'bg-gray-100 dark:bg-gray-800'
                }`}
              >
                <Icon
                  className={`w-6 h-6 ${
                    isActive ? 'text-white' : 'text-gray-600 dark:text-gray-400'
                  }`}
                />
              </div>
              <span
                className={`text-xs font-medium ${
                  isActive
                    ? 'text-[#F5A623]'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;