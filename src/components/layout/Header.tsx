import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Moon, Sun } from 'lucide-react';
import Logo from '../ui/Logo';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setAboutDropdownOpen(false);
    setEventsDropdownOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo isScrolled={isScrolled} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={`font-medium ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>Início</Link>

          <div className="relative group">
            <button type="button" onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)} className={`flex items-center font-medium ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>
              Sobre <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all origin-top duration-200">
              <Link to="/sobre" className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700">Sobre a SPE</Link>
            </div>
          </div>

          <div className="relative group">
            <button type="button" onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)} className={`flex items-center font-medium ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>
              Eventos <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all origin-top duration-200">
              <Link to="/eventos" className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700">Próximos Eventos</Link>
              <Link to="/eventos/passados" className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700">Eventos Passados</Link>
            </div>
          </div>

          <Link to="/contato" className={`font-medium ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>Contato</Link>

          <button type="button" className={`flex items-center font-medium ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>
            <Globe className="h-5 w-5 mr-1" /> PT
          </button>

          <button type="button" onClick={toggleDarkMode} className={`p-2 rounded-full ${isScrolled ? 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white hover:bg-opacity-10'} transition-colors`} aria-label="Alternar modo escuro">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <a
            href="https://www.spe.org/appsaccess/login/jsp/siteRegistration.jsp?ERIGHTS_TARGET=https://www.spe.org/auth/realms/SPE/protocol/openid-connect/auth?response_type=code&scope=openid&client_id=www.spe.org&state=SvJYIe1AF8-yvS6rWh64sYmy5L4&redirect_uri=https%3A%2F%2Fwww.spe.org%2Foidc_redirect%2Fprotected&nonce=ZzyIEmNZgd0khK3TRqFE1h8WoDZCb3MiHkdwPKM6MRg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Associar-se à SPE
          </a>
        </nav>

        {/* Mobile Buttons */}
        <div className="lg:hidden flex items-center space-x-2">
          <button type="button" onClick={toggleDarkMode} className={`p-2 rounded-full ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} transition-colors`} aria-label="Alternar modo escuro">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button type="button" onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
