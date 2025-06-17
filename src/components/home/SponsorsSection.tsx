import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { sponsors } from '../../assets/data/sponsors';
import { fadeIn, staggerContainer } from '../../utils/animations';

const SponsorsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Group sponsors by level
  const sponsorsByLevel = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.level]) {
      acc[sponsor.level] = [];
    }
    acc[sponsor.level].push(sponsor);
    return acc;
  }, {} as Record<string, typeof sponsors>);

  const levelTitles = {
    platinum: 'Patrocinadores Platina',
    gold: 'Patrocinadores Ouro',
    silver: 'Patrocinadores Prata',
    bronze: 'Patrocinadores Bronze',
  };

  return (
    <section className="py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={fadeIn('up')}>
            <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2">NOSSOS PATROCINADORES</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Parceiros que Apoiam Nossa Missão
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Somos gratos aos nossos patrocinadores cujo apoio nos permite entregar programas valiosos
              e iniciativas aos nossos membros e à comunidade de petróleo e gás.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Sponsors by level */}
        {(['platinum', 'gold', 'silver', 'bronze'] as const).map((level) => 
          sponsorsByLevel[level] && (
            <div key={level} className="mb-12 last:mb-0">
              <h4 className="text-xl font-bold text-center mb-8 text-gray-900 dark:text-white">{levelTitles[level]}</h4>
              
              <div 
                className={`grid gap-8 ${
                  level === 'platinum' 
                    ? 'grid-cols-1 md:grid-cols-2' 
                    : level === 'gold' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
                }`}
              >
                {sponsorsByLevel[level].map((sponsor, index) => (
                  <motion.a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeIn('up', index * 0.1)}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className={`
                      flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md
                      hover:shadow-lg transition-shadow duration-300
                      ${level === 'platinum' ? 'h-40' : level === 'gold' ? 'h-32' : 'h-24'}
                    `}
                  >
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default SponsorsSection;