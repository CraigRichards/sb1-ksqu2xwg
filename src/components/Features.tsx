import React from 'react';
import { Bot, BarChart, Users, Phone } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Reception',
    description: 'Handle client calls 24/7 with natural language understanding and seamless call routing.',
    icon: Bot
  },
  {
    name: 'Usage Analytics',
    description: 'Track call volumes, success rates, and AI credit usage with detailed dashboards.',
    icon: BarChart
  },
  {
    name: 'Team Management',
    description: 'Create and customize up to 10 AI agents per team, tailored to different departments.',
    icon: Users
  },
  {
    name: 'Smart Call Handling',
    description: 'Intelligent call screening, appointment scheduling, and message taking capabilities.',
    icon: Phone
  }
];

const Features = () => {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to streamline client communications
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;