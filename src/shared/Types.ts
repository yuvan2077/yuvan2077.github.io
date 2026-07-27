import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface HeaderDetails {
  name: string;
  id: string;
  role: string;
  summary: string;
  summaryAfterRole: string;
}

export interface ExperienceDetails {
  company: string;
  role: string;
  startDate: Date;
  endDate: Date | null;
  summary: string[];
}

export interface SkillDetails {
  category: string;
  skills: string[];
}

export interface ProjectDetails {
  title: string;
  tech: string[];
  summary: string;
  endDate: Date;
}

export interface TimelineDetails {
  startDate: Date;
  endDate?: Date;
  event: string;
  location: string;
}

export interface ContactDetails {
  name: string;
  link: string;
  icon: IconProp;
}
