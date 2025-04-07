import { useState, useEffect } from 'react';
import { CheckCircle, Cpu } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

const Skills = () => {
  // Design skills with proficiency percentages
  const designSkills = [
    { name: 'UI/UX Design', percentage: 95 },
    { name: 'Visual Design', percentage: 90 },
    { name: 'Wireframing', percentage: 85 },
    { name: 'Prototyping', percentage: 80 },
  ];

  // Development skills with proficiency percentages
  const developmentSkills = [
    { name: 'HTML/CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React', percentage: 75 },
    { name: 'Tailwind CSS', percentage: 85 },
  ];

  // Tools proficiency - removed InVision, Git, Zeplin, and Principle, added CorelDraw and Capcut
  const tools = [
    'Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 
    'Sketch', 'Webflow', 'VS Code', 'CorelDraw',
    'After Effects', 'Capcut'
  ];

  // Animation states for progressbars
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('skills-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Animation variants for framer motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 70,
        damping: 10
      }
    }
  };

  return (
    <section 
      id="skills-section" 
      className="section-padding bg-gradient-to-b from-navy-50 to-white"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-teal-500 font-medium mb-2">My Skills</p>
            <h2 className="heading-lg text-navy-800">Expertise & Tools</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto mt-4"></div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Design Skills */}
          <motion.div 
            className="space-y-8 backdrop-blur-sm bg-white/30 p-8 rounded-xl shadow-lg border border-white/20"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <h3 className="heading-sm text-navy-800 border-b border-gray-200 pb-3 flex items-center">
              <Cpu className="mr-2 text-teal-500" /> Design Skills
            </h3>
            <div className="space-y-6">
              {designSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="space-y-2"
                  variants={itemVariants}
                >
                  <div className="flex justify-between">
                    <span className="font-medium text-navy-800">{skill.name}</span>
                    <span className="text-gray-600">{skill.percentage}%</span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={isVisible ? skill.percentage : 0} 
                      className="h-2 bg-gray-200"
                      style={{ 
                        transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
                        transitionDelay: `${index * 0.15}s` 
                      }}
                    />
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-300/30 to-transparent rounded-full"
                      style={{ 
                        width: `${isVisible ? skill.percentage : 0}%`,
                        transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
                        transitionDelay: `${index * 0.15}s`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Development Skills */}
          <motion.div 
            className="space-y-8 backdrop-blur-sm bg-white/30 p-8 rounded-xl shadow-lg border border-white/20"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <h3 className="heading-sm text-navy-800 border-b border-gray-200 pb-3 flex items-center">
              <Cpu className="mr-2 text-teal-500" /> Development Skills
            </h3>
            <div className="space-y-6">
              {developmentSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="space-y-2"
                  variants={itemVariants}
                >
                  <div className="flex justify-between">
                    <span className="font-medium text-navy-800">{skill.name}</span>
                    <span className="text-gray-600">{skill.percentage}%</span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={isVisible ? skill.percentage : 0} 
                      className="h-2 bg-gray-200"
                      style={{ 
                        transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
                        transitionDelay: `${index * 0.15}s` 
                      }}
                    />
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-300/30 to-transparent rounded-full"
                      style={{ 
                        width: `${isVisible ? skill.percentage : 0}%`,
                        transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
                        transitionDelay: `${index * 0.15}s`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Tools & Technologies */}
        <motion.div 
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h3 className="heading-sm text-navy-800 border-b border-gray-200 pb-3 mb-8">Tools & Software</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div 
                key={tool} 
                className="flex items-center backdrop-blur-sm bg-white/30 p-4 rounded-lg border border-white/20 shadow-md hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 10px 25px -5px rgba(13, 148, 136, 0.3)' 
                }}
              >
                <CheckCircle size={20} className="text-teal-500 mr-2" />
                <span className="text-navy-800">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
