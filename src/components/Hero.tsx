
import { ArrowDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <p className="text-teal-500 font-medium">Hello, I'm</p>
            <h1 className="heading-xl text-navy-800">Aman <br />
              <span className="text-gradient">Creative Designer</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              I design and develop experiences that make people's lives simple through Web and Mobile apps. I work with Figma, HTML5, CSS3, JavaScript, React, Tailwind and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </div>
          </div>

          <div className="relative animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <div className="aspect-square rounded-full bg-gradient-to-tr from-teal-500/20 to-navy-100/20 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
                alt="Computer code representing design work"
                className="w-[90%] h-[90%] object-cover rounded-3xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-navy-800/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-500/10 rounded-full -z-10"></div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex">
          <a href="#about" className="flex flex-col items-center text-navy-800/60 hover:text-navy-800 transition-colors">
            <span className="text-sm mb-1">Scroll Down</span>
            <ArrowDownIcon size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
