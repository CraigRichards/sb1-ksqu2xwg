import * as THREE from 'three';
import { AnimationConfig } from './types';

// Generate vibrant colors
const generateVibrantColor = () => {
  const hue = Math.random() * 360;
  const saturation = 70 + Math.random() * 30; // 70-100%
  const lightness = 45 + Math.random() * 15;  // 45-60%
  
  const color = new THREE.Color();
  color.setHSL(hue / 360, saturation / 100, lightness / 100);
  return color;
};

const generateVibrantColors = (count: number) => {
  const colors: THREE.Color[] = [];
  for (let i = 0; i < count; i++) {
    colors.push(generateVibrantColor());
  }
  return colors;
};

// LLM section colors (deeper, more tech-focused)
const llmColors = [
  new THREE.Color('#0066FF'),  // Electric Blue
  new THREE.Color('#9933FF'),  // Vivid Purple
  new THREE.Color('#00CCFF'),  // Cyan
  new THREE.Color('#FF3366'),  // Hot Pink
  new THREE.Color('#33FF33'),  // Lime Green
  new THREE.Color('#FF9900'),  // Orange
  new THREE.Color('#FF33FF'),  // Magenta
  new THREE.Color('#FFCC00')   // Gold
];

export const config: AnimationConfig = {
  morphSpeed: 0.002,      // Increased for faster morphing
  colorSpeed: 0.0006,     // Increased for faster color transitions
  waveSpeed: 0.8,         // Increased wave movement
  blendSpeed: 0.5,        // Increased color blending
  waveIntensity: 0.15,    // Enhanced wave effect
  waveFrequency: 4.0,     // More frequent waves
  blendFrequencyX: 3.0,   // More frequent horizontal blending
  blendFrequencyY: 3.0,   // More frequent vertical blending
  blendAmplitude: 0.85,   // Enhanced blending effect
  fov: 75,
  distance: 100,
  pastelColors: generateVibrantColors(8), // Generate 8 random vibrant colors
  llmColors,              // Colors for LLM section
  geometrySegments: 32,
  opacity: 0.85           // Increased opacity for more vibrant appearance
};