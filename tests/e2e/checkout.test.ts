import { describe, test, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import CheckoutModal from '../../src/components/checkout/CheckoutModal';
import * as stripeUtils from '../../src/utils/stripe/checkout';
import * as analytics from '../../src/utils/analytics';
import { logger } from '../../src/utils/logger';

vi.mock('../../src/utils/stripe/checkout');
vi.mock('../../src/utils/analytics');
vi.mock('../../src/utils/logger');

describe('Checkout Flow', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    logger.info('Starting new test');
  });

  const renderCheckoutModal = () => {
    return render(
      <MemoryRouter>
        <CheckoutModal isOpen={true} onClose={() => {}} />
      </MemoryRouter>
    );
  };

  test('displays initial state correctly', () => {
    logger.info('Testing initial state');
    renderCheckoutModal();
    
    expect(screen.getByRole('heading', { name: /Complete Your Subscription/i })).toBeInTheDocument();
    expect(screen.getByText('$700')).toBeInTheDocument();
    expect(screen.getByText(/per month/i)).toBeInTheDocument();
  });

  test('calculates total price with add-ons', async () => {
    logger.info('Testing price calculation');
    const user = userEvent.setup();
    renderCheckoutModal();
    
    // Add additional voice lines
    const voiceLinesInput = screen.getByLabelText(/Additional Voice Lines/i);
    await user.clear(voiceLinesInput);
    await user.type(voiceLinesInput, '2');
    
    // Add BYO phone lines
    const phoneLinesInput = screen.getByLabelText(/BYO Phone Lines/i);
    await user.clear(phoneLinesInput);
    await user.type(phoneLinesInput, '3');
    
    // Total: $700 + (2 * $20) + (3 * $2) = $746
    await waitFor(() => {
      expect(screen.getByText('$746')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  test('handles successful checkout', async () => {
    logger.info('Testing successful checkout');
    const user = userEvent.setup();
    const mockSession = { id: 'test_session', url: 'https://test.url' };
    
    vi.mocked(stripeUtils.createCheckoutSession).mockResolvedValue(mockSession);
    vi.mocked(stripeUtils.redirectToCheckout).mockResolvedValue();
    
    renderCheckoutModal();
    
    await user.click(screen.getByRole('button', { name: /Proceed to Payment/i }));
    
    await waitFor(() => {
      expect(stripeUtils.createCheckoutSession).toHaveBeenCalled();
      expect(stripeUtils.redirectToCheckout).toHaveBeenCalledWith(mockSession.id);
      expect(analytics.trackEvent).toHaveBeenCalledWith(
        expect.objectContaining({
          category: 'Checkout',
          action: 'InitiateCheckout'
        })
      ), { timeout: 2000 });
    });
  });

  test('handles checkout errors', async () => {
    logger.info('Testing error handling');
    const user = userEvent.setup();
    const errorMessage = 'Test error message';
    
    vi.mocked(stripeUtils.createCheckoutSession).mockRejectedValue(new Error(errorMessage));
    
    renderCheckoutModal();
    
    await user.click(screen.getByRole('button', { name: /Proceed to Payment/i }));
    
    await waitFor(() => {
      expect(screen.getByText('Error during checkout')).toBeInTheDocument();
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
      expect(analytics.trackEvent).toHaveBeenCalledWith(
        expect.objectContaining({
          category: 'Checkout',
          action: 'CheckoutError'
        })
      ), { timeout: 2000 });
    });
  });

  test('validates input constraints', async () => {
    logger.info('Testing input validation');
    const user = userEvent.setup();
    renderCheckoutModal();
    
    const voiceLinesInput = screen.getByLabelText(/Additional Voice Lines/i);
    
    // Test negative numbers
    await user.clear(voiceLinesInput);
    await user.type(voiceLinesInput, '-1');
    
    await waitFor(() => {
      expect(voiceLinesInput).toHaveValue(0);
    });
    
    // Test maximum limit
    await user.clear(voiceLinesInput);
    await user.type(voiceLinesInput, '11');
    
    await waitFor(() => {
      expect(voiceLinesInput).toHaveValue(10);
    }, { timeout: 2000 });
    logger.info('Input validation test complete');
  });
});