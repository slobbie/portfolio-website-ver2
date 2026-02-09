import { useTexture } from '@react-three/drei';
import { useEffect, useRef } from 'react';

interface Page {
  front: string;
  back: string;
}

export const useTexturePreload = (pages: Page[]): void => {
  const hasPreloaded = useRef(false);

  useEffect(() => {
    if (hasPreloaded.current || pages.length === 0) return;

    pages.forEach((page) => {
      useTexture.preload(`/textures/${page.front}.jpg`);
      useTexture.preload(`/textures/${page.back}.jpg`);
    });

    useTexture.preload('/textures/book-cover-roughness.jpg');
    hasPreloaded.current = true;
  }, [pages]);
};
