export const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = `
  uniform float time;
  uniform vec2 resolution;
  uniform vec3 colorA;
  uniform vec3 colorB;
  uniform vec3 colorC;
  uniform vec3 colorD;
  uniform float waveIntensity;
  uniform float waveFrequency;
  uniform float blendFrequencyX;
  uniform float blendFrequencyY;
  uniform float blendAmplitude;
  uniform float opacity;
  varying vec2 vUv;

  vec3 blend(vec3 a, vec3 b, float t) {
    float smoothT = smoothstep(0.0, 1.0, t);
    return mix(a, b, smoothT);
  }

  void main() {
    vec2 pos = vUv * 2.0 - 1.0;
    float dist = length(pos);
    float angle = atan(pos.y, pos.x);
    
    // Enhanced wave effect
    float wave1 = sin(dist * waveFrequency - time) * waveIntensity;
    float wave2 = cos(dist * waveFrequency * 0.5 + time) * waveIntensity * 0.5;
    float wave = wave1 + wave2;
    float wave3 = sin(angle * 4.0 + time) * waveIntensity * 0.3;
    wave += wave3;
    
    // More dynamic blending
    float blendX = smoothstep(0.0, 1.0, sin(vUv.x * blendFrequencyX + time * blendAmplitude + wave) * 0.5 + 0.5);
    float blendY = smoothstep(0.0, 1.0, cos(vUv.y * blendFrequencyY + time * blendAmplitude - wave) * 0.5 + 0.5);
    
    vec3 color1 = blend(colorA, colorB, blendX);
    vec3 color2 = blend(colorC, colorD, blendX);
    vec3 finalColor = blend(color1, color2, blendY);
    
    // Add subtle color variation based on position
    float edgeGlow = 1.0 - smoothstep(0.0, 1.0, dist);
    finalColor += vec3(wave) * edgeGlow * 0.15;
    
    // Enhance contrast
    finalColor = pow(finalColor, vec3(0.9));
    finalColor *= 1.1; // Boost overall brightness
    
    gl_FragColor = vec4(finalColor, opacity);
  }
`;