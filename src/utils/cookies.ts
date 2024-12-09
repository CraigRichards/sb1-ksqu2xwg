import Cookies from 'js-cookie';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const COOKIE_PREFERENCES_KEY = 'cookie_preferences';
const COOKIE_CONSENT_VERSION = '1.0';

export const getDefaultPreferences = (): CookiePreferences => ({
  necessary: true, // Always true as these are essential
  analytics: true,  // Changed to true
  marketing: true,  // Changed to true
  preferences: true // Changed to true
});

export const getCookiePreferences = (): CookiePreferences => {
  const stored = Cookies.get(COOKIE_PREFERENCES_KEY);
  if (!stored) return getDefaultPreferences();
  
  try {
    return JSON.parse(stored);
  } catch {
    return getDefaultPreferences();
  }
};

export const setCookiePreferences = (preferences: CookiePreferences) => {
  Cookies.set(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences), {
    expires: 365, // Valid for one year
    sameSite: 'strict',
    secure: true
  });
  
  // Apply preferences
  if (!preferences.analytics) {
    removeAnalyticsCookies();
  }
  if (!preferences.marketing) {
    removeMarketingCookies();
  }
  if (!preferences.preferences) {
    removePreferenceCookies();
  }
};

export const hasConsented = (): boolean => {
  return !!Cookies.get(COOKIE_PREFERENCES_KEY);
};

// Helper functions to remove specific types of cookies
const removeAnalyticsCookies = () => {
  // Remove Google Analytics cookies
  Cookies.remove('_ga');
  Cookies.remove('_gid');
  // Add other analytics cookies as needed
};

const removeMarketingCookies = () => {
  // Remove marketing cookies
  Cookies.remove('_fbp');
  // Add other marketing cookies as needed
};

const removePreferenceCookies = () => {
  // Remove preference cookies
  Cookies.remove('theme');
  Cookies.remove('language');
  // Add other preference cookies as needed
};

export const getCookieConsentVersion = (): string | undefined => {
  return Cookies.get('cookie_consent_version');
};

export const setCookieConsentVersion = () => {
  Cookies.set('cookie_consent_version', COOKIE_CONSENT_VERSION, {
    expires: 365,
    sameSite: 'strict',
    secure: true
  });
};