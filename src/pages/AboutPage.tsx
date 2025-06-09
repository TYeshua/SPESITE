import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, staggerContainer } from '../utils/animations';
import { teamMembers } from '../assets/data/team';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 skew-y-3 transform origin-top-left z-0"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            ref={heroRef}
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "show" : "hidden"}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeIn('up')}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              About SPE Macaé
            </motion.h1>
            
            <motion.p
              variants={fadeIn('up', 0.1)}
              className="text-xl text-blue-100 mb-8"
            >
              Advancing knowledge and professional development in petroleum engineering since 1990.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission and Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            ref={missionRef}
            variants={staggerContainer}
            initial="hidden"
            animate={missionInView ? "show" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              variants={fadeIn('right')}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission and Vision</h2>
              
              <p className="text-gray-700 mb-6">
                The Society of Petroleum Engineers (SPE) Macaé Section was established in 1990 with a mission to collect, 
                disseminate, and exchange technical knowledge concerning the exploration, development and production of 
                oil and gas resources, and related technologies for the public benefit; and to provide opportunities for 
                professionals to enhance their technical and professional competence.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our vision is to be the primary resource for technical knowledge and professional development 
                in the oil and gas industry within our region, while fostering collaboration between industry 
                professionals, academia, and students.
              </p>
              
              <div className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                "We are committed to providing our members with the resources they need to thrive in the 
                petroleum industry while contributing to the sustainable development of energy resources."
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn('left')}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Technical Excellence</h3>
                <p className="text-gray-600">
                  We promote technical excellence through workshops, conferences, and knowledge sharing.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Professional Development</h3>
                <p className="text-gray-600">
                  We provide opportunities for career growth and skills enhancement.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-600">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Community Engagement</h3>
                <p className="text-gray-600">
                  We engage with the local community through outreach and educational programs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We foster innovation and cutting-edge solutions for industry challenges.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* History Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              For over three decades, SPE Macaé has been supporting the professional community in Brazil.
              Here are some key milestones in our journey.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            <div className="space-y-12">
              {/* 1990 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900">1990</h3>
                  <p className="text-gray-600">
                    SPE Macaé Section was officially established to support the growing oil and gas industry in the region.
                  </p>
                </div>
                
                <div className="hidden md:block w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow z-10"></div>
                
                <div className="flex-1 md:pl-8">
                  <div className="bg-white p-4 rounded-lg shadow-md md:mt-0">
                    <span className="text-blue-600 font-bold">Foundation</span>
                  </div>
                </div>
              </div>
              
              {/* 2000 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 order-1 md:order-1 mb-4 md:mb-0">
                  <div className="bg-white p-4 rounded-lg shadow-md md:mt-0">
                    <span className="text-blue-600 font-bold">Expansion</span>
                  </div>
                </div>
                
                <div className="hidden md:block w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow z-10 order-2"></div>
                
                <div className="flex-1 md:pl-8 order-1 md:order-3">
                  <h3 className="text-xl font-bold text-gray-900">2000</h3>
                  <p className="text-gray-600">
                    Membership reached 500 professionals. Began hosting annual technical conferences.
                  </p>
                </div>
              </div>
              
              {/* 2010 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900">2010</h3>
                  <p className="text-gray-600">
                    Established student chapter partnerships with local universities. Launched mentorship program.
                  </p>
                </div>
                
                <div className="hidden md:block w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow z-10"></div>
                
                <div className="flex-1 md:pl-8">
                  <div className="bg-white p-4 rounded-lg shadow-md md:mt-0">
                    <span className="text-blue-600 font-bold">Educational Initiatives</span>
                  </div>
                </div>
              </div>
              
              {/* Present */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 order-1 md:order-1 mb-4 md:mb-0">
                  <div className="bg-white p-4 rounded-lg shadow-md md:mt-0">
                    <span className="text-blue-600 font-bold">Digital Transformation</span>
                  </div>
                </div>
                
                <div className="hidden md:block w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow z-10 order-2"></div>
                
                <div className="flex-1 md:pl-8 order-1 md:order-3">
                  <h3 className="text-xl font-bold text-gray-900">Present</h3>
                  <p className="text-gray-600">
                    Currently focusing on digital transformation, sustainability, and energy transition initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            ref={teamRef}
            variants={staggerContainer}
            initial="hidden"
            animate={teamInView ? "show" : "hidden"}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeIn('up')}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Leadership Team
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.1)}
              className="max-w-2xl mx-auto text-gray-600"
            >
              Our board members are experienced professionals dedicated to serving the
              SPE community and advancing the organization's mission.
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={fadeIn('up', index * 0.1)}
                initial="hidden"
                animate={teamInView ? "show" : "hidden"}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 p-4 flex space-x-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-colors shadow"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.email}`}
                      className="bg-white p-2 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-colors shadow"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;