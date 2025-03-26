
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-eco-green/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-eco-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-eco-light-green/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container z-10 pt-32 pb-12 md:pt-40 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="flex flex-col space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-1">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-eco-green/10 text-eco-green rounded-full">
                Revolutionizing Waste Management
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Intelligent Waste Management For A <span className="text-gradient">Sustainable Future</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Our smart waste management system uses IoT sensors, real-time tracking, and data analytics to optimize collection routes, reduce environmental impact, and promote community recycling initiatives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link to="/contact" className="btn-primary flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/features" 
                className="px-6 py-3 font-medium text-eco-dark border border-gray-300 rounded-md hover:border-eco-green hover:text-eco-green transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Features</span>
              </Link>
            </div>
            
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-eco-green"></div>
                  <span>Reduce Waste by 40%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-eco-blue"></div>
                  <span>Cut Collection Costs by 30%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-eco-cyan"></div>
                  <span>Generate Clean Energy</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-green/20 to-eco-blue/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white bg-opacity-50 backdrop-blur-sm border border-white border-opacity-30 shadow-xl rounded-2xl p-6 h-full">
                <div className="h-full w-full bg-gradient-to-br from-eco-green to-eco-blue rounded-xl overflow-hidden">
                  <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-70"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
