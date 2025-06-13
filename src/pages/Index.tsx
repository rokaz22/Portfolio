
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TechStackSection from '../components/TechStackSection';

const Index = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <AboutSection />
      <TechStackSection />
    </div>
  );
};

export default Index;
