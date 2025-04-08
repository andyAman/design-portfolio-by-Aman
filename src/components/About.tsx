
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100, damping: 8 }
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 30px rgba(13, 148, 136, 0.12)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.3 }
    },
    hover: {
      rotateY: 15,
      rotateX: -15,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 10 }
    }
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-teal-500 font-medium mb-2">About Me</p>
          <h2 className="heading-lg text-navy-800">Know Me More</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div 
            className="lg:col-span-2"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                  alt="Designer working on a project"
                  className="w-full h-full object-cover"
                  style={{ transformStyle: "preserve-3d" }}
                />
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-teal-500/10 rounded-lg -z-10"
                animate={{ 
                  rotate: [0, 2, 0, -2, 0],
                  scale: [1, 1.02, 1, 0.98, 1]
                }}
                transition={{ 
                  duration: 10, 
                  ease: "easeInOut", 
                  repeat: Infinity 
                }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-3 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="heading-md text-navy-800"
              variants={itemVariants}
            >
              I'm <span className="text-teal-500">Aman Kumar</span>, a Creative Designer
            </motion.h3>
            <motion.p 
              className="text-gray-600"
              variants={itemVariants}
            >
              I help clients create visually appealing and functional digital experiences. With my experience in the design industry, I specialize in creating user-centered designs that solve business problems and enhance user engagement.
            </motion.p>
            <motion.p 
              className="text-gray-600"
              variants={itemVariants}
            >
              My approach combines aesthetic sensibility with technical knowledge, ensuring that my designs are not only beautiful but also practical and implementable. I believe in continuous learning and staying updated with the latest design trends and technologies.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div 
                className="flex flex-col items-center p-6 rounded-lg shadow-sm border border-gray-100 transition-all"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="p-3 bg-teal-500/10 rounded-full mb-4">
                  <Briefcase size={24} className="text-teal-500" />
                </div>
                <h4 className="font-semibold text-navy-800">Experience</h4>
                <p className="text-gray-600 text-center">1+ Years</p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center p-6 rounded-lg shadow-sm border border-gray-100 transition-all"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="p-3 bg-teal-500/10 rounded-full mb-4">
                  <Award size={24} className="text-teal-500" />
                </div>
                <h4 className="font-semibold text-navy-800">Completed</h4>
                <p className="text-gray-600 text-center">20+ Projects</p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center p-6 rounded-lg shadow-sm border border-gray-100 transition-all"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="p-3 bg-teal-500/10 rounded-full mb-4">
                  <GraduationCap size={24} className="text-teal-500" />
                </div>
                <h4 className="font-semibold text-navy-800">Education</h4>
                <p className="text-gray-600 text-center">B.Sc Graphics Design & Web Development</p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="pt-4"
              variants={itemVariants}
            >
              <a href="#contact" className="btn-primary inline-block">Hire Me</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
