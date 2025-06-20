import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, staggerContainer } from '../utils/animations';
import { teamMembers } from '../assets/data/team';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 skew-y-3 transform origin-top-left z-0"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            ref={heroRef}
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "show" : "hidden"}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeIn('up')}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Sobre a SPE UFPA
            </motion.h1>
            
            <motion.p
              variants={fadeIn('up', 0.1)}
              className="text-xl text-blue-100 mb-8"
            >
              Avançando conhecimento e desenvolvimento profissional em engenharia de petróleo.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission and Values */}
      <section className="py-16 md:py-24 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            ref={missionRef}
            variants={staggerContainer}
            initial="hidden"
            animate={missionInView ? "show" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              variants={fadeIn('right')}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Nossa Missão e Visão</h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                A Sociedade dos Engenheiros de Petróleo (SPE) Seção UFPA foi estabelecida em 2024, sendo um projeto composto por estudantes so setor do petróleo, gás e engeria que buscam trazer o universo profissional para
                o ambiente acadêmico, disseminando conhecimento em todos os aspectos de nosso setor, resultando no desenvolvimento escalar de nossos 
                membros e ampliando suas perspectivas.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nossa visão é ser o principal recurso para conhecimento técnico e desenvolvimento profissional 
                na indústria de petróleo e gás dentro de nossa região, promovendo a colaboração entre profissionais 
                da indústria, academia e estudantes.
              </p>
              
              <div className="border-l-4 border-blue-600 pl-4 italic text-gray-600 dark:text-gray-400">
                "Estamos comprometidos em fornecer aos nossos membros os recursos necessários para prosperar na 
                indústria petrolífera, contribuindo para o desenvolvimento sustentável de recursos energéticos."
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn('left')}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">Excelência Técnica</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Promovemos excelência técnica através de workshops, conferências e compartilhamento de conhecimento.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-t-4 border-green-600">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">Desenvolvimento Profissional</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Fornecemos oportunidades para crescimento na carreira e aprimoramento de habilidades.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-t-4 border-yellow-600">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">Engajamento Comunitário</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nos engajamos com a comunidade local através de programas educacionais e de extensão.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-t-4 border-red-600">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">Inovação</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Fomentamos inovação e soluções de ponta para desafios da indústria.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* History Timeline */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Nossa História</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Ao decorrer de quadro décadas, a SPE tem apoiado a comunidade profissional no Brasil.
              Aqui estão alguns marcos importantes em nossa jornada.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800"></div>
            
            <div className="space-y-12">
              {/* 1990 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">1985</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Foi fundada a SPE Brasil, sendo resultado da iniciativa de engenheiros brasileiros atuando na área de E&P em busca de colaborar com o desenvolvimento do país.
                  </p>
                </div>
                
                <div className="hidden md:block w-10 h-10 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow z-10"></div>
                
                <div className="flex-1 md:pl-8">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md md:mt-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">Fundação</span>
                  </div>
                </div>
              </div>
              
              {/* 2000 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 order-1 md:order-1 mb-4 md:mb-0">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md md:mt-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">Expansão</span>
                  </div>
                </div>
                
                <div className="hidden md:block w-10 h-10 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow z-10 order-2"></div>
                
                <div className="flex-1 md:pl-8 order-1 md:order-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">1989</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Criação do primeiro Capítulo Estudantil - Unicamp.
                  </p>
                </div>
              </div>
              
              {/* 2010 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">2995</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Criação da Seção Macaé, com missão de disseminar o conhecimento técnico em nossa indústria estimulando o networking promovendo eventos de alto nível.
                  </p>
                </div>
                
                <div className="hidden md:block w-10 h-10 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow z-10"></div>
                
                <div className="flex-1 md:pl-8">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md md:mt-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">Seção Macaé</span>
                  </div>
                </div>
              </div>
              
              {/* Present */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 order-1 md:order-1 mb-4 md:mb-0">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md md:mt-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">Transformação Digital</span>
                  </div>
                </div>
                
                <div className="hidden md:block w-10 h-10 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow z-10 order-2"></div>
                
                <div className="flex-1 md:pl-8 order-1 md:order-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">2024</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fundação do Capítulo Estudantil da SPE-UFPA sediado no Campus Salinópolis - PA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 md:py-24 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            ref={teamRef}
            variants={staggerContainer}
            initial="hidden"
            animate={teamInView ? "show" : "hidden"}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeIn('up')}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Equipe de Liderança
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.1)}
              className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            >
              Nossos membros da diretoria são profissionais experientes dedicados a servir a
              comunidade SPE e avançar a missão da organização.
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={fadeIn('up', index * 0.1)}
                initial="hidden"
                animate={teamInView ? "show" : "hidden"}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 p-4 flex space-x-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-colors shadow"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.email}`}
                      className="bg-white p-2 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-colors shadow"
                      aria-label={`E-mail para ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;