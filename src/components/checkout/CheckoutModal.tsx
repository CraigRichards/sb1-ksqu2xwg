import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, CreditCard, Building2 } from 'lucide-react';
import { useStripeCheckout } from '../../hooks/useStripeCheckout';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { handleCheckout, loading, error } = useStripeCheckout();
  const [additionalConcurrency, setAdditionalConcurrency] = React.useState(0);
  const [phoneLines, setPhoneLines] = React.useState(0);
  
  const startCheckout = () => {
    handleCheckout({
      additionalConcurrency,
      phoneLines,
      initialTokens: 100000
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-2xl bg-white shadow-xl"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Content */}
              <div className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Complete Your Subscription
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Get started with Legal Workforce AI today
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mt-4 rounded-md bg-red-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <X className="h-5 w-5 text-red-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                          Error during checkout
                        </h3>
                        <div className="mt-2 text-sm text-red-700">
                          {error}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Plan Summary */}
                <div className="mt-8 rounded-lg bg-gray-50 p-6">
                  {/* Base Subscription */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Enterprise AI Team
                      </h4>
                      <p className="text-sm text-gray-600">Monthly subscription</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">$700</p>
                      <p className="text-sm text-gray-600">per month</p>
                    </div>
                  </div>

                  {/* Additional Options */}
                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-900">Additional Voice Lines</label>
                      <div className="mt-2 flex items-center gap-4">
                        <input
                          type="number"
                          min="0"
                          max="10"
                          value={additionalConcurrency}
                          onChange={(e) => setAdditionalConcurrency(Math.max(0, parseInt(e.target.value) || 0))}
                          className="w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        <span className="text-sm text-gray-600">$20/line/month</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-900">BYO Phone Lines</label>
                      <div className="mt-2 flex items-center gap-4">
                        <input
                          type="number"
                          min="0"
                          max="20"
                          value={phoneLines}
                          onChange={(e) => setPhoneLines(Math.max(0, parseInt(e.target.value) || 0))}
                          className="w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        <span className="text-sm text-gray-600">$2/line/month</span>
                      </div>
                    </div>
                  </div>

                  {/* Total Price */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Total Monthly</span>
                      <span className="text-2xl font-bold text-indigo-600">
                        ${700 + (additionalConcurrency * 20) + (phoneLines * 2)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <h5 className="text-sm font-medium text-gray-900">Included in your plan:</h5>
                    <ul className="mt-2 space-y-2 text-sm text-gray-600">
                      <li>• 100,000 tokens included monthly</li>
                      <li>• Up to 8 combined Phone / Web Voice Agents</li>
                      <li>• Up to 8 specialist AI Agents</li>
                      <li>• Up to 8 specialist AI Voice Mail Agents</li>
                      <li>• Advanced workflow automation</li>
                      <li>• Priority support</li>
                    </ul>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-green-500" />
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-gray-900">
                        Secure Payment
                      </h4>
                      <p className="text-sm text-gray-500">
                        Your payment information is encrypted and secure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CreditCard className="h-5 w-5 text-green-500" />
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-gray-900">
                        Token Management
                      </h4>
                      <p className="text-sm text-gray-500">
                        Monitor usage and purchase additional tokens as needed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-green-500" />
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-gray-900">
                        Enterprise Ready
                      </h4>
                      <p className="text-sm text-gray-500">
                        Includes all enterprise features and support
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 space-y-4">
                  <button
                    onClick={startCheckout}
                    disabled={loading}
                    className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Processing...' : 'Proceed to Payment'}
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                </div>

                {/* Terms */}
                <p className="mt-6 text-center text-xs text-gray-500">
                  By proceeding, you agree to our{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;