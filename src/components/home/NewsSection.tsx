import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeInOut' },
  }, // <-- Add comma here
  // Animação de saída
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  }),
};

// 🔹 Dados embutidos direto aqui
const newsList = [
  {
    id: 1,
    title: "Título",
    image: "farolzinho.png",
    description: "Descrição",
    link: "https://example.com/lab",
  },
  {
    id: 2,
    title: "Título",
    image: "/images/news2.jpg",
    description: "Descrição",
    link: "https://example.com/congresso",
  },
  {
    id: 3,
    title: "Título",
    image: "/images/news3.jpg",
    description: "Descrição",
    link: "https://example.com/congresso",
  },
  {
    id: 4,
    title: "Título", // <- Corrigido aqui
    image: "/images/news4.jpg",
    description: "Descrição",
    link: "https://example.com/congresso",
  },
  {
    id: 5,
    title: "Título",
    image: "/images/news5.jpg",
    description: "Descrição",
    link: "https://example.com/congresso",
  },
];

const useResponsiveCards = () => {
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerPage(1); // mobile
      } else {
        setCardsPerPage(3); // desktop
      }
    };

    updateCards();
    window.addEventListener('resize', updateCards);
    return () => window.removeEventListener('resize', updateCards);
  }, []);

  return cardsPerPage;
};

const NewsSection: React.FC = () => {
  const cardsPerPage = useResponsiveCards();
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const pages = [];
  for (let i = 0; i < newsList.length; i += cardsPerPage) {
    pages.push(newsList.slice(i, i + cardsPerPage));
  }

  const handleNext = () => {
    setDirection(1);
    setPageIndex((prev) => (prev + 1) % pages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setPageIndex((prev) => (prev - 1 + pages.length) % pages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [pageIndex, cardsPerPage]);

  return (
    <section className="py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2">NOVIDADES</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Fique por dentro das últimas notícias
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Acompanhe atualizações, conquistas e informações importantes da comunidade acadêmica e da indústria.
          </p>
        </div>

        <div className="relative overflow-hidden" style={{ height: 360 }}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={pageIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute top-0 left-0 w-full h-full flex justify-center gap-6"
            >
              {pages[pageIndex].map((news) => (
                <Card
                  key={news.id}
                  hoverEffect
                  className="w-[300px] sm:w-[320px] md:w-[340px] bg-white dark:bg-gray-700 flex flex-col border-2 border-blue-600 dark:border-cyan-500"
                >
                  <div className="relative h-40 overflow-hidden rounded-t-lg border border-blue-600 dark:border-cyan-500">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {news.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
                      {news.description}
                    </p>
                    {news.link && (
                      <a
                        href={news.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4"
                      >
                        <Button variant="outline" className="w-full">
                          Ler mais
                        </Button>
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Botões de navegação - Desktop */}
          <button
            onClick={handlePrev}
            className="hidden sm:block absolute top-1/2 left-2 -translate-y-1/2 text-gray-400 hover:text-gray-700 dark:hover:text-white text-2xl z-10"
          >
            &larr;
          </button>
          <button
            onClick={handleNext}
            className="hidden sm:block absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-gray-700 dark:hover:text-white text-2xl z-10"
          >
            &rarr;
          </button>
        </div>

        {/* Botões de navegação - Mobile */}
        <div className="sm:hidden flex justify-center mt-6">
          <button
            onClick={handlePrev}
            className="mr-4 text-gray-500 hover:text-gray-800 dark:hover:text-white text-xl"
          >
            &larr;
          </button>
          <button
            onClick={handleNext}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-white text-xl"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
