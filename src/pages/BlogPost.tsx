
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThemeProvider } from '@/components/ThemeProvider';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // In a real application, this data would come from an API or database
  const blogPosts = {
    "building-scalable-react-applications": {
      title: "Building Scalable React Applications",
      date: "May 15, 2025",
      readTime: "8 min read",
      author: "Techie Kim",
      authorImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
      tags: ["React", "Architecture", "Frontend"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
      content: `
        <h2>Introduction to Scalable React Architecture</h2>
        <p>As React applications grow in size and complexity, maintaining a clean, efficient codebase becomes increasingly challenging. This article explores proven architectural patterns and best practices for building React applications that can scale gracefully.</p>
        
        <h2>Component Architecture</h2>
        <p>Breaking down your UI into small, reusable components is foundational to React development. However, as applications grow, you need a more structured approach to component organization. The Atomic Design methodology offers a systematic way to classify components:</p>
        <ul>
          <li><strong>Atoms:</strong> Basic building blocks like buttons, inputs, and labels</li>
          <li><strong>Molecules:</strong> Simple combinations of atoms, like a search form</li>
          <li><strong>Organisms:</strong> Complex UI sections composed of molecules and atoms</li>
          <li><strong>Templates:</strong> Page-level layouts that arrange organisms</li>
          <li><strong>Pages:</strong> Specific instances of templates with real data</li>
        </ul>
        
        <h2>State Management Strategies</h2>
        <p>As applications grow, managing state becomes more complex. While local state and prop drilling work for simpler apps, larger applications benefit from more sophisticated state management:</p>
        <p>Context API with useReducer can handle moderate complexity without adding external dependencies. For more complex applications, consider Redux Toolkit or Zustand, which offer powerful debugging tools and middleware support.</p>
        
        <h2>Data Fetching Patterns</h2>
        <p>React Query and SWR have revolutionized data fetching in React applications by providing built-in caching, background updates, and request deduplication. These libraries eliminate the need for complex loading and error states in your components.</p>
        
        <h2>Code Splitting and Performance Optimization</h2>
        <p>Large React applications benefit significantly from code splitting. By leveraging React.lazy() and Suspense, you can split your code into smaller chunks that load on demand, reducing the initial bundle size and improving load times.</p>
        
        <h2>Testing Strategy</h2>
        <p>A comprehensive testing strategy includes unit tests for individual components, integration tests for component interactions, and end-to-end tests for critical user flows. React Testing Library encourages testing behavior rather than implementation details, resulting in more maintainable tests.</p>
        
        <h2>Conclusion</h2>
        <p>Building scalable React applications requires thoughtful architecture, proper state management, efficient data fetching, performance optimization, and comprehensive testing. By implementing these best practices, you'll create applications that remain maintainable and performant as they grow.</p>
      `
    },
    "future-of-typescript": {
      title: "The Future of TypeScript and Strong Typing",
      date: "April 28, 2025",
      readTime: "6 min read",
      author: "Techie Kim",
      authorImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
      tags: ["TypeScript", "JavaScript", "Development"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
      content: `
        <h2>The Evolution of TypeScript</h2>
        <p>TypeScript has transformed from a niche Microsoft project to an essential tool in modern JavaScript development. This article explores TypeScript's meteoric rise and where it's headed next.</p>
        
        <h2>TypeScript's Growing Ecosystem</h2>
        <p>TypeScript adoption has exploded in recent years, with framework authors embracing it as a first-class citizen. Angular requires it, React works seamlessly with it, and Vue, Svelte, and other frameworks provide excellent TypeScript support.</p>
        
        <h2>Advanced Type Features</h2>
        <p>Recent TypeScript versions have introduced powerful type features that enable even more precise typing:</p>
        <ul>
          <li><strong>Template Literal Types:</strong> Allow for string manipulation at the type level</li>
          <li><strong>Conditional Types:</strong> Enable type-level conditionals</li>
          <li><strong>Mapped Types:</strong> Transform existing types into new ones</li>
          <li><strong>Type Predicates:</strong> Narrow types within conditional blocks</li>
        </ul>
        
        <h2>TypeScript in Enterprise Development</h2>
        <p>Large enterprises have widely adopted TypeScript for its ability to reduce runtime errors, improve code maintenance, and enhance developer productivity. Its strong typing system makes large-scale refactoring safer and provides better tooling support.</p>
        
        <h2>TypeScript vs. Other Typed Languages</h2>
        <p>TypeScript offers unique advantages over other typed languages that compile to JavaScript. Its gradual typing system allows for incremental adoption, and its structural type system provides flexibility while maintaining type safety.</p>
        
        <h2>The Road Ahead</h2>
        <p>TypeScript's future includes even more powerful type capabilities, better performance, and deeper integration with JavaScript. As ECMAScript evolves, TypeScript will continue to adopt new JavaScript features while adding type-level enhancements.</p>
        
        <h2>Conclusion</h2>
        <p>TypeScript has fundamentally changed JavaScript development by bringing strong typing to a dynamically typed language. Its future looks bright as adoption continues to grow and the type system becomes even more powerful and expressive.</p>
      `
    }
    // Additional blog posts would be defined here
  };

  const post = blogPosts[slug as string];
  
  if (!post) {
    return (
      <ThemeProvider defaultTheme="dark">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
            <Button onClick={() => navigate('/blog')}>
              <ArrowLeft className="mr-2" /> Back to Blog
            </Button>
          </div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <Button 
            variant="outline" 
            className="mb-8"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2" /> Back to Home
          </Button>
          
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <Badge key={index} className="bg-blue-600/30 text-blue-300 hover:bg-blue-600/50">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-4 mb-8">
              <img src={post.authorImage} alt={post.author} className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-white font-medium">{post.author}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-12 pt-6 border-t border-slate-700">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-white font-bold mb-2">Share this article</h3>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-blue-400">
                      <Share size={16} className="mr-1" /> Share
                    </Button>
                  </div>
                </div>
                <Button onClick={() => navigate('/')}>
                  <ArrowLeft className="mr-2" /> Back to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default BlogPost;
