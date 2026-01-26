import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Dental Clinic Management',
      category: 'Backend',
      description:
        'Backend application for managing a dental clinic. It allows creating and managing patients, dentists, and appointments, with a structured database and REST API focused on data integrity and business logic.',
      image: 'https://res.cloudinary.com/dazaq6guo/image/upload/v1769399784/ChatGPT_Image_Jan_25_2026_10_55_16_PM_egel8o.png',
      technologies: ['Java', 'Spring Boot', 'SQL'],
      github: 'https://github.com/brahamzapata1992/Clinica_Odontologica_BackEnd',
      live: 'https://clinicaodontologicabackend-production.up.railway.app/',
    },
    {
    id: 2,
    title: 'Music Rent E-Commerce',
    category: 'Full Stack',
    description:
      'E-commerce platform for renting musical instruments, featuring product listings, search functionality, and a mobile-first responsive design. Developed as a full stack project with focus on performance and user experience.',
    image: 'https://res.cloudinary.com/dazaq6guo/image/upload/v1769399870/ChatGPT_Image_Jan_25_2026_10_57_12_PM_celm6w.png',
    technologies: ['React', 'JavaScript', 'SQL', 'Spring Boot'],
    github: 'https://github.com/tu-usuario/music-rent',
    live: 'https://tu-proyecto-ecommerce.vercel.app',
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    category: 'Frontend',
    description:
      'Responsive personal portfolio showcasing projects, skills, and professional background. Includes dark/light mode, modern UI design, and optimized performance for both desktop and mobile devices.',
    image: 'https://res.cloudinary.com/dazaq6guo/image/upload/v1769400036/ChatGPT_Image_Jan_25_2026_11_00_27_PM_qkw30k.png',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/brahamzapata1992/Braham-Z-Portfolio.git',
    live: 'https://brahamzapataportfolio.vercel.app/',
  },
  ];

  return (
    <div className="min-h-screen px-4 py-20 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-[#F5A623]">Projects</span>
          </h1>
          <div className="w-20 h-1 bg-[#F5A623] mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Hover over each card to see details and links.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;