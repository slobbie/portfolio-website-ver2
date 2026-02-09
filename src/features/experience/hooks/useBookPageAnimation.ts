import type { MutableRefObject } from 'react';
import { MathUtils, MeshStandardMaterial, Object3D, SkinnedMesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { degToRad } from 'three/src/math/MathUtils.js';
import {
  EASING_FACTOR,
  EASING_FACTOR_FOLD,
  INSIDE_CURVE_STRENGTH,
  OUTSIDE_CURVE_STRENGTH,
  TURNING_CURVE_STRENGTH,
} from '@/features/experience/constants/bookPageConfig';

interface UseBookPageAnimationParams {
  skinnedMeshRef: MutableRefObject<SkinnedMesh | null>;
  groupRef: MutableRefObject<Object3D | null>;
  turnedAtRef: MutableRefObject<number>;
  lastOpenedRef: MutableRefObject<boolean>;
  highlighted: boolean;
  opened: boolean;
  bookClosed: boolean;
  number: number;
}

const EMISSIVE_MATERIAL_INDICES = [4, 5] as const;
const HIGHLIGHT_INTENSITY = 0.22;
const LERP_FACTOR = 0.1;
const TURN_DURATION_MS = 400;

const updateEmissiveIntensity = (
  mesh: SkinnedMesh,
  highlighted: boolean
): void => {
  const targetIntensity = highlighted ? HIGHLIGHT_INTENSITY : 0;
  const materials = mesh.material as MeshStandardMaterial[];

  EMISSIVE_MATERIAL_INDICES.forEach((index) => {
    materials[index].emissiveIntensity = MathUtils.lerp(
      materials[index].emissiveIntensity,
      targetIntensity,
      LERP_FACTOR
    );
  });
};

const calculateTurningTime = (
  turnedAt: number,
  opened: boolean,
  lastOpened: boolean,
  turnedAtRef: MutableRefObject<number>,
  lastOpenedRef: MutableRefObject<boolean>
): number => {
  if (lastOpened !== opened) {
    turnedAtRef.current = Date.now();
    lastOpenedRef.current = opened;
  }

  const elapsed = Math.min(TURN_DURATION_MS, Date.now() - turnedAt);
  const normalizedTime = elapsed / TURN_DURATION_MS;

  return Math.sin(normalizedTime * Math.PI);
};

const calculateBoneRotation = (
  boneIndex: number,
  bonesLength: number,
  targetRotation: number,
  turningTime: number,
  bookClosed: boolean
): {
  rotationAngle: number;
  foldRotationAngle: number;
  foldIntensity: number;
} => {
  if (bookClosed) {
    return boneIndex === 0
      ? {
          rotationAngle: targetRotation,
          foldRotationAngle: 0,
          foldIntensity: 0,
        }
      : { rotationAngle: 0, foldRotationAngle: 0, foldIntensity: 0 };
  }

  const insideCurveIntensity =
    boneIndex < 8 ? Math.sin(boneIndex * 0.2 + 0.25) : 0;
  const outsideCurveIntensity =
    boneIndex >= 8 ? Math.cos(boneIndex * 0.3 + 0.09) : 0;
  const turningIntensity =
    Math.sin(boneIndex * Math.PI * (1 / bonesLength)) * turningTime;

  const rotationAngle =
    INSIDE_CURVE_STRENGTH * insideCurveIntensity * targetRotation -
    OUTSIDE_CURVE_STRENGTH * outsideCurveIntensity * targetRotation +
    TURNING_CURVE_STRENGTH * turningIntensity * targetRotation;

  const foldRotationAngle = degToRad(Math.sign(targetRotation) * 2);
  const foldIntensity =
    boneIndex > 8
      ? Math.sin(boneIndex * Math.PI * (1 / bonesLength) - 0.5) * turningTime
      : 0;

  return { rotationAngle, foldRotationAngle, foldIntensity };
};

export const useBookPageAnimation = ({
  skinnedMeshRef,
  groupRef,
  turnedAtRef,
  lastOpenedRef,
  highlighted,
  opened,
  bookClosed,
  number,
}: UseBookPageAnimationParams): void => {
  useFrame((_, delta) => {
    const mesh = skinnedMeshRef.current;
    if (!mesh) return;

    // 1. Emissive 강도 업데이트
    updateEmissiveIntensity(mesh, highlighted);

    // 2. 페이지 넘김 시간 계산
    const turningTime = calculateTurningTime(
      turnedAtRef.current,
      opened,
      lastOpenedRef.current,
      turnedAtRef,
      lastOpenedRef
    );

    // 3. 목표 회전각 계산
    let targetRotation = opened ? -Math.PI / 2 : Math.PI / 2;
    if (!bookClosed) {
      targetRotation += degToRad(number * 0.8);
    }

    // 4. 각 bone에 회전 적용
    const bones = mesh.skeleton.bones;
    bones.forEach((bone, index) => {
      const target = index === 0 ? groupRef.current : bone;
      if (!target) return;

      const { rotationAngle, foldRotationAngle, foldIntensity } =
        calculateBoneRotation(
          index,
          bones.length,
          targetRotation,
          turningTime,
          bookClosed
        );

      easing.dampAngle(
        target.rotation,
        'y',
        rotationAngle,
        EASING_FACTOR,
        delta
      );
      easing.dampAngle(
        target.rotation,
        'x',
        foldRotationAngle * foldIntensity,
        EASING_FACTOR_FOLD,
        delta
      );
    });
  });
};
