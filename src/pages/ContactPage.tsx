import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin } from 'lucide-react';
import Button from '../components/ui/Button';
import { fadeIn, staggerContainer } from '../utils/animations';

const ContactPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 z-0"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="max-w-3xl"
          >
            <motion.h1 variants={fadeIn('up')} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Entre em Contato
            </motion.h1>
            <motion.p variants={fadeIn('up', 0.1)} className="text-xl text-blue-100 mb-8">
              Adoraríamos ouvir de você. Entre em contato com qualquer dúvida ou pergunta.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                        UFPA Campus Salinópolis, Rua Raimundo Santana Cruz. Bairro São Tomé<br />
                        Salinópolis - PA, 68721-000<br />
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
                      <p className="text-gray-600 dark:text-gray-300">+55 (91) 99109-7678</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">E-mail</h3>
                      <p className="text-gray-600 dark:text-gray-300">ufpaspe@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">Horário de Funcionamento</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Segunda - Sexta: 8:00 - 18:00<br />
                        Sábado e Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Conecte-se Conosco</h2>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/spe.ufpa" target="_blank" rel="noopener noreferrer" className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/company/spe-ufpa-student-chapter/" target="_blank" rel="noopener noreferrer" className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envie-nos uma Mensagem</h2>
                <form className="space-y-6" method="POST" action="https://formspree.io/f/mnnvbjqo">
                  <input type="hidden" name="_subject" value="Nova mensagem do formulário de contato" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Nome</label>
                      <input type="text" name="firstName" id="firstName" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Sobrenome</label>
                      <input type="text" name="lastName" id="lastName" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">E-mail</label>
                      <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Telefone</label>
                      <input type="tel" name="phone" id="phone" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Assunto</label>
                    <input type="text" name="subject" id="subject" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Mensagem</label>
                    <textarea name="message" id="message" rows={6} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"></textarea>
                  </div>
                  <div>
                    <Button type="submit" variant="primary" className="w-full md:w-auto">Enviar Mensagem</Button>
                  </div>
                </form>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Nossa Localização</h2>
                <div className="h-80 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.152678256708!2d-47.34443102400542!3d-0.6310359352631287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a8991aa9bcb021%3A0x9d2277db2e684e09!2sUFPA%20-%20Campus%20Salin%C3%B3polis!5e0!3m2!1sen!2sus!4v1750277776571!5m2!1sen!2sus" 
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
    </>
  );
};

export default ContactPage;
