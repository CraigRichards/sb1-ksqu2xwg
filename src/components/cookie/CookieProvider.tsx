import React, { useState, useEffect } from 'react';
import { hasConsented, getCookieConsentVersion, setCookieConsentVersion } from '../../utils/cookies';
import CookieBanner from './CookieBanner';

const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentGiven = hasConsented();
    const consentVersion = getCookieConsentVersion();
    
    // Show banner if no consent or outdated version
    setShowBanner(!consentGiven || consentVersion !== '1.0');
  }, []);

  const handleAccept = () => {
    setCookieConsentVersion();
    setShowBanner(false);
  };

  const handleDecline = () => {
    setCookieConsentVersion();
    setShowBanner(false);
  };

  return (
    <>
      {children}
      {showBanner && (
        <CookieBanner
          onAccept={handleAccept}
          onDecline={handleDecline}
        />
      )}
    </>
  );
};

export default CookieProvider;