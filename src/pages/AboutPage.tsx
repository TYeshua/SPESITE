import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, staggerContainer } from '../utils/animations';
import { teamsData } from '../assets/data/team';
import { Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t, language } = useLanguage();
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

  const currentTeam = teamsData.length > 0 ? teamsData[0].members : [];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 transform origin-top-left z-0"></div>
        
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
              {t('page.about.hero_title')}
            </motion.h1>
            
            <motion.p
              variants={fadeIn('up', 0.1)}
              className="text-xl text-blue-100 mb-8"
            >
              {t('page.about.hero_desc')}
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission and Values */}
      <section className="py-16 md:py-24 dark:bg-gray-800">
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('page.about.mission_title')}</h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 flex text-justify">
                {t('page.about.mission_p1')}
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 flex text-justify">
                {t('page.about.mission_p2')}
              </p>
              
              <div className="border-l-4 border-blue-600 pl-4 italic text-gray-600 dark:text-gray-400">
                {t('page.about.mission_quote')}
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn('left')}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">{t('page.about.val1_title')}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('page.about.val1_desc')}
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-t-4 border-green-600">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">{t('page.about.val2_title')}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('page.about.val2_desc')}
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-t-4 border-yellow-600">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">{t('page.about.val3_title')}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('page.about.val3_desc')}
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-t-4 border-red-600">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">{t('page.about.val4_title')}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('page.about.val4_desc')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* History Timeline */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('page.about.history_title')}</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              {t('page.about.history_desc')}
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800"></div>
            
            <div className="space-y-12">
              {/* 1985 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('page.about.hist1_year')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('page.about.hist1_desc')}
                  </p>
                </div>
                
                <div className="hidden md:block w-10 h-10 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow z-10"></div>
                
                <div className="flex-1 md:pl-8">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md md:mt-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">{t('page.about.hist1_title')}</span>
                  </div>
                </div>
              </div>
              
              {/* 1989 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 order-1 md:order-1 mb-4 md:mb-0">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md md:mt-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">{t('page.about.hist2_title')}</span>
                  </div>
                </div>
                
                <div className="hidden md:block w-10 h-10 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow z-10 order-2"></div>
                
                <div className="flex-1 md:pl-8 order-1 md:order-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('page.about.hist2_year')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('page.about.hist2_desc')}
                  </p>
                </div>
              </div>
              
              {/* 1995 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('page.about.hist3_year')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('page.about.hist3_desc')}
                  </p>
                </div>
                
                <div className="hidden md:block w-10 h-10 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow z-10"></div>
                
                <div className="flex-1 md:pl-8">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md md:mt-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">{t('page.about.hist3_title')}</span>
                  </div>
                </div>
              </div>
              
              {/* Present */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 order-1 md:order-1 mb-4 md:mb-0">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md md:mt-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">{t('page.about.hist4_title')}</span>
                  </div>
                </div>
                
                <div className="hidden md:block w-10 h-10 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow z-10 order-2"></div>
                
                <div className="flex-1 md:pl-8 order-1 md:order-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('page.about.hist4_year')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('page.about.hist4_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 md:py-24 dark:bg-gray-800">
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
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {t('page.about.leadership_title')}
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.1)}
              className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            >
              {t('page.about.leadership_desc')}
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTeam.map((member, index) => (
              <motion.div
                key={member.id}
                variants={fadeIn('up', index * 0.1)}
                initial="hidden"
                animate={teamInView ? "show" : "hidden"}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
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
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.email}`}
                      className="bg-white p-2 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-colors shadow"
                      aria-label={`E-mail para ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {language === 'en' && member.position_en ? member.position_en : member.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'en' && member.bio_en ? member.bio_en : member.bio}
                  </p>
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