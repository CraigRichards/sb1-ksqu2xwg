import { config } from './config';
import { getCookiePreferences } from '../cookies';
import type { GtagConfig } from './types';

export const initializeGA = (): void => {
  const preferences = getCookiePreferences();
  if (!preferences.analytics) return;

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args) {
    window.dataLayer.push(arguments);
  };

  // Create and append GA script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${config.ga.trackingId}`;
  document.head.appendChild(script);

  // Basic GA4 configuration
  window.gtag('js', new Date());
  window.gtag('config', config.ga.trackingId, {
    debug_mode: config.ga.debug,
    page_path: window.location.pathname,
    send_to: config.ga.trackingId
  } as GtagConfig);
};