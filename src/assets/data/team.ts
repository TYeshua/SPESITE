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
    name: "Carlos Silva",
    position: "Presidente",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Carlos tem mais de 15 anos de experiência na indústria petrolífera e lidera a seção SPE Macaé desde 2023.",
    linkedin: "https://linkedin.com",
    email: "carlos.silva@spemacae.org"
  },
  {
    id: 2,
    name: "Ana Martins",
    position: "Vice-Presidente",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Ana é especialista em engenharia de reservatórios e contribuiu significativamente para os programas técnicos da SPE.",
    linkedin: "https://linkedin.com",
    email: "ana.martins@spemacae.org"
  },
  {
    id: 3,
    name: "Rafael Costa",
    position: "Secretário",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Rafael gerencia todas as funções administrativas da seção e coordena com a sede global da SPE.",
    linkedin: "https://linkedin.com",
    email: "rafael.costa@spemacae.org"
  },
  {
    id: 4,
    name: "Julia Santos",
    position: "Tesoureira",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Julia supervisiona a gestão financeira da seção e tem formação em finanças e engenharia de petróleo.",
    linkedin: "https://linkedin.com",
    email: "julia.santos@spemacae.org"
  },
  {
    id: 5,
    name: "Marco Almeida",
    position: "Coordenador de Programas",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Marco é responsável pelo planejamento e organização do programa técnico de eventos ao longo do ano.",
    linkedin: "https://linkedin.com",
    email: "marco.almeida@spemacae.org"
  },
  {
    id: 6,
    name: "Fernanda Lima",
    position: "Coordenadora de Membros",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Fernanda lidera iniciativas para crescer e engajar os membros da SPE Macaé, com foco em capítulos estudantis.",
    linkedin: "https://linkedin.com",
    email: "fernanda.lima@spemacae.org"
  }
];