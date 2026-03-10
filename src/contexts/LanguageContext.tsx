import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.about.spe': 'Sobre a SPE',
    'nav.about.team': 'Nossa Equipe',
    'nav.events': 'Eventos',
    'nav.events.upcoming': 'Próximos Eventos',
    'nav.events.past': 'Eventos Passados',
    'nav.more': 'Mais',
    'nav.more.home': 'Início',
    'nav.more.contact': 'Contato',
    'nav.join': 'Associar-se à SPE',

    // Hero Section
    'hero.chapter': 'Capítulo UFPA',
    'hero.desc': 'Conectando profissionais, compartilhando conhecimento e avançando a indústria de petróleo, gás e energia no Brasil desde 1990.',
    'hero.learn_more': 'Saiba Mais',

    // Footer
    'footer.about': 'A Sociedade dos Engenheiros de Petróleo Seção UFPA é uma organização sem fins lucrativos comprometida com o avanço da indústria de petróleo e gás no Brasil.',
    'footer.quick_links': 'Links Rápidos',
    'footer.about_us': 'Sobre Nós',
    'footer.contact_info': 'Informações de Contato',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter_desc': 'Inscreva-se em nossa newsletter para receber as últimas atualizações.',
    'footer.newsletter_placeholder': 'Seu endereço de e-mail',
    'footer.newsletter_btn': 'Inscrever-se',

    // About Section (Home)
    'about.subtitle': 'SOBRE NÓS',
    'about.title': 'Avançando Conhecimento em Energia',
    'about.desc': 'A Sociedade dos Engenheiros de Petróleo (SPE) Capítulo UFPA é uma organização estudantil dedicada ao desenvolvimento profissional e técnico dos engenheiros de petróleo e gás. Através de eventos, workshops e networking, conectamos estudantes com líderes da indústria e promovemos o avanço do conhecimento no setor energético.',
    'about.mission_title': 'Nossa Missão',
    'about.mission_desc': 'Promover o desenvolvimento profissional de estudantes de engenharia de petróleo e gás, conectando-os com a indústria.',
    'about.vision_title': 'Nossa Visão',
    'about.vision_desc': 'Ser o principal capítulo estudantil de SPE do Brasil, referência em inovação e desenvolvimento profissional.',
    'about.btn': 'Saiba Mais',
    'about.caption_title': 'SPE UFPA 2024',
    'about.caption_desc': 'Nosso primeiro ano de atividades',
    // Legacy keys kept for backward compatibility
    'about.btn_learn': 'Saiba Mais',
    'about.btn_join': 'Associe-se',
    'about.stat1_label': 'Membros Ativos',
    'about.stat2_label': 'Eventos Realizados',
    'about.stat3_label': 'Parceiros',

    // News Section (Home) — keys with dot notation as used by components
    'news.subtitle': 'NOTÍCIAS',
    'news.title': 'Últimas Notícias',
    'news.desc': 'Fique por dentro das últimas novidades e acontecimentos do Capítulo SPE UFPA.',
    'news.item1.title': 'SPE UFPA realiza workshop de perfuração',
    'news.item1.desc': 'Estudantes e profissionais participaram de um workshop prático sobre técnicas modernas de perfuração direcional.',
    'news.item1.date': '15 de Março, 2025',
    'news.item2.title': 'Parceria com empresa de energia renovável',
    'news.item2.desc': 'A SPE UFPA firmou parceria estratégica com uma importante empresa do setor de energias renováveis para desenvolvimento de projetos conjuntos.',
    'news.item2.date': '28 de Fevereiro, 2025',
    'news.item3.title': 'Conferência anual bate recorde de participantes',
    'news.item3.desc': 'A conferência anual da SPE UFPA registrou o maior número de participantes de sua história, com mais de 500 estudantes e profissionais.',
    'news.item3.date': '10 de Fevereiro, 2025',
    'news.item4.title': 'Novo convênio com universidades parceiras',
    'news.item4.desc': 'A SPE UFPA firmou novos acordos de cooperação com universidades da região Norte, ampliando o alcance de suas atividades acadêmicas.',
    'news.item4.date': '05 de Janeiro, 2025',

    // Events Section (Home)
    'events.subtitle': 'EVENTOS',
    'events.title': 'Esteja por dentro dos eventos realizados por nós',
    'events.desc': 'Conecte-se com profissionais da indústria, aprenda com especialistas e expanda seu conhecimento através de nossos eventos cuidadosamente selecionados para a comunidade de petróleo e gás.',
    'events.category.conference': 'Conferência',
    'events.category.workshop': 'Workshop',
    'events.category.webinar': 'Webinar',
    'events.category.networking': 'Networking',
    'events.btn.website': 'Acessar Site do Evento',
    'events.btn.details': 'Detalhes do Evento',
    'events.btn.all': 'Ver Todos os Eventos',

    // Sponsors Section (Home)
    'sponsors.subtitle': 'NOSSOS PATROCINADORES',
    'sponsors.title': 'Parceiros que Apoiam Nossa Missão',
    'sponsors.level.platinum': 'Patrocinadores Platina',
    'sponsors.level.gold': 'Patrocinadores Ouro',
    'sponsors.level.silver': 'Patrocinadores Prata',
    'sponsors.level.bronze': 'Patrocinadores Bronze',
    'sponsors.level.supporters': 'Apoiadores',

    // Team Section (Home)
    'team.subtitle': 'NOSSA LIDERANÇA',
    'team.title': 'Conheça Nossa Diretoria Atual',
    'team.desc': 'Nossa equipe diversificada de profissionais experientes é dedicada ao avanço da indústria petrolífera e ao fornecimento de recursos valiosos e oportunidades aos nossos membros.',
    'team.btn': 'Ver Diretorias Anteriores',

    // Contact Section (Home)
    'contact.subtitle': 'ENTRE EM CONTATO',
    'contact.title': 'Fale Conosco',
    'contact.desc': 'Tem dúvidas ou quer saber mais sobre a SPE UFPA? Adoraríamos ouvir de você. Entre em contato conosco usando o formulário abaixo ou nos contate diretamente.',
    'contact.info_title': 'Informações de Contato',
    'contact.office': 'Nosso Escritório',
    'contact.country': 'Brasil',
    'contact.phone': 'Telefone',
    'contact.email': 'E-mail',
    'contact.hours': 'Horário de Funcionamento',
    'contact.hours.weekdays': 'Segunda - Sexta: 8:00 - 18:00',
    'contact.hours.weekends': 'Sábado e Domingo: Fechado',
    'contact.form_title': 'Envie-nos uma Mensagem',
    'contact.form.name': 'Seu Nome',
    'contact.form.email': 'E-mail',
    'contact.form.subject': 'Assunto',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar Mensagem',

    // AboutPage
    'page.about.hero_title': 'Sobre a SPE UFPA',
    'page.about.hero_desc': 'Avançando conhecimento e desenvolvimento profissional em engenharia de petróleo.',
    'page.about.mission_title': 'Nossa Missão e Visão',
    'page.about.mission_p1': 'A Sociedade dos Engenheiros de Petróleo (SPE) Capítulo UFPA foi estabelecida em 2024, sendo um projeto composto por estudantes do setor do petróleo, gás e energia que buscam trazer o universo profissional para o ambiente acadêmico, disseminando conhecimento em todos os aspectos de nosso setor, resultando no desenvolvimento escalar de nossos membros e ampliando suas perspectivas.',
    'page.about.mission_p2': 'Nossa visão é ser o principal recurso para conhecimento técnico e desenvolvimento profissional na indústria de petróleo e gás dentro de nossa região, promovendo a colaboração entre profissionais da indústria, academia e estudantes.',
    'page.about.mission_quote': '"Estamos comprometidos em fornecer aos nossos membros os recursos necessários para prosperar na indústria petrolífera, contribuindo para o desenvolvimento sustentável de recursos energéticos."',
    'page.about.val1_title': 'Excelência Técnica',
    'page.about.val1_desc': 'Promovemos excelência técnica através de workshops, conferências e compartilhamento de conhecimento.',
    'page.about.val2_title': 'Desenvolvimento Profissional',
    'page.about.val2_desc': 'Fornecemos oportunidades para crescimento na carreira e aprimoramento de habilidades.',
    'page.about.val3_title': 'Engajamento Comunitário',
    'page.about.val3_desc': 'Nos engajamos com a comunidade local através de programas educacionais e de extensão.',
    'page.about.val4_title': 'Inovação',
    'page.about.val4_desc': 'Fomentamos inovação e soluções de ponta para desafios da indústria.',
    'page.about.history_title': 'Nossa História',
    'page.about.history_desc': 'Ao longo de quatro décadas, a SPE tem apoiado a comunidade profissional no Brasil. Aqui estão alguns marcos importantes em nossa jornada.',
    'page.about.hist1_year': '1985',
    'page.about.hist1_title': 'Fundação',
    'page.about.hist1_desc': 'Foi fundada a SPE Brasil, sendo resultado da iniciativa de engenheiros brasileiros atuando na área de E&P em busca de colaborar com o desenvolvimento do país.',
    'page.about.hist2_year': '1989',
    'page.about.hist2_title': 'Expansão',
    'page.about.hist2_desc': 'Criação do primeiro Capítulo Estudantil - Unicamp.',
    'page.about.hist3_year': '1995',
    'page.about.hist3_title': 'Seção Macaé',
    'page.about.hist3_desc': 'Criação da Seção Macaé, com missão de disseminar o conhecimento técnico em nossa indústria estimulando o networking e promovendo eventos de alto nível.',
    'page.about.hist4_year': '2024',
    'page.about.hist4_title': 'Capítulo UFPA',
    'page.about.hist4_desc': 'Fundação do Capítulo Estudantil da SPE-UFPA sediado no Campus Salinópolis - PA.',
    'page.about.leadership_title': 'Equipe de Liderança',
    'page.about.leadership_desc': 'Nossos membros da diretoria são profissionais experientes dedicados a servir a comunidade SPE e avançar a missão da organização.',

    // EventsPage
    'page.events.hero_title': 'Eventos',
    'page.events.hero_desc': 'Participe de nossas próximas conferências, workshops, webinars e eventos de networking.',
    'page.events.search_placeholder': 'Buscar eventos por palavra-chave...',
    'page.events.all_categories': 'Todas as Categorias',
    'page.events.cat_conferences': 'Conferências',
    'page.events.cat_workshops': 'Workshops',
    'page.events.cat_webinars': 'Webinars',
    'page.events.cat_networking': 'Networking',
    'page.events.not_found_title': 'Nenhum Evento Encontrado',
    'page.events.not_found_desc': 'Não conseguimos encontrar eventos que correspondam aos seus critérios de busca.',
    'page.events.clear_filters': 'Limpar Filtros',

    // PastEventsPage
    'page.past_events.hero_title': 'Eventos Passados',
    'page.past_events.hero_desc': 'Explore os eventos anteriores promovidos pela SPE UFPA.',

    // TeamPage
    'page.team.hero_title': 'Nossa Liderança',
    'page.team.hero_desc': 'Conheça a diretoria atual da SPE UFPA e o histórico das lideranças que ajudaram a construir nossa comunidade.',
    'page.team.no_members': 'Nenhum membro encontrado para o ano selecionado.',

    // ContactPage
    'page.contact.hero_title': 'Entre em Contato',
    'page.contact.hero_desc': 'Adoraríamos ouvir de você. Entre em contato com qualquer dúvida ou pergunta.',
    'page.contact.connect_title': 'Conecte-se Conosco',
    'page.contact.form.first_name': 'Nome',
    'page.contact.form.last_name': 'Sobrenome',
    'page.contact.location_title': 'Nossa Localização',

    // NotFoundPage
    'page.not_found.title1': 'Em breve',
    'page.not_found.title2': 'Página Não Encontrada',
    'page.not_found.desc': 'A página que você está procurando está em desenvolvimento e estará disponível em breve. Agradecemos pela sua paciência!',
    'page.not_found.btn': 'Voltar ao Início',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.about.spe': 'About SPE',
    'nav.about.team': 'Our Team',
    'nav.events': 'Events',
    'nav.events.upcoming': 'Upcoming Events',
    'nav.events.past': 'Past Events',
    'nav.more': 'More',
    'nav.more.home': 'Home',
    'nav.more.contact': 'Contact',
    'nav.join': 'Join SPE',

    // Hero Section
    'hero.chapter': 'UFPA Chapter',
    'hero.desc': 'Connecting professionals, sharing knowledge, and advancing the oil, gas, and energy industry in Brazil since 1990.',
    'hero.learn_more': 'Learn More',

    // Footer
    'footer.about': 'The Society of Petroleum Engineers UFPA Section is a non-profit organization committed to the advancement of the oil and gas industry in Brazil.',
    'footer.quick_links': 'Quick Links',
    'footer.about_us': 'About Us',
    'footer.contact_info': 'Contact Information',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter_desc': 'Subscribe to our newsletter to receive the latest updates.',
    'footer.newsletter_placeholder': 'Your email address',
    'footer.newsletter_btn': 'Subscribe',

    // About Section (Home)
    'about.subtitle': 'ABOUT US',
    'about.title': 'Advancing Knowledge in Energy',
    'about.desc': 'The Society of Petroleum Engineers (SPE) UFPA Chapter is a student organization dedicated to the professional and technical development of oil and gas engineers. Through events, workshops, and networking, we connect students with industry leaders and promote the advancement of knowledge in the energy sector.',
    'about.mission_title': 'Our Mission',
    'about.mission_desc': 'To promote the professional development of petroleum and gas engineering students, connecting them with the industry.',
    'about.vision_title': 'Our Vision',
    'about.vision_desc': 'To be the leading SPE student chapter in Brazil, a benchmark in innovation and professional development.',
    'about.btn': 'Learn More',
    'about.caption_title': 'SPE UFPA 2024',
    'about.caption_desc': 'Our first year of activities',
    // Legacy keys
    'about.btn_learn': 'Learn More',
    'about.btn_join': 'Join Us',
    'about.stat1_label': 'Active Members',
    'about.stat2_label': 'Events Held',
    'about.stat3_label': 'Partners',

    // News Section (Home)
    'news.subtitle': 'NEWS',
    'news.title': 'Latest News',
    'news.desc': 'Stay up to date with the latest news and events from the SPE UFPA Chapter.',
    'news.item1.title': 'SPE UFPA holds drilling workshop',
    'news.item1.desc': 'Students and professionals participated in a hands-on workshop on modern directional drilling techniques.',
    'news.item1.date': 'March 15, 2025',
    'news.item2.title': 'Partnership with renewable energy company',
    'news.item2.desc': 'SPE UFPA signed a strategic partnership with a major renewable energy company for joint project development.',
    'news.item2.date': 'February 28, 2025',
    'news.item3.title': 'Annual conference breaks attendance record',
    'news.item3.desc': 'The SPE UFPA annual conference recorded the highest number of attendees in its history, with over 500 students and professionals.',
    'news.item3.date': 'February 10, 2025',
    'news.item4.title': 'New agreements with partner universities',
    'news.item4.desc': 'SPE UFPA signed new cooperation agreements with universities in the Northern region, expanding the reach of its academic activities.',
    'news.item4.date': 'January 05, 2025',

    // Events Section (Home)
    'events.subtitle': 'EVENTS',
    'events.title': 'Stay updated on the events hosted by us',
    'events.desc': 'Connect with industry professionals, learn from experts, and expand your knowledge through our carefully selected events for the oil and gas community.',
    'events.category.conference': 'Conference',
    'events.category.workshop': 'Workshop',
    'events.category.webinar': 'Webinar',
    'events.category.networking': 'Networking',
    'events.btn.website': 'Access Event Website',
    'events.btn.details': 'Event Details',
    'events.btn.all': 'View All Events',

    // Sponsors Section (Home)
    'sponsors.subtitle': 'OUR SPONSORS',
    'sponsors.title': 'Partners Who Support Our Mission',
    'sponsors.level.platinum': 'Platinum Sponsors',
    'sponsors.level.gold': 'Gold Sponsors',
    'sponsors.level.silver': 'Silver Sponsors',
    'sponsors.level.bronze': 'Bronze Sponsors',
    'sponsors.level.supporters': 'Supporters',

    // Team Section (Home)
    'team.subtitle': 'OUR LEADERSHIP',
    'team.title': 'Meet Our Current Board',
    'team.desc': 'Our diverse team of experienced professionals is dedicated to advancing the oil industry and providing valuable resources and opportunities to our members.',
    'team.btn': 'View Previous Boards',

    // Contact Section (Home)
    'contact.subtitle': 'GET IN TOUCH',
    'contact.title': 'Contact Us',
    'contact.desc': 'Have questions or want to know more about SPE UFPA? We would love to hear from you. Contact us using the form below or reach out directly.',
    'contact.info_title': 'Contact Information',
    'contact.office': 'Our Office',
    'contact.country': 'Brazil',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Operating Hours',
    'contact.hours.weekdays': 'Monday - Friday: 8:00 AM - 6:00 PM',
    'contact.hours.weekends': 'Saturday and Sunday: Closed',
    'contact.form_title': 'Send Us a Message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',

    // AboutPage
    'page.about.hero_title': 'About SPE UFPA',
    'page.about.hero_desc': 'Advancing knowledge and professional development in petroleum engineering.',
    'page.about.mission_title': 'Our Mission and Vision',
    'page.about.mission_p1': 'The Society of Petroleum Engineers (SPE) UFPA Chapter was established in 2024, as a project composed of students from the oil, gas and energy sector who seek to bring the professional universe into the academic environment, disseminating knowledge in all aspects of our sector, resulting in the scalable development of our members and broadening their perspectives.',
    'page.about.mission_p2': 'Our vision is to be the primary resource for technical knowledge and professional development in the oil and gas industry within our region, promoting collaboration between industry professionals, academia and students.',
    'page.about.mission_quote': '"We are committed to providing our members with the resources needed to thrive in the oil industry, contributing to the sustainable development of energy resources."',
    'page.about.val1_title': 'Technical Excellence',
    'page.about.val1_desc': 'We promote technical excellence through workshops, conferences, and knowledge sharing.',
    'page.about.val2_title': 'Professional Development',
    'page.about.val2_desc': 'We provide opportunities for career growth and skill enhancement.',
    'page.about.val3_title': 'Community Engagement',
    'page.about.val3_desc': 'We engage with the local community through educational and outreach programs.',
    'page.about.val4_title': 'Innovation',
    'page.about.val4_desc': 'We foster innovation and cutting-edge solutions for industry challenges.',
    'page.about.history_title': 'Our History',
    'page.about.history_desc': 'Over four decades, SPE has supported the professional community in Brazil. Here are some key milestones in our journey.',
    'page.about.hist1_year': '1985',
    'page.about.hist1_title': 'Foundation',
    'page.about.hist1_desc': "SPE Brazil was founded, resulting from the initiative of Brazilian engineers working in the E&P area looking to collaborate with the country's development.",
    'page.about.hist2_year': '1989',
    'page.about.hist2_title': 'Expansion',
    'page.about.hist2_desc': 'Creation of the first Student Chapter - Unicamp.',
    'page.about.hist3_year': '1995',
    'page.about.hist3_title': 'Macaé Section',
    'page.about.hist3_desc': 'Creation of the Macaé Section, with a mission to disseminate technical knowledge in our industry, stimulating networking and promoting high-level events.',
    'page.about.hist4_year': '2024',
    'page.about.hist4_title': 'UFPA Chapter',
    'page.about.hist4_desc': 'Foundation of the SPE-UFPA Student Chapter based in the Salinópolis - PA Campus.',
    'page.about.leadership_title': 'Leadership Team',
    'page.about.leadership_desc': "Our board members are experienced professionals dedicated to serving the SPE community and advancing the organization's mission.",

    // EventsPage
    'page.events.hero_title': 'Events',
    'page.events.hero_desc': 'Join our upcoming conferences, workshops, webinars, and networking events.',
    'page.events.search_placeholder': 'Search events by keyword...',
    'page.events.all_categories': 'All Categories',
    'page.events.cat_conferences': 'Conferences',
    'page.events.cat_workshops': 'Workshops',
    'page.events.cat_webinars': 'Webinars',
    'page.events.cat_networking': 'Networking',
    'page.events.not_found_title': 'No Events Found',
    'page.events.not_found_desc': "We couldn't find any events that match your search criteria.",
    'page.events.clear_filters': 'Clear Filters',

    // PastEventsPage
    'page.past_events.hero_title': 'Past Events',
    'page.past_events.hero_desc': 'Explore past events hosted by SPE UFPA.',

    // TeamPage
    'page.team.hero_title': 'Our Leadership',
    'page.team.hero_desc': 'Meet the current board of SPE UFPA and the history of leaders who helped build our community.',
    'page.team.no_members': 'No members found for the selected year.',

    // ContactPage
    'page.contact.hero_title': 'Get in Touch',
    'page.contact.hero_desc': 'We would love to hear from you. Get in touch with any questions or inquiries.',
    'page.contact.connect_title': 'Connect With Us',
    'page.contact.form.first_name': 'First Name',
    'page.contact.form.last_name': 'Last Name',
    'page.contact.location_title': 'Our Location',

    // NotFoundPage
    'page.not_found.title1': 'Coming Soon',
    'page.not_found.title2': 'Page Not Found',
    'page.not_found.desc': 'The page you are looking for is under development and will be available soon. Thank you for your patience!',
    'page.not_found.btn': 'Back to Home',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
