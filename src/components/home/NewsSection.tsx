import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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

        <div className="mx-auto w-full max-w-6xl px-2 sm:px-4">
          <style>{`
            .news-swiper .swiper-pagination-bullet-active {
              background-color: #2563eb; /* blue-600 */
            }
            .dark .news-swiper .swiper-pagination-bullet-active {
              background-color: #22d3ee; /* cyan-400 */
            }
            .news-swiper .swiper-button-next,
            .news-swiper .swiper-button-prev {
              color: #2563eb;
            }
            .dark .news-swiper .swiper-button-next,
            .dark .news-swiper .swiper-button-prev {
              color: #22d3ee;
            }
          `}</style>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 6500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 news-swiper"
          >
            {newsList.map((news) => (
              <SwiperSlide key={news.id} className="h-auto">
                <div className="bg-white dark:bg-gray-700 flex flex-col p-6 md:p-8 overflow-hidden border-2 border-blue-600 dark:border-cyan-500 rounded-3xl h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400 text-sm font-semibold rounded-full">
                        {news.date}
                      </span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-3">
                      {news.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                      {news.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
