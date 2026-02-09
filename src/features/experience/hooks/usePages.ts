import { useEffect } from 'react';
import { usePageStore } from '@/shared/store/usePageStore';

export const usePages = () => {
  const { pages, initializePages } = usePageStore();

  useEffect(() => {
    if (pages.length === 0) {
      initializePages();
    }
  }, [pages.length, initializePages]);

  return pages;
};
