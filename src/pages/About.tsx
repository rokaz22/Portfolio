
import { Lightbulb, Shield, Target } from 'lucide-react';

const About = () => {
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
    <div className="min-h-screen bg-[#2D2E32] text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About{' '}
            <span className="text-[#64F4AB]">Me</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Passionate developer with years of experience creating impactful digital solutions. 
            I specialize in WordPress, Shopify, and React development, turning ideas into powerful web experiences.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-24 h-24 bg-[#25262A] rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#64F4AB]/30 group-hover:border-[#64F4AB] transition-colors">
                <highlight.icon className="w-12 h-12 text-[#64F4AB]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#64F4AB] transition-colors">
                {highlight.title}
              </h3>
              <p className="text-gray-400 text-lg">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">My Journey</h2>
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
                    <div className="bg-[#25262A] p-8 rounded-xl border border-[#64F4AB]/20 hover:border-[#64F4AB]/50 transition-colors">
                      <span className="text-[#FECD1A] font-bold text-xl">
                        {item.year}
                      </span>
                      <h4 className="text-white font-bold text-2xl mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#64F4AB] rounded-full border-4 border-[#2D2E32]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-12">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'WordPress', 'Shopify', 'Node.js', 'PHP', 'JavaScript', 'Tailwind CSS', 'WooCommerce', 'Liquid', 'MongoDB'].map((skill) => (
              <span
                key={skill}
                className="px-8 py-4 bg-[#25262A] text-[#64F4AB] rounded-full border border-[#64F4AB]/30 hover:border-[#64F4AB] hover:bg-[#64F4AB]/10 transition-all duration-300 text-lg font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
