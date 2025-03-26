
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  BarChart3, 
  Map, 
  Bell, 
  Users, 
  Lock, 
  Settings, 
  MessageSquare
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import FeatureCard from '@/components/FeatureCard';

const Features = () => {
  const features = [
    {
      icon: Lock,
      title: 'User Authentication & Authorization',
      description: 'Secure login system with role-based access control for administrators, collection personnel, and community users.',
      status: "active"
    },
    {
      icon: Activity,
      title: 'Real-Time Waste Bin Monitoring',
      description: 'Live dashboard with color-coded alerts for bin status (Green = Empty, Yellow = Half-Full, Red = Full) with IoT integration.',
      status: "active"
    },
    {
      icon: BarChart3,
      title: 'Data Visualization & Analytics',
      description: 'Interactive charts and metrics on waste trends, collection efficiency, and environmental impact with downloadable reports.',
      status: "active"
    },
    {
      icon: Bell,
      title: 'User Notifications & Alerts',
      description: 'Automatic overflow warnings, maintenance reminders, and collection schedule updates via email and SMS.',
      status: "active"
    },
    {
      icon: Map,
      title: 'Interactive Maps',
      description: 'Geospatial display for waste bin locations, collection routes, and recycling facilities with real-time tracking.',
      status: "active"
    },
    {
      icon: MessageSquare,
      title: 'User Feedback & Grievance System',
      description: 'Integrated forms for reporting issues, tracking complaints, and community engagement with resolution timeline.',
      status: "active"
    },
    {
      icon: Settings,
      title: 'Admin Control Panel',
      description: 'Comprehensive user management, system configurations, and performance monitoring tools for administrators.',
      status: "active"
    }
  ];

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
                GreenTech <span className="text-gradient">Features</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Our smart waste management platform combines cutting-edge technology with user-friendly interfaces to optimize collection, promote recycling, and create measurable environmental impact.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Main Features Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  status={feature.status}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Feature Highlight Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-eco-dark to-eco-dark/95 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Real-Time Waste Collection Dashboard</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Our intuitive dashboard provides a comprehensive overview of your waste management operations with real-time updates, historical data, and predictive analytics.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-eco-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Activity className="text-eco-green" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Live Monitoring</h3>
                      <p className="text-gray-300">
                        Track bin fill levels, collection status, and vehicle locations in real-time with automatic refresh and alerts.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-eco-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="text-eco-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
                      <p className="text-gray-300">
                        Analyze waste patterns, predict collection needs, and optimize routes with AI-powered data analysis.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-eco-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Map className="text-eco-cyan" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
                      <p className="text-gray-300">
                        Visualize bin locations, collection routes, and recycling centers with detailed geospatial mapping.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mx-auto max-w-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-eco-green/30 to-eco-blue/30 rounded-xl blur-2xl"></div>
                  <div className="relative glass-card overflow-hidden border border-white/10">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Dashboard Interface" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Technical Architecture Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Technical <span className="text-gradient">Architecture</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our platform is built on a modern, scalable tech stack designed for reliability and performance
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3">Frontend</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-eco-green rounded-full"></span>
                    <span>React.js</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-eco-green rounded-full"></span>
                    <span>Tailwind CSS</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-eco-green rounded-full"></span>
                    <span>Framer Motion</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-eco-green rounded-full"></span>
                    <span>Recharts</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3">Backend</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-eco-blue rounded-full"></span>
                    <span>Node.js</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-eco-blue rounded-full"></span>
                    <span>Express.js</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-eco-blue rounded-full"></span>
                    <span>RESTful APIs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-eco-blue rounded-full"></span>
                    <span>WebSockets</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3">Database</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-eco-cyan rounded-full"></span>
                    <span>PostgreSQL</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-eco-cyan rounded-full"></span>
                    <span>Time Series DB</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-eco-cyan rounded-full"></span>
                    <span>GIS Extensions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-eco-cyan rounded-full"></span>
                    <span>Redis Cache</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3">IoT & Integration</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-eco-green rounded-full"></span>
                    <span>MQTT Protocol</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-eco-green rounded-full"></span>
                    <span>Sensors API</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-eco-green rounded-full"></span>
                    <span>Maps Integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-eco-green rounded-full"></span>
                    <span>SMS/Email Gateway</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 md:py-24">
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
                  Ready to Revolutionize Your Waste Management?
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-600 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Join municipalities, businesses, and communities worldwide who are transforming their waste operations with GreenTech's smart, sustainable solution.
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
