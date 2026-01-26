import React from 'react';
import { Download, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { 
  Code2, 
  FileCode, 
  Layers, 
  Database, 
  Server, 
  Box,
  Braces,
  Cloud
} from 'lucide-react';

const About = () => {
  const handleDownloadCV = () => {
    alert('Función de descarga de CV - Agrega tu archivo CV.pdf en la carpeta public');
  };

  const frontendSkills = [
    { name: 'React', icon: Code2 },
    { name: 'JavaScript', icon: FileCode },
    { name: 'TypeScript', icon: FileCode },
    { name: 'HTML/CSS', icon: Layers },
    { name: 'Tailwind CSS', icon: Layers },
    { name: 'Next.js', icon: Code2 },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Braces },
    { name: 'MongoDB', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Express', icon: Box },
    { name: 'FastAPI', icon: Cloud },
  ];

  const experiences = [
    {
      type: 'work',
      year: '2018 - Present',
      title: 'Senior Web Developer',
      company: 'Envato',
      description: 'Developing web applications and user interfaces using modern frameworks.',
    },
    {
      type: 'work',
      year: '2013 - 2018',
      title: 'UI/UX Designer',
      company: 'Themeforest',
      description: 'Designing user interfaces and experiences for web applications.',
    },
  ];

  const education = [
    {
      type: 'education',
      year: '2015',
      title: 'Engineering Degree',
      institution: 'Oxford University',
      description: 'Computer Science and Engineering.',
    },
    {
      type: 'education',
      year: '2012',
      title: 'Bachelor Degree',
      institution: 'Cambridge University',
      description: 'Software Engineering fundamentals.',
    },
  ];

  return (
    <div className="min-h-screen px-4 py-20 pb-24 md:pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-[#F5A623]">Me</span>
          </h1>
          <div className="w-20 h-1 bg-[#F5A623] mx-auto" />
        </div>

        {/* Personal Info */}
        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Personal Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-600 dark:text-gray-400">First Name:</span>
                <span className="text-gray-900 dark:text-white">Steve</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-600 dark:text-gray-400">Last Name:</span>
                <span className="text-gray-900 dark:text-white">Milner</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-600 dark:text-gray-400">Age:</span>
                <span className="text-gray-900 dark:text-white">27 Years</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-600 dark:text-gray-400">Nationality:</span>
                <span className="text-gray-900 dark:text-white">Tunisian</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-600 dark:text-gray-400">Freelance:</span>
                <span className="text-[#F5A623]">Available</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-600 dark:text-gray-400">Address:</span>
                <span className="text-gray-900 dark:text-white">Tunis</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-600 dark:text-gray-400">Phone:</span>
                <span className="text-gray-900 dark:text-white">+21621184010</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-600 dark:text-gray-400">Email:</span>
                <span className="text-gray-900 dark:text-white">you@mail.com</span>
              </div>
            </div>
          </div>
          
          {/* Download CV Button */}
          <div className="mt-8 flex justify-center">
            <Button
              onClick={handleDownloadCV}
              className="bg-[#F5A623] hover:bg-[#FDB03A] text-white px-8 py-6 text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            My <span className="text-[#F5A623]">Skills</span>
          </h2>
          
          {/* Frontend Skills */}
          <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-[#F5A623] mb-6 flex items-center">
              <Code2 className="w-6 h-6 mr-2" />
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {frontendSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-[#0F0F0F] rounded-xl hover:shadow-lg transition-all hover:scale-105 group"
                  >
                    <div className="w-16 h-16 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#F5A623]/20 transition-colors">
                      <Icon className="w-8 h-8 text-[#F5A623]" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-bold text-[#F5A623] mb-6 flex items-center">
              <Server className="w-6 h-6 mr-2" />
              Backend Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {backendSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-[#0F0F0F] rounded-xl hover:shadow-lg transition-all hover:scale-105 group"
                  >
                    <div className="w-16 h-16 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#F5A623]/20 transition-colors">
                      <Icon className="w-8 h-8 text-[#F5A623]" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Experience & <span className="text-[#F5A623]">Education</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Work Experience */}
            <div>
              <h3 className="text-xl font-bold text-[#F5A623] mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2" />
                Work Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 pb-6 border-l-2 border-[#F5A623] last:pb-0">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#F5A623] rounded-full" />
                    <div className="bg-gray-50 dark:bg-[#0F0F0F] p-4 rounded-lg">
                      <div className="text-sm text-[#F5A623] font-medium mb-1">{exp.year}</div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-bold text-[#F5A623] mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 pb-6 border-l-2 border-[#F5A623] last:pb-0">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#F5A623] rounded-full" />
                    <div className="bg-gray-50 dark:bg-[#0F0F0F] p-4 rounded-lg">
                      <div className="text-sm text-[#F5A623] font-medium mb-1">{edu.year}</div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{edu.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;