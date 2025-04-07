
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

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

  // Tools proficiency
  const tools = [
    'Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 
    'Sketch', 'InVision', 'Webflow', 'VS Code',
    'Git', 'Zeplin', 'Principle', 'After Effects'
  ];

  // Animation states for progressbars
  const [isVisible, setIsVisible] = useState(false);

  // Handle intersection observer for animations
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  // Set up intersection observer
  useState(() => {
    const observer = new IntersectionObserver(handleIntersection, { 
      threshold: 0.2 
    });
    
    const section = document.getElementById('skills-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  });

  return (
    <section id="skills-section" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-teal-500 font-medium mb-2">My Skills</p>
          <h2 className="heading-lg text-navy-800">Expertise & Tools</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Design Skills */}
          <div className="space-y-8">
            <h3 className="heading-sm text-navy-800 border-b border-gray-200 pb-3">Design Skills</h3>
            <div className="space-y-6">
              {designSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-navy-800">{skill.name}</span>
                    <span className="text-gray-600">{skill.percentage}%</span>
                  </div>
                  <Progress 
                    value={isVisible ? skill.percentage : 0} 
                    className="h-2 bg-gray-200"
                    style={{ 
                      transition: 'all 1s ease', 
                      transitionDelay: `${index * 0.2}s` 
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Development Skills */}
          <div className="space-y-8">
            <h3 className="heading-sm text-navy-800 border-b border-gray-200 pb-3">Development Skills</h3>
            <div className="space-y-6">
              {developmentSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-navy-800">{skill.name}</span>
                    <span className="text-gray-600">{skill.percentage}%</span>
                  </div>
                  <Progress 
                    value={isVisible ? skill.percentage : 0} 
                    className="h-2 bg-gray-200"
                    style={{ 
                      transition: 'all 1s ease', 
                      transitionDelay: `${index * 0.2}s` 
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tools & Technologies */}
        <div className="mt-16">
          <h3 className="heading-sm text-navy-800 border-b border-gray-200 pb-3 mb-8">Tools & Software</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div 
                key={tool} 
                className="flex items-center bg-gray-50 p-4 rounded-md animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle size={20} className="text-teal-500 mr-2" />
                <span className="text-navy-800">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
