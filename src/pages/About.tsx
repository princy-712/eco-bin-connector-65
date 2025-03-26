
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Recycle, Cpu, Users } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

const About = () => {
  const missionPoints = [
    'Reduce landfill waste by 50% in partner communities',
    'Optimize collection routes to minimize carbon emissions',
    'Promote recycling through community engagement initiatives',
    'Generate renewable energy from organic waste',
    'Create transparent, data-driven waste management systems',
    'Develop smart city solutions for environmental sustainability'
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      bio: 'Environmental engineer with 15+ years experience in waste management innovation.'
    },
    {
      name: 'David Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      bio: 'IoT specialist focused on creating intelligent sensor networks for urban applications.'
    },
    {
      name: 'Maya Patel',
      role: 'Head of Sustainability',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      bio: 'Environmental policy expert working to implement circular economy principles.'
    },
    {
      name: 'Carlos Martinez',
      role: 'Community Engagement Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      bio: 'Specializes in developing recycling education programs and community outreach.'
    }
  ];

  const technologies = [
    {
      icon: Cpu,
      title: 'IoT Sensors',
      description: 'Advanced fill-level sensors with long battery life and wireless connectivity to monitor waste bin status in real-time.'
    },
    {
      icon: Recycle,
      title: 'Renewable Integration',
      description: 'Technology that connects waste processing with clean energy generation, creating a circular resource model.'
    },
    {
      icon: Users,
      title: 'Community Platform',
      description: 'User-friendly mobile and web applications that engage citizens in sustainable waste management practices.'
    }
  ];

  return (
    <PageTransition>
      <main className="min-h-screen pt-24">
        {/* About Hero Section */}
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
                Creating <span className="text-gradient">Sustainable Communities</span> Through Smart Waste Management
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We're dedicated to transforming waste management through innovative technology, community engagement, and environmental stewardship.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Vision & Mission Section */}
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
                <p className="text-lg text-gray-600 mb-8">
                  We envision a world where waste is viewed as a resource, not a problem. Our mission is to create net-zero waste communities through intelligent technology and active citizen participation.
                </p>
                
                <div className="space-y-3">
                  {missionPoints.map((point, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="text-eco-green mt-1 flex-shrink-0" size={22} />
                      <span className="text-gray-700">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mx-auto max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-eco-green/20 to-eco-blue/20 rounded-xl blur-2xl"></div>
                  <div className="relative glass-card overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1536939459926-301728717817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Sustainable waste management" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Technology Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-eco-dark to-eco-dark/95 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
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
                className="text-lg text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                We combine cutting-edge hardware with powerful software to create a comprehensive waste management ecosystem that delivers measurable results.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div 
                    key={tech.title}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-eco-green to-eco-blue rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                    <p className="text-gray-300">{tech.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
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
                Meet Our Team
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our diverse team of experts is passionate about creating innovative solutions for environmental sustainability.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.name}
                  className="glass-card overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-eco-green font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Join Our Mission for a Sustainable Future
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Whether you're a municipality, business, or community organization, we're ready to partner with you to transform waste management in your area.
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
                  Contact Us Today
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default About;
