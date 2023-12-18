import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../components/hooks/useDebounce';
import {
  ContentList,
  Loader,
  NotFound,
  PageWrapper,
  Pagination,
  Search,
  Tablet,
  Title,
  TotalCountElement,
} from 'components';
import {
  fetchRepoSearch,
  repositoriesStateSLice,
  setPage,
  useAppDispatch,
} from 'store';

export const MainPage = () => {
  const { page, status, repositories } = useSelector(repositoriesStateSLice);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useSearchParams({ search: '' });
  const searchValue = search.get('search');
  const debouncedSearch = useDebounce(searchValue!, 800);

  const isLoading = status === 'loading';
  const isError = status === 'error';
  const isNotError = status !== 'error';

  const setQueryHandler = useCallback((value: string) => {
    setSearch({ search: value });
    dispatch(setPage(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = () => {
    // eslint-disable-next-line react/jsx-no-undef
    return !!repositories && isNotError ? <Tablet /> : <NotFound />;
  };
  useEffect(() => {
    if (isError) return;
    dispatch(
      fetchRepoSearch({
        query: debouncedSearch ? debouncedSearch : 'all',
        page: String(page),
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch, page]);

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <PageWrapper>
      <Title title={'Поиск репозиториев Github'} />
      <Search value={searchValue!} setValue={setQueryHandler} />
      <ContentList>{isLoading ? <Loader /> : renderContent()}</ContentList>
      {!!repositories && (
        <>
          <TotalCountElement />
          <Pagination />
        </>
      )}
    </PageWrapper>
  );
};
