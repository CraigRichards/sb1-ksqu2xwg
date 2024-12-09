import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us, information we obtain automatically when you use our services, and information from third party sources in accordance with this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our company and our users.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
        <p className="mb-4">
          We do not share your personal information except in the limited circumstances described in this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
        <p className="mb-4">
          We retain information for as long as necessary to provide our services and fulfill the transactions you have requested.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at privacy@legalworkforce.ai
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;