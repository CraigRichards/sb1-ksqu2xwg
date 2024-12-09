import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null> | null = null;

export const getStripe = (): Promise<Stripe | null> => {
  const publicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
  if (!stripePromise && publicKey) {
    stripePromise = loadStripe(publicKey);
  }
  return stripePromise || Promise.resolve(null);
};