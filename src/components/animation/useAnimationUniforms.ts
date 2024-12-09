import { useMemo } from 'react';
import * as THREE from 'three';
import { config } from './config';
import { ShaderUniforms } from './types';

export const useAnimationUniforms = (size: { width: number; height: number }): ShaderUniforms => {
  return useMemo(
    () => ({
      time: { value: 0 },
      resolution: { value: new THREE.Vector2(size.width, size.height) },
      colorA: { value: new THREE.Vector3() },
      colorB: { value: new THREE.Vector3() },
      colorC: { value: new THREE.Vector3() },
      colorD: { value: new THREE.Vector3() },
      waveIntensity: { value: config.waveIntensity },
      waveFrequency: { value: config.waveFrequency },
      blendFrequencyX: { value: config.blendFrequencyX },
      blendFrequencyY: { value: config.blendFrequencyY },
      blendAmplitude: { value: config.blendAmplitude },
      opacity: { value: config.opacity }
    }),
    [size]
  );
};