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
              A Sociedade dos Engenheiros de Petróleo Seção Macaé é uma organização sem fins lucrativos 
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
                <span className="text-gray-400 dark:text-gray-500">UFPA Campus Salinópolis, Rua Raimundo Santana Cruz, S/N. Bairro São Tomé - Salinópolis - PA- PA, 68721-000, Brasil</span>
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
        
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Yeshua e Jacaré. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;