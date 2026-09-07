import type { ReactElement } from 'react';

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

export interface Service {
  icon: ReactElement;
  title: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: PlanFeature[];
}

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  comments: number;
  category: string;
}

export interface FooterLink {
  title: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}