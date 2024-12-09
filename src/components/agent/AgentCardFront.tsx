import React from 'react';
import { Agent } from '../../types';
import { Phone, Mic, MessageSquare, RotateCw } from 'lucide-react';

interface AgentCardFrontProps {
  agent: Agent;
  onClick: () => void;
}

const AgentCardFront: React.FC<AgentCardFrontProps> = ({ agent, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="h-full cursor-pointer group flex flex-col bg-white/20 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/20 transition-all duration-200 hover:shadow-xl"
    >
      <div className="relative">
        <img
          src={agent.imageUrl}
          alt={agent.name}
          className="w-full aspect-square object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        
        {/* Flip button */}
        <button 
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white/95 transition-colors group"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          <RotateCw className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
        </button>

        {/* Skills icons */}
        <div className="absolute bottom-4 left-4 flex gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
          {agent.skills.phone && (
            <Phone className="w-4 h-4 text-indigo-600" />
          )}
          {agent.skills.voice && (
            <Mic className="w-4 h-4 text-indigo-600" />
          )}
          {agent.skills.chat && (
            <MessageSquare className="w-4 h-4 text-indigo-600" />
          )}
        </div>
      </div>

      <div className="flex-1 p-4 flex flex-col bg-white/10 backdrop-blur-md">
        <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
        <p className="text-sm text-indigo-600 font-medium">{agent.role}</p>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{agent.description}</p>
      </div>
    </div>
  );
};

export default AgentCardFront;