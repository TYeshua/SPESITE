export interface Event {
  id: number;
  title: string;
  title_en?: string;
  date: string;
  date_en?: string;
  location: string;
  ajudance: string;
  ajudance_en?: string;
  image: string;
  description: string;
  description_en?: string;
  category: 'conference' | 'workshop' | 'webinar' | 'networking';
  externalUrl?: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "1° AmazonTech Energy",
    title_en: "1st AmazonTech Energy",
    date: "03 - 05 de Junho, 2025",
    date_en: "June 03 - 05, 2025",
    location: "Casa da Cultura, Salinópolis",
    ajudance: "Realizador",
    ajudance_en: "Organizer",
    image: "logoamazon.jpg",
    description: "Promovido pelo Capítulo Estudantil da SPE UFPA, o AmazonTech Energy é um evento inovador que reúne especialistas da indústria de petróleo, gás e energia em uma única oportunidade para debater o futuro do setor energético, promover troca de conhecimento acadêmico e muito mais!",
    description_en: "Organized by the SPE UFPA Student Chapter, AmazonTech Energy is an innovative event that brings together experts from the oil, gas, and energy industry in a unique opportunity to debate the future of the energy sector, promote the exchange of academic knowledge, and much more!",
    category: "conference",
    externalUrl: "https://amazontechenergy.ufpa.br/"
  },
  {
    id: 2,
    title: "III EquiPetro",
    date: "10/09/2025",
    location: "Casa da Cultura, Salinópolis",
    ajudance: "Apoio",
    image: "equip2.jpg",
    description: "O EquiPetro é um encontro técnico-científico que tem por objetivo reunir pesquisadores para discutir e compartilhar conhecimento e experiência na área de equilíbrio de fases aplicado aos desafios envolvidos na produção de petróleo, energia e questões ambientais associadas.",
    category: "conference",
    externalUrl: "https://iiiequipetro.salinopolis.ufpa.br/"
  }
];