export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  category: 'conference' | 'workshop' | 'webinar' | 'networking';
  externalUrl?: string; // 👈 campo opcional para link externo
}

export const events: Event[] = [
  {
    id: 1,
    title: "1° AmazonTech Energy",
    date: "03 - 05 de Junho, 2025",
    location: "Casa da Cultura, Salinópolis",
    image: "logoamazon.jpg",
    description: "Promovido pelo Capítulo Estudantil da SPE UFPA, o AmazonTech Energy é um evento inovador que reúne especialistas da indústria de petróleo, gás e energia em uma única oportunidade para debater o futuro do setor energético, promover troca de conhecimento acadêmico e muito mais!",
    category: "conference",
    externalUrl: "https://amazontechenergy.ufpa.br/" // 👈 botão levará para este link
  },
  {
    id: 2,
    title: "III EquiPetro",
    date: "10/09/2025",
    location: "Casa da Cultura, Salinópolis",
    image: "equipetro.png",
    description: "O EquiPetro é um encontro técnico-científico que tem por objetivo reunir pesquisadores para discutir e compartilhar conhecimento e experiência na área de equilíbrio de fases aplicado aos desafios envolvidos na produção de petróleo, energia e questões ambientais associadas.",
    category: "conference",
    externalUrl: "https://iiiequipetro.salinopolis.ufpa.br/"
  }
];
