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
    email: "carlos.silva@spemacae.org"
  },
  {
    id: 2,
    name: "Evelyn Campelo",
    position: "Vice-Presidente",
    image: "Eveli.jpg",
    bio: "Descrição",
    linkedin: "https://www.linkedin.com/in/evelyncampelo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    email: "ana.martins@spemacae.org"
  },
  {
    id: 3,
    name: "Cláudio Lucas",
    position: "Sponsor",
    image: "Claudio.jpg",
    bio: "Descrição",
    linkedin: "https://www.linkedin.com/in/cl%C3%A1udio-lucas-a7186020/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "rafael.costa@spemacae.org"
  },
  {
    id: 4,
    name: "Shelda Corrêa",
    position: "Presidente dos Sócios",
    image: "Shelda.jpg",
    bio: "Descrição",
    linkedin: "https://www.linkedin.com/in/shelda-corr%C3%AAa-988a10159?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    email: "julia.santos@spemacae.org"
  },
  {
    id: 5,
    name: "Sophia Macedo",
    position: "Secretariado",
    image: "Sophia.jpg",
    bio: "Descrição",
    linkedin: "https://www.linkedin.com/in/sophia-macedo-pereira-10643a1a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
    email: "marco.almeida@spemacae.org"
  },
  {
    id: 6,
    name: "José Santos",
    position: "Tesoureiro",
    image: "jos.jpg",
    bio: "Descrição",
    linkedin: "https://www.linkedin.com/in/jos%C3%A9-santos-78abb8254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
    email: "fernanda.lima@spemacae.org"
  }
];