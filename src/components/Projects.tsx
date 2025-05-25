import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import screenshotImage from '../assets/Screenshot (3).png'; 

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery Platform",
      description:
        "AFood deliverysystem solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.",
      image: screenshotImage, // ✅ Use variable, not a string
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      liveUrl: "https://quickbit.netlify.app",
      githubUrl: "https://github.com/jameskimani001?tab=repositories",
    },
    {
      title: "Health Tracker App",
      description:
        "Manage Your Health Journey,All in One Place Track conditions, monitor medications, and gain insights to take control of your chronic health conditions.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "AWS"],
      liveUrl: "https://trackmyhealthnow.netlify.app",
      githubUrl: "https://github.com/jameskimani001?tab=repositories",
    },
    {
      title: "Crime Prediction and Analysis Platform",
      description:
        "Crime prediction and analysis for a safer community. This platform uses machine learning to predict crime hotspots and analyze trends, helping law enforcement agencies allocate resources effectively.",
      image:
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop",
      technologies: ["Next.js", "OpenAI API", "Prisma", "WebSockets", "Vercel"],
      liveUrl: "https://predictcrim.netlify.app",
      githubUrl: "https://github.com/jameskimani001?tab=repositories",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-700/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-600"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
