import React from 'react';
import { Check, Plus, Zap, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import CheckoutModal from './checkout/CheckoutModal';
import { useCheckout } from './checkout/useCheckout';

const mainFeatures = [
  'Up to 8 combined Phone / Web Voice Agents',
  'Up to 8 specialist AI Agents',
  'Up to 8 specialist AI Voice Mail Agents',
  '2 concurrent voice lines included',
  'Advanced workflow automation',
  'Priority support',
  'Custom integrations',
  'White-label options'
];

const topUpOptions = [
  {
    name: 'AI Credits',
    price: '100',
    unit: '100k tokens',
    features: [
      'Valid for 3 months',
      'Auto top-up available',
      'Usage analytics',
      'Rollover unused credits'
    ]
  }
];

const additionalOptions = [
  {
    name: 'Voice Concurrency',
    description: 'Additional concurrent voice lines',
    price: '20',
    unit: 'per line/month',
    included: '2 lines included in base plan'
  },
  {
    name: 'Phone Lines',
    description: 'Additional phone numbers',
    price: '2',
    unit: 'per line/month',
    included: 'Bring your own numbers'
  }
];

const Pricing = () => {
  const { isCheckoutOpen, openCheckout, closeCheckout } = useCheckout();

  return (
    <>
      <div id="pricing" className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to transform your client engagement
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-12">
            {/* Main Plan */}
            <motion.div 
              className="lg:col-span-7 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="p-8 sm:p-10">
                <h3 className="text-3xl font-semibold text-gray-900">Enterprise AI Team</h3>
                <p className="mt-4 text-lg text-gray-600">
                  Complete AI team solution for your law firm
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">$700</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </div>

                <ul className="mt-8 space-y-4">
                  {mainFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <motion.button
                    onClick={openCheckout}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-indigo-600 border border-transparent rounded-lg py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    Get started
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Top-up and Additional Options */}
            <div className="lg:col-span-5 space-y-8">
              {/* Top-up Options */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-6 w-6 text-indigo-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Top-up Options</h3>
                  </div>
                  {topUpOptions.map((option, index) => (
                    <div key={index} className="mt-4">
                      <div className="flex justify-between items-baseline">
                        <h4 className="text-lg font-medium text-gray-900">{option.name}</h4>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-gray-900">${option.price}</span>
                          <span className="text-sm text-gray-500">/{option.unit}</span>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <Plus className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Additional Options */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-indigo-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Additional Options</h3>
                  </div>
                  <div className="mt-4 space-y-6">
                    {additionalOptions.map((option, index) => (
                      <div key={index} className="flex justify-between items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <div>
                          <h4 className="text-base font-medium text-gray-900">{option.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                          <p className="text-xs text-indigo-600 mt-1">{option.included}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-semibold text-gray-900">${option.price}</span>
                          <span className="text-sm text-gray-500"> {option.unit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <CheckoutModal isOpen={isCheckoutOpen} onClose={closeCheckout} />
    </>
  );
};

export default Pricing;