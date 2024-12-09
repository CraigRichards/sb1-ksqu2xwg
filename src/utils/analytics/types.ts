export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export interface GtagConfig {
  page_path?: string;
  debug_mode?: boolean;
  event_category?: string;
  event_label?: string;
  value?: number;
  send_to?: string;
}

export interface AnalyticsConfig {
  ga: {
    trackingId: string;
    debug: boolean;
  };
  gtm: {
    containerId: string;
  };
}