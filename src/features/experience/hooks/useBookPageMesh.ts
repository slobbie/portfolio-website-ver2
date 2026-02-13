import { useMemo } from 'react';

import {
  Bone,
  Material,
  MeshBasicMaterial,
  Skeleton,
  SkinnedMesh,
  Texture,
} from 'three';

import {
  PAGE_SEGMENTS,
  SEGMENT_WIDTH,
  pageGeometry,
  pageMaterials,
} from '@/features/experience/constants/bookPageConfig';

interface IUseBookPageMeshParams {
  picture: Texture;
  picture2: Texture;
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
}: Pick<IUseBookPageMeshParams, 'picture' | 'picture2'>): Material[] => {
  const frontMaterial = new MeshBasicMaterial({
    map: picture,
  });

  const backMaterial = new MeshBasicMaterial({
    map: picture2,
  });

  return [...pageMaterials, frontMaterial, backMaterial];
};

export const useBookPageMesh = ({
  picture,
  picture2,
}: IUseBookPageMeshParams): SkinnedMesh => {
  const mesh = useMemo(() => {
    const bones = createPageBones();
    const skeleton = new Skeleton(bones);

    const materials = createPageMaterials({
      picture,
      picture2,
    });

    const skinnedMesh = new SkinnedMesh(pageGeometry, materials);
    skinnedMesh.castShadow = true;
    skinnedMesh.receiveShadow = true;
    skinnedMesh.frustumCulled = false;
    skinnedMesh.add(skeleton.bones[0]);
    skinnedMesh.bind(skeleton);

    return skinnedMesh;
  }, [picture, picture2]);

  return mesh;
};
