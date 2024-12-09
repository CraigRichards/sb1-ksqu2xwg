import { StripeConfig, PriceConfig } from '../types/stripe';

export const stripeConfig: StripeConfig = {
  publicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY || '',
  products: {
    baseSubscription: 'prod_RMytgzXb8oqUa0',
    additionalConcurrency: 'prod_RMz3tqUAQeHKYM',
    byoPhoneLine: 'prod_RMz56B1QQEy7E7'
  },
  successUrl: import.meta.env.VITE_STRIPE_SUCCESS_URL || '/success',
  cancelUrl: import.meta.env.VITE_STRIPE_CANCEL_URL || '/cancel'
};

export const priceConfig: PriceConfig = {
  baseSubscription: 700,
  tokenBundle: {
    tokens: 100000,
    price: 100
  },
  autoTopUpThreshold: 10000
};