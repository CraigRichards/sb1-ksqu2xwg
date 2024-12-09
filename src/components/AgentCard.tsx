import React from 'react';
import { Agent } from '../types';
import { motion } from 'framer-motion';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="h-full flex flex-col bg-white/40 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/20"
    >
      <div className="relative aspect-square">
        <img
          src={agent.imageUrl}
          alt={agent.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900">{agent.name}</h3>
        <p className="text-indigo-600 font-medium">{agent.role}</p>
        <p className="mt-2 text-gray-600 flex-grow">{agent.description}</p>
        <div className="mt-4 pt-4 border-t border-gray-200/50">
          <h4 className="text-sm font-medium text-gray-900">Specialties</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {agent.specialties.map((specialty, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100/80 text-indigo-800 backdrop-blur-sm"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AgentCard;