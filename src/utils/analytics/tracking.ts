import { config } from './config';
import { getCookiePreferences } from '../cookies';
import type { AnalyticsEvent, GtagConfig } from './types';

export const trackPageView = (path: string): void => {
  const preferences = getCookiePreferences();
  if (!preferences.analytics || typeof window.gtag === 'undefined') return;

  window.gtag('config', config.ga.trackingId, {
    page_path: path,
    send_to: config.ga.trackingId
  } as GtagConfig);
}

export const trackEvent = (event: AnalyticsEvent): void => {
  const preferences = getCookiePreferences();
  if (!preferences.analytics || typeof window.gtag === 'undefined') return;

  window.gtag('event', event.action, {
    event_category: event.category,
    event_label: event.label,
    value: event.value,
    send_to: config.ga.trackingId
  } as GtagConfig);
}