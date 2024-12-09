// Use environment variable for API URL or fallback to development URL
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.legalworkforce.ai';

export const API_ENDPOINTS = {
  checkout: '/v1/checkout',
  topup: '/v1/topup',
  usage: '/v1/usage',
  subscription: '/v1/subscription'
} as const;