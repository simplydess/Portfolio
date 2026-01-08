
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'Professional' | 'Technical' | 'Soft';
}
