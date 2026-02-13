import { usePageStore } from '@/shared/store/usePageStore';

import BookPage from '@/features/experience/components/BookPage';
import { useDelayedPage } from '@/features/experience/hooks/useDelayedPage';
import { useTexturePreload } from '@/features/experience/hooks/useTexturePreload';

const Book = ({ ...props }) => {
  const { page, pages } = usePageStore();

  useTexturePreload(pages);
  const delayedPage = useDelayedPage(page);

  return (
    <group {...props} rotation-y={-Math.PI / 2}>
      {[...pages].map((pageData, index) => (
        <BookPage
          pagesLength={pages.length}
          key={index}
          page={delayedPage}
          number={index}
          opened={delayedPage > index}
          bookClosed={delayedPage === 0 || delayedPage === pages.length}
          {...pageData}
        />
      ))}
    </group>
  );
};

export default Book;
