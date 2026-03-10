import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Mail } from 'lucide-react';
import { teamsData } from '../assets/data/team';
import { fadeIn, staggerContainer } from '../utils/animations';
import MagicBento from '../components/ui/MagicBento';
import { useLanguage } from '../contexts/LanguageContext';

const TeamPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Default to the first year in the data (usually current year).
  const [selectedYear, setSelectedYear] = useState(teamsData.length > 0 ? teamsData[0].year : '');

  const activeTeamData = teamsData.find(team => team.year === selectedYear);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 z-0"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            ref={heroRef}
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "show" : "hidden"}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              variants={fadeIn('up')}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              {t('page.team.hero_title')}
            </motion.h1>
            
            <motion.p
              variants={fadeIn('up', 0.1)}
              className="text-xl text-blue-100 mb-8"
            >
              {t('page.team.hero_desc')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Mural Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {teamsData.map((team) => (
              <button
                key={team.year}
                onClick={() => setSelectedYear(team.year)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedYear === team.year
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {team.label}
              </button>
            ))}
          </div>

          <motion.div
            key={selectedYear} // to re-trigger animations on year change
            ref={teamRef}
            variants={staggerContainer}
            initial="hidden"
            animate={teamInView ? "show" : "hidden"}
            className={selectedYear === '2026' ? "w-full" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"}
          >
            {selectedYear === '2026' && activeTeamData?.members ? (
              <MagicBento members={activeTeamData.members} />
            ) : (
              activeTeamData?.members.map((member, index) => (
                <motion.div
                  key={member.id}
                  variants={fadeIn('up', index * 0.1)}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group border-2 border-blue-600 dark:border-cyan-500 flex flex-col h-full">
                    <div className="relative h-72 overflow-hidden border-b border-blue-600 dark:border-cyan-500 shrink-0">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="flex gap-2">
                          {member.linkedin && (
                            <a 
                              href={member.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-white p-2 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-colors"
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          )}
                          <a 
                            href={`mailto:${member.email}`}
                            className="bg-white p-2 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-colors"
                          >
                            <Mail className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="font-bold text-xl text-gray-900 dark:text-white">{member.name}</h4>
                      <p className="text-blue-600 dark:text-blue-400 mb-4">
                        {language === 'en' && member.position_en ? member.position_en : member.position}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-4 text-justify mb-4 flex-grow">
                        {language === 'en' && member.bio_en ? member.bio_en : member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
          
          {(!activeTeamData || activeTeamData.members.length === 0) && (
            <div className="text-center text-gray-500 dark:text-gray-400 py-12">
              {t('page.team.no_members')}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TeamPage;