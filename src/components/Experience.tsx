
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
   {
  title: "IT Department Intern",
  company: "Olkalou Dairy Ltd",
  location: "Olkalou, Kenya",
  period: "March 2024 - July 2024",
  description: [
    "Managed accurate data entry and maintained data integrity across company records and databases",
    "Collaborated with a team to update and enhance the company's website, focusing on content updates and backend integration",
    "Provided technical support by troubleshooting hardware and software issues for staff",
    "Contributed to smooth business operations by resolving IT-related challenges efficiently"
  ]
},
{
  title: "IT Assistant",
  company: "Chili's Cyber-Shop",
  location: "Kenya",
  period: "January 2020 - December 2020",
  description: [
    "Assisted customers with accessing and completing online forms and digital services",
    "Provided tech support and troubleshooting for basic hardware and software issues",
    "Delivered effective customer service by addressing technical inquiries in a clear and friendly manner",
    "Developed strong problem-solving and communication skills through daily client interaction"
  ]
},
{
  title: "Volunteer IT Support Technician",
  company: "Tunza Mazingira Community Club",
  location: "Kenya",
  period: "March 2019 - December 2019",
  description: [
    "Installed and maintained computer systems for community members to ensure optimal performance",
    "Provided technical training and support to users with varying levels of IT proficiency",
    "Participated in environmental initiatives such as tree planting and community clean-up projects",
    "Demonstrated strong commitment to volunteerism and community engagement through active involvement"
  ]
}



  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-start gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}>
                  <div className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800/70 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-blue-400 mb-4">{exp.company}</h4>
                    
                    <div className="flex items-center gap-4 mb-4 text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
