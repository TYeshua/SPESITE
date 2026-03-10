import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { events } from '../../assets/data/events';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { fadeIn, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../contexts/LanguageContext';

const EventsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categoryLabels: Record<string, string> = {
    conference: t('events.category.conference'),
    workshop: t('events.category.workshop'),
    webinar: t('events.category.webinar'),
    networking: t('events.category.networking'),
  };

  return (
    <section className="py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-12"
        >
          <motion.div variants={fadeIn('up')}>
            <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2">{t('events.subtitle')}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('events.title')}
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              {t('events.desc')}
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.slice(0, 3).map((event, index) => (
            <motion.div
              key={event.id}
              variants={fadeIn('up', index * 0.1)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <Card hoverEffect className="h-full flex flex-col bg-white dark:bg-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">
                    {categoryLabels[event.category]}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-4">
                    {language === 'en' && event.title_en ? event.title_en : event.title}
                  </h4>

                  <div className="mb-4 flex-grow">
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{language === 'en' && event.date_en ? event.date_en : event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="text-sm">{language === 'en' && event.ajudance_en ? event.ajudance_en : event.ajudance}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {language === 'en' && event.description_en ? event.description_en : event.description}
                    </p>
                  </div>

                  {event.externalUrl ? (
                    <a
                      href={event.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4"
                    >
                      <Button variant="outline" className="w-full">
                        {t('events.btn.website')}
                      </Button>
                    </a>
                  ) : (
                    <Link to={`/eventos/${event.id}`} className="mt-4">
                      <Button variant="outline" className="w-full">
                        {t('events.btn.details')}
                      </Button>
                    </Link>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mt-12"
        >
          <Link to="/eventos">
            <Button variant="primary">{t('events.btn.all')}</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
