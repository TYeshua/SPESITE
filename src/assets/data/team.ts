export interface TeamMember {
  id: number;
  name: string;
  position: string;
  position_en?: string;
  image: string;
  bio: string;
  bio_en?: string;
  linkedin?: string;
  email: string;
}

export interface TeamByYear {
  year: string;
  label: string;
  members: TeamMember[];
}

export const teamsData: TeamByYear[] = [
  {
    year: "2026",
    label: "2026 (Atual)",
    members: [
      // Adicione os membros da equipe de 2026 aqui
      {
        id: 1,
        name: "Evelyn Campelo",
        position: "Conselho",
        position_en: "Advisory Board",
        image: "Eveli.jpg",
        bio: "Aconselha a presidência atual, administra equipes e supervisiona eventos, garantindo a eficiência dos processos e o alinhamento com os objetivos da SPE-UFPA.",
        bio_en: "Advises the current presidency, manages teams and oversees events, ensuring process efficiency and alignment with SPE-UFPA objectives.",
        linkedin: "https://www.linkedin.com/in/evelyncampelo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        email: "campelokailanny5@gmail.com"
      },
      {
        id: 2,
        name: "Shelda Corrêa",
        position: "Presidente",
        position_en: "President",
        image: "shelda2.jpg",
        bio: "Presidente da SPE-UFPA, lidera equipes, planeja atividades e acompanha metas. Atua também em áreas como Comunicação, Eventos e Tecnologia, promovendo integração e eficiência.",
        bio_en: "President of SPE-UFPA, leads teams, plans activities, and tracks goals. Also works in areas such as Communication, Events, and Technology, promoting integration and efficiency.",
        linkedin: "https://www.linkedin.com/in/shelda-corr%C3%AAa-988a10159/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "sheldarebbec@gmail.com"
      },
      {
        id: 3,
        name: "Davi Maia",
        position: "Vice-Presidente",
        position_en: "Vice President",
        image: "davi2.jpeg",
        bio: "Vice-presidente da SPE-UFPA, lidera equipes, planeja atividades e acompanha metas. Atua também em áreas como Comunicação, Eventos e Tecnologia, promovendo integração e eficiência.",
        bio_en: "Vice President of SPE-UFPA, leads teams, plans activities, and tracks goals. Also works in areas such as Communication, Events, and Technology, promoting integration and efficiency.",
        linkedin: "https://www.linkedin.com/in/davi-maia-557a7634b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "davimaia1727@gmail.com"
      },
      {
      id: 4,
        name: "Cláudio Lucas",
        position: "Sponsor",
        position_en: "Faculty Sponsor",
        image: "Claudio.jpg",
        bio: "Professor e Sponsor, supervisiona o capítulo academicamente e estrategicamente. Promove integração universidade-SPE e orienta o desenvolvimento técnico e científico.",
        bio_en: "Professor and Faculty Sponsor, oversees the chapter academically and strategically. Promotes university-SPE integration and guides technical and scientific development.",
        linkedin: "https://www.linkedin.com/in/cl%C3%A1udio-lucas-a7186020/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "claudiolucas@ufpa.br"
      },
      {
        id: 5,
        name: "Thiago Yeshua",
        position: "Diretor da Tecnologia",
        position_en: "Technology Director",
        image: "yeshuanovo.jpeg",
        bio: "Lidera a equipe técnica, desenvolve soluções digitais além do desenvolvimento e manunteção de sites para o capítulo, otimizando processos e a experiência dos membros.",
        bio_en: "Leads the technical team, develops digital solutions and manages the chapter's websites, optimizing processes and member experience.",
        linkedin: "https://www.linkedin.com/in/thiago-yeshua-05424a303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        email: "thiagoyeshua01@gmail.com"
      },
      {
        id: 6,
        name: "Ana Nascimento",
        position: "Diretora de Marketing",
        position_en: "Marketing Director",
        image: "ana2.DNG",
        bio: " Diretora de Mídias e Marketing, lidera a equipe, planeja ações e otimiza a comunicação de acordo com os objetivos do capítulo.",
        bio_en: "Social Media and Marketing Director, leads the team, plans actions, and optimizes communication in accordance with the chapter's objectives.",
        linkedin: "https://www.linkedin.com/in/ana-clara-nascimento-7a4034255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
        email: "ana.brito@salinopolis.ufpa.br"
      },
      {
        id: 7,
        name: "Gabriel Braga",
        position: "Diretor de Comunicação e Eventos",
        position_en: "Communication and Events Director",
        image: "braga6.jpg",
        bio: "Diretor de Comunicação e Eventos, organiza palestras, eventos e ações para atrair e engajar novos membros da SPE-UFPA.",
        bio_en: "Communication and Events Director, organizes talks, events, and initiatives to attract and engage new SPE-UFPA members.",
        linkedin: "https://www.linkedin.com/in/gabriel-braga-975990235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
        email: "gabrielbraga153759@gmail.com"
      },
      {
        id: 8,
        name: "Andressa Menezes",
        position: "Secretária",
        position_en: "Secretary",
        image: "andress2.jpeg",
        bio: "Secretária da SPE-UFPA, responsável por apoiar a execução das atividades, manter a organização administrativa e contribuir para a gestão operacional do capítulo.",
        bio_en: "Secretary of SPE-UFPA, responsible for supporting the execution of activities, maintaining administrative organization, and contributing to the chapter's operational management.",
        linkedin: "https://www.linkedin.com/in/andressa-menezes-a1b358303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "[EMAIL_ADDRESS]"
      },
      {
        id: 9,
        name: "Ana Anjo",
        position: "Tesoureira",
        position_en: "Treasurer",
        image: "anaanjo.jpeg",
        bio: "Tesoureira, responsável por gerenciar os recursos financeiros do capítulo e garantir a saúde financeira da organização.",
        bio_en: "Treasurer, responsible for managing the chapter's financial resources and ensuring the organization's financial health.",
        linkedin: "https://www.linkedin.com/in/ana-clara-anjo-b59738256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "ana.anjo.engpetroleo@gmail.com"
      }
      
     
    ]
  },
  {
    year: "2025",
    label: "2025",
    members: [
      {
        id: 1,
        name: "Andressa Valente",
        position: "Presidente",
        position_en: "President",
        image: "ands2.jpg",
        bio: "Presidente da SPE-UFPA, lidera equipes, planeja atividades e acompanha metas. Atua também em áreas como Comunicação, Eventos e Tecnologia, promovendo integração e eficiência.",
        bio_en: "President of SPE-UFPA, leads teams, plans activities, and tracks goals. Also works in areas such as Communication, Events, and Technology, promoting integration and efficiency.",
        linkedin: "https://www.linkedin.com/in/andresa-valente?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        email: "andresavalente27@gmail.com"
      },
      {
        id: 2,
        name: "Evelyn Campelo",
        position: "Vice-Presidente",
        position_en: "Vice President",
        image: "Eveli.jpg",
        bio: "Vice-presidente, administra equipes e supervisiona eventos, garantindo a eficiência dos processos e o alinhamento com os objetivos da SPE-UFPA.",
        bio_en: "Vice President, manages teams and oversees events, ensuring process efficiency and alignment with SPE-UFPA objectives.",
        linkedin: "https://www.linkedin.com/in/evelyncampelo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        email: "campelokailanny5@gmail.com"
      },
      {
        id: 3,
        name: "Cláudio Lucas",
        position: "Sponsor",
        position_en: "Faculty Sponsor",
        image: "Claudio.jpg",
        bio: "Professor e Sponsor, supervisiona o capítulo academicamente e estrategicamente. Promove integração universidade-SPE e orienta o desenvolvimento técnico e científico.",
        bio_en: "Professor and Faculty Sponsor, oversees the chapter academically and strategically. Promotes university-SPE integration and guides technical and scientific development.",
        linkedin: "https://www.linkedin.com/in/cl%C3%A1udio-lucas-a7186020/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "claudiolucas@ufpa.br"
      },
      {
        id: 4,
        name: "Ana Nascimento",
        position: "Diretora de Marketing",
        position_en: "Marketing Director",
        image: "ana2.DNG",
        bio: " Diretora de Mídias e Marketing, lidera a equipe, planeja ações e otimiza a comunicação de acordo com os objetivos do capítulo.",
        bio_en: "Social Media and Marketing Director, leads the team, plans actions, and optimizes communication in accordance with the chapter's objectives.",
        linkedin: "https://www.linkedin.com/in/ana-clara-nascimento-7a4034255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
        email: "ana.brito@salinopolis.ufpa.br"
      },
      {
        id: 5,
        name: "Gabriel Braga",
        position: "Acessor de Comunicação e Eventos",
        position_en: "Communication and Events Advisor",
        image: "braga6.jpg",
        bio: "Acessor de Comunicação e Eventos, organiza palestras, eventos e ações para atrair e engajar novos membros da SPE-UFPA.",
        bio_en: "Communication and Events Advisor, organizes talks, events, and initiatives to attract and engage new SPE-UFPA members.",
        linkedin: "https://www.linkedin.com/in/gabriel-braga-975990235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
        email: "gabrielbraga153759@gmail.com"
      },
      {
        id: 6,
        name: "Thiago Yeshua",
        position: "Diretor da Tecnologia",
        position_en: "Technology Director",
        image: "Yeshua.jpg",
        bio: "Lidera a equipe técnica, desenvolve soluções digitais além do desenvolvimento e manunteção de sites para o capítulo, otimizando processos e a experiência dos membros.",
        bio_en: "Leads the technical team, develops digital solutions and manages the chapter's websites, optimizing processes and member experience.",
        linkedin: "https://www.linkedin.com/in/thiago-yeshua-05424a303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        email: "thiagoyeshua01@gmail.com"
      },
      {
        id: 8,
        name: "Shelda Corrêa",
        position: "Diretora de eventos e comunicações",
        image: "shelda2.jpg",
        bio: "Coordena palestras e programações que auxiliam a propagação de conhecimento da indústria de petróleo e networking.",
        linkedin: "https://www.linkedin.com/in/shelda-corr%C3%AAa-988a10159/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "sheldarebbec@gmail.com"
      },
      {
        id: 9,
        name: "Sophia Macedo",
        position: "Secretária",
        position_en: "Secretary",
        image: "sophia2.jpg",
        bio: "Secretária da SPE-UFPA, responsável por apoiar a execução das atividades, manter a organização administrativa e contribuir para a gestão operacional do capítulo.",
        bio_en: "Secretary of SPE-UFPA, responsible for supporting the execution of activities, maintaining administrative organization, and contributing to the chapter's operational management.",
        linkedin: "https://www.linkedin.com/in/sophia-macedo-pereira-10643a1a5/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "gabrielbraga153759@gmail.com"
      }
    ]
  },
];