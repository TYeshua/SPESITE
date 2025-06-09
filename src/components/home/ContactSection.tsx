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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={fadeIn('up')}>
            <h2 className="text-blue-600 font-medium mb-2">CONTATE-NOS</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Entre em contato
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              Tem dúvidas ou quer saber mais sobre a SPE UFPA? Adoraríamos saber sua opinião.
              Entre em contato conosco pelo formulário abaixo ou entre em contato diretamente.
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
            <div className="bg-white rounded-lg shadow-md p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Informações de contato</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Nosso Escritório</h5>
                    <p className="text-gray-600">
                      Rua Raimundo Santana Cruz, S/N. Bairro São Tomé<br />
                      Salinópolis - PA. CEP. 68.721-000<br />
                      Brasil
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Telefone</h5>
                    <p className="text-gray-600">+55 (91) 9109-7678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Email</h5>
                    <p className="text-gray-600">ufpaspe@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Horário de expediente</h5>
                    <p className="text-gray-600">
                      Segunda - Sexta: 9:00 manhã - 18:00 Noite<br />
                      Sábados & Domingos: Fechado
                    </p>
                  </div>
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
            <div className="bg-white rounded-lg shadow-md p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Envie-nos uma mensagem</h4>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Seu Nome
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Seu Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Assunto
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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