
import { Lightbulb, Shield, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Lightbulb,
      title: 'Problem-Solver',
      description: 'I analyze complex challenges and deliver elegant, efficient solutions.',
    },
    {
      icon: Shield,
      title: 'Reliable',
      description: 'Consistent delivery of high-quality work within deadlines.',
    },
    {
      icon: Target,
      title: 'Efficient',
      description: 'Optimized workflows and clean code for maximum performance.',
    },
  ];

  const timelineItems = [
    {
      year: '2020',
      title: 'Started as Volunteer',
      description: 'Began web development journey with community projects',
    },
    {
      year: '2021',
      title: 'Joined GlobalLink',
      description: 'Professional role developing business platforms',
    },
    {
      year: '2022',
      title: 'Zamdkotch Platform',
      description: 'Led development of Arabic learning platform',
    },
    {
      year: '2023',
      title: 'ESAR Success',
      description: 'Launched Saudi Arabia\'s leading car rental platform',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-[#25262A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{' '}
            <span className="text-[#64F4AB]">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with years of experience creating impactful digital solutions
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-[#2D2E32] rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#64F4AB]/30 group-hover:border-[#64F4AB] transition-colors">
                <highlight.icon className="w-10 h-10 text-[#64F4AB]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#64F4AB] transition-colors">
                {highlight.title}
              </h3>
              <p className="text-gray-400">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-[#64F4AB]/30"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-[#2D2E32] p-6 rounded-xl border border-[#64F4AB]/20 hover:border-[#64F4AB]/50 transition-colors">
                    <span className="text-[#FECD1A] font-bold text-lg">
                      {item.year}
                    </span>
                    <h4 className="text-white font-bold text-xl mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#64F4AB] rounded-full border-4 border-[#25262A]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'WordPress', 'Shopify', 'Node.js', 'PHP', 'JavaScript', 'Tailwind CSS', 'WooCommerce', 'Liquid', 'MongoDB'].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-[#2D2E32] text-[#64F4AB] rounded-full border border-[#64F4AB]/30 hover:border-[#64F4AB] hover:bg-[#64F4AB]/10 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
