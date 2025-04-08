
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

  // Software skills with proficiency percentages (renamed from Development skills)
  const softwareSkills = [
    { name: 'Figma', percentage: 90 },
    { name: 'CorelDraw', percentage: 90 },
    { name: 'After Effects', percentage: 75 },
    { name: 'Photoshop', percentage: 80 },
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

  // Animation variants for framer motion - enhanced for more elegance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.25
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 80,
        damping: 8
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 65,
        damping: 8
      }
    }
  };

  // Enhanced 3D effect for cards
  const card3DVariants = {
    rest: { 
      rotateX: 0, 
      rotateY: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    hover: { 
      rotateX: "5deg", 
      rotateY: "5deg", 
      scale: 1.02,
      boxShadow: "0 20px 30px rgba(13, 148, 136, 0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
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
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
            whileHover="hover"
            style={{ perspective: "1000px" }}
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
                        transition: 'all 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)', 
                        transitionDelay: `${index * 0.2}s` 
                      }}
                    />
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-300/30 to-transparent rounded-full"
                      style={{ 
                        width: `${isVisible ? skill.percentage : 0}%`,
                        transition: 'all 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)', 
                        transitionDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Software Skills (renamed from Development Skills) */}
          <motion.div 
            className="space-y-8 backdrop-blur-sm bg-white/30 p-8 rounded-xl shadow-lg border border-white/20"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            whileHover="hover"
            style={{ perspective: "1000px" }}
          >
            <h3 className="heading-sm text-navy-800 border-b border-gray-200 pb-3 flex items-center">
              <Cpu className="mr-2 text-teal-500" /> Software Skills
            </h3>
            <div className="space-y-6">
              {softwareSkills.map((skill, index) => (
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
                        transition: 'all 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)', 
                        transitionDelay: `${index * 0.2}s` 
                      }}
                    />
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-300/30 to-transparent rounded-full"
                      style={{ 
                        width: `${isVisible ? skill.percentage : 0}%`,
                        transition: 'all 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)', 
                        transitionDelay: `${index * 0.2}s`
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {tools.map((tool) => (
              <motion.div 
                key={tool} 
                className="flex items-center backdrop-blur-sm bg-white/30 p-4 rounded-lg border border-white/20 shadow-md transition-all duration-300"
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                style={{ transformStyle: "preserve-3d" }}
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
