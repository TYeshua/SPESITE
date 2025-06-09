import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import { events } from '../../assets/data/events';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { fadeIn, staggerContainer } from '../../utils/animations';

const EventsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={fadeIn('up')}>
            <h2 className="text-blue-600 font-medium mb-2">PRÓXIMOS EVENTOS</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Participe dos nossos próximos eventos
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              Conecte-se com profissionais do setor, aprenda com especialistas e expanda seu conhecimento
              por meio de nossos eventos cuidadosamente selecionados e personalizados para a comunidade de petróleo e gás.
            </p>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.slice(0, 3).map((event, index) => (
            <motion.div
              key={event.id}
              variants={fadeIn('up', index * 0.1)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <Card hoverEffect className="h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">
                    {event.category}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">
                    {event.title}
                  </h4>
                  
                  <div className="mb-4 flex-grow">
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {event.description}
                    </p>
                  </div>
                  
                  <Link to={`/events/${event.id}`} className="mt-4">
                    <Button variant="outline" className="w-full">
                      Detalhes do Evento
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          variants={fadeIn('up')}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mt-12"
        >
          <Link to="/events">
            <Button variant="primary">
              Ver Todos os Eventos
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;