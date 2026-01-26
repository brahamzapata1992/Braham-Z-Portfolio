import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Frontend',
      description: 'Intuitive task management application with drag-and-drop functionality and real-time updates.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'Frontend',
      description: 'Beautiful weather dashboard with detailed forecasts, maps, and location-based alerts.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      technologies: ['React', 'API Integration', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      category: 'Full Stack',
      description: 'Analytics platform for social media metrics with custom dashboards and reporting tools.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Python', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 5,
      title: 'Blog Platform',
      category: 'Full Stack',
      description: 'Modern blog platform with markdown support, commenting system, and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Prisma', 'MySQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      category: 'Mobile',
      description: 'Mobile fitness application with workout tracking, nutrition plans, and progress analytics.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
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