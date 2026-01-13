export type Page = 'home' | 'about' | 'services' | 'donations' | 'contact';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  colorClass: string;
}

export interface Cause {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  raised: number;
  goal: number;
  image: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}