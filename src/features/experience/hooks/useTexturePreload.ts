import { useTexture } from '@react-three/drei';
import { useEffect, useRef } from 'react';

interface IPage {
  front: string;
  back: string;
}

export const useTexturePreload = (pages: IPage[]): void => {
  const hasPreloaded = useRef(false);

  useEffect(() => {
    if (hasPreloaded.current || pages.length === 0) return;

    pages.forEach((page) => {
      useTexture.preload(
        `${import.meta.env.BASE_URL}textures/${page.front}.jpg`,
      );
      useTexture.preload(
        `${import.meta.env.BASE_URL}textures/${page.back}.jpg`,
      );
    });

    useTexture.preload(
      `${import.meta.env.BASE_URL}textures/book-cover-roughness.jpg`,
    );
    hasPreloaded.current = true;
  }, [pages]);
};
