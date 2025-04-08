
import { ArrowDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1],
              staggerChildren: 0.2,
              delayChildren: 0.3
            }}
          >
            <motion.p 
              className="text-teal-500 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="heading-xl text-navy-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Aman Kumar <br />
              <span className="text-gradient">Creative Designer</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              I design and develop experiences that make people's lives simple through Web and Mobile apps.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.6
            }}
          >
            <motion.div 
              className="aspect-square rounded-full bg-gradient-to-tr from-teal-500/20 to-navy-100/20 flex items-center justify-center overflow-hidden"
              whileHover={{ 
                rotateY: 15, 
                rotateX: -15, 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
                alt="Computer code representing design work"
                className="w-[90%] h-[90%] object-cover rounded-3xl"
                whileHover={{ 
                  z: 30,
                  transition: { type: "spring", stiffness: 300, damping: 10 } 
                }}
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-navy-800/10 rounded-full -z-10"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                ease: "easeInOut", 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div 
              className="absolute -top-6 -left-6 w-32 h-32 bg-teal-500/10 rounded-full -z-10"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0] 
              }}
              transition={{ 
                duration: 7, 
                ease: "easeInOut", 
                repeat: Infinity,
                repeatType: "reverse", 
                delay: 0.5 
              }}
            />
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1
          }}
        >
          <a href="#about" className="flex flex-col items-center text-navy-800/60 hover:text-navy-800 transition-colors">
            <span className="text-sm mb-1">Scroll Down</span>
            <ArrowDownIcon size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
