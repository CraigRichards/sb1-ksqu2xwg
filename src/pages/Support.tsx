import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Support = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Support Center</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-indigo-600 mr-3" />
              <span>support@legalworkforce.ai</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-indigo-600 mr-3" />
              <span>+1 (800) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="w-5 h-5 text-indigo-600 mr-3" />
              <span>Live Chat (24/7)</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#faq" className="text-indigo-600 hover:text-indigo-800">Frequently Asked Questions</a>
            </li>
            <li>
              <a href="#guides" className="text-indigo-600 hover:text-indigo-800">User Guides</a>
            </li>
            <li>
              <a href="#status" className="text-indigo-600 hover:text-indigo-800">System Status</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Common Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How do I get started?",
              a: "Sign up for an account and follow our quick setup guide to start using our AI legal assistants."
            },
            {
              q: "What are AI credits?",
              a: "AI credits are used to power our AI services. Each interaction with our AI assistants uses a certain number of credits."
            },
            {
              q: "How do I upgrade my plan?",
              a: "You can upgrade your plan at any time from your account dashboard or by contacting our sales team."
            }
          ].map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
              <h3 className="font-medium mb-2">{item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;