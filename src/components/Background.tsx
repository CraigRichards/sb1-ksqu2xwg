import React from 'react';
import { Canvas } from '@react-three/fiber';
import AnimatedBackground from './animation/AnimatedBackground';
import { config } from './animation/config';
import { useInView } from 'framer-motion';

interface BackgroundProps {
  llmSectionRef: React.RefObject<HTMLElement>;
}

const Background: React.FC<BackgroundProps> = ({ llmSectionRef }) => {
  const isLLMSectionInView = useInView(llmSectionRef, { amount: 0.3 });

  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, config.distance], fov: config.fov }}
        dpr={window.devicePixelRatio || 2}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      >
        <AnimatedBackground isLLMSection={isLLMSectionInView} />
      </Canvas>
    </div>
  );
};

export default Background;