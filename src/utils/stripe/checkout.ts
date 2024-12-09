import { SubscriptionCustomization, CheckoutSession } from '../../types/stripe';
import { getStripe } from './client';
import { API_BASE_URL, API_ENDPOINTS } from '../../config/api';
import { stripeConfig } from '../../config/stripe';
import { logger } from '../logger';

const handleApiError = (error: any): Error => {
  logger.error('Stripe API error:', error);
  if (error.status) {
    switch (error.status) {
      case 401:
        return new Error('Authentication required');
      case 403:
        return new Error('Not authorized to perform this action');
      case 429:
        return new Error('Too many requests, please try again later');
      default:
        return new Error(`Server error: ${error.status}`);
    }
  }
  return error instanceof Error ? error : new Error('An unexpected error occurred');
};

export const createCheckoutSession = async (
  customization: SubscriptionCustomization
): Promise<CheckoutSession> => {
  try {
    logger.info('Creating checkout session with customization:', customization);

    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.checkout}/create-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        priceId: stripeConfig.products.baseSubscription,
        additionalConcurrency: customization.additionalConcurrency || 0,
        phoneLines: customization.phoneLines || 0,
        mode: 'subscription',
        currency: 'usd',
        allow_promotion_codes: true,
        billing_address_collection: 'required',
        phone_number_collection: {
          enabled: true
        },
        success_url: `${window.location.origin}${stripeConfig.successUrl}`,
        cancel_url: `${window.location.origin}${stripeConfig.cancelUrl}`,
        customization
      }),
    });

    if (!response.ok) {
      logger.error('Checkout session creation failed', {
        status: response.status,
        statusText: response.statusText
      });
      
      let errorData = {};
      try {
        errorData = await response.json();
      } catch (e) {
        logger.error('Failed to parse error response:', e);
      }
      
      throw handleApiError({ 
        status: response.status, 
        message: errorData.message || response.statusText,
        ...errorData 
      });
    }

    const data = await response.json();
    logger.info('Checkout session created successfully', {
      sessionId: data?.id,
      customization
    });

    if (!data.id || !data.url) {
      throw new Error('Invalid response from server');
    }

    return data;
  } catch (error) {
    logger.error('Failed to create checkout session:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to create checkout session');
  }
};

export const redirectToCheckout = async (sessionId: string): Promise<void> => {
  const stripe = await getStripe();
  logger.info('Redirecting to Stripe checkout', { sessionId });

  if (!stripe) {
    logger.error('Stripe failed to load');
    throw new Error('Stripe failed to load');
  }

  const { error } = await stripe.redirectToCheckout({ sessionId });
  if (error) {
    logger.error('Stripe redirect failed', { error });
    throw new Error(error.message);
  }
};