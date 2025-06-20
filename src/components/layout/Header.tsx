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
              {/* Desktop Navigation<Link to="/sobre/diretoria" className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700">Diretoria</Link> */}
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
          <button type="button" className={`flex items-center font-medium ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}><Globe className="h-5 w-5 mr-1" /> PT</button>
          <button type="button" onClick={toggleDarkMode} className={`p-2 rounded-full ${isScrolled ? 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white hover:bg-opacity-10'} transition-colors`} aria-label="Alternar modo escuro">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Link to="/associar-se" className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">Associar-se à SPE</Link>
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

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-60" onClick={() => setIsMenuOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white dark:bg-gray-900 shadow-lg p-6 z-50 transition-transform transform translate-x-0">
            <nav className="flex flex-col space-y-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Início</Link>
              <div>
                <button type="button" onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)} className="flex items-center justify-between w-full text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Sobre <ChevronDown className={`h-4 w-4 transform transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`pl-4 mt-1 space-y-2 ${aboutDropdownOpen ? 'block' : 'hidden'}`}>
                  <Link to="/sobre" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Sobre a SPE</Link>
                  <Link to="/sobre/diretoria" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Diretoria</Link>
                  <Link to="/sobre/historia" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">História</Link>
                </div>
              </div>
              <div>
                <button type="button" onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)} className="flex items-center justify-between w-full text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Eventos <ChevronDown className={`h-4 w-4 transform transition-transform ${eventsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`pl-4 mt-1 space-y-2 ${eventsDropdownOpen ? 'block' : 'hidden'}`}>
                  <Link to="/eventos" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Próximos Eventos</Link>
                  <Link to="/eventos/passados" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Eventos Passados</Link>
                </div>
              </div>
              <Link to="/contato" onClick={() => setIsMenuOpen(false)} className="text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contato</Link>
              <button type="button" className="flex items-center text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Globe className="h-5 w-5 mr-1" /> PT
              </button>
              <Link to="/associar-se" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors text-center mt-4">Associar-se à SPE</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
