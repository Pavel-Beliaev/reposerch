import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { repositoriesStateSLice } from 'store';

export const NotFound: FC = () => {
  const { status } = useSelector(repositoriesStateSLice);
  const isError = status === 'error';
  const textError = isError
    ? 'Слишком много запросов...подождите минуту...'
    : 'Ничего не найдено ((';

  return (
    <div className='flex grow self-center justify-center'>
      <p className='font-bold text-2xl'>{textError}</p>
    </div>
  );
};
