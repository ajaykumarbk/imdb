import React from 'react';
import { Film, Mail, Instagram, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-10 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Film className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold tracking-tight">MovieDB</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              The ultimate destination for movie and TV show enthusiasts. Discover, review, and track your favorite content.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Movies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">TV Shows</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Popular</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Top Rated</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Upcoming</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Account</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">My Profile</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Watchlist</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Settings</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} MovieDB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;