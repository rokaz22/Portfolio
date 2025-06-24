
import { Lightbulb, Shield, Target } from 'lucide-react';
import { Calendar, MapPin, Coffee, Code } from 'lucide-react';

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
    year: '2024 - Present',
    title: 'WordPress Developer (GlobalLink Trade Hub Inc.)',
    description: 'Spearheaded website enhancement and maintenance, focusing on multi-vendor platforms and interactive features.',
  },
  {
    year: '2024',
    title: 'Volunteer (GlobalLink Trade Hub Inc.)',
    description: 'Began as a volunteer, working on website enhancement and maintenance.',
  },
  {
    year: '2023 - 2024',
    title: 'Web Designer & Developer (Zmedcoach)',
    description: 'Designed and implemented WooCommerce solutions for an online course platform, maintaining 99.9% uptime.',
  },
  {
    year: '2022 - 2024',
    title: 'Freelancer WordPress Developer',
    description: 'Developed responsive websites using WordPress, Shopify, and Webflow, enhancing performance through SEO.',
  },
  {
    year: '2020 - 2022',
    title: 'Digital Marketing Specialist (Snaptiks)',
    description: 'Managed social media campaigns, increasing engagement by 40%.',
  },
];
  return (
    <div className="min-h-screen bg-[#2D2E32] text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
      
 {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">About </span><span className="text-[#64F4AB]">Me</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital experiences that matter. I believe in writing clean, efficient code and 
                building applications that are not just functional, but delightful to use.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or enjoying a good cup of coffee while sketching out the 
                next big idea.
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-white/60">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-mint-green mr-2 " />
                  Markham, ON
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-mint-green mr-2" />
                  Available for Projects
                </div>
                <div className="flex items-center">
                  <Coffee className="h-4 w-4 text-mint-green mr-2" />
                  Coffee Enthusiast
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-effect rounded-2xl p-8">
                <img
                  src="../../public/images/Profile Photo3.png"
                  alt="Mahmoud Shaheen"
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-mint-green/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

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
           {/* Mobile Timeline */}
          <div className="md:hidden">
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-[#64F4AB] rounded-full"></div>
                  <div className="absolute left-2 top-4 w-px h-full bg-[#64F4AB]/30"></div>
                  <div className="bg-[#25262A] p-6 rounded-xl border border-[#64F4AB]/20">
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
              ))}
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
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
                      <h4 className="text-white font-bold  mb-3">
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
            {['React', 'WordPress', 'Shopify', 'PHP', 'JavaScript', 'Tailwind CSS', 'WooCommerce'].map((skill) => (
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
