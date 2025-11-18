import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  popular?: boolean;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ComparisonFeature {
  feature: string;
  wipeClean: boolean | string;
  others: boolean | string;
  freelancers: boolean | string;
}