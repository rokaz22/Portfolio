
import { Code, Palette, ShoppingCart, Smartphone, Globe, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom WordPress Development',
      description: 'Tailored WordPress solutions with custom themes, plugins, and advanced functionality.',
    },
    {
      icon: ShoppingCart,
      title: 'Shopify Customization',
      description: 'Complete Shopify store setup, theme customization, and app integration.',
    },
    {
      icon: Globe,
      title: 'E-commerce & Marketplace Solutions',
      description: 'Full-scale e-commerce platforms with payment gateways and inventory management.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design with modern aesthetics and seamless user experiences.',
    },
    {
      icon: Users,
      title: 'Business & Event Platforms',
      description: 'Comprehensive business solutions with booking systems and management tools.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Web Apps',
      description: 'Mobile-first applications built with React and modern web technologies.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#2D2E32]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services I{' '}
            <span className="text-[#FECD1A]">Provide</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-[#25262A] rounded-xl border border-[#64F4AB]/20 hover:border-[#64F4AB]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#64F4AB]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#64F4AB]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#64F4AB]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#64F4AB]/30 transition-colors">
                  <service.icon className="w-8 h-8 text-[#64F4AB]" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#64F4AB] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
