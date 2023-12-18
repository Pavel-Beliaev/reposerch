import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../store/store';
import {
  repositoriesStateSLice,
  setPage,
} from '../../../../store/repositories/slice';
import { DOTS, usePagination } from '../../../hooks/usePagination';
import { ArrowBlock } from '../ArrowBlock';

export const Pagination: FC = () => {
  const { totalCount, page } = useSelector(repositoriesStateSLice);
  const dispatch = useAppDispatch();
  const totalPage = Math.ceil(totalCount > 1000 ? 1000 / 10 : totalCount / 10);
  const pagination = usePagination({
    totalPages: totalPage,
    page: page,
  });
  const changePage = (num: string | number) => {
    if (typeof num === 'string') return;
    dispatch(setPage(num));
  };

  const prevPage = useCallback(() => {
    dispatch(setPage(page - 1));
  }, [page]);
  const severalPrevPages = useCallback(() => {
    dispatch(setPage(page - 9));
  }, [page]);
  const nextPage = useCallback(() => {
    dispatch(setPage(page + 1));
  }, [page]);
  const severalNextPage = useCallback(() => {
    dispatch(setPage(page + 9));
  }, [page]);

  return (
    <div className='flex items-center justify-center gap-[5px]'>
      <ArrowBlock
        totalPage={totalPage}
        arrowHandler={prevPage}
        doubleArrowHandler={severalPrevPages}
        limitRange={[1, 9]}
        isRight={false}
      />
      {pagination?.map((num, idx) => {
        if (num === DOTS) {
          return (
            <span key={idx} className='btn-pagination'>
              {num}
            </span>
          );
        }
        return (
          <button
            key={idx}
            onClick={() => changePage(num)}
            className={`btn-pagination ${num === page ? 'text-primary' : ''}`}>
            {num}
          </button>
        );
      })}
      <ArrowBlock
        totalPage={totalPage}
        arrowHandler={nextPage}
        doubleArrowHandler={severalNextPage}
        limitRange={[0, 8]}
        isRight
      />
    </div>
  );
};