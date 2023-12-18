import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { cardStateSlice, fetchCard, useAppDispatch } from 'store';
import {
  BackButton,
  Card,
  ContentList,
  DetailInfo,
  Loader,
  PageWrapper,
  Title,
} from 'components';

export const CardPage = () => {
  const dispatch = useAppDispatch();
  const { card, status } = useSelector(cardStateSlice);
  const { pathname } = useLocation();
  const [owner, repo] = pathname.split(/[/_]/).slice(2);
  const isLoading = status === 'loading';

  useEffect(() => {
    dispatch(
      fetchCard({
        owner: owner,
        repo: repo,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <PageWrapper>
      <div className='w-full grid grid-cols-[15%_1fr_15%] justify-items-center'>
        <BackButton />
        <Title title={card.name} />
      </div>
      <DetailInfo title={'Детальная информация'} />
      <ContentList>{isLoading ? <Loader /> : <Card />}</ContentList>
    </PageWrapper>
  );
};
