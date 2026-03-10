import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { fadeIn, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image side */}
          <motion.div 
            variants={fadeIn('right')}
            className="relative mb-12 lg:mb-0"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="primeiroano.jpg" 
                alt="amazontech" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 right-0 md:-right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-[90%] md:max-w-none">
              <p className="text-blue-600 dark:text-blue-400 font-bold text-xl">{t('about.caption_title')}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{t('about.caption_desc')}</p>
            </div>
          </motion.div>
          
          {/* Text side */}
          <motion.div 
            variants={fadeIn('left')}
            className="space-y-6"
          >
            <div>
              <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2">{t('about.subtitle')}</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.title')}
              </h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              {t('about.desc')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t('about.mission_title')}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t('about.mission_desc')}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t('about.vision_title')}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t('about.vision_desc')}
                </p>
              </div>
            </div>
            
            <Link to="/sobre">
              <Button variant="primary">
                {t('about.btn')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;