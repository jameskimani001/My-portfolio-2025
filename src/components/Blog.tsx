
import React, { useState } from 'react';
import { CalendarIcon, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious
} from '@/components/ui/pagination';

const Blog = () => {
  const [showAllArticles, setShowAllArticles] = useState(false);

  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn how to structure your React applications for scale using modern architecture patterns and best practices.",
      content: "React's component-based architecture makes it perfect for building scalable applications, but as your app grows, you'll need to implement proper state management, code splitting, and performance optimizations. In this article, we explore architectural patterns like atomic design, the benefits of using TypeScript for type safety, implementing proper state management with tools like Redux Toolkit or Zustand, using React Query for data fetching, implementing code splitting with React.lazy() and Suspense, and setting up a robust testing strategy with React Testing Library and Jest. By following these best practices, your React applications will be maintainable, performant, and ready to scale as your user base grows.",
      date: "May 15, 2025",
      readTime: "8 min read",
      tags: ["React", "Architecture", "Frontend"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
      slug: "building-scalable-react-applications"
    },
    {
      title: "The Future of TypeScript and Strong Typing",
      excerpt: "Exploring the evolution of TypeScript and how it's changing the way we write JavaScript applications.",
      content: "TypeScript has revolutionized JavaScript development by bringing static typing to an otherwise dynamically typed language. This article explores TypeScript's growing ecosystem, upcoming features in the latest versions, how it integrates with modern frameworks like React, Vue, and Angular, advanced type techniques for complex applications, the performance benefits of TypeScript in large codebases, and how it's becoming the standard for enterprise JavaScript development. We'll also look at upcoming features in the TypeScript roadmap that will further enhance developer productivity and code quality. As more companies adopt TypeScript for their mission-critical applications, understanding its advanced features becomes increasingly important for developers wanting to stay competitive in the job market.",
      date: "April 28, 2025",
      readTime: "6 min read",
      tags: ["TypeScript", "JavaScript", "Development"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      slug: "future-of-typescript"
    },
    {
      title: "Optimizing Performance in Modern Web Apps",
      excerpt: "Techniques and strategies to improve load times and runtime performance in web applications.",
      content: "Web performance is directly tied to user retention and conversion rates. This comprehensive guide covers modern performance optimization strategies including implementing code splitting to reduce initial bundle size, lazy loading images and components, optimizing the critical rendering path, using service workers for offline caching, properly implementing web workers for CPU-intensive tasks, optimizing asset delivery with modern image formats and compression, using performance monitoring tools like Lighthouse and Web Vitals, and implementing debouncing and throttling for better UI responsiveness. For each technique, we provide practical code examples and measurable performance improvements to help you deliver lightning-fast web experiences to your users, regardless of their device capabilities or network conditions.",
      date: "April 10, 2025",
      readTime: "10 min read",
      tags: ["Performance", "Optimization", "Web"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      slug: "optimizing-web-performance"
    },
    {
      title: "Serverless Architecture Patterns",
      excerpt: "Discover how serverless computing is transforming application development and deployment strategies.",
      content: "Serverless architecture has transformed how we build and deploy applications by abstracting away server management and focusing on function execution. This article dives deep into serverless architecture patterns, including event-driven processing with AWS Lambda, Google Cloud Functions, or Azure Functions, implementing API gateways with serverless functions, utilizing database triggers for reactive data processing, managing authentication and authorization in serverless environments, implementing CQRS patterns with serverless components, optimizing for cold starts and function execution times, cost optimization strategies for serverless deployments, and testing methodologies specific to serverless applications. By understanding these patterns, developers can build highly scalable, cost-efficient applications that automatically scale with user demand without the overhead of traditional server management.",
      date: "March 22, 2025",
      readTime: "12 min read",
      tags: ["Serverless", "Cloud", "Architecture"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      slug: "serverless-architecture-patterns"
    },
    {
      title: "Mastering Modern CSS Techniques",
      excerpt: "Advanced CSS strategies for creating responsive, maintainable, and visually stunning web interfaces.",
      content: "CSS has evolved tremendously with features like CSS Grid, Flexbox, Custom Properties, and Container Queries transforming how we approach web layout and styling. This in-depth article covers mastering CSS Grid for complex layouts, leveraging CSS custom properties for maintainable theming, implementing responsive designs with modern container queries, using CSS animations and transitions for enhanced UX, working with CSS logical properties for internationalized interfaces, understanding the cascade and specificity for predictable styling, implementing dark mode with CSS variables, and utilizing modern CSS functions like clamp(), min(), and max() for responsive typography. Each section includes practical examples that you can immediately apply to your projects, enabling you to create sophisticated, accessible, and performant user interfaces that work across all modern browsers.",
      date: "March 5, 2025",
      readTime: "9 min read",
      tags: ["CSS", "Design", "Frontend"],
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500&h=300&fit=crop",
      slug: "mastering-modern-css"
    }
  ];

  // Initial display shows only 3 posts
  const displayedPosts = showAllArticles ? blogPosts : blogPosts.slice(0, 3);

  // Function to handle article click and show full content
  const handleReadMore = (slug) => {
    // In a real app, this would navigate to a dedicated blog post page
    console.log(`Navigating to article: ${slug}`);
    alert(`This would navigate to the full article: ${slug}`);
  };

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog & Insights</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Thoughts, tutorials, and perspectives on software development and technology trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-blue-600/20 text-blue-300 border-blue-400/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white line-clamp-2">{post.title}</h3>
              </CardHeader>
              
              <CardContent className="pb-2">
                <p className="text-gray-300 line-clamp-3 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <CalendarIcon size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant="link" 
                  className="text-blue-300 hover:text-blue-400 p-0 h-auto"
                  onClick={() => handleReadMore(post.slug)}
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          {!showAllArticles ? (
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => setShowAllArticles(true)}
            >
              View All Articles
            </Button>
          ) : (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
