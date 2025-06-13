
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:mahmoud@dotfolio.dev', label: 'Email', color: 'hover:text-[#64F4AB]' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/#projects' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-[#25262A] border-t border-[#64F4AB]/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#64F4AB]">Dotfolio</h3>
            <p className="text-gray-400 leading-relaxed">
              Building modern, scalable, and user-centric digital experiences. 
              Specializing in WordPress, Shopify, and React development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 bg-[#2D2E32] rounded-lg flex items-center justify-center border border-[#64F4AB]/20 hover:border-[#64F4AB] transition-all duration-300 hover:scale-110 text-gray-400 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-[#64F4AB] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Ready to start your next project?</p>
              <a
                href="mailto:mahmoud@dotfolio.dev"
                className="text-[#64F4AB] hover:text-[#FECD1A] transition-colors"
              >
                mahmoud@dotfolio.dev
              </a>
            </div>
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#FECD1A] text-[#2D2E32] font-semibold rounded-lg hover:bg-[#FFAF29] transition-all duration-300 hover:scale-105"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#64F4AB]/20 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Dotfolio. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-red-400" /> by Mahmoud Shaheen
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
