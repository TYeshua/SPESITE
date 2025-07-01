import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sponsors } from '../../assets/data/sponsors';

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  }),
};

const levelTitles = {
  platinum: 'Patrocinadores Platina',
  gold: 'Patrocinadores Ouro',
  silver: 'Patrocinadores Prata',
  bronze: 'Patrocinadores Bronze',
  apoiadores: 'Apoiadores',
};

const levelColors = {
  platinum: 'text-cyan-400',
  gold: 'text-yellow-500',
  silver: 'text-gray-400',
  bronze: 'text-amber-700',
  apoiadores: 'text-blue-600',
};

const SponsorsSection: React.FC = () => {
  const levels = ['platinum', 'gold', 'silver', 'bronze', 'apoiadores'] as const;

  const sponsorsByLevel = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.level]) acc[sponsor.level] = [];
    acc[sponsor.level].push(sponsor);
    return acc;
  }, {} as Record<string, typeof sponsors>);

  const [levelIndex, setLevelIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentLevel = levels[levelIndex];
  const currentSponsors = sponsorsByLevel[currentLevel] || [];

  const pages = [];
  for (let i = 0; i < currentSponsors.length; i += 3) {
    pages.push(currentSponsors.slice(i, i + 3));
  }

  const handleNext = () => {
    setDirection(1);
    if (pageIndex < pages.length - 1) {
      setPageIndex((prev) => prev + 1);
    } else if (levelIndex < levels.length - 1) {
      setLevelIndex((prev) => prev + 1);
      setPageIndex(0);
    } else {
      // Reinicia do começo
      setLevelIndex(0);
      setPageIndex(0);
    }
  };

  const handlePrev = () => {
    setDirection(-1);
    if (pageIndex > 0) {
      setPageIndex((prev) => prev - 1);
    } else if (levelIndex > 0) {
      const prevLevel = levels[levelIndex - 1];
      const prevPages = Math.ceil((sponsorsByLevel[prevLevel]?.length || 0) / 3);
      setLevelIndex((prev) => prev - 1);
      setPageIndex(prevPages - 1);
    }
  };

  // ⏱ Transição automática a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [levelIndex, pageIndex]);

  return (
    <section className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2">NOSSOS PATROCINADORES</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Parceiros que Apoiam Nossa Missão
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            
          </p>
        </div>

        <div className="mb-8 text-center">
  <h4 className={`text-xl font-bold mb-4 ${levelColors[currentLevel]}`}>
    {levelTitles[currentLevel]}
  </h4>
</div>

<div className="relative overflow-hidden" style={{ height: 160 }}>
  <AnimatePresence initial={false} custom={direction}>
    <motion.div
      key={`${levelIndex}-${pageIndex}`}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute top-0 left-0 w-full h-full flex justify-center gap-6"
    >
      {pages[pageIndex]?.map((sponsor) => (
        <a
          key={sponsor.id}
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-[200px] h-[120px] bg-white dark:bg-white border-2 border-blue-700 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
        >
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="max-h-20 w-auto object-contain"
          />
        </a>
      ))}
    </motion.div>
  </AnimatePresence>

  {/* Navegação manual */}
  <button
    onClick={handlePrev}
    className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-400 hover:text-gray-700 dark:hover:text-white text-2xl z-10"
  >
    &larr;
  </button>
  <button
    onClick={handleNext}
    className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-gray-700 dark:hover:text-white text-2xl z-10"
  >
    &rarr;
  </button>
</div>

      </div>
    </section>
  );
};

export default SponsorsSection;