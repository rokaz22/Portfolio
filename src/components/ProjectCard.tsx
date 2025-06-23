import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming you have shadcn/ui Button or similar

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      // Updated classes to match ProjectsSection's project card
      className="group relative bg-[#2D2E32] rounded-xl overflow-hidden border border-[#64F4AB]/20 hover:border-[#64F4AB]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#64F4AB]/10"
    >
      <div className="relative overflow-hidden">
        <img
          // Image source remains the same
          src={`/images/${project.image}`}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Overlay from ProjectsSection */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2E32] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        {/* Title styling from ProjectsSection */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#64F4AB] transition-colors">
          {project.title}
        </h3>
        {/* Description styling from ProjectsSection */}
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4"> {/* Added mb-4 for consistency */}
          {project.techStack.map((tech) => (
            <span
              key={tech}
              // Tech stack badge styling from ProjectsSection
              className="px-3 py-1 bg-[#FECD1A]/20 text-[#FECD1A] text-xs rounded-full border border-[#FECD1A]/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {/* Live Demo button styling from ProjectsSection */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#64F4AB] hover:text-[#FECD1A] transition-colors text-sm" // Changed from Button to anchor with specific styling
          >
            <ExternalLink size={16} /> {/* Changed icon size to 16 for consistency */}
            Live Demo
          </a>
          {/* View Code button styling from ProjectsSection */}
          {project.githubUrl && ( <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#64F4AB] hover:text-[#FECD1A] transition-colors text-sm"// Changed from Button to anchor with specific styling
          > View Code
            <Github size={16} /> {/* Changed icon size to 16 for consistency*/}
           </a>  )}
         
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;