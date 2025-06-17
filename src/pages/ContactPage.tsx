import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import Button from '../components/ui/Button';
import { fadeIn, staggerContainer } from '../utils/animations';

const ContactPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 z-0"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeIn('up')}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Entre em Contato
            </motion.h1>
            
            <motion.p
              variants={fadeIn('up', 0.1)}
              className="text-xl text-blue-100 mb-8"
            >
              Adoraríamos ouvir de você. Entre em contato com qualquer dúvida ou pergunta.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 md:py-24 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Details */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">Nosso Escritório</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Av. Atlântica, 1193 - Centro<br />
                        Macaé - RJ, 27920-390<br />
                        Brasil
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">Telefone</h3>
                      <p className="text-gray-600 dark:text-gray-300">+55 (22) 1234-5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">E-mail</h3>
                      <p className="text-gray-600 dark:text-gray-300">contato@spemacae.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">Horário de Funcionamento</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Segunda - Sexta: 9:00 - 17:00<br />
                        Sábado e Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Conecte-se Conosco</h2>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form and Map */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envie-nos uma Mensagem</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Nome
                      </label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Sobrenome
                      </label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        E-mail
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Telefone
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Assunto
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea 
                      id="message" 
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button type="submit" variant="primary" className="w-full md:w-auto">
                      Enviar Mensagem
                    </Button>
                  </div>
                </form>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Nossa Localização</h2>
                
                <div className="h-80 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14865.241107393034!2d-41.7868235!3d-22.3847534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96329060305e5f%3A0x1049d0d427af10f!2sMaca%C3%A9%2C%20State%20of%20Rio%20de%20Janeiro%2C%20Brazil!5e0!3m2!1sen!2sus!4v1717000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização SPE Macaé"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Perguntas Frequentes</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Encontre respostas para perguntas comuns sobre a SPE Macaé e nossos programas.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Como me torno membro da SPE Macaé?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Para se tornar membro, você pode se inscrever através do site internacional da SPE e selecionar Macaé 
                como sua seção local. A associação inclui acesso a recursos técnicos, eventos e oportunidades de networking.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Existem opções de associação para estudantes?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sim, a SPE oferece associações com desconto para estudantes. Estudantes podem se inscrever através 
                do capítulo SPE de sua universidade ou diretamente pelo site da SPE. Membros estudantes recebem 
                benefícios e oportunidades especiais.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Como minha empresa pode patrocinar eventos da SPE Macaé?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Oferecemos vários pacotes de patrocínio para empresas interessadas em apoiar nossas atividades. 
                Entre em contato com nosso coordenador de patrocínio em patrocinios@spemacae.org para mais informações 
                sobre oportunidades e benefícios de patrocínio.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Como posso apresentar um artigo técnico em um de seus eventos?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regularmente emitimos chamadas para artigos para nossos eventos técnicos. As submissões são 
                revisadas por nosso comitê técnico. Você pode encontrar chamadas atuais para artigos em nosso 
                site ou entrando em contato com nosso coordenador de programa em programa@spemacae.org.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;