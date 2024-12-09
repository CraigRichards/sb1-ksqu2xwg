import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  initializeGA,
  initializeGTM,
  trackPageView,
  trackEvent
} from '../../utils/analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize analytics
    initializeGA();
    initializeGTM();

    // Track initial page view
    trackPageView(location.pathname);

    // Track app initialization
    trackEvent({
      category: 'Application',
      action: 'Initialize',
      label: 'App Start'
    });
  }, []);

  // Track subsequent page views
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return <>{children}</>;
};

export default AnalyticsProvider;