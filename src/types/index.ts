export type SkillLevel = 'Comfortable' | 'Learning' | 'Exploring';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  icon?: string;
  tag?: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export type ProjectCategory = 'All' | 'AI/ML' | 'Full Stack' | 'Python' | 'Java' | 'Other';

export interface ProjectItem {
  id: string;
  title: string;
  headline: string;
  category: ProjectCategory[];
  description: string;
  longDescription: string;
  keyHighlight: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  architectureDetails: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  featured: boolean;
}

export interface LearningStage {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Next Horizon';
  skillsGained: string[];
}

export interface LevelingUpTrack {
  id: string;
  title: string;
  icon: string;
  badge: string;
  description: string;
  items: {
    name: string;
    state: 'Core Focus' | 'Practicing' | 'Exploring';
    tag?: string;
  }[];
}

export interface EducationInfo {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  status: string;
  description: string;
  coreSubjects: string[];
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  tagline: string;
  period: string;
  description: string;
  keyPoints: string[];
  technologies: string[];
  badge: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location: string;
  availability: string;
}
