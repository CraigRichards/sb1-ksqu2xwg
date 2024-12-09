import { Agent } from '../types';
import { getRandomLanguages } from './languages';

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Sally',
    role: 'Inbound Receptionist',
    description: 'Expert at managing incoming calls, chats, and web inquiries with a warm, professional approach.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&h=500&fit=crop&auto=format',
    specialties: ['Call Management', 'Client Screening', 'Appointment Scheduling'],
    skills: {
      phone: true,
      voice: true,
      chat: true
    },
    details: {
      experience: '5+ years of virtual reception experience',
      availability: '24/7',
      languages: getRandomLanguages(),
      responseTime: 'Immediate'
    }
  },
  {
    id: '2',
    name: 'Geoff',
    role: 'Property Law Specialist',
    description: 'Handles property law inquiries and schedules client appointments with expertise.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&h=500&fit=crop&auto=format',
    specialties: ['Property Law', 'Contract Review', 'Real Estate'],
    skills: {
      phone: true,
      voice: true,
      chat: true
    },
    details: {
      experience: '8+ years in property law',
      availability: '24/7',
      languages: getRandomLanguages(),
      responseTime: 'Under 2 minutes'
    }
  },
  {
    id: '3',
    name: 'Amelia',
    role: 'Family Law Specialist',
    description: 'Manages sensitive cases with empathy and professional guidance.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&h=500&fit=crop&auto=format',
    specialties: ['Family Law', 'Custody', 'Divorce'],
    skills: {
      phone: true,
      voice: true,
      chat: true
    },
    details: {
      experience: '6+ years in family law',
      availability: '24/7',
      languages: getRandomLanguages(),
      responseTime: 'Under 2 minutes'
    }
  },
  {
    id: '4',
    name: 'Ethan',
    role: 'Wills & Estates Specialist',
    description: 'Provides expert guidance on wills, trusts, and estate planning matters.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&h=500&fit=crop&auto=format',
    specialties: ['Wills', 'Trusts', 'Estate Planning'],
    skills: {
      phone: true,
      voice: true,
      chat: true
    },
    details: {
      experience: '7+ years in estate planning',
      availability: '24/7',
      languages: getRandomLanguages(),
      responseTime: 'Under 3 minutes'
    }
  },
  {
    id: '5',
    name: 'Nina',
    role: 'Employment Law Advisor',
    description: 'Addresses workplace disputes and contract queries with precision.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&h=500&fit=crop&auto=format',
    specialties: ['Employment Law', 'Contracts', 'Workplace Disputes'],
    skills: {
      phone: true,
      voice: true,
      chat: true
    },
    details: {
      experience: '5+ years in employment law',
      availability: '24/7',
      languages: getRandomLanguages(),
      responseTime: 'Under 2 minutes'
    }
  },
  {
    id: '6',
    name: 'Victor',
    role: 'Commercial Law Specialist',
    description: 'Handles complex business-related inquiries with sharp attention to detail.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&h=500&fit=crop&auto=format',
    specialties: ['Commercial Law', 'Mergers', 'Business Contracts'],
    skills: {
      phone: true,
      voice: true,
      chat: true
    },
    details: {
      experience: '9+ years in commercial law',
      availability: '24/7',
      languages: getRandomLanguages(),
      responseTime: 'Under 3 minutes'
    }
  },
  {
    id: '7',
    name: 'Sophia',
    role: 'Litigation Assistant',
    description: 'Guides clients through dispute resolution processes effectively.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&h=500&fit=crop&auto=format',
    specialties: ['Litigation', 'Dispute Resolution', 'Court Procedures'],
    skills: {
      phone: true,
      voice: true,
      chat: true
    },
    details: {
      experience: '6+ years in litigation',
      availability: '24/7',
      languages: getRandomLanguages(),
      responseTime: 'Under 2 minutes'
    }
  },
  {
    id: '8',
    name: 'Olivia',
    role: 'Intellectual Property Specialist',
    description: 'Advises on IP matters with comprehensive knowledge and expertise.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&h=500&fit=crop&auto=format',
    specialties: ['IP Law', 'Patents', 'Trademarks'],
    skills: {
      phone: true,
      voice: true,
      chat: true
    },
    details: {
      experience: '7+ years in IP law',
      availability: '24/7',
      languages: getRandomLanguages(),
      responseTime: 'Under 3 minutes'
    }
  }
];