import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="min-h-screen bg-white dark:bg-[#0F0F0F] transition-colors duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <BottomNav />
          
          {/* Footer */}
          <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 hidden md:block">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-gray-400">
                © 2024 Steve Milner. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Built with React & Tailwind CSS
              </p>
            </div>
          </footer>
          
          <Toaster />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;