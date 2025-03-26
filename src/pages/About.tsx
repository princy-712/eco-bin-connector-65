
import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Leaf, Zap, Users, Award, Globe, Bolt, TrendingUp } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

const About = () => {
  const team = [
    {
      name: 'Leadership Team',
      description: 'Our leadership team brings decades of experience in waste management, sustainability, and technology innovation.',
      icon: Users
    },
    {
      name: 'Engineering Experts',
      description: 'Our engineers combine expertise in IoT, AI, and environmental science to build sustainable solutions.',
      icon: Bolt
    },
    {
      name: 'Sustainability Advocates',
      description: 'Dedicated environmental specialists ensuring our solutions maximize positive ecological impact.',
      icon: Leaf
    },
    {
      name: 'Community Partners',
      description: 'We work closely with local communities, governments, and businesses to implement effective solutions.',
      icon: Globe
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'The Vision',
      description: 'GreenTech was founded with a vision to transform waste management using smart technology.'
    },
    {
      year: '2019',
      title: 'First Prototype',
      description: 'Developed and tested our first smart waste bin prototype with basic monitoring capabilities.'
    },
    {
      year: '2020',
      title: 'Pilot Program',
      description: 'Launched our first pilot program in partnership with local municipalities, achieving 20% cost reduction.'
    },
    {
      year: '2021',
      title: 'AI Integration',
      description: 'Enhanced our platform with AI-powered analytics and predictive capabilities.'
    },
    {
      year: '2022',
      title: 'National Expansion',
      description: 'Expanded to multiple cities nationwide, serving over 15 municipalities and numerous businesses.'
    },
    {
      year: '2023',
      title: 'Present Day',
      description: 'Continually innovating with advanced features and working toward a global presence.'
    }
  ];

  return (
    <PageTransition>
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <motion.span 
                className="inline-block px-3 py-1 text-sm font-medium bg-eco-green/10 text-eco-green rounded-full mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our Story
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                About <span className="text-gradient">GreenTech</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We're on a mission to create net-zero waste communities through innovative technology, data-driven insights, and community engagement.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Vision & Mission */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision & Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At GreenTech, we envision a world where waste is treated as a resource rather than a burden. Our mission is to enable communities and organizations to manage waste intelligently, minimize environmental impact, and create sustainable ecosystems.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-eco-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Recycle className="text-eco-green" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Zero Waste Future</h3>
                      <p className="text-gray-600">
                        We're working toward a future where waste is minimized through intelligent collection, efficient recycling, and circular economy principles.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-eco-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="text-eco-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Data-Driven Decisions</h3>
                      <p className="text-gray-600">
                        We harness the power of data and AI to transform waste management from a reactive service to a proactive, optimized system.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-eco-cyan/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="text-eco-cyan" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Renewable Integration</h3>
                      <p className="text-gray-600">
                        We promote the integration of waste-to-energy technologies, encouraging renewable energy generation from organic waste.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative mx-auto max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-eco-green/30 to-eco-blue/30 rounded-xl blur-2xl"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1563694983071-1a4ba8918ea2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
                      alt="Sustainable waste management" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Technology Used */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-eco-dark to-eco-dark/95 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our Technology
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We leverage cutting-edge technologies to revolutionize waste management and create sustainable solutions
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                className="glass-card bg-white/5 border-white/10 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-eco-green/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-eco-green" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">IoT Sensors</h3>
                <p className="text-gray-300">
                  Our smart bins feature ultrasonic fill-level sensors, weight sensors, and environmental monitors that provide real-time data on waste status.
                </p>
              </motion.div>
              
              <motion.div 
                className="glass-card bg-white/5 border-white/10 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-eco-blue/20 rounded-full flex items-center justify-center mb-4">
                  <Bolt className="text-eco-blue" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">AI & Machine Learning</h3>
                <p className="text-gray-300">
                  Our platform uses advanced algorithms to predict fill rates, optimize collection routes, and identify patterns in waste generation.
                </p>
              </motion.div>
              
              <motion.div 
                className="glass-card bg-white/5 border-white/10 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-eco-cyan/20 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="text-eco-cyan" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Renewable Energy</h3>
                <p className="text-gray-300">
                  Our solutions support waste-to-energy conversion, helping communities generate renewable power from organic waste materials.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our <span className="text-gradient">Team</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                A passionate group of innovators dedicated to solving waste management challenges through technology
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => {
                const Icon = member.icon;
                return (
                  <motion.div 
                    key={member.name}
                    className="glass-card p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-eco-green to-eco-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{member.name}</h3>
                    <p className="text-gray-600">{member.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Timeline */}
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
                Our <span className="text-gradient">Journey</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                From concept to reality — the evolution of GreenTech's smart waste management platform
              </motion.p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-eco-green via-eco-blue to-eco-cyan"></div>
              
              {/* Timeline Items */}
              <div className="relative space-y-12">
                {timeline.map((item, index) => (
                  <motion.div 
                    key={item.year}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                      <div className="glass-card p-6">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-2/12 flex justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-eco-green to-eco-blue rounded-full flex items-center justify-center text-white font-bold">
                        {item.year}
                      </div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default About;
