import React, { FC } from 'react';

type PropsType = {
  title: string;
};
export const DetailInfo: FC<PropsType> = ({ title }) => {
  return <h2 className='text-2xl'>{title}</h2>;
};