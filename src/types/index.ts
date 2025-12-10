export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  university: string;
  degree: string;
  period: string;
  thesis: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  architecture: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export type SectionType = 'about' | 'experience' | 'projects' | 'education' | 'skills';
