import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AgentCard from './agent/AgentCard';
import { agents } from '../data/agents';

const TeamSection: React.FC = () => {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleCardFlip = (agentId: string, isFlipping: boolean) => {
    if (isFlipping) {
      setFlippedCardId(agentId);
      setIsFlipping(true);
    } else {
      setIsFlipping(false);
      setTimeout(() => setFlippedCardId(null), 800);
    }
  };

  return (
    <section id="team">
      <div id="team-content" className="py-20 bg-white/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Meet Your AI Legal Team
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Specialized AI agents ready to serve your law firm 24/7
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-[440px]"
              >
                <AgentCard
                  agent={agent}
                  isFlipped={flippedCardId === agent.id}
                  isOtherCardFlipping={isFlipping && flippedCardId !== agent.id}
                  onFlip={(isFlipping) => handleCardFlip(agent.id, isFlipping)}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;