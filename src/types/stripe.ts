export interface StripeConfig {
  publicKey: string;
  products: {
    baseSubscription: string;
    additionalConcurrency: string;
    byoPhoneLine: string;
  };
  successUrl: string;
  cancelUrl: string;
}

export interface PriceConfig {
  baseSubscription: number;
  tokenBundle: {
    tokens: number;
    price: number;
  };
  autoTopUpThreshold: number;
}

export interface SubscriptionCustomization {
  additionalConcurrency?: number;
  phoneLines?: number;
  initialTokens?: number;
}

export interface CheckoutSession {
  id: string;
  url: string;
}