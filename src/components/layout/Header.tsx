import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import Logo from '../ui/Logo';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import CardNav from './CardNav';

const Header: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  
  const items = [
    {
      label: t('nav.about'),
      bgColor: isDarkMode ? "#1f2937" : "#0D0716", 
      textColor: "#fff",
      links: [
        { label: t('nav.about.spe'), href: "/sobre", ariaLabel: t('nav.about.spe') },
        { label: t('nav.about.team'), href: "/equipe", ariaLabel: t('nav.about.team') }
      ]
    },
    {
      label: t('nav.events'), 
      bgColor: isDarkMode ? "#374151" : "#170D27",
      textColor: "#fff",
      links: [
        { label: t('nav.events.upcoming'), href: "/eventos", ariaLabel: t('nav.events.upcoming') },
        { label: t('nav.events.past'), href: "/eventos/passados", ariaLabel: t('nav.events.past') }
      ]
    },
    {
      label: t('nav.more'),
      bgColor: isDarkMode ? "#4b5563" : "#271E37", 
      textColor: "#fff",
      links: [
        { label: t('nav.more.home'), href: "/", ariaLabel: t('nav.more.home') },
        { label: t('nav.more.contact'), href: "/contato", ariaLabel: t('nav.more.contact') }
      ]
    }
  ];

  const ctaNode = (
    <div className="flex items-center space-x-2 md:space-x-4 z-10">
      <button 
        type="button" 
        onClick={toggleLanguage}
        className={`hidden md:flex items-center font-medium ${isDarkMode ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'} transition-colors text-sm md:mr-16`}
      >
        <Globe className="h-5 w-5 mr-1" /> {language === 'pt' ? 'EN' : 'PT'}
      </button>

      <a
        href="https://www.spe.org/appsaccess/login/jsp/siteRegistration.jsp?ERIGHTS_TARGET=..."
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors text-sm items-center min-h-[34px]"
      >
        {t('nav.join')}
      </a>
    </div>
  );

  return (
    <header className="fixed w-full z-50 top-0 pointer-events-none">
      <div className="pointer-events-auto">
        <CardNav
          logoNode={
            <Link to="/" className="flex items-center relative">
              <img 
                src="/spefundo.png" 
                alt="SPE Logo" 
                className={`h-[120px] w-[200px] mr-3 md:absolute md:right-full md:mr-2 md:h-[160px] md:w-[250px] object-contain ${!isDarkMode ? 'bg-gray-900 rounded-lg p-2' : ''}`} 
              />
              <Logo isScrolled={!isDarkMode} />
            </Link>
          }
          items={items}
          baseColor={isDarkMode ? '#111827' : '#ffffff'}
          menuColor={isDarkMode ? '#ffffff' : '#000000'}
          ctaNode={ctaNode}
        />
      </div>
    </header>
  );
};

export default Header;
