
import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  // Categories for filtering
  const categories = ['All', 'Web Design', 'Mobile App', 'UI/UX', 'Branding'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  // Project data
  const projects = [
    {
      id: 1,
      title: "Eco-Friendly Website Redesign",
      category: "Web Design",
      description: "A complete overhaul of an eco-conscious brand's online presence with responsive design and improved user experience.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Finance Mobile Application",
      category: "Mobile App",
      description: "An intuitive mobile banking app focused on personal finance management and investment tracking.",
      imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "E-commerce UX Research & Design",
      category: "UI/UX",
      description: "Comprehensive user research and design for an online marketplace, increasing conversion rates by 35%.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      title: "Tech Startup Brand Identity",
      category: "Branding",
      description: "Full brand identity design for a tech startup, including logo, color palette, typography and brand guidelines.",
      imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      title: "Educational Platform Interface",
      category: "UI/UX",
      description: "User interface design for an educational platform focused on accessibility and engagement.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      title: "Restaurant Website Design",
      category: "Web Design",
      description: "Modern and appetizing web design for a high-end restaurant chain with online reservation system.",
      imageUrl: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&q=80",
    },
  ];

  // Filter projects by category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('projects');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="section-padding bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-teal-500 font-medium mb-2">My Work</p>
          <h2 className="heading-lg text-navy-800">Recent Projects</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mt-4"></div>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-sm ${
                activeCategory === category 
                  ? 'bg-navy-800 text-white shadow-lg shadow-navy-800/20' 
                  : 'bg-white/70 text-navy-800 hover:bg-navy-100 border border-white/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              imageUrl={project.imageUrl}
              index={index}
            />
          ))}
        </motion.div>
        
        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#" 
            className="relative px-6 py-3 font-bold text-white rounded-lg group overflow-hidden inline-block"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500 to-teal-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent"></span>
            <span className="relative flex items-center">
              View All Projects 
              <motion.div 
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRightIcon size={16} />
              </motion.div>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
