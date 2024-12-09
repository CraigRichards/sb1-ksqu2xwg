import type { AnalyticsConfig } from './types';

export const config: AnalyticsConfig = {
  ga: {
    trackingId: 'G-1XPGYYCRCQ',
    debug: process.env.NODE_ENV === 'development'
  },
  gtm: {
    containerId: 'GTM-KG87ZDTZ'
  }
};