import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import { teamMembers } from '../../assets/data/team';
import Button from '../ui/Button';
import { fadeIn, staggerContainer } from '../../utils/animations';

const TeamSection: React.FC = () => {
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
            <h2 className="text-blue-600 font-medium mb-2">NOSSA LIDERANÇA</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Conheça os Membros do Nosso Conselho
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              Nossa equipe diversificada de profissionais experientes se dedica a promover a indústria do petróleo
              e a fornecer recursos e oportunidades valiosos aos nossos membros.
            </p>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.slice(0, 6).map((member, index) => (
            <motion.div
              key={member.id}
              variants={fadeIn('up', index * 0.1)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white p-2 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      <a 
                        href={`mailto:${member.email}`}
                        className="bg-white p-2 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-bold text-xl text-gray-900">{member.name}</h4>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          variants={fadeIn('up')}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mt-12"
        >
          <Link to="/about/board">
            <Button variant="primary">
              Ver Todos os Membros do Conselho
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;