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
    position: "Chairperson",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Carlos has over 15 years of experience in the petroleum industry and has been leading the SPE Macaé section since 2023.",
    linkedin: "https://linkedin.com",
    email: "carlos.silva@spemacae.org"
  },
  {
    id: 2,
    name: "Ana Martins",
    position: "Vice Chairperson",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Ana specializes in reservoir engineering and has contributed significantly to SPE's technical programs.",
    linkedin: "https://linkedin.com",
    email: "ana.martins@spemacae.org"
  },
  {
    id: 3,
    name: "Rafael Costa",
    position: "Secretary",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Rafael manages all administrative functions of the section and coordinates with global SPE headquarters.",
    linkedin: "https://linkedin.com",
    email: "rafael.costa@spemacae.org"
  },
  {
    id: 4,
    name: "Julia Santos",
    position: "Treasurer",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Julia oversees the financial management of the section and has a background in both finance and petroleum engineering.",
    linkedin: "https://linkedin.com",
    email: "julia.santos@spemacae.org"
  },
  {
    id: 5,
    name: "Marco Almeida",
    position: "Program Chair",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Marco is responsible for planning and organizing the technical program of events throughout the year.",
    linkedin: "https://linkedin.com",
    email: "marco.almeida@spemacae.org"
  },
  {
    id: 6,
    name: "Fernanda Lima",
    position: "Membership Chair",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Fernanda leads initiatives to grow and engage the SPE Macaé membership, with a focus on student chapters.",
    linkedin: "https://linkedin.com",
    email: "fernanda.lima@spemacae.org"
  }
];