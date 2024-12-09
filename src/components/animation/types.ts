import * as THREE from 'three';

export interface AnimationConfig {
  morphSpeed: number;
  colorSpeed: number;
  waveSpeed: number;
  blendSpeed: number;
  waveIntensity: number;
  waveFrequency: number;
  blendFrequencyX: number;
  blendFrequencyY: number;
  blendAmplitude: number;
  fov: number;
  distance: number;
  pastelColors: THREE.Color[];
  geometrySegments: number;
  opacity: number;
}

export interface ShaderUniforms {
  time: { value: number };
  resolution: { value: THREE.Vector2 };
  colorA: { value: THREE.Vector3 };
  colorB: { value: THREE.Vector3 };
  colorC: { value: THREE.Vector3 };
  colorD: { value: THREE.Vector3 };
  waveIntensity: { value: number };
  waveFrequency: { value: number };
  blendFrequencyX: { value: number };
  blendFrequencyY: { value: number };
  blendAmplitude: { value: number };
  opacity: { value: number };
}