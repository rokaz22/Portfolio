
import { useEffect, useState } from 'react';

const TechStackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const technologies = [
    { name: 'React.js', icon: '⚛️', color: '#61DAFB' },
    { name: 'WordPress', icon: '📝', color: '#21759B' },
    { name: 'Shopify', icon: '🛍️', color: '#96BF48' },
    { name: 'Tailwind CSS', icon: '🎨', color: '#06B6D4' },
    { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
    { name: 'PHP', icon: '🐘', color: '#777BB4' },
    { name: 'Canva', icon: '🎨', color: '#F05032' },

    { name: 'Figma', icon: '🎯', color: '#F24E1E' },
    { name: 'MySQL', icon: '🗄️', color: '#4479A1' },
    { name: 'Tailwind CSS', icon: '🎨', color: '#06B6D4' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <section className="py-20 px-6 bg-[#2D2E32] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech{' '}
            <span className="text-[#FECD1A]">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Auto-scrolling carousel */}
        <div className="relative">
          <div className="flex animate-pulse">
            <div className="flex space-x-8 animate-scroll">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                >
                  <div className="w-24 h-24 bg-[#25262A] rounded-xl flex items-center justify-center border border-[#64F4AB]/20 hover:border-[#64F4AB]/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#64F4AB]/20">
                    <span className="text-3xl">{tech.icon}</span>
                  </div>
                  <p className="text-center text-sm text-gray-400 mt-3 group-hover:text-[#64F4AB] transition-colors">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured tech highlight */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-[#25262A] rounded-2xl border-2 border-[#64F4AB]/30 hover:border-[#64F4AB] transition-all duration-300">
            <div className="text-6xl mb-4">
              {technologies[currentIndex].icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {technologies[currentIndex].name}
            </h3>
            <div className="w-16 h-1 bg-[#64F4AB] mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
