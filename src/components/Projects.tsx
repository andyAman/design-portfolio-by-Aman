
import { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  // Categories for filtering
  const categories = ['All', 'Web Design', 'Mobile App', 'UI/UX', 'Branding'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Eco-Friendly Website Redesign',
      category: 'Web Design',
      description: 'A complete overhaul of an eco-conscious brand's online presence with responsive design and improved user experience.',
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'Finance Mobile Application',
      category: 'Mobile App',
      description: 'An intuitive mobile banking app focused on personal finance management and investment tracking.',
      imageUrl: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'E-commerce UX Research & Design',
      category: 'UI/UX',
      description: 'Comprehensive user research and design for an online marketplace, increasing conversion rates by 35%.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      title: 'Tech Startup Brand Identity',
      category: 'Branding',
      description: 'Full brand identity design for a tech startup, including logo, color palette, typography and brand guidelines.',
      imageUrl: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80',
    },
    {
      id: 5,
      title: 'Educational Platform Interface',
      category: 'UI/UX',
      description: 'User interface design for an educational platform focused on accessibility and engagement.',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    },
    {
      id: 6,
      title: 'Restaurant Website Design',
      category: 'Web Design',
      description: 'Modern and appetizing web design for a high-end restaurant chain with online reservation system.',
      imageUrl: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&q=80',
    },
  ];

  // Filter projects by category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-teal-500 font-medium mb-2">My Work</p>
          <h2 className="heading-lg text-navy-800">Recent Projects</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mt-4"></div>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-navy-800 text-white' 
                  : 'bg-white text-navy-800 hover:bg-navy-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <a href="#" className="btn-secondary">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
