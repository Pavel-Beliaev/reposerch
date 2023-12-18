import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { repositoriesStateSLice } from '../../../store/repositories/slice';

export const TotalCountElement: FC = () => {
  const { totalCount } = useSelector(repositoriesStateSLice);

  const totalCountRecount = totalCount > 1000 ? 1000 : totalCount;

  return (
    <p className='font-bold self-end pr-9'>
      Общее кол-во: <span className='font-normal'>{totalCountRecount}</span>
    </p>
  );
};