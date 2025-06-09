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
    title: "Petroleum Engineering Symposium 2025",
    date: "May 15-17, 2025",
    location: "Macaé Convention Center",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Join us for the largest petroleum engineering event in the region, featuring expert speakers, workshops, and networking opportunities.",
    category: "conference"
  },
  {
    id: 2,
    title: "Sustainable Offshore Operations Workshop",
    date: "June 10, 2025",
    location: "SPE Macaé Headquarters",
    image: "https://images.pexels.com/photos/6323/hands-measuring-engineer-ruler.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A hands-on workshop focusing on sustainable practices in offshore petroleum operations.",
    category: "workshop"
  },
  {
    id: 3,
    title: "Future of Energy: Transition Strategies",
    date: "July 5, 2025",
    location: "Online",
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A webinar discussing strategies for energy companies transitioning to more sustainable business models.",
    category: "webinar"
  },
  {
    id: 4,
    title: "Young Professionals Networking Night",
    date: "August 20, 2025",
    location: "Blue Ocean Hotel, Macaé",
    image: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Connect with fellow young professionals in the oil and gas industry in this relaxed networking event.",
    category: "networking"
  }
];