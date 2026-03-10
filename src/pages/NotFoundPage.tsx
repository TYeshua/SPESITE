import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 dark:bg-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">{t('page.not_found.title1')}</h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('page.not_found.title2')}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          {t('page.not_found.desc')}
        </p>
        <Link to="/">
          <Button variant="primary">
            {t('page.not_found.btn')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;