import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { cardStateSlice } from '../store/card/cardSLice';
import {
  BackButton,
  Card,
  ContentList,
  DetailInfo,
  Loader,
  PageWrapper,
  Title,
} from '../components';
import { useAppDispatch } from '../store/store';
import { fetchCard } from '../store/card/asyncActions';
import { useLocation } from 'react-router-dom';

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
