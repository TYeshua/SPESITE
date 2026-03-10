import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Users } from 'lucide-react';
import { teamsData } from '../../assets/data/team';
import Button from '../ui/Button';
import MagicBento from '../ui/MagicBento';
import { fadeIn, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../contexts/LanguageContext';

const TeamSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentTeamObj = teamsData.length > 0 ? teamsData[0] : null;
  const currentTeam = currentTeamObj ? currentTeamObj.members : [];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={fadeIn('up')}>
            <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2">{t('team.subtitle')}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('team.title')}
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              {t('team.desc')}
            </p>
          </motion.div>
        </motion.div>
        
        {currentTeamObj?.year === '2026' ? (
          <MagicBento members={currentTeam} />
        ) : (
          <>
            <style>{`
              .hide-scrollbar::-webkit-scrollbar { display: none; }
              .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 hide-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:overflow-visible sm:pb-0">
              {currentTeam.slice(0, 8).map((member, index) => (
              <motion.div
                key={member.id}
                variants={fadeIn('up', index * 0.1)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="w-[85vw] flex-shrink-0 snap-center sm:w-auto sm:flex-shrink-1"
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
            ))}
            </div>
          </>
        )}
        
        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mt-12 flex justify-center"
        >
          <Link to="/equipe">
            <Button variant="outline" className="flex items-center gap-2 group">
              <Users className="w-5 h-5 group-hover:text-white" />
              {t('team.btn')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;