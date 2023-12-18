import React, { FC } from 'react';
import { Avatar } from '../Avatar';
import { InfoList } from '../InfoList';

export const Card: FC = () => {
  return (
    <div className='grid grid-cols-[auto_1fr] gap-8 auto-rows-min p-[30px] justify-items-center w-full'>
      <Avatar />
      <InfoList />
    </div>
  );
};