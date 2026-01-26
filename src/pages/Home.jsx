import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-block px-4 py-2 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-full">
              <span className="text-[#F5A623] font-medium">Hi there!</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              I'm{' '}
              <span className="bg-gradient-to-r from-[#F5A623] to-[#FDB03A] bg-clip-text text-transparent">
                Braham Zapata
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              SOFTWARE ENGINEER
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I build modern and responsive web applications focused on user experience, using React and backend technologies like Java and Spring Boot, with special attention to design, usability, and scalability in every project.
            </p>
            <div className="flex gap-4">
              <Button 
                onClick={() => navigate('/about')}
                className="bg-[#F5A623] hover:bg-[#FDB03A] text-white px-8 py-6 text-lg"
              >
                More About Me
              </Button>
              <Button
                onClick={() => navigate('/contact')}
                variant="outline"
                className="px-8 py-6 text-lg border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623] hover:text-white"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            {/* Desktop: imagen con bordes redondeados */}
            <div className="hidden md:block relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/src/img/perfil.JPG"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F5A623]/20 to-transparent" />
            </div>
            
            {/* Mobile: imagen circular */}
            <div className="md:hidden flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-[#F5A623]/30">
                <img
                  src="/src/img/perfil.JPG"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5A623]/20 to-transparent" />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F5A623] rounded-full opacity-20 blur-3xl hidden md:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FDB03A] rounded-full opacity-20 blur-3xl hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;