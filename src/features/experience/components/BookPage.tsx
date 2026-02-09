import { Object3D, SkinnedMesh } from 'three';
import { useRef } from 'react';

// import { useState } from 'react';
// import { usePageStore } from '@/shared/store/usePageStore';
import { useBookPageTextures } from '@/features/experience/hooks/useBookPageTextures';
import { useBookPageMesh } from '@/features/experience/hooks/useBookPageMesh';
import { useBookPageAnimation } from '@/features/experience/hooks/useBookPageAnimation';
import { PAGE_DEPTH } from '@/features/experience/constants/bookPageConfig';

interface BookPageProps {
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
}: BookPageProps) => {
  const [picture, picture2, pictureRoughness] = useBookPageTextures({
    front,
    back,
    number,
    pagesLength,
  });

  const skinnedMesh = useBookPageMesh({
    picture,
    picture2,
    pictureRoughness,
    number,
    pagesLength,
  });

  // const { setPage } = usePageStore();
  // const [highlighted, setHighlighted] = useState(false);
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
    <group
      {...props}
      ref={groupRef}
      // onPointerEnter={(e) => {
      //   e.stopPropagation();
      //   setHighlighted(true);
      // }}
      // onPointerLeave={(e) => {
      //   e.stopPropagation();
      //   setHighlighted(false);
      // }}
      // onClick={(e) => {
      //   e.stopPropagation();
      //   setPage(opened ? number : number + 1);
      //   setHighlighted(false);
      // }}
    >
      <primitive
        object={skinnedMesh}
        ref={skinnedMeshRef}
        position-z={-number * PAGE_DEPTH + page * PAGE_DEPTH}
      />
    </group>
  );
};

export default BookPage;
