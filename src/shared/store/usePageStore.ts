import { create } from 'zustand';

interface Page {
  front: string;
  back: string;
}

interface PageStore {
  page: number;
  pictures: string[];
  pages: Page[];
  setPage: (page: number) => void;
  initializePages: () => void;
}

const pictures = [
  'mind-log-main',
  'mind-log-sub',
  'ui-kit-main',
  'ui-kit-sub',
  'portal-main',
  'portal-sub',
  'pokemon-main',
  'pokemon-sub',
];

export const usePageStore = create<PageStore>((set) => ({
  page: 0,
  pictures,
  pages: [],
  setPage: (page) => set({ page }),
  initializePages: () => {
    const initialPages = [
      {
        front: 'book-cover',
        back: pictures[0],
      },
    ];

    for (let i = 1; i < pictures.length - 1; i += 2) {
      initialPages.push({
        front: pictures[i % pictures.length],
        back: pictures[(i + 1) % pictures.length],
      });
    }

    initialPages.push({
      front: pictures[pictures.length - 1],
      back: 'book-back',
    });

    set({ pages: initialPages });
  },
}));
