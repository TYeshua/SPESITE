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
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo isScrolled={isScrolled} />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium ${
              isScrolled 
                ? 'text-gray-800 dark:text-gray-200' 
                : 'text-white'
            } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
          >
            Início
          </Link>
          
          <div className="relative group">
            <button 
              className={`flex items-center font-medium ${
                isScrolled 
                  ? 'text-gray-800 dark:text-gray-200' 
                  : 'text-white'
              } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
            >
              Sobre <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all origin-top duration-200">
              <Link to="/sobre" className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700">
                Sobre a SPE
              </Link>
              <Link to="/sobre/diretoria" className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700">
                Diretoria
              </Link>
              <Link to="/sobre/historia" className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700">
                História
              </Link>
            </div>
          </div>
          
          <div className="relative group">
            <button 
              className={`flex items-center font-medium ${
                isScrolled 
                  ? 'text-gray-800 dark:text-gray-200' 
                  : 'text-white'
              } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
              onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
            >
              Eventos <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all origin-top duration-200">
              <Link to="/eventos" className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700">
                Próximos Eventos
              </Link>
              <Link to="/eventos/passados" className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700">
                Eventos Passados
              </Link>
            </div>
          </div>
          
          <Link 
            to="/contato" 
            className={`font-medium ${
              isScrolled 
                ? 'text-gray-800 dark:text-gray-200' 
                : 'text-white'
            } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
          >
            Contato
          </Link>
          
          <button 
            className={`flex items-center font-medium ${
              isScrolled 
                ? 'text-gray-800 dark:text-gray-200' 
                : 'text-white'
            } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
          >
            <Globe className="h-5 w-5 mr-1" /> PT
          </button>
          
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              isScrolled 
                ? 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800' 
                : 'text-white hover:bg-white hover:bg-opacity-10'
            } transition-colors`}
            aria-label="Alternar modo escuro"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <Link 
            to="/associar-se" 
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Associar-se à SPE
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              isScrolled 
                ? 'text-gray-800 dark:text-gray-200' 
                : 'text-white'
            } transition-colors`}
            aria-label="Alternar modo escuro"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <button 
            onClick={toggleMenu} 
            className="text-2xl focus:outline-none"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`lg:hidden bg-white dark:bg-gray-900 w-full absolute transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-gray-800 dark:text-gray-200 font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Início
            </Link>
            
            <div>
              <button 
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="flex items-center justify-between w-full text-gray-800 dark:text-gray-200 font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Sobre <ChevronDown className={`h-4 w-4 transform transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`pl-4 mt-1 space-y-2 ${aboutDropdownOpen ? 'block' : 'hidden'}`}>
                <Link to="/sobre" className="block py-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Sobre a SPE
                </Link>
                <Link to="/sobre/diretoria" className="block py-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Diretoria
                </Link>
                <Link to="/sobre/historia" className="block py-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  História
                </Link>
              </div>
            </div>
            
            <div>
              <button 
                onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
                className="flex items-center justify-between w-full text-gray-800 dark:text-gray-200 font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Eventos <ChevronDown className={`h-4 w-4 transform transition-transform ${eventsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`pl-4 mt-1 space-y-2 ${eventsDropdownOpen ? 'block' : 'hidden'}`}>
                <Link to="/eventos" className="block py-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Próximos Eventos
                </Link>
                <Link to="/eventos/passados" className="block py-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Eventos Passados
                </Link>
              </div>
            </div>
            
            <Link 
              to="/contato" 
              className="text-gray-800 dark:text-gray-200 font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contato
            </Link>
            
            <button className="flex items-center text-gray-800 dark:text-gray-200 font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Globe className="h-5 w-5 mr-1" /> PT
            </button>
            
            <Link 
              to="/associar-se" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors text-center mt-2"
            >
              Associar-se à SPE
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;