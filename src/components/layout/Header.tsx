import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const location = useLocation();
  
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
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
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
              isScrolled ? 'text-gray-800' : 'text-white'
            } hover:text-blue-600 transition-colors`}
          >
            Início
          </Link>
          
          <div className="relative group">
            <button 
              className={`flex items-center font-medium ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:text-blue-600 transition-colors`}
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
            >
              Sobre <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all origin-top duration-200">
              <Link to="/about" className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50">
                Sobre SPE
              </Link>
              <Link to="/about/board" className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50">
                Quadro de Membros
              </Link>
              <Link to="/about/history" className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50">
                História
              </Link>
            </div>
          </div>
          
          <div className="relative group">
            <button 
              className={`flex items-center font-medium ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:text-blue-600 transition-colors`}
              onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
            >
              Eventos <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all origin-top duration-200">
              <Link to="/events" className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50">
                Próximos Eventos
              </Link>
              <Link to="/events/past" className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50">
                Eventos Anteriores
              </Link>
            </div>
          </div>
          
          <Link 
            to="/contact" 
            className={`font-medium ${
              isScrolled ? 'text-gray-800' : 'text-white'
            } hover:text-blue-600 transition-colors`}
          >
            Contatos
          </Link>
          
          <button 
            className={`flex items-center font-medium ${
              isScrolled ? 'text-gray-800' : 'text-white'
            } hover:text-blue-600 transition-colors`}
          >
            <Globe className="h-5 w-5 mr-1" /> PT-BR
          </button>
          
          <Link 
            to="/join" 
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Juntar SPE
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden text-2xl focus:outline-none"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`lg:hidden bg-white w-full absolute transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-gray-800 font-medium py-2 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            
            <div>
              <button 
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="flex items-center justify-between w-full text-gray-800 font-medium py-2 hover:text-blue-600 transition-colors"
              >
                About <ChevronDown className={`h-4 w-4 transform transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`pl-4 mt-1 space-y-2 ${aboutDropdownOpen ? 'block' : 'hidden'}`}>
                <Link to="/about" className="block py-1 text-gray-700 hover:text-blue-600 transition-colors">
                  About SPE
                </Link>
                <Link to="/about/board" className="block py-1 text-gray-700 hover:text-blue-600 transition-colors">
                  Board Members
                </Link>
                <Link to="/about/history" className="block py-1 text-gray-700 hover:text-blue-600 transition-colors">
                  History
                </Link>
              </div>
            </div>
            
            <div>
              <button 
                onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
                className="flex items-center justify-between w-full text-gray-800 font-medium py-2 hover:text-blue-600 transition-colors"
              >
                Events <ChevronDown className={`h-4 w-4 transform transition-transform ${eventsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`pl-4 mt-1 space-y-2 ${eventsDropdownOpen ? 'block' : 'hidden'}`}>
                <Link to="/events" className="block py-1 text-gray-700 hover:text-blue-600 transition-colors">
                  Upcoming Events
                </Link>
                <Link to="/events/past" className="block py-1 text-gray-700 hover:text-blue-600 transition-colors">
                  Past Events
                </Link>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="text-gray-800 font-medium py-2 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
            
            <button className="flex items-center text-gray-800 font-medium py-2 hover:text-blue-600 transition-colors">
              <Globe className="h-5 w-5 mr-1" /> EN
            </button>
            
            <Link 
              to="/join" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors text-center mt-2"
            >
              Join SPE
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;