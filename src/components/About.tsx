
import React from 'react';
import { Code, Lightbulb, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: "Innovation",
      description: "Always exploring new technologies and solutions"
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Results",
      description: "Focused on delivering impactful solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am an enthusiastic software developer eager to take on new challenges and grow in the tech industry. I am committed to learning quickly, working hard, and delivering my best in every project.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a deep passion for 
              creating innovative solutions. I specialize in full-stack development with expertise 
              in modern frameworks and technologies.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium">
                Team Leader
              </span>
              <span className="px-4 py-2 bg-green-600/20 text-green-300 rounded-full text-sm font-medium">
                Quick Learner
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
