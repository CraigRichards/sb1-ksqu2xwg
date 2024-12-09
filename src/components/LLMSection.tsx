import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap } from 'lucide-react';

const llmModels = [
  {
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    description: 'Advanced reasoning and natural conversations with enhanced context understanding',
    icon: Brain,
    imageUrl: 'https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=1000&auto=format&fit=crop',
    features: ['128k context window', 'Real-time knowledge', 'Advanced reasoning']
  },
  {
    name: 'Claude 3 Opus',
    provider: 'Anthropic',
    description: 'Superior analysis capabilities with enhanced safety and reliability',
    icon: Cpu,
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    features: ['200k context window', 'Multimodal capabilities', 'Enhanced safety']
  },
  {
    name: 'Gemini Pro',
    provider: 'Google',
    description: 'Optimized for fast, efficient responses with strong multilingual support',
    icon: Zap,
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
    features: ['Multilingual expertise', 'Real-time processing', 'Code understanding']
  }
];

const LLMSection = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-white sm:text-4xl"
          >
            Powered by Advanced AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-300"
          >
            Our AI agents harness the latest breakthroughs in language models for human-like understanding and response generation
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {llmModels.map((model, index) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mix-blend-multiply" />
                <img
                  src={model.imageUrl}
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center">
                    <span className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                      <model.icon className="h-6 w-6 text-white" />
                    </span>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-300">{model.provider}</p>
                      <h3 className="text-xl font-semibold text-white">{model.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300">{model.description}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-200">Key Features</h4>
                  <ul className="mt-2 space-y-2">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LLMSection;