// src/assets/data/pastEvents.ts
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

export const pastEvents: Event[] = [
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
  
];