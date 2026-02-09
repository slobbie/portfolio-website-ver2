import { useMemo } from 'react';
import {
  Bone,
  MeshStandardMaterial,
  Skeleton,
  SkinnedMesh,
  Texture,
} from 'three';
import {
  PAGE_SEGMENTS,
  SEGMENT_WIDTH,
  WHITE_COLOR,
  EMISSIVE_COLOR,
  pageGeometry,
  pageMaterials,
} from '@/features/experience/constants/bookPageConfig';

interface UseBookPageMeshParams {
  picture: Texture;
  picture2: Texture;
  pictureRoughness?: Texture;
  number: number;
  pagesLength: number;
}

const createPageBones = (): Bone[] => {
  const bones: Bone[] = [];

  for (let i = 0; i <= PAGE_SEGMENTS; i++) {
    const bone = new Bone();
    bone.position.x = i === 0 ? 0 : SEGMENT_WIDTH;

    if (i > 0) {
      bones[i - 1].add(bone);
    }

    bones.push(bone);
  }

  return bones;
};

const createPageMaterials = ({
  picture,
  picture2,
  pictureRoughness,
  number,
  pagesLength,
}: Omit<UseBookPageMeshParams, 'number' | 'pagesLength'> & {
  number: number;
  pagesLength: number;
}): MeshStandardMaterial[] => {
  const frontMaterial = new MeshStandardMaterial({
    color: WHITE_COLOR,
    map: picture,
    ...(number === 0 ? { roughnessMap: pictureRoughness } : { roughness: 0.6 }),
    emissive: EMISSIVE_COLOR,
    emissiveIntensity: 0,
  });

  const backMaterial = new MeshStandardMaterial({
    color: WHITE_COLOR,
    map: picture2,
    ...(number === pagesLength - 1
      ? { roughnessMap: pictureRoughness }
      : { roughness: 0.6 }),
    emissive: EMISSIVE_COLOR,
    emissiveIntensity: 0,
  });

  return [...pageMaterials, frontMaterial, backMaterial];
};

export const useBookPageMesh = ({
  picture,
  picture2,
  pictureRoughness,
  number,
  pagesLength,
}: UseBookPageMeshParams): SkinnedMesh => {
  const mesh = useMemo(() => {
    const bones = createPageBones();
    const skeleton = new Skeleton(bones);

    const materials = createPageMaterials({
      picture,
      picture2,
      pictureRoughness,
      number,
      pagesLength,
    });

    const skinnedMesh = new SkinnedMesh(pageGeometry, materials);
    skinnedMesh.castShadow = true;
    skinnedMesh.receiveShadow = true;
    skinnedMesh.frustumCulled = false;
    skinnedMesh.add(skeleton.bones[0]);
    skinnedMesh.bind(skeleton);

    return skinnedMesh;
  }, [picture, picture2, pictureRoughness, number, pagesLength]);

  return mesh;
};
