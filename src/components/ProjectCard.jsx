import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-80 w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative w-full h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-block px-3 py-1 bg-[#F5A623] text-white text-xs font-semibold rounded-full mb-2">
                {project.category}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full backface-hidden bg-white dark:bg-[#1A1A1A] rounded-xl shadow-xl p-6 flex flex-col justify-between border border-gray-200 dark:border-gray-800"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div>
            <div className="inline-block px-3 py-1 bg-[#F5A623] text-white text-xs font-semibold rounded-full mb-3">
              {project.category}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => window.open(project.github, '_blank')}
              className="flex-1 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
            <Button
              onClick={() => window.open(project.live, '_blank')}
              className="flex-1 bg-[#F5A623] hover:bg-[#FDB03A] text-white"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;