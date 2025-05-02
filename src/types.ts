export interface Property {
  id: number;
  title: string;
  type: 'pg' | 'flat' | 'apartment';
  imageUrl: string;
  price: number;
  pricePeriod: string;
  location: string;
  amenities: string[];
  rating: number;
  featured: boolean;
}

export interface Roommate {
  id: number;
  name: string;
  age: number;
  occupation: string;
  imageUrl: string;
  location: string;
  interests: string[];
  budget: number;
  moveInDate: string;
  verified: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}