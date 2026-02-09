import { useEffect, useState } from 'react';

const PAGE_TURN_DELAY_FAST = 50;
const PAGE_TURN_DELAY_SLOW = 150;
const FAST_TURN_THRESHOLD = 2;

export const useDelayedPage = (targetPage: number): number => {
  const [delayedPage, setDelayedPage] = useState(targetPage);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const animateToPage = () => {
      setDelayedPage((currentPage) => {
        if (currentPage === targetPage) {
          return currentPage;
        }

        const distance = Math.abs(targetPage - currentPage);
        const delay =
          distance > FAST_TURN_THRESHOLD
            ? PAGE_TURN_DELAY_FAST
            : PAGE_TURN_DELAY_SLOW;

        timeoutId = setTimeout(animateToPage, delay);

        return targetPage > currentPage ? currentPage + 1 : currentPage - 1;
      });
    };

    animateToPage();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [targetPage]);

  return delayedPage;
};
