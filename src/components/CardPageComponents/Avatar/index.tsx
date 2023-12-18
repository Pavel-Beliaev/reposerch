import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { cardStateSlice } from 'store';

export const Avatar: FC = () => {
  const { card } = useSelector(cardStateSlice);

  return (
    <img
      src={card.owner.avatar_url}
      alt='avatar'
      className='w-[200px] h-[200px] rounded-full '
    />
  );
};
