export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  bulletPoints: string[];
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  location: string;
  year: string;
  impactMetric: string;
  impactLabel: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image: string;
}

export interface ConsultationQuery {
  name: string;
  email: string;
  organization: string;
  role: string;
  interest: 'education' | 'business' | 'strategic' | 'other';
  message: string;
}

export interface HubConnection {
  name: string;
  coordinates: { x: number; y: number }; // Percentage offsets for custom map
  description: string;
  type: 'hub' | 'connection';
  details: string;
}
