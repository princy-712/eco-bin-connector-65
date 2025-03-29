
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Recycle, 
  MapPin, 
  BarChart3,
  Bell,
  AlertCircle,
  Leaf,
  FileBox,
  Zap,
  Trash2
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import AIWasteDetector from '@/components/AIWasteDetector';

const Features = () => {
  return (
    <PageTransition>
      <main className="min-h-screen pt-24">
        {/* Features Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <motion.span 
                className="inline-block px-3 py-1 text-sm font-medium bg-eco-green/10 text-eco-green rounded-full mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Smart Waste Management
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                AI-Powered <span className="text-gradient">Waste Detection</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Our smart waste detection system combines computer vision with AI to transform how we identify, classify, and dispose of waste - making sustainable choices simple and accessible for everyone.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* AI Waste Detection Demo */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span 
                className="inline-block px-3 py-1 text-sm font-medium bg-eco-blue/10 text-eco-blue rounded-full mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Interactive Demo
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Try Our Waste Detection System
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Experience our computer vision technology that automatically identifies waste types and provides proper disposal guidance.
              </motion.p>
            </div>
            
            <AIWasteDetector />
          </div>
        </section>
        
        {/* Main Features Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Key Features
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our comprehensive AI-powered waste management system offers multiple features designed for sustainability and environmental responsibility.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1: AI-Powered Waste Identification */}
              <motion.div 
                className="glass-card p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-eco-green to-eco-blue rounded-lg flex items-center justify-center mb-6">
                  <Brain className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI-Powered Waste Identification</h3>
                <p className="text-gray-600 mb-6">
                  Simply upload or capture an image, and our AI model instantly classifies the waste into categories.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
                      <FileBox className="text-blue-500" size={24} />
                    </div>
                    <div>
                      <p className="font-medium">Recyclable</p>
                      <p className="text-sm text-gray-500">Plastic, paper, metal, glass</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
                      <Leaf className="text-green-500" size={24} />
                    </div>
                    <div>
                      <p className="font-medium">Organic</p>
                      <p className="text-sm text-gray-500">Food scraps, garden waste</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
                      <Zap className="text-purple-500" size={24} />
                    </div>
                    <div>
                      <p className="font-medium">E-Waste</p>
                      <p className="text-sm text-gray-500">Batteries, electronics</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
                      <AlertCircle className="text-red-500" size={24} />
                    </div>
                    <div>
                      <p className="font-medium">Hazardous</p>
                      <p className="text-sm text-gray-500">Chemicals, biohazards</p>
                    </div>
                  </div>
                </div>
                
                <p className="mt-6 text-gray-600">
                  The system provides real-time analysis with high accuracy, helping users make informed disposal decisions.
                </p>
              </motion.div>
              
              {/* Feature 2: Smart Disposal Recommendations */}
              <motion.div 
                className="glass-card p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-eco-green to-eco-blue rounded-lg flex items-center justify-center mb-6">
                  <Recycle className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Smart Disposal Recommendations</h3>
                <p className="text-gray-600 mb-6">
                  Our AI not only identifies waste but also guides you on where and how to dispose of it responsibly.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-eco-green mr-2">✅</span>
                    <span>Organic Waste → Composting or fertilizer production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-green mr-2">✅</span>
                    <span>Plastic & Paper → Recycling plants or drop-off centers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-green mr-2">✅</span>
                    <span>E-Waste → Certified disposal units or refurbishing programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-green mr-2">✅</span>
                    <span>Hazardous Waste → Safe disposal at specialized facilities</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-eco-green/10 rounded-lg">
                  <p className="text-gray-700 font-medium">
                    <span className="font-bold">💡 Encouraging a Circular Economy:</span> Instead of sending waste to landfills, we connect users with industries that can repurpose materials, promoting sustainability and resource efficiency.
                  </p>
                </div>
              </motion.div>
              
              {/* Feature 3: Find Nearby Waste Processing Facilities */}
              <motion.div 
                className="glass-card p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-eco-green to-eco-blue rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Find Nearby Waste Processing Facilities</h3>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">📍 Need a drop-off point? We've got you covered!</span>
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-eco-green mr-2">✅</span>
                    <span>Locate nearby recycling centers, composting plants, and waste collection hubs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-green mr-2">✅</span>
                    <span>Get directions, facility details, and waste acceptance policies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-green mr-2">✅</span>
                    <span>Integrated with Google Maps for real-time navigation</span>
                  </li>
                </ul>
                
                <p className="text-gray-600 font-medium">
                  🌍 Turn waste into a resource by sending it where it's needed most!
                </p>
              </motion.div>
              
              {/* Feature 4: Track Your Environmental Impact */}
              <motion.div 
                className="glass-card p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-eco-green to-eco-blue rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Track Your Environmental Impact</h3>
                <p className="text-gray-600 mb-4">
                  Want to know how much waste you're diverting from landfills? Our system provides:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-eco-green mr-2">✅</span>
                    <span>Personal waste footprint analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-green mr-2">✅</span>
                    <span>Monthly sustainability insights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-green mr-2">✅</span>
                    <span>AI-driven recommendations to reduce waste</span>
                  </li>
                </ul>
                
                <p className="text-gray-600 font-medium">
                  🌱 Small actions make a big impact—track your progress and contribute to a greener planet!
                </p>
              </motion.div>
              
              {/* Feature 5: Smart Alerts & Continuous AI Learning */}
              <motion.div 
                className="glass-card p-8 rounded-xl md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-eco-green to-eco-blue rounded-lg flex items-center justify-center mb-6">
                  <Bell className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Smart Alerts & Continuous AI Learning</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-eco-green/10 rounded-full flex items-center justify-center mb-3">
                      <Bell className="text-eco-green" size={20} />
                    </div>
                    <h4 className="font-semibold mb-2">Reminders & Schedules</h4>
                    <p className="text-sm text-gray-600">
                      Get timely alerts for waste collection schedules in your area
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-eco-blue/10 rounded-full flex items-center justify-center mb-3">
                      <Leaf className="text-eco-blue" size={20} />
                    </div>
                    <h4 className="font-semibold mb-2">Sustainability Tips</h4>
                    <p className="text-sm text-gray-600">
                      Receive personalized tips to reduce waste and improve recycling habits
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-eco-cyan/10 rounded-full flex items-center justify-center mb-3">
                      <Brain className="text-eco-cyan" size={20} />
                    </div>
                    <h4 className="font-semibold mb-2">Continuous Learning</h4>
                    <p className="text-sm text-gray-600">
                      Our AI improves with each interaction, getting smarter with your feedback
                    </p>
                  </div>
                </div>
                
                <p className="mt-6 text-center text-gray-600 font-medium">
                  The more you use GreenTech, the smarter it gets!
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative glass-card p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-eco-green/10 to-eco-blue/10"></div>
              
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <motion.h2 
                  className="text-3xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Ready to Transform Waste Management?
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-600 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Join municipalities, businesses, and communities worldwide who are revolutionizing their approach to waste with GreenTech's AI-powered solution.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href="/contact" 
                    className="btn-primary inline-block"
                  >
                    Schedule a Demo
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Features;
