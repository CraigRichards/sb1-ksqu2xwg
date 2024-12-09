import { useState } from 'react';
import { SubscriptionCustomization } from '../types/stripe';
import { createCheckoutSession, redirectToCheckout } from '../utils/stripe';
import { trackEvent } from '../utils/analytics';

import { logger } from '../utils/logger';

export const useStripeCheckout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async (customization: SubscriptionCustomization) => {
    if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
      setError('Stripe is not properly configured');
      logger.error('Stripe public key is missing');
      return;
    }

    const basePrice = 700;
    const additionalConcurrencyPrice = (customization.additionalConcurrency || 0) * 20;
    const phoneLinesPrice = (customization.phoneLines || 0) * 2;
    const totalPrice = basePrice + additionalConcurrencyPrice + phoneLinesPrice;

    try {
      setLoading(true);
      setError(null);

      logger.info('Initiating checkout with customization:', customization);
      // Track checkout initiation
      trackEvent({
        category: 'Checkout',
        action: 'InitiateCheckout',
        label: 'Enterprise Plan',
        value: totalPrice
      });

      logger.info('Creating checkout session...');
      const session = await createCheckoutSession(customization);
      await redirectToCheckout(session.id);
      logger.info('Redirecting to Stripe checkout...', { sessionId: session.id });
    } catch (err) {
      logger.error('Checkout error:', err);
      
      // Track checkout error
      trackEvent({
        category: 'Checkout',
        action: 'CheckoutError',
        label: err instanceof Error ? err.message : 'Unknown error'
      });
      
      const errorMessage = err instanceof Error ? err.message : 'Failed to initiate checkout';
      setError(errorMessage);
      logger.error('Checkout failed:', { error: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return {
    handleCheckout,
    loading,
    error,
  };
};