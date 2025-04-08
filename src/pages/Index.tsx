
import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// Lazy load components that are not immediately visible
const About = lazy(() => import('@/components/About'));
const Projects = lazy(() => import('@/components/Projects'));
const Skills = lazy(() => import('@/components/Skills'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

// Simple loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Suspense fallback={<PageLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<PageLoader />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<PageLoader />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<PageLoader />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<PageLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
