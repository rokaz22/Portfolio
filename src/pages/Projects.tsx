
import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'GLOBALLINK TRADE HUB',
      description: 'event booking, payment integration, and design services with integrated CRM and analytics.',
     image: 'Globallink.png',
      techStack: ['WordPress', 'Event Calendar', 'Booking System','CSS', 'CRM Integration','Stripe'],
      liveUrl: 'https://globallinktradehub.com/',
      // githubUrl: 'https://github.com',
      category: 'Business Platform'
    },
    {
      id: 2,
      title: 'TATROMA',
      description: 'Luxury furniture e-commerce platform featuring 3D product visualization, custom configurator, and premium user experience.',
      image: 'tatroma.png',
      techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS','Stripe'],
      liveUrl: 'https://tatroma.ca/',
           // githubUrl: 'https://github.com',

      category: 'Ecommerce'
    },{
      id: 3,
      title: 'LUMEN LANDSCAPING',
      description: 'Clearly outline all their services. Each service could have its own dedicated page with descriptions, benefits, and relevant portfolio images.',
      image: 'lumen landescape.png',
      techStack: ['WordPress', 'WooCommerce', 'Custom Plugins', 'PHP', 'MySQL','Google Maps API'],
      liveUrl: 'https://lumenlandscaping.ca/',
            // githubUrl: 'https://github.com',

      category: 'Business Platform'
    },
   
   
    {
      id: 4,
      title: 'JAFCA',
      description: 'Multi-purpose business platform for development, amazon-style online marketplace with advanced vendor management, and payment integration.',
      image: 'jafca.png',
      techStack: ['WordPress', 'Elementor','CSS', 'WooCommerce', 'Dokan','Stripe'],
      liveUrl: 'https://jafca.ca/',
            // githubUrl: 'https://github.com',

      category: 'Ecommerce'
    }, {
      id: 5,
      title: 'zmedCoach',
      description: 'Comprehensive Arabic learning platform with interactive lessons, progress tracking, and gamified learning experience.',
      image: 'zmedCoach.png',
      techStack: ['WordPress', 'LearnDash', 'CSS','Custom Themes', 'Ajax', 'MySQL','LMS','WooCommerce','Google Maps API'],
      liveUrl: 'https://zmedcoach.com/',
        // githubUrl: 'https://github.com',

      category: 'E-learning'
    }, 
    
    {
      id: 6,
      title: 'ESARCAR',
      description: 'Saudi Arabia\'s leading peer-to-peer car rental platform with real-time geolocation, booking management, and payment processing.',
      image: 'esarCar.png',
      techStack: ['Wordpress','WooCommerce', 'Booking System', 'CSS', 'Google Maps API', 'Stripe'],
      liveUrl: 'https://esarcar.dotwebagency.net/',
           // githubUrl: 'https://github.com',

      category: 'Ecommerce'
    },
     {
      id: 7,
      title: 'GLOBE TRADE COSMETICS STORE',
      description: 'an online store selling various cosmetic and beauty products.',
      image: 'Globe trade.png',
      techStack: ['Wordpress', 'Custom theme', 'CSS','Google Maps API', 'Stripe'],
      liveUrl: 'https://glob-trade.com/',
           // githubUrl: 'https://github.com',

      category: 'Ecommerce'
    },{
      id: 8,
      title: 'NAS CREATIONS',
      description: 'a portfolio website designed to highlight Nastaran’s exceptional work as a designer.',
      image: 'nastaran.png',
      techStack: ['Wordpress', 'CSS', 'Custom theme'],
      liveUrl: 'https://nascreations.ca/',
           // githubUrl: 'https://github.com',

      category: 'Portfolio'
    },
    {
      id: 9,
      title: 'ARABS IN NEURO',
      description: 'Non-profit Organization: They explicitly state they are an incorporated not-for-profit organization in Canada.',
      image: 'arabs in neuro.png',
      techStack: ['React', 'next', 'Tailwind'],
      liveUrl: 'https://arabsinneuro.org/',
           githubUrl: 'https://github.com/arabsinneuro/arabs-in-neuro/',
      category: 'E-learning'

    },
    {
      id: 10,
      title: 'ARIYAN ARTS',
      description: 'an online store specializing in handcrafted and elegant items.',
      image: 'ariyan Art.png',
      techStack: ['Shopify', 'Custom theme'],
      liveUrl: 'https://ariyanarts.ca/',
          //  githubUrl: '',
           category: 'Ecommerce'
    }
  ];

  const categories = ['All', 'Ecommerce', 'Portfolio', 'E-learning', 'Business Platform'];

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
