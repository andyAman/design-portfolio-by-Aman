
import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  index: number;
}

const ProjectCard = ({ title, category, description, imageUrl, index }: ProjectCardProps) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg group h-[350px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.2,
        type: "spring",
        damping: 12 
      }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.3 } 
      }}
    >
      {/* 3D-like card effect with pseudo-elements */}
      <div className="absolute inset-0 bg-navy-800/20 transform -skew-y-3 scale-110 -z-10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 1.2 }
          }}
          transition={{ 
            type: "tween",
            ease: "easeOut",
            duration: 1.2
          }}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-navy-800/95 via-navy-800/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 backdrop-blur-sm">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
        >
          <span className="text-teal-500 font-medium text-sm mb-2 inline-block">{category}</span>
          <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
          <p className="text-white/80 text-sm line-clamp-2 mb-4">{description}</p>
          <a 
            href="#" 
            className="inline-flex items-center text-white text-sm font-medium hover:text-teal-500 transition-colors"
          >
            <span className="mr-2">View Project</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, repeatType: "loop", duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRightIcon size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-teal-500/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
      <div className="absolute bottom-3 left-3 w-6 h-6 rounded-full bg-navy-500/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>
    </motion.div>
  );
};

export default ProjectCard;
