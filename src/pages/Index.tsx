
import React, { useState } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Blog from '../components/Blog';
import Testimonials from '../components/Testimonials';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 light:from-blue-50 light:via-blue-100 light:to-blue-50">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Testimonials />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default Index;
