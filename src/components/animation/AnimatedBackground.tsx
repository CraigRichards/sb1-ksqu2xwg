import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { vertexShader, fragmentShader } from './shaders';
import { config } from './config';
import { useAnimationUniforms } from './useAnimationUniforms';

interface AnimatedBackgroundProps {
  isLLMSection: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ isLLMSection }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size, viewport } = useThree();

  const colorIndicesRef = useRef([0, 1, 2, 3]);
  const nextColorIndicesRef = useRef([1, 2, 3, 4]);
  const colorProgressRef = useRef(0);
  const currentColorsRef = useRef(config.pastelColors);

  const uniforms = useAnimationUniforms(size);

  useEffect(() => {
    // Smoothly transition to new colors when section changes
    currentColorsRef.current = isLLMSection ? config.llmColors : config.pastelColors;
    colorProgressRef.current = 0;
  }, [isLLMSection]);

  const scale = React.useMemo(() => {
    const vFov = (config.fov * Math.PI) / 180;
    const height = 2 * Math.tan(vFov / 2) * config.distance;
    const width = height * (viewport.width / viewport.height);
    return [width, height, 1] as const;
  }, [viewport.width, viewport.height]);

  useFrame((_, delta) => {
    if (!materialRef.current) return;

    uniforms.time.value += delta * config.waveSpeed;

    colorProgressRef.current += config.colorSpeed;
    if (colorProgressRef.current >= 1) {
      colorProgressRef.current = 0;
      colorIndicesRef.current = [...nextColorIndicesRef.current];
      nextColorIndicesRef.current = colorIndicesRef.current.map(
        i => (i + 1) % currentColorsRef.current.length
      );
    }

    const colors = [];
    for (let i = 0; i < 4; i++) {
      const currentColor = currentColorsRef.current[colorIndicesRef.current[i]];
      const nextColor = currentColorsRef.current[nextColorIndicesRef.current[i]];
      colors.push(
        new THREE.Color().lerpColors(currentColor, nextColor, colorProgressRef.current)
      );
    }

    uniforms.colorA.value.set(colors[0].r, colors[0].g, colors[0].b);
    uniforms.colorB.value.set(colors[1].r, colors[1].g, colors[1].b);
    uniforms.colorC.value.set(colors[2].r, colors[2].g, colors[2].b);
    uniforms.colorD.value.set(colors[3].r, colors[3].g, colors[3].b);
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <planeGeometry args={[1, 1, config.geometrySegments, config.geometrySegments]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
};

export default AnimatedBackground;