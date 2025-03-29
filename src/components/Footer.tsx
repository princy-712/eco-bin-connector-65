
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-eco-dark to-eco-dark/95 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-eco-green to-eco-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GT</span>
              </div>
              <span className="text-xl font-bold text-white">GreenTech</span>
            </Link>
            <p className="text-gray-300 max-w-xs">
              Revolutionizing waste management through smart technology and community engagement for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-eco-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-eco-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-eco-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-eco-green transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-eco-green transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-300 hover:text-eco-green transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-eco-green transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-eco-green transition-colors">Contact</Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-eco-green transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-eco-green transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-eco-green transition-colors">Real-Time Monitoring</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-eco-green transition-colors">AI-Powered Analytics</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-eco-green transition-colors">Smart Route Optimization</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-eco-green transition-colors">User Notifications</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-eco-green transition-colors">Admin Dashboard</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-eco-green transition-colors">Community Engagement</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-eco-green mt-1 flex-shrink-0" />
                <span className="text-gray-300">📍 Jabalpur Engineering College, Gokalpur, Jabalpur, Madhya Pradesh 482011</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-eco-green flex-shrink-0" />
                <span className="text-gray-300">📞 9340749064</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-eco-green flex-shrink-0" />
                <span className="text-gray-300">✉️ greentechfor21@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} GreenTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
