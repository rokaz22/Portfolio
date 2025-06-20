
import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'LoopBazaar',
      description: 'Amazon-style online marketplace with advanced vendor management, payment integration, and sophisticated filtering system.',
      image: 'photo-1556742049-0cfed4f6a45d',
      techStack: ['WordPress', 'WooCommerce', 'Custom Plugins', 'PHP', 'MySQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'E-commerce'
    },
    {
      id: 2,
      title: 'Tatroma',
      description: 'Luxury furniture e-commerce platform featuring 3D product visualization, custom configurator, and premium user experience.',
      image: 'photo-1586023492125-27b2c045efd7',
      techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'ThreeJS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'E-commerce'
    },
    {
      id: 3,
      title: 'ESAR',
      description: 'Saudi Arabia\'s leading peer-to-peer car rental platform with real-time geolocation, booking management, and payment processing.',
      image: 'photo-1449824913935-59a10b8d2000',
      techStack: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'Web App'
    },
    {
      id: 4,
      title: 'Zamdkotch',
      description: 'Comprehensive Arabic learning platform with interactive lessons, progress tracking, and gamified learning experience.',
      image: 'photo-1434030216411-0b793f4b4173',
      techStack: ['WordPress', 'LearnDash', 'Custom Themes', 'Ajax', 'MySQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'E-learning'
    },
    {
      id: 5,
      title: 'GlobalLink Trade Hub',
      description: 'Multi-purpose business platform for development, event booking, and design services with integrated CRM and analytics.',
      image: 'photo-1507003211169-0a1dd7228f2d',
      techStack: ['WordPress', 'Event Calendar', 'Booking System', 'CRM Integration'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'Business Platform'
    }
  ];

  const categories = ['All', 'E-commerce', 'Web App', 'E-learning', 'Business Platform'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-dark-primary">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 dark-section">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">My Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            A showcase of real-world projects that demonstrate expertise in creating modern, 
            scalable, and user-focused digital solutions. Each project tells a unique story 
            of innovation and problem-solving.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 bg-dark-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
              onClick={() => setActiveFilter(category)}
        className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
          activeFilter === category
            ? 'bg-[#FECD1A] text-[#2D2E32] shadow-lg scale-105' // Active button
            : 'glass-effect text-white hover:text-[#FECD1A] hover:scale-105' // Inactive button
        }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 bg-dark-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="animate-fade-in">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/60 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
