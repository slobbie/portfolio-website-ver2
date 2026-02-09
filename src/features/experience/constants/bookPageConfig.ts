import {
  BoxGeometry,
  Color,
  Float32BufferAttribute,
  MeshStandardMaterial,
  Uint16BufferAttribute,
  Vector3,
} from 'three';

// Easing 설정
export const EASING_FACTOR = 0.5;
export const EASING_FACTOR_FOLD = 0.3;

// 곡선 강도 설정
export const INSIDE_CURVE_STRENGTH = 0.18;
export const OUTSIDE_CURVE_STRENGTH = 0.05;
export const TURNING_CURVE_STRENGTH = 0.09;

// 페이지 크기 설정
export const PAGE_WIDTH = 1.28;
export const PAGE_HEIGHT = 1.71;
export const PAGE_DEPTH = 0.003;
export const PAGE_SEGMENTS = 30;
export const SEGMENT_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS;

// 색상 설정
export const WHITE_COLOR = new Color('white');
export const EMISSIVE_COLOR = new Color('orange');

// 페이지 지오메트리 생성
const createPageGeometry = (): BoxGeometry => {
  const geometry = new BoxGeometry(
    PAGE_WIDTH,
    PAGE_HEIGHT,
    PAGE_DEPTH,
    PAGE_SEGMENTS,
    2
  );

  geometry.translate(PAGE_WIDTH / 2, 0, 0);

  const position = geometry.attributes.position;
  const vertex = new Vector3();
  const skinIndexes: number[] = [];
  const skinWeights: number[] = [];

  for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i);
    const x = vertex.x;

    const skinIndex = Math.max(0, Math.floor(x / SEGMENT_WIDTH));
    const skinWeight = (x % SEGMENT_WIDTH) / SEGMENT_WIDTH;

    skinIndexes.push(skinIndex, skinIndex + 1, 0, 0);
    skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
  }

  geometry.setAttribute('skinIndex', new Uint16BufferAttribute(skinIndexes, 4));
  geometry.setAttribute(
    'skinWeight',
    new Float32BufferAttribute(skinWeights, 4)
  );

  return geometry;
};

export const pageGeometry = createPageGeometry();

// 페이지 머티리얼 설정
export const pageMaterials = [
  new MeshStandardMaterial({ color: WHITE_COLOR }),
  new MeshStandardMaterial({ color: '#111' }),
  new MeshStandardMaterial({ color: WHITE_COLOR }),
  new MeshStandardMaterial({ color: WHITE_COLOR }),
];
