import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../ui/Button';
import { fadeIn, staggerContainer } from '../../utils/animations';

const ContactSection: React.FC = () => {
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
          className="text-center mb-12"
        >
          <motion.div variants={fadeIn('up')}>
            <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2">ENTRE EM CONTATO</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Fale Conosco
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Tem dúvidas ou quer saber mais sobre a SPE UFPA? Adoraríamos ouvir de você.
              Entre em contato conosco usando o formulário abaixo ou nos contate diretamente.
            </p>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={fadeIn('right')}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Informações de Contato</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white mb-1">Nosso Escritório</h5>
                    <p className="text-gray-600 dark:text-gray-300">
                      UFPA Campus Salinópolis<br />
                      Rua Raimundo Santana Cruz, S/N. Bairro São Tomé - Salinópolis - PA- PA, 68721-000<br />
                      Brasil
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white mb-1">Telefone</h5>
                    <p className="text-gray-600 dark:text-gray-300">+55 (91) 99109-7678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white mb-1">E-mail</h5>
                    <p className="text-gray-600 dark:text-gray-300">ufpaspe@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white mb-1">Horário de Funcionamento</h5>
                    <p className="text-gray-600 dark:text-gray-300">
                      Segunda - Sexta: 8:00 - 18:00<br />
                      Sábado e Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.152678256708!2d-47.34443102400542!3d-0.6310359352631287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a8991aa9bcb021%3A0x9d2277db2e684e09!2sUFPA%20-%20Campus%20Salin%C3%B3polis!5e0!3m2!1sen!2sus!4v1750277776571!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização SPE UFPA"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
<motion.div
  variants={fadeIn('left')}
  initial="hidden"
  animate={inView ? "show" : "hidden"}
>
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envie-nos uma Mensagem</h4>
    
    <form 
      action="https://formspree.io/f/xblybqab" 
      method="POST" 
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Seu Nome
          </label>
          <input 
            type="text" 
            id="name" 
            name="name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Seu E-mail
          </label>
          <input 
            type="email" 
            id="email" 
            name="email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            required
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
          name="subject"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
          Mensagem
        </label>
        <textarea 
          id="message" 
          name="message"
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          required
        ></textarea>
      </div>
      
      <div>
        <Button type="submit" variant="primary" className="w-full">
          Enviar Mensagem
        </Button>
      </div>
    </form>
  </div>
</motion.div>


        </div>
      </div>
    </section>
  );
};

export default ContactSection;