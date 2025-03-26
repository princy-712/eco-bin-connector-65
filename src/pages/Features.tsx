
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
  MessageSquare,
  Camera,
  LineChart,
  Mail,
  Phone,
  Calendar,
  Clock
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import FeatureCard from '@/components/FeatureCard';

const Features = () => {
  const features = [
    {
      icon: Lock,
      title: 'User Authentication & Authorization',
      description: 'Secure login system with role-based access control for administrators, collection personnel, and community users.',
      bulletPoints: [
        'Secure login for different user roles',
        'Role-based access control to ensure data privacy',
        'Multi-factor authentication for enhanced security'
      ],
      status: "active"
    },
    {
      icon: Activity,
      title: 'Real-Time Waste Bin Monitoring',
      description: 'Live dashboard with color-coded alerts for bin status with IoT integration for real-time updates.',
      bulletPoints: [
        'Green – Empty or low waste',
        'Yellow – Partially full',
        'Red – Almost full or overflowing (urgent collection required)',
        'Animated fill-level graphs updating in real-time',
        'AI-powered predictive insights for waste patterns'
      ],
      status: "active"
    },
    {
      icon: Camera,
      title: 'Camera-Based Monitoring',
      description: 'Advanced visual monitoring of waste bins with AI-powered waste identification for enhanced recycling.',
      bulletPoints: [
        'Live camera feeds to visually monitor bin status',
        'AI-based waste identification and classification',
        'Visual validation of overflow conditions',
        'Object detection for improper disposal'
      ],
      status: "coming soon"
    },
    {
      icon: BarChart3,
      title: 'Data Visualization & Analytics',
      description: 'Interactive charts and metrics on waste trends, collection efficiency, and environmental impact with downloadable reports.',
      bulletPoints: [
        'Customizable dashboards with key metrics',
        'Time-series analysis of waste generation patterns',
        'Collection efficiency reports and benchmarks',
        'Environmental impact assessments and carbon footprint tracking'
      ],
      status: "active"
    },
    {
      icon: Bell,
      title: 'Smart Notifications & Alerts',
      description: 'Automatic overflow warnings, maintenance reminders, and collection schedule updates via email and SMS.',
      bulletPoints: [
        'Push notifications for full or overflowing bins',
        'Scheduled maintenance reminders',
        'Collection route notifications for personnel',
        'Customizable alert thresholds and preferences'
      ],
      status: "active"
    },
    {
      icon: Map,
      title: 'Interactive Maps & Route Optimization',
      description: 'Geospatial display for waste bin locations, collection routes, and recycling facilities with AI-powered route optimization.',
      bulletPoints: [
        'GPS-enabled bin tracking with status icons',
        'Dynamic route optimization based on fill levels',
        'Traffic-aware collection path planning',
        'Heatmaps for identifying high-waste areas'
      ],
      status: "active"
    },
    {
      icon: MessageSquare,
      title: 'User Feedback & Grievance System',
      description: 'Integrated forms for reporting issues, tracking complaints, and community engagement with resolution timeline.',
      bulletPoints: [
        'User-friendly complaint submission forms',
        'Real-time status tracking for submitted issues',
        'Resolution workflow with assigned responsibilities',
        'Feedback collection for service improvement'
      ],
      status: "active"
    },
    {
      icon: Settings,
      title: 'Admin Panel & System Management',
      description: 'Comprehensive user management, system configurations, and performance monitoring tools for administrators.',
      bulletPoints: [
        'User account management and role assignment',
        'System configuration and threshold settings',
        'Performance monitoring and reporting tools',
        'Audit logs and security management'
      ],
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
                Our smart waste management platform combines cutting-edge technology with user-friendly interfaces to transform waste into opportunity: smart, sustainable, and efficient.
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
                  bulletPoints={feature.bulletPoints}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Feature Highlight Section - Real-Time Waste Bin Monitoring */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-eco-dark to-eco-dark/95 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Waste Management Dashboard</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Our intuitive dashboard transforms waste management with real-time updates, predictive analytics, and AI-driven insights that optimize collection routes and reduce environmental impact.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-eco-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Activity className="text-eco-green" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
                      <p className="text-gray-300">
                        Track bin fill levels with color-coded indicators that update instantly, allowing for timely and efficient collection management.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-eco-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <LineChart className="text-eco-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
                      <p className="text-gray-300">
                        Forecast when bins will reach capacity using AI algorithms that analyze historical waste generation patterns.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-eco-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Map className="text-eco-cyan" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Smart Route Optimization</h3>
                      <p className="text-gray-300">
                        Reduce fuel consumption and emissions with AI-powered collection routes that prioritize bins based on fill levels and location.
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
                Our platform is built on a modern, scalable tech stack designed for reliability, performance, and sustainability
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
