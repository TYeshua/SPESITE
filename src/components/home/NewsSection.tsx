import React from 'react';
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';
import { useLanguage } from '../../contexts/LanguageContext';

const NewsSection: React.FC = () => {
  const { t } = useLanguage();

  const newsList = [
    {
      id: 1,
      title: t('news.item1.title'),
      date: t('news.item1.date'),
      description: t('news.item1.desc'),
    },
    {
      id: 2,
      title: t('news.item2.title'),
      date: t('news.item2.date'),
      description: t('news.item2.desc'),
    },
    {
      id: 3,
      title: t('news.item3.title'),
      date: t('news.item3.date'),
      description: t('news.item3.desc'),
    },
    {
      id: 4,
      title: t('news.item4.title'),
      date: t('news.item4.date'),
      description: t('news.item4.desc'),
    },
  ];

  return (
    <section className="py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2">{t('news.subtitle')}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t('news.title')}
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            {t('news.desc')}
          </p>
        </div>

        <div className="mx-auto w-full max-w-4xl h-[650px]">
          <ScrollStack
            itemDistance={100}
            itemScale={0.03}
            itemStackDistance={60}
            stackPosition="15%"
            useWindowScroll={false}
          >
            {newsList.map((news) => (
              <ScrollStackItem
                key={news.id}
                itemClassName="bg-white dark:bg-gray-700 flex flex-col p-8 md:p-10 overflow-hidden border-2 border-blue-600 dark:border-cyan-500 rounded-3xl h-full justify-between"
              >
                <div>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400 text-sm font-semibold rounded-full">
                      {news.date}
                    </span>
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {news.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {news.description}
                  </p>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
