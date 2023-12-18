import React, { FC } from 'react';

type PropsType = {
  title: string;
};
export const Title: FC<PropsType> = ({ title }) => {
  return <h1 className='font-bold text-[32px]'>{title}</h1>;
};