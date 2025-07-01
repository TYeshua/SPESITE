import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen">
      {/* Hero background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat " 
        style={{ 
          backgroundImage: "url('logospe.jpg')",  // <- caminho relativo à pasta public
          backgroundPosition: "center 50%"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="mt-20 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Society of Petroleum Engineers <br />
            <span className="block text-blue-400">Capítulo UFPA</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8">
            Conectando profissionais, compartilhando conhecimento e avançando a indústria de petróleo, gás e energia no Brasil desde 1990.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/sobre">
              <Button variant="primary" size="lg">
                Saiba Mais
              </Button>
            </Link>
            <a
              href="https://www.spe.org/appsaccess/login/jsp/siteRegistration.jsp?ERIGHTS_TARGET=https://www.spe.org/auth/realms/SPE/protocol/openid-connect/auth?response_type=code&scope=openid&client_id=www.spe.org&state=SvJYIe1AF8-yvS6rWh64sYmy5L4&redirect_uri=https%3A%2F%2Fwww.spe.org%2Foidc_redirect%2Fprotected&nonce=ZzyIEmNZgd0khK3TRqFE1h8WoDZCb3MiHkdwPKM6MRg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:bg-opacity-10"
              >
                Associar-se à SPE
              </Button>
            </a>

          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="w-8 h-12 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div className="w-1 h-3 bg-white rounded-full mt-2"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;