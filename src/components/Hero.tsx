
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Linkedin } from 'lucide-react';
import profilePicture from '../assets/_DSC0247.jpg';


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-600/20 text-blue-300 text-sm font-medium mb-4">
                Full Stack Developer
              </span>
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium text-green-400 bg-green-400/20 rounded-full py-1 px-3 mr-3">
                  Open to Work
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Techie Kim</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Building innovative web experiences with modern technologies. I specialize in creating robust, scalable applications that solve real-world problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-lg"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  projectsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work <ArrowRight className="ml-2" size={20} />
              </Button>
              <a href="https://drive.google.com/file/d/1wuEFNXQSfAM9HI_CdWFfRsgLpodVV5BC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-lg">
                  <Download className="mr-2" size={20} />
                  Download CV
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/james-kimani-124003312" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="text-gray-300 hover:bg-gray-800 font-semibold px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                  <Linkedin size={24} />
                </Button>
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl shadow-blue-900/30 hover:scale-105 transition-transform duration-300">
              <img 
  src={profilePicture} 
  alt="Techie Kim" 
  className="w-full h-full object-cover"
/>

              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full transform rotate-3 shadow-lg">
                Software Engineer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
