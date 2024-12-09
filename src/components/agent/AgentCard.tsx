import React from 'react';
import { Agent } from '../../types';
import AgentCardFront from './AgentCardFront';
import AgentCardBack from './AgentCardBack';

interface AgentCardProps {
  agent: Agent;
  isFlipped: boolean;
  isOtherCardFlipping: boolean;
  onFlip: (isFlipping: boolean) => void;
  index: number;
}

const AgentCard: React.FC<AgentCardProps> = ({ 
  agent, 
  isFlipped, 
  isOtherCardFlipping,
  onFlip,
  index 
}) => {
  const handleFlip = () => {
    onFlip(!isFlipped);
  };

  const getFlipDelay = () => {
    if (isFlipped) return '0s';
    if (isOtherCardFlipping) return `${0.1 + index * 0.05}s`;
    return '0s';
  };

  return (
    <div className="flip-card-container">
      <div 
        className={`flip-card ${isFlipped ? 'flipped' : ''}`}
        style={{ transitionDelay: getFlipDelay() }}
      >
        <div className="flip-card-front">
          <AgentCardFront agent={agent} onClick={handleFlip} />
        </div>
        <div className="flip-card-back">
          <AgentCardBack agent={agent} onClose={handleFlip} />
        </div>
      </div>
    </div>
  );
};

export default AgentCard;