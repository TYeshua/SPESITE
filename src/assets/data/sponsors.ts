export interface Sponsor {
  id: number;
  name: string;
  logo: string;
  level: 'platinum' | 'gold' | 'silver' | 'bronze';
  website: string;
}

export const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "PetroBras",
    logo: "https://placehold.co/300x150?text=PetroBras",
    level: "platinum",
    website: "https://petrobras.com.br"
  },
  {
    id: 2,
    name: "Schlumberger",
    logo: "https://placehold.co/300x150?text=Schlumberger",
    level: "gold",
    website: "https://www.slb.com"
  },
  {
    id: 3,
    name: "Baker Hughes",
    logo: "https://placehold.co/300x150?text=Baker+Hughes",
    level: "gold",
    website: "https://www.bakerhughes.com"
  },
  {
    id: 4,
    name: "Halliburton",
    logo: "https://placehold.co/300x150?text=Halliburton",
    level: "gold",
    website: "https://www.halliburton.com"
  },
  {
    id: 5,
    name: "TechnipFMC",
    logo: "https://placehold.co/300x150?text=TechnipFMC",
    level: "silver",
    website: "https://www.technipfmc.com"
  },
  {
    id: 6,
    name: "NOV",
    logo: "https://placehold.co/300x150?text=NOV",
    level: "silver",
    website: "https://www.nov.com"
  },
  {
    id: 7,
    name: "Wood Group",
    logo: "https://placehold.co/300x150?text=Wood+Group",
    level: "bronze",
    website: "https://www.woodplc.com"
  },
  {
    id: 8,
    name: "Subsea 7",
    logo: "https://placehold.co/300x150?text=Subsea+7",
    level: "bronze",
    website: "https://www.subsea7.com"
  }
];