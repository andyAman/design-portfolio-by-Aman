
import { ArrowRightIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  index: number;
}

const ProjectCard = ({ title, category, description, imageUrl, index }: ProjectCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg animate-fadeIn"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-navy-800/90 via-navy-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-teal-500 font-medium text-sm mb-2">{category}</span>
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/80 text-sm line-clamp-2 mb-4">{description}</p>
        <a href="#" className="inline-flex items-center text-white text-sm font-medium hover:text-teal-500 transition-colors">
          View Project <ArrowRightIcon size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
