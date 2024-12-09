import { ReactNode } from 'react';

export interface Plan {
  name: string;
  price: number;
  credits: number;
  features: string[];
}

export type AgentSkill = 'phone' | 'voice' | 'chat';

export interface AgentSkills {
  phone: boolean;
  voice: boolean;
  chat: boolean;
}

export interface AgentLanguage {
  code: string;
  name: string;
  flag: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  specialties: string[];
  skills: AgentSkills;
  details: {
    experience: string;
    availability: string;
    languages: AgentLanguage[];
    responseTime: string;
  };
}

export interface UsageStats {
  creditsRemaining: number;
  voiceCredits: number;
  chatCredits: number;
  workflowCredits: number;
}