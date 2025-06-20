export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
  email: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Andressa Valente",
    position: "Presidente",
    image: "AnVA.jpg",
    bio: "Descrição",
    linkedin: "https://www.linkedin.com/in/andresa-valente?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    email: ""
  },
  {
    id: 2,
    name: "Evelyn Campelo",
    position: "Vice-Presidente",
    image: "Eveli.jpg",
    bio: "Descrição",
    linkedin: "https://www.linkedin.com/in/evelyncampelo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    email: "campelokailanny5@gmail.com"
  },
  {
    id: 3,
    name: "Cláudio Lucas",
    position: "Sponsor",
    image: "Claudio.jpg",
    bio: "Descrição",
    linkedin: "https://www.linkedin.com/in/cl%C3%A1udio-lucas-a7186020/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: ""
  },
  {
    id: 4,
    name: "Ana Nascimento",
    position: "Diretora de Marketing",
    image: "AnaB.jpg",
    bio: "Descrição",
    linkedin: "https://www.linkedin.com/in/ana-clara-nascimento-7a4034255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
    email: ""
  },
  {
    id: 5,
    name: "Gabriel Braga",
    position: "Diretor de Comunicação e Eventos",
    image: "Braga.jpg",
    bio: "Descrição",
    linkedin: "https://www.linkedin.com/in/gabriel-braga-975990235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
    email: ""
  },
  {
    id: 6,
    name: "Thiago Yeshua",
    position: "Diretor da Tecnologia",
    image: "Yeshua.jpg",
    bio: "Descrição",
    linkedin: "https://www.linkedin.com/in/thiago-yeshua-05424a303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    email: ""
  }
];