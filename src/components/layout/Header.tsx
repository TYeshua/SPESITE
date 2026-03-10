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
    <div className="hidden md:flex items-center space-x-2 md:space-x-4 z-10">
      <button 
        type="button" 
        onClick={toggleLanguage}
        className={`flex items-center font-medium ${isDarkMode ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'} transition-colors text-sm md:mr-4`}
      >
        <Globe className="h-5 w-5 mr-1" /> {language === 'pt' ? 'EN' : 'PT'}
      </button>

      <a
        href="https://www.spe.org/appsaccess/login/jsp/siteRegistration.jsp?ERIGHTS_TARGET=..."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors text-sm items-center min-h-[34px]"
      >
        {t('nav.join')}
      </a>
    </div>
  );

  const mobileCtaNode = (
    <div className="flex flex-col gap-3 mt-4 md:hidden">
      <button 
        type="button" 
        onClick={toggleLanguage}
        className={`flex items-center justify-center font-medium ${isDarkMode ? 'text-gray-200 bg-gray-700' : 'text-gray-800 bg-gray-100'} p-3 rounded-lg transition-colors text-base`}
      >
        <Globe className="h-5 w-5 mr-2" /> {language === 'pt' ? 'Mudar para Inglês' : 'Change to Portuguese'}
      </button>

      <a
        href="https://www.spe.org/appsaccess/login/jsp/siteRegistration.jsp?ERIGHTS_TARGET=..."
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-base items-center"
      >
        {t('nav.join')}
      </a>
    </div>
  );

  const leftNode = (
    <Link to="/" className="flex items-center">
      <img 
        src="./spefundo.png" 
        alt="SPE Logo" 
        className={`h-[70px] w-[120px] sm:h-[80px] sm:w-[140px] md:h-[120px] md:w-[200px] object-contain ${!isDarkMode ? 'bg-gray-900 rounded-md p-1' : ''}`} 
      />
    </Link>
  );

  const desktopCombinedLogoNode = (
    <Link to="/" className="hidden md:flex items-center relative">
      <Logo isScrolled={!isDarkMode} />
    </Link>
  );

  const mobileCenterLogoNode = (
    <Link to="/" className="md:hidden flex items-center">
      <Logo isScrolled={!isDarkMode} />
    </Link>
  );

  return (
    <header className="fixed w-full z-50 top-0 pointer-events-none">
      <div className="pointer-events-auto">
        <CardNav
          leftNode={leftNode}
          logoNode={
            <>
              {desktopCombinedLogoNode}
              {mobileCenterLogoNode}
            </>
          }
          items={items}
          baseColor={isDarkMode ? '#111827' : '#ffffff'}
          menuColor={isDarkMode ? '#ffffff' : '#000000'}
          ctaNode={ctaNode}
          mobileCtaNode={mobileCtaNode}
        />
      </div>
    </header>
  );
};

export default Header;
