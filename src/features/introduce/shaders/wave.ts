// 웨이브 라인용 Vertex Shader (Points)
export const wavePointsVertexShader = `
  uniform float uTime;
  uniform float uAmplitude;
  uniform float uFrequency;
  uniform float uScrollProgress;
  uniform vec2 uViewportSize;
  uniform vec2 uSectionOffset;  // 섹션 오프셋 (0, 1/3, 2/3)
  uniform float uSectionWidth;  // 섹션 너비 (1/3 or 1)

  attribute float lineIndex;    // 몇 번째 라인인지

  varying float vAlpha;

  void main() {
    vec3 pos = position;

    // 전체 좌표계 기준 x 위치 (섹션 오프셋 적용)
    float globalX = (pos.x / uViewportSize.x + 0.5) * uSectionWidth + uSectionOffset.x;
    float globalY = pos.y / uViewportSize.y + 0.5;

    // 여러 웨이브 레이어 합성
    float wave1 = sin(globalX * 8.0 + uTime * 0.8 + lineIndex * 0.5) * uAmplitude;
    float wave2 = sin(globalX * 12.0 - uTime * 0.5 + lineIndex * 0.3) * uAmplitude * 0.5;
    float wave3 = cos(globalX * 4.0 + uTime * 0.3 + lineIndex * 0.7) * uAmplitude * 0.3;

    // 라인별로 다른 웨이브 패턴
    float lineWave = sin(lineIndex * 0.1 + uTime * 0.2) * uAmplitude * 0.2;

    pos.y += (wave1 + wave2 + wave3 + lineWave) * uViewportSize.y * 0.15;

    // 알파값 (가장자리 페이드)
    vAlpha = smoothstep(0.0, 0.1, globalX) * smoothstep(1.0, 0.9, globalX);
    vAlpha *= smoothstep(0.0, 0.1, globalY) * smoothstep(1.0, 0.9, globalY);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = 1.5;
  }
`;

// 웨이브 라인용 Fragment Shader (Points)
export const wavePointsFragmentShader = `
  uniform float uOpacity;
  uniform vec3 uColor;

  varying float vAlpha;

  void main() {
    // 원형 포인트
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    float alpha = smoothstep(0.5, 0.2, dist) * vAlpha * uOpacity;

    gl_FragColor = vec4(uColor, alpha);
  }
`;
