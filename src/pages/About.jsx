import React, { useState } from 'react';
import { Download, Briefcase, GraduationCap, Award, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { 
  Code2, 
  FileCode, 
  Layers, 
  Database, 
  Server, 
  Box,
  Braces,
  Cloud,
  MonitorSmartphone,
  PenTool,
  Lock
} from 'lucide-react';

const About = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleDownloadCV = () => {
    window.open('https://rxresu.me/brahamzapata1992/resume', '_blank');
  };

  // Frontend Certificates
  const frontendCertificates = [
    {
      name: 'React Advanced Certificate',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      issuer: 'Academia Dev Senior',
    },
    {
      name: 'Responsive Web Design',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop',
      issuer: 'freeCodeCamp',
    },
  ];

  // Backend Certificates
  const backendCertificates = [
    {
      name: 'Java Spring Boot Professional',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      issuer: 'Digital House',
    },
    {
      name: 'REST API Development',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
      issuer: 'Academia Dev Senior',
    },
  ];

  const frontendSkills = [
    { name: 'HTML/CSS', icon: Layers },
    { name: 'React', icon: Code2 },
    { name: 'JavaScript', icon: FileCode },    
    { name: 'Tailwind CSS', icon: Layers },
    { name: 'Responsive Design', icon: MonitorSmartphone },
    { name: 'Figma', icon: PenTool },
  ];

  const backendSkills = [
    { name: 'Java', icon: Braces },
    { name: 'Spring Boot', icon: Server },
    { name: 'REST APIs', icon: Cloud },
    { name: 'SQL', icon: Database },
    { name: 'Python', icon: Braces },
    { name: 'Authentication', icon: Lock },
    { name: 'CRUD Operations', icon: Database },
  ];

    const experiences = [
      {
        type: 'work',
        year: '2023 - 2024',
        title: 'E-commerce Full Stack Project',
        company: 'Digital House',
        description:
          'Developed a full-stack e-commerce platform for renting musical instruments, including backend, database, and frontend. The application was fully responsive and optimized for mobile devices, with an intuitive user interface that allows users to search and rent products efficiently.',
      },
      {
        type: 'work',
        year: '2021 - 2023',
        title: 'Full Stack Developer',
        company: 'Digital House',
        description:
          'Built responsive web applications using JavaScript, React, and backend technologies. Worked with SQL and NoSQL databases, focusing on performance, security, and user experience. Constantly learning and applying best practices in full stack development.',
      },
      {
        type: 'work',
        year: '2016 - 2017',
        title: 'Mechanical Engineering Intern',
        company: 'IMAL – Colombia',
        description:
          'Contributed to the maintenance department by designing mechanical parts and developing a Visual Basic program to analyze operator downtime as part of a SMED initiative. Supported process optimization efforts to improve operational efficiency.',
      },
    ];

    const education = [
      {
        type: 'education',
        year: '2024 - Present',
        title: 'Software Engineering',
        institution: 'Politécnico Grancolombiano',
        description:
          'Focused on software design, programming, algorithms, data structures, and software architecture. Training emphasizes project management, teamwork, and the development of scalable, high-quality software solutions.',
      },
      {
        type: 'education',
        year: 'Jun 2025 - Present',
        title: 'Python Senior AI – Master Path in Real-World Development',
        institution: 'Academia Dev Senior',
        description:
          'Advanced Python program focused on real-world development and artificial intelligence concepts. The course emphasizes practical problem-solving, application development, and the use of Python for intelligent systems.',
      },
      {
        type: 'education',
        year: '2021 - 2023',
        title: 'Full Stack Web Development (Bootcamp)',
        institution: 'Digital House',
        description:
          'Intensive project-based training focused on building full stack web applications using JavaScript, React, backend technologies, and relational and non-relational databases. Emphasis on best practices, teamwork, and real-world development workflows.',
      },
      {
        type: 'education',
        year: '2019 - 2021',
        title: 'English Course (B2)',
        institution: 'ICT – Georgia',
        description:
          'Achieved B2 English level, strengthening professional and everyday communication skills. This training enabled confident interaction in technical and work-related environments.',
      },
      {
        type: 'education',
        year: '2010 - 2016',
        title: 'Mechanical Engineering',
        institution: 'Universidad Libre de Colombia',
        description:
          'Acquired strong foundations in system design, maintenance, and automation. Developed problem-solving skills, teamwork abilities, and an ethical, sustainable approach to engineering challenges.',
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
                <span className="text-gray-900 dark:text-white">Braham</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-600 dark:text-gray-400">Last Name:</span>
                <span className="text-gray-900 dark:text-white">Zapata</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-600 dark:text-gray-400">Age:</span>
                <span className="text-gray-900 dark:text-white">33 Years</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-600 dark:text-gray-400">Nationality:</span>
                <span className="text-gray-900 dark:text-white">Colombian</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-600 dark:text-gray-400">Freelance:</span>
                <span className="text-[#F5A623]">Available</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-600 dark:text-gray-400">Address:</span>
                <span className="text-gray-900 dark:text-white">Atlanta GA</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-600 dark:text-gray-400">Phone:</span>
                <span className="text-gray-900 dark:text-white">+1 470-3831727</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-600 dark:text-gray-400">Email:</span>
                <span className="text-gray-900 dark:text-white">brahamzapata1992@gmail.com</span>
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

        {/* Certificates Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            My <span className="text-[#F5A623]">Certificates</span>
          </h2>

          {/* Frontend Certificates */}
          <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-[#F5A623] mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2" />
              Frontend Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {frontendCertificates.map((cert, index) => (
                <div
                  key={index}
                  data-testid={`frontend-certificate-${index}`}
                  className="group cursor-pointer"
                  onClick={() => setSelectedCertificate(cert)}
                >
                  <div className="bg-gray-50 dark:bg-[#0F0F0F] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-[#F5A623] transition-all hover:shadow-lg hover:shadow-[#F5A623]/20">
                    <div className="relative overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                        <span className="text-white text-sm font-medium">Click to view</span>
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-[#F5A623] transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Certificates */}
          <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-bold text-[#F5A623] mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2" />
              Backend Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {backendCertificates.map((cert, index) => (
                <div
                  key={index}
                  data-testid={`backend-certificate-${index}`}
                  className="group cursor-pointer"
                  onClick={() => setSelectedCertificate(cert)}
                >
                  <div className="bg-gray-50 dark:bg-[#0F0F0F] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-[#F5A623] transition-all hover:shadow-lg hover:shadow-[#F5A623]/20">
                    <div className="relative overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                        <span className="text-white text-sm font-medium">Click to view</span>
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-[#F5A623] transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedCertificate(null)}
            data-testid="certificate-modal"
          >
            <div 
              className="relative bg-white dark:bg-[#1A1A1A] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                data-testid="close-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.name}
                className="w-full max-h-[60vh] object-contain bg-gray-100 dark:bg-[#0F0F0F]"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedCertificate.name}
                </h3>
                <p className="text-[#F5A623]">{selectedCertificate.issuer}</p>
              </div>
            </div>
          </div>
        )}

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