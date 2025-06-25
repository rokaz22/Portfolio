import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // This is the most important line - it stops the redirect
    setIsSubmitting(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formData,
      }),
    })
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        toast({
          title: "Submission Failed!",
          description: "There was an error sending your message. Please try again later.",
          variant: "destructive",
        });
        console.error("Form submission error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mahmoud@dotfolio.dev',
      href: 'mailto:mahmoud@dotfolio.dev',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Available Worldwide',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-6 bg-gradient-to-br from-[#2D2E32] via-[#25262A] to-[#D2E32]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Let's Build{' '}
            <span className="text-[#64F4AB]">Something Amazing</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to turn your ideas into reality? I'd love to hear about your project and discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              {/* --- The ACTION attribute has been removed from this form --- */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                    <label>
                        Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-[#25262A] border border-[#64F4AB]/20 rounded-lg text-white placeholder-gray-400 focus:border-[#64F4AB] focus:outline-none transition-colors peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-4 text-gray-400 transition-all peer-focus:-translate-y-6 peer-focus:text-[#64F4AB] peer-focus:text-sm peer-valid:-translate-y-6 peer-valid:text-[#64F4AB] peer-valid:text-sm">
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-[#25262A] border border-[#64F4AB]/20 rounded-lg text-white placeholder-gray-400 focus:border-[#64F4AB] focus:outline-none transition-colors peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-4 text-gray-400 transition-all peer-focus:-translate-y-6 peer-focus:text-[#64F4AB] peer-focus:text-sm peer-valid:-translate-y-6 peer-valid:text-[#64F4AB] peer-valid:text-sm">
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-[#25262A] border border-[#64F4AB]/20 rounded-lg text-white placeholder-gray-400 focus:border-[#64F4AB] focus:outline-none transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-4 text-gray-400 transition-all peer-focus:-translate-y-6 peer-focus:text-[#64F4AB] peer-focus:text-sm peer-valid:-translate-y-6 peer-valid:text-[#64F4AB] peer-valid:text-sm">
                    Subject
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-[#25262A] border border-[#64F4AB]/20 rounded-lg text-white placeholder-gray-400 focus:border-[#64F4AB] focus:outline-none transition-colors resize-none peer"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-4 text-gray-400 transition-all peer-focus:-translate-y-6 peer-focus:text-[#64F4AB] peer-focus:text-sm peer-valid:-translate-y-6 peer-valid:text-[#64F4AB] peer-valid:text-sm">
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#FECD1A] text-[#2D2E32] font-semibold rounded-lg transition-all duration-300 hover:bg-[#FFAF29] hover:scale-105 hover:shadow-xl hover:shadow-[#FECD1A]/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-[#2D2E32] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          {/* ...The rest of your component remains the same... */}
        </div>
      </div>
    </div>
  );
};

export default Contact;