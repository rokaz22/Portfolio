
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'LoopBazaar',
      description: 'Amazon-style online marketplace with advanced filtering, payment integration, and vendor management system.',
      tech: ['WordPress', 'WooCommerce', 'Custom Plugins', 'PHP'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Tatroma',
      description: 'Luxury furniture e-commerce site with 3D product visualization and custom configurator.',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'ESAR',
      description: "Saudi Arabia's leading peer-to-peer car rental platform with real-time booking and payment processing.",
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Zamdkotch',
      description: 'Arabic learning and courses platform with interactive lessons and progress tracking.',
      tech: ['WordPress', 'Custom LMS', 'JavaScript', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'GlobalLink Trade Hub',
      description: 'Business development, event booking & design hub with comprehensive management system.',
      tech: ['WordPress', 'Elementor', 'MyCred', 'AffiliateWP'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      liveUrl: '#',
      codeUrl: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-[#2D2E32] text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Projects I've{' '}
            <span className="text-[#64F4AB]">Brought to Life</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, here are some of the digital experiences I've crafted. 
            Each project represents a unique challenge solved with modern technologies and innovative approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#25262A] rounded-xl overflow-hidden border border-[#64F4AB]/20 hover:border-[#64F4AB]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#64F4AB]/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#25262A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#64F4AB] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#FECD1A]/20 text-[#FECD1A] text-sm rounded-full border border-[#FECD1A]/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-[#64F4AB] hover:text-[#FECD1A] transition-colors font-medium"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex items-center gap-2 text-[#64F4AB] hover:text-[#FECD1A] transition-colors font-medium"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-[#25262A] p-12 rounded-2xl border border-[#64F4AB]/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with modern technologies and exceptional design.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#FECD1A] text-[#2D2E32] font-bold rounded-lg hover:bg-[#FFAF29] transition-all duration-300 hover:scale-105 text-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
