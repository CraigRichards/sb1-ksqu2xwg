import { useState, useCallback } from 'react';

export const useCheckout = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCheckout = useCallback(() => {
    setIsCheckoutOpen(true);
  }, []);

  const closeCheckout = useCallback(() => {
    setIsCheckoutOpen(false);
  }, []);

  return {
    isCheckoutOpen,
    openCheckout,
    closeCheckout,
  };
};