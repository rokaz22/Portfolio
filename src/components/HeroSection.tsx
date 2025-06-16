
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingIcons = ['⚛️', '🎨', '💻', '🚀', '⚡', '🎯'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2D2E32] via-[#25262A] to-[#2D2E32]">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#64F4AB] rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((icon, index) => (
        <div
          key={index}
          className="absolute text-2xl opacity-10 animate-bounce pointer-events-none"
          style={{
            left: `${10 + (index * 15)}%`,
            top: `${20 + (index * 10)}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + (index * 0.5)}s`,
          }}
        >
          {icon}
        </div>
      ))}

      {/* Cursor Follower */}
      <div
        className="fixed w-4 h-4 bg-[#64F4AB]/30 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-[#64F4AB] to-white bg-clip-text text-transparent leading-tight">
            Hi, I'm{' '}
            <span className="text-[#FECD1A] drop-shadow-lg">
              Mahmoud Shaheen
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Front-End & Wordpress Developer
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I don’t just design websites, I design experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-[#FECD1A] text-[#2D2E32] font-semibold rounded-full transition-all duration-300 hover:bg-[#FFAF29] hover:scale-105 hover:shadow-xl hover:shadow-[#FECD1A]/30"
            >
              View My Work
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#64F4AB] rounded-full animate-ping"></span>
            </a>
            
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-[#FFAF29] text-[#FFAF29] font-semibold rounded-full transition-all duration-300 hover:bg-[#FFAF29] hover:text-[#2D2E32] hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#64F4AB] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#64F4AB] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
