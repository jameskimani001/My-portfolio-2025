
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "James was a valuable addition to our IT Department during his internship at Olkalou Dairy. He demonstrated strong attention to detail in data management and played an integral role in updating our website. His technical support skills greatly improved our team's efficiency. James approaches every task with professionalism, enthusiasm, and a problem-solving mindset. We highly recommend him for any technical role requiring responsibility and initiative.",
      author: "Sarah Johnson",
      position: "Victoria K., HR Manager, Olkalou Dairy Ltd",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      content: "James displayed excellent communication and technical skills while assisting customers with online services. He was dependable, courteous, and handled a wide range of tech support issues with calm and confidence. His ability to simplify complex IT processes for our customers made him an asset to the business. We appreciated his reliability and the customer-first attitude he brought to the shop every day",
      author: "Chili's M., Owner,",
      position: "Chili's Cyber-Shop",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      content: "James showed outstanding dedication during his time as a volunteer IT technician with our community club. He not only provided valuable tech support but also took the initiative to train others and improve access to digital tools within our community. His contributions extended beyond IT, participating in environmental clean-ups and awareness efforts. He is a passionate and community-driven individual, and we’re proud to have had him with us.",
      author: "JUlia k.",
      position: "Project Coordinator, Tunza Mazingira Community Club",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What People Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-700/50 border-slate-700 p-1">
              <CardContent className="p-6 relative">
                <QuoteIcon className="absolute top-6 left-6 text-blue-400/20 w-8 h-8" />
                
                <div className="relative z-10">
                  <p className="text-gray-300 italic mb-6">"{testimonial.content}"</p>
                  
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h4 className="font-medium text-white">{testimonial.author}</h4>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
