
import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              kapcall<span className="text-emerald-500">.ai</span>
            </div>
            <p className="text-gray-400">
              Empowering private equity funds with intelligent capital call lending solutions.
            </p>
            <div className="flex space-x-4">
              <Linkedin size={20} className="text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Twitter size={20} className="text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Mail size={20} className="text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">API Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 KapCall.ai. All rights reserved. Licensed and regulated financial services provider.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
