import React from 'react';
import { Agent } from '../../types';
import { X } from 'lucide-react';
import LanguageList from './LanguageList';

interface AgentCardBackProps {
  agent: Agent;
  onClose: () => void;
}

const AgentCardBack: React.FC<AgentCardBackProps> = ({ agent, onClose }) => {
  return (
    <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/20">
      <div className="h-full flex flex-col">
        <div className="p-6 pb-4 flex justify-between items-start border-b border-gray-200/30">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{agent.name}</h3>
            <p className="text-indigo-600 font-medium">{agent.role}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100/80 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-900">Experience</h4>
              <p className="mt-1 text-sm text-gray-600">{agent.details.experience}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900">Availability</h4>
              <p className="mt-1 text-sm text-gray-600">{agent.details.availability}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900">Languages</h4>
              <div className="mt-2">
                <LanguageList languages={agent.details.languages} />
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900">Response Time</h4>
              <p className="mt-1 text-sm text-gray-600">{agent.details.responseTime}</p>
            </div>

            <div>
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
        </div>
      </div>
    </div>
  );
};

export default AgentCardBack;