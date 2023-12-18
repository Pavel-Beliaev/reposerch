import { useMemo } from 'react';

export const DOTS = '...';

const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

type PropsType = {
  totalPages: number;
  page: number;
};

export const usePagination = ({ totalPages, page }: PropsType) => {
  const rangePage = 3;

  return useMemo(() => {
    const totalPageNumbers = rangePage + 5;

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftRangeIndex = Math.max(page - rangePage, 1);
    const rightRangeIndex = Math.min(page + rangePage, totalPages);

    const shouldShowLeftDots = leftRangeIndex > 2;

    const shouldShowRightDots = rightRangeIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * rangePage;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * rangePage;
      let rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftRangeIndex, rightRangeIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalPages, page]);
};
