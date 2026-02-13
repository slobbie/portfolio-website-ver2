import { useRef } from 'react';

import { Object3D, SkinnedMesh } from 'three';

import { useBookPageTextures } from '@/features/experience/hooks/useBookPageTextures';
import { useBookPageMesh } from '@/features/experience/hooks/useBookPageMesh';
import { useBookPageAnimation } from '@/features/experience/hooks/useBookPageAnimation';
import { PAGE_DEPTH } from '@/features/experience/constants/bookPageConfig';

interface IBookPageProps {
  number: number;
  front: string;
  back: string;
  page: number;
  opened: boolean;
  bookClosed: boolean;
  pagesLength: number;
}

const BookPage = ({
  number,
  front,
  back,
  page,
  opened,
  bookClosed,
  pagesLength,
  ...props
}: IBookPageProps) => {
  const [picture, picture2] = useBookPageTextures({
    front,
    back,
    number,
    pagesLength,
  });

  const skinnedMesh = useBookPageMesh({
    picture,
    picture2,
  });

  const highlighted = false;

  const groupRef = useRef<Object3D | null>(null);
  const turnedAtRef = useRef(0);
  const lastOpenedRef = useRef(opened);
  const skinnedMeshRef = useRef<SkinnedMesh | null>(null);

  useBookPageAnimation({
    skinnedMeshRef,
    groupRef,
    turnedAtRef,
    lastOpenedRef,
    highlighted,
    opened,
    bookClosed,
    number,
  });

  return (
    <group {...props} ref={groupRef}>
      <primitive
        object={skinnedMesh}
        ref={skinnedMeshRef}
        position-z={-number * PAGE_DEPTH + page * PAGE_DEPTH}
      />
    </group>
  );
};

export default BookPage;
