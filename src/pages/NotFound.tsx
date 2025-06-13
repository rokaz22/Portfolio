
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2D2E32] via-[#25262A] to-[#2D2E32] px-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-[#64F4AB] opacity-20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-[#64F4AB]/30 rounded-full animate-pulse">
              <div className="w-full h-full border-4 border-transparent border-t-[#64F4AB] rounded-full animate-spin"></div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even the best developers encounter broken links!
          </p>
          <div className="bg-[#25262A] p-4 rounded-lg border border-[#64F4AB]/20 inline-block">
            <p className="text-sm text-gray-500">
              Attempted URL: <span className="text-[#FECD1A]">{location.pathname}</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FECD1A] text-[#2D2E32] font-semibold rounded-lg hover:bg-[#FFAF29] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FECD1A]/30"
          >
            <Home size={20} />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25262A] text-white font-semibold rounded-lg border border-[#64F4AB]/30 hover:border-[#64F4AB] hover:bg-[#64F4AB]/10 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 p-6 bg-[#25262A] rounded-xl border border-[#64F4AB]/20">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-center gap-2">
            <Search size={20} className="text-[#64F4AB]" />
            Looking for something specific?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Projects', href: '/#projects' },
              { name: 'About Me', href: '/#about' },
              { name: 'Contact', href: '/contact' },
              { name: 'Services', href: '/#services' },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block p-3 text-center text-gray-400 hover:text-[#64F4AB] hover:bg-[#2D2E32] rounded-lg transition-all duration-300 border border-transparent hover:border-[#64F4AB]/30"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
