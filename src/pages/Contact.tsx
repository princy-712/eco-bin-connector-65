
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    organization: '',
    phone: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    
    // In a real implementation, you would send the form data to a backend server
    // For demonstration, we're just showing a success message after a delay
    setTimeout(() => {
      setFormStatus('idle');
      setFormState({
        name: '',
        email: '',
        message: '',
        organization: '',
        phone: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '📞 9340749064',
      action: 'tel:+919340749064',
      actionText: 'Call us'
    },
    {
      icon: Mail,
      title: 'Email',
      details: '✉️ greentechfor21@gmail.com',
      action: 'mailto:greentechfor21@gmail.com',
      actionText: 'Send email'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '📍 Jabalpur Engineering College, Gokalpur, Jabalpur, Madhya Pradesh 482011',
      action: 'https://maps.google.com/?q=Jabalpur+Engineering+College',
      actionText: 'Get directions'
    }
  ];

  const faqs = [
    {
      question: "How does the smart bin monitoring system work?",
      answer: "Our smart bins are equipped with ultrasonic sensors that measure fill levels in real-time. This data is transmitted to our cloud platform, where it's analyzed and visualized on your dashboard, showing color-coded statuses for easy monitoring."
    },
    {
      question: "How can GreenTech help reduce waste management costs?",
      answer: "By optimizing collection routes based on actual fill levels, GreenTech reduces unnecessary collections, saves fuel, and minimizes vehicle wear. Our clients typically see cost reductions of 25-30% after implementation."
    },
    {
      question: "Is GreenTech suitable for my organization?",
      answer: "GreenTech is adaptable for various entities including municipalities, businesses, campuses, and residential communities. We offer customizable solutions that scale according to your needs, whether you manage 10 bins or 10,000."
    },
    {
      question: "What kind of support does GreenTech provide?",
      answer: "We offer comprehensive technical support, regular system updates, training for your team, and dedicated account management to ensure you get the most out of our smart waste management solutions."
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
                Get In Touch
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Contact <span className="text-gradient">GreenTech</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Have questions or want to learn more? We're here to help! Reach out to us for inquiries, partnerships, or support.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Contact Info Cards & Form Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    className="glass-card p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-eco-green to-eco-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                    <p className="text-gray-600 mb-4">{info.details}</p>
                    <a 
                      href={info.action} 
                      className="text-eco-green hover:text-eco-blue font-medium transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.actionText}
                    </a>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below, and our team will get back to you as soon as possible. We're eager to hear from you!
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-eco-green focus:border-eco-green"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-eco-green focus:border-eco-green"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formState.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-eco-green focus:border-eco-green"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-eco-green focus:border-eco-green"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-eco-green focus:border-eco-green"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                    disabled={formStatus !== 'idle'}
                  >
                    {formStatus === 'idle' ? (
                      <>
                        <Send className="mr-2" size={18} />
                        Send Message
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <CheckCircle className="mr-2" size={18} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <AlertCircle className="mr-2" size={18} />
                        Error Sending
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
              
              <motion.div
                className="relative h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="h-full glass-card overflow-hidden rounded-xl">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.057024888877!2d79.98619097496486!3d23.16958747913887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981afe605b235ed%3A0x1f1e2a5ade8c0bc8!2sJabalpur%20Engineering%20College!5e0!3m2!1sen!2sin!4v1695123456789!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GreenTech Location"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Support Section / FAQ */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-eco-green to-eco-blue rounded-full flex items-center justify-center mx-auto mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <HelpCircle className="text-white" size={32} />
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Support <span className="text-gradient">Center</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Find answers to common questions about GreenTech's smart waste management solutions
              </motion.p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    className="glass-card p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 mb-4">Didn't find what you're looking for?</p>
                <a href="mailto:greentechfor21@gmail.com" className="btn-primary inline-flex items-center">
                  <Mail className="mr-2" size={18} />
                  Email Support
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Contact;
