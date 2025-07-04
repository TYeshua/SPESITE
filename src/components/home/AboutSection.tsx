import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { fadeIn, staggerContainer } from '../../utils/animations';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image side qaaaaa*/}
          <motion.div 
            variants={fadeIn('right')}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="primeiroano.jpg" 
                alt="amazontech" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <p className="text-blue-600 dark:text-blue-400 font-bold text-xl">1° Ano</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Um começo com Excelência</p>
            </div>
          </motion.div>
          
          {/* Text side */}
          <motion.div 
            variants={fadeIn('left')}
            className="space-y-6"
          >
            <div>
              <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2">SOBRE A SPE UFPA</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Avançando o Conhecimento Técnico em Petróleo e Gás
              </h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              A Sociedade dos Engenheiros de Petróleo (SPE) Seção UFPA foi estabelecida em 2024 para servir estudantes e
              profissionais da indústria de petróleo e gás na Universidade Federal do Pará na região de Salinópolis e em todo o Brasil. Nossa missão 
              é coletar, disseminar e trocar conhecimento técnico sobre exploração, desenvolvimento e produção 
              de recursos petrolíferos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Nossa Missão</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Coletar, disseminar e trocar conhecimento técnico e promover o desenvolvimento profissional.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Nossa Visão</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Ser o principal recurso para conhecimento técnico e desenvolvimento profissional em nossa região.
                </p>
              </div>
            </div>
            
            <Link to="/sobre">
              <Button variant="primary">
                Saiba Mais Sobre Nós
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;