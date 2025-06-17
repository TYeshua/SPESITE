export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  category: 'conference' | 'workshop' | 'webinar' | 'networking';
}

export const events: Event[] = [
  {
    id: 1,
    title: "Simpósio de Engenharia de Petróleo 2025",
    date: "15-17 de Maio, 2025",
    location: "Centro de Convenções de Macaé",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Junte-se a nós no maior evento de engenharia de petróleo da região, com palestrantes especialistas, workshops e oportunidades de networking.",
    category: "conference"
  },
  {
    id: 2,
    title: "Workshop de Operações Offshore Sustentáveis",
    date: "10 de Junho, 2025",
    location: "Sede SPE Macaé",
    image: "https://images.pexels.com/photos/6323/hands-measuring-engineer-ruler.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Um workshop prático focado em práticas sustentáveis em operações petrolíferas offshore.",
    category: "workshop"
  },
  {
    id: 3,
    title: "Futuro da Energia: Estratégias de Transição",
    date: "5 de Julho, 2025",
    location: "Online",
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Um webinar discutindo estratégias para empresas de energia em transição para modelos de negócios mais sustentáveis.",
    category: "webinar"
  },
  {
    id: 4,
    title: "Noite de Networking para Jovens Profissionais",
    date: "20 de Agosto, 2025",
    location: "Hotel Blue Ocean, Macaé",
    image: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Conecte-se com outros jovens profissionais da indústria de petróleo e gás neste evento de networking descontraído.",
    category: "networking"
  }
];