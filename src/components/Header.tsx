
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-slate-900">
              kapcall<span className="text-emerald-600">.ai</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Benefits
            </a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">
              About
            </a>
            <Button variant="outline" className="mr-2">
              Log In
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Request Demo
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-colors">
                How It Works
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Benefits
              </a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">
                About
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline">Log In</Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700">Request Demo</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
