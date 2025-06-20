import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">SPE UFPA</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              A Sociedade dos Engenheiros de Petróleo Seção UFPA é uma organização sem fins lucrativos 
              comprometida com o avanço da indústria de petróleo e gás no Brasil.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/spe.ufpa?igsh=N3p3NTc3OWRiY3Fw" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/spe-ufpa-student-chapter/" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/eventos" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Eventos</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Contato</Link>
              </li>
              <li>
                <Link to="/associar-se" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Associar-se à SPE</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                <span className="text-gray-400 dark:text-gray-500">UFPA Campus Salinópolis, Rua Raimundo Santana Cruz, S/N. Bairro São Tomé - Salinópolis - PA, 68721-000, Brasil</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-400 dark:text-gray-500">+55 (91) 99109-7678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-400 dark:text-gray-500">ufpaspe@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              Inscreva-se em nossa newsletter para receber as últimas atualizações.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Seu endereço de e-mail" 
                className="w-full px-4 py-2 rounded-md bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-center text-center gap-y-4 sm:gap-x-8 text-gray-400 dark:text-gray-500">
  
          {/* Copyright */}
          <p className="order-1">&copy; {new Date().getFullYear()} SPE UFPA.</p>
          
          {/* Link para o GitHub de Josue */}
          <a 
            href="https://github.com/josusantz" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="order-2 flex items-center gap-x-2 transition-colors duration-300 hover:text-white"
          >
            {/* Ícone SVG do GitHub */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="hover:underline">Josué Dias</span>
          </a>

          {/* Link para o GitHub de Tyeshua */}
          <a 
            href="https://github.com/Tyeshua" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="order-3 flex items-center gap-x-2 transition-colors duration-300 hover:text-white"
          >
            {/* Ícone SVG do GitHub (reutilizado) */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="hover:underline">Thiago Yeshua</span>
          </a>         
        </div>
      </div>
    </footer>
  );
};

export default Footer;