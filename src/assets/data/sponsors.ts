export interface Sponsor {
  id: number;
  name: string;
  logo: string;
  level: 'platinum' | 'gold' | 'silver' | 'bronze' | 'apoiadores';
  website: string;
}

export const sponsors: Sponsor[] = [
  
  {
    id: 1,
    name: "SLB - Schlumberger",
    logo: "SLB.jpg",
    level: "gold",
    website: "https://www.slb.com"
  },
  
  {
    id: 2,
    name: "YASS - Bebidas e Coveniência",
    logo: "yass.png",
    level: "apoiadores",
    website: ""
  },
  {
    id: 3,
    name: "Farolzinho Sorvetes",
    logo: "farolzinho.png",
    level: "apoiadores",
    website: ""
  },
  {
    id: 4,
    name: "HortSal - Frutas & Verduras",
    logo: "hortsal.png",
    level: "apoiadores",
    website: ""
  },
  {
    id: 5,
    name: "NatuCafé - Naturalmente Saboroso",
    logo: "natucafé.png",
    level: "apoiadores",
    website: ""
  },

  {
    id: 6,
    name: "PrimeFit - Academia",
    logo: "primefit.png",
    level: "apoiadores",
    website: ""
  },

  {
    id: 7,
    name: "Casemirão - Burger & Steak",
    logo: "casemirao.png",
    level: "apoiadores",
    website: ""
  },

];