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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image side */}
          <motion.div 
            variants={fadeIn('right')}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="SPE Macaé members" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-blue-600 font-bold text-xl">1° Ano</p>
              <p className="text-gray-600 text-sm">Ano de Excelência</p>
            </div>
          </motion.div>
          
          {/* Text side */}
          <motion.div 
            variants={fadeIn('left')}
            className="space-y-6"
          >
            <div>
              <h2 className="text-blue-600 font-medium mb-2">SOBRE SPE UFPA</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Avançando o Conhecimento Técnico em Petróleo e Gás
              </h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              A Seção UFPA da Sociedade de Engenheiros de Petróleo (SPE) foi criada em 2024 para atender profissionais
              da indústria de petróleo e gás na região de Salinópolis Pará e em todo o Brasil. Nossa missão é coletar,
              disseminar e trocar conhecimento técnico sobre a exploração, o desenvolvimento e a produção
              de recursos de petróleo e gás.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-900 mb-2">Nossa Missão</h4>
                <p className="text-gray-600 text-sm">
                  Coletar, disseminar e trocar conhecimento técnico e promover o desenvolvimento profissional.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-900 mb-2">Nossa Visão</h4>
                <p className="text-gray-600 text-sm">
                  Ser o principal recurso de conhecimento técnico e desenvolvimento profissional em nossa região.
                </p>
              </div>
            </div>
            
            <Link to="/about">
              <Button variant="primary">
                Saiba mais sobre nós
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;