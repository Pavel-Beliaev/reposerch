import React, { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../store/store';
import { useSelector } from 'react-redux';
import { useDebounce } from '../components/hooks/useDebounce';
import { useSearchParams } from 'react-router-dom';
import { fetchRepoSearch } from '../store/repositories/asyncActions';
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
} from '../components';
import { repositoriesStateSLice, setPage } from '../store/repositories/slice';

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
  }, []);

  const renderContent = () => {
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
  }, [debouncedSearch, page]);

  return (
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
